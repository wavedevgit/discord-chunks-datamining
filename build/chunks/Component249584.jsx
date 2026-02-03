/** Chunk was on 44669 **/
/** chunk id: 249584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HW: () => M,
  K8: () => H,
  UB: () => G,
  bo: () => U,
  jz: () => V,
  lw: () => k,
  mn: () => B
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk512750 = require("./512750.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk116833 = require("./116833.js"),
  Chunk342494 = require("./342494.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk509536 = require("./509536.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk71393 = require("./71393.js"),
  Chunk204017 = require("./204017.js"),
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
  Chunk108432 = require("./108432.js"),
  Chunk581665 = require("./581665.js"),
  Chunk20874 = require("./20874.js");

function M(e) {
  let {
    guildId: t,
    powerup: n,
    channelRowRef: l,
    markAsDismissed: s
  } = e;
  return (0, r.jsx)(F, {
    asset: (0, r.jsx)(x.b, {
      className: i()(w.Sl, w.SV)
    }),
    title: P.intl.formatToPlainString(T.default["Zg/m9K"], {
      perkName: n.title
    }),
    body: P.intl.formatToPlainString(T.default["1EGXSK"], {
      perkName: n.title
    }),
    actions: [{
      text: P.intl.string(P.t.RzWDqY),
      variant: "primary",
      onClick: () => (0, j.A)(t, p.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId)
    }],
    targetElementRef: l,
    markAsDismissed: s
  })
}

function G(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    channelRowRef: l
  } = e, i = (0, O.A)(t);
  return (0, r.jsx)(u.HZ, {
    targetElementRef: l,
    assetUrl: R.A,
    title: P.intl.string(T.default.QpQBPQ),
    body: P.intl.string(T.default["6hn0xF"]),
    action: {
      text: P.intl.string(P.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        (0, j.A)(t, p.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS)
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
    onRequestClose: () => null == n ? true : n(I.i.USER_DISMISS)
  })
}

function k(e) {
  let {
    guildId: t,
    powerups: n,
    channelRowRef: l,
    markAsDismissed: s
  } = e, a = (0, o.bG)([f.A], () => {
    var e;
    return null == (e = f.A.getGuild(t)) ? true : e.name
  }), {
    onActivate: c,
    isLoading: u,
    error: d
  } = (0, _.A)(t, n[0]), h = (0, A.A)(n[0], true);
  if ((0, v.A)(d), 0 === n.length) return;
  let g = n.length >= 3 ? P.intl.formatToPlainString(T.default["6Sv+3M"], {
      perk: n[0].title,
      perk2: n[1].title,
      perk3: n[2].title
    }) : 2 === n.length ? P.intl.formatToPlainString(T.default.wcQOqC, {
      perks: "".concat(n[0].title, " & ").concat(n[1].title)
    }) : P.intl.formatToPlainString(T.default.ZF8NT6, {
      perk: n[0].title
    }),
    m = 1 === n.length;
  return (0, r.jsx)(F, {
    size: 1 === n.length ? "video" : "lg",
    asset: n.length > 1 ? (0, r.jsx)(x.b, {
      className: i()(w.Sl, w.SV)
    }) : (0, r.jsx)("img", {
      alt: "",
      src: h,
      className: w.Sl
    }),
    title: P.intl.formatToPlainString(T.default.LmpChE, {
      guildName: a
    }),
    body: g,
    actions: [{
      text: m ? P.intl.string(T.default.gSxlHf) : P.intl.string(P.t.RzWDqY),
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), m ? c() : (0, j.A)(t, p.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS)
      },
      loading: u
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
  if (null != a) return (0, r.jsx)(F, {
    targetElementRef: l,
    title: P.intl.string(T.default.Ygpx4Q),
    body: P.intl.string(T.default.mmNkUA),
    size: "video",
    asset: L.A,
    actions: [{
      text: P.intl.string(P.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        (0, j.A)(t, p.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId)
      }
    }],
    markAsDismissed: i
  });
  let o = n.find(e => E.aH.has(e.skuId));
  return null != o ? (0, r.jsx)(F, {
    targetElementRef: l,
    title: P.intl.string(T.default["kA2c+n"]),
    body: P.intl.string(T.default.TUilLj),
    asset: (0, r.jsx)("img", {
      alt: "",
      src: D.A,
      className: w.Sl
    }),
    actions: [{
      text: P.intl.string(P.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        (0, j.A)(t, p.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId)
      }
    }],
    markAsDismissed: i
  }) : null
}

function V(e) {
  let {
    guildId: t,
    type: n,
    markAsDismissed: l,
    channelRowRef: i
  } = e, {
    available: s
  } = (0, y.A)(t), {
    gameName: c,
    gameName2: u
  } = (0, m.A)(), h = (0, o.bG)([d.A], () => d.A.useReducedMotion);
  return (0, r.jsx)(F, {
    size: "video",
    targetElementRef: i,
    asset: (0, r.jsx)(a.E_w, {
      withReducedMotion: "halt",
      fit: "contain",
      className: w.Sl,
      stateMachine: h ? "SM_Main_Int" : "SM_Auto"
    }),
    title: P.intl.string(n === b.o.GAME_SERVER_HOSTING_AVAILABLE ? N.default.wXLChx : N.default["8z8RpY"]),
    body: n === b.o.GAME_SERVER_HOSTING_AVAILABLE ? P.intl.formatToPlainString(N.default.sj2nIF, {
      gameName: c,
      gameName2: u
    }) : P.intl.format(N.default["IQ1E+d"], {
      boostCount: s
    }),
    actions: [{
      text: P.intl.string(P.t.RzWDqY),
      variant: "primary",
      onClick: () => (0, j.A)(t, p.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE)
    }],
    markAsDismissed: l
  })
}

function B(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    channelRowRef: l
  } = e, i = (0, o.bG)([d.A], () => d.A.useReducedMotion);
  return (0, r.jsx)(F, {
    size: "video",
    targetElementRef: l,
    asset: (0, r.jsx)(a.E_w, {
      withReducedMotion: "halt",
      fit: "contain",
      className: w.Sl,
      stateMachine: i ? "SM_Main_Int" : "SM_Auto"
    }),
    title: P.intl.string(N.default["eX64+z"]),
    body: P.intl.string(N.default.NpgfEB),
    actions: [{
      text: P.intl.string(P.t.RzWDqY),
      variant: "primary",
      onClick: () => {
        n(I.i.TAKE_ACTION), (0, g.pX)(C.BVt.CHANNEL(t, S.VV.GAME_SERVERS))
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
  } = e, {
    gameName: i,
    gameName2: s
  } = (0, m.A)(), c = (0, o.bG)([d.A], () => d.A.useReducedMotion);
  return (0, r.jsx)(F, {
    size: "video",
    targetElementRef: l,
    position: "bottom",
    align: "center",
    alignmentStrategy: "edge",
    caretConfig: {
      align: "center"
    },
    asset: (0, r.jsx)(a.E_w, {
      withReducedMotion: "halt",
      fit: "contain",
      className: w.Sl,
      stateMachine: c ? "SM_Main_Int" : "SM_Auto"
    }),
    title: P.intl.string(N.default.t3LNW1),
    body: P.intl.formatToPlainString(N.default.V9qFAU, {
      gameName: i,
      gameName2: s
    }),
    actions: [{
      text: P.intl.string(N.default.k0Y0BE),
      variant: "primary",
      onClick: () => {
        n(I.i.TAKE_ACTION), (0, h.K)({
          guildId: t,
          location: {
            section: C.JJy.GUILD_HEADER,
            object: C.ZSU.BUTTON_CTA
          },
          scrollToPowerupCards: true
        })
      }
    }],
    markAsDismissed: n
  })
}

function F(e) {
  var t, n;
  let {
    caretConfig: l = {
      align: "start"
    },
    position: i = "right",
    align: s = "top",
    alignmentStrategy: a = "edge",
    markAsDismissed: o,
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
  return (0, r.jsx)(u.AM, (t = function(e) {
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
      component: c.DynamicGraphicComponent.GUILD_POWERUPS_COACHMARK_ASSET,
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
    onRequestClose: () => null == o ? true : o(I.i.USER_DISMISS)
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