/** Chunk was on web.js **/
/** chunk id: 7064, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
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

function f(e) {
  let {
    currentUser: t,
    disabled: n,
    handleDisableAccount: f,
    handleDeleteAccount: p
  } = e, _ = t.isClaimed(), h = i.useRef(null);
  return (0, o.A)(h, l.Ew.AccountScrollPositions.DISABLE_ACCOUNT), (0, r.jsx)(s.x, {
    setting: c.H.ACCOUNT_DISABLE_ACCOUNT,
    children: (0, r.jsx)("div", {
      ref: h,
      children: (0, r.jsx)(a.D0$, {
        label: u.intl.string(u.t.ZKsIks),
        description: _ ? u.intl.string(u.t.TIh3Yj) : u.intl.string(u.t.czsGA8),
        children: (0, r.jsxs)(a.ButtonGroup, {
          size: "sm",
          className: d.U,
          children: [_ ? (0, r.jsx)(a.Button, {
            variant: "critical-primary",
            size: "sm",
            text: u.intl.string(u.t.jf5GGb),
            disabled: n,
            onClick: f
          }) : null, (0, r.jsx)(s.x, {
            setting: c.H.ACCOUNT_DELETE_ACCOUNT,
            children: (0, r.jsx)(a.Button, {
              variant: "critical-secondary",
              size: "sm",
              text: u.intl.string(u.t["8lQ2rR"]),
              disabled: n,
              onClick: p
            })
          })]
        })
      })
    })
  })
}