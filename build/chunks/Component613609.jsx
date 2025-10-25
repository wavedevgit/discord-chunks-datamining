/** Chunk was on 1272 **/
/** chunk id: 613609, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk242517 = require("./242517.js");
let g = e => {
  let {
    guildId: t,
    inviteCode: n
  } = e, [g, _] = i.useState(h.hO.INITIAL), [b, E] = i.useState(null != n);
  i.useEffect(() => {
    null != n && a.ZP.resolveInvite(n, "Hub").finally(() => E(false))
  }, [n]);
  let O = (0, l.e7)([u.Z], () => null != n ? u.Z.getInvite(n) : null),
    I = (0, l.e7)([c.Z], () => c.Z.getGuild(t));
  i.useEffect(() => {
    null != I && (0, o.uL)(f.Z5c.CHANNEL(t))
  }, [I, t]);
  let v = i.useCallback(e => {
      _(t => Math.max(t, e))
    }, []),
    y = (0, d.gK)();
  return (0, r.jsx)("div", {
    className: m.page,
    children: (0, r.jsxs)(s.Z, {
      embedded: true,
      splash: y,
      waveState: g,
      showLogo: false,
      updateWaveState: v,
      children: [(0, r.jsx)("div", {
        className: m.dragRegion
      }), (0, r.jsx)("div", {
        className: m.contentWrapper,
        children: !b && (0, r.jsx)(p.H, {
          invite: O
        })
      })]
    })
  })
}