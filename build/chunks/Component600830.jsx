/** Chunk was on 56944 **/
/** chunk id: 600830, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk109764 = require("./109764.jsx"),
  Chunk367722 = require("./367722.js"),
  Chunk522474 = require("./522474.js"),
  Chunk788983 = require("./788983.js"),
  Chunk695346 = require("./695346.js"),
  Chunk393431 = require("./393431.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(n) {
  let {
    channel: t,
    onSelect: e,
    onInteraction: g
  } = n, y = (0, p.Z)(), h = d.Fg.useSetting(), j = function(n) {
    let t = (0, i.e7)([a.Z], () => a.Z.getWindow(f.KJ3.CHANNEL_CALL_POPOUT));
    return null == n || null != t ? null : (0, l.jsx)(r.sNh, {
      id: "popout-call",
      label: E.intl.string(E.t.JzWezz),
      icon: r.rgF,
      action: () => s.openChannelCallPopout(n)
    })
  }(null != t ? t : true), O = function(n) {
    let t = (0, i.e7)([b.Z], () => b.Z.getGuild(null == n ? true : n.guild_id)),
      e = (0, c.Z)(null != n ? n : null, null != t ? t : null),
      o = (0, u.Z)(null != n ? n : null);
    return null != n && n.isGuildVocal() ? (0, l.jsxs)(r.kSQ, {
      children: [e, o]
    }) : null
  }(t);
  return (0, l.jsxs)(r.v2r, {
    navId: "rtc-channel",
    "aria-label": E.intl.string(E.t.ogxXGq),
    onClose: o.Zy,
    onSelect: e,
    onInteraction: g,
    children: [y, O, (0, l.jsxs)(r.kSQ, {
      children: [j, (0, l.jsx)(r.S89, {
        id: "show-voice-states",
        checked: h,
        action: () => d.Fg.updateSetting(!h),
        label: E.intl.string(E.t.vkbSB0)
      })]
    })]
  })
}