/** Chunk was on web.js **/
/** chunk id: 852923, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk471253 = require("./471253.js"),
  Chunk623633 = require("./623633.js"),
  Chunk930180 = require("./930180.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk250043 = require("./250043.js");

function p(e) {
  let t = l.Z.getVoiceChannelId();
  if (null == t) return;
  let n = s.Z.getChannel(t);
  null != n && (0, c.RK)(n, e)
}

function h(e) {
  var t, n;
  let {
    channelId: i
  } = e, o = null != (t = (0, d._d)(i)) ? t : 0, s = null != (n = (0, d.K3)(i)) ? n : 0;
  return o > 0 && s > 0 ? (0, r.jsx)("div", {
    className: _.blocked,
    children: (0, r.jsx)("div", {
      className: a()(_.blockedText, _.noIcon),
      children: f.intl.string(f.t.xlJRfv)
    })
  }) : o > 0 ? (0, r.jsx)("div", {
    className: _.blocked,
    children: (0, r.jsx)("div", {
      className: a()(_.blockedText, _.noIcon),
      children: f.intl.string(f.t.WYad9Z)
    })
  }) : s > 0 ? (0, r.jsx)("div", {
    className: _.blocked,
    children: (0, r.jsx)("div", {
      className: a()(_.blockedText, _.noIcon),
      children: f.intl.string(f.t.eHq2OF)
    })
  }) : null
}

function m() {
  let e = (0, Chunk623633.Z)();
  return null == module ? null : (0, Chunk951288.jsxs)(Chunk481060.qXd, {
    className: Chunk250043.container,
    color: Chunk481060.DM8.DEFAULT,
    children: [Chunk388032.intl.string(Chunk388032.t.Ul1RJQ), (0, Chunk951288.jsx)(h, {
      channelId: module.id
    }), (0, Chunk951288.jsxs)(Chunk481060.ButtonGroup, {
      size: "sm",
      className: Chunk250043.buttonGroup,
      children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "overlay-primary",
        text: Chunk388032.intl.string(Chunk388032.t.MpO0px),
        onClick: () => p(false)
      }), (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "secondary",
        onClick: () => p(true),
        text: Chunk388032.intl.string(Chunk388032.t["1YDv7a"])
      })]
    })]
  })
}