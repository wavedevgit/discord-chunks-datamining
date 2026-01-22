/** Chunk was on web.js **/
/** chunk id: 43146, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
    setValue: o,
    useTitle: l,
    useSubtitle: c,
    useDisabled: u,
    useDisabledMessage: d,
    useBadge: f,
    hasIcon: p
  } = n, _ = l(), h = null == c ? true : c(), m = s(), g = null != (t = null == u ? true : u()) && t, E = null == d ? true : d(), b = null == f ? true : f();
  return (0, r.jsxs)(a.L, {
    children: [(0, r.jsx)(i.dOG, {
      label: _,
      description: h,
      badge: b,
      checked: m,
      hasIcon: p,
      onChange: e => o(e),
      disabled: g
    }), g && null != E ? (0, r.jsx)(i.po8, {
      messageType: i.YCn.WARNING,
      children: E
    }) : null]
  })
}