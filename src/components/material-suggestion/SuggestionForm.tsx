"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useTransition } from "react";
import { suggestAlternativeMaterials, type MaterialSuggestionOutput } from "@/ai/flows/material-suggestion";
import { Loader2, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  plasticType: z.string().min(2, {
    message: "Plastic type must be at least 2 characters.",
  }),
  application: z.string().min(5, {
    message: "Application description must be at least 5 characters.",
  }),
  desiredProperties: z.string().optional(),
});

export function SuggestionForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<MaterialSuggestionOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plasticType: "",
      application: "",
      desiredProperties: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setError(null);
    setResult(null);
    startTransition(async () => {
      try {
        const suggestion = await suggestAlternativeMaterials(values);
        setResult(suggestion);
      } catch (e) {
        setError("Failed to get suggestion. Please try again.");
        console.error(e);
      }
    });
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="plasticType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Plastic Type</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., PET, HDPE, Polystyrene" {...field} />
                </FormControl>
                <FormDescription>
                  Specify the type of plastic you are currently using.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="application"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Application / Use Case</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., Disposable water bottles, food packaging, children's toys"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Describe how this plastic is being used.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="desiredProperties"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Desired Properties (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., Waterproof, durable, heat-resistant, transparent"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  List any specific properties the alternative material should have.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending} className="bg-primary hover:bg-primary/90">
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Get Suggestion
          </Button>
        </form>
      </Form>

      {error && (
        <Alert variant="destructive" className="mt-6">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card className="mt-6 bg-secondary/30 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              AI Material Suggestion
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-primary">Alternative Material:</h3>
              <p className="text-md">{result.alternativeMaterial}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">Reasoning:</h3>
              <p className="text-md whitespace-pre-line">{result.reasoning}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
