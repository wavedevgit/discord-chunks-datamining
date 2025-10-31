/** Chunk was on web.js **/
/** chunk id: 888256, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk543879 = require("./543879.js");

function c(e) {
  let {
    currentUser: t,
    disabled: n,
    handleDisableAccount: c,
    handleDeleteAccount: u
  } = e, d = t.isClaimed();
  return (0, r.jsx)(a.F, {
    setting: o.s6.ACCOUNT_DISABLE_ACCOUNT,
    children: (0, r.jsx)(i.gNt, {
      label: s.intl.string(s.t.ZKsIks),
      description: d ? s.intl.string(s.t.TIh3Yj) : s.intl.string(s.t.czsGA8),
      children: (0, r.jsxs)(i.ButtonGroup, {
        size: "sm",
        className: l.buttonContainer,
        children: [d ? (0, r.jsx)(i.Button, {
          variant: "critical-primary",
          size: "sm",
          text: s.intl.string(s.t.jf5GGb),
          disabled: n,
          onClick: c
        }) : null, (0, r.jsx)(a.F, {
          setting: o.s6.ACCOUNT_DELETE_ACCOUNT,
          children: (0, r.jsx)(i.Button, {
            variant: "critical-secondary",
            size: "sm",
            text: s.intl.string(s.t["8lQ2rR"]),
            disabled: n,
            onClick: u
          })
        })]
      })
    })
  })
}