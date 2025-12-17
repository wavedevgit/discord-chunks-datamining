/** Chunk was on 67000 **/
/** chunk id: 730164, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Wj: () => P,
  ZP: () => _
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk473749 = require("./473749.js"),
  Chunk494497 = require("./494497.js"),
  Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk605236 = require("./605236.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk645041 = require("./645041.js"),
  Chunk430824 = require("./430824.js"),
  Chunk823379 = require("./823379.js"),
  Chunk267642 = require("./267642.js"),
  Chunk755458 = require("./755458.js"),
  Chunk60482 = require("./60482.js"),
  Chunk713081 = require("./713081.js"),
  Chunk608949 = require("./608949.js"),
  Chunk905128 = require("./905128.js"),
  Chunk326660 = require("./326660.js"),
  Chunk158638 = require("./158638.js"),
  Chunk19394 = require("./19394.js"),
  Chunk431971 = require("./431971.js"),
  Chunk10765 = require("./10765.js"),
  Chunk317169 = require("./317169.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js");

function _(e) {
  let t = (0, l.e7)([b.Z], () => b.Z.getNotificationStateForGuild(e), [e]),
    n = (0, l.e7)([m.Z], () => m.Z.getStateForGuild(e)),
    {
      indicator: g,
      showUnread: I
    } = function(e, t, n) {
      let i = (0, x.Z)(e).available,
        {
          shouldShow: s
        } = (0, j._)(e, "useGuildPowerupsNotificationIndicator"),
        c = (0, o.OA)(a.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
        u = s && !c,
        d = (0, l.e7)([p.Z], () => p.Z.getStateForGuild(e));
      return r.useMemo(() => {
        var e, r, l, a;
        if (null == t) return {
          indicator: true,
          showUnread: false
        };
        let {
          unlockedPowerups: o
        } = t, s = (0, v.h)([...Object.values(o), ...Object.values(null != (r = null == d ? true : d.entitlements) ? r : {})]), c = null != (l = null == n ? true : n.lastSeenWarningNotification) ? l : Date.now(), f = new Date(null == (e = s[s.length - 1]) ? true : e.ends_at).getTime(), h = null != (a = null == n ? true : n.lastBoostCount) ? a : 0, p = s.length > 0 && c < f, g = i - h;
        return p || u ? {
          indicator: {
            type: y.Ru.WARNING
          },
          showUnread: true
        } : i !== h && g > 0 ? {
          indicator: {
            type: y.Ru.UNREAD,
            count: g
          },
          showUnread: true
        } : {
          indicator: true,
          showUnread: false
        }
      }, [i, null == n ? true : n.lastBoostCount, null == n ? true : n.lastSeenWarningNotification, t, u, null == d ? true : d.entitlements])
    }(e, null != n ? n : true, t),
    _ = function(e, t) {
      let [n, o] = (0, s.US)(null != t ? [a.z.GUILD_POWERUP_PERKS_COACHMARK] : []), g = n === a.z.GUILD_POWERUP_PERKS_COACHMARK, {
        available: b
      } = (0, x.Z)(e), m = (0, l.e7)([u.Z], () => {
        var t, n;
        return null != (n = null == (t = u.Z.getGuild(e)) ? true : t.features.has(S.GuildFeatures.GAME_SERVERS)) && n
      }), v = (0, l.e7)([p.Z], () => p.Z.getLowestGameCostForGuild(e)), j = function(e, t) {
        let n = (0, O.qI)(e, "GuildPowerupsChannelRow"),
          a = (0, h.BU)(e, "GuildPowerupsChannelRow"),
          o = (0, l.e7)([u.Z], () => {
            var t;
            return null == (t = u.Z.getGuild(e)) ? true : t.features.has(S.GuildFeatures.GAME_SERVERS)
          });
        return r.useMemo(() => {
          if (a && !o) return E.Du.GAME_SERVER_HOSTING;
          if (!Array.from(E.os[E.Du.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(e => {
              var n;
              return (null == t || null == (n = t.unlockedPowerups) ? true : n[e]) != null
            })) return E.Du.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
          if (n) {
            var r;
            let n = i.A$,
              l = E.Rx[n],
              a = (null == t || null == (r = t.unlockedPowerups) ? true : r[n]) != null;
            if (null == l && !a) return E.Du.VANITY_URL;
            let o = (0, f.Jh)(e);
            if (null != o && null != l && o < l && !a) return E.Du.VANITY_URL
          }
          return 0
        }, [n, e, t, a, o])
      }(e, t), [I, _] = (0, s.XR)(null != t && !g && j > 0 ? a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, j), P = I === a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK, N = r.useMemo(() => {
        if (null == t || g || P) return;
        let n = function(e, t) {
          let n = f.Oe.find(e => {
            let n = E.Cp[e],
              r = null != n ? t.unlockedPowerups[n] : true;
            return null != r && r.user_id !== E.Fq
          });
          if (null == n) return;
          let r = E.Q1[n];
          if (null == r || (0, c.OY)(r, e)) return;
          let i = E.Cp[n],
            l = null != i ? t.allPowerups[i] : true;
          if (null != l) return {
            type: y.Jk.LEVEL_REACHED,
            powerup: l,
            markAsDismissed: t => {
              (0, c.Qd)(r, e, true, t)
            }
          }
        }(e, t);
        if (null != n) return n;
        let r = function(e, t, n) {
          var r, i;
          let l = null != (i = null == (r = u.Z.getGuild(e)) ? true : r.premiumTier) ? i : S.Eu4.NONE,
            o = Array.from(E.Tg.values()).flatMap(r => r.length <= 0 || r.some(e => {
              if (null != t.unlockedPowerups[e]) returntrue;
              let n = E.Rx[e];
              return null != n && !!(l >= n)
            }) ? [] : r.map(r => {
              let i = t.allPowerups[r];
              return null == i || n < i.cost || (0, C.e)(e, i, "maybeGetPerkPurchaseablePopoutDCF") ? null : i
            })).filter(d.lm);
          if (0 !== o.length) {
            if (1 === o.length && !(0, c.OY)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e)) return {
              type: y.Jk.PERKS_PURCHASABLE,
              powerups: o,
              markAsDismissed: t => {
                (0, c.Qd)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, true, t)
              }
            };
            if (o.length > 1 && !(0, c.OY)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e)) return {
              type: y.Jk.PERKS_PURCHASABLE,
              powerups: o,
              markAsDismissed: t => {
                (0, c.Qd)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, true, t)
              }
            }
          }
        }(e, t, b);
        if (null != r) return r;
        let i = function(e, t, n, r) {
          if ((0, h.v$)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") && !t && null != r && n >= r && !(0, c.OY)(a.C.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)) return {
            type: y.Jk.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
            markAsDismissed: t => {
              (0, c.Qd)(a.C.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, true, t)
            }
          }
        }(e, m, b, v);
        if (null != i) return i
      }, [e, t, g, P, b, m, v]), [Z, w] = (0, s.bf)(null != N ? a.z.GUILD_POWERUP_NOTIFICATION : null, {
        cooldownDurationMs: y.dU
      });
      return r.useMemo(() => {
        if (null != t) {
          if (g) return {
            type: y.Jk.PERKS_AVAILABLE,
            markAsDismissed: o
          };
          if (P) {
            if (j === E.Du.GAME_SERVER_HOSTING) return {
              type: y.Jk.GAME_SERVER_HOSTING_AVAILABLE,
              markAsDismissed: _
            };
            let e = E.os[j],
              n = Object.values(t.allPowerups).filter(t => e.has(t.skuId));
            if (0 === n.length) return;
            return {
              powerups: n,
              type: y.Jk.NEW_PERK_AVAILABLE,
              markAsDismissed: _
            }
          }
          if (Z === a.z.GUILD_POWERUP_NOTIFICATION && null != N) {
            var e, n;
            return e = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  var r;
                  r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = r
                })
              }
              return e
            }({}, N), n = n = {
              markAsDismissed: e => {
                w(e), N.markAsDismissed(e)
              }
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }), e
          }
        }
      }, [t, g, o, N, Z, w, P, _, j])
    }(e, null != n ? n : true);
  if (null !== n && (null != g || I || null != _)) return {
    indicator: g,
    showUnread: I,
    popout: _
  }
}

function P(e) {
  let t = (0, l.e7)([m.Z], () => m.Z.getStateForGuild(e)),
    n = _(e);
  r.useEffect(() => {
    (0, g.jd)(e)
  }, [e]), r.useEffect(() => {
    var e;
    null == n || null == (e = n.popout) || e.markAsDismissed(I.L.AUTO_DISMISS)
  }, [n]), r.useEffect(() => {
    null != t && f.Oe.forEach(n => {
      let r = E.Cp[n];
      if (null == r || null == t.unlockedPowerups[r]) return;
      let i = E.Q1[n];
      null != i && (0, c.Qd)(i, e, false, I.L.AUTO_DISMISS)
    })
  }, [e, t])
}