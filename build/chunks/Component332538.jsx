/** Chunk was on 46467 **/
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
  let t = (0, o.e7)([_.Z], () => _.Z.getNotificationStateForGuild(e), [e]),
    n = (0, o.e7)([y.Z], () => y.Z.getStateForGuild(e)),
    {
      trailing: b,
      showUnread: P
    } = function(e, t, n) {
      let l = (0, x.Z)(e).available,
        {
          shouldShow: u
        } = (0, E._)(e, "useGuildPowerupsChannelListIndicators"),
        d = (0, c.OA)(a.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
        h = u && !d,
        f = (0, o.e7)([m.Z], () => m.Z.getStateForGuild(e));
      return i.useMemo(() => {
        var e, i, o, a;
        if (null == t) return {
          trailing: true,
          showUnread: false
        };
        let {
          unlockedPowerups: c
        } = t, u = (0, C.h)([...Object.values(c), ...Object.values(null != (i = null == f ? true : f.entitlements) ? i : {})]), d = null != (o = null == n ? true : n.lastSeenWarningNotification) ? o : Date.now(), p = new Date(null == (e = u[u.length - 1]) ? true : e.ends_at).getTime(), g = null != (a = null == n ? true : n.lastBoostCount) ? a : 0;
        return u.length > 0 && d < p || h ? {
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
      }, [l, null == n ? true : n.lastBoostCount, null == n ? true : n.lastSeenWarningNotification, t, h, null == f ? true : f.entitlements])
    }(e, n, t),
    N = function(e, t) {
      let [n, r] = (0, u.US)(null != t ? [a.z.GUILD_POWERUP_PERKS_COACHMARK] : []), s = n === a.z.GUILD_POWERUP_PERKS_COACHMARK, {
        available: c
      } = (0, x.Z)(e), b = (0, o.e7)([h.Z], () => {
        var t, n;
        return null != (n = null == (t = h.Z.getGuild(e)) ? true : t.features.has(I.GuildFeatures.GAME_SERVERS)) && n
      }), _ = (0, o.e7)([m.Z], () => m.Z.getLowestGameCostForGuild(e)), y = function(e, t) {
        let n = (0, v.qI)(e, "GuildPowerupsChannelRow"),
          r = (0, g.BU)(e, "GuildPowerupsChannelRow"),
          a = (0, o.e7)([h.Z], () => {
            var t;
            return null == (t = h.Z.getGuild(e)) ? true : t.features.has(I.GuildFeatures.GAME_SERVERS)
          });
        return i.useMemo(() => {
          if (r && !a) return S.Du.GAME_SERVER_HOSTING;
          if (!Array.from(S.os[S.Du.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(e => {
              var n;
              return (null == t || null == (n = t.unlockedPowerups) ? true : n[e]) != null
            })) return S.Du.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
          if (n) {
            var i;
            let n = l.A$,
              r = S.Rx[n],
              o = (null == t || null == (i = t.unlockedPowerups) ? true : i[n]) != null;
            if (null == r && !o) return S.Du.VANITY_URL;
            let a = (0, p.Jh)(e);
            if (null != a && null != r && a < r && !o) return S.Du.VANITY_URL
          }
          return 0
        }, [n, e, t, r, a])
      }(e, t), [C, E] = (0, u.XR)(null != t && !s && y > 0 ? a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, y), P = C === a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK, N = i.useMemo(() => {
        if (null == t || s || P) return;
        let n = function(e, t) {
          let n = p.Oe.find(e => {
            let n = S.Cp[e],
              r = null != n ? t.unlockedPowerups[n] : true;
            return null != r && r.user_id !== S.Fq
          });
          if (null == n) return;
          let r = S.Q1[n];
          if (null == r || (0, d.OY)(r, e)) return;
          let i = S.Cp[n],
            l = null != i ? t.allPowerups[i] : true;
          if (null != l) return {
            type: O.J.LEVEL_REACHED,
            powerup: l,
            markAsDismissed: t => {
              (0, d.Qd)(r, e, true, t)
            }
          }
        }(e, t);
        if (null != n) return n;
        let r = function(e, t, n) {
          var r, i;
          let l = null != (i = null == (r = h.Z.getGuild(e)) ? true : r.premiumTier) ? i : I.Eu4.NONE,
            o = Array.from(S.Tg.values()).flatMap(r => r.length <= 0 || r.some(e => {
              if (null != t.unlockedPowerups[e]) returntrue;
              let n = S.Rx[e];
              return null != n && !!(l >= n)
            }) ? [] : r.map(r => {
              let i = t.allPowerups[r];
              return null == i || n < i.cost || (0, j.e)(e, i, "maybeGetPerkPurchaseablePopoutDCF") ? null : i
            })).filter(f.lm);
          if (0 !== o.length) {
            if (1 === o.length && !(0, d.OY)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e)) return {
              type: O.J.PERKS_PURCHASABLE,
              powerups: o,
              markAsDismissed: t => {
                (0, d.Qd)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, true, t)
              }
            };
            if (o.length > 1 && !(0, d.OY)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e)) return {
              type: O.J.PERKS_PURCHASABLE,
              powerups: o,
              markAsDismissed: t => {
                (0, d.Qd)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, true, t)
              }
            }
          }
        }(e, t, c);
        if (null != r) return r;
        let i = function(e, t, n, r) {
          if ((0, g.v$)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") && !t && null != r && n >= r && !(0, d.OY)(a.C.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)) return {
            type: O.J.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
            markAsDismissed: t => {
              (0, d.Qd)(a.C.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, true, t)
            }
          }
        }(e, b, c, _);
        if (null != i) return i
      }, [e, t, s, P, c, b, _]), [Z, w] = (0, u.bf)(null != N ? a.z.GUILD_POWERUP_NOTIFICATION : null, {
        cooldownDurationMs: O.d
      });
      return i.useMemo(() => {
        if (null != t) {
          if (s) return {
            type: O.J.PERKS_AVAILABLE,
            markAsDismissed: r
          };
          if (P) {
            if (y === S.Du.GAME_SERVER_HOSTING) return {
              type: O.J.GAME_SERVER_HOSTING_AVAILABLE,
              markAsDismissed: E
            };
            let e = S.os[y],
              n = Object.values(t.allPowerups).filter(t => e.has(t.skuId));
            if (0 === n.length) return;
            return {
              powerups: n,
              type: O.J.NEW_PERK_AVAILABLE,
              markAsDismissed: E
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
      }, [t, s, r, N, Z, w, P, E, y])
    }(e, n);
  if (null !== n && (null != b || P || null != N)) return {
    trailing: b,
    showUnread: P,
    popout: N
  }
}

function Z(e) {
  let t = (0, o.e7)([y.Z], () => y.Z.getStateForGuild(e)),
    n = N(e);
  i.useEffect(() => {
    (0, b.jd)(e)
  }, [e]), i.useEffect(() => {
    var e;
    null == n || null == (e = n.popout) || e.markAsDismissed(P.L.AUTO_DISMISS)
  }, [n]), i.useEffect(() => {
    null != t && p.Oe.forEach(n => {
      let r = S.Cp[n];
      if (null == r || null == t.unlockedPowerups[r]) return;
      let i = S.Q1[n];
      null != i && (0, d.Qd)(i, e, false, P.L.AUTO_DISMISS)
    })
  }, [e, t])
}