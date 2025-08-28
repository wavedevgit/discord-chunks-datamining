/** Chunk was on 47129 **/
/** chunk id: 409322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  var t;
  let n, {
      node: u
    } = e,
    [c, d] = l.useState(false),
    {
      layout: g,
      collapseAfter: f,
      ContextProvider: y,
      useCollapsibleTitle: v
    } = u,
    E = g.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    O = null != f ? E.slice(0, f) : E,
    N = null != f ? E.slice(f) : [],
    b = null != y ? y : l.Fragment,
    T = null != (t = null == v ? true : v(c, N.length)) ? t : (n = N.length, c ? a.intl.formatToPlainString(a.t["3SHL+f"], {
      count: n
    }) : a.intl.formatToPlainString(a.t["8JRFyc"], {
      count: n
    }));
  return (0, r.jsxs)(b, {
    children: [O.map((e, t) => (0, r.jsxs)(l.Fragment, {
      children: [(0, r.jsx)(o.Z, {
        node: e
      }), (t !== O.length - 1 || N.length > 0) && (0, r.jsx)(i.$i$, {})]
    }, e.key)), N.length > 0 && (0, r.jsx)(s.I, {
      title: T,
      isOpen: c,
      setIsOpen: d,
      compact: true,
      children: N.map((e, t) => (0, r.jsxs)(l.Fragment, {
        children: [(0, r.jsx)(o.Z, {
          node: e
        }), t !== N.length - 1 && (0, r.jsx)(i.$i$, {})]
      }, e.key))
    })]
  })
}