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
    useBadge: f
  } = n, p = l(), _ = null == c ? true : c(), m = o(), h = null != (t = null == u ? true : u()) && t, g = null == d ? true : d(), E = null == f ? true : f();
  return (0, r.jsxs)(a.X, {
    children: [(0, r.jsx)(i.rsf, {
      label: p,
      description: _,
      badge: E,
      checked: m,
      onChange: e => s(e),
      disabled: h
    }), h && null != g ? (0, r.jsx)(i.Wn, {
      messageType: i.QYI.WARNING,
      children: g
    }) : null]
  })
}