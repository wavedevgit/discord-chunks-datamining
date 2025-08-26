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
    [c, d] = i.useState(false),
    {
      layout: T,
      collapseAfter: O,
      ContextProvider: f,
      useCollapsibleTitle: N
    } = u,
    I = T.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    E = null != O ? I.slice(0, O) : I,
    g = null != O ? I.slice(O) : [],
    _ = null != f ? f : i.Fragment,
    v = null != (t = null == N ? true : N(c, g.length)) ? t : (n = g.length, c ? o.intl.formatToPlainString(o.t["3SHL+f"], {
      count: n
    }) : o.intl.formatToPlainString(o.t["8JRFyc"], {
      count: n
    }));
  return (0, l.jsxs)(_, {
    children: [E.map((e, t) => (0, l.jsxs)(i.Fragment, {
      children: [(0, l.jsx)(s.Z, {
        node: e
      }), (t !== E.length - 1 || g.length > 0) && (0, l.jsx)(r.$i$, {})]
    }, e.key)), g.length > 0 && (0, l.jsx)(a.I, {
      title: v,
      isOpen: c,
      setIsOpen: d,
      compact: true,
      children: g.map((e, t) => (0, l.jsxs)(i.Fragment, {
        children: [(0, l.jsx)(s.Z, {
          node: e
        }), t !== g.length - 1 && (0, l.jsx)(r.$i$, {})]
      }, e.key))
    })]
  })
}