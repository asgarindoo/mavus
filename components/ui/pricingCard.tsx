// components/ui/pricing-card.tsx
import Link from "next/link"
import { Check } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PricingCardProps {
  title: string
  description: string
  price: string
  period?: string
  features: string[]
  buttonText: string
  buttonLink: string
  highlight?: boolean
  highlightLabel?: string
}

export function PricingCard({
  title,
  description,
  price,
  period = "/month",
  features,
  buttonText,
  buttonLink,
  highlight = false,
  highlightLabel = "Most Popular",
}: PricingCardProps) {
  return (
    <Card className={`relative flex flex-col h-full ${highlight ? "border-foreground" : "border-border"} bg-card`}>
      {highlight && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-foreground text-primary-foreground px-3 py-1 text-xs font-light rounded-md">
            {highlightLabel}
          </span>
        </div>
      )}
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-2xl font-light text-card-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground font-light">{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-light text-card-foreground">{price}</span>
          <span className="text-muted-foreground font-light">{period}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <Check className="h-4 w-4 text-foreground" />
              <span className="text-sm font-light text-card-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild className="w-full font-light">
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
