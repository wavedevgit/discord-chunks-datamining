/** Chunk was on 30437 **/
/** chunk id: 385902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => O,
  _: () => _
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
  Chunk459196 = require("./459196.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t) {
  var n;
  let r = (0, l.e7)([o.Z], () => {
      var t;
      return null == (t = o.Z.getGuild(e)) ? true : t.features
    }),
    a = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
    u = null == a ? true : a.allPowerups[i.A$],
    f = (0, d.ZP)(e, u),
    _ = (0, c.q8)(e, t),
    O = null == u ? true : u.storeRemovalDate,
    y = null != (n = null == r ? true : r.has(g.GuildFeatures.PARTNERED)) && n,
    v = _ && null != O && !y && f.type === h.A3.POWERUP_ACTIVATED,
    j = v ? {
      title: b.intl.formatToPlainString(m.default.mgoPkU, {
        perkName: null == u ? true : u.title
      }),
      description: b.intl.formatToPlainString(m.default.UT9pkI, {
        dateString: (0, p.Z)(O)
      })
    } : null;
  return {
    shouldShow: v,
    notificationConfig: j
  }
}

function O(e, t) {
  var n, _, O, y;
  let v = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
    j = (0, l.e7)([a.Z], () => a.Z.hasLayers()),
    x = null != (O = (0, u.Z)(e)) && O,
    C = (0, c.q8)(e, t),
    E = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
    S = null == E || null == (n = E.allPowerups) ? true : n[i.A$],
    I = (0, d.ZP)(e, S),
    P = null == S ? true : S.storeRemovalDate,
    N = null == E || null == (_ = E.allPowerups) ? true : _[i.XW],
    Z = (0, l.e7)([o.Z], () => {
      var t;
      return null == (t = o.Z.getGuild(e)) ? true : t.features
    }),
    T = null != (y = null == Z ? true : Z.has(g.GuildFeatures.PARTNERED)) && y,
    {
      onActivate: w
    } = (0, f._C)(e, N),
    A = !j && x && C && null != S && !T && I.type === h.A3.POWERUP_ACTIVATED && null != P && null != N && null != v,
    R = r.useCallback(e => {
      w(e)
    }, [w]),
    D = r.useMemo(() => {
      if (!A) return null;
      let e = (0, p.Z)(P),
        t = v.premiumTier === g.Eu4.TIER_2 ? b.intl.string(m.default["0uo/LD"]) : true;
      return {
        firstHeader: S.title,
        secondHeader: b.intl.formatToPlainString(m.default["8imxAq"], {
          dateString: e
        }),
        firstBody: b.intl.formatToPlainString(m.default["/bW9tW"], {
          serverName: v.name
        }),
        secondBody: b.intl.formatToPlainString(m.default.D09fdi, {
          dateString: e,
          boostCount: S.cost
        }),
        thirdBody: b.intl.string(m.default["+zvKPr"]),
        primaryButtonText: t,
        onPrimaryClick: null != t ? R : true
      }
    }, [A, S, P, v, R]);
  return {
    shouldShow: A,
    modalConfig: D
  }
}