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
    [c, d] = i.useState(false),
    {
      layout: g,
      collapseAfter: f,
      ContextProvider: y,
      useCollapsibleTitle: O
    } = u,
    E = g.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    v = null != f ? E.slice(0, f) : E,
    T = null != f ? E.slice(f) : [],
    b = null != y ? y : i.Fragment,
    N = null != (t = null == O ? true : O(c, T.length)) ? t : (n = T.length, c ? s.intl.formatToPlainString(s.t["3SHL+f"], {
      count: n
    }) : s.intl.formatToPlainString(s.t["8JRFyc"], {
      count: n
    }));
  return (0, r.jsxs)(b, {
    children: [v.map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(o.Z, {
        node: e
      }), (t !== v.length - 1 || T.length > 0) && (0, r.jsx)(l.$i$, {})]
    }, e.key)), T.length > 0 && (0, r.jsx)(a.I, {
      title: N,
      isOpen: c,
      setIsOpen: d,
      compact: true,
      children: T.map((e, t) => (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(o.Z, {
          node: e
        }), t !== T.length - 1 && (0, r.jsx)(l.$i$, {})]
      }, e.key))
    })]
  })
}