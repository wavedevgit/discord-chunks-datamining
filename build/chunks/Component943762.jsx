/** Chunk was on web.js **/
/** chunk id: 943762, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => c,
  r: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk633082 = require("./633082.js");

function c(e) {
  let {
    activityUsers: t,
    guildId: n,
    activityText: o
  } = e;
  return (0, r.jsxs)("div", {
    className: l.wrapper,
    children: [(0, r.jsx)(a.ZP, {
      guildId: n,
      users: t,
      max: 6,
      size: a.u8.SIZE_16
    }), (0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "none",
      children: o
    })]
  })
}

function u(e) {
  let {
    activity: t,
    activityUsersCount: n
  } = e;
  switch (null == t ? true : t.type) {
    case o.IIU.STREAMING:
      return {
        text: s.intl.formatToPlainString(s.t.tyCw2q, {
          count: n
        }), Icon: i.m3e
      };
    case o.IIU.LISTENING:
      return {
        text: s.intl.formatToPlainString(s.t["2l8yka"], {
          count: n
        }), Icon: i.RZG
      };
    default:
      return {
        text: s.intl.formatToPlainString(s.t.yJj035, {
          count: n
        }), Icon: i.iWm
      }
  }
}