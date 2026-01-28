/** Chunk was on 77870 **/
/** chunk id: 249584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HW: () => D,
  K8: () => B,
  UB: () => M,
  bo: () => k,
  jz: () => G,
  lw: () => L,
  mn: () => U
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
  Chunk568065 = require("./568065.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk49999 = require("./49999.js"),
  Chunk294726 = require("./294726.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk7946 = require("./7946.js"),
  Chunk390175 = require("./390175.js"),
  Chunk108432 = require("./108432.js"),
  Chunk581665 = require("./581665.js"),
  Chunk20874 = require("./20874.js");

function D(e) {
  let {
    guildId: t,
    powerup: n,
    channelRowRef: l,
    markAsDismissed: s
  } = e;
  return (0, r.jsx)(V, {
    asset: (0, r.jsx)(y.b, {
      className: i()(N.Sl, N.SV)
    }),
    title: I.intl.formatToPlainString(S.default["Zg/m9K"], {
      perkName: n.title
    }),
    body: I.intl.formatToPlainString(S.default["1EGXSK"], {
      perkName: n.title
    }),
    actions: [{
      text: I.intl.string(I.t.RzWDqY),
      variant: "primary",
      onClick: () => (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId)
    }],
    targetElementRef: l,
    markAsDismissed: s
  })
}

function M(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    channelRowRef: l
  } = e, i = (0, b.A)(t);
  return (0, r.jsx)(c.HZ, {
    targetElementRef: l,
    assetUrl: P.A,
    title: I.intl.string(S.default.QpQBPQ),
    body: I.intl.string(S.default["6hn0xF"]),
    action: {
      text: I.intl.string(I.t.RzWDqY),
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
    onRequestClose: () => null == n ? true : n(E.i.USER_DISMISS)
  })
}

function L(e) {
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
  let m = n.length >= 3 ? I.intl.formatToPlainString(S.default["6Sv+3M"], {
      perk: n[0].title,
      perk2: n[1].title,
      perk3: n[2].title
    }) : 2 === n.length ? I.intl.formatToPlainString(S.default.wcQOqC, {
      perks: "".concat(n[0].title, " & ").concat(n[1].title)
    }) : I.intl.formatToPlainString(S.default.ZF8NT6, {
      perk: n[0].title
    }),
    b = 1 === n.length;
  return (0, r.jsx)(V, {
    size: 1 === n.length ? "video" : "lg",
    asset: n.length > 1 ? (0, r.jsx)(y.b, {
      className: i()(N.Sl, N.SV)
    }) : (0, r.jsx)("img", {
      alt: "",
      src: f,
      className: N.Sl
    }),
    title: I.intl.formatToPlainString(S.default.LmpChE, {
      guildName: o
    }),
    body: m,
    actions: [{
      text: b ? I.intl.string(S.default.gSxlHf) : I.intl.string(I.t.RzWDqY),
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

function k(e) {
  let {
    guildId: t,
    powerups: n,
    channelRowRef: l,
    markAsDismissed: i
  } = e, a = n.find(e => e.skuId === s.FB);
  if (null != a) return (0, r.jsx)(V, {
    targetElementRef: l,
    title: I.intl.string(S.default.Ygpx4Q),
    body: I.intl.string(S.default.mmNkUA),
    size: "video",
    asset: R.A,
    actions: [{
      text: I.intl.string(I.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId)
      }
    }],
    markAsDismissed: i
  });
  let o = n.find(e => j.aH.has(e.skuId));
  return null != o ? (0, r.jsx)(V, {
    targetElementRef: l,
    title: I.intl.string(S.default["kA2c+n"]),
    body: I.intl.string(S.default.TUilLj),
    asset: (0, r.jsx)("img", {
      alt: "",
      src: w.A,
      className: N.Sl
    }),
    actions: [{
      text: I.intl.string(I.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId)
      }
    }],
    markAsDismissed: i
  }) : null
}

function G(e) {
  let {
    guildId: t,
    type: n,
    markAsDismissed: l,
    channelRowRef: s
  } = e, {
    available: a
  } = (0, m.A)(t);
  return (0, r.jsx)(V, {
    targetElementRef: s,
    asset: (0, r.jsx)("img", {
      alt: "",
      src: T.A,
      className: i()(N.Sl, N.RV)
    }),
    title: I.intl.string(n === f.o.GAME_SERVER_HOSTING_AVAILABLE ? C.default.wXLChx : C.default["8z8RpY"]),
    body: n === f.o.GAME_SERVER_HOSTING_AVAILABLE ? I.intl.string(C.default.lZ6m7Q) : I.intl.format(C.default["IQ1E+d"], {
      boostCount: a
    }),
    actions: [{
      text: I.intl.string(I.t.RzWDqY),
      variant: "primary",
      onClick: () => (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE)
    }],
    markAsDismissed: l
  })
}

function U(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    channelRowRef: l
  } = e;
  return (0, r.jsx)(V, {
    targetElementRef: l,
    asset: (0, r.jsx)("img", {
      alt: "",
      src: T.A,
      className: i()(N.Sl, N.RV)
    }),
    title: I.intl.string(C.default["eX64+z"]),
    body: I.intl.string(C.default.NpgfEB),
    actions: [{
      text: I.intl.string(I.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        n(E.i.TAKE_ACTION), (0, p.pX)(v.BVt.CHANNEL(t, x.VV.GAME_SERVERS))
      }
    }],
    markAsDismissed: n
  })
}

function B(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    channelRowRef: l
  } = e;
  return (0, r.jsx)(V, {
    targetElementRef: l,
    position: "bottom",
    align: "center",
    alignmentStrategy: "edge",
    caretConfig: {
      align: "center"
    },
    asset: (0, r.jsx)("img", {
      alt: "",
      src: T.A,
      className: i()(N.Sl, N.RV)
    }),
    title: I.intl.string(C.default.t3LNW1),
    body: I.intl.string(C.default["9qPJJd"]),
    actions: [{
      text: I.intl.string(C.default.k0Y0BE),
      variant: "primary",
      onClick: () => {
        n(E.i.TAKE_ACTION), (0, d.K)({
          guildId: t,
          location: {
            section: v.JJy.GUILD_HEADER,
            object: v.ZSU.BUTTON_CTA
          },
          scrollToPowerupCards: true
        })
      }
    }],
    markAsDismissed: n
  })
}

function V(e) {
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
    onRequestClose: () => null == u ? true : u(E.i.USER_DISMISS)
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