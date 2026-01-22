/** Chunk was on 59275 **/
/** chunk id: 521000, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  VA: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
let r = e => {
    var t;
    let {
      clientX: l,
      clientY: n,
      currentTarget: r
    } = e;
    r.style.pointerEvents = "none";
    let s = document.elementFromPoint(l, n);
    return r.style.pointerEvents = "auto", {
      elementBelow: s,
      button: null != (t = null == s ? true : s.closest("button")) ? t : null
    }
  },
  s = e => {
    let {
      isCustomCursorEnabled: t,
      className: l,
      riveEventTargetRef: s
    } = e, a = e => {
      let {
        button: l
      } = r(e), n = e.currentTarget;
      t ? n.style.cursor = null != l ? "var(--custom-cursor-pointer)" : "var(--custom-cursor)" : n.style.cursor = null != l ? "pointer" : "default"
    };
    return (0, n.jsx)("div", {
      ref: s,
      className: l,
      onMouseMove: a,
      onMouseDown: e => {
        let {
          button: t
        } = r(e);
        null != t && t.click()
      }
    })
  }