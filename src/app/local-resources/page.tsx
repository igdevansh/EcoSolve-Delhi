import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockLocalResources } from "@/lib/mockData";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Clock, Phone } from "lucide-react";

export default function LocalResourcesPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight">Local Eco-Resources</h1>
      <p className="text-muted-foreground">
        Find local recycling centers, eco-friendly shops, and community programs near you.
      </p>
      <div className="space-y-6">
        {mockLocalResources.map((resource) => (
          <Card key={resource.id} className="shadow-lg overflow-hidden">
            <CardHeader className="bg-secondary/20">
              <div className="flex items-center gap-3">
                <resource.icon className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-xl">{resource.name}</CardTitle>
                  <CardDescription className="text-sm text-primary font-medium">{resource.type}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-3">
              <p className="text-sm text-foreground/90">{resource.details}</p>
              <div>
                <p className="text-sm"><strong>Address:</strong> {resource.address}</p>
                {resource.operatingHours && (
                  <p className="text-sm flex items-center gap-1.5 mt-1">
                    <Clock className="h-4 w-4 text-muted-foreground" /> 
                    <strong>Hours:</strong> {resource.operatingHours}
                  </p>
                )}
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {resource.website && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={resource.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Website
                    </Link>
                  </Button>
                )}
                {resource.contact && resource.contact.includes('@') && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`mailto:${resource.contact}`}>
                      <Mail className="mr-2 h-4 w-4" /> Email
                    </Link>
                  </Button>
                )}
                {resource.contact && !resource.contact.includes('@') && (
                   <Button variant="outline" size="sm" asChild>
                    <Link href={`tel:${resource.contact}`}>
                      <Phone className="mr-2 h-4 w-4" /> Call
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
