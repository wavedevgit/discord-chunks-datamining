/** Chunk was on 36878 **/
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
      layout: f,
      collapseAfter: g,
      ContextProvider: v,
      useCollapsibleTitle: m
    } = u,
    b = f.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    x = null != g ? b.slice(0, g) : b,
    p = null != g ? b.slice(g) : [],
    j = null != v ? v : l.Fragment,
    y = null != (t = null == m ? true : m(c, p.length)) ? t : (n = p.length, c ? a.intl.formatToPlainString(a.t["3SHL+f"], {
      count: n
    }) : a.intl.formatToPlainString(a.t["8JRFyc"], {
      count: n
    }));
  return (0, i.jsxs)(j, {
    children: [x.map((e, t) => (0, i.jsxs)(l.Fragment, {
      children: [(0, i.jsx)(o.Z, {
        node: e
      }), (t !== x.length - 1 || p.length > 0) && (0, i.jsx)(r.$i$, {})]
    }, e.key)), p.length > 0 && (0, i.jsx)(s.I, {
      title: y,
      isOpen: c,
      setIsOpen: d,
      compact: true,
      children: p.map((e, t) => (0, i.jsxs)(l.Fragment, {
        children: [(0, i.jsx)(o.Z, {
          node: e
        }), t !== p.length - 1 && (0, i.jsx)(r.$i$, {})]
      }, e.key))
    })]
  })
}