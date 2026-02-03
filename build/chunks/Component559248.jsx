/** Chunk was on 44669 **/
/** chunk id: 559248, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk10094 = require("./10094.js"),
  Chunk683760 = require("./683760.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk531525 = require("./531525.js"),
  Chunk788868 = require("./788868.js");
let g = () => {
  let e = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
    t = (0, s.bG)([c.A], () => {
      let e = c.A.getCreatedAtOverride();
      return null != e ? e.toISOString().substring(0, 10) : ""
    }),
    n = (0, s.bG)([c.A], () => c.A.getPremiumTypeOverride());
  return (0, r.jsxs)(a.BJc, {
    gap: 16,
    children: [(0, r.jsxs)(u.x, {
      setting: p.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
      children: [(0, r.jsx)(a.l6P, {
        label: "Override Client-Side Premium Type",
        options: h.Jm,
        value: n,
        onSelectionChange: t => {
          (0, o.O)(t, e)
        },
        selectionMode: "single",
        fullWidth: true
      }), (0, r.jsx)(a.QWc, {
        onClick: () => {
          (0, o.O)(h.$I, e)
        },
        text: "Reset premium type override"
      })]
    }), (0, r.jsxs)(u.x, {
      setting: p.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
      children: [(0, r.jsx)(a.J3s, {
        label: "Override Client-Side Account Created At Date",
        value: i()(t),
        onSelect: e => {
          var t;
          return t = e.toISOString(), void(0, o.Y)(new Date(t))
        }
      }), (0, r.jsx)(a.QWc, {
        onClick: () => (0, o.Y)(true),
        text: "Reset account created at override"
      })]
    })]
  })
}