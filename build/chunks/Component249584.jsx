/** Chunk was on 67564 **/
/** chunk id: 249584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HW: () => L,
  K8: () => F,
  UB: () => k,
  YX: () => H,
  bo: () => U,
  jz: () => B,
  lw: () => G,
  mn: () => V
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk512750 = require("./512750.js"),
  Chunk311907 = require("./311907.js"),
  Chunk116833 = require("./116833.js"),
  Chunk342494 = require("./342494.js"),
  Chunk793574 = require("./793574.js"),
  Chunk509536 = require("./509536.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk71393 = require("./71393.js"),
  Chunk379229 = require("./379229.js"),
  Chunk990208 = require("./990208.js"),
  Chunk864310 = require("./864310.js"),
  Chunk363487 = require("./363487.js"),
  Chunk828162 = require("./828162.js"),
  Chunk490557 = require("./490557.jsx"),
  Chunk220628 = require("./220628.js"),
  Chunk867060 = require("./867060.js"),
  Chunk800007 = require("./800007.js"),
  Chunk568065 = require("./568065.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk49999 = require("./49999.js"),
  Chunk294726 = require("./294726.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk7946 = require("./7946.js"),
  Chunk390175 = require("./390175.js"),
  Chunk346213 = require("./346213.js"),
  Chunk108432 = require("./108432.js"),
  Chunk581665 = require("./581665.js"),
  Chunk20874 = require("./20874.js");

function L(e) {
  let {
    guildId: t,
    powerup: n,
    channelRowRef: l,
    markAsDismissed: s
  } = e;
  return (0, r.jsx)(K, {
    asset: (0, r.jsx)(y.b, {
      className: i()(T.Sl, T.SV)
    }),
    title: N.intl.formatToPlainString(I.default["Zg/m9K"], {
      perkName: n.title
    }),
    body: N.intl.formatToPlainString(I.default["1EGXSK"], {
      perkName: n.title
    }),
    actions: [{
      text: N.intl.string(N.t.RzWDqY),
      variant: "primary",
      onClick: () => (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId)
    }],
    targetElementRef: l,
    markAsDismissed: s
  })
}

function k(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    channelRowRef: l
  } = e, i = (0, b.A)(t);
  return (0, r.jsx)(c.HZ, {
    targetElementRef: l,
    assetUrl: R.A,
    title: N.intl.string(I.default.QpQBPQ),
    body: N.intl.string(I.default["6hn0xF"]),
    action: {
      text: N.intl.string(N.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS)
      }
    },
    position: i ? "right" : "bottom",
    alignmentStrategy: "edge",
    align: i ? "top" : "center",
    caretConfig: i ? {
      align: "start"
    } : {
      align: "center"
    },
    onRequestClose: () => null == n ? true : n(C.i.USER_DISMISS)
  })
}

function G(e) {
  let {
    guildId: t,
    powerups: n,
    channelRowRef: l,
    markAsDismissed: s
  } = e, o = (0, a.bG)([h.A], () => {
    var e;
    return null == (e = h.A.getGuild(t)) ? true : e.name
  }), {
    onActivate: c,
    isLoading: d,
    error: p
  } = (0, _.A)(t, n[0]), f = (0, g.A)(n[0], true);
  if ((0, O.A)(p), 0 === n.length) return;
  let m = n.length >= 3 ? N.intl.formatToPlainString(I.default["6Sv+3M"], {
      perk: n[0].title,
      perk2: n[1].title,
      perk3: n[2].title
    }) : 2 === n.length ? N.intl.formatToPlainString(I.default.wcQOqC, {
      perks: "".concat(n[0].title, " & ").concat(n[1].title)
    }) : N.intl.formatToPlainString(I.default.ZF8NT6, {
      perk: n[0].title
    }),
    b = 1 === n.length;
  return (0, r.jsx)(K, {
    size: 1 === n.length ? "video" : "lg",
    asset: n.length > 1 ? (0, r.jsx)(y.b, {
      className: i()(T.Sl, T.SV)
    }) : (0, r.jsx)("img", {
      alt: "",
      src: f,
      className: T.Sl
    }),
    title: N.intl.formatToPlainString(I.default.LmpChE, {
      guildName: o
    }),
    body: m,
    actions: [{
      text: b ? N.intl.string(I.default.gSxlHf) : N.intl.string(N.t.RzWDqY),
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), b ? c() : (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS)
      },
      loading: d
    }],
    targetElementRef: l,
    markAsDismissed: s
  })
}

function U(e) {
  let {
    guildId: t,
    powerups: n,
    channelRowRef: l,
    markAsDismissed: i
  } = e, a = n.find(e => e.skuId === s.FB);
  if (null != a) return (0, r.jsx)(K, {
    targetElementRef: l,
    title: N.intl.string(I.default.Ygpx4Q),
    body: N.intl.string(I.default.mmNkUA),
    size: "video",
    asset: M.A,
    actions: [{
      text: N.intl.string(N.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId)
      }
    }],
    markAsDismissed: i
  });
  let o = n.find(e => v.aH.has(e.skuId));
  return null != o ? (0, r.jsx)(K, {
    targetElementRef: l,
    title: N.intl.string(I.default["kA2c+n"]),
    body: N.intl.string(I.default.TUilLj),
    asset: (0, r.jsx)("img", {
      alt: "",
      src: D.A,
      className: T.Sl
    }),
    actions: [{
      text: N.intl.string(N.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId)
      }
    }],
    markAsDismissed: i
  }) : null
}

function B(e) {
  let {
    guildId: t,
    type: n,
    markAsDismissed: l,
    channelRowRef: s
  } = e, {
    available: a
  } = (0, m.A)(t);
  return (0, r.jsx)(K, {
    targetElementRef: s,
    asset: (0, r.jsx)("img", {
      alt: "",
      src: P.A,
      className: i()(T.Sl, T.RV)
    }),
    title: N.intl.string(n === f.o.GAME_SERVER_HOSTING_AVAILABLE ? S.default.wXLChx : S.default["8z8RpY"]),
    body: n === f.o.GAME_SERVER_HOSTING_AVAILABLE ? N.intl.string(S.default.lZ6m7Q) : N.intl.format(S.default["IQ1E+d"], {
      boostCount: a
    }),
    actions: [{
      text: N.intl.string(N.t.RzWDqY),
      variant: "primary",
      onClick: () => (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE)
    }],
    markAsDismissed: l
  })
}

function V(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    channelRowRef: l
  } = e;
  return (0, r.jsx)(K, {
    targetElementRef: l,
    asset: (0, r.jsx)("img", {
      alt: "",
      src: P.A,
      className: i()(T.Sl, T.RV)
    }),
    title: N.intl.string(S.default["eX64+z"]),
    body: N.intl.string(S.default.NpgfEB),
    actions: [{
      text: N.intl.string(N.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        n(C.i.TAKE_ACTION), (0, p.pX)(x.BVt.CHANNEL(t, E.VV.GAME_SERVERS))
      }
    }],
    markAsDismissed: n
  })
}

function F(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    channelRowRef: l
  } = e;
  return (0, r.jsx)(K, {
    targetElementRef: l,
    position: "bottom",
    align: "center",
    alignmentStrategy: "edge",
    caretConfig: {
      align: "center"
    },
    asset: (0, r.jsx)("img", {
      alt: "",
      src: P.A,
      className: i()(T.Sl, T.RV)
    }),
    title: N.intl.string(S.default.t3LNW1),
    body: N.intl.string(S.default["9qPJJd"]),
    actions: [{
      text: N.intl.string(S.default.k0Y0BE),
      variant: "primary",
      onClick: () => {
        n(C.i.TAKE_ACTION), (0, d.K)({
          guildId: t,
          location: {
            section: x.JJy.GUILD_HEADER,
            object: x.ZSU.BUTTON_CTA
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
    channelRowRef: l
  } = e, s = (0, b.A)(t);
  return (0, r.jsx)(K, {
    targetElementRef: l,
    position: s ? "right" : "bottom",
    align: s ? "top" : "center",
    alignmentStrategy: "edge",
    caretConfig: s ? {
      align: "start"
    } : {
      align: "center"
    },
    asset: (0, r.jsx)("img", {
      alt: "",
      src: w.A,
      className: i()(T.Sl, T.RV)
    }),
    title: N.intl.string(S.default["wy+j5s"]),
    body: N.intl.string(S.default.uHvxkb),
    actions: [{
      text: N.intl.string(S.default.k0Y0BE),
      variant: "primary",
      onClick: () => {
        n(C.i.TAKE_ACTION), s ? (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_NEW_GAMES, j.W5) : (0, d.K)({
          guildId: t,
          location: {
            section: x.JJy.GUILD_HEADER,
            object: x.ZSU.BUTTON_CTA
          },
          scrollToPowerupCards: true
        })
      }
    }],
    markAsDismissed: n
  })
}

function K(e) {
  var t, n;
  let {
    caretConfig: l = {
      align: "start"
    },
    position: i = "right",
    align: s = "top",
    alignmentStrategy: a = "edge",
    markAsDismissed: u,
    size: d = "lg",
    asset: p
  } = e, h = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["caretConfig", "position", "align", "alignmentStrategy", "markAsDismissed", "size", "asset"]);
  return (0, r.jsx)(c.AM, (t = function(e) {
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
      component: o.DynamicGraphicComponent.GUILD_POWERUPS_COACHMARK_ASSET,
      props: {
        asset: p
      }
    },
    size: d,
    shouldShow: true,
    position: i,
    caretConfig: l,
    alignmentStrategy: a,
    align: s,
    onRequestClose: () => null == u ? true : u(C.i.USER_DISMISS)
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