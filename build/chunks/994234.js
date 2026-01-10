/** Chunk was on 81985 **/
/** chunk id: 994234, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk879892 = require("./879892.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk607346 = require("./607346.js"),
  Chunk343334 = require("./343334.js"),
  Chunk278646 = require("./278646.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js");

function h(e, t, n) {
  n && (0, l.pTH)(), (0, d.h)(e, t)
}

function g(e, t) {
  let {
    analyticsLocations: n
  } = (0, a.ZP)(), {
    onToggle: l,
    isLoading: d,
    error: g
  } = (0, u.Z)(e, t), m = (0, i.e7)([s.Z], () => s.Z.getGuild(e)), b = (0, c.Z)(e, t);
  return {
    onActivate: r.useCallback(function() {
      var e;
      let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
        {
          shouldCloseAllModals: i = true
        } = r;
      if (null != m && null != t) return b < t.cost ? void(0, o.u)({
        analyticsLocation: {
          page: f.ZY5.GUILD_POWERUPS_OVERVIEW,
          section: f.jXE.GUILD_POWERUPS_OVERVIEW_CARD
        },
        numberOfBoostsToAdd: t.cost - b,
        analyticsLocations: n,
        guild: m,
        intent: t.type === p.Us.LEVEL ? p.P2.LEVEL : p.P2.PERK,
        onSubscribeComplete: () => {
          var e;
          return null == (e = l(true)) ? true : e.then(() => {
            h(m.id, t, i)
          })
        }
      }) : null == (e = l(true)) ? true : e.then(() => {
        h(m.id, t, i)
      })
    }, [l, t, b, n, m]),
    isLoading: d,
    error: g
  }
}