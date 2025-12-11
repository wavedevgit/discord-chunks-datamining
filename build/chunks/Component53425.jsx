/** Chunk was on 51235 **/
/** chunk id: 53425, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk938475 = require("./938475.js"),
  Chunk823379 = require("./823379.js"),
  Chunk734190 = require("./734190.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk50798 = require("./50798.js");
let g = Chunk473749.memo(function(e) {
  let {
    channel: t,
    selectedChannel: n,
    selectedVoiceChannelId: i,
    sortedThreadIds: l,
    withGuildIcon: g
  } = e, {
    density: b
  } = (0, s.TCT)(), m = (0, o.Wu)([c.Z], () => l.map(e => c.Z.getChannel(e)).filter(d.lm), [l]), y = (0, o.e7)([u.ZP], () => {
    let e = m[m.length - 1];
    if (null == e) return 0;
    let t = u.ZP.getVoiceStates(e.guild_id)[e.id];
    return null == t || 0 === t.length ? 0 : i !== e.id ? 40 : 32 * t.length + 8
  });
  return (0, r.jsx)("li", {
    className: p.container,
    children: (0, r.jsxs)("ul", {
      role: "group",
      "aria-label": h.intl.formatToPlainString(h.t.EiyIi6, {
        channelName: t.name
      }),
      children: [(0, r.jsx)("div", {
        className: a()(p.spineBorder, {
          [p.spineBorderWithGuildIcon]: g
        }),
        style: {
          bottom: ("cozy" === b ? 28 : 24) + y
        }
      }), m.map((e, t) => (0, r.jsx)(f.Z, {
        thread: e,
        isSelectedChannel: (null == n ? true : n.id) === e.id,
        isSelectedVoice: i === e.id,
        isLast: t === m.length - 1,
        withGuildIcon: g
      }, e.id))]
    })
  })
})