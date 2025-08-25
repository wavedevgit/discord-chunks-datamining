/** Chunk was on web.js **/
/** chunk id: 888256, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk543879 = require("./543879.js");

function c(e) {
  let {
    className: t,
    currentUser: n,
    disabled: c,
    handleDisableAccount: u,
    handleDeleteAccount: d
  } = e, f = n.isClaimed();
  return (0, r.jsx)(o.F, {
    setting: a.s6.ACCOUNT_DISABLE_ACCOUNT,
    children: (0, r.jsxs)(i.hjN, {
      className: t,
      title: s.intl.string(s.t.ZKsIkp),
      children: [(0, r.jsx)(i.R94, {
        className: l.description,
        type: i.R94.Types.DESCRIPTION,
        children: f ? s.intl.string(s.t.TIh3Ym) : s.intl.string(s.t.czsGAw)
      }), (0, r.jsxs)(i.hE2, {
        size: "sm",
        className: l.buttonContainer,
        children: [f ? (0, r.jsx)(i.zxk, {
          variant: "critical-primary",
          size: "sm",
          text: s.intl.string(s.t.jf5GGR),
          disabled: c,
          onClick: u
        }) : null, (0, r.jsx)(o.F, {
          setting: a.s6.ACCOUNT_DELETE_ACCOUNT,
          children: (0, r.jsx)(i.zxk, {
            variant: "critical-secondary",
            size: "sm",
            text: s.intl.string(s.t["8lQ2ra"]),
            disabled: c,
            onClick: d
          })
        })]
      })]
    })
  })
}