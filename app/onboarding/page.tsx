"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Globe, ImageIcon, Upload } from "lucide-react"
import Image from "next/image"

export default function OnboardingForm() {
  const [businessName, setBusinessName] = useState("")
  const [subdomain, setSubdomain] = useState("")
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Auto-generate subdomain dari business name
  useEffect(() => {
    if (businessName) {
      const generated = businessName
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .substring(0, 20)
      setSubdomain(generated)
    }
  }, [businessName])

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setLogoPreview(e.target?.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!businessName || !subdomain) {
      alert("Please fill in all required fields")
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      router.push(`${subdomain}/dashboard`)
    }, 1200)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-2xl p-6 bg-transparent border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center text-black">
            Business Details
            <h2 className="mt-1 text-sm font-normal text-gray-600">
              Let&apos;s get your business set up
            </h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            {/* Form kiri */}
            <div className="space-y-5">
              {/* Business Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="businessName"
                  className="text-sm flex items-center gap-2 text-black"
                >
                  <Building2 className="h-4 w-4" />
                  Business Name *
                </Label>
                <Input
                  id="businessName"
                  type="text"
                  placeholder="Enter your business name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full rounded-md border border-muted-foreground/30 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>

              {/* Subdomain */}
              <div className="space-y-2">
                <Label
                  htmlFor="subdomain"
                  className="text-sm flex items-center gap-2 text-black"
                >
                  <Globe className="h-4 w-4" />
                  Subdomain *
                </Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="subdomain"
                    type="text"
                    value={subdomain}
                    onChange={(e) =>
                      setSubdomain(
                        e.target.value.toLowerCase().replace(/[^a-z0-9]/g, "")
                      )
                    }
                    className="w-full rounded-md border border-muted-foreground/30 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                  <span className="text-sm text-gray-600">.mavus.app</span>
                </div>
                <p className="text-xs text-gray-500">
                  Your dashboard will be available at{" "}
                  {subdomain || "your-subdomain"}.mavus.app
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800"
                disabled={isLoading}
              >
                {isLoading ? "Setting up..." : "Complete Setup"}
              </Button>
            </div>

            {/* Preview kanan */}
            <div className="flex flex-col items-center justify-center space-y-4 md:border-l  pl-6">
              {/* Logo Upload */}
              <div className="space-y-2 w-full text-center">
                <Label
                  htmlFor="logo-upload"
                  className="text-sm flex items-center justify-center gap-2 text-black"
                >
                  <ImageIcon className="h-4 w-4" />
                  Business Logo
                </Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="hidden"
                  id="logo-upload"
                />
                <label
                  htmlFor="logo-upload"
                  className="flex items-center justify-center h-28 w-28 border rounded-full cursor-pointer hover:bg-gray-100 transition mx-auto"
                >
                  {logoPreview ? (
                    <Image
                      src={logoPreview}
                      alt="Logo preview"
                      width={96}
                      height={96}
                      className="rounded-full object-contain"
                    />
                  ) : (
                    <Upload className="h-6 w-6 text-black" />
                  )}
                </label>
                <p className="text-xs text-gray-500">
                  Max 200x200px (logo)
                </p>
              </div>

              {/* Preview Business Card */}
              <div className="w-full rounded-lg p-3 bg-gray-100 text-center">
                <p className="text-sm text-black">
                  {businessName || "Business Name"}
                </p>
                <p className="text-xs text-gray-600">
                  {subdomain || "your-subdomain"}.mavus.app
                </p>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
