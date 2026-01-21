/** Chunk was on 82124 **/
/** chunk id: 933104, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $h: () => k,
  En: () => B,
  cO: () => U,
  dJ: () => G,
  f7: () => H,
  jG: () => M,
  r0: () => F,
  yI: () => L
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk198168 = require("./198168.js"),
  Chunk907862 = require("./907862.js"),
  Chunk100527 = require("./100527.js"),
  Chunk623624 = require("./623624.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk326660 = require("./326660.js"),
  Chunk156732 = require("./156732.js"),
  Chunk317169 = require("./317169.js"),
  Chunk639777 = require("./639777.js"),
  Chunk441536 = require("./441536.js"),
  Chunk795338 = require("./795338.jsx"),
  Chunk994234 = require("./994234.js"),
  Chunk192958 = require("./192958.js"),
  Chunk619733 = require("./619733.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk921944 = require("./921944.js"),
  Chunk914820 = require("./914820.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk787349 = require("./787349.js"),
  Chunk796571 = require("./796571.js"),
  Chunk736817 = require("./736817.js"),
  Chunk53374 = require("./53374.js"),
  Chunk822344 = require("./822344.js"),
  Chunk813206 = require("./813206.js");

function M(e) {
  let {
    guildId: t,
    powerup: n,
    channelRowRef: i,
    markAsDismissed: a
  } = e;
  return (0, r.jsx)(V, {
    asset: (0, r.jsx)(v.g, {
      className: l()(N.image, N.levelImage)
    }),
    title: Z.intl.formatToPlainString(P.default["Zg/m9K"], {
      perkName: n.title
    }),
    body: Z.intl.formatToPlainString(P.default["1EGXSK"], {
      perkName: n.title
    }),
    actions: [{
      text: Z.intl.string(Z.t.RzWDqY),
      variant: "primary",
      onClick: () => (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId)
    }],
    targetElementRef: i,
    markAsDismissed: a
  })
}

function k(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    channelRowRef: i
  } = e, l = (0, b.Z)(t);
  return (0, r.jsx)(c.Mb, {
    targetElementRef: i,
    assetUrl: w.Z,
    title: Z.intl.string(P.default.QpQBPQ),
    body: Z.intl.string(P.default["6hn0xF"]),
    action: {
      text: Z.intl.string(Z.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERKS)
      }
    },
    position: l ? "right" : "bottom",
    alignmentStrategy: "edge",
    align: l ? "top" : "center",
    caretConfig: l ? {
      align: "start"
    } : {
      align: "center"
    },
    onRequestClose: () => null == n ? true : n(_.L.USER_DISMISS)
  })
}

function L(e) {
  let {
    guildId: t,
    powerups: n,
    channelRowRef: i,
    markAsDismissed: a
  } = e, s = (0, o.e7)([f.Z], () => {
    var e;
    return null == (e = f.Z.getGuild(t)) ? true : e.name
  }), {
    onActivate: c,
    isLoading: d,
    error: p
  } = (0, O.Z)(t, n[0]), h = (0, g.Z)(n[0], true);
  if ((0, j.Z)(p), 0 === n.length) return;
  let m = n.length >= 3 ? Z.intl.formatToPlainString(P.default["6Sv+3M"], {
      perk: n[0].title,
      perk2: n[1].title,
      perk3: n[2].title
    }) : 2 === n.length ? Z.intl.formatToPlainString(P.default.wcQOqC, {
      perks: "".concat(n[0].title, " & ").concat(n[1].title)
    }) : Z.intl.formatToPlainString(P.default.ZF8NT6, {
      perk: n[0].title
    }),
    b = 1 === n.length;
  return (0, r.jsx)(V, {
    size: 1 === n.length ? "video" : "lg",
    asset: n.length > 1 ? (0, r.jsx)(v.g, {
      className: l()(N.image, N.levelImage)
    }) : (0, r.jsx)("img", {
      alt: "",
      src: h,
      className: N.image
    }),
    title: Z.intl.formatToPlainString(P.default.LmpChE, {
      guildName: s
    }),
    body: m,
    actions: [{
      text: b ? Z.intl.string(P.default.gSxlHf) : Z.intl.string(Z.t.RzWDqY),
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), b ? c() : (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS)
      },
      loading: d
    }],
    targetElementRef: i,
    markAsDismissed: a
  })
}

function U(e) {
  let {
    guildId: t,
    powerups: n,
    channelRowRef: i,
    markAsDismissed: l
  } = e, o = n.find(e => e.skuId === a.A$);
  if (null != o) return (0, r.jsx)(V, {
    targetElementRef: i,
    title: Z.intl.string(P.default.Ygpx4Q),
    body: Z.intl.string(P.default.mmNkUA),
    size: "video",
    asset: D.Z,
    actions: [{
      text: Z.intl.string(Z.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId)
      }
    }],
    markAsDismissed: l
  });
  let s = n.find(e => C.NL.has(e.skuId));
  return null != s ? (0, r.jsx)(V, {
    targetElementRef: i,
    title: Z.intl.string(P.default["kA2c+n"]),
    body: Z.intl.string(P.default.TUilLj),
    asset: (0, r.jsx)("img", {
      alt: "",
      src: R.Z,
      className: N.image
    }),
    actions: [{
      text: Z.intl.string(Z.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, s.skuId)
      }
    }],
    markAsDismissed: l
  }) : null
}

function G(e) {
  let {
    guildId: t,
    type: n,
    markAsDismissed: i,
    channelRowRef: a
  } = e, {
    available: o
  } = (0, m.Z)(t);
  return (0, r.jsx)(V, {
    targetElementRef: a,
    asset: (0, r.jsx)("img", {
      alt: "",
      src: T.Z,
      className: l()(N.image, N.gameServerHostingImage)
    }),
    title: Z.intl.string(n === h.Jk.GAME_SERVER_HOSTING_AVAILABLE ? I.default.wXLChx : I.default["8z8RpY"]),
    body: n === h.Jk.GAME_SERVER_HOSTING_AVAILABLE ? Z.intl.string(I.default.lZ6m7Q) : Z.intl.format(I.default["IQ1E+d"], {
      boostCount: o
    }),
    actions: [{
      text: Z.intl.string(Z.t.RzWDqY),
      variant: "primary",
      onClick: () => (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE)
    }],
    markAsDismissed: i
  })
}

function B(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    channelRowRef: i
  } = e;
  return (0, r.jsx)(V, {
    targetElementRef: i,
    asset: (0, r.jsx)("img", {
      alt: "",
      src: T.Z,
      className: l()(N.image, N.gameServerHostingImage)
    }),
    title: Z.intl.string(I.default["eX64+z"]),
    body: Z.intl.string(I.default.NpgfEB),
    actions: [{
      text: Z.intl.string(Z.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        n(_.L.TAKE_ACTION), (0, p.uL)(E.Z5c.CHANNEL(t, S.oC.GAME_SERVERS))
      }
    }],
    markAsDismissed: n
  })
}

function F(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    channelRowRef: i
  } = e;
  return (0, r.jsx)(V, {
    targetElementRef: i,
    position: "bottom",
    align: "center",
    alignmentStrategy: "edge",
    caretConfig: {
      align: "center"
    },
    asset: (0, r.jsx)("img", {
      alt: "",
      src: T.Z,
      className: l()(N.image, N.gameServerHostingImage)
    }),
    title: Z.intl.string(I.default.t3LNW1),
    body: Z.intl.string(I.default["9qPJJd"]),
    actions: [{
      text: Z.intl.string(I.default.k0Y0BE),
      variant: "primary",
      onClick: () => {
        n(_.L.TAKE_ACTION), (0, d.f)({
          guildId: t,
          location: {
            section: E.jXE.GUILD_HEADER,
            object: E.qAy.BUTTON_CTA
          },
          scrollToPowerupCards: true
        })
      }
    }],
    markAsDismissed: n
  })
}

function H(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    channelRowRef: i
  } = e, a = (0, b.Z)(t);
  return (0, r.jsx)(V, {
    targetElementRef: i,
    position: a ? "right" : "bottom",
    align: a ? "top" : "center",
    alignmentStrategy: "edge",
    caretConfig: a ? {
      align: "start"
    } : {
      align: "center"
    },
    asset: (0, r.jsx)("img", {
      alt: "",
      src: A.Z,
      className: l()(N.image, N.gameServerHostingImage)
    }),
    title: Z.intl.string(I.default["wy+j5s"]),
    body: Z.intl.string(I.default.uHvxkb),
    actions: [{
      text: Z.intl.string(I.default.k0Y0BE),
      variant: "primary",
      onClick: () => {
        n(_.L.TAKE_ACTION), a ? (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_GAME_SERVER_NEW_GAMES, x.fj) : (0, d.f)({
          guildId: t,
          location: {
            section: E.jXE.GUILD_HEADER,
            object: E.qAy.BUTTON_CTA
          },
          scrollToPowerupCards: true
        })
      }
    }],
    markAsDismissed: n
  })
}

function V(e) {
  var t, n, {
      caretConfig: i = {
        align: "start"
      },
      position: l = "right",
      align: a = "top",
      alignmentStrategy: o = "edge",
      markAsDismissed: u,
      size: d = "lg",
      asset: p
    } = e,
    f = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["caretConfig", "position", "align", "alignmentStrategy", "markAsDismissed", "size", "asset"]);
  return (0, r.jsx)(c.J2, (t = function(e) {
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
  }({}, f), n = n = {
    graphic: {
      type: "dynamic",
      component: s.DynamicGraphicComponent.GUILD_POWERUPS_COACHMARK_ASSET,
      props: {
        asset: p
      }
    },
    size: d,
    shouldShow: true,
    position: l,
    caretConfig: i,
    alignmentStrategy: o,
    align: a,
    onRequestClose: () => null == u ? true : u(_.L.USER_DISMISS)
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}