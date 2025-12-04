/** Chunk was on web.js **/
/** chunk id: 306052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk246992 = require("./246992.js"),
  Chunk535664 = require("./535664.js"),
  Chunk502087 = require("./502087.js"),
  Chunk921801 = require("./921801.js"),
  Chunk594174 = require("./594174.js"),
  Chunk726985 = require("./726985.js"),
  Chunk474936 = require("./474936.js");
let h = e => {
  let {
    isDevTools: t = false
  } = e, n = (0, o.e7)([p.default], () => p.default.getCurrentUser()), i = (0, o.e7)([d.Z], () => {
    let e = d.Z.getCreatedAtOverride();
    return null != e ? e.toISOString().substring(0, 10) : ""
  }), h = (0, o.e7)([d.Z], () => d.Z.getPremiumTypeOverride()), g = e => {
    (0, u.u)(new Date(e))
  };
  return (0, r.jsxs)(l.Kqy, {
    gap: 16,
    children: [(0, r.jsxs)(f.F, {
      setting: _.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
      children: [(0, r.jsx)(s.y6, {
        label: "Override Client-Side Premium Type",
        options: m.b6,
        value: h,
        onChange: e => {
          (0, u.C)(e, n)
        },
        popoutLayerContext: t ? c.O$ : true
      }), (0, r.jsx)(l.Avr, {
        onClick: () => {
          (0, u.C)(m.F_, n)
        },
        text: "Reset premium type override"
      })]
    }), (0, r.jsxs)(f.F, {
      setting: _.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
      children: [(0, r.jsx)(l.Wrb, {
        label: "Override Client-Side Account Created At Date",
        value: a()(i),
        onSelect: e => g(e.toISOString())
      }), (0, r.jsx)(l.Avr, {
        onClick: () => (0, u.u)(true),
        text: "Reset account created at override"
      })]
    })]
  })
}