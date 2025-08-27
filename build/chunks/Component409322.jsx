/** Chunk was on 76210 **/
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
      layout: _,
      collapseAfter: E,
      ContextProvider: N,
      useCollapsibleTitle: T
    } = u,
    I = _.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    A = null != E ? I.slice(0, E) : I,
    g = null != E ? I.slice(E) : [],
    O = null != N ? N : l.Fragment,
    S = null != (t = null == T ? true : T(c, g.length)) ? t : (n = g.length, c ? o.intl.formatToPlainString(o.t["3SHL+f"], {
      count: n
    }) : o.intl.formatToPlainString(o.t["8JRFyc"], {
      count: n
    }));
  return (0, i.jsxs)(O, {
    children: [A.map((e, t) => (0, i.jsxs)(l.Fragment, {
      children: [(0, i.jsx)(s.Z, {
        node: e
      }), (t !== A.length - 1 || g.length > 0) && (0, i.jsx)(r.$i$, {})]
    }, e.key)), g.length > 0 && (0, i.jsx)(a.I, {
      title: S,
      isOpen: c,
      setIsOpen: d,
      compact: true,
      children: g.map((e, t) => (0, i.jsxs)(l.Fragment, {
        children: [(0, i.jsx)(s.Z, {
          node: e
        }), t !== g.length - 1 && (0, i.jsx)(r.$i$, {})]
      }, e.key))
    })]
  })
}