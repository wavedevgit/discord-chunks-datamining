/** Chunk was on 26434 **/
/** chunk id: 943762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => c,
  r: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk188206 = require("./188206.js");

function c(e) {
  let {
    activityUsers: t,
    guildId: n,
    activityText: o
  } = e;
  return (0, r.jsxs)("div", {
    className: s.wrapper,
    children: [(0, r.jsx)(l.ZP, {
      guildId: n,
      users: t,
      max: 6,
      size: l.u8.SIZE_16
    }), (0, r.jsxs)(i.Text, {
      variant: "text-xs/normal",
      color: "none",
      children: [t.length, " ", o]
    })]
  })
}

function u(e) {
  switch (null == e ? true : e.type) {
    case o.IIU.STREAMING:
      return {
        text: a.intl.string(a.t["Jpkr/v"]), Icon: i.m3e
      };
    case o.IIU.LISTENING:
      return {
        text: a.intl.string(a.t.kUEnxM), Icon: i.RZG
      };
    default:
      return {
        text: a.intl.string(a.t.BMTj29), Icon: i.iWm
      }
  }
}