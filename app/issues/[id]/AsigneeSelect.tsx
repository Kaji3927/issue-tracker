"use client";

import { Select } from "@radix-ui/themes";

const AsigneeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Asign..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestion</Select.Label>
          <Select.Item value="1">Mosh Hamedani</Select.Item>
        </Select.Group>
      </Select.Content>
      AsigneeSelect
    </Select.Root>
  );
};

export default AsigneeSelect;
