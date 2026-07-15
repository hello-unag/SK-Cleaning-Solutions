import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface TestimonialProps {
  name: string;
  role: string;
  company?: string;
  rating: number;
  content: string;
  initials: string;
}

export function TestimonialCard({
  name,
  role,
  company,
  rating,
  content,
  initials,
}: TestimonialProps) {
  return (
    <Card className="relative overflow-hidden h-full flex flex-col justify-between py-6">
      {/* Decorative Quote Icon in the background */}
      <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/5 pointer-events-none" />

      <CardContent className="space-y-6 pt-6">
        {/* Rating Stars */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "fill-secondary text-secondary" : "text-primary/10"
              }`}
            />
          ))}
        </div>

        {/* Content Review text */}
        <p className="text-primary/80 font-medium italic text-base leading-relaxed pl-1">
          "{content}"
        </p>

        {/* Reviewer Details */}
        <div className="flex items-center space-x-3.5 pt-2">
          <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center font-bold text-secondary text-sm border border-secondary/20 flex-shrink-0">
            {initials}
          </div>
          <div>
            <h4 className="text-sm font-bold text-primary leading-tight">{name}</h4>
            <p className="text-xs text-neutral-grey mt-0.5">
              {role} {company && `@ ${company}`}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
