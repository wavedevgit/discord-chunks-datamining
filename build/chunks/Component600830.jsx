/** Chunk was on 56944 **/
/** chunk id: 600830, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  default: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function E(n) {
  let {
    channel: t,
    onSelect: e,
    onInteraction: E
  } = n, g = (0, p.Z)(), y = d.Fg.useSetting(), j = function(n) {
    let t = (0, i.e7)([s.Z], () => s.Z.getWindow(f.KJ3.CHANNEL_CALL_POPOUT));
    return null == n || null != t ? null : (0, l.jsx)(r.sNh, {
      id: "popout-call",
      label: v.intl.string(v.t.JzWezz),
      icon: r.rgF,
      action: () => a.hP(n)
    })
  }(null != t ? t : true), h = function(n) {
    let t = (0, i.e7)([b.Z], () => b.Z.getGuild(null == n ? true : n.guild_id)),
      e = (0, c.Z)(null != n ? n : null, null != t ? t : null),
      o = (0, u.Z)(null != n ? n : null);
    return null != n && n.isGuildVocal() ? (0, l.jsxs)(r.kSQ, {
      children: [e, o]
    }) : null
  }(t);
  return (0, l.jsxs)(r.v2r, {
    navId: "rtc-channel",
    "aria-label": v.intl.string(v.t.ogxXGq),
    onClose: o.Zy,
    onSelect: e,
    onInteraction: E,
    children: [g, h, (0, l.jsxs)(r.kSQ, {
      children: [j, (0, l.jsx)(r.S89, {
        id: "show-voice-states",
        checked: y,
        action: () => d.Fg.updateSetting(!y),
        label: v.intl.string(v.t.vkbSB0)
      })]
    })]
  })
}