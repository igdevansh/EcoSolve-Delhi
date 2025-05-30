
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from "recharts";
import { mockWasteMetrics, mockWasteByTypeData, mockReductionProgressData } from "@/lib/mockData";
import type { WasteData, ChartDataPoint } from "@/lib/types";
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
  const [wasteMetrics, setWasteMetrics] = useState<WasteData[]>(mockWasteMetrics);
  const [wasteByTypeData, setWasteByTypeData] = useState<ChartDataPoint[]>(mockWasteByTypeData);
  const [reductionProgressData, setReductionProgressData] = useState<{ name: string, saved: number, target: number }[]>(mockReductionProgressData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Simulate updates for waste metrics
      setWasteMetrics(prevMetrics =>
        prevMetrics.map(metric => {
          let newValue = metric.value;
          let newChange = metric.change;
          if (metric.id === '1' && typeof metric.value === 'number') { // Monthly Plastic Waste
            const randomFactor = (Math.random() - 0.5) * 50; // Fluctuate by up to +/- 25kg
            newValue = Math.max(500, Math.round(metric.value + randomFactor));
            newChange = `${randomFactor > 0 ? '+' : ''}${Math.round(randomFactor / metric.value * 100)}%`;
          } else if (metric.id === '2' && typeof metric.value === 'string') { // Recycling Rate
            const currentValue = parseFloat(metric.value);
            const randomFactor = (Math.random() - 0.5) * 2; // Fluctuate by up to +/- 1%
            newValue = Math.min(100, Math.max(0, parseFloat((currentValue + randomFactor).toFixed(1)))).toString();
            newChange = `${randomFactor > 0 ? '+' : ''}${randomFactor.toFixed(1)}%`;
          } else if (metric.id === '3' && typeof metric.value === 'number') { // Alternatives Implemented
             newValue = metric.value + (Math.random() > 0.8 ? 1 : 0); // Occasionally increment
          } else if (metric.id === '4' && typeof metric.value === 'string') { // Reduction Goal Progress
            const currentValue = parseFloat(metric.value);
            const randomFactor = (Math.random()) * 0.5; // Fluctuate by up to +/- 0.5%
            newValue = Math.min(100, Math.max(0, parseFloat((currentValue + randomFactor).toFixed(1)))).toString();
          }
          return { ...metric, value: newValue, change: newChange };
        })
      );

      // Simulate updates for waste by type data
      setWasteByTypeData(prevData =>
        prevData.map(item => ({
          ...item,
          value: Math.max(5, Math.round(item.value + (Math.random() - 0.5) * 5)), // Fluctuate by up to +/- 2.5
        }))
      );

      // Simulate updates for reduction progress data (last month)
      setReductionProgressData(prevData => {
        const newData = [...prevData];
        if (newData.length > 0) {
          const lastMonth = newData[newData.length - 1];
          lastMonth.saved = Math.max(0, Math.round(lastMonth.saved + (Math.random() - 0.4) * 10)); // Fluctuate, tend to increase
          if (lastMonth.saved > lastMonth.target) lastMonth.saved = lastMonth.target + Math.floor(Math.random() * 5); // Can slightly exceed target
        }
        return newData;
      });

    }, 3000); // Update every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight">EcoSolve Dashboard</h1>
      
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {wasteMetrics.map((metric) => (
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
                <Pie data={wasteByTypeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                  {wasteByTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}-${entry.name}`} fill={entry.fill || chartConfigWasteType[entry.name as keyof typeof chartConfigWasteType]?.color || "hsl(var(--muted))"} />
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
              <LineChart data={reductionProgressData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
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
