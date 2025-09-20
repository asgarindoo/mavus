"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

// Schema validasi pakai Zod
const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

type SignInFormData = z.infer<typeof signInSchema>

export default function SignInPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmit = (data: SignInFormData) => {
    console.log("Sign in data:", data)
    setIsLoading(true)

    // Simulasi login
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard") // langsung ke dashboard
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="text-3xl font-semibold text-foreground">
            <Image
              src="/mavus_logo_lanescape.png"
              alt="Logo"
              width={100}
              height={100}
              className="mx-auto"
            />
          </Link>
          <h1 className="mt-4 text-md text-foreground">Welcome back</h1>
          <p className="text-sm font-normal text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        {/* Google Sign In */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-muted-foreground/30 rounded-md py-2.5 hover:bg-muted transition"
        >
          <span className="text-sm text-foreground">Sign in with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-muted-foreground/20" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-muted-foreground/20" />
        </div>

        {/* Sign In Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm text-foreground mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full rounded-md border border-muted-foreground/30 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm text-foreground mb-1">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full rounded-md border border-muted-foreground/30 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="********"
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-primary text-primary-foreground py-2.5 hover:opacity-90 transition"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm font-normal text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="text-foreground hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
