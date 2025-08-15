/** Chunk was on 31253 **/
/** chunk id: 852923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk471253 = require("./471253.js"),
  Chunk623633 = require("./623633.js"),
  Chunk930180 = require("./930180.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk250043 = require("./250043.js");

function I(e) {
  let t = c.Z.getVoiceChannelId();
  if (null == t) return;
  let n = a.Z.getChannel(t);
  null != n && (0, s.RK)(n, e)
}

function T(e) {
  var t, n;
  let {
    channelId: i
  } = e, o = null != (t = (0, _._d)(i)) ? t : 0, a = null != (n = (0, _.K3)(i)) ? n : 0;
  return o > 0 && a > 0 ? (0, r.jsx)("div", {
    className: E.blocked,
    children: (0, r.jsx)("div", {
      className: l()(E.blockedText, E.noIcon),
      children: d.intl.string(d.t.xlJRfn)
    })
  }) : o > 0 ? (0, r.jsx)("div", {
    className: E.blocked,
    children: (0, r.jsx)("div", {
      className: l()(E.blockedText, E.noIcon),
      children: d.intl.string(d.t.WYad9f)
    })
  }) : a > 0 ? (0, r.jsx)("div", {
    className: E.blocked,
    children: (0, r.jsx)("div", {
      className: l()(E.blockedText, E.noIcon),
      children: d.intl.string(d.t.eHq2OD)
    })
  }) : null
}

function O() {
  let e = (0, Chunk623633.Z)();
  return null == module ? null : (0, Chunk951288.jsxs)(Chunk481060.qXd, {
    className: Chunk250043.container,
    color: Chunk481060.DM8.DEFAULT,
    children: [Chunk388032.intl.string(Chunk388032.t.Ul1RJS), (0, Chunk951288.jsx)(T, {
      channelId: module.id
    }), (0, Chunk951288.jsxs)(Chunk481060.hE2, {
      size: "sm",
      className: Chunk250043.buttonGroup,
      children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "overlay-primary",
        text: Chunk388032.intl.string(Chunk388032.t.MpO0p6),
        onClick: () => I(false)
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "secondary",
        onClick: () => I(true),
        text: Chunk388032.intl.string(Chunk388032.t["1YDv7e"])
      })]
    })]
  })
}