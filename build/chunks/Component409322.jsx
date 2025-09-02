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
    v = g.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    E = null != f ? v.slice(0, f) : v,
    b = null != f ? v.slice(f) : [],
    N = null != y ? y : i.Fragment,
    p = null != (t = null == O ? true : O(c, b.length)) ? t : (n = b.length, c ? a.intl.formatToPlainString(a.t["3SHL+f"], {
      count: n
    }) : a.intl.formatToPlainString(a.t["8JRFyc"], {
      count: n
    }));
  return (0, r.jsxs)(N, {
    children: [E.map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(o.Z, {
        node: e
      }), (t !== E.length - 1 || b.length > 0) && (0, r.jsx)(l.$i$, {})]
    }, e.key)), b.length > 0 && (0, r.jsx)(s.I, {
      title: p,
      isOpen: c,
      setIsOpen: d,
      compact: true,
      children: b.map((e, t) => (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(o.Z, {
          node: e
        }), t !== b.length - 1 && (0, r.jsx)(l.$i$, {})]
      }, e.key))
    })]
  })
}