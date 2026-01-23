/** Chunk was on 59275 **/
/** chunk id: 521000, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  VA: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
let l = e => {
    var t;
    let {
      clientX: n,
      clientY: r,
      currentTarget: l
    } = e;
    l.style.pointerEvents = "none";
    let s = document.elementFromPoint(n, r);
    return l.style.pointerEvents = "auto", {
      elementBelow: s,
      button: null != (t = null == s ? true : s.closest("button")) ? t : null
    }
  },
  s = e => {
    let {
      isCustomCursorEnabled: t,
      className: n,
      riveEventTargetRef: s
    } = e, a = e => {
      let {
        button: n
      } = l(e), r = e.currentTarget;
      t ? r.style.cursor = null != n ? "var(--custom-cursor-pointer)" : "var(--custom-cursor)" : r.style.cursor = null != n ? "pointer" : "default"
    };
    return (0, r.jsx)("div", {
      ref: s,
      className: n,
      onMouseMove: a,
      onMouseDown: e => {
        let {
          button: t
        } = l(e);
        null != t && t.click()
      }
    })
  }