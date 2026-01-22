/** Chunk was on web.js **/
/** chunk id: 108146, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => l
});
var Chunk13163 = require("./13163.js"),
  Chunk3388 = require("./3388.js"),
  Chunk290424 = require("./290424.js"),
  Chunk64700 = require("./64700.js"),
  Chunk853590 = require("./853590.js");

function l(e, t) {
  let {
    "aria-label": n,
    "aria-labelledby": l,
    orientation: c = "horizontal"
  } = e, [u, d] = (0, s.useState)(false);
  (0, i.N)(() => {
    var e;
    d(!!(t.current && (null == (e = t.current.parentElement) ? true : e.closest('[role="toolbar"]'))))
  });
  let {
    direction: f
  } = (0, o.Y)(), p = "rtl" === f && "horizontal" === c, _ = (0, r.C7)(t), h = e => {
    if (e.currentTarget.contains(e.target)) {
      if ("horizontal" === c && "ArrowRight" === e.key || "vertical" === c && "ArrowDown" === e.key) p ? _.focusPrevious() : _.focusNext();
      else if ("horizontal" === c && "ArrowLeft" === e.key || "vertical" === c && "ArrowUp" === e.key) p ? _.focusNext() : _.focusPrevious();
      else {
        if ("Tab" !== e.key) return;
        e.stopPropagation(), m.current = document.activeElement, e.shiftKey ? _.focusFirst() : _.focusLast();
        return
      }
      e.stopPropagation(), e.preventDefault()
    }
  }, m = (0, s.useRef)(null), g = e => {
    e.currentTarget.contains(e.relatedTarget) || m.current || (m.current = e.target)
  }, E = e => {
    var n, r;
    m.current && !e.currentTarget.contains(e.relatedTarget) && (null == (n = t.current) ? true : n.contains(e.target)) && (null == (r = m.current) || r.focus(), m.current = null)
  };
  return {
    toolbarProps: {
      ...(0, a.$)(e, {
        labelable: true
      }),
      role: u ? "group" : "toolbar",
      "aria-orientation": c,
      "aria-label": n,
      "aria-labelledby": null == n ? l : true,
      onKeyDownCapture: u ? true : h,
      onFocusCapture: u ? true : E,
      onBlurCapture: u ? true : g
    }
  }
}