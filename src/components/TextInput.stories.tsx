import { Meta, StoryObj } from '@storybook/react'
import { EnvelopeSimple } from 'phosphor-react'
import { TextInput, TextInputRootProps } from "./TextInput";

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <EnvelopeSimple />
            </TextInput.Icon>,
            <TextInput.Input
                placeholder='Type your e-mail address'
            />],
        placeholder: 'Type your e-mail address'
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {
}
export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input
            placeholder='Type your e-mail address'
        />
    }
}