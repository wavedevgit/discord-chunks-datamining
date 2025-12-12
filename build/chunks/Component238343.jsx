/** Chunk was on 64722 **/
/** chunk id: 238343, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Aw: () => y,
  KE: () => b,
  KT: () => m,
  _C: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk879892 = require("./879892.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk278646 = require("./278646.jsx"),
  Chunk473952 = require("./473952.js"),
  Chunk343334 = require("./343334.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js");

function g(e) {
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

function m(e) {
  i.useEffect(() => {
    null != e && (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE))
  }, [e])
}

function b(e, t) {
  (0, o.ZDy)(async () => {
    switch (t.type) {
      case h.Us.LEVEL:
        let {
          default: i
        } = await n.e("99014").then(n.bind(n, 271224));
        return n => (0, r.jsx)(i, g({
          guildId: e,
          powerup: t
        }, n));
      case h.Us.PERK: {
        let {
          default: i
        } = await Promise.all([n.e("76692"), n.e("81242")]).then(n.bind(n, 326055));
        return n => (0, r.jsx)(i, g({
          guildId: e,
          powerup: t
        }, n))
      }
    }
  }, {
    modalKey: h.H2
  })
}

function _(e, t, n) {
  n && (0, o.pTH)(), (0, u.h)(e, t)
}

function y(e, t) {
  (0, o.ZDy)(async () => {
    let {
      default: i
    } = await n.e("31924").then(n.bind(n, 625651));
    return n => (0, r.jsx)(i, g({
      guildId: e,
      powerup: t
    }, n))
  })
}

function O(e, t) {
  let {
    analyticsLocations: n
  } = (0, a.ZP)(), {
    onToggle: r
  } = (0, f.Z)(e, t), o = (0, l.e7)([c.Z], () => c.Z.getGuild(e)), u = (0, d.Z)(e, t);
  return {
    onActivate: i.useCallback(function() {
      var e;
      let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
        {
          shouldCloseAllModals: l = true
        } = i;
      if (null != o && null != t) return u < t.cost ? void(0, s.u)({
        analyticsLocation: {
          page: p.ZY5.GUILD_POWERUPS_OVERVIEW,
          section: p.jXE.GUILD_POWERUPS_OVERVIEW_CARD
        },
        numberOfBoostsToAdd: t.cost - u,
        analyticsLocations: n,
        guild: o,
        intent: t.type === h.Us.LEVEL ? h.P2.LEVEL : h.P2.PERK,
        onSubscribeComplete: () => {
          var e;
          return null == (e = r(true)) ? true : e.then(() => {
            _(o.id, t, l)
          })
        }
      }) : null == (e = r(true)) ? true : e.then(() => {
        _(o.id, t, l)
      })
    }, [r, t, u, n, o])
  }
}