/** Chunk was on 97492 **/
/** chunk id: 489306, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => S,
  c2: () => I
}), require("./896048.js"), require("./114821.js"), require("./339614.js");
var Chunk64700 = require("./64700.js"),
  Chunk512750 = require("./512750.js"),
  Chunk417597 = require("./417597.js"),
  Chunk554146 = require("./554146.js"),
  Chunk367727 = require("./367727.js"),
  Chunk45780 = require("./45780.js"),
  Chunk71393 = require("./71393.js"),
  Chunk403362 = require("./403362.js"),
  Chunk473145 = require("./473145.js"),
  Chunk488803 = require("./488803.js"),
  Chunk522055 = require("./522055.js"),
  Chunk942975 = require("./942975.js"),
  Chunk904560 = require("./904560.js"),
  Chunk645619 = require("./645619.js"),
  Chunk379229 = require("./379229.js"),
  Chunk840120 = require("./840120.js"),
  Chunk904629 = require("./904629.js"),
  Chunk229548 = require("./229548.js"),
  Chunk294384 = require("./294384.js"),
  Chunk864310 = require("./864310.js"),
  Chunk553103 = require("./553103.js"),
  Chunk568065 = require("./568065.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js");

function S(e) {
  let t = (0, i.bG)([g.A], () => g.A.getNotificationStateForGuild(e), [e]),
    n = (0, i.bG)([m.A], () => m.A.getStateForGuild(e)),
    {
      indicator: f,
      showUnread: C
    } = function(e, t, n) {
      let l = (0, j.A)(e).available,
        {
          shouldShow: o
        } = (0, v.A)(e, "useGuildPowerupsNotificationIndicator"),
        c = (0, a.cN)(s.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
        u = o && !c,
        d = (0, i.bG)([h.A], () => h.A.getStateForGuild(e));
      return r.useMemo(() => {
        var e, r, i, s;
        if (null == t) return {
          indicator: true,
          showUnread: false
        };
        let {
          unlockedPowerups: a
        } = t, o = (0, y.k)([...Object.values(a), ...Object.values(null != (e = null == d ? true : d.entitlements) ? e : {})]), c = null != (r = null == n ? true : n.lastSeenWarningNotification) ? r : Date.now(), p = new Date(null == (s = o[o.length - 1]) ? true : s.ends_at).getTime(), h = null != (i = null == n ? true : n.lastBoostCount) ? i : 0, f = o.length > 0 && c < p, g = l - h;
        return f || u ? {
          indicator: {
            type: b.cD.WARNING
          },
          showUnread: true
        } : l !== h && g > 0 ? {
          indicator: {
            type: b.cD.UNREAD,
            count: g
          },
          showUnread: true
        } : {
          indicator: true,
          showUnread: false
        }
      }, [l, null == n ? true : n.lastBoostCount, null == n ? true : n.lastSeenWarningNotification, t, u, null == d ? true : d.entitlements])
    }(e, null != n ? n : true, t),
    S = function(e, t) {
      let n, a, f, [g, m] = (0, _.ty)(null != t),
        y = g === s.M.GUILD_POWERUP_PERKS_COACHMARK,
        {
          available: v
        } = (0, j.A)(e),
        C = (0, i.bG)([c.A], () => {
          var t, n;
          return null != (t = null == (n = c.A.getGuild(e)) ? true : n.features.has(E.GuildFeatures.GAME_SERVERS)) && t
        }),
        S = (0, i.bG)([h.A], () => h.A.getLowestGameCostForGuild(e)),
        I = (n = (0, A.gz)(e, "GuildPowerupsChannelRow"), a = (0, p.C$)(e, "GuildPowerupsChannelRow"), f = (0, i.bG)([c.A], () => {
          var t;
          return null == (t = c.A.getGuild(e)) ? true : t.features.has(E.GuildFeatures.GAME_SERVERS)
        }), r.useMemo(() => {
          if (a && !f) return x.q.GAME_SERVER_HOSTING;
          if (!Array.from(x.r9[x.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(e => {
              var n;
              return (null == t || null == (n = t.unlockedPowerups) ? true : n[e]) != null
            })) return x.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
          if (n) {
            var r;
            let n = l.FB,
              i = x.wr[n],
              s = (null == t || null == (r = t.unlockedPowerups) ? true : r[n]) != null;
            if (null == i && !s) return x.q.VANITY_URL;
            let a = (0, d.P7)(e);
            if (null != a && null != i && a < i && !s) return x.q.VANITY_URL
          }
          return 0
        }, [n, e, t, a, f])),
        [N, T] = (0, _.FC)(null != t && !y, I),
        P = N === s.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
        w = (0, p.TS)(e, "useGuildPowerupsChannelListPopout"),
        [R, D] = (0, _.rd)(null != t && !y && !P && w),
        M = R === s.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V1_COACHMARK,
        L = r.useMemo(() => {
          if (null == t || y || P || M) return;
          let n = function(e, t) {
            let n = d.fi.find(e => {
              let n = x.a8[e],
                r = null != n ? t.unlockedPowerups[n] : true;
              return null != r && r.user_id !== x.mB
            });
            if (null == n) return;
            let r = x.On[n];
            if (null == r || (0, o.zs)(r, e)) return;
            let l = x.a8[n],
              i = null != l ? t.allPowerups[l] : true;
            if (null != i) return {
              type: b.o.LEVEL_REACHED,
              powerup: i,
              markAsDismissed: t => {
                (0, o._$)(r, e, true, t)
              }
            }
          }(e, t);
          if (null != n) return n;
          let r = function(e, t, n) {
            var r, l;
            let i = null != (r = null == (l = c.A.getGuild(e)) ? true : l.premiumTier) ? r : E.TVA.NONE,
              a = Array.from(x.oN.values()).flatMap(r => r.length <= 0 || r.some(e => {
                if (null != t.unlockedPowerups[e]) returntrue;
                let n = x.wr[e];
                return null != n && !!(i >= n)
              }) ? [] : r.map(r => {
                let l = t.allPowerups[r];
                return null == l || n < l.cost || (0, O.t)(e, l, "maybeGetPerkPurchaseablePopoutDCF") ? null : l
              })).filter(u.Vq);
            if (0 !== a.length) {
              if (1 === a.length && !(0, o.zs)(s.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e)) return {
                type: b.o.PERKS_PURCHASABLE,
                powerups: a,
                markAsDismissed: t => {
                  (0, o._$)(s.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, true, t)
                }
              };
              if (a.length > 1 && !(0, o.zs)(s.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e)) return {
                type: b.o.PERKS_PURCHASABLE,
                powerups: a,
                markAsDismissed: t => {
                  (0, o._$)(s.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, true, t)
                }
              }
            }
          }(e, t, v);
          if (null != r) return r;
          let l = function(e, t, n, r) {
            if ((0, p.TS)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") && !t && null != r && n >= r && !(0, o.zs)(s.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)) return {
              type: b.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
              markAsDismissed: t => {
                (0, o._$)(s.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, true, t)
              }
            }
          }(e, C, v, S);
          if (null != l) return l
        }, [e, t, y, P, M, v, C, S]),
        [k, G] = (0, _.ru)(null != L);
      return r.useMemo(() => {
        if (null != t) {
          if (y) return {
            type: b.o.PERKS_AVAILABLE,
            markAsDismissed: m
          };
          if (P) {
            if (I === x.q.GAME_SERVER_HOSTING) return {
              type: b.o.GAME_SERVER_HOSTING_AVAILABLE,
              markAsDismissed: T
            };
            let e = x.r9[I],
              n = Object.values(t.allPowerups).filter(t => e.has(t.skuId));
            if (0 === n.length) return;
            return {
              powerups: n,
              type: b.o.NEW_PERK_AVAILABLE,
              markAsDismissed: T
            }
          }
          if (M) return {
            type: b.o.GAME_SERVER_NEW_GAMES,
            markAsDismissed: D
          };
          if (k === s.M.GUILD_POWERUP_NOTIFICATION && null != L) {
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
            }({}, L), n = n = {
              markAsDismissed: e => {
                G(e), L.markAsDismissed(e)
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
      }, [t, y, m, L, k, G, P, T, I, M, D])
    }(e, null != n ? n : true);
  if (null !== n && (null != f || C || null != S)) return {
    indicator: f,
    showUnread: C,
    popout: S
  }
}

function I(e) {
  let t = (0, i.bG)([m.A], () => m.A.getStateForGuild(e)),
    n = S(e);
  r.useEffect(() => {
    (0, f.Zm)(e)
  }, [e]), r.useEffect(() => {
    var e;
    null == n || null == (e = n.popout) || e.markAsDismissed(C.i.AUTO_DISMISS)
  }, [n]), r.useEffect(() => {
    null != t && d.fi.forEach(n => {
      let r = x.a8[n];
      if (null == r || null == t.unlockedPowerups[r]) return;
      let l = x.On[n];
      null != l && (0, o._$)(l, e, false, C.i.AUTO_DISMISS)
    })
  }, [e, t])
}