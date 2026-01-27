/** Chunk was on 60667 **/
/** chunk id: 147441, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk997021 = require("./997021.js");
let d = Chunk64700.createContext({
  isOpen: false,
  toggleOpen: () => {}
});

function u(e) {
  let {
    children: t
  } = e, [n, l] = i.useReducer(e => !e, false), s = i.useMemo(() => ({
    isOpen: n,
    toggleOpen: l
  }), [n]);
  return (0, r.jsx)(d.Provider, {
    value: s,
    children: t(n)
  })
}
u.Toggle = function(e) {
  let {
    className: t,
    text: n
  } = e, {
    isOpen: l,
    toggleOpen: u
  } = i.useContext(d), _ = l ? a.tN5 : a.abt, p = null != n ? n : l ? o.intl.string(o.t.fgq1gs) : o.intl.string(o.t.XJuakA);
  return (0, r.jsxs)(a.DUT, {
    className: s()(c.L, t),
    onClick: u,
    children: [(0, r.jsx)(a.Text, {
      variant: "heading-sm/semibold",
      tag: "div",
      color: "currentColor",
      children: p
    }), (0, r.jsx)(_, {
      size: "sm",
      color: "currentColor"
    })]
  })
}