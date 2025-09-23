/** Chunk was on web.js **/
/** chunk id: 306052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk246992 = require("./246992.js"),
  Chunk535664 = require("./535664.js"),
  Chunk502087 = require("./502087.js"),
  Chunk921801 = require("./921801.js"),
  Chunk594174 = require("./594174.js"),
  Chunk726985 = require("./726985.js"),
  Chunk474936 = require("./474936.js"),
  Chunk219630 = require("./219630.js");
let h = e => {
  let {
    isDevTools: t = false
  } = e, n = (0, i.e7)([d.default], () => d.default.getCurrentUser()), h = (0, i.e7)([c.Z], () => {
    let e = c.Z.getCreatedAtOverride();
    return null != e ? e.toISOString().substring(0, 10) : ""
  }), m = (0, i.e7)([c.Z], () => c.Z.getPremiumTypeOverride()), g = e => {
    (0, l.u)(new Date(e))
  };
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)(u.F, {
      setting: f.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
      children: [(0, r.jsx)(o.hjN, {
        title: "Override Client-Side Premium Type",
        tag: o.RB0.H3,
        children: (0, r.jsx)(o.q4e, {
          options: _.b6,
          value: m,
          onChange: e => {
            (0, l.C)(e, n)
          },
          popoutLayerContext: t ? s.O$ : true
        })
      }), (0, r.jsx)(a.zx, {
        look: a.zx.Looks.LINK,
        style: {
          padding: "0"
        },
        onClick: () => {
          (0, l.C)(_.F_, n)
        },
        children: "Reset premium type override"
      })]
    }), (0, r.jsxs)(u.F, {
      setting: f.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
      children: [(0, r.jsx)(o.hjN, {
        title: "Override Client-Side Account Created At Date",
        tag: o.RB0.H3,
        children: (0, r.jsx)("input", {
          type: "date",
          value: h,
          onChange: e => g(e.target.value),
          className: p.datePicker
        })
      }), (0, r.jsx)(a.zx, {
        look: a.zx.Looks.LINK,
        style: {
          padding: "0"
        },
        type: "submit",
        onClick: () => (0, l.u)(true),
        children: "Reset account created at override"
      })]
    })]
  })
}