/** Chunk was on web.js **/
/** chunk id: 598804, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./361932.js"), require("./187205.js"), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk208049 = require("./208049.js"),
  Chunk763296 = require("./763296.js"),
  Chunk294206 = require("./294206.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk710111 = require("./710111.js"),
  Chunk231338 = require("./231338.js"),
  Chunk785174 = require("./785174.js");
let y = 4;

function O(e) {
  let t = (0, s.e7)([h.default], () => m.ZP.canUseSoundboardEverywhere(h.default.getCurrentUser())),
    n = (0, s.e7)([u.Z], () => u.Z.getSoundsForGuild(g.X8)),
    r = (0, s.Wu)([p.Z], () => p.Z.getGuildIds()),
    a = i.useMemo(() => _.Z.can(E.Pl.USE_EXTERNAL_SOUNDS, e), [e]);
  return i.useMemo(() => {
    let i = [];
    if (t && a) {
      let e = r.flatMap(e => {
        var t, n;
        return null != (n = null == (t = u.Z.getSoundsForGuild(e)) ? true : t.filter(e => e.available)) ? n : []
      });
      i.push(...o().sampleSize(e, y))
    } else if ((null == e ? true : e.guild_id) != null) {
      var s;
      let t = null == (s = u.Z.getSoundsForGuild(null == e ? true : e.guild_id)) ? true : s.filter(e => e.available);
      i.push(...o().sampleSize(t, y))
    }
    return i.length < y && i.push(...o().sampleSize(null != n ? n : [], y - i.length)), i
  }, [a, null == e ? true : e.guild_id, n, r, t])
}
let v = Chunk473749.memo(function(e) {
  let {
    channelId: t,
    onSelectSoundmoji: n
  } = e, a = (0, s.e7)([u.Z], () => !u.Z.isFetching() && !u.Z.hasFetchedAllSounds(), []), o = (0, s.e7)([f.Z], () => f.Z.getChannel(t)), p = O(o);
  return (i.useEffect(() => {
    (0, c.w)()
  }, [a]), 0 === p.length) ? (0, r.jsx)(l.$jN, {}) : (0, r.jsx)("div", {
    className: b.rowContainer,
    children: p.map((e, t) => (0, r.jsx)(d.ZP, {
      suppressPlaySound: true,
      enableSecondaryActions: true,
      isSoundmoji: true,
      sound: e,
      channel: o,
      onSelectItem: t => null == n ? true : n(e, !t.shiftKey)
    }, t))
  })
})