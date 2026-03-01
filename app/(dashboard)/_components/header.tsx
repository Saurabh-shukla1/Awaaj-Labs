import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { ThemeToggle } from '@/components/ui/themeToggle'
import { cn } from '@/lib/utils'
import { Headphones, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Header = ({ className, title }: { className?: string, title?: string }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b px-4 py-4",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h1 className="text-lg tracking-tight font-semibold">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" asChild>
          <Link href="mailto:feedback@awaaj.com">
            <ThumbsUp />
            <span className="hidden lg:block">Feedback</span>
          </Link>
        </Button>

        <Button variant="outline" size="sm" asChild>
          <Link href="mailto:feedback@awaaj.com">
            <Headphones />
            <span className="hidden lg:block">Need help?</span>
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
}
