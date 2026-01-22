/** Chunk was on web.js **/
/** chunk id: 559248, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk10094 = require("./10094.js"),
  Chunk683760 = require("./683760.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk531525 = require("./531525.js"),
  Chunk788868 = require("./788868.js");
let _ = () => {
  let e = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
    t = (0, s.bG)([c.A], () => {
      let e = c.A.getCreatedAtOverride();
      return null != e ? e.toISOString().substring(0, 10) : ""
    }),
    n = (0, s.bG)([c.A], () => c.A.getPremiumTypeOverride()),
    i = e => {
      (0, l.Y)(new Date(e))
    };
  return (0, r.jsxs)(o.BJc, {
    gap: 16,
    children: [(0, r.jsxs)(u.x, {
      setting: f.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
      children: [(0, r.jsx)(o.l6P, {
        label: "Override Client-Side Premium Type",
        options: p.Jm,
        value: n,
        onSelectionChange: t => {
          (0, l.O)(t, e)
        },
        selectionMode: "single",
        fullWidth: true
      }), (0, r.jsx)(o.QWc, {
        onClick: () => {
          (0, l.O)(p.$I, e)
        },
        text: "Reset premium type override"
      })]
    }), (0, r.jsxs)(u.x, {
      setting: f.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
      children: [(0, r.jsx)(o.J3s, {
        label: "Override Client-Side Account Created At Date",
        value: a()(t),
        onSelect: e => i(e.toISOString())
      }), (0, r.jsx)(o.QWc, {
        onClick: () => (0, l.Y)(true),
        text: "Reset account created at override"
      })]
    })]
  })
}