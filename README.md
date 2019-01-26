# Drag and Drop for Vue

Drag and drop.

## Usage

When the element is dropped, will execute the callback function sending index and data.

### Drag

```html
<div v-draggable="{channel:'myDrag', index: idx, data: myArrayOrigin, selectorDropZone:'.dragArea'}"  >
  Foo bar
</div>
```

### Drop

```html
<div class="dragArea"  v-dropzone="{channel:'myDrag', destiny: myArrayDestiny, execute: myFunction}" >
</div>
```

### Callback execute

```js
methods:{
  executeItem(myArrayOrigin, myArrayDestiny, idx, channel){
    
  }
}
```


## License

MIT

