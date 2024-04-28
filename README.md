# Infinite Filter Component for React (WIP)

### Usage

install
`npm install infinite-filter-react`

import
```jsx
import { InfiniteFilter } from "infinite-filter-react";
import "infinite-filter-react/src/style/index.css";
```

demo:
```jsx
"use client";
import { InfiniteFilter } from "infinite-filter-react";
import "infinite-filter-react/src/style/index.css";
import Link from "next/link";
import React, { useState } from "react";

const soda = [
  { label: 'Coca Cola', value: 'coca-cola' },
  { label: 'Pepsi', value: 'pepsi' },
  { label: 'Dr. Pepper', value: 'dr-pepper' },
  { label: 'Sprite', value: 'sprite' },
  { label: 'Mountain Dew', value: 'mountain-dew' },
  { label: 'Fanta', value: 'fanta' },
  { label: '7 Up', value: '7-up' },
  { label: 'A&W Root Beer', value: 'a-w-root-beer' },
  { label: 'Barq\'s Root Beer', value: 'barqs-root-beer' },
  { label: 'Canada Dry', value: 'canada-dry' },
];

const juice = [
  { label: 'Apple Juice', value: 'apple-juice' },
  { label: 'Orange Juice', value: 'orange-juice' },
  { label: 'Grape Juice', value: 'grape-juice' },
  { label: 'Cranberry Juice', value: 'cranberry-juice' },
  { label: 'Pineapple Juice', value: 'pineapple-juice' },
  { label: 'Tomato Juice', value: 'tomato-juice' },
];

const water = [
  { label: 'Dasani', value: 'dasani' },
  { label: 'Aquafina', value: 'aquafina' },
  { label: 'Fiji', value: 'fiji' },
  { label: 'Evian', value: 'evian' },
  { label: 'Smart Water', value: 'smart-water' },
];

export default function Demo() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [lists, setLists] = useState([soda, juice, water]);

  const handleApplyClick = (selectedOptions: []) => {
    setSelectedOptions(selectedOptions);
  }

  const handleSelectClick = (selectedOption: any) => {
    console.log(selectedOption);
  }

  const handleClearClick = () => {
    setSelectedOptions([]);
  }

  return (
    <>
      <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <h1>Infinite Filter Demo</h1>
        <Link href="https://github.com/tem-tem/infinite-filter-react">Github</Link>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400, width: 300 }}>
            <InfiniteFilter
              lists={lists}
              toggleLabel="Filter Beverages"
              toggleLabelExpanded="Filter Beverages"
              onApply={handleApplyClick}
              onSelect={handleSelectClick}
              onClear={handleClearClick}
            />
        </div>
        <div>
          Selected options:
        </div>
        <div>
          {(selectedOptions || [])?.map((option: any) => (
            <div key={option.value}>
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

```