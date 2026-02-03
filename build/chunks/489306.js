/** Chunk was on 44669 **/
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
  let t = (0, i.bG)([f.A], () => f.A.getNotificationStateForGuild(e), [e]),
    n = (0, i.bG)([m.A], () => m.A.getStateForGuild(e)),
    {
      indicator: g,
      showUnread: C
    } = function(e, t, n) {
      let l = (0, x.A)(e).available,
        {
          shouldShow: o
        } = (0, _.A)(e, "useGuildPowerupsNotificationIndicator"),
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
        } = t, o = (0, y.k)([...Object.values(a), ...Object.values(null != (e = null == d ? true : d.entitlements) ? e : {})]), c = null != (r = null == n ? true : n.lastSeenWarningNotification) ? r : Date.now(), p = new Date(null == (s = o[o.length - 1]) ? true : s.ends_at).getTime(), h = null != (i = null == n ? true : n.lastBoostCount) ? i : 0, g = o.length > 0 && c < p, f = l - h;
        return g || u ? {
          indicator: {
            type: b.cD.WARNING
          },
          showUnread: true
        } : l !== h && f > 0 ? {
          indicator: {
            type: b.cD.UNREAD,
            count: f
          },
          showUnread: true
        } : {
          indicator: true,
          showUnread: false
        }
      }, [l, null == n ? true : n.lastBoostCount, null == n ? true : n.lastSeenWarningNotification, t, u, null == d ? true : d.entitlements])
    }(e, null != n ? n : true, t),
    S = function(e, t) {
      let n, a, g, [f, m] = (0, O.ty)(null != t),
        y = f === s.M.GUILD_POWERUP_PERKS_COACHMARK,
        {
          available: _
        } = (0, x.A)(e),
        C = (0, i.bG)([c.A], () => {
          var t, n;
          return null != (t = null == (n = c.A.getGuild(e)) ? true : n.features.has(E.GuildFeatures.GAME_SERVERS)) && t
        }),
        S = (0, i.bG)([h.A], () => h.A.getLowestGameCostForGuild(e)),
        I = (n = (0, A.gz)(e, "GuildPowerupsChannelRow"), a = (0, p.C$)(e, "GuildPowerupsChannelRow"), g = (0, i.bG)([c.A], () => {
          var t;
          return null == (t = c.A.getGuild(e)) ? true : t.features.has(E.GuildFeatures.GAME_SERVERS)
        }), r.useMemo(() => {
          if (a && !g) return v.q.GAME_SERVER_HOSTING;
          if (!Array.from(v.r9[v.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(e => {
              var n;
              return (null == t || null == (n = t.unlockedPowerups) ? true : n[e]) != null
            })) return v.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
          if (n) {
            var r;
            let n = l.FB,
              i = v.wr[n],
              s = (null == t || null == (r = t.unlockedPowerups) ? true : r[n]) != null;
            if (null == i && !s) return v.q.VANITY_URL;
            let a = (0, d.P7)(e);
            if (null != a && null != i && a < i && !s) return v.q.VANITY_URL
          }
          return 0
        }, [n, e, t, a, g])),
        [N, T] = (0, O.FC)(null != t && !y, I),
        P = N === s.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
        w = r.useMemo(() => {
          if (null == t || y || P) return;
          let n = function(e, t) {
            let n = d.fi.find(e => {
              let n = v.a8[e],
                r = null != n ? t.unlockedPowerups[n] : true;
              return null != r && r.user_id !== v.mB
            });
            if (null == n) return;
            let r = v.On[n];
            if (null == r || (0, o.zs)(r, e)) return;
            let l = v.a8[n],
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
              a = Array.from(v.oN.values()).flatMap(r => r.length <= 0 || r.some(e => {
                if (null != t.unlockedPowerups[e]) returntrue;
                let n = v.wr[e];
                return null != n && !!(i >= n)
              }) ? [] : r.map(r => {
                let l = t.allPowerups[r];
                return null == l || n < l.cost || (0, j.t)(e, l, "maybeGetPerkPurchaseablePopoutDCF") ? null : l
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
          }(e, t, _);
          if (null != r) return r;
          let l = function(e, t, n, r) {
            if ((0, p.TS)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") && !t && null != r && n >= r && !(0, o.zs)(s.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)) return {
              type: b.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
              markAsDismissed: t => {
                (0, o._$)(s.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, true, t)
              }
            }
          }(e, C, _, S);
          if (null != l) return l
        }, [e, t, y, P, _, C, S]),
        [R, D] = (0, O.ru)(null != w);
      return r.useMemo(() => {
        if (null != t) {
          if (y) return {
            type: b.o.PERKS_AVAILABLE,
            markAsDismissed: m
          };
          if (P) {
            if (I === v.q.GAME_SERVER_HOSTING) return {
              type: b.o.GAME_SERVER_HOSTING_AVAILABLE,
              markAsDismissed: T
            };
            let e = v.r9[I],
              n = Object.values(t.allPowerups).filter(t => e.has(t.skuId));
            if (0 === n.length) return;
            return {
              powerups: n,
              type: b.o.NEW_PERK_AVAILABLE,
              markAsDismissed: T
            }
          }
          if (R === s.M.GUILD_POWERUP_NOTIFICATION && null != w) {
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
            }({}, w), n = n = {
              markAsDismissed: e => {
                D(e), w.markAsDismissed(e)
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
      }, [t, y, m, w, R, D, P, T, I])
    }(e, null != n ? n : true);
  if (null !== n && (null != g || C || null != S)) return {
    indicator: g,
    showUnread: C,
    popout: S
  }
}

function I(e) {
  let t = (0, i.bG)([m.A], () => m.A.getStateForGuild(e)),
    n = S(e);
  r.useEffect(() => {
    (0, g.Zm)(e)
  }, [e]), r.useEffect(() => {
    var e;
    null == n || null == (e = n.popout) || e.markAsDismissed(C.i.AUTO_DISMISS)
  }, [n]), r.useEffect(() => {
    null != t && d.fi.forEach(n => {
      let r = v.a8[n];
      if (null == r || null == t.unlockedPowerups[r]) return;
      let l = v.On[n];
      null != l && (0, o._$)(l, e, false, C.i.AUTO_DISMISS)
    })
  }, [e, t])
}