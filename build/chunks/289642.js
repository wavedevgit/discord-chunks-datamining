/** Chunk was on 88615 **/
/** chunk id: 289642, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk64700 = require("./64700.js"),
  Chunk512750 = require("./512750.js"),
  Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk186111 = require("./186111.js"),
  Chunk645619 = require("./645619.js"),
  Chunk840120 = require("./840120.js"),
  Chunk363487 = require("./363487.js"),
  Chunk998418 = require("./998418.js"),
  Chunk162362 = require("./162362.js"),
  Chunk220628 = require("./220628.js"),
  Chunk867060 = require("./867060.js"),
  Chunk568065 = require("./568065.js"),
  Chunk652215 = require("./652215.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx");

function b(e, t) {
  var l, b, h, j;
  let _ = (0, i.bG)([s.A], () => s.A.getGuild(e)),
    E = (0, i.bG)([o.A], () => o.A.hasLayers()),
    y = null != (l = (0, d.A)(e)) && l,
    I = (0, u.j$)(e, t),
    S = (0, i.bG)([a.A], () => a.A.getStateForGuild(e)),
    w = null == S || null == (h = S.allPowerups) ? true : h[n.FB],
    N = (0, c.Ay)(e, w),
    O = null == w ? true : w.storeRemovalDate,
    L = null == S || null == (j = S.allPowerups) ? true : j[n.YG],
    P = (0, i.bG)([s.A], () => {
      var t;
      return null == (t = s.A.getGuild(e)) ? true : t.features
    }),
    T = null != (b = null == P ? true : P.has(A.GuildFeatures.PARTNERED)) && b,
    {
      onActivate: k,
      error: C
    } = (0, p.A)(e, L);
  (0, m.A)(C);
  let G = !E && y && I && null != w && !T && N.type === v.b_.POWERUP_ACTIVATED && null != O && null != L && null != _,
    R = r.useCallback(e => {
      e.stopPropagation(), k()
    }, [k]),
    D = r.useMemo(() => {
      if (!G) return null;
      let e = (0, f.A)(O),
        t = _.premiumTier === A.TVA.TIER_2 ? x.intl.string(g.default["0uo/LD"]) : true;
      return {
        firstHeader: w.title,
        secondHeader: x.intl.formatToPlainString(g.default["8imxAq"], {
          dateString: e
        }),
        firstBody: x.intl.formatToPlainString(g.default["/bW9tW"], {
          serverName: _.name
        }),
        secondBody: x.intl.formatToPlainString(g.default.D09fdi, {
          dateString: e,
          boostCount: w.cost
        }),
        thirdBody: x.intl.string(g.default["+zvKPr"]),
        primaryButtonText: t,
        onPrimaryClick: null != t ? R : true
      }
    }, [G, w, O, _, R]);
  return {
    shouldShow: G,
    modalConfig: D
  }
}