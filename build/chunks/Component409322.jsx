/** Chunk was on 36878 **/
/** chunk id: 409322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk388032 = require("./388032.jsx");
let u = (e, t) => e ? r.intl.formatToPlainString(r.t["3SHL+f"], {
  count: t
}) : r.intl.formatToPlainString(r.t["8JRFyc"], {
  count: t
});

function c(e) {
  var t;
  let {
    node: n
  } = e, [r, c] = l.useState(false), {
    layout: d,
    collapseAfter: f,
    ContextProvider: g,
    useCollapsibleTitle: m
  } = n, v = d.filter(e => {
    var t, n;
    return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
  }), b = null != f ? v.slice(0, f) : v, x = null != f ? v.slice(f) : [], p = null != g ? g : l.Fragment, j = null != (t = null == m ? true : m(r, x.length)) ? t : u(r, x.length);
  return (0, i.jsxs)(p, {
    children: [b.map((e, t) => (0, i.jsxs)(l.Fragment, {
      children: [(0, i.jsx)(o.Z, {
        node: e
      }), (t !== b.length - 1 || x.length > 0) && (0, i.jsx)(s.$i$, {})]
    }, e.key)), x.length > 0 && (0, i.jsx)(a.I, {
      title: j,
      isOpen: r,
      setIsOpen: c,
      compact: true,
      children: x.map((e, t) => (0, i.jsxs)(l.Fragment, {
        children: [(0, i.jsx)(o.Z, {
          node: e
        }), t !== x.length - 1 && (0, i.jsx)(s.$i$, {})]
      }, e.key))
    })]
  })
}