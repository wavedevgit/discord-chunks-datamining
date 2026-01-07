/** Chunk was on web.js **/
/** chunk id: 852923, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk486550 = require("./486550.js");

function g(e) {
  if (!e && (0, _.u1)()) return void s.Z.showAgeVerificationGetStartedModal({
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
  } = e, o = null != (t = (0, p._d)(i)) ? t : 0, s = null != (n = (0, p.K3)(i)) ? n : 0;
  return o > 0 && s > 0 ? (0, r.jsx)("div", {
    className: h.blocked,
    children: (0, r.jsx)("div", {
      className: a()(h.blockedText, h.noIcon),
      children: m.intl.string(m.t.xlJRfv)
    })
  }) : o > 0 ? (0, r.jsx)("div", {
    className: h.blocked,
    children: (0, r.jsx)("div", {
      className: a()(h.blockedText, h.noIcon),
      children: m.intl.string(m.t.WYad9Z)
    })
  }) : s > 0 ? (0, r.jsx)("div", {
    className: h.blocked,
    children: (0, r.jsx)("div", {
      className: a()(h.blockedText, h.noIcon),
      children: m.intl.string(m.t.eHq2OF)
    })
  }) : null
}

function b() {
  let e = (0, f.Z)();
  return null == e ? null : (0, r.jsxs)(o.qXd, {
    className: h.container,
    color: o.DM8.DEFAULT,
    children: [m.intl.string(m.t.Ul1RJQ), (0, r.jsx)(E, {
      channelId: e.id
    }), (0, r.jsxs)(o.ButtonGroup, {
      size: "sm",
      className: h.buttonGroup,
      children: [(0, r.jsx)(o.Button, {
        variant: "overlay-primary",
        text: m.intl.string(m.t.MpO0px),
        onClick: () => g(false)
      }), (0, r.jsx)(o.Button, {
        variant: "secondary",
        onClick: () => g(true),
        text: m.intl.string(m.t["1YDv7a"])
      })]
    })]
  })
}