/** Chunk was on web.js **/
/** chunk id: 867694, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550964 = require("./550964.jsx");

function o(e) {
  var t;
  let {
    node: n
  } = e, {
    useValue: o,
    setValue: s,
    useTitle: l,
    useSubtitle: c,
    useDisabled: u,
    useDisabledMessage: d,
    useBadge: f,
    hasIcon: p
  } = n, _ = l(), m = null == c ? true : c(), h = o(), g = null != (t = null == u ? true : u()) && t, E = null == d ? true : d(), b = null == f ? true : f();
  return (0, r.jsxs)(a.X, {
    children: [(0, r.jsx)(i.rsf, {
      label: _,
      description: m,
      badge: b,
      checked: h,
      hasIcon: p,
      onChange: e => s(e),
      disabled: g
    }), g && null != E ? (0, r.jsx)(i.Wn, {
      messageType: i.QYI.WARNING,
      children: E
    }) : null]
  })
}