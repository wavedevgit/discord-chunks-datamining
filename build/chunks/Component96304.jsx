/** Chunk was on web.js **/
/** chunk id: 96304, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eN,
  l: () => eC
}), require("./228524.js"), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  u = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk923408 = require("./923408.js"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk822123 = require("./822123.js"),
  Chunk770335 = require("./770335.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk931959 = require("./931959.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk950191 = require("./950191.js"),
  Chunk576622 = require("./576622.js"),
  Chunk270574 = require("./270574.jsx"),
  Chunk915614 = require("./915614.jsx"),
  Chunk946356 = require("./946356.jsx"),
  Chunk939496 = require("./939496.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk178368 = require("./178368.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk837921 = require("./837921.js"),
  Chunk112848 = require("./112848.js"),
  Chunk704640 = require("./704640.js"),
  Chunk149757 = require("./149757.js"),
  Chunk30084 = require("./30084.jsx"),
  Chunk683793 = require("./683793.jsx"),
  Chunk499369 = require("./499369.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk565274 = require("./565274.js"),
  Chunk324770 = require("./324770.js"),
  Chunk838436 = require("./838436.js"),
  Chunk376038 = require("./376038.js"),
  Chunk66889 = require("./66889.js"),
  Chunk578586 = require("./578586.js"),
  Chunk955868 = require("./955868.js"),
  Chunk631294 = require("./631294.js"),
  Chunk751297 = require("./751297.js"),
  Chunk943298 = require("./943298.js"),
  Chunk33487 = require("./33487.js"),
  Chunk581820 = require("./581820.js");

function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ec() {
  return (ec = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function eu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      el(e, t, n[t])
    })
  }
  return e
}

function ed(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ef(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ed(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ep = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF,
  e_ = {
    boostItemVisual: Chunk578586,
    emojiStickersVisual: Chunk955868,
    screenShareItemVisual: Chunk33487,
    uploadsMessagesItemVisual: Chunk631294,
    uploadsMessagesItemVisualV2: Chunk751297,
    PL: Chunk943298,
    TR: Chunk581820
  },
  eh = {
    boostItemVisual: Chunk324770,
    emojiStickersVisual: Chunk838436,
    screenShareItemVisual: Chunk33487,
    uploadsMessagesItemVisual: Chunk376038,
    uploadsMessagesItemVisualV2: Chunk66889,
    PL: Chunk943298,
    TR: Chunk581820
  };

function em() {
  let e = (0, m.Ay)();
  return (0, f.Mw)(e) ? eh : e_
}

function eg(e) {
  let {
    description: t,
    onLearnMore: n,
    renderVisual: i
  } = e, a = eT();
  return (0, r.jsxs)("div", {
    className: s()(Z.Kw, {
      [Z.u0]: a
    }),
    children: [(0, r.jsxs)("div", {
      className: s()(Z.p3, {
        [Z.u0]: a
      }),
      children: [(0, r.jsx)(p.Text, {
        variant: "text-md/normal",
        children: t
      }), (0, r.jsx)(p.QWc, {
        onClick: n,
        text: X.intl.string(X.t.hvVgAZ)
      })]
    }), (0, r.jsx)("div", {
      className: s()(Z.aS, {
        [Z.u0]: a
      }),
      children: i()
    })]
  })
}

function eE(e) {
  let {} = e, t = ec({}, e), {
    theme: n
  } = (0, w.E)(), i = (0, p.rdh)(p.LU0.colors.INTERACTIVE_TEXT_ACTIVE, n).hex();
  return (0, r.jsx)(p.tvc, ef(eu({
    size: "md"
  }, t), {
    color: i
  }))
}

function eb(e) {
  let t, {
      currentUser: n,
      premiumType: i,
      onClose: a
    } = e,
    s = (0, I.Ay)(n.id),
    o = (0, d.bG)([g.A], () => g.A.useReducedMotion),
    l = i === z.PremiumTypes.TIER_1,
    c = () => {
      a(), (0, D.openUserSettings)(P.X.PROFILE_PANEL, {
        section: q.nc_.PROFILE_CUSTOMIZATION
      }), M.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "user_profile_customization"
      })
    };
  return t = (null == s ? true : s.premiumType) === z.PremiumTypes.TIER_2 ? (0, r.jsxs)(R.A, {
    user: n,
    displayProfile: s,
    forceShowPremium: true,
    themeType: null,
    className: Z.Kq,
    children: [(0, r.jsx)(N.o, {
      user: n,
      displayProfile: s,
      avatarSize: p._3J.SIZE_56,
      avatarOffsetX: 8,
      avatarOffsetY: 2,
      bannerWidth: 172,
      bannerHeight: 60,
      themePadding: 4
    }), (0, r.jsx)(ep, {
      className: Z.jU,
      src: n.getAvatarURL(true, (0, p.FT9)(p._3J.SIZE_56), !o),
      size: p._3J.SIZE_56,
      "aria-label": n.username
    }), (0, r.jsxs)("div", {
      className: Z.b$,
      children: [(0, r.jsx)(C.A, {
        className: Z.Bj,
        usernameClass: Z.TE,
        name: n.toString()
      }), (0, r.jsx)(eE, {
        className: Z.kC
      })]
    })]
  }) : (0, r.jsxs)("div", {
    className: Z.xl,
    children: [(0, r.jsx)(ep, {
      className: Z.wK,
      src: n.getAvatarURL(true, (0, p.FT9)(p._3J.SIZE_56), !o),
      size: p._3J.SIZE_56,
      "aria-label": n.username
    }), (0, r.jsxs)("div", {
      className: Z.Un,
      children: [(0, r.jsx)(C.A, {
        className: Z.Bj,
        usernameClass: Z.TE,
        name: n.toString()
      }), (0, r.jsx)(p.tvc, {
        size: "md",
        color: "currentColor",
        className: Z.kC
      })]
    })]
  }), (0, r.jsx)(eg, {
    description: l ? X.intl.format(X.t.xCaYwE, {}) : X.intl.format(X.t["gpqr+n"], {}),
    onLearnMore: c,
    renderVisual: () => t
  })
}

function ey(e) {
  var t, n, i;
  let {
    currentUser: a,
    onClose: s
  } = e, o = (0, F.$F)(), {
    analyticsLocations: l
  } = (0, b.Ay)(E.A.PREMIUM_UNCANCEL_MODAL), c = (0, F.Xb)(), u = null != (t = null == o ? true : o.id) ? t : z.Ac.PREMIUM_TENURE_1_MONTH, d = (0, B.A)(u);
  if (!(0, G.YE)(a, z.PremiumTypes.TIER_2) || null == c) return null;
  let f = null != (n = null == o ? true : o.status) ? n : F.Wo.UPCOMING,
    _ = null != (i = null == o ? true : o.nameUnformatted) ? i : z.VD[z.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
    h = (0, H.I)(u),
    m = X.intl.string(_),
    g = f === F.Wo.EARNED,
    y = null != o && "daysLeft" in o ? o.daysLeft : 1,
    O = X.t.pwkxYF;
  if (g) {
    let e = Math.max((0, G.To)(c), 1);
    e >= 365 ? (y = Math.floor(e / 365), O = X.t["/ojPfi"]) : (y = e, O = X.t.IItWYo)
  }
  let A = () => {
    s(), (0, Y.D)({
      analyticsLocations: l,
      displayProfile: null
    }), M.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
      action: "badges"
    })
  };
  return (0, r.jsx)(eg, {
    description: X.intl.format(O, {
      time: y
    }),
    onLearnMore: A,
    renderVisual: () => (0, r.jsx)(p.hLv, {
      className: Z.nc,
      color: d,
      children: (0, r.jsx)("img", {
        alt: m,
        src: h,
        className: Z.pq
      })
    })
  })
}

function eO(e) {
  let {
    premiumType: t
  } = e, n = 3, i = (0, d.bG)([g.A], () => g.A.useReducedMotion), a = (0, y.Fj)(null).filter(e => e.type === O.i.GUILD && (e.animated || null != e.guildId)).slice(0, n), s = (0, d.yK)([v.A], () => v.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, n - a.length)), o = em().emojiStickersVisual, l = t === z.PremiumTypes.TIER_1, c = () => {
    window.open(U.A.getArticleURL(q.MVz.PREMIUM_DETAILS)), M.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
      action: "emojis_stickers"
    })
  };
  return (0, r.jsx)(eg, {
    description: l ? X.intl.format(X.t.couiKJ, {}) : X.intl.format(X.t["0hUHi6"], {}),
    onLearnMore: c,
    renderVisual: () => null != a && a.length > 0 || !l && null != s && s.length > 0 ? (0, r.jsxs)("div", {
      className: Z.iB,
      children: [a.map(e => null == e.id ? e.url : k.Ay.getEmojiURL({
        id: e.id,
        animated: !i && e.animated,
        size: 58
      })).map((e, t) => null != e ? (0, r.jsx)("img", {
        className: Z.d7,
        alt: "",
        src: e
      }, "emoji-".concat(t)) : null), l ? null : s.map(e => (0, r.jsx)(S.A, {
        disableAnimation: i,
        sticker: e,
        size: 58,
        withLoadingIndicator: false
      }, e.id))]
    }) : (0, r.jsx)("img", {
      className: Z.OP,
      alt: "",
      src: o
    })
  })
}

function eA(e) {
  let {
    premiumType: t,
    onClose: n
  } = e;
  i.useEffect(() => _.h.wait(() => (0, h.CD)()), []);
  let a = (0, d.bG)([g.A], () => g.A.useReducedMotion),
    [o, l] = (0, d.yK)([j.A, x.A], () => {
      let e = j.A.boostSlots,
        t = new Map;
      u()(e).map("premiumGuildSubscription").map("guildId").forEach(e => {
        if (null != x.A.getGuild(e)) {
          var n;
          let r = null != (n = t.get(e)) ? n : 0;
          t.set(e, r + 1)
        }
      });
      let n = null,
        r = 0;
      return t.size > 0 && ([n, r] = Array.from(t.entries()).reduce((e, t) => t[1] > e[1] ? t : e)), [x.A.getGuild(n), r]
    }),
    c = null != o && l > 0,
    f = em().boostItemVisual,
    m = () => {
      n(), (0, D.openUserSettings)(P.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        section: q.nc_.GUILD_BOOSTING
      }), M.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "boosts"
      })
    };
  return (0, r.jsx)(eg, {
    description: t === z.PremiumTypes.TIER_1 ? X.intl.format(X.t.K4Hv69, {}) : X.intl.format(X.t.wRxEDW, {}),
    onLearnMore: m,
    renderVisual: () => c ? (0, r.jsx)("div", {
      className: Z.Ht,
      children: (0, r.jsxs)("div", {
        className: Z.W5,
        children: [(0, r.jsx)(A.A, {
          guild: o,
          size: A.A.Sizes.MEDIUM,
          animate: !a,
          className: Z.Hc
        }), (0, r.jsxs)("div", {
          className: Z.IA,
          children: [(0, r.jsx)(p.Text, {
            variant: "text-md/normal",
            className: s()(Z.v, Z.e0),
            children: o.name
          }), (0, r.jsxs)("div", {
            className: Z.i$,
            children: [(0, r.jsx)(p._Jp, {
              color: p.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
              className: Z.jZ
            }), (0, r.jsx)(p.Text, {
              variant: "text-xs/normal",
              className: s()(Z.v, Z.x2),
              children: X.intl.format(X.t["Ou/g/P"], {
                boostCount: l
              })
            })]
          })]
        })]
      })
    }) : (0, r.jsx)("img", {
      alt: "",
      src: f
    })
  })
}
let ev = () => {
  let e = em().screenShareItemVisual,
    t = () => {
      window.open(U.A.getArticleURL(q.MVz.STREAM_QUALITY_SETTINGS)), M.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "screen_share"
      })
    };
  return (0, r.jsx)(eg, {
    description: X.intl.format(X.t.wK04T1, {}),
    onLearnMore: t,
    renderVisual: () => (0, r.jsx)("img", {
      alt: "",
      src: e
    })
  })
};

function eS(e) {
  let {
    premiumType: t
  } = e, n = em().uploadsMessagesItemVisual, i = () => {
    window.open(U.A.getArticleURL(q.MVz.PREMIUM_DETAILS)), M.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
      action: "msgs_uploads"
    })
  };
  return (0, r.jsx)(eg, {
    description: t === z.PremiumTypes.TIER_2 ? X.intl.format(X.t.GsOFRJ, {}) : X.intl.format(X.t.wFWO6D, {}),
    onLearnMore: i,
    renderVisual: () => (0, r.jsx)("img", {
      alt: "",
      src: n
    })
  })
}
let eI = Chunk64700.createContext({
    isPremiumRebrand: false
  }),
  eT = () => i.useContext(eI).isPremiumRebrand;

function eC(e) {
  let {
    currentUser: t,
    premiumType: n,
    onClose: a,
    isDowngrade: o = false,
    isPremiumRebrand: l = false
  } = e, c = i.useMemo(() => {
    let e = [];
    switch (n) {
      case z.PremiumTypes.TIER_0:
        e.push((0, r.jsx)(eO, {
          premiumType: n
        }), (0, r.jsx)(eS, {
          premiumType: n
        }));
        break;
      case z.PremiumTypes.TIER_1:
        o ? e.push((0, r.jsx)(eb, {
          currentUser: t,
          premiumType: n,
          onClose: a
        }, "profile-item"), (0, r.jsx)(ev, {}, "screen-share-item"), (0, r.jsx)(eA, {
          premiumType: n,
          onClose: a
        }, "boost-item")) : e.push((0, r.jsx)(eb, {
          currentUser: t,
          premiumType: n,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eO, {
          premiumType: n
        }, "emoji-stickers-item"), (0, r.jsx)(ev, {}, "screen-share-item"), (0, r.jsx)(eS, {
          premiumType: n
        }, "uploads-item"), (0, r.jsx)(eA, {
          premiumType: n,
          onClose: a
        }, "boost-item"));
        break;
      case z.PremiumTypes.TIER_2:
        o ? e.push((0, r.jsx)(eb, {
          currentUser: t,
          premiumType: n,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eA, {
          premiumType: n,
          onClose: a
        }, "boost-item"), (0, r.jsx)(ev, {}, "screen-share-item")) : e.push((0, r.jsx)(ey, {
          currentUser: t,
          onClose: a
        }, "badge-item"), (0, r.jsx)(eb, {
          currentUser: t,
          premiumType: n,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eO, {
          premiumType: n
        }, "emoji-stickers-item"), (0, r.jsx)(eA, {
          premiumType: n,
          onClose: a
        }, "boost-item"), (0, r.jsx)(ev, {}, "screen-share-item"), (0, r.jsx)(eS, {
          premiumType: n
        }, "uploads-item"))
    }
    return e
  }, [n, t, a, o]);
  return (0, r.jsx)(eI.Provider, {
    value: {
      isPremiumRebrand: l
    },
    children: (0, r.jsx)("div", {
      className: s()(Z.xP, {
        [Z.u0]: l,
        [Z.mK]: l && c.length <= 2
      }),
      children: c
    })
  })
}
let eN = function(e) {
  let {
    premiumType: t,
    titleText: n,
    subtitleText: a,
    footer: s,
    onClose: o,
    onDiscountClaim: c,
    onContinue: u,
    analyticsLocations: f,
    isLoading: _ = false,
    churnUserDiscountOffer: h = null,
    isDowngrade: m = false,
    subtitleIcon: g,
    subtitleClassName: E
  } = e, b = (0, d.bG)([L.default], () => {
    let e = L.default.getCurrentUser();
    return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e
  });
  i.useEffect(() => {
    (0, T.A)(b.id, b.getAvatarURL(null, 80))
  }, [b]);
  let y = null != h && !_;
  return (i.useEffect(() => {
    y && M.default.track(q.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
      location_stack: f,
      discount_id: null == h ? true : h.discount_id
    })
  }, [y, f, h]), _) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(K.A, {
      premiumType: t,
      onClose: o
    }), (0, r.jsx)(p.$mQ, {
      "data-migration-pending": true,
      className: Z.rf,
      children: (0, r.jsx)(p.y$y, {
        className: Z.u1
      })
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(K.A, {
      premiumType: t,
      onClose: o
    }), (0, r.jsxs)(p.$mQ, {
      "data-migration-pending": true,
      className: Z.rf,
      children: [(0, r.jsx)(p.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        className: Z.DD,
        children: n
      }), (0, r.jsxs)("div", {
        className: E,
        children: [g, (0, r.jsx)(p.Text, {
          variant: "text-md/normal",
          children: a
        })]
      }), (0, r.jsx)(eC, {
        currentUser: b,
        premiumType: t,
        onClose: o,
        isDowngrade: m
      })]
    }), !y && (0, r.jsx)(p.jlY, {
      "data-migration-pending": true,
      children: s
    }), y && (0, r.jsx)(W.A, {
      churnUserDiscountOffer: h,
      onDiscountClaim: c,
      onContinue: u
    })]
  })
}