/** Chunk was on 30437 **/
/** chunk id: 279604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  KE: () => y,
  KT: () => O,
  Td: () => v,
  ZP: () => C,
  _C: () => j
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk879892 = require("./879892.jsx"),
  Chunk343649 = require("./343649.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk823379 = require("./823379.js"),
  Chunk713081 = require("./713081.js"),
  Chunk905128 = require("./905128.js"),
  Chunk317169 = require("./317169.js"),
  Chunk278646 = require("./278646.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js");

function _(e) {
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

function O(e) {
  i.useEffect(() => {
    null != e && (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE))
  }, [e])
}

function y(e, t) {
  (0, o.ZDy)(async () => {
    switch (t.type) {
      case m.Us.LEVEL:
        let {
          default: i
        } = await n.e("99014").then(n.bind(n, 271224));
        return n => (0, r.jsx)(i, _({
          guildId: e,
          powerup: t
        }, n));
      case m.Us.PERK: {
        let {
          default: i
        } = await Promise.all([n.e("76692"), n.e("30378"), n.e("47285")]).then(n.bind(n, 326055));
        return n => (0, r.jsx)(i, _({
          guildId: e,
          powerup: t
        }, n))
      }
    }
  }, {
    modalKey: m.H2
  })
}

function v(e, t) {
  var n;
  let r = (0, l.e7)([u.Z], () => u.Z.getGuild(e)),
    o = (0, l.e7)([f.Z], () => f.Z.getStateForGuild(e)),
    {
      spent: a
    } = (0, h.Z)(e),
    s = i.useMemo(() => {
      if (null == t || t.type !== m.Us.LEVEL || null == o) return [];
      let e = m.T1[t.skuId];
      return null == e ? [] : Object.entries(m.Rx).filter(t => {
        let [n, r] = t;
        return r === e && null != o.unlockedPowerups[n]
      }).map(e => {
        let [t] = e;
        return o.allPowerups[t]
      }).filter(d.lm)
    }, [t, o]),
    c = null == s ? true : s.reduce((e, t) => e + t.cost, 0);
  return Math.max((null != (n = null == r ? true : r.premiumSubscriberCount) ? n : 0) - a + (null != c ? c : 0), 0)
}

function j(e, t) {
  let {
    analyticsLocations: n
  } = (0, a.ZP)(), {
    onToggle: r
  } = x(e, t), d = (0, l.e7)([u.Z], () => u.Z.getGuild(e)), p = v(e, t);
  return {
    onActivate: i.useCallback(function(e) {
      var i;
      let l = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      e.stopPropagation();
      let {
        shouldCloseAllModals: a = true
      } = l;
      if (null != d && null != t) return p < t.cost ? void(0, s.u)({
        analyticsLocation: {
          page: b.ZY5.GUILD_POWERUPS_OVERVIEW,
          section: b.jXE.GUILD_POWERUPS_OVERVIEW_CARD
        },
        numberOfBoostsToAdd: t.cost - p,
        analyticsLocations: n,
        guild: d,
        intent: t.type === m.Us.LEVEL ? c.P.LEVEL : c.P.PERK,
        onSubscribeComplete: () => {
          var e;
          return null == (e = r(true)) ? true : e.then(() => {
            a && (0, o.pTH)(), (0, g.h)(d.id, t)
          })
        }
      }) : null == (i = r(true)) ? true : i.then(() => {
        a && (0, o.pTH)(), (0, g.h)(d.id, t)
      })
    }, [r, t, p, n, d])
  }
}

function x(e, t) {
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

function C(e, t) {
  let {
    isLoading: l,
    error: a,
    onToggle: s
  } = x(e, t), {
    onActivate: c
  } = j(e, t), u = i.useCallback(e => (e.stopPropagation(), s(false)), [s]);
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
        return n => (0, r.jsx)(i, _({
          guildId: e,
          powerup: t
        }, n))
      })
    }, [e, t]),
    onShowMore: i.useCallback(() => {
      y(e, t)
    }, [e, t])
  }
}