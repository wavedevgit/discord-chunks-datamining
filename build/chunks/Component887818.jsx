/** Chunk was on web.js **/
/** chunk id: 887818, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk225083 = require("./225083.js");
let u = Chunk473749.createContext({
  isOpen: false,
  toggleOpen: () => {}
});

function d(e) {
  let {
    children: t
  } = e, [n, a] = i.useReducer(e => !e, false), o = i.useMemo(() => ({
    isOpen: n,
    toggleOpen: a
  }), [n]);
  return (0, r.jsx)(u.Provider, {
    value: o,
    children: t(n)
  })
}
d.Toggle = function(e) {
  let {
    className: t,
    text: n
  } = e, {
    isOpen: a,
    toggleOpen: d
  } = i.useContext(u), f = a ? s.u04 : s.CJ0, p = null != n ? n : a ? l.intl.string(l.t.fgq1gs) : l.intl.string(l.t.XJuakA);
  return (0, r.jsxs)(s.P3F, {
    className: o()(c.toggle, t),
    onClick: d,
    children: [(0, r.jsx)(s.Text, {
      variant: "heading-sm/semibold",
      tag: "div",
      color: "currentColor",
      children: p
    }), (0, r.jsx)(f, {
      size: "sm",
      color: "currentColor"
    })]
  })
}