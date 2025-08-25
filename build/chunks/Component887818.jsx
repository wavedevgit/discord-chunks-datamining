/** Chunk was on web.js **/
/** chunk id: 887818, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk426633 = require("./426633.js");
let u = Chunk647438.createContext({
  isOpen: false,
  toggleOpen: () => {}
});

function d(e) {
  let {
    children: t
  } = e, [n, o] = i.useReducer(e => !e, false), a = i.useMemo(() => ({
    isOpen: n,
    toggleOpen: o
  }), [n]);
  return (0, r.jsx)(u.Provider, {
    value: a,
    children: t(n)
  })
}
d.Toggle = function(e) {
  let {
    className: t,
    text: n
  } = e, {
    isOpen: o,
    toggleOpen: d
  } = i.useContext(u), f = o ? s.u04 : s.CJ0, _ = null != n ? n : o ? l.intl.string(l.t.fgq1go) : l.intl.string(l.t.XJuakJ);
  return (0, r.jsxs)(s.P3F, {
    className: a()(c.toggle, t),
    onClick: d,
    children: [(0, r.jsx)(s.Text, {
      variant: "heading-sm/semibold",
      tag: "div",
      color: "currentColor",
      children: _
    }), (0, r.jsx)(f, {
      size: "sm",
      color: "currentColor"
    })]
  })
}