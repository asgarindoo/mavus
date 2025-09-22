'use server'

import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { rootDomain, protocol } from '@/lib/utils';


export async function createTenantAction(
    prevState: { success: boolean; error: string },
    formData: FormData

) {
    const businessName = formData.get("businessName") as string
    const subdomain = (formData.get("subdomain") as string).toLowerCase()
    const logo = formData.get("logo") as File | null

    if (!businessName || !subdomain) {
        return {
            success: false,
            error: "Business name and subdomain are required"
        }
    }

    const sanitized = subdomain.replace(/[^a-z0-9]/g, "")
    if (sanitized !== subdomain) {
        return {
            success: false,
            error: "Subdomain can only contain lowercase letters and numbers"
        }
    }

    const existing = await prisma.tenant.findUnique({
        where: {subdomain}
    })

    if (existing) {
        return {
            success: false,
            error: "Subdomain is already taken"
        }
    }

    let logoUrl: string | null = null
    if(logo) {
        logoUrl =URL.createObjectURL(logo)
    }

    const tenant = await prisma.tenant.create({
        data: {
            name: businessName,
            subdomain: sanitized,
            logo: logoUrl,
        }
    })
    redirect(`${protocol}://${tenant.subdomain}.${rootDomain}/dashboard`)
}

