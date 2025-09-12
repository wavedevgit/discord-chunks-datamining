/** Chunk was on 11160 **/
/** chunk id: 385902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => y,
  _: () => O
});
var Chunk647438 = require("./647438.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk819640 = require("./819640.js"),
  Chunk905128 = require("./905128.js"),
  Chunk158638 = require("./158638.js"),
  Chunk639777 = require("./639777.js"),
  Chunk973772 = require("./973772.js"),
  Chunk834209 = require("./834209.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx");

function O(e, t) {
  let n = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
    r = null == n ? true : n.allPowerups[i.A$],
    o = (0, d.ZP)(e, r),
    a = (0, c.q8)(e, t),
    u = null == r ? true : r.storeRemovalDate,
    f = a && null != u && o.type !== h.A3.INACTIVE,
    g = f ? {
      title: b.intl.formatToPlainString(m.default.mgoPkZ, {
        perkName: null == r ? true : r.title
      }),
      description: b.intl.formatToPlainString(m.default.UT9pkJ, {
        dateString: (0, p.Z)(u)
      })
    } : null;
  return {
    shouldShow: f,
    notificationConfig: g
  }
}

function y(e, t) {
  var n, d, h, O;
  let y = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
    _ = (0, l.e7)([a.Z], () => a.Z.hasLayers()),
    v = null != (O = (0, u.Z)(e)) && O,
    j = (0, c.q8)(e, t),
    x = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
    C = (null == x || null == (n = x.unlockedPowerups) ? true : n[i.A$]) != null,
    E = null == x || null == (d = x.allPowerups) ? true : d[i.A$],
    S = null == E ? true : E.storeRemovalDate,
    P = null == x || null == (h = x.allPowerups) ? true : h[i.XW],
    {
      onActivate: I
    } = (0, f._C)(e, P),
    N = !_ && v && j && C && null != E && null != S && null != P && null != y,
    Z = r.useCallback(e => {
      I(e)
    }, [I]),
    w = r.useMemo(() => {
      if (!N) return null;
      let e = (0, p.Z)(S),
        t = y.premiumTier === g.Eu4.TIER_2 ? b.intl.string(m.default["0uo/LC"]) : true;
      return {
        firstHeader: E.title,
        secondHeader: b.intl.formatToPlainString(m.default["8imxAg"], {
          dateString: e
        }),
        firstBody: b.intl.formatToPlainString(m.default["/bW9tb"], {
          serverName: y.name
        }),
        secondBody: b.intl.formatToPlainString(m.default.D09fdn, {
          dateString: e,
          boostCount: E.cost
        }),
        thirdBody: b.intl.string(m.default["+zvKPj"]),
        primaryButtonText: t,
        onPrimaryClick: null != t ? Z : true
      }
    }, [N, E, S, y, Z]);
  return {
    shouldShow: N,
    modalConfig: w
  }
}