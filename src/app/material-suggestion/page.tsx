import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SuggestionForm } from "@/components/material-suggestion/SuggestionForm";

export default function MaterialSuggestionPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight">Material Suggestion Tool</h1>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Find Sustainable Alternatives</CardTitle>
          <CardDescription>
            Describe the plastic you are currently using and its application. Our AI will suggest a more sustainable alternative material.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SuggestionForm />
        </CardContent>
      </Card>
    </div>
  );
}
