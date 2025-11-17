/** Chunk was on web.js **/
/** chunk id: 521750, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  if (!e) return;
  let t = true;
  return n => {
    e({
      ...n,
      preventDefault() {
        n.preventDefault()
      },
      isDefaultPrevented: () => n.isDefaultPrevented(),
      stopPropagation() {
        t = true
      },
      continuePropagation() {
        t = false
      },
      isPropagationStopped: () => t
    }), t && n.stopPropagation()
  }
}
require.d(exports, {
  x: () => r
})