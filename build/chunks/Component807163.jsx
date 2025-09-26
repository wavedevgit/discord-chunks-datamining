/** Chunk was on 17938 **/
/** chunk id: 807163, original params: e,s,t (module,exports,require) **/
require.d(exports, {
  Z: () => eM,
  g: () => eb
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
  Chunk616885 = require("./616885.js"),
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

function ec() {
  return (ec = Object.assign || function(e) {
    for (var s = 1; s < arguments.length; s++) {
      var t = arguments[s];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
    }
    return e
  }).apply(this, arguments)
}
let eu = {
    [Chunk474936.VU.PREMIUM_TENURE_1_MONTH]: Chunk616885.badgeGradientBronze,
    [Chunk474936.VU.PREMIUM_TENURE_3_MONTH]: Chunk616885.badgeGradientSilver,
    [Chunk474936.VU.PREMIUM_TENURE_6_MONTH]: Chunk616885.badgeGradientGold,
    [Chunk474936.VU.PREMIUM_TENURE_12_MONTH]: Chunk616885.badgeGradientPlatinum,
    [Chunk474936.VU.PREMIUM_TENURE_24_MONTH]: Chunk616885.badgeGradientDiamond,
    [Chunk474936.VU.PREMIUM_TENURE_36_MONTH]: Chunk616885.badgeGradientEmerald,
    [Chunk474936.VU.PREMIUM_TENURE_60_MONTH]: Chunk616885.badgeGradientRuby,
    [Chunk474936.VU.PREMIUM_TENURE_72_MONTH]: Chunk616885.badgeGradientOpal
  },
  em = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  ed = {
    boostItemVisual: Chunk652528,
    emojiStickersVisual: Chunk874692,
    screenShareItemVisual: Chunk360088,
    uploadsMessagesItemVisual: Chunk391458,
    uploadsMessagesItemVisualV2: Chunk70967,
    PL: Chunk674264,
    TR: Chunk304880
  },
  ep = {
    boostItemVisual: Chunk834982,
    emojiStickersVisual: Chunk912450,
    screenShareItemVisual: Chunk360088,
    uploadsMessagesItemVisual: Chunk703548,
    uploadsMessagesItemVisualV2: Chunk869333,
    PL: Chunk674264,
    TR: Chunk304880
  };

function ef() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk780384.wj)(module) ? ep : ed
}

function ex(e) {
  let {
    description: s,
    onLearnMore: t,
    renderVisual: n
  } = e, a = eT();
  return (0, r.jsxs)("div", {
    className: i()(X.whatYouLoseItem, {
      [X.premiumRebrand]: a
    }),
    children: [(0, r.jsxs)("div", {
      className: i()(X.whatYouLoseItemLeftColumn, {
        [X.premiumRebrand]: a
      }),
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/normal",
        children: s
      }), (0, r.jsx)(p.zx, {
        "data-migration-pending": true,
        look: p.zx.Looks.LINK,
        color: p.zx.Colors.LINK,
        size: p.zx.Sizes.NONE,
        className: X.whatYouLoseItemLearnMore,
        onClick: t,
        children: Q.intl.string(Q.t.hvVgAQ)
      })]
    }), (0, r.jsx)("div", {
      className: i()(X.whatYouLoseItemRightColumn, {
        [X.premiumRebrand]: a
      }),
      children: n()
    })]
  })
}

function eg(e) {
  var s, t, n = ec({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  let {
    theme: a
  } = (0, L.z)(), i = (0, f.dQu)(f.TVs.colors.INTERACTIVE_ACTIVE, a).hex();
  return (0, r.jsx)(f.SrA, (s = function(e) {
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

function ej(e) {
  let s, {
      currentUser: t,
      premiumType: n,
      onClose: a
    } = e,
    i = (0, M.ZP)(t.id),
    o = (0, m.e7)([C.Z], () => C.Z.useReducedMotion),
    l = n === Y.p9.TIER_1;
  return s = (null == i ? true : i.premiumType) === Y.p9.TIER_2 ? (0, r.jsxs)(P.Z, {
    user: t,
    displayProfile: i,
    forceShowPremium: true,
    themeType: null,
    className: X.profileCard,
    children: [(0, r.jsx)(R.b, {
      user: t,
      displayProfile: i,
      avatarSize: f.EFr.SIZE_56,
      avatarOffsetX: 8,
      avatarOffsetY: 2,
      bannerWidth: 172,
      bannerHeight: 60,
      themePadding: 4
    }), (0, r.jsx)(em, {
      className: X.profileAvatar,
      src: t.getAvatarURL(true, (0, f.pxk)(f.EFr.SIZE_56), !o),
      size: f.EFr.SIZE_56,
      "aria-label": t.username
    }), (0, r.jsxs)("div", {
      className: X.profileUserInfo,
      children: [(0, r.jsx)(v.Z, {
        className: X.profileNameTag,
        usernameClass: X.profileNameTagUsername,
        name: t.toString()
      }), (0, r.jsx)(eg, {
        className: X.profilePremiumIcon
      })]
    })]
  }) : (0, r.jsxs)("div", {
    className: X.profileCardTier1,
    children: [(0, r.jsx)(em, {
      className: X.profileAvatarTier1,
      src: t.getAvatarURL(true, (0, f.pxk)(f.EFr.SIZE_56), !o),
      size: f.EFr.SIZE_56,
      "aria-label": t.username
    }), (0, r.jsxs)("div", {
      className: X.profileUserInfoTier1,
      children: [(0, r.jsx)(v.Z, {
        className: X.profileNameTag,
        usernameClass: X.profileNameTagUsername,
        name: t.toString()
      }), (0, r.jsx)(f.SrA, {
        size: "md",
        color: "currentColor",
        className: X.profilePremiumIcon
      })]
    })]
  }), (0, r.jsx)(ex, {
    description: l ? Q.intl.format(Q.t.xCaYwM, {}) : Q.intl.format(Q.t["gpqr+v"], {}),
    onLearnMore: () => {
      a(), (0, y.openUserSettings)(O.n.PROFILE_PANEL, {
        section: q.oAB.PROFILE_CUSTOMIZATION
      }), Z.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "user_profile_customization"
      })
    },
    renderVisual: () => s
  })
}

function eC(e) {
  var s, t, n, a;
  let {
    premiumType: o,
    onClose: l
  } = e, c = (0, D.C)(o, "BadgeItem"), u = (0, G.Rw)(), {
    analyticsLocations: m
  } = (0, h.ZP)(N.Z.PREMIUM_UNCANCEL_MODAL), d = (0, G.GG)();
  if (!c || null == d) return null;
  let p = null != (s = null == u ? true : u.id) ? s : Y.VU.PREMIUM_TENURE_1_MONTH,
    x = null != (t = null == u ? true : u.status) ? t : G.Vq.UPCOMING,
    g = null != (n = null == u ? true : u.nameUnformatted) ? n : Y.vK[Y.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted,
    j = (0, B.J)(p),
    C = Q.intl.string(g),
    I = x === G.Vq.EARNED,
    E = null != u && "daysLeft" in u ? u.daysLeft : 1,
    _ = Q.t.pwkxYG;
  if (I) {
    let e = new Date,
      s = Math.max((0, k.wY)(e, new Date(d)), 1);
    s >= 365 ? (E = Math.floor(s / 365), _ = Q.t["/ojPfn"]) : (E = s, _ = Q.t.IItWYm)
  }
  let T = null != (a = eu[p]) ? a : X.badgeGradientBronze;
  return (0, r.jsx)(ex, {
    description: Q.intl.format(_, {
      time: E
    }),
    onLearnMore: () => {
      l(), (0, K.k)({
        analyticsLocations: m,
        displayProfile: null
      }), Z.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "badges"
      })
    },
    renderVisual: () => (0, r.jsxs)(f.$1m, {
      className: i()(X.badgeGradientWrapper, T),
      children: [(0, r.jsx)("img", {
        alt: "",
        src: j,
        className: i()(X.badgeImage, X.blurredBadgeImage)
      }), (0, r.jsx)("img", {
        alt: C,
        src: j,
        className: X.badgeImage
      })]
    })
  })
}

function eN(e) {
  let {
    premiumType: s
  } = e, t = (0, m.e7)([C.Z], () => C.Z.useReducedMotion), n = (0, I.wC)(null).filter(e => e.type === E.B.GUILD && (e.animated || null != e.guildId)).slice(0, 3), a = (0, m.Wu)([T.Z], () => T.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)), i = ef().emojiStickersVisual, o = s === Y.p9.TIER_1;
  return (0, r.jsx)(ex, {
    description: o ? Q.intl.format(Q.t.couiKC, {}) : Q.intl.format(Q.t["0hUHi4"], {}),
    onLearnMore: () => {
      window.open(z.Z.getArticleURL(q.BhN.PREMIUM_DETAILS)), Z.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "emojis_stickers"
      })
    },
    renderVisual: () => null != n && n.length > 0 || !o && null != a && a.length > 0 ? (0, r.jsxs)("div", {
      className: X.emojiStickersPersonalizedContainer,
      children: [n.map(e => null == e.id ? e.url : V.ZP.getEmojiURL({
        id: e.id,
        animated: !t && e.animated,
        size: 58
      })).map((e, s) => null != e ? (0, r.jsx)("img", {
        className: X.personalizedEmoji,
        alt: "",
        src: e
      }, "emoji-".concat(s)) : null), o ? null : a.map(e => (0, r.jsx)(b.Z, {
        disableAnimation: t,
        sticker: e,
        size: 58,
        withLoadingIndicator: false
      }, e.id))]
    }) : (0, r.jsx)("img", {
      className: X.nonPersonalizedGraphic,
      alt: "",
      src: i
    })
  })
}

function eh(e) {
  let {
    premiumType: s,
    onClose: t
  } = e;
  n.useEffect(() => x.Z.wait(() => (0, g.X8)()), []);
  let a = (0, m.e7)([C.Z], () => C.Z.useReducedMotion),
    [o, l] = (0, m.Wu)([w.Z, A.Z], () => {
      let e = w.Z.boostSlots,
        s = new Map;
      u()(e).map("premiumGuildSubscription").map("guildId").forEach(e => {
        if (null != A.Z.getGuild(e)) {
          var t;
          let r = null != (t = s.get(e)) ? t : 0;
          s.set(e, r + 1)
        }
      });
      let t = null,
        r = 0;
      return s.size > 0 && ([t, r] = Array.from(s.entries()).reduce((e, s) => s[1] > e[1] ? s : e)), [A.Z.getGuild(t), r]
    }),
    c = null != o && l > 0,
    d = ef().boostItemVisual;
  return (0, r.jsx)(ex, {
    description: s === Y.p9.TIER_1 ? Q.intl.format(Q.t["K4Hv6+"], {}) : Q.intl.format(Q.t.wRxEDQ, {}),
    onLearnMore: () => {
      t(), (0, y.openUserSettings)(O.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        section: q.oAB.GUILD_BOOSTING
      }), Z.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "boosts"
      })
    },
    renderVisual: () => c ? (0, r.jsx)("div", {
      className: X.boostCardContainer,
      children: (0, r.jsxs)("div", {
        className: X.boostCard,
        children: [(0, r.jsx)(_.Z, {
          guild: o,
          size: _.Z.Sizes.MEDIUM,
          animate: !a,
          className: X.boostCardIcon
        }), (0, r.jsxs)("div", {
          className: X.boostCardInfo,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-md/normal",
            className: i()(X.textSingleLineEllipsis, X.boostCardTitle),
            children: o.name
          }), (0, r.jsxs)("div", {
            className: X.boostCardSubtitle,
            children: [(0, r.jsx)(f.$Eu, {
              color: f.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
              className: X.boostCardGem
            }), (0, r.jsx)(f.Text, {
              variant: "text-xs/normal",
              className: i()(X.textSingleLineEllipsis, X.boostCardCount),
              children: Q.intl.format(Q.t["Ou/g/P"], {
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
let eI = () => {
  let e = ef().screenShareItemVisual;
  return (0, Chunk951288.jsx)(ex, {
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

function eE(e) {
  let {
    premiumType: s
  } = e, t = ef().uploadsMessagesItemVisual;
  return (0, r.jsx)(ex, {
    description: s === Y.p9.TIER_2 ? Q.intl.format(Q.t.GsOFRE, {}) : Q.intl.format(Q.t.wFWO6O, {}),
    onLearnMore: () => {
      window.open(z.Z.getArticleURL(q.BhN.PREMIUM_DETAILS)), Z.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "msgs_uploads"
      })
    },
    renderVisual: () => (0, r.jsx)("img", {
      alt: "",
      src: t
    })
  })
}
let e_ = Chunk647438.createContext({
    isPremiumRebrand: false
  }),
  eT = () => Chunk647438.useContext(e_).isPremiumRebrand;

function eb(e) {
  let {
    currentUser: s,
    premiumType: t,
    onClose: a,
    isDowngrade: o = false,
    isPremiumRebrand: l = false
  } = e, c = n.useMemo(() => {
    let e = [];
    switch (t) {
      case Y.p9.TIER_0:
        e.push((0, r.jsx)(eN, {
          premiumType: t
        }), (0, r.jsx)(eE, {
          premiumType: t
        }));
        break;
      case Y.p9.TIER_1:
        o ? e.push((0, r.jsx)(ej, {
          currentUser: s,
          premiumType: t,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eI, {}, "screen-share-item"), (0, r.jsx)(eh, {
          premiumType: t,
          onClose: a
        }, "boost-item")) : e.push((0, r.jsx)(ej, {
          currentUser: s,
          premiumType: t,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eN, {
          premiumType: t
        }, "emoji-stickers-item"), (0, r.jsx)(eI, {}, "screen-share-item"), (0, r.jsx)(eE, {
          premiumType: t
        }, "uploads-item"), (0, r.jsx)(eh, {
          premiumType: t,
          onClose: a
        }, "boost-item"));
        break;
      case Y.p9.TIER_2:
        o ? e.push((0, r.jsx)(ej, {
          currentUser: s,
          premiumType: t,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eh, {
          premiumType: t,
          onClose: a
        }, "boost-item"), (0, r.jsx)(eI, {}, "screen-share-item")) : e.push((0, r.jsx)(eC, {
          premiumType: t,
          onClose: a
        }, "badge-item"), (0, r.jsx)(ej, {
          currentUser: s,
          premiumType: t,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eN, {
          premiumType: t
        }, "emoji-stickers-item"), (0, r.jsx)(eh, {
          premiumType: t,
          onClose: a
        }, "boost-item"), (0, r.jsx)(eI, {}, "screen-share-item"), (0, r.jsx)(eE, {
          premiumType: t
        }, "uploads-item"))
    }
    return e
  }, [t, s, a, o]);
  return (0, r.jsx)(e_.Provider, {
    value: {
      isPremiumRebrand: l
    },
    children: (0, r.jsx)("div", {
      className: i()(X.whatYouLoseItemContainer, {
        [X.premiumRebrand]: l,
        [X.noMargin]: l && c.length <= 2
      }),
      children: c
    })
  })
}
let eM = function(e) {
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
    churnUserDiscountOffer: x = null,
    isDowngrade: g = false,
    subtitleIcon: j,
    subtitleClassName: C
  } = e, N = (0, m.e7)([S.default], () => {
    let e = S.default.getCurrentUser();
    return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e
  });
  n.useEffect(() => {
    (0, U.Z)(N.id, N.getAvatarURL(null, 80))
  }, [N]);
  let h = null != x && !p;
  return (n.useEffect(() => {
    h && Z.default.track(q.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
      location_stack: d,
      discount_id: null == x ? true : x.discount_id
    })
  }, [h, d, x]), p) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(H.Z, {
      premiumType: s,
      onClose: o
    }), (0, r.jsx)(f.hzk, {
      "data-migration-pending": true,
      className: X.body,
      children: (0, r.jsx)(f.$jN, {
        className: X.spinner
      })
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(H.Z, {
      premiumType: s,
      onClose: o
    }), (0, r.jsxs)(f.hzk, {
      "data-migration-pending": true,
      className: X.body,
      children: [(0, r.jsx)(f.X6q, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: X.title,
        children: t
      }), (0, r.jsxs)("div", {
        className: C,
        children: [j, (0, r.jsx)(f.Text, {
          variant: "text-md/normal",
          children: a
        })]
      }), (0, r.jsx)(eb, {
        currentUser: N,
        premiumType: s,
        onClose: o,
        isDowngrade: g
      })]
    }), !h && (0, r.jsx)(f.mzw, {
      "data-migration-pending": true,
      children: i
    }), h && (0, r.jsx)(W.Z, {
      churnUserDiscountOffer: x,
      onDiscountClaim: c,
      onContinue: u
    })]
  })
}