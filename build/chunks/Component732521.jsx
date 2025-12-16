/** Chunk was on web.js **/
/** chunk id: 732521, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk952306 = require("./952306.jsx"),
  Chunk418632 = require("./418632.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk335094 = require("./335094.js");

function c(e) {
  let {
    currentUser: t
  } = e;
  return t.isClaimed() ? null == t.email ? null : t.verified ? true : (0, r.jsxs)(i.M14, {
    type: "warning",
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-md/medium",
      children: s.intl.string(s.t.tuGzBT)
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      className: l.inlineNoticeText,
      children: s.intl.string(s.t.NAzplE)
    }), (0, r.jsx)(o.Z, {
      size: "sm",
      variant: "secondary"
    })]
  }) : (0, r.jsxs)(i.M14, {
    type: "critical",
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-md/medium",
      children: s.intl.string(s.t["/3qnL/"])
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      className: l.inlineNoticeText,
      children: s.intl.string(s.t.qKs3vg)
    }), (0, r.jsx)(i.Button, {
      variant: "secondary",
      size: "sm",
      text: s.intl.string(s.t["7psymi"]),
      onClick: () => a.Z.openClaimAccountModal()
    })]
  })
}