/** Chunk was on 66181 **/
/** chunk id: 306052, original params: e,t,n (module,exports,require) **/
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
  Chunk131662 = require("./131662.js");
let h = e => {
  let {
    isDevTools: t = false
  } = e, n = (0, r.e7)([u.default], () => u.default.getCurrentUser()), h = (0, r.e7)([c.Z], () => {
    let e = c.Z.getCreatedAtOverride();
    return null != e ? e.toISOString().substring(0, 10) : ""
  }), f = (0, r.e7)([c.Z], () => c.Z.getPremiumTypeOverride());
  return (0, i.jsxs)("div", {
    children: [(0, i.jsxs)(d.F, {
      setting: m.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
      children: [(0, i.jsx)(a.hjN, {
        title: "Override Client-Side Premium Type",
        tag: a.RB0.H3,
        children: (0, i.jsx)(a.q4e, {
          options: p.b6,
          value: f,
          onChange: e => {
            (0, o.C)(e, n)
          },
          popoutLayerContext: t ? l.O$ : true
        })
      }), (0, i.jsx)(s.zx, {
        look: s.zx.Looks.LINK,
        style: {
          padding: "0"
        },
        onClick: () => {
          (0, o.C)(p.F_, n)
        },
        children: "Reset premium type override"
      })]
    }), (0, i.jsxs)(d.F, {
      setting: m.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
      children: [(0, i.jsx)(a.hjN, {
        title: "Override Client-Side Account Created At Date",
        tag: a.RB0.H3,
        children: (0, i.jsx)("input", {
          type: "date",
          value: h,
          onChange: e => {
            var t;
            return t = e.target.value, void(0, o.u)(new Date(t))
          },
          className: g.datePicker
        })
      }), (0, i.jsx)(s.zx, {
        look: s.zx.Looks.LINK,
        style: {
          padding: "0"
        },
        type: "submit",
        onClick: () => (0, o.u)(true),
        children: "Reset account created at override"
      })]
    })]
  })
}