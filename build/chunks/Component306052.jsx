/** Chunk was on web.js **/
/** chunk id: 306052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk535664 = require("./535664.js"),
  Chunk502087 = require("./502087.js"),
  Chunk921801 = require("./921801.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk726985 = require("./726985.js"),
  Chunk474936 = require("./474936.js");
let _ = () => {
  let e = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
    t = (0, o.e7)([c.Z], () => {
      let e = c.Z.getCreatedAtOverride();
      return null != e ? e.toISOString().substring(0, 10) : ""
    }),
    n = (0, o.e7)([c.Z], () => c.Z.getPremiumTypeOverride()),
    i = e => {
      (0, l.u)(new Date(e))
    };
  return (0, r.jsxs)(s.Kqy, {
    gap: 16,
    children: [(0, r.jsxs)(u.F, {
      setting: f.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
      children: [(0, r.jsx)(s.PhF, {
        label: "Override Client-Side Premium Type",
        options: p.b6,
        value: n,
        onSelectionChange: t => {
          (0, l.C)(t, e)
        },
        selectionMode: "single",
        fullWidth: true
      }), (0, r.jsx)(s.Avr, {
        onClick: () => {
          (0, l.C)(p.F_, e)
        },
        text: "Reset premium type override"
      })]
    }), (0, r.jsxs)(u.F, {
      setting: f.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
      children: [(0, r.jsx)(s.Wrb, {
        label: "Override Client-Side Account Created At Date",
        value: a()(t),
        onSelect: e => i(e.toISOString())
      }), (0, r.jsx)(s.Avr, {
        onClick: () => (0, l.u)(true),
        text: "Reset account created at override"
      })]
    })]
  })
}