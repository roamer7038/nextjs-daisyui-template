import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'react-daisyui';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    glass: {
      control: {
        type: 'boolean'
      }
    },
    wide: {
      control: {
        type: 'boolean'
      }
    },
    fullWidth: {
      control: {
        type: 'boolean'
      }
    },
    responsive: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    loading: {
      control: {
        type: 'boolean'
      }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Button'
  }
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline'
  }
};

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link'
  }
};
