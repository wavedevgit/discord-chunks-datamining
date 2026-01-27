/** Chunk was on 60667 **/
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
    useBadge: _,
    hasIcon: p
  } = n, m = o(), g = null == c ? true : c(), A = s(), f = null != (t = null == d ? true : d()) && t, h = null == u ? true : u(), b = null == _ ? true : _();
  return (0, r.jsxs)(l.L, {
    children: [(0, r.jsx)(i.dOG, {
      label: m,
      description: g,
      badge: b,
      checked: A,
      hasIcon: p,
      onChange: e => a(e),
      disabled: f
    }), f && null != h ? (0, r.jsx)(i.po8, {
      messageType: i.YCn.WARNING,
      children: h
    }) : null]
  })
}