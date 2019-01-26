# Drag and Drop for Vue

Drag and drop.

## Usage

### Drag

dragged: State drag the element is activated.

index: Key element in array.

data: information you need sent to droparea.

selectorDropZone: Area drop element.

```html
<div v-draggable="{dragged:'dragged', index:keyEntry, data:data, selectorDropZone:'".dragArea"'}"  >
  Foo bar
</div>
```

### Drop

dragged: State drag the element is activated.

destiny: Array the elements droppeds,.

execute: Function add elements in array.

```html
<div class="dragArea"  v-dropzone="{dragged:'dragged', destiny:myArray, execute:myFunction}" >
</div>
```


## License

MIT

