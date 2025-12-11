/** Chunk was on 82477 **/
/** chunk id: 332538, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Wj: () => Z,
  ZP: () => N
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk494497 = require("./494497.js"),
  Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk10765 = require("./10765.js"),
  Chunk317169 = require("./317169.js"),
  Chunk19394 = require("./19394.js"),
  Chunk385902 = require("./385902.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js");

function N(e) {
  let t = (0, a.e7)([y.Z], () => y.Z.getNotificationStateForGuild(e), [e]),
    n = (0, a.e7)([O.Z], () => O.Z.getStateForGuild(e)),
    {
      trailing: m,
      showUnread: P
    } = function(e, t, n) {
      let l = (0, x.Z)(e).available,
        {
          shouldShow: u
        } = (0, S._)(e, "useGuildPowerupsChannelListIndicators"),
        d = (0, c.OA)(o.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
        f = u && !d,
        h = (0, a.e7)([b.Z], () => b.Z.getStateForGuild(e));
      return i.useMemo(() => {
        var e, i, a, o;
        if (null == t) return {
          trailing: true,
          showUnread: false
        };
        let {
          unlockedPowerups: c
        } = t, u = (0, E.h)([...Object.values(c), ...Object.values(null != (i = null == h ? true : h.entitlements) ? i : {})]), d = null != (a = null == n ? true : n.lastSeenWarningNotification) ? a : Date.now(), p = new Date(null == (e = u[u.length - 1]) ? true : e.ends_at).getTime(), g = null != (o = null == n ? true : n.lastBoostCount) ? o : 0;
        return u.length > 0 && d < p || f ? {
          trailing: (0, r.jsx)(s.Mgn, {
            color: s.TVs.colors.STATUS_WARNING,
            size: "sm"
          }),
          showUnread: true
        } : l !== g && l - g > 0 ? {
          trailing: (0, r.jsx)(s.mAB, {
            count: l - g,
            color: s.TVs.colors.BACKGROUND_ACCENT.css
          }),
          showUnread: true
        } : {
          trailing: true,
          showUnread: false
        }
      }, [l, null == n ? true : n.lastBoostCount, null == n ? true : n.lastSeenWarningNotification, t, f, null == h ? true : h.entitlements])
    }(e, n, t),
    N = function(e, t) {
      let [n, r] = (0, u.US)(null != t ? [o.z.GUILD_POWERUP_PERKS_COACHMARK] : []), s = n === o.z.GUILD_POWERUP_PERKS_COACHMARK, {
        available: c
      } = (0, x.Z)(e), m = (0, a.e7)([f.Z], () => {
        var t, n;
        return null != (n = null == (t = f.Z.getGuild(e)) ? true : t.features.has(_.GuildFeatures.GAME_SERVERS)) && n
      }), y = (0, a.e7)([b.Z], () => b.Z.getLowestGameCostForGuild(e)), O = function(e, t) {
        let n = (0, j.qI)(e, "GuildPowerupsChannelRow"),
          r = (0, g.BU)(e, "GuildPowerupsChannelRow"),
          o = (0, a.e7)([f.Z], () => {
            var t;
            return null == (t = f.Z.getGuild(e)) ? true : t.features.has(_.GuildFeatures.GAME_SERVERS)
          });
        return i.useMemo(() => {
          if (r && !o) return I.Du.GAME_SERVER_HOSTING;
          if (!Array.from(I.os[I.Du.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(e => {
              var n;
              return (null == t || null == (n = t.unlockedPowerups) ? true : n[e]) != null
            })) return I.Du.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
          if (n) {
            var i;
            let n = l.A$,
              r = I.Rx[n],
              a = (null == t || null == (i = t.unlockedPowerups) ? true : i[n]) != null;
            if (null == r && !a) return I.Du.VANITY_URL;
            let o = (0, p.Jh)(e);
            if (null != o && null != r && o < r && !a) return I.Du.VANITY_URL
          }
          return 0
        }, [n, e, t, r, o])
      }(e, t), [E, S] = (0, u.XR)(null != t && !s && O > 0 ? o.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, O), P = E === o.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK, N = i.useMemo(() => {
        if (null == t || s || P) return;
        let n = function(e, t) {
          let n = p.Oe.find(e => {
            let n = I.Cp[e],
              r = null != n ? t.unlockedPowerups[n] : true;
            return null != r && r.user_id !== I.Fq
          });
          if (null == n) return;
          let r = I.Q1[n];
          if (null == r || (0, d.OY)(r, e)) return;
          let i = I.Cp[n],
            l = null != i ? t.allPowerups[i] : true;
          if (null != l) return {
            type: v.J.LEVEL_REACHED,
            powerup: l,
            markAsDismissed: t => {
              (0, d.Qd)(r, e, true, t)
            }
          }
        }(e, t);
        if (null != n) return n;
        let r = function(e, t, n) {
          var r, i;
          let l = null != (i = null == (r = f.Z.getGuild(e)) ? true : r.premiumTier) ? i : _.Eu4.NONE,
            a = Array.from(I.Tg.values()).flatMap(r => r.length <= 0 || r.some(e => {
              if (null != t.unlockedPowerups[e]) returntrue;
              let n = I.Rx[e];
              return null != n && !!(l >= n)
            }) ? [] : r.map(r => {
              let i = t.allPowerups[r];
              return null == i || n < i.cost || (0, C.e)(e, i, "maybeGetPerkPurchaseablePopoutDCF") ? null : i
            })).filter(h.lm);
          if (0 !== a.length) {
            if (1 === a.length && !(0, d.OY)(o.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e)) return {
              type: v.J.PERKS_PURCHASABLE,
              powerups: a,
              markAsDismissed: t => {
                (0, d.Qd)(o.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, true, t)
              }
            };
            if (a.length > 1 && !(0, d.OY)(o.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e)) return {
              type: v.J.PERKS_PURCHASABLE,
              powerups: a,
              markAsDismissed: t => {
                (0, d.Qd)(o.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, true, t)
              }
            }
          }
        }(e, t, c);
        if (null != r) return r;
        let i = function(e, t, n, r) {
          if ((0, g.v$)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") && !t && null != r && n >= r && !(0, d.OY)(o.C.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)) return {
            type: v.J.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
            markAsDismissed: t => {
              (0, d.Qd)(o.C.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, true, t)
            }
          }
        }(e, m, c, y);
        if (null != i) return i
      }, [e, t, s, P, c, m, y]), [Z, w] = (0, u.bf)(null != N ? o.z.GUILD_POWERUP_NOTIFICATION : null, {
        cooldownDurationMs: v.d
      });
      return i.useMemo(() => {
        if (null != t) {
          if (s) return {
            type: v.J.PERKS_AVAILABLE,
            markAsDismissed: r
          };
          if (P) {
            if (O === I.Du.GAME_SERVER_HOSTING) return {
              type: v.J.GAME_SERVER_HOSTING_AVAILABLE,
              markAsDismissed: S
            };
            let e = I.os[O],
              n = Object.values(t.allPowerups).filter(t => e.has(t.skuId));
            if (0 === n.length) return;
            return {
              powerups: n,
              type: v.J.NEW_PERK_AVAILABLE,
              markAsDismissed: S
            }
          }
          if (Z === o.z.GUILD_POWERUP_NOTIFICATION && null != N) {
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
      }, [t, s, r, N, Z, w, P, S, O])
    }(e, n);
  if (null !== n && (null != m || P || null != N)) return {
    trailing: m,
    showUnread: P,
    popout: N
  }
}

function Z(e) {
  let t = (0, a.e7)([O.Z], () => O.Z.getStateForGuild(e)),
    n = N(e);
  i.useEffect(() => {
    (0, m.jd)(e)
  }, [e]), i.useEffect(() => {
    var e;
    null == n || null == (e = n.popout) || e.markAsDismissed(P.L.AUTO_DISMISS)
  }, [n]), i.useEffect(() => {
    null != t && p.Oe.forEach(n => {
      let r = I.Cp[n];
      if (null == r || null == t.unlockedPowerups[r]) return;
      let i = I.Q1[n];
      null != i && (0, d.Qd)(i, e, false, P.L.AUTO_DISMISS)
    })
  }, [e, t])
}