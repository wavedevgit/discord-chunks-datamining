/** Chunk was on web.js **/
/** chunk id: 888256, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.jsx"),
  Chunk996073 = require("./996073.js"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk747511 = require("./747511.js");

function f(e) {
  let {
    currentUser: t,
    disabled: n,
    handleDisableAccount: f,
    handleDeleteAccount: p
  } = e, _ = t.isClaimed(), m = i.useRef(null);
  return (0, s.Z)(m, l.KQ.AccountScrollPositions.DISABLE_ACCOUNT), (0, r.jsx)(o.F, {
    setting: c.s6.ACCOUNT_DISABLE_ACCOUNT,
    children: (0, r.jsx)("div", {
      ref: m,
      children: (0, r.jsx)(a.gNt, {
        label: u.intl.string(u.t.ZKsIks),
        description: _ ? u.intl.string(u.t.TIh3Yj) : u.intl.string(u.t.czsGA8),
        children: (0, r.jsxs)(a.ButtonGroup, {
          size: "sm",
          className: d.buttonContainer,
          children: [_ ? (0, r.jsx)(a.Button, {
            variant: "critical-primary",
            size: "sm",
            text: u.intl.string(u.t.jf5GGb),
            disabled: n,
            onClick: f
          }) : null, (0, r.jsx)(o.F, {
            setting: c.s6.ACCOUNT_DELETE_ACCOUNT,
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