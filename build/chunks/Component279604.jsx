/** Chunk was on 50737 **/
/** chunk id: 279604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  KE: () => O,
  KT: () => b,
  ZP: () => v,
  _C: () => _
}), require("./388685.js"), require("./457542.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk879892 = require("./879892.jsx"),
  Chunk343649 = require("./343649.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk823379 = require("./823379.js"),
  Chunk713081 = require("./713081.js"),
  Chunk905128 = require("./905128.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js");

function m(e) {
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
}

function b(e) {
  i.useEffect(() => {
    null != e && (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE))
  }, [e])
}

function O(e, t) {
  (0, o.ZDy)(async () => {
    switch (t.type) {
      case h.Us.LEVEL:
        let {
          default: i
        } = await n.e("99014").then(n.bind(n, 271224));
        return n => (0, r.jsx)(i, m({
          guildId: e,
          powerup: t
        }, n));
      case h.Us.PERK: {
        let {
          default: i
        } = await Promise.all([n.e("42926"), n.e("97844"), n.e("52549")]).then(n.bind(n, 326055));
        return n => (0, r.jsx)(i, m({
          guildId: e,
          powerup: t
        }, n))
      }
    }
  }, {
    modalKey: h.H2
  })
}

function _(e, t) {
  var p;
  let {
    analyticsLocations: b
  } = (0, a.ZP)(), {
    onToggle: O
  } = y(e, t), _ = (0, l.e7)([f.Z], () => {
    var t, n;
    return null != (n = null == (t = f.Z.getStateForGuild(e)) ? true : t.appliedBoosts) ? n : 0
  }), v = (0, l.e7)([u.Z], () => u.Z.getGuild(e)), j = (0, l.e7)([f.Z], () => f.Z.getStateForGuild(e)), C = i.useMemo(() => null != t && t.type === h.Us.LEVEL && null != j ? function(e, t) {
    let n = h.T1[e.skuId];
    return null == n ? [] : Object.entries(h.Rx).filter(e => {
      let [r, i] = e;
      return i === n && null != t.unlockedPowerups[r]
    }).map(e => {
      let [n] = e;
      return t.allPowerups[n]
    }).filter(d.lm)
  }(t, j) : [], [t, j]), E = null == C ? true : C.reduce((e, t) => e + t.cost, 0), x = Math.max((null != (p = null == v ? true : v.premiumSubscriberCount) ? p : 0) - _ + E, 0);
  return {
    onActivate: i.useCallback(function(e) {
      var i;
      let l = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      e.stopPropagation();
      let {
        shouldCloseAllModals: a = true
      } = l;
      if (null != v && null != t) return x < t.cost ? void(0, s.u)({
        analyticsLocation: {
          page: g.ZY5.GUILD_POWERUPS_OVERVIEW,
          section: g.jXE.GUILD_POWERUPS_OVERVIEW_CARD
        },
        numberOfBoostsToAdd: t.cost - x,
        analyticsLocations: b,
        guild: v,
        intent: t.type === h.Us.LEVEL ? c.P.LEVEL : c.P.PERK,
        onSubscribeComplete: () => {
          var e;
          return null == (e = O(true)) ? true : e.then(() => {
            a && (0, o.pTH)(), (0, o.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("97844"), n.e("21254")]).then(n.bind(n, 666083));
              return n => (0, r.jsx)(e, m({
                guildId: v.id,
                powerup: t
              }, n))
            })
          })
        }
      }) : null == (i = O(true)) ? true : i.then(() => {
        a && (0, o.pTH)(), (0, o.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("97844"), n.e("21254")]).then(n.bind(n, 666083));
          return n => (0, r.jsx)(e, m({
            guildId: v.id,
            powerup: t
          }, n))
        })
      })
    }, [O, t, x, b, v])
  }
}

function y(e, t) {
  let [n, r] = i.useState(false), [l, o] = i.useState(true);
  return {
    isLoading: n,
    error: l,
    onToggle: i.useCallback(n => {
      if (null == t) return Promise.resolve();
      let i = n ? p.H6 : p.Th;
      return r(true), o(true), i(e, t.skuId).catch(e => {
        var t;
        throw o(null != (t = e.body.message) ? t : true), e
      }).finally(() => {
        r(false)
      })
    }, [e, t])
  }
}

function v(e, t) {
  let {
    isLoading: l,
    error: a,
    onToggle: s
  } = y(e, t), {
    onActivate: c
  } = _(e, t), u = i.useCallback(e => (e.stopPropagation(), s(false)), [s]);
  return {
    isLoading: l,
    error: a,
    onActivate: c,
    onDeactivate: u,
    onShowDeactivate: i.useCallback(i => {
      i.stopPropagation(), (0, o.ZDy)(async () => {
        let {
          default: i
        } = await n.e("31924").then(n.bind(n, 625651));
        return n => (0, r.jsx)(i, m({
          guildId: e,
          powerup: t
        }, n))
      })
    }, [e, t]),
    onShowMore: i.useCallback(() => {
      O(e, t)
    }, [e, t])
  }
}