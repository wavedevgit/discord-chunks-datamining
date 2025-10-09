/** Chunk was on 45620 **/
/** chunk id: 190157, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  gT: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    } = e, i = e => {
      let {
        button: n
      } = l(e), r = e.currentTarget;
      t ? r.style.cursor = null != n ? "var(--custom-cursor-pointer)" : "var(--custom-cursor)" : r.style.cursor = null != n ? "pointer" : "default"
    };
    return (0, r.jsx)("div", {
      ref: s,
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