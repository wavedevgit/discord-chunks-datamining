/** Chunk was on web.js **/
/** chunk id: 809362, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => l
});
var Chunk605294 = require("./605294.js"),
  Chunk159447 = require("./159447.js"),
  Chunk880016 = require("./880016.js"),
  Chunk473749 = require("./473749.js"),
  Chunk227399 = require("./227399.js");

function l(e, t) {
  let {
    "aria-label": n,
    "aria-labelledby": l,
    orientation: c = "horizontal"
  } = e, [u, d] = (0, o.useState)(false);
  (0, i.b)(() => {
    var e;
    d(!!(t.current && (null == (e = t.current.parentElement) ? true : e.closest('[role="toolbar"]'))))
  });
  let {
    direction: f
  } = (0, s.j)(), p = "rtl" === f && "horizontal" === c, _ = (0, r.E7)(t), m = e => {
    if (e.currentTarget.contains(e.target)) {
      if ("horizontal" === c && "ArrowRight" === e.key || "vertical" === c && "ArrowDown" === e.key) p ? _.focusPrevious() : _.focusNext();
      else if ("horizontal" === c && "ArrowLeft" === e.key || "vertical" === c && "ArrowUp" === e.key) p ? _.focusNext() : _.focusPrevious();
      else {
        if ("Tab" !== e.key) return;
        e.stopPropagation(), h.current = document.activeElement, e.shiftKey ? _.focusFirst() : _.focusLast();
        return
      }
      e.stopPropagation(), e.preventDefault()
    }
  }, h = (0, o.useRef)(null), g = e => {
    e.currentTarget.contains(e.relatedTarget) || h.current || (h.current = e.target)
  }, E = e => {
    var n, r;
    h.current && !e.currentTarget.contains(e.relatedTarget) && (null == (n = t.current) ? true : n.contains(e.target)) && (null == (r = h.current) || r.focus(), h.current = null)
  };
  return {
    toolbarProps: {
      ...(0, a.z)(e, {
        labelable: true
      }),
      role: u ? "group" : "toolbar",
      "aria-orientation": c,
      "aria-label": n,
      "aria-labelledby": null == n ? l : true,
      onKeyDownCapture: u ? true : m,
      onFocusCapture: u ? true : E,
      onBlurCapture: u ? true : g
    }
  }
}