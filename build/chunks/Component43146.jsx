/** Chunk was on 5606 **/
/** chunk id: 43146, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk244242 = require("./244242.jsx");

function s(e) {
  var t;
  let {
    node: n
  } = e, {
    useValue: s,
    setValue: a,
    useTitle: o,
    useSubtitle: c,
    useDisabled: d,
    useDisabledMessage: u,
    useBadge: p,
    hasIcon: _
  } = n, m = o(), g = null == c ? true : c(), f = s(), b = null != (t = null == d ? true : d()) && t, h = null == u ? true : u(), A = null == p ? true : p();
  return (0, r.jsxs)(l.L, {
    children: [(0, r.jsx)(i.dOG, {
      label: m,
      description: g,
      badge: A,
      checked: f,
      hasIcon: _,
      onChange: e => a(e),
      disabled: b
    }), b && null != h ? (0, r.jsx)(i.po8, {
      messageType: i.YCn.WARNING,
      children: h
    }) : null]
  })
}