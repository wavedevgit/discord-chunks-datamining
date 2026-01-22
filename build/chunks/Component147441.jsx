/** Chunk was on web.js **/
/** chunk id: 147441, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk997021 = require("./997021.js");
let u = Chunk64700.createContext({
  isOpen: false,
  toggleOpen: () => {}
});

function d(e) {
  let {
    children: t
  } = e, [n, a] = i.useReducer(e => !e, false), s = i.useMemo(() => ({
    isOpen: n,
    toggleOpen: a
  }), [n]);
  return (0, r.jsx)(u.Provider, {
    value: s,
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
  } = i.useContext(u), f = a ? o.tN5 : o.abt, p = null != n ? n : a ? l.intl.string(l.t.fgq1gs) : l.intl.string(l.t.XJuakA);
  return (0, r.jsxs)(o.DUT, {
    className: s()(c.L, t),
    onClick: d,
    children: [(0, r.jsx)(o.Text, {
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