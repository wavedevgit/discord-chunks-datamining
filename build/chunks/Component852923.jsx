/** Chunk was on web.js **/
/** chunk id: 852923, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk471253 = require("./471253.js"),
  Chunk623633 = require("./623633.js"),
  Chunk930180 = require("./930180.js"),
  Chunk430104 = require("./430104.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk464757 = require("./464757.js");

function g(e) {
  if (!e && (0, p.u1)()) return void s.Z.showAgeVerificationGetStartedModal({
    entryPoint: l.cU.STAGE_CHANNEL_RAISE_HAND
  });
  let t = u.Z.getVoiceChannelId();
  if (null == t) return;
  let n = c.Z.getChannel(t);
  null != n && (0, d.RK)(n, e)
}

function E(e) {
  var t, n;
  let {
    channelId: i
  } = e, o = null != (t = (0, _._d)(i)) ? t : 0, s = null != (n = (0, _.K3)(i)) ? n : 0;
  return o > 0 && s > 0 ? (0, r.jsx)("div", {
    className: m.blocked,
    children: (0, r.jsx)("div", {
      className: a()(m.blockedText, m.noIcon),
      children: h.intl.string(h.t.xlJRfv)
    })
  }) : o > 0 ? (0, r.jsx)("div", {
    className: m.blocked,
    children: (0, r.jsx)("div", {
      className: a()(m.blockedText, m.noIcon),
      children: h.intl.string(h.t.WYad9Z)
    })
  }) : s > 0 ? (0, r.jsx)("div", {
    className: m.blocked,
    children: (0, r.jsx)("div", {
      className: a()(m.blockedText, m.noIcon),
      children: h.intl.string(h.t.eHq2OF)
    })
  }) : null
}

function b() {
  let e = (0, Chunk623633.Z)();
  return null == module ? null : (0, Chunk951288.jsxs)(Chunk481060.qXd, {
    className: Chunk464757.container,
    color: Chunk481060.DM8.DEFAULT,
    children: [Chunk388032.intl.string(Chunk388032.t.Ul1RJQ), (0, Chunk951288.jsx)(E, {
      channelId: module.id
    }), (0, Chunk951288.jsxs)(Chunk481060.ButtonGroup, {
      size: "sm",
      className: Chunk464757.buttonGroup,
      children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "overlay-primary",
        text: Chunk388032.intl.string(Chunk388032.t.MpO0px),
        onClick: () => g(false)
      }), (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "secondary",
        onClick: () => g(true),
        text: Chunk388032.intl.string(Chunk388032.t["1YDv7a"])
      })]
    })]
  })
}