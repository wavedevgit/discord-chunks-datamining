/** Chunk was on 36878 **/
/** chunk id: 409322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
      ContextProvider: m,
      useCollapsibleTitle: v
    } = u,
    b = f.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    x = null != g ? b.slice(0, g) : b,
    j = null != g ? b.slice(g) : [],
    p = null != m ? m : l.Fragment,
    h = null != (t = null == v ? true : v(c, j.length)) ? t : (n = j.length, c ? a.intl.formatToPlainString(a.t["3SHL+f"], {
      count: n
    }) : a.intl.formatToPlainString(a.t["8JRFyc"], {
      count: n
    }));
  return (0, i.jsxs)(p, {
    children: [x.map((e, t) => (0, i.jsxs)(l.Fragment, {
      children: [(0, i.jsx)(o.Z, {
        node: e
      }), (t !== x.length - 1 || j.length > 0) && (0, i.jsx)(s.$i$, {})]
    }, e.key)), j.length > 0 && (0, i.jsx)(r.I, {
      title: h,
      isOpen: c,
      setIsOpen: d,
      compact: true,
      children: j.map((e, t) => (0, i.jsxs)(l.Fragment, {
        children: [(0, i.jsx)(o.Z, {
          node: e
        }), t !== j.length - 1 && (0, i.jsx)(s.$i$, {})]
      }, e.key))
    })]
  })
}