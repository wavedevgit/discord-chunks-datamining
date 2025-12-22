/** Chunk was on 67000 **/
/** chunk id: 933104, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $h: () => A,
  En: () => L,
  cO: () => D,
  dJ: () => M,
  jG: () => T,
  yI: () => R
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
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk326660 = require("./326660.js"),
  Chunk156732 = require("./156732.js"),
  Chunk448222 = require("./448222.js"),
  Chunk317169 = require("./317169.js"),
  Chunk639777 = require("./639777.js"),
  Chunk441536 = require("./441536.js"),
  Chunk795338 = require("./795338.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk921944 = require("./921944.js"),
  Chunk914820 = require("./914820.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk787349 = require("./787349.js"),
  Chunk796571 = require("./796571.js"),
  Chunk53374 = require("./53374.js"),
  Chunk822344 = require("./822344.js"),
  Chunk813206 = require("./813206.js");

function T(e) {
  let {
    guildId: t,
    powerup: n,
    channelRowRef: i,
    markAsDismissed: a
  } = e;
  return (0, r.jsx)(k, {
    asset: (0, r.jsx)(O.g, {
      className: l()(I.image, I.levelImage)
    }),
    title: _.intl.formatToPlainString(S.default["Zg/m9K"], {
      perkName: n.title
    }),
    body: _.intl.formatToPlainString(S.default["1EGXSK"], {
      perkName: n.title
    }),
    actions: [{
      text: _.intl.string(_.t.RzWDqY),
      variant: "primary",
      onClick: () => (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId)
    }],
    targetElementRef: i,
    markAsDismissed: a
  })
}

function A(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    channelRowRef: i
  } = e, l = (0, m.Z)(t);
  return (0, r.jsx)(c.Mb, {
    targetElementRef: i,
    assetUrl: N.Z,
    title: _.intl.string(S.default.QpQBPQ),
    body: _.intl.string(S.default["6hn0xF"]),
    action: {
      text: _.intl.string(_.t.RzWDqY),
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
    onRequestClose: () => null == n ? true : n(x.L.USER_DISMISS)
  })
}

function R(e) {
  let {
    guildId: t,
    powerups: n,
    channelRowRef: i,
    markAsDismissed: a
  } = e, s = (0, o.e7)([f.Z], () => {
    var e;
    return null == (e = f.Z.getGuild(t)) ? true : e.name
  }), {
    onActivate: c
  } = (0, g.Z)(t, n[0]), d = (0, p.Z)(n[0], true);
  if (0 === n.length) return;
  let h = n.length >= 3 ? _.intl.formatToPlainString(S.default["6Sv+3M"], {
      perk: n[0].title,
      perk2: n[1].title,
      perk3: n[2].title
    }) : 2 === n.length ? _.intl.formatToPlainString(S.default.wcQOqC, {
      perks: "".concat(n[0].title, " & ").concat(n[1].title)
    }) : _.intl.formatToPlainString(S.default.ZF8NT6, {
      perk: n[0].title
    }),
    b = 1 === n.length;
  return (0, r.jsx)(k, {
    size: 1 === n.length ? "video" : "lg",
    asset: n.length > 1 ? (0, r.jsx)(O.g, {
      className: l()(I.image, I.levelImage)
    }) : (0, r.jsx)("img", {
      alt: "",
      src: d,
      className: I.image
    }),
    title: _.intl.formatToPlainString(S.default.LmpChE, {
      guildName: s
    }),
    body: h,
    actions: [{
      text: b ? _.intl.string(S.default.gSxlHf) : _.intl.string(_.t.RzWDqY),
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), b ? c() : (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS)
      }
    }],
    targetElementRef: i,
    markAsDismissed: a
  })
}

function D(e) {
  let {
    guildId: t,
    powerups: n,
    channelRowRef: i,
    markAsDismissed: l
  } = e, o = n.find(e => e.skuId === a.A$);
  if (null != o) return (0, r.jsx)(k, {
    targetElementRef: i,
    title: _.intl.string(S.default.Ygpx4Q),
    body: _.intl.string(S.default.mmNkUA),
    size: "video",
    asset: w.Z,
    actions: [{
      text: _.intl.string(_.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId)
      }
    }],
    markAsDismissed: l
  });
  let s = n.find(e => v.NL.has(e.skuId));
  return null != s ? (0, r.jsx)(k, {
    targetElementRef: i,
    title: _.intl.string(S.default["kA2c+n"]),
    body: _.intl.string(S.default.TUilLj),
    asset: (0, r.jsx)("img", {
      alt: "",
      src: Z.Z,
      className: I.image
    }),
    actions: [{
      text: _.intl.string(_.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, s.skuId)
      }
    }],
    markAsDismissed: l
  }) : null
}

function M(e) {
  let {
    guildId: t,
    type: n,
    markAsDismissed: i,
    channelRowRef: a
  } = e, {
    available: o
  } = (0, b.Z)(t);
  return (0, r.jsx)(k, {
    targetElementRef: a,
    asset: (0, r.jsx)("img", {
      alt: "",
      src: P.Z,
      className: l()(I.image, I.gameServerHostingImage)
    }),
    title: _.intl.string(n === h.Jk.GAME_SERVER_HOSTING_AVAILABLE ? E.default.wXLChx : E.default["8z8RpY"]),
    body: n === h.Jk.GAME_SERVER_HOSTING_AVAILABLE ? _.intl.string(E.default.lZ6m7Q) : _.intl.format(E.default["IQ1E+d"], {
      boostCount: o
    }),
    actions: [{
      text: _.intl.string(_.t.RzWDqY),
      variant: "primary",
      onClick: () => (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE)
    }],
    markAsDismissed: i
  })
}

function L(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    channelRowRef: i
  } = e;
  return (0, r.jsx)(k, {
    size: "video",
    targetElementRef: i,
    asset: (0, r.jsx)("img", {
      alt: "",
      src: P.Z,
      className: l()(I.image, I.gameServerHostingImage)
    }),
    title: _.intl.string(E.default["eX64+z"]),
    body: _.intl.string(E.default.NpgfEB),
    actions: [{
      text: _.intl.string(_.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        n(x.L.TAKE_ACTION), (0, d.uL)(j.Z5c.CHANNEL(t, C.oC.GAME_SERVERS))
      }
    }],
    markAsDismissed: n
  })
}

function k(e) {
  var t, n, {
      caretConfig: i = {
        align: "start"
      },
      position: l = "right",
      align: a = "top",
      alignmentStrategy: o = "edge",
      markAsDismissed: u,
      size: d = "lg",
      asset: f
    } = e,
    h = function(e, t) {
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
  }({}, h), n = n = {
    graphic: {
      type: "dynamic",
      component: s.DynamicGraphicComponent.GUILD_POWERUPS_COACHMARK_ASSET,
      props: {
        asset: f
      }
    },
    size: d,
    shouldShow: true,
    position: l,
    caretConfig: i,
    alignmentStrategy: o,
    align: a,
    onRequestClose: () => null == u ? true : u(x.L.USER_DISMISS)
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