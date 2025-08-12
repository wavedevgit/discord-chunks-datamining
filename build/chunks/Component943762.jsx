/** Chunk was on web.js **/
/** chunk id: 943762, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => c,
  r: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk607048 = require("./607048.js");

function c(e) {
  let {
    activityUsers: t,
    guildId: n,
    activityText: a
  } = e;
  return (0, r.jsxs)("div", {
    className: l.wrapper,
    children: [(0, r.jsx)(o.ZP, {
      guildId: n,
      users: t,
      max: 6,
      size: o.u8.SIZE_16
    }), (0, r.jsxs)(i.Text, {
      variant: "text-xs/normal",
      color: "none",
      children: [t.length, " ", a]
    })]
  })
}

function u(e) {
  switch (null == e ? true : e.type) {
    case a.IIU.STREAMING:
      return {
        text: s.intl.string(s.t["Jpkr/v"]), Icon: i.m3e
      };
    case a.IIU.LISTENING:
      return {
        text: s.intl.string(s.t.kUEnxM), Icon: i.RZG
      };
    default:
      return {
        text: s.intl.string(s.t.BMTj29), Icon: i.iWm
      }
  }
}