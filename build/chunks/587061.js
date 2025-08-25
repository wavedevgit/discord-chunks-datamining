/** Chunk was on web.js **/
/** chunk id: 587061, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk714338 = require("./714338.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk627845 = require("./627845.jsx"),
  Chunk556296 = require("./556296.js"),
  Chunk5967 = require("./5967.js"),
  Chunk13140 = require("./13140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk420212 = require("./420212.js");

function m(e) {
  let t = e.ctrlKey || e.altKey || e.metaKey;
  e.key !== h.mR.Tab || t || __OVERLAY__ || (0, o.$s)() || u.Z.maybeShowKeyboardNavigationExplainerModal()
}

function g(e) {
  let t = _.C$("shift"),
    n = _.C$("tab");
  if (e.key === h.mR.Tab && e.shiftKey && null != t && null != n) return [
    [p.MoX.KEYBOARD_KEY, t],
    [p.MoX.KEYBOARD_KEY, n]
  ];
  let r = h.el.get(e.key);
  if (null != r) {
    let e = _.C$(r);
    if (null != e) return [
      [p.MoX.KEYBOARD_KEY, e]
    ]
  }
  return null
}

function E(e, t) {
  var n, r;
  let i = (0, f.VG)(null == (n = (0, f.uB)(e)) ? true : n.activeElement);
  if (i && e.key !== h.mR.Tab || e.ctrlKey || e.altKey || e.metaKey || e.key !== h.mR.Tab && e.shiftKey) return;
  let o = g(e);
  null == o || d.ZP.hasExactKeybind(o) || s.Z.hasBind(null != (r = _.H9(o[0])) ? r : "") || ((0, l.Qj)(), i && !t && e.preventDefault())
}

function b() {
  (0, Chunk857595.rf)()
}
let y = function(e, t) {
  let n = (0, i.e7)([c.Z], () => c.Z.keyboardModeEnabled);
  (0, a.JDz)(n);
  let o = (0, r.useCallback)(e => {
    E(e, t)
  }, [t]);
  return (0, r.useLayoutEffect)(() => (n ? (e.addEventListener("mousedown", b), e.addEventListener("keydown", m)) : e.addEventListener("keydown", o), () => {
    n ? (e.removeEventListener("mousedown", b), e.removeEventListener("keydown", m)) : e.removeEventListener("keydown", o)
  }), [e, o, n]), n
}