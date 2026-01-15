/** Chunk was on 44799 **/
/** chunk id: 28239, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk473749 = require("./473749.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk819640 = require("./819640.js"),
  Chunk905128 = require("./905128.js"),
  Chunk158638 = require("./158638.js"),
  Chunk639777 = require("./639777.js"),
  Chunk973772 = require("./973772.js"),
  Chunk834209 = require("./834209.js"),
  Chunk994234 = require("./994234.js"),
  Chunk192958 = require("./192958.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx");

function h(e, t) {
  var n, h, j, Z;
  let _ = (0, o.e7)([l.Z], () => l.Z.getGuild(e)),
    C = (0, o.e7)([a.Z], () => a.Z.hasLayers()),
    w = null != (j = (0, c.Z)(e)) && j,
    I = (0, u.q8)(e, t),
    E = (0, o.e7)([s.Z], () => s.Z.getStateForGuild(e)),
    P = null == E || null == (n = E.allPowerups) ? true : n[i.A$],
    T = (0, d.ZP)(e, P),
    S = null == P ? true : P.storeRemovalDate,
    N = null == E || null == (h = E.allPowerups) ? true : h[i.XW],
    y = (0, o.e7)([l.Z], () => {
      var t;
      return null == (t = l.Z.getGuild(e)) ? true : t.features
    }),
    O = null != (Z = null == y ? true : y.has(g.GuildFeatures.PARTNERED)) && Z,
    {
      onActivate: A,
      error: R
    } = (0, p.Z)(e, N);
  (0, m.Z)(R);
  let L = !C && w && I && null != P && !O && T.type === v.A3.POWERUP_ACTIVATED && null != S && null != N && null != _,
    k = r.useCallback(e => {
      e.stopPropagation(), A()
    }, [A]),
    U = r.useMemo(() => {
      if (!L) return null;
      let e = (0, f.Z)(S),
        t = _.premiumTier === g.Eu4.TIER_2 ? b.intl.string(x.default["0uo/LD"]) : true;
      return {
        firstHeader: P.title,
        secondHeader: b.intl.formatToPlainString(x.default["8imxAq"], {
          dateString: e
        }),
        firstBody: b.intl.formatToPlainString(x.default["/bW9tW"], {
          serverName: _.name
        }),
        secondBody: b.intl.formatToPlainString(x.default.D09fdi, {
          dateString: e,
          boostCount: P.cost
        }),
        thirdBody: b.intl.string(x.default["+zvKPr"]),
        primaryButtonText: t,
        onPrimaryClick: null != t ? k : true
      }
    }, [L, P, S, _, k]);
  return {
    shouldShow: L,
    modalConfig: U
  }
}