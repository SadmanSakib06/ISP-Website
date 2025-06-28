import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const AvatarPrimitive = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot> & VariantProps<typeof avatarVariants>
>(({ className, children, ...props }, ref) => (
  <Slot className={cn(avatarVariants(), className)} ref={ref} {...props}>
    {children}
  </Slot>
))
AvatarPrimitive.displayName = "Avatar"

const avatarVariants = cva("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", {
  variants: {
    size: {
      sm: "h-8 w-8",
      lg: "h-12 w-12",
    },
  },
  defaultVariants: {
    size: "sm",
  },
})

const AvatarImage = React.forwardRef<React.ElementRef<"img">, React.ComponentPropsWithoutRef<"img">>(
  ({ className, ...props }, ref) => (
    <img className={cn("aspect-square h-full w-full object-cover", className)} ref={ref} {...props} />
  ),
)
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  ({ className, ...props }, ref) => (
    <Slot
      className={cn(
        "absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted text-muted-foreground",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
)
AvatarFallback.displayName = "AvatarFallback"

const AvatarInitials = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  ({ className, ...props }, ref) => (
    <Slot
      className={cn(
        "absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full text-muted-foreground",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
)
AvatarInitials.displayName = "AvatarInitials"

export { AvatarPrimitive as Avatar, AvatarImage, AvatarFallback, AvatarInitials }
