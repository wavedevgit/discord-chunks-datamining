/** Chunk was on 1272 **/
/** chunk id: 613609, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./457542.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk447543 = require("./447543.js"),
  Chunk568154 = require("./568154.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk701190 = require("./701190.js"),
  Chunk449934 = require("./449934.js"),
  Chunk650233 = require("./650233.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk898625 = require("./898625.js"),
  Chunk460160 = require("./460160.js");
let m = e => {
  let {
    guildId: t,
    inviteCode: n
  } = e, [m, b] = i.useState(h.hO.INITIAL), [_, O] = i.useState(null != n);
  i.useEffect(() => {
    null != n && a.ZP.resolveInvite(n, "Hub").finally(() => O(false))
  }, [n]);
  let E = (0, l.e7)([u.Z], () => null != n ? u.Z.getInvite(n) : null),
    y = (0, l.e7)([c.Z], () => c.Z.getGuild(t));
  i.useEffect(() => {
    null != y && (0, s.uL)(f.Z5c.CHANNEL(t))
  }, [y, t]);
  let v = i.useCallback(e => {
      b(t => Math.max(t, e))
    }, []),
    I = (0, d.gK)();
  return (0, r.jsx)("div", {
    className: g.page,
    children: (0, r.jsxs)(o.Z, {
      embedded: true,
      splash: I,
      waveState: m,
      showLogo: false,
      updateWaveState: v,
      children: [(0, r.jsx)("div", {
        className: g.dragRegion
      }), (0, r.jsx)("div", {
        className: g.contentWrapper,
        children: !_ && (0, r.jsx)(p.H, {
          invite: E
        })
      })]
    })
  })
}