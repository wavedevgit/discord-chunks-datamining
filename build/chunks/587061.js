/** Chunk was on web.js **/
/** chunk id: 587061, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk473749 = require("./473749.js"),
  Chunk374470 = require("./374470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk714338 = require("./714338.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk627845 = require("./627845.jsx"),
  Chunk556296 = require("./556296.js"),
  Chunk13140 = require("./13140.js"),
  Chunk295907 = require("./295907.js");

function m(e) {
  let t = e.ctrlKey || e.altKey || e.metaKey;
  e.key !== _.mR.Tab || t || __OVERLAY__ || (0, a.hasAnyModalOpen)() || d.Z.maybeShowKeyboardNavigationExplainerModal()
}

function h(e) {
  let t = p.C$("shift"),
    n = p.C$("tab");
  if (e.key === _.mR.Tab && e.shiftKey && null != t && null != n) return [
    [_.Mo.KEYBOARD_KEY, t],
    [_.Mo.KEYBOARD_KEY, n]
  ];
  let r = _.el.get(e.key);
  if (null != r) {
    let e = p.C$(r);
    if (null != e) return [
      [_.Mo.KEYBOARD_KEY, e]
    ]
  }
  return null
}

function g(e, t) {
  var n, r;
  let o = (0, i.VG)(null == (n = (0, i.uB)(e)) ? true : n.activeElement);
  if (o && e.key !== _.mR.Tab || e.ctrlKey || e.altKey || e.metaKey || e.key !== _.mR.Tab && e.shiftKey) return;
  let a = h(e);
  null == a || f.ZP.hasExactKeybind(a) || l.Z.hasBind(null != (r = p.H9(a[0])) ? r : "") || ((0, c.Qj)(), o && !t && e.preventDefault())
}

function E() {
  (0, Chunk857595.rf)()
}
let b = function(e, t) {
  let n = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled);
  (0, s.JDz)(n);
  let i = (0, r.useCallback)(e => {
    g(e, t)
  }, [t]);
  return (0, r.useLayoutEffect)(() => (n ? (e.addEventListener("mousedown", E), e.addEventListener("keydown", m)) : e.addEventListener("keydown", i), () => {
    n ? (e.removeEventListener("mousedown", E), e.removeEventListener("keydown", m)) : e.removeEventListener("keydown", i)
  }), [e, i, n]), n
}