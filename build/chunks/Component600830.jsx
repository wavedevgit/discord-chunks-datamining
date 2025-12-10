/** Chunk was on 56944 **/
/** chunk id: 600830, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => O
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

function O(t) {
  let {
    channel: e,
    onSelect: n,
    onInteraction: O
  } = t, g = (0, p.Z)(), h = d.Fg.useSetting(), v = function(t) {
    let e = (0, l.e7)([a.Z], () => a.Z.getWindow(f.KJ3.CHANNEL_CALL_POPOUT));
    return null == t || null != e ? null : (0, r.jsx)(i.sNh, {
      id: "popout-call",
      label: j.intl.string(j.t.JzWezz),
      icon: i.rgF,
      action: () => s.openChannelCallPopout(t)
    })
  }(null != e ? e : true), y = function(t) {
    let e = (0, l.e7)([b.Z], () => b.Z.getGuild(null == t ? true : t.guild_id)),
      n = (0, c.Z)(null != t ? t : null, null != e ? e : null),
      o = (0, u.Z)(null != t ? t : null);
    return null != t && t.isGuildVocal() ? (0, r.jsxs)(i.kSQ, {
      children: [n, o]
    }) : null
  }(e);
  return (0, r.jsxs)(i.v2r, {
    navId: "rtc-channel",
    "aria-label": j.intl.string(j.t.ogxXGq),
    onClose: o.Zy,
    onSelect: n,
    onInteraction: O,
    children: [g, y, (0, r.jsxs)(i.kSQ, {
      children: [v, (0, r.jsx)(i.S89, {
        id: "show-voice-states",
        checked: h,
        action: () => d.Fg.updateSetting(!h),
        label: j.intl.string(j.t.vkbSB0)
      })]
    })]
  })
}