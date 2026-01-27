/** Chunk was on web.js **/
/** chunk id: 860371, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./114821.js"), require("./339614.js"), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk796774 = require("./796774.js"),
  Chunk209932 = require("./209932.js"),
  Chunk69217 = require("./69217.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk980504 = require("./980504.js"),
  Chunk818348 = require("./818348.js"),
  Chunk343743 = require("./343743.js");
let b = 4;

function O(e) {
  let t = (0, s.bG)([h.default], () => m.Ay.canUseSoundboardEverywhere(h.default.getCurrentUser())),
    n = (0, s.bG)([u.A], () => u.A.getSoundsForGuild(g.mV)),
    r = (0, s.yK)([p.A], () => p.A.getGuildIds()),
    a = i.useMemo(() => _.A.can(E.xB.USE_EXTERNAL_SOUNDS, e), [e]);
  return i.useMemo(() => {
    let i = [];
    if (t && a) {
      let e = r.flatMap(e => {
        var t, n;
        return null != (t = null == (n = u.A.getSoundsForGuild(e)) ? true : n.filter(e => e.available)) ? t : []
      });
      i.push(...o().sampleSize(e, b))
    } else if ((null == e ? true : e.guild_id) != null) {
      var s;
      let t = null == (s = u.A.getSoundsForGuild(null == e ? true : e.guild_id)) ? true : s.filter(e => e.available);
      i.push(...o().sampleSize(t, b))
    }
    return i.length < b && i.push(...o().sampleSize(null != n ? n : [], b - i.length)), i
  }, [a, null == e ? true : e.guild_id, n, r, t])
}
let v = Chunk64700.memo(function(e) {
  let {
    channelId: t,
    onSelectSoundmoji: n
  } = e, a = (0, s.bG)([u.A], () => !u.A.isFetching() && !u.A.hasFetchedAllSounds(), []), o = (0, s.bG)([f.A], () => f.A.getChannel(t)), p = O(o);
  return (i.useEffect(() => {
    (0, c.E7)()
  }, [a]), 0 === p.length) ? (0, r.jsx)(l.y$y, {}) : (0, r.jsx)("div", {
    className: y.q,
    children: p.map((e, t) => (0, r.jsx)(d.Ay, {
      suppressPlaySound: true,
      enableSecondaryActions: true,
      isSoundmoji: true,
      sound: e,
      channel: o,
      onSelectItem: t => null == n ? true : n(e, !t.shiftKey)
    }, t))
  })
})