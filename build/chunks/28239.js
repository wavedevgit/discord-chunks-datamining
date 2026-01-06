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
  let _ = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
    C = (0, l.e7)([a.Z], () => a.Z.hasLayers()),
    w = null != (j = (0, c.Z)(e)) && j,
    E = (0, u.q8)(e, t),
    I = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
    P = null == I || null == (n = I.allPowerups) ? true : n[i.A$],
    T = (0, d.ZP)(e, P),
    y = null == P ? true : P.storeRemovalDate,
    N = null == I || null == (h = I.allPowerups) ? true : h[i.XW],
    O = (0, l.e7)([o.Z], () => {
      var t;
      return null == (t = o.Z.getGuild(e)) ? true : t.features
    }),
    A = null != (Z = null == O ? true : O.has(v.GuildFeatures.PARTNERED)) && Z,
    {
      onActivate: S,
      error: R
    } = (0, p.Z)(e, N);
  (0, m.Z)(R);
  let L = !C && w && E && null != P && !A && T.type === g.A3.POWERUP_ACTIVATED && null != y && null != N && null != _,
    k = r.useCallback(e => {
      e.stopPropagation(), S()
    }, [S]),
    U = r.useMemo(() => {
      if (!L) return null;
      let e = (0, f.Z)(y),
        t = _.premiumTier === v.Eu4.TIER_2 ? b.intl.string(x.default["0uo/LD"]) : true;
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
    }, [L, P, y, _, k]);
  return {
    shouldShow: L,
    modalConfig: U
  }
}