/** Chunk was on 88615 **/
/** chunk id: 289642, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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

function x(e, t) {
  var n, x, h, b;
  let j = (0, i.bG)([o.A], () => o.A.getGuild(e)),
    E = (0, i.bG)([s.A], () => s.A.hasLayers()),
    w = null != (n = (0, d.A)(e)) && n,
    y = (0, u.j$)(e, t),
    I = (0, i.bG)([a.A], () => a.A.getStateForGuild(e)),
    S = null == I || null == (h = I.allPowerups) ? true : h[l.FB],
    C = (0, c.Ay)(e, S),
    N = null == S ? true : S.storeRemovalDate,
    O = null == I || null == (b = I.allPowerups) ? true : b[l.YG],
    L = (0, i.bG)([o.A], () => {
      var t;
      return null == (t = o.A.getGuild(e)) ? true : t.features
    }),
    P = null != (x = null == L ? true : L.has(g.GuildFeatures.PARTNERED)) && x,
    {
      onActivate: k,
      error: T
    } = (0, m.A)(e, O);
  (0, f.A)(T);
  let G = !E && w && y && null != S && !P && C.type === v.b_.POWERUP_ACTIVATED && null != N && null != O && null != j,
    R = r.useCallback(e => {
      e.stopPropagation(), k()
    }, [k]),
    D = r.useMemo(() => {
      if (!G) return null;
      let e = (0, p.A)(N),
        t = j.premiumTier === g.TVA.TIER_2 ? _.intl.string(A.default["0uo/LD"]) : true;
      return {
        firstHeader: S.title,
        secondHeader: _.intl.formatToPlainString(A.default["8imxAq"], {
          dateString: e
        }),
        firstBody: _.intl.formatToPlainString(A.default["/bW9tW"], {
          serverName: j.name
        }),
        secondBody: _.intl.formatToPlainString(A.default.D09fdi, {
          dateString: e,
          boostCount: S.cost
        }),
        thirdBody: _.intl.string(A.default["+zvKPr"]),
        primaryButtonText: t,
        onPrimaryClick: null != t ? R : true
      }
    }, [G, S, N, j, R]);
  return {
    shouldShow: G,
    modalConfig: D
  }
}