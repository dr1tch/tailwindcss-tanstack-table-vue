import { BaseColor, Size } from "@/types"

export const AvatarSizes = [
  Size.xs,
  Size.sm,
  Size.md,
  Size.lg,
  Size.xl,
  Size["2xl"],
] as const

export const BadgeSizes = [
  Size.dot,
  Size.xs,
  Size.sm,
  Size.md,
  Size.lg,
  Size.xl,
] as const

export const BadgeColors = [
  BaseColor.warning,
  BaseColor.error,
  BaseColor.info,
  BaseColor.success,
  BaseColor.primary,
  BaseColor.default,
] as const
