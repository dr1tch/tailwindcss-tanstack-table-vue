import type { Meta, StoryObj } from "@storybook/vue3"
import { faker } from "@faker-js/faker"
import Table from "../components/Table.vue"
import { computed, ref } from "vue"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Example/Table",
  component: Table,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
const columns = [
  {
    key: "id",
    label: "#",
    sortable: true,
  },
  {
    key: "title",
    label: "Title",
    sortable: true,
  },
  {
    key: "email",
    label: "Email",
    sortable: true,
  },
  {
    key: "completed",
    label: "Status",
    sortable: true,
  },
  {
    key: "actions",
    label: "Actions",
    sortable: false,
  },
]
// Actions
const actions = [
  [
    {
      key: "completed",
      label: "Completed",
      icon: "i-heroicons-check",
    },
  ],
  [
    {
      key: "uncompleted",
      label: "In Progress",
      icon: "i-heroicons-arrow-path",
    },
  ],
]

// Filters
const todoStatus = [
  {
    key: "uncompleted",
    label: "In Progress",
    value: false,
  },
  {
    key: "completed",
    label: "Completed",
    value: true,
  },
]

const users = []
const roles = ["Admin", "User", "Guest"]
const completed = [false, true]
for (let i = 0; i < 10; i++) {
  users.push({
    id: faker.random.numeric(),
    title: faker.name.jobTitle(),
    email: faker.internet.email(),
    completed: completed[true],
    action: faker.name.jobTitle(),
  })
}
const Template = (args: any) => ({
  components: { Table },
  setup() {
    const columns = [
      {
        key: "id",
        label: "#",
        sortable: true,
      },
      {
        key: "title",
        label: "Title",
        sortable: true,
      },
      {
        key: "completed",
        label: "Status",
        sortable: true,
      },
      {
        key: "actions",
        label: "Actions",
        sortable: false,
      },
    ]

    const selectedColumns = ref(columns)
    const columnsTable = computed(() =>
      columns.filter((column) => selectedColumns.value.includes(column))
    )

    // Selected Rows
    const selectedRows = ref([])

    function select(row) {
      const index = selectedRows.value.findIndex((item) => item.id === row.id)
      if (index === -1) {
        selectedRows.value.push(row)
      } else {
        selectedRows.value.splice(index, 1)
      }
    }

    // Actions
    const actions = [
      [
        {
          key: "completed",
          label: "Completed",
          icon: "i-heroicons-check",
        },
      ],
      [
        {
          key: "uncompleted",
          label: "In Progress",
          icon: "i-heroicons-arrow-path",
        },
      ],
    ]

    // Filters
    const todoStatus = [
      {
        key: "uncompleted",
        label: "In Progress",
        value: false,
      },
      {
        key: "completed",
        label: "Completed",
        value: true,
      },
    ]

    const search = ref("")
    const selectedStatus = ref([])
    const searchStatus = computed(() => {
      if (selectedStatus.value?.length === 0) {
        return ""
      }

      if (selectedStatus?.value?.length > 1) {
        return `?completed=${selectedStatus.value[0].value}&completed=${selectedStatus.value[1].value}`
      }

      return `?completed=${selectedStatus.value[0].value}`
    })

    const resetFilters = () => {
      search.value = ""
      selectedStatus.value = []
    }

    // Pagination
    const sort = ref({ column: "id", direction: "asc" as const })
    const page = ref(1)
    const pageCount = ref(10)
    const pageTotal = ref(200) // This value should be dynamic coming from the API
    const pageFrom = computed(() => (page.value - 1) * pageCount.value + 1)
    const pageTo = computed(() =>
      Math.min(page.value * pageCount.value, pageTotal.value)
    )

    // Data
    // const users = fetch(
    //   `https://jsonplaceholder.typicode.com/todos${searchStatus.value}`
    //   // {
    //   //   q: search.value,
    //   //   _page: page.value,
    //   //   _limit: pageCount.value,
    //   //   _sort: sort.value.column,
    //   //   _order: sort.value.direction,
    //   // }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //     return data
    //   })
    return { args, columns, actions, todoStatus, users }
  },
  template: `<Table v-bind="args" :columns="columns" :actions="actions" :filters="filters" :rows="users" />`,
})
export const Primary: Story = Template.bind({})
Primary.args = {
  columns,
  actions,
  filters: {
    todoStatus,
  },
  users,
  modelValue: ["id", "title", "email", "completed"],
}
