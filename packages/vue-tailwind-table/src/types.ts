import {
  type AccessorFn,
  type AggregationFn,
  type Cell,
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  type ColumnOrderState,
  type ColumnPinningState,
  type ColumnSizingInfoState,
  type ColumnSizingState,
  type DeepKeys,
  type DeepValue,
  type ExpandedState,
  type FilterFn,
  type GroupingState,
  type Header,
  type HeaderGroup,
  type OnChangeFn,
  type PaginationState,
  type Row,
  type RowSelectionState,
  type SortingFn,
  type SortingState,
  type Table,
  type TableOptions,
  type TableState,
  type Updater,
  type VisibilityState,
} from "@tanstack/vue-table"
import {
  type VirtualItem,
  type Virtualizer,
  type VirtualizerOptions,
} from "@tanstack/vue-virtual"
import { progress, button } from "./styles"
import { colors } from "./colors"
export enum Size {
  dot = "dot",
  xs = "xs",
  sm = "sm",
  md = "base",
  base = "base",
  lg = "lg",
  xl = "xl",
  "2xl" = "2xl",
  "3xl" = "3xl",
  "4xl" = "4xl",
  "5xl" = "5xl",
  "6xl" = "6xl",
  "7xl" = "7xl",
  "8xl" = "8xl",
  "9xl" = "9xl",
}

export type TConfig = Record<string | number | symbol, any>

export type Strategy = "merge" | "override"

export type NestedKeyOf<ObjectType extends Record<string, any>> = {
  [Key in keyof ObjectType]: ObjectType[Key] extends Record<string, any>
    ? NestedKeyOf<ObjectType[Key]>
    : Key
}[keyof ObjectType]

export type DeepPartial<T> = Partial<{
  [P in keyof T]: DeepPartial<T[P]> | { [key: string]: string | object }
}>

type DeepKey<T, Keys extends string[]> = Keys extends [
  infer First,
  ...infer Rest,
]
  ? First extends keyof T
    ? Rest extends string[]
      ? DeepKey<T[First], Rest>
      : never
    : never
  : T

export type ExtractDeepKey<T, Path extends string[]> =
  DeepKey<T, Path> extends infer Result
    ? Result extends Record<string, any>
      ? keyof Result
      : never
    : never

export type ExtractDeepObject<T, Path extends string[]> =
  DeepKey<T, Path> extends infer Result
    ? Result extends Record<string, any>
      ? Result
      : never
    : never

export type ProgressSize = keyof typeof progress.progress.size
export type ProgressAnimation = keyof typeof progress.animation
export type ProgressColor = (typeof colors)[number]
interface AppConfig {
  [key: string]: unknown
}
export type ButtonSize =
  | keyof typeof button.size
  | ExtractDeepKey<AppConfig, ["ui", "button", "size"]>
export type ButtonColor =
  | keyof typeof button.color
  | ExtractDeepKey<AppConfig, ["ui", "button", "color"]>
  | (typeof colors)[number]
export type ButtonVariant =
  | keyof typeof button.variant
  | ExtractDeepKey<AppConfig, ["ui", "button", "variant"]>
  | NestedKeyOf<typeof button.color>
  | NestedKeyOf<ExtractDeepObject<AppConfig, ["ui", "button", "color"]>>

export interface Link extends HTMLLinkElement {
  active?: boolean
  exact?: boolean
  exactQuery?: boolean
  exactMatch?: boolean
  inactiveClass?: string
}

export interface Button extends HTMLButtonElement {
  block?: boolean
  label?: string
  loading?: boolean
  padded?: boolean
  size?: ButtonSize
  color?: ButtonColor
  variant?: ButtonVariant
  icon?: string
  loadingIcon?: string
  leadingIcon?: string
  trailingIcon?: string
  trailing?: boolean
  leading?: boolean
  to?: string | object
  target?: string
  square?: boolean
  truncate?: boolean
}
