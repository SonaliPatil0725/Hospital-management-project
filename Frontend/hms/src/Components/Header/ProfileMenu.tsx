import { Menu, Button, Text, rem } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons-react';

const ProfileMenu = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>

        <Menu.Item>
          <IconSettings size={14} style={{ marginRight: 8 }} />
          Settings
        </Menu.Item>

        <Menu.Item>
          <IconMessageCircle size={14} style={{ marginRight: 8 }} />
          Messages
        </Menu.Item>

        <Menu.Item>
          <IconPhoto size={14} style={{ marginRight: 8 }} />
          Gallery
        </Menu.Item>

        <Menu.Item>
          <IconSearch size={14} style={{ marginRight: 8 }} />
          Search
          <Text size="xs" color="dimmed" style={{ marginLeft: 'auto' }}>
            ⌘K
          </Text>
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>

        <Menu.Item>
          <IconArrowsLeftRight size={14} style={{ marginRight: 8 }} />
          Transfer my data
        </Menu.Item>

        <Menu.Item style={{ color: 'red' }}>
          <IconTrash size={14} style={{ marginRight: 8 }} />
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
