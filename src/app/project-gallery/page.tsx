import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { mockProjects } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { UserCircle } from "lucide-react";

export default function ProjectGalleryPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight">Eco-Innovations Gallery</h1>
      <p className="text-muted-foreground">
        Discover inspiring projects and initiatives aimed at reducing plastic waste and promoting sustainability.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-48">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={project.dataAiHint || "eco project"}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="flex items-center text-sm text-muted-foreground pt-1">
                <UserCircle className="h-4 w-4 mr-1.5" />
                By: {project.author}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground/80 line-clamp-3">{project.description}</p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 pt-4">
              {project.tags?.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
