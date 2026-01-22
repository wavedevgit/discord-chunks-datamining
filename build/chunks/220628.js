/** Chunk was on 97492 **/
/** chunk id: 220628, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk987144 = require("./987144.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk485970 = require("./485970.js"),
  Chunk181940 = require("./181940.js"),
  Chunk299975 = require("./299975.jsx"),
  Chunk568065 = require("./568065.js"),
  Chunk652215 = require("./652215.js");

function h(e, t, n) {
  n && (0, i.s7G)(), (0, d.h)(e, t)
}

function b(e, t) {
  let {
    analyticsLocations: n
  } = (0, a.Ay)(), {
    onToggle: i,
    isLoading: d,
    error: b
  } = (0, u.A)(e, t), g = (0, l.bG)([o.A], () => o.A.getGuild(e)), m = (0, c.A)(e, t);
  return {
    onActivate: r.useCallback(function() {
      var e;
      let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
        {
          shouldCloseAllModals: l = true
        } = r;
      if (null != g && null != t) return m < t.cost ? void(0, s.g)({
        analyticsLocation: {
          page: p.liQ.GUILD_POWERUPS_OVERVIEW,
          section: p.JJy.GUILD_POWERUPS_OVERVIEW_CARD
        },
        numberOfBoostsToAdd: t.cost - m,
        analyticsLocations: n,
        guild: g,
        intent: t.type === f.o9.LEVEL ? f.Pn.LEVEL : f.Pn.PERK,
        onSubscribeComplete: () => {
          var e;
          return null == (e = i(true)) ? true : e.then(() => {
            h(g.id, t, l)
          })
        }
      }) : null == (e = i(true)) ? true : e.then(() => {
        h(g.id, t, l)
      })
    }, [i, t, m, n, g]),
    isLoading: d,
    error: b
  }
}