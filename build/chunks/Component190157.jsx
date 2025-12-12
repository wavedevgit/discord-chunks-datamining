/** Chunk was on 45620 **/
/** chunk id: 190157, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  gT: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
let l = e => {
    var t;
    let {
      clientX: n,
      clientY: r,
      currentTarget: l
    } = e;
    l.style.pointerEvents = "none";
    let o = document.elementFromPoint(n, r);
    return l.style.pointerEvents = "auto", {
      elementBelow: o,
      button: null != (t = null == o ? true : o.closest("button")) ? t : null
    }
  },
  o = e => {
    let {
      isCustomCursorEnabled: t,
      className: n,
      riveEventTargetRef: o
    } = e, i = e => {
      let {
        button: n
      } = l(e), r = e.currentTarget;
      t ? r.style.cursor = null != n ? "var(--custom-cursor-pointer)" : "var(--custom-cursor)" : r.style.cursor = null != n ? "pointer" : "default"
    };
    return (0, r.jsx)("div", {
      ref: o,
      className: n,
      onMouseMove: i,
      onMouseDown: e => {
        let {
          button: t
        } = l(e);
        null != t && t.click()
      }
    })
  }