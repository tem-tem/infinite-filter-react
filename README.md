# Infinite Filter Component for React (WIP)

### Usage

`npm install infinite-filter-react`

```jsx
  const [selectedOptions, setSelectedOptions] = useState([]);

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
    </>
  )
```