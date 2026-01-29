/** Chunk was on 1113 **/
/** chunk id: 220628, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function g(e, t, n) {
  n && (0, i.s7G)(), (0, d.h)(e, t)
}

function f(e, t) {
  let {
    analyticsLocations: n
  } = (0, s.Ay)(), {
    onToggle: i,
    isLoading: d,
    error: f
  } = (0, u.A)(e, t), m = (0, l.bG)([o.A], () => o.A.getGuild(e)), b = (0, c.A)(e, t);
  return {
    onActivate: r.useCallback(function() {
      var e;
      let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
        {
          shouldCloseAllModals: l = true
        } = r;
      if (null != m && null != t) return b < t.cost ? void(0, a.g)({
        analyticsLocation: {
          page: p.liQ.GUILD_POWERUPS_OVERVIEW,
          section: p.JJy.GUILD_POWERUPS_OVERVIEW_CARD
        },
        numberOfBoostsToAdd: t.cost - b,
        analyticsLocations: n,
        guild: m,
        intent: t.type === h.o9.LEVEL ? h.Pn.LEVEL : h.Pn.PERK,
        onSubscribeComplete: () => {
          var e;
          return null == (e = i(true)) ? true : e.then(() => {
            g(m.id, t, l)
          })
        }
      }) : null == (e = i(true)) ? true : e.then(() => {
        g(m.id, t, l)
      })
    }, [i, t, b, n, m]),
    isLoading: d,
    error: f
  }
}