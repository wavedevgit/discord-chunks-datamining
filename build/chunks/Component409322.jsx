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
      ContextProvider: f,
      useCollapsibleTitle: N
    } = u,
    T = _.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    g = null != E ? T.slice(0, E) : T,
    O = null != E ? T.slice(E) : [],
    I = null != f ? f : r.Fragment,
    A = null != (t = null == N ? true : N(c, O.length)) ? t : (n = O.length, c ? a.intl.formatToPlainString(a.t["3SHL+f"], {
      count: n
    }) : a.intl.formatToPlainString(a.t["8JRFyc"], {
      count: n
    }));
  return (0, i.jsxs)(I, {
    children: [g.map((e, t) => (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)(o.Z, {
        node: e
      }), (t !== g.length - 1 || O.length > 0) && (0, i.jsx)(l.$i$, {})]
    }, e.key)), O.length > 0 && (0, i.jsx)(s.I, {
      title: A,
      isOpen: c,
      setIsOpen: d,
      compact: true,
      children: O.map((e, t) => (0, i.jsxs)(r.Fragment, {
        children: [(0, i.jsx)(o.Z, {
          node: e
        }), t !== O.length - 1 && (0, i.jsx)(l.$i$, {})]
      }, e.key))
    })]
  })
}