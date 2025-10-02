/** Chunk was on 54573 **/
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
      ContextProvider: m,
      useCollapsibleTitle: p
    } = c,
    j = f.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    x = null != b ? j.slice(0, b) : j,
    v = null != b ? j.slice(b) : [],
    y = null != m ? m : o.Fragment,
    h = null != (t = null == p ? true : p(u, v.length)) ? t : (n = v.length, u ? s.intl.formatToPlainString(s.t["3SHL+f"], {
      count: n
    }) : s.intl.formatToPlainString(s.t["8JRFyc"], {
      count: n
    }));
  return (0, r.jsxs)(y, {
    children: [x.map((e, t) => (0, r.jsxs)(o.Fragment, {
      children: [(0, r.jsx)(i.Z, {
        node: e
      }), (t !== x.length - 1 || v.length > 0) && (0, r.jsx)(l.izJ, {})]
    }, e.key)), v.length > 0 && (0, r.jsx)(a.I, {
      title: h,
      isOpen: u,
      setIsOpen: d,
      compact: true,
      children: v.map((e, t) => (0, r.jsxs)(o.Fragment, {
        children: [(0, r.jsx)(i.Z, {
          node: e
        }), t !== v.length - 1 && (0, r.jsx)(l.izJ, {})]
      }, e.key))
    })]
  })
}