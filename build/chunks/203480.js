/** Chunk was on web.js **/
/** chunk id: 203480, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js"),
  Chunk311907 = require("./311907.js"),
  Chunk192308 = require("./192308.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775121 = require("./775121.js"),
  Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk502229 = require("./502229.jsx"),
  Chunk532624 = require("./532624.js"),
  Chunk350535 = require("./350535.js"),
  Chunk650583 = require("./650583.js");

function h(e) {
  let t = e.ctrlKey || e.altKey || e.metaKey;
  e.key !== _.N$.Tab || t || __OVERLAY__ || (0, s.hasAnyModalOpen)() || d.A.maybeShowKeyboardNavigationExplainerModal()
}

function m(e) {
  let t = p.Cy("shift"),
    n = p.Cy("tab");
  if (e.key === _.N$.Tab && e.shiftKey && null != t && null != n) return [
    [_.zY.KEYBOARD_KEY, t],
    [_.zY.KEYBOARD_KEY, n]
  ];
  let r = _.G1.get(e.key);
  if (null != r) {
    let e = p.Cy(r);
    if (null != e) return [
      [_.zY.KEYBOARD_KEY, e]
    ]
  }
  return null
}

function g(e, t) {
  var n, r;
  let a = (0, i.Cw)(null == (r = (0, i.BF)(e)) ? true : r.activeElement);
  if (a && e.key !== _.N$.Tab || e.ctrlKey || e.altKey || e.metaKey || e.key !== _.N$.Tab && e.shiftKey) return;
  let s = m(e);
  null == s || f.Ay.hasExactKeybind(s) || l.A.hasBind(null != (n = p.Qd(s[0])) ? n : "") || ((0, c.uS)(), a && !t && e.preventDefault())
}

function E() {
  (0, c.Bm)()
}
let y = function(e, t) {
  let n = (0, a.bG)([u.A], () => u.A.keyboardModeEnabled);
  (0, o.OpQ)(n);
  let i = (0, r.useCallback)(e => {
    g(e, t)
  }, [t]);
  return (0, r.useLayoutEffect)(() => (n ? (e.addEventListener("mousedown", E), e.addEventListener("keydown", h)) : e.addEventListener("keydown", i), () => {
    n ? (e.removeEventListener("mousedown", E), e.removeEventListener("keydown", h)) : e.removeEventListener("keydown", i)
  }), [e, i, n]), n
}