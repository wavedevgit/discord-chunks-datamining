/** Chunk was on 7384 **/
/** chunk id: 887818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk426633 = require("./426633.js");
let d = Chunk73800.createContext({
  isOpen: false,
  toggleOpen: () => {}
});

function u(e) {
  let {
    children: t
  } = e, [n, s] = r.useReducer(e => !e, false), a = r.useMemo(() => ({
    isOpen: n,
    toggleOpen: s
  }), [n]);
  return (0, i.jsx)(d.Provider, {
    value: a,
    children: t(n)
  })
}
u.Toggle = function(e) {
  let {
    className: t,
    text: n
  } = e, {
    isOpen: s,
    toggleOpen: u
  } = r.useContext(d), m = s ? l.u04 : l.CJ0, p = null != n ? n : s ? o.intl.string(o.t.fgq1go) : o.intl.string(o.t.XJuakJ);
  return (0, i.jsxs)(l.P3F, {
    className: a()(c.toggle, t),
    onClick: u,
    children: [(0, i.jsx)(l.Text, {
      variant: "heading-sm/semibold",
      tag: "div",
      color: "currentColor",
      children: p
    }), (0, i.jsx)(m, {
      size: "sm",
      color: "currentColor"
    })]
  })
}