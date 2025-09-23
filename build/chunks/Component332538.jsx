/** Chunk was on 33358 **/
/** chunk id: 332538, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Wj: () => w,
  ZP: () => N
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk494497 = require("./494497.js"),
  Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk605236 = require("./605236.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk645041 = require("./645041.js"),
  Chunk430824 = require("./430824.js"),
  Chunk823379 = require("./823379.js"),
  Chunk267642 = require("./267642.js"),
  Chunk713081 = require("./713081.js"),
  Chunk608949 = require("./608949.js"),
  Chunk905128 = require("./905128.js"),
  Chunk326660 = require("./326660.js"),
  Chunk901005 = require("./901005.js"),
  Chunk158638 = require("./158638.js"),
  Chunk10765 = require("./10765.js"),
  Chunk317169 = require("./317169.js"),
  Chunk19394 = require("./19394.js"),
  Chunk385902 = require("./385902.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js");

function N(e) {
  let t = (0, o.e7)([b.Z], () => b.Z.getNotificationStateForGuild(e), [e]),
    n = (0, o.e7)([O.Z], () => O.Z.getStateForGuild(e)),
    {
      trailing: m,
      showUnread: P
    } = function(e, t, n) {
      let l = (0, x.Z)(e).available,
        {
          shouldShow: o
        } = (0, E._)(e, "useGuildPowerupsChannelListIndicators"),
        d = (0, u.OA)(a.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
        p = o && !d;
      return i.useMemo(() => {
        var e, i, o;
        if (null == t) return {
          trailing: true,
          showUnread: false
        };
        let {
          unlockedPowerups: a
        } = t, u = (0, C.h)(Object.values(a)), d = null != (i = null == n ? true : n.lastSeenWarningNotification) ? i : Date.now(), f = new Date(null == (e = u[u.length - 1]) ? true : e.ends_at).getTime(), h = null != (o = null == n ? true : n.lastBoostCount) ? o : 0;
        return u.length > 0 && d < f || p ? {
          trailing: (0, r.jsx)(s.Mgn, {
            color: s.TVs.colors.STATUS_WARNING,
            size: "sm"
          }),
          showUnread: true
        } : l !== h && l - h > 0 ? {
          trailing: (0, r.jsx)(s.mAB, {
            count: l - h,
            color: c.Z.BACKGROUND_ACCENT
          }),
          showUnread: true
        } : {
          trailing: true,
          showUnread: false
        }
      }, [l, null == n ? true : n.lastBoostCount, null == n ? true : n.lastSeenWarningNotification, t, p])
    }(e, n, t),
    N = function(e, t) {
      let [n, r] = (0, d.US)(null != t ? [a.z.GUILD_POWERUP_PERKS_COACHMARK] : []), o = n === a.z.GUILD_POWERUP_PERKS_COACHMARK, {
        available: s
      } = (0, x.Z)(e), c = function(e, t) {
        let n = (0, v.qI)(e, "GuildPowerupsChannelRow"),
          r = (0, _.i)(e, "GuildPowerupsChannelRow");
        return i.useMemo(() => {
          if (r && !Array.from(S.os[S.Du.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(e => {
              var n;
              return (null == t || null == (n = t.unlockedPowerups) ? true : n[e]) != null
            })) return S.Du.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
          if (n) {
            var i;
            let n = l.A$,
              r = S.Rx[n],
              o = (null == t || null == (i = t.unlockedPowerups) ? true : i[n]) != null;
            if (null == r && !o) return S.Du.VANITY_URL;
            let a = (0, g.Jh)(e);
            if (null != a && null != r && a < r && !o) return S.Du.VANITY_URL
          }
          return 0
        }, [n, r, e, t])
      }(e, t), [u, m] = (0, d.XR)(null != t && !o && c > 0 ? a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, c), b = u === a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK, O = i.useMemo(() => {
        if (null == t || o || b) return;
        let n = function(e, t) {
          let n = g.Oe.find(e => {
            let n = S.Cp[e],
              r = null != n ? t.unlockedPowerups[n] : true;
            return null != r && r.user_id !== S.Fq
          });
          if (null == n) return;
          let r = S.Q1[n];
          if (null == r || (0, p.OY)(r, e)) return;
          let i = S.Cp[n],
            l = null != i ? t.allPowerups[i] : true;
          if (null != l) return {
            type: y.J.LEVEL_REACHED,
            powerup: l,
            markAsDismissed: t => {
              (0, p.Qd)(r, e, true, t)
            }
          }
        }(e, t);
        if (null != n) return n;
        let r = function(e, t, n) {
          var r, i;
          let l = null != (i = null == (r = f.Z.getGuild(e)) ? true : r.premiumTier) ? i : I.Eu4.NONE,
            o = Array.from(S.Tg.values()).flatMap(r => r.length <= 0 || r.some(e => {
              if (null != t.unlockedPowerups[e]) returntrue;
              let n = S.Rx[e];
              return null != n && !!(l >= n)
            }) ? [] : r.map(r => {
              let i = t.allPowerups[r];
              return null == i || n < i.cost || (0, j.e)(e, i, "maybeGetPerkPurchaseablePopoutDCF") ? null : i
            })).filter(h.lm);
          if (0 !== o.length) {
            if (1 === o.length && !(0, p.OY)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e)) return {
              type: y.J.PERKS_PURCHASABLE,
              powerups: o,
              markAsDismissed: t => {
                (0, p.Qd)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, true, t)
              }
            };
            if (o.length > 1 && !(0, p.OY)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e)) return {
              type: y.J.PERKS_PURCHASABLE,
              powerups: o,
              markAsDismissed: t => {
                (0, p.Qd)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, true, t)
              }
            }
          }
        }(e, t, s);
        if (null != r) return r
      }, [e, t, o, b, s]), [C, E] = (0, d.bf)(null != O ? a.z.GUILD_POWERUP_NOTIFICATION : null, {
        cooldownDurationMs: y.d
      });
      return i.useMemo(() => {
        if (null != t) {
          if (o) return {
            type: y.J.PERKS_AVAILABLE,
            markAsDismissed: r
          };
          if (b) {
            let e = S.os[c],
              n = Object.values(t.allPowerups).filter(t => e.has(t.skuId));
            if (0 === n.length) return;
            return {
              powerups: n,
              type: y.J.NEW_PERK_AVAILABLE,
              markAsDismissed: m
            }
          }
          if (C === a.z.GUILD_POWERUP_NOTIFICATION && null != O) {
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
            }({}, O), n = n = {
              markAsDismissed: e => {
                E(e), O.markAsDismissed(e)
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
      }, [t, o, r, O, C, E, b, m, c])
    }(e, n);
  if (null !== n && (null != m || P || null != N)) return {
    trailing: m,
    showUnread: P,
    popout: N
  }
}

function w(e) {
  let t = (0, o.e7)([O.Z], () => O.Z.getStateForGuild(e)),
    n = N(e);
  i.useEffect(() => {
    (0, m.jd)(e)
  }, [e]), i.useEffect(() => {
    var e;
    null == n || null == (e = n.popout) || e.markAsDismissed(P.L.AUTO_DISMISS)
  }, [n]), i.useEffect(() => {
    null != t && g.Oe.forEach(n => {
      let r = S.Cp[n];
      if (null == r || null == t.unlockedPowerups[r]) return;
      let i = S.Q1[n];
      null != i && (0, p.Qd)(i, e, false, P.L.AUTO_DISMISS)
    })
  }, [e, t])
}