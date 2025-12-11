/** Chunk was on 51235 **/
/** chunk id: 385902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => O,
  _: () => y
});
var Chunk473749 = require("./473749.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk819640 = require("./819640.js"),
  Chunk905128 = require("./905128.js"),
  Chunk158638 = require("./158638.js"),
  Chunk238343 = require("./238343.jsx"),
  Chunk639777 = require("./639777.js"),
  Chunk973772 = require("./973772.js"),
  Chunk834209 = require("./834209.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk44542 = require("./44542.js"),
  Chunk388032 = require("./388032.jsx");

function y(e, t) {
  var n;
  let r = (0, l.e7)([a.Z], () => {
      var t;
      return null == (t = a.Z.getGuild(e)) ? true : t.features
    }),
    o = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
    u = null == o ? true : o.allPowerups[i.A$],
    d = (0, f.ZP)(e, u),
    y = (0, c.q8)(e, t),
    O = null == u ? true : u.storeRemovalDate,
    v = null != (n = null == r ? true : r.has(g.GuildFeatures.PARTNERED)) && n,
    j = y && null != O && !v && d.type === p.A3.POWERUP_ACTIVATED,
    C = j ? {
      title: m.intl.formatToPlainString(b.default.mgoPkU, {
        perkName: null == u ? true : u.title
      }),
      description: m.intl.formatToPlainString(b.default.UT9pkI, {
        dateString: (0, h.Z)(O)
      })
    } : null;
  return {
    shouldShow: j,
    notificationConfig: C
  }
}

function O(e, t) {
  var n, y, O, v;
  let j = (0, l.e7)([a.Z], () => a.Z.getGuild(e)),
    C = (0, l.e7)([o.Z], () => o.Z.hasLayers()),
    x = null != (O = (0, d.Z)(e)) && O,
    E = (0, c.q8)(e, t),
    S = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
    I = null == S || null == (n = S.allPowerups) ? true : n[i.A$],
    _ = (0, f.ZP)(e, I),
    P = null == I ? true : I.storeRemovalDate,
    N = null == S || null == (y = S.allPowerups) ? true : y[i.XW],
    Z = (0, l.e7)([a.Z], () => {
      var t;
      return null == (t = a.Z.getGuild(e)) ? true : t.features
    }),
    w = null != (v = null == Z ? true : Z.has(g.GuildFeatures.PARTNERED)) && v,
    {
      onActivate: T
    } = (0, u._C)(e, N),
    A = !C && x && E && null != I && !w && _.type === p.A3.POWERUP_ACTIVATED && null != P && null != N && null != j,
    R = r.useCallback(e => {
      e.stopPropagation(), T()
    }, [T]),
    D = r.useMemo(() => {
      if (!A) return null;
      let e = (0, h.Z)(P),
        t = j.premiumTier === g.Eu4.TIER_2 ? m.intl.string(b.default["0uo/LD"]) : true;
      return {
        firstHeader: I.title,
        secondHeader: m.intl.formatToPlainString(b.default["8imxAq"], {
          dateString: e
        }),
        firstBody: m.intl.formatToPlainString(b.default["/bW9tW"], {
          serverName: j.name
        }),
        secondBody: m.intl.formatToPlainString(b.default.D09fdi, {
          dateString: e,
          boostCount: I.cost
        }),
        thirdBody: m.intl.string(b.default["+zvKPr"]),
        primaryButtonText: t,
        onPrimaryClick: null != t ? R : true
      }
    }, [A, I, P, j, R]);
  return {
    shouldShow: A,
    modalConfig: D
  }
}