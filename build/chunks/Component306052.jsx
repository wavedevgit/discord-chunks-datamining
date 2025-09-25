/** Chunk was on web.js **/
/** chunk id: 306052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk246992 = require("./246992.js"),
  Chunk535664 = require("./535664.js"),
  Chunk502087 = require("./502087.js"),
  Chunk921801 = require("./921801.js"),
  Chunk594174 = require("./594174.js"),
  Chunk726985 = require("./726985.js"),
  Chunk474936 = require("./474936.js"),
  Chunk131662 = require("./131662.js");
let p = e => {
  let {
    isDevTools: t = false
  } = e, n = (0, i.e7)([u.default], () => u.default.getCurrentUser()), p = (0, i.e7)([l.Z], () => {
    let e = l.Z.getCreatedAtOverride();
    return null != e ? e.toISOString().substring(0, 10) : ""
  }), h = (0, i.e7)([l.Z], () => l.Z.getPremiumTypeOverride()), m = e => {
    (0, s.u)(new Date(e))
  };
  return (0, r.jsxs)("div", {
    className: _.container,
    children: [(0, r.jsxs)(c.F, {
      setting: d.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
      children: [(0, r.jsx)(a.hjN, {
        title: "Override Client-Side Premium Type",
        tag: a.RB0.H3,
        children: (0, r.jsx)(a.q4e, {
          options: f.b6,
          value: h,
          onChange: e => {
            (0, s.C)(e, n)
          },
          popoutLayerContext: t ? o.O$ : true
        })
      }), (0, r.jsx)(a.Avr, {
        onClick: () => {
          (0, s.C)(f.F_, n)
        },
        text: "Reset premium type override"
      })]
    }), (0, r.jsxs)(c.F, {
      setting: d.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
      children: [(0, r.jsx)(a.hjN, {
        title: "Override Client-Side Account Created At Date",
        tag: a.RB0.H3,
        children: (0, r.jsx)("input", {
          type: "date",
          value: p,
          onChange: e => m(e.target.value),
          className: _.datePicker
        })
      }), (0, r.jsx)(a.Avr, {
        onClick: () => (0, s.u)(true),
        text: "Reset account created at override"
      })]
    })]
  })
}