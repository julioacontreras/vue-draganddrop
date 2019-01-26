# Drag and Drop for Vue

Drag and drop.

## Usage

### Drag

index: Key element in array.

data: information you need sent to droparea.

selectorDropZone: Area drop element.

```html
<div v-draggable="{dragged:'myDrag', index:keyEntry, data:data, selectorDropZone:'.dragArea'}"  >
  Foo bar
</div>
```

### Drop

destiny: Array the elements droppeds,.

execute: Function add elements in array.

```html
<div class="dragArea"  v-dropzone="{dragged:'myDrag', destiny:myArray, execute:myFunction}" >
</div>
```


## License

MIT

