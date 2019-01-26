<script>

    var _;

    _ = {
        on: function(el, name, cb) {
            return el.addEventListener(name, cb);
        },
        off: function(el, name, cb) {
            return el.removeEventListener(name, cb);
        }
    };

    Vue.directive('draggable', {
        bind: function(el, binding, vnode) {
            el.arg = binding.value.channel;
            el.data = binding.value;
            el.dragstart = (function(_this) {
                return function(e) {
                    $( _this.data.selectorDropZone ).find(".filter_content_wrapper .dragArea").removeClass("hide");
                    $( _this.data.selectorDropZone ).find(".filter_content_wrapper .dragArea").addClass("drop-prepare");
                    e.target.classList.add(_this.data.channel);
                    e.dataTransfer.effectAllowed = 'all';
                    e.dataTransfer.dropEffect = 'copy';
                    e.dataTransfer.setData('data', JSON.stringify(_this.data));
                    e.dataTransfer.setData('tag', _this.arg);
                    return false;
                };
            })(el);
            el.dragend = (function(_this) {
                return function(e) {
                    e.target.classList.remove(_this.data.channel);
                    return false;
                };
            })(el);
            el.setAttribute('draggable', true);
            _.on(el, 'dragstart', el.dragstart);
            return _.on(el, 'dragend', el.dragend);
        },
        unbind: function(el, binding) {
            el.setAttribute('draggable', false);
            _.off(el, 'dragstart', el.dragstart);
            return _.off(el, 'dragend', el.dragend);
        }
    });

    Vue.directive('dropzone', {
        acceptStatement: true,
        bind: function(el, binding, vnode) {
          el.destiny = binding.value.destiny;
          el.execute = binding.value.execute;
          el.arg = binding.value.channel;

          el.dragenter = (function(_this) {
            return function(e) {
                $(_this).removeClass("hide");
                var tag = e.dataTransfer.getData('tag');
                if (tag === _this.arg) {
                    e.target.classList.add(_this.arg);
                }
                return false;
            };
          })(el);
          el.dragleave = (function(_this) {
            return function(e) {
                $(_this).removeClass("drop-active");
                $(_this).addClass("drop-prepare");

              var tag = e.dataTransfer.getData('tag');
              if (tag === _this.arg) {
                e.target.classList.remove(_this.arg);
              }
              return false;
            };
          })(el);
          el.drop = (function(_this) {
            return function(e) {
                $(_this).removeClass("drop-active");
                $(_this).removeClass("drop-prepare");
                $(_this).addClass("hide");

              var data, tag;
              if (e.preventDefault) {
                e.preventDefault();
              }
              data = e.dataTransfer.getData('data');
              tag = e.dataTransfer.getData('tag');
              data = JSON.parse(data);
              if (tag === _this.arg) {
                  _this.execute( data.data, _this.destiny, data.index, tag);
                e.target.classList.remove(_this.arg);
              }
              return false;
            };
          })(el);
          el.dragover = (function(_this) {
            return function(e) {
                $(_this).removeClass("hide");
                if( ! $(_this).hasClass("drop-active") ){
                  $(_this).addClass("drop-active");
                }
                if( $(_this).hasClass("drop-prepare") ){
                  $(_this).removeClass("drop-prepare");
                }

              if (e.preventDefault) {
                e.preventDefault();
              }
              var tag = e.dataTransfer.getData('tag');
              if (tag === _this.arg) {
                e.dataTransfer.effectAllowed = 'all';
                e.dataTransfer.dropEffect = 'copy';
              } else {
                e.dataTransfer.effectAllowed = 'none';
                e.dataTransfer.dropEffect = 'link';
              }
              return false;
            };
          })(el);
          _.on(el, 'dragenter', el.dragenter);
          _.on(el, 'dragover', el.dragover);
          _.on(el, 'dragleave', el.dragleave);
          return _.on(el, 'drop', el.drop);
        },
        unbind: function(el, binding) {
          _.off(el, 'dragenter', el.dragenter);
          _.off(el, 'dragover', el.dragover);
          _.off(el, 'dragleave', el.dragleave);
          return _.off(el, 'drop', el.drop);
        }
      });

</script>
