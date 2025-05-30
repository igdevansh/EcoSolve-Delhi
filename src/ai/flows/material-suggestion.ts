'use server';
/**
 * @fileOverview An AI agent for suggesting alternative materials based on plastic usage.
 *
 * - suggestAlternativeMaterials - A function that suggests alternative materials.
 * - MaterialSuggestionInput - The input type for the suggestAlternativeMaterials function.
 * - MaterialSuggestionOutput - The return type for the suggestAlternativeMaterials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MaterialSuggestionInputSchema = z.object({
  plasticType: z.string().describe('The type of plastic being used.'),
  application: z.string().describe('The application or use case of the plastic.'),
  desiredProperties: z
    .string()
    .optional()
    .describe('Optional: Desired properties of the alternative material.'),
});
export type MaterialSuggestionInput = z.infer<typeof MaterialSuggestionInputSchema>;

const MaterialSuggestionOutputSchema = z.object({
  alternativeMaterial: z.string().describe('The suggested alternative material.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the material suggestion, including its benefits and drawbacks.'),
});
export type MaterialSuggestionOutput = z.infer<typeof MaterialSuggestionOutputSchema>;

export async function suggestAlternativeMaterials(
  input: MaterialSuggestionInput
): Promise<MaterialSuggestionOutput> {
  return suggestAlternativeMaterialsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'materialSuggestionPrompt',
  input: {schema: MaterialSuggestionInputSchema},
  output: {schema: MaterialSuggestionOutputSchema},
  prompt: `You are an expert in sustainable materials and their applications.

  Based on the user's input about their current plastic usage, suggest an alternative, sustainable material.
  Provide a clear and concise reasoning for your suggestion, including the benefits and drawbacks of the alternative material.

  Plastic Type: {{{plasticType}}}
  Application: {{{application}}}
  Desired Properties (optional): {{{desiredProperties}}}
  `,
});

const suggestAlternativeMaterialsFlow = ai.defineFlow(
  {
    name: 'suggestAlternativeMaterialsFlow',
    inputSchema: MaterialSuggestionInputSchema,
    outputSchema: MaterialSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
