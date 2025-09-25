/** Chunk was on 17938 **/
/** chunk id: 807163, original params: e,s,t (module,exports,require) **/
require.d(exports, {
  Z: () => eU,
  g: () => eM
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk304789 = require("./304789.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk179360 = require("./179360.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk543241 = require("./543241.js"),
  Chunk906411 = require("./906411.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk822179 = require("./822179.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk687158 = require("./687158.js"),
  Chunk484459 = require("./484459.js"),
  Chunk813549 = require("./813549.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk314884 = require("./314884.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk55935 = require("./55935.js"),
  Chunk63063 = require("./63063.js"),
  Chunk998502 = require("./998502.js"),
  Chunk768634 = require("./768634.js"),
  Chunk848572 = require("./848572.js"),
  Chunk787528 = require("./787528.js"),
  Chunk768865 = require("./768865.jsx"),
  Chunk789155 = require("./789155.jsx"),
  Chunk798769 = require("./798769.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk819019 = require("./819019.js"),
  Chunk834982 = require("./834982.js"),
  Chunk912450 = require("./912450.js"),
  Chunk703548 = require("./703548.js"),
  Chunk869333 = require("./869333.js"),
  Chunk652528 = require("./652528.js"),
  Chunk874692 = require("./874692.js"),
  Chunk391458 = require("./391458.js"),
  Chunk70967 = require("./70967.js"),
  Chunk674264 = require("./674264.js"),
  Chunk360088 = require("./360088.js"),
  Chunk304880 = require("./304880.js");

function eu() {
  return (eu = Object.assign || function(e) {
    for (var s = 1; s < arguments.length; s++) {
      var t = arguments[s];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
    }
    return e
  }).apply(this, arguments)
}
let em = {
    [Chunk474936.VU.PREMIUM_TENURE_1_MONTH]: Chunk819019.badgeGradientBronze,
    [Chunk474936.VU.PREMIUM_TENURE_3_MONTH]: Chunk819019.badgeGradientSilver,
    [Chunk474936.VU.PREMIUM_TENURE_6_MONTH]: Chunk819019.badgeGradientGold,
    [Chunk474936.VU.PREMIUM_TENURE_12_MONTH]: Chunk819019.badgeGradientPlatinum,
    [Chunk474936.VU.PREMIUM_TENURE_24_MONTH]: Chunk819019.badgeGradientDiamond,
    [Chunk474936.VU.PREMIUM_TENURE_36_MONTH]: Chunk819019.badgeGradientEmerald,
    [Chunk474936.VU.PREMIUM_TENURE_60_MONTH]: Chunk819019.badgeGradientRuby,
    [Chunk474936.VU.PREMIUM_TENURE_72_MONTH]: Chunk819019.badgeGradientOpal
  },
  ed = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  ep = {
    boostItemVisual: Chunk652528,
    emojiStickersVisual: Chunk874692,
    screenShareItemVisual: Chunk360088,
    uploadsMessagesItemVisual: Chunk391458,
    uploadsMessagesItemVisualV2: Chunk70967,
    PL: Chunk674264,
    TR: Chunk304880
  },
  ef = {
    boostItemVisual: Chunk834982,
    emojiStickersVisual: Chunk912450,
    screenShareItemVisual: Chunk360088,
    uploadsMessagesItemVisual: Chunk703548,
    uploadsMessagesItemVisualV2: Chunk869333,
    PL: Chunk674264,
    TR: Chunk304880
  };

function ex() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk780384.wj)(module) ? ef : ep
}

function eg(e) {
  let {
    description: s,
    onLearnMore: t,
    renderVisual: n
  } = e, a = eb();
  return (0, r.jsxs)("div", {
    className: i()($.whatYouLoseItem, {
      [$.premiumRebrand]: a
    }),
    children: [(0, r.jsxs)("div", {
      className: i()($.whatYouLoseItemLeftColumn, {
        [$.premiumRebrand]: a
      }),
      children: [(0, r.jsx)(x.Text, {
        variant: "text-md/normal",
        children: s
      }), (0, r.jsx)(f.zx, {
        "data-migration-pending": true,
        look: f.zx.Looks.LINK,
        color: f.zx.Colors.LINK,
        size: f.zx.Sizes.NONE,
        className: $.whatYouLoseItemLearnMore,
        onClick: t,
        children: X.intl.string(X.t.hvVgAQ)
      })]
    }), (0, r.jsx)("div", {
      className: i()($.whatYouLoseItemRightColumn, {
        [$.premiumRebrand]: a
      }),
      children: n()
    })]
  })
}

function ej(e) {
  var s, t, n = eu({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  let {
    theme: a
  } = (0, O.z)(), i = (0, x.dQu)(x.TVs.colors.INTERACTIVE_ACTIVE, a).hex();
  return (0, r.jsx)(x.SrA, (s = function(e) {
    for (var s = 1; s < arguments.length; s++) {
      var t = null != arguments[s] ? arguments[s] : {},
        r = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.forEach(function(s) {
        var r;
        r = t[s], s in e ? Object.defineProperty(e, s, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[s] = r
      })
    }
    return e
  }({
    size: "md"
  }, n), t = t = {
    color: i
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t)) : (function(e, s) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(t)).forEach(function(e) {
    Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(t, e))
  }), s))
}

function eC(e) {
  let s, {
      currentUser: t,
      premiumType: n,
      onClose: a
    } = e,
    i = (0, U.ZP)(t.id),
    o = (0, m.e7)([N.Z], () => N.Z.useReducedMotion),
    l = n === q.p9.TIER_1;
  return s = (null == i ? true : i.premiumType) === q.p9.TIER_2 ? (0, r.jsxs)(L.Z, {
    user: t,
    displayProfile: i,
    forceShowPremium: true,
    themeType: null,
    className: $.profileCard,
    children: [(0, r.jsx)(P.b, {
      user: t,
      displayProfile: i,
      avatarSize: x.EFr.SIZE_56,
      avatarOffsetX: 8,
      avatarOffsetY: 2,
      bannerWidth: 172,
      bannerHeight: 60,
      themePadding: 4
    }), (0, r.jsx)(ed, {
      className: $.profileAvatar,
      src: t.getAvatarURL(true, (0, x.pxk)(x.EFr.SIZE_56), !o),
      size: x.EFr.SIZE_56,
      "aria-label": t.username
    }), (0, r.jsxs)("div", {
      className: $.profileUserInfo,
      children: [(0, r.jsx)(R.Z, {
        className: $.profileNameTag,
        usernameClass: $.profileNameTagUsername,
        name: t.toString()
      }), (0, r.jsx)(ej, {
        className: $.profilePremiumIcon
      })]
    })]
  }) : (0, r.jsxs)("div", {
    className: $.profileCardTier1,
    children: [(0, r.jsx)(ed, {
      className: $.profileAvatarTier1,
      src: t.getAvatarURL(true, (0, x.pxk)(x.EFr.SIZE_56), !o),
      size: x.EFr.SIZE_56,
      "aria-label": t.username
    }), (0, r.jsxs)("div", {
      className: $.profileUserInfoTier1,
      children: [(0, r.jsx)(R.Z, {
        className: $.profileNameTag,
        usernameClass: $.profileNameTagUsername,
        name: t.toString()
      }), (0, r.jsx)(x.SrA, {
        size: "md",
        color: "currentColor",
        className: $.profilePremiumIcon
      })]
    })]
  }), (0, r.jsx)(eg, {
    description: l ? X.intl.format(X.t.xCaYwM, {}) : X.intl.format(X.t["gpqr+v"], {}),
    onLearnMore: () => {
      a(), (0, A.openUserSettings)(y.n.PROFILE_PANEL, {
        section: Q.oAB.PROFILE_CUSTOMIZATION
      }), V.default.track(Q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "user_profile_customization"
      })
    },
    renderVisual: () => s
  })
}

function eN(e) {
  var s, t, n, a;
  let {
    premiumType: o,
    onClose: l
  } = e, c = (0, G.C)(o, "BadgeItem"), u = (0, B.Rw)(), {
    analyticsLocations: m
  } = (0, I.ZP)(h.Z.PREMIUM_UNCANCEL_MODAL), p = (0, B.GG)();
  if (!c || null == p) return null;
  let f = null != (s = null == u ? true : u.id) ? s : q.VU.PREMIUM_TENURE_1_MONTH,
    x = null != (t = null == u ? true : u.status) ? t : B.Vq.UPCOMING,
    g = null != (n = null == u ? true : u.nameUnformatted) ? n : q.vK[q.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted,
    j = (0, K.J)(f),
    C = X.intl.string(g),
    N = x === B.Vq.EARNED,
    E = null != u && "daysLeft" in u ? u.daysLeft : 1,
    _ = X.t.pwkxYG;
  if (N) {
    let e = new Date,
      s = Math.max((0, z.wY)(e, new Date(p)), 1);
    s >= 365 ? (E = Math.floor(s / 365), _ = X.t["/ojPfn"]) : (E = s, _ = X.t.IItWYm)
  }
  let T = null != (a = em[f]) ? a : $.badgeGradientBronze;
  return (0, r.jsx)(eg, {
    description: X.intl.format(_, {
      time: E
    }),
    onLearnMore: () => {
      l(), (0, W.k)({
        analyticsLocations: m,
        displayProfile: null
      }), V.default.track(Q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "badges"
      })
    },
    renderVisual: () => (0, r.jsxs)(d.$, {
      className: i()($.badgeGradientWrapper, T),
      children: [(0, r.jsx)("img", {
        alt: "",
        src: j,
        className: i()($.badgeImage, $.blurredBadgeImage)
      }), (0, r.jsx)("img", {
        alt: C,
        src: j,
        className: $.badgeImage
      })]
    })
  })
}

function eh(e) {
  let {
    premiumType: s
  } = e, t = (0, m.e7)([N.Z], () => N.Z.useReducedMotion), n = (0, E.wC)(null).filter(e => e.type === _.B.GUILD && (e.animated || null != e.guildId)).slice(0, 3), a = (0, m.Wu)([b.Z], () => b.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)), i = ex().emojiStickersVisual, o = s === q.p9.TIER_1;
  return (0, r.jsx)(eg, {
    description: o ? X.intl.format(X.t.couiKC, {}) : X.intl.format(X.t["0hUHi4"], {}),
    onLearnMore: () => {
      window.open(F.Z.getArticleURL(Q.BhN.PREMIUM_DETAILS)), V.default.track(Q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "emojis_stickers"
      })
    },
    renderVisual: () => null != n && n.length > 0 || !o && null != a && a.length > 0 ? (0, r.jsxs)("div", {
      className: $.emojiStickersPersonalizedContainer,
      children: [n.map(e => null == e.id ? e.url : k.ZP.getEmojiURL({
        id: e.id,
        animated: !t && e.animated,
        size: 58
      })).map((e, s) => null != e ? (0, r.jsx)("img", {
        className: $.personalizedEmoji,
        alt: "",
        src: e
      }, "emoji-".concat(s)) : null), o ? null : a.map(e => (0, r.jsx)(M.Z, {
        disableAnimation: t,
        sticker: e,
        size: 58,
        withLoadingIndicator: false
      }, e.id))]
    }) : (0, r.jsx)("img", {
      className: $.nonPersonalizedGraphic,
      alt: "",
      src: i
    })
  })
}

function eI(e) {
  let {
    premiumType: s,
    onClose: t
  } = e;
  n.useEffect(() => g.Z.wait(() => (0, j.X8)()), []);
  let a = (0, m.e7)([N.Z], () => N.Z.useReducedMotion),
    [o, l] = (0, m.Wu)([Z.Z, S.Z], () => {
      let e = Z.Z.boostSlots,
        s = new Map;
      u()(e).map("premiumGuildSubscription").map("guildId").forEach(e => {
        if (null != S.Z.getGuild(e)) {
          var t;
          let r = null != (t = s.get(e)) ? t : 0;
          s.set(e, r + 1)
        }
      });
      let t = null,
        r = 0;
      return s.size > 0 && ([t, r] = Array.from(s.entries()).reduce((e, s) => s[1] > e[1] ? s : e)), [S.Z.getGuild(t), r]
    }),
    c = null != o && l > 0,
    d = ex().boostItemVisual;
  return (0, r.jsx)(eg, {
    description: s === q.p9.TIER_1 ? X.intl.format(X.t["K4Hv6+"], {}) : X.intl.format(X.t.wRxEDQ, {}),
    onLearnMore: () => {
      t(), (0, A.openUserSettings)(y.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        section: Q.oAB.GUILD_BOOSTING
      }), V.default.track(Q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "boosts"
      })
    },
    renderVisual: () => c ? (0, r.jsx)("div", {
      className: $.boostCardContainer,
      children: (0, r.jsxs)("div", {
        className: $.boostCard,
        children: [(0, r.jsx)(T.Z, {
          guild: o,
          size: T.Z.Sizes.MEDIUM,
          animate: !a,
          className: $.boostCardIcon
        }), (0, r.jsxs)("div", {
          className: $.boostCardInfo,
          children: [(0, r.jsx)(x.Text, {
            variant: "text-md/normal",
            className: i()($.textSingleLineEllipsis, $.boostCardTitle),
            children: o.name
          }), (0, r.jsxs)("div", {
            className: $.boostCardSubtitle,
            children: [(0, r.jsx)(x.$Eu, {
              color: x.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
              className: $.boostCardGem
            }), (0, r.jsx)(x.Text, {
              variant: "text-xs/normal",
              className: i()($.textSingleLineEllipsis, $.boostCardCount),
              children: X.intl.format(X.t["Ou/g/P"], {
                boostCount: l
              })
            })]
          })]
        })]
      })
    }) : (0, r.jsx)("img", {
      alt: "",
      src: d
    })
  })
}
let eE = () => {
  let e = ex().screenShareItemVisual;
  return (0, Chunk951288.jsx)(eg, {
    description: Chunk388032.intl.format(Chunk388032.t.wK04T0, {}),
    onLearnMore: () => {
      window.open(Chunk63063.Z.getArticleURL(Chunk981631.BhN.STREAM_QUALITY_SETTINGS)), Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "screen_share"
      })
    },
    renderVisual: () => (0, Chunk951288.jsx)("img", {
      alt: "",
      src: module
    })
  })
};

function e_(e) {
  let {
    premiumType: s
  } = e, t = ex().uploadsMessagesItemVisual;
  return (0, r.jsx)(eg, {
    description: s === q.p9.TIER_2 ? X.intl.format(X.t.GsOFRE, {}) : X.intl.format(X.t.wFWO6O, {}),
    onLearnMore: () => {
      window.open(F.Z.getArticleURL(Q.BhN.PREMIUM_DETAILS)), V.default.track(Q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "msgs_uploads"
      })
    },
    renderVisual: () => (0, r.jsx)("img", {
      alt: "",
      src: t
    })
  })
}
let eT = Chunk647438.createContext({
    isPremiumRebrand: false
  }),
  eb = () => Chunk647438.useContext(eT).isPremiumRebrand;

function eM(e) {
  let {
    currentUser: s,
    premiumType: t,
    onClose: a,
    isDowngrade: o = false,
    isPremiumRebrand: l = false
  } = e, c = n.useMemo(() => {
    let e = [];
    switch (t) {
      case q.p9.TIER_0:
        e.push((0, r.jsx)(eh, {
          premiumType: t
        }), (0, r.jsx)(e_, {
          premiumType: t
        }));
        break;
      case q.p9.TIER_1:
        o ? e.push((0, r.jsx)(eC, {
          currentUser: s,
          premiumType: t,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eE, {}, "screen-share-item"), (0, r.jsx)(eI, {
          premiumType: t,
          onClose: a
        }, "boost-item")) : e.push((0, r.jsx)(eC, {
          currentUser: s,
          premiumType: t,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eh, {
          premiumType: t
        }, "emoji-stickers-item"), (0, r.jsx)(eE, {}, "screen-share-item"), (0, r.jsx)(e_, {
          premiumType: t
        }, "uploads-item"), (0, r.jsx)(eI, {
          premiumType: t,
          onClose: a
        }, "boost-item"));
        break;
      case q.p9.TIER_2:
        o ? e.push((0, r.jsx)(eC, {
          currentUser: s,
          premiumType: t,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eI, {
          premiumType: t,
          onClose: a
        }, "boost-item"), (0, r.jsx)(eE, {}, "screen-share-item")) : e.push((0, r.jsx)(eN, {
          premiumType: t,
          onClose: a
        }, "badge-item"), (0, r.jsx)(eC, {
          currentUser: s,
          premiumType: t,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eh, {
          premiumType: t
        }, "emoji-stickers-item"), (0, r.jsx)(eI, {
          premiumType: t,
          onClose: a
        }, "boost-item"), (0, r.jsx)(eE, {}, "screen-share-item"), (0, r.jsx)(e_, {
          premiumType: t
        }, "uploads-item"))
    }
    return e
  }, [t, s, a, o]);
  return (0, r.jsx)(eT.Provider, {
    value: {
      isPremiumRebrand: l
    },
    children: (0, r.jsx)("div", {
      className: i()($.whatYouLoseItemContainer, {
        [$.premiumRebrand]: l,
        [$.noMargin]: l && c.length <= 2
      }),
      children: c
    })
  })
}
let eU = function(e) {
  let {
    premiumType: s,
    titleText: t,
    subtitleText: a,
    footer: i,
    onClose: o,
    onDiscountClaim: c,
    onContinue: u,
    analyticsLocations: d,
    isLoading: p = false,
    churnUserDiscountOffer: f = null,
    isDowngrade: g = false,
    subtitleIcon: j,
    subtitleClassName: C
  } = e, N = (0, m.e7)([w.default], () => {
    let e = w.default.getCurrentUser();
    return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e
  });
  n.useEffect(() => {
    (0, v.Z)(N.id, N.getAvatarURL(null, 80))
  }, [N]);
  let h = null != f && !p;
  return (n.useEffect(() => {
    h && V.default.track(Q.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
      location_stack: d,
      discount_id: null == f ? true : f.discount_id
    })
  }, [h, d, f]), p) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(Y.Z, {
      premiumType: s,
      onClose: o
    }), (0, r.jsx)(x.hzk, {
      "data-migration-pending": true,
      className: $.body,
      children: (0, r.jsx)(x.$jN, {
        className: $.spinner
      })
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(Y.Z, {
      premiumType: s,
      onClose: o
    }), (0, r.jsxs)(x.hzk, {
      "data-migration-pending": true,
      className: $.body,
      children: [(0, r.jsx)(x.X6q, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: $.title,
        children: t
      }), (0, r.jsxs)("div", {
        className: C,
        children: [j, (0, r.jsx)(x.Text, {
          variant: "text-md/normal",
          children: a
        })]
      }), (0, r.jsx)(eM, {
        currentUser: N,
        premiumType: s,
        onClose: o,
        isDowngrade: g
      })]
    }), !h && (0, r.jsx)(x.mzw, {
      "data-migration-pending": true,
      children: i
    }), h && (0, r.jsx)(H.Z, {
      churnUserDiscountOffer: f,
      onDiscountClaim: c,
      onContinue: u
    })]
  })
}