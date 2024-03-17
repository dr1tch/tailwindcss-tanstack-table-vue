<template>
  <div :class="ui.wrapper" v-bind="$attrs">
    <table :class="[ui.base, ui.divide]">
      <thead :class="ui.thead">
        <tr :class="ui.tr.base">
          <th v-if="modelValue" scope="col" :class="ui.checkbox.padding">
            <checkbox
              :model-value="indeterminate || selected.length === rows.length"
              :indeterminate="indeterminate"
              aria-label="Select all"
              @change="onChange"
            />
          </th>

          <th
            v-for="(column, index) in columns"
            :key="index"
            scope="col"
            :class="[
              ui.th.base,
              ui.th.padding,
              ui.th.color,
              ui.th.font,
              ui.th.size,
            ]"
          >
            <slot :name="`${column.key}-header`" :column="column">
              <!-- :sort="sort"
              :on-sort="onSort" -->
              <!-- <UButton
                v-if="column.sortable"
                v-bind="{ ...(ui.default.sortButton || {}), ...sortButton }"
                :icon="
                  !sort.column || sort.column !== column.key
                    ? sortButton.icon || ui.default.sortButton.icon
                    : sort.direction === 'asc'
                      ? sortAscIcon
                      : sortDescIcon
                "
                :label="column[columnAttribute]"
                @click="onSort(column)"
              /> -->
              <span>{{ column.label }}</span>
            </slot>
          </th>
        </tr>

        <!-- <tr v-if="loading && progress">
          <td :colspan="0" :class="ui.progress.wrapper">
            <UProgress
              v-bind="{ ...(ui.default.progress || {}), ...progress }"
              size="2xs"
            />
          </td>
        </tr> -->
      </thead>
      <tbody :class="ui.tbody">
        <!-- <tr v-if="loadingState && loading && !rows.length">
          <td :colspan="columns.length + (modelValue ? 1 : 0)">
            <slot name="loading-state">
              <div :class="ui.loadingState.wrapper">
                <UIcon
                  v-if="loadingState.icon"
                  :name="loadingState.icon"
                  :class="ui.loadingState.icon"
                  aria-hidden="true"
                />
                <p :class="ui.loadingState.label">
                  {{ loadingState.label }}
                </p>
              </div>
            </slot>
          </td>
        </tr> -->

        <!-- <tr v-else-if="emptyState && !rows.length">
          <td :colspan="columns.length + (modelValue ? 1 : 0)">
            <slot name="empty-state">
              <div :class="ui.emptyState.wrapper">
                <UIcon
                  v-if="emptyState.icon"
                  :name="emptyState.icon"
                  :class="ui.emptyState.icon"
                  aria-hidden="true"
                />
                <p :class="ui.emptyState.label">
                  {{ emptyState.label }}
                </p>
              </div>
            </slot>
          </td>
        </tr> -->

        <tr
          v-for="(row, index) in rows"
          :key="index"
          :class="[ui.tr.base, $attrs.onSelect && ui.tr.active]"
        >
          <!-- row?.class,
          isSelected(row) && ui.tr.selected, -->
          <!-- @click="() => onSelect(row)" -->
          <!-- <td v-if="modelValue" :class="ui.checkbox.padding">
              <UCheckbox
                v-model="selected"
                :value="row"
                aria-label="Select row"
                @click.stop
              />
            </td> -->

          <td
            v-for="(column, subIndex) in columns"
            :key="subIndex"
            :class="[
              ui.td.base,
              ui.td.padding,
              ui.td.color,
              ui.td.font,
              ui.td.size,
            ]"
          >
            <!-- row[column.key]?.class, -->
            <slot
              :name="`${column.key}-data`"
              :column="column"
              :row="row"
              :index="index"
              :get-row-data="
                (defaultValue: any) => getRowData(row, column.key, defaultValue)
              "
            >
              {{ getRowData(row, column.key) }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, defineProps, toRaw, toRef, useAttrs } from "vue"
import { defu } from "defu"
import { upperFirst } from "scule"
import { useVModel } from "@vueuse/core"
import table from "../styles/table"
import { defaultSort, get, mergeConfig } from "@/utils"
import { Button, ProgressAnimation, ProgressColor, Strategy } from "@/types"
import { useUI } from "@/composables/useUi"
interface User {
  name: string
  title: string
  email: string
  role: string
}

const $attrs = useAttrs()
const emits = defineEmits(["update:modelValue", "update:sort", "update:select"])

const props = defineProps({
  modelValue: {
    type: Array,
    default: null,
  },
  by: [String, Function],
  rows: {
    type: Array as PropType<{ [key: string]: any }[]>,
    default: () => [],
  },
  columns: {
    type: Array as PropType<
      {
        key: string
        sortable?: boolean
        sort?: (a: any, b: any, direction: "asc" | "desc") => number
        direction?: "asc" | "desc"
        class?: string
        [key: string]: any
      }[]
    >,
    default: null,
  },
  columnAttribute: {
    type: String,
    default: "label",
  },
  sort: {
    type: Object as PropType<{ column: string; direction: "asc" | "desc" }>,
    default: () => ({}),
  },
  sortMode: {
    type: String as PropType<"manual" | "auto">,
    default: "auto",
  },
  sortButton: {
    type: Object as PropType<Button>,
    // default: () => config.default.sortButton as Button,
    default: null,
  },
  sortAscIcon: {
    type: String,
    // default: () => config.default.sortAscIcon,
    default: null,
  },
  sortDescIcon: {
    type: String,
    // default: () => config.default.sortDescIcon,
    default: null,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingState: {
    type: Object as PropType<{ icon: string; label: string }>,
    // default: () => config.default.loadingState,
    default: null,
  },
  emptyState: {
    type: Object as PropType<{ icon: string; label: string }>,
    // default: () => config.default.emptyState,
    default: null,
  },
  progress: {
    type: Object as PropType<{
      color: ProgressColor
      animation: ProgressAnimation
    }>,
    // default: () => config.default.progress,
    default: null,
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: () => "",
  },
  ui: {
    type: Object as PropType<Partial<typeof config> & { strategy?: Strategy }>,
    default: () => ({}),
  },
})

const config = mergeConfig("merge", props.ui, table)

const { ui, attrs } = useUI(
  "table",
  toRef(props, "ui"),
  config,
  toRef(props, "class")
)

const columns = computed(
  () =>
    props.columns ??
    Object.keys(props.rows[0] ?? {}).map((key) => ({
      key,
      label: upperFirst(key),
      sortable: false,
      class: undefined,
      sort: defaultSort,
    }))
)

const sort = useVModel(props, "sort", emits, {
  passive: true,
  defaultValue: defu({}, props.sort, { column: null, direction: "asc" } as {
    column: string | null
    direction: "asc" | "desc"
  }),
})

const savedSort = { column: sort.value.column, direction: null }

const rows = computed(() => {
  if (!sort.value?.column || props.sortMode === "manual") {
    return props.rows
  }

  const { column, direction } = sort.value

  return props.rows.slice().sort((a, b) => {
    const aValue = get(a, column)
    const bValue = get(b, column)

    const sort =
      columns.value.find((col) => col.key === column)?.sort ?? defaultSort

    return sort(aValue, bValue, direction)
  })
})

const selected = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits("update:modelValue", value)
  },
})
const indeterminate = computed(
  () =>
    selected.value &&
    selected.value.length > 0 &&
    selected.value.length < props.rows.length
)

const emptyState = computed(() => {
  if (props.emptyState === null) return null
  return { ...ui.value.default.emptyState, ...props.emptyState }
})

const loadingState = computed(() => {
  if (props.loadingState === null) return null
  return { ...ui.value.default.loadingState, ...props.loadingState }
})

function compare(a: any, z: any) {
  if (typeof props.by === "string") {
    const property = props.by as unknown as any
    return a?.[property] === z?.[property]
  }
  return a === z
}

function isSelected(row: Object) {
  if (!props.modelValue) {
    return false
  }

  return selected.value.some((item) => compare(toRaw(item), toRaw(row)))
}

function onSort(column: { key: string; direction?: "asc" | "desc" }) {
  if (sort.value.column === column.key) {
    const direction =
      !column.direction || column.direction === "asc" ? "desc" : "asc"

    if (sort.value.direction === direction) {
      sort.value = defu({}, savedSort, {
        column: null,
        direction: "asc" as "asc" | "desc",
      })
    } else {
      sort.value = {
        column: sort.value.column,
        direction: sort.value.direction === "asc" ? "desc" : "asc",
      }
    }
  } else {
    sort.value = { column: column.key, direction: column.direction || "asc" }
  }
}

function onSelect(row: Object) {
  if (!$attrs.onSelect) {
    return
  }

  // @ts-ignore
  $attrs.onSelect(row)
}

function selectAllRows() {
  props.rows.forEach((row) => {
    // If the row is already selected, don't select it again
    if (isSelected(row)) {
      return
    }

    // @ts-ignore
    selected.value.push(row)
  })
}

function onChange(event: any) {
  if (event.target.checked) {
    selectAllRows()
  } else {
    selected.value = []
  }
}

function getRowData(
  row: Object,
  rowKey: string | string[],
  defaultValue: any = ""
) {
  return get(row, rowKey, defaultValue)
}
</script>
