/** Chunk was on 75685 **/
/** chunk id: 409322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  var t;
  let n, {
      node: c
    } = e,
    [u, d] = l.useState(false),
    {
      layout: f,
      collapseAfter: m,
      ContextProvider: b,
      useCollapsibleTitle: j
    } = c,
    p = f.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    x = null != m ? p.slice(0, m) : p,
    y = null != m ? p.slice(m) : [],
    v = null != b ? b : l.Fragment,
    g = null != (t = null == j ? true : j(u, y.length)) ? t : (n = y.length, u ? s.intl.formatToPlainString(s.t["3SHL+f"], {
      count: n
    }) : s.intl.formatToPlainString(s.t["8JRFyc"], {
      count: n
    }));
  return (0, r.jsxs)(v, {
    children: [x.map((e, t) => (0, r.jsxs)(l.Fragment, {
      children: [(0, r.jsx)(i.Z, {
        node: e
      }), (t !== x.length - 1 || y.length > 0) && (0, r.jsx)(o.izJ, {})]
    }, e.key)), y.length > 0 && (0, r.jsx)(a.I, {
      title: g,
      isOpen: u,
      setIsOpen: d,
      compact: true,
      children: y.map((e, t) => (0, r.jsxs)(l.Fragment, {
        children: [(0, r.jsx)(i.Z, {
          node: e
        }), t !== y.length - 1 && (0, r.jsx)(o.izJ, {})]
      }, e.key))
    })]
  })
}