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
    [c, d] = r.useState(false),
    {
      layout: _,
      collapseAfter: E,
      ContextProvider: N,
      useCollapsibleTitle: g
    } = u,
    O = _.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    I = null != E ? O.slice(0, E) : O,
    f = null != E ? O.slice(E) : [],
    A = null != N ? N : r.Fragment,
    T = null != (t = null == g ? true : g(c, f.length)) ? t : (n = f.length, c ? s.intl.formatToPlainString(s.t["3SHL+f"], {
      count: n
    }) : s.intl.formatToPlainString(s.t["8JRFyc"], {
      count: n
    }));
  return (0, i.jsxs)(A, {
    children: [I.map((e, t) => (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)(o.Z, {
        node: e
      }), (t !== I.length - 1 || f.length > 0) && (0, i.jsx)(l.$i$, {})]
    }, e.key)), f.length > 0 && (0, i.jsx)(a.I, {
      title: T,
      isOpen: c,
      setIsOpen: d,
      compact: true,
      children: f.map((e, t) => (0, i.jsxs)(r.Fragment, {
        children: [(0, i.jsx)(o.Z, {
          node: e
        }), t !== f.length - 1 && (0, i.jsx)(l.$i$, {})]
      }, e.key))
    })]
  })
}