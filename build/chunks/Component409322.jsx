/** Chunk was on 59739 **/
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
    [u, d] = o.useState(false),
    {
      layout: f,
      collapseAfter: b,
      ContextProvider: p,
      useCollapsibleTitle: m
    } = c,
    j = f.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    y = null != b ? j.slice(0, b) : j,
    x = null != b ? j.slice(b) : [],
    v = null != p ? p : o.Fragment,
    g = null != (t = null == m ? true : m(u, x.length)) ? t : (n = x.length, u ? s.intl.formatToPlainString(s.t["3SHL+f"], {
      count: n
    }) : s.intl.formatToPlainString(s.t["8JRFyc"], {
      count: n
    }));
  return (0, r.jsxs)(v, {
    children: [y.map((e, t) => (0, r.jsxs)(o.Fragment, {
      children: [(0, r.jsx)(i.Z, {
        node: e
      }), (t !== y.length - 1 || x.length > 0) && (0, r.jsx)(l.izJ, {})]
    }, e.key)), x.length > 0 && (0, r.jsx)(a.I, {
      title: g,
      isOpen: u,
      setIsOpen: d,
      compact: true,
      children: x.map((e, t) => (0, r.jsxs)(o.Fragment, {
        children: [(0, r.jsx)(i.Z, {
          node: e
        }), t !== x.length - 1 && (0, r.jsx)(l.izJ, {})]
      }, e.key))
    })]
  })
}