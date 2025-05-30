import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { BarChart, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import { mockWasteMetrics, mockWasteByTypeData, mockReductionProgressData } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

const chartConfigWasteType = {
  value: {
    label: "Percentage",
  },
  PET: {
    label: "PET",
    color: "hsl(var(--chart-1))",
  },
  HDPE: {
    label: "HDPE",
    color: "hsl(var(--chart-2))",
  },
  PVC: {
    label: "PVC",
    color: "hsl(var(--chart-3))",
  },
  LDPE: {
    label: "LDPE",
    color: "hsl(var(--chart-4))",
  },
  Other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies import("@/components/ui/chart").ChartConfig;

const chartConfigReduction = {
  saved: {
    label: "Plastic Saved (kg)",
    color: "hsl(var(--chart-1))",
  },
  target: {
    label: "Target Saving (kg)",
    color: "hsl(var(--chart-2))",
  },
} satisfies import("@/components/ui/chart").ChartConfig;


export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight">EcoSolve Dashboard</h1>
      
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mockWasteMetrics.map((metric) => (
          <Card key={metric.id} className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.metric}</CardTitle>
              {metric.icon && <metric.icon className="h-5 w-5 text-muted-foreground" />}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {metric.value}
                {metric.unit && <span className="text-sm font-normal text-muted-foreground ml-1">{metric.unit}</span>}
              </div>
              {metric.change && (
                <p className="text-xs text-muted-foreground flex items-center">
                  {metric.change.startsWith('+') ? <TrendingUp className="h-4 w-4 mr-1 text-green-500" /> : <TrendingDown className="h-4 w-4 mr-1 text-red-500" />}
                  {metric.change} from last month
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Plastic Waste by Type</CardTitle>
            <CardDescription>Breakdown of commonly found plastic types in local waste.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfigWasteType} className="mx-auto aspect-square max-h-[300px]">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie data={mockWasteByTypeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                  {mockWasteByTypeData.map((entry) => (
                    <Cell key={`cell-${entry.name}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartLegend content={<ChartLegendContent nameKey="name" />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Waste Reduction Progress</CardTitle>
            <CardDescription>Monthly progress towards plastic waste reduction targets (in kg).</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfigReduction} className="h-[300px] w-full">
              <LineChart data={mockReductionProgressData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis tickLine={false} axisLine={false} tickMargin={8}/>
                <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line type="monotone" dataKey="saved" stroke="var(--color-saved)" strokeWidth={2} dot={{ r: 4, fill: "var(--color-saved)" }} activeDot={{r: 6}}/>
                <Line type="monotone" dataKey="target" stroke="var(--color-target)" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4, fill: "var(--color-target)" }} activeDot={{r: 6}} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
