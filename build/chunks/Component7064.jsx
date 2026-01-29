/** Chunk was on 2827 **/
/** chunk id: 7064, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk193658 = require("./193658.js"),
  Chunk355097 = require("./355097.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk943626 = require("./943626.js");

function _(e) {
  let {
    currentUser: t,
    disabled: n,
    handleDisableAccount: _,
    handleDeleteAccount: p
  } = e, m = t.isClaimed(), g = i.useRef(null);
  return (0, a.A)(g, o.Ew.AccountScrollPositions.DISABLE_ACCOUNT), (0, r.jsx)(s.x, {
    setting: c.H.ACCOUNT_DISABLE_ACCOUNT,
    children: (0, r.jsx)("div", {
      ref: g,
      children: (0, r.jsx)(l.D0$, {
        label: d.intl.string(d.t.ZKsIks),
        description: m ? d.intl.string(d.t.TIh3Yj) : d.intl.string(d.t.czsGA8),
        children: (0, r.jsxs)(l.ButtonGroup, {
          size: "sm",
          className: u.U,
          children: [m ? (0, r.jsx)(l.Button, {
            variant: "critical-primary",
            size: "sm",
            text: d.intl.string(d.t.jf5GGb),
            disabled: n,
            onClick: _
          }) : null, (0, r.jsx)(s.x, {
            setting: c.H.ACCOUNT_DELETE_ACCOUNT,
            children: (0, r.jsx)(l.Button, {
              variant: "critical-secondary",
              size: "sm",
              text: d.intl.string(d.t["8lQ2rR"]),
              disabled: n,
              onClick: p
            })
          })]
        })
      })
    })
  })
}