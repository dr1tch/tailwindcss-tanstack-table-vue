import { Meta, StoryObj } from "@storybook/vue3"
import CopyToClipboardButton from "../components/buttons/CopyToClipboardButton.vue"

const meta = {
  title: "CopyToClipboardButton",
  component: CopyToClipboardButton,
}

export default meta

// type Story = StoryObj<typeof meta>

export const Default = {
  template: `<CopyToClipboardButton />`,
}
