/** Chunk was on 20501 **/
/** chunk id: 888256, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk583965 = require("./583965.js");

function c(e) {
  let {
    className: t,
    currentUser: n,
    disabled: c,
    handleDisableAccount: d,
    handleDeleteAccount: u
  } = e, m = n.isClaimed();
  return (0, i.jsx)(s.F, {
    setting: a.s6.ACCOUNT_DISABLE_ACCOUNT,
    children: (0, i.jsxs)(r.hjN, {
      className: t,
      title: l.intl.string(l.t.ZKsIkp),
      children: [(0, i.jsx)(r.R94, {
        className: o.description,
        type: r.R94.Types.DESCRIPTION,
        children: m ? l.intl.string(l.t.TIh3Ym) : l.intl.string(l.t.czsGAw)
      }), (0, i.jsxs)(r.hE2, {
        size: "sm",
        className: o.buttonContainer,
        children: [m ? (0, i.jsx)(r.zxk, {
          variant: "critical-primary",
          size: "sm",
          text: l.intl.string(l.t.jf5GGR),
          disabled: c,
          onClick: d
        }) : null, (0, i.jsx)(s.F, {
          setting: a.s6.ACCOUNT_DELETE_ACCOUNT,
          children: (0, i.jsx)(r.zxk, {
            variant: "critical-secondary",
            size: "sm",
            text: l.intl.string(l.t["8lQ2ra"]),
            disabled: c,
            onClick: u
          })
        })]
      })]
    })
  })
}