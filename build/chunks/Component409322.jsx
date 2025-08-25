/** Chunk was on 76210 **/
/** chunk id: 409322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  var t;
  let n, {
      node: a
    } = e,
    [c, d] = i.useState(false),
    {
      layout: f,
      collapseAfter: g,
      ContextProvider: v,
      useCollapsibleTitle: m
    } = a,
    j = f.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    b = null != g ? j.slice(0, g) : j,
    y = null != g ? j.slice(g) : [],
    x = null != v ? v : i.Fragment,
    p = null != (t = null == m ? true : m(c, y.length)) ? t : (n = y.length, c ? o.intl.formatToPlainString(o.t["3SHL+f"], {
      count: n
    }) : o.intl.formatToPlainString(o.t["8JRFyc"], {
      count: n
    }));
  return (0, l.jsxs)(x, {
    children: [b.map((e, t) => (0, l.jsxs)(i.Fragment, {
      children: [(0, l.jsx)(s.Z, {
        node: e
      }), (t !== b.length - 1 || y.length > 0) && (0, l.jsx)(r.$i$, {})]
    }, e.key)), y.length > 0 && (0, l.jsx)(u.I, {
      title: p,
      isOpen: c,
      setIsOpen: d,
      compact: true,
      children: y.map((e, t) => (0, l.jsxs)(i.Fragment, {
        children: [(0, l.jsx)(s.Z, {
          node: e
        }), t !== y.length - 1 && (0, l.jsx)(r.$i$, {})]
      }, e.key))
    })]
  })
}