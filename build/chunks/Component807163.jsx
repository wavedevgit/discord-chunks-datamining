/** Chunk was on 17938 **/
/** chunk id: 807163, original params: e,s,t (module,exports,require) **/
require.d(exports, {
  Z: () => eb,
  g: () => e_
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
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
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

function el() {
  return (el = Object.assign || function(e) {
    for (var s = 1; s < arguments.length; s++) {
      var t = arguments[s];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
    }
    return e
  }).apply(this, arguments)
}
let ec = {
    [Chunk474936.VU.PREMIUM_TENURE_1_MONTH]: Chunk819019.badgeGradientBronze,
    [Chunk474936.VU.PREMIUM_TENURE_3_MONTH]: Chunk819019.badgeGradientSilver,
    [Chunk474936.VU.PREMIUM_TENURE_6_MONTH]: Chunk819019.badgeGradientGold,
    [Chunk474936.VU.PREMIUM_TENURE_12_MONTH]: Chunk819019.badgeGradientPlatinum,
    [Chunk474936.VU.PREMIUM_TENURE_24_MONTH]: Chunk819019.badgeGradientDiamond,
    [Chunk474936.VU.PREMIUM_TENURE_36_MONTH]: Chunk819019.badgeGradientEmerald,
    [Chunk474936.VU.PREMIUM_TENURE_60_MONTH]: Chunk819019.badgeGradientRuby,
    [Chunk474936.VU.PREMIUM_TENURE_72_MONTH]: Chunk819019.badgeGradientOpal
  },
  eu = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  em = {
    boostItemVisual: Chunk652528,
    emojiStickersVisual: Chunk874692,
    screenShareItemVisual: Chunk360088,
    uploadsMessagesItemVisual: Chunk391458,
    uploadsMessagesItemVisualV2: Chunk70967,
    PL: Chunk674264,
    TR: Chunk304880
  },
  ed = {
    boostItemVisual: Chunk834982,
    emojiStickersVisual: Chunk912450,
    screenShareItemVisual: Chunk360088,
    uploadsMessagesItemVisual: Chunk703548,
    uploadsMessagesItemVisualV2: Chunk869333,
    PL: Chunk674264,
    TR: Chunk304880
  };

function ep() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk780384.wj)(module) ? ed : em
}

function ef(e) {
  let {
    description: s,
    onLearnMore: t,
    renderVisual: n
  } = e, a = eT();
  return (0, r.jsxs)("div", {
    className: i()(J.whatYouLoseItem, {
      [J.premiumRebrand]: a
    }),
    children: [(0, r.jsxs)("div", {
      className: i()(J.whatYouLoseItemLeftColumn, {
        [J.premiumRebrand]: a
      }),
      children: [(0, r.jsx)(p.Text, {
        variant: "text-md/normal",
        children: s
      }), (0, r.jsx)(p.Avr, {
        onClick: t,
        text: q.intl.string(q.t.hvVgAZ)
      })]
    }), (0, r.jsx)("div", {
      className: i()(J.whatYouLoseItemRightColumn, {
        [J.premiumRebrand]: a
      }),
      children: n()
    })]
  })
}

function ex(e) {
  var s, t, n = el({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  let {
    theme: a
  } = (0, R.z)(), i = (0, p.dQu)(p.TVs.colors.INTERACTIVE_ACTIVE, a).hex();
  return (0, r.jsx)(p.SrA, (s = function(e) {
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

function eg(e) {
  let s, {
      currentUser: t,
      premiumType: n,
      onClose: a
    } = e,
    i = (0, b.ZP)(t.id),
    o = (0, m.e7)([j.Z], () => j.Z.useReducedMotion),
    l = n === H.PremiumTypes.TIER_1;
  return s = (null == i ? true : i.premiumType) === H.PremiumTypes.TIER_2 ? (0, r.jsxs)(P.Z, {
    user: t,
    displayProfile: i,
    forceShowPremium: true,
    themeType: null,
    className: J.profileCard,
    children: [(0, r.jsx)(v.b, {
      user: t,
      displayProfile: i,
      avatarSize: p.EFr.SIZE_56,
      avatarOffsetX: 8,
      avatarOffsetY: 2,
      bannerWidth: 172,
      bannerHeight: 60,
      themePadding: 4
    }), (0, r.jsx)(eu, {
      className: J.profileAvatar,
      src: t.getAvatarURL(true, (0, p.pxk)(p.EFr.SIZE_56), !o),
      size: p.EFr.SIZE_56,
      "aria-label": t.username
    }), (0, r.jsxs)("div", {
      className: J.profileUserInfo,
      children: [(0, r.jsx)(U.Z, {
        className: J.profileNameTag,
        usernameClass: J.profileNameTagUsername,
        name: t.toString()
      }), (0, r.jsx)(ex, {
        className: J.profilePremiumIcon
      })]
    })]
  }) : (0, r.jsxs)("div", {
    className: J.profileCardTier1,
    children: [(0, r.jsx)(eu, {
      className: J.profileAvatarTier1,
      src: t.getAvatarURL(true, (0, p.pxk)(p.EFr.SIZE_56), !o),
      size: p.EFr.SIZE_56,
      "aria-label": t.username
    }), (0, r.jsxs)("div", {
      className: J.profileUserInfoTier1,
      children: [(0, r.jsx)(U.Z, {
        className: J.profileNameTag,
        usernameClass: J.profileNameTagUsername,
        name: t.toString()
      }), (0, r.jsx)(p.SrA, {
        size: "md",
        color: "currentColor",
        className: J.profilePremiumIcon
      })]
    })]
  }), (0, r.jsx)(ef, {
    description: l ? q.intl.format(q.t.xCaYwE, {}) : q.intl.format(q.t["gpqr+n"], {}),
    onLearnMore: () => {
      a(), (0, O.openUserSettings)(y.n.PROFILE_PANEL, {
        section: Y.oAB.PROFILE_CUSTOMIZATION
      }), Z.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "user_profile_customization"
      })
    },
    renderVisual: () => s
  })
}

function ej(e) {
  var s, t, n, a;
  let {
    currentUser: o,
    onClose: l
  } = e, c = (0, D.C)(o, "BadgeItem"), u = (0, G.Rw)(), {
    analyticsLocations: m
  } = (0, N.ZP)(C.Z.PREMIUM_UNCANCEL_MODAL), d = (0, G.GG)();
  if (!c || null == d) return null;
  let f = null != (s = null == u ? true : u.id) ? s : H.VU.PREMIUM_TENURE_1_MONTH,
    x = null != (t = null == u ? true : u.status) ? t : G.Vq.UPCOMING,
    g = null != (n = null == u ? true : u.nameUnformatted) ? n : H.vK[H.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted,
    j = (0, z.J)(f),
    h = q.intl.string(g),
    E = x === G.Vq.EARNED,
    I = null != u && "daysLeft" in u ? u.daysLeft : 1,
    T = q.t.pwkxYF;
  if (E) {
    let e = Math.max((0, k.k)(d), 1);
    e >= 365 ? (I = Math.floor(e / 365), T = q.t["/ojPfi"]) : (I = e, T = q.t.IItWYo)
  }
  let _ = null != (a = ec[f]) ? a : J.badgeGradientBronze;
  return (0, r.jsx)(ef, {
    description: q.intl.format(T, {
      time: I
    }),
    onLearnMore: () => {
      l(), (0, B.k)({
        analyticsLocations: m,
        displayProfile: null
      }), Z.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "badges"
      })
    },
    renderVisual: () => (0, r.jsxs)(p.$1m, {
      className: i()(J.badgeGradientWrapper, _),
      children: [(0, r.jsx)("img", {
        alt: "",
        src: j,
        className: i()(J.badgeImage, J.blurredBadgeImage)
      }), (0, r.jsx)("img", {
        alt: h,
        src: j,
        className: J.badgeImage
      })]
    })
  })
}

function eC(e) {
  let {
    premiumType: s
  } = e, t = (0, m.e7)([j.Z], () => j.Z.useReducedMotion), n = (0, h.wC)(null).filter(e => e.type === E.B.GUILD && (e.animated || null != e.guildId)).slice(0, 3), a = (0, m.Wu)([T.Z], () => T.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)), i = ep().emojiStickersVisual, o = s === H.PremiumTypes.TIER_1;
  return (0, r.jsx)(ef, {
    description: o ? q.intl.format(q.t.couiKJ, {}) : q.intl.format(q.t["0hUHi6"], {}),
    onLearnMore: () => {
      window.open(V.Z.getArticleURL(Y.BhN.PREMIUM_DETAILS)), Z.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "emojis_stickers"
      })
    },
    renderVisual: () => null != n && n.length > 0 || !o && null != a && a.length > 0 ? (0, r.jsxs)("div", {
      className: J.emojiStickersPersonalizedContainer,
      children: [n.map(e => null == e.id ? e.url : w.ZP.getEmojiURL({
        id: e.id,
        animated: !t && e.animated,
        size: 58
      })).map((e, s) => null != e ? (0, r.jsx)("img", {
        className: J.personalizedEmoji,
        alt: "",
        src: e
      }, "emoji-".concat(s)) : null), o ? null : a.map(e => (0, r.jsx)(_.Z, {
        disableAnimation: t,
        sticker: e,
        size: 58,
        withLoadingIndicator: false
      }, e.id))]
    }) : (0, r.jsx)("img", {
      className: J.nonPersonalizedGraphic,
      alt: "",
      src: i
    })
  })
}

function eN(e) {
  let {
    premiumType: s,
    onClose: t
  } = e;
  n.useEffect(() => f.Z.wait(() => (0, x.X8)()), []);
  let a = (0, m.e7)([j.Z], () => j.Z.useReducedMotion),
    [o, l] = (0, m.Wu)([S.Z, L.Z], () => {
      let e = S.Z.boostSlots,
        s = new Map;
      u()(e).map("premiumGuildSubscription").map("guildId").forEach(e => {
        if (null != L.Z.getGuild(e)) {
          var t;
          let r = null != (t = s.get(e)) ? t : 0;
          s.set(e, r + 1)
        }
      });
      let t = null,
        r = 0;
      return s.size > 0 && ([t, r] = Array.from(s.entries()).reduce((e, s) => s[1] > e[1] ? s : e)), [L.Z.getGuild(t), r]
    }),
    c = null != o && l > 0,
    d = ep().boostItemVisual;
  return (0, r.jsx)(ef, {
    description: s === H.PremiumTypes.TIER_1 ? q.intl.format(q.t.K4Hv69, {}) : q.intl.format(q.t.wRxEDW, {}),
    onLearnMore: () => {
      t(), (0, O.openUserSettings)(y.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        section: Y.oAB.GUILD_BOOSTING
      }), Z.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "boosts"
      })
    },
    renderVisual: () => c ? (0, r.jsx)("div", {
      className: J.boostCardContainer,
      children: (0, r.jsxs)("div", {
        className: J.boostCard,
        children: [(0, r.jsx)(I.Z, {
          guild: o,
          size: I.Z.Sizes.MEDIUM,
          animate: !a,
          className: J.boostCardIcon
        }), (0, r.jsxs)("div", {
          className: J.boostCardInfo,
          children: [(0, r.jsx)(p.Text, {
            variant: "text-md/normal",
            className: i()(J.textSingleLineEllipsis, J.boostCardTitle),
            children: o.name
          }), (0, r.jsxs)("div", {
            className: J.boostCardSubtitle,
            children: [(0, r.jsx)(p.Ucv, {
              color: p.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
              className: J.boostCardGem
            }), (0, r.jsx)(p.Text, {
              variant: "text-xs/normal",
              className: i()(J.textSingleLineEllipsis, J.boostCardCount),
              children: q.intl.format(q.t["Ou/g/P"], {
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
let eh = () => {
  let e = ep().screenShareItemVisual;
  return (0, Chunk951288.jsx)(ef, {
    description: Chunk388032.intl.format(Chunk388032.t.wK04T1, {}),
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
  } = e, t = ep().uploadsMessagesItemVisual;
  return (0, r.jsx)(ef, {
    description: s === H.PremiumTypes.TIER_2 ? q.intl.format(q.t.GsOFRJ, {}) : q.intl.format(q.t.wFWO6D, {}),
    onLearnMore: () => {
      window.open(V.Z.getArticleURL(Y.BhN.PREMIUM_DETAILS)), Z.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "msgs_uploads"
      })
    },
    renderVisual: () => (0, r.jsx)("img", {
      alt: "",
      src: t
    })
  })
}
let eI = Chunk647438.createContext({
    isPremiumRebrand: false
  }),
  eT = () => Chunk647438.useContext(eI).isPremiumRebrand;

function e_(e) {
  let {
    currentUser: s,
    premiumType: t,
    onClose: a,
    isDowngrade: o = false,
    isPremiumRebrand: l = false
  } = e, c = n.useMemo(() => {
    let e = [];
    switch (t) {
      case H.PremiumTypes.TIER_0:
        e.push((0, r.jsx)(eC, {
          premiumType: t
        }), (0, r.jsx)(eE, {
          premiumType: t
        }));
        break;
      case H.PremiumTypes.TIER_1:
        o ? e.push((0, r.jsx)(eg, {
          currentUser: s,
          premiumType: t,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eh, {}, "screen-share-item"), (0, r.jsx)(eN, {
          premiumType: t,
          onClose: a
        }, "boost-item")) : e.push((0, r.jsx)(eg, {
          currentUser: s,
          premiumType: t,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eC, {
          premiumType: t
        }, "emoji-stickers-item"), (0, r.jsx)(eh, {}, "screen-share-item"), (0, r.jsx)(eE, {
          premiumType: t
        }, "uploads-item"), (0, r.jsx)(eN, {
          premiumType: t,
          onClose: a
        }, "boost-item"));
        break;
      case H.PremiumTypes.TIER_2:
        o ? e.push((0, r.jsx)(eg, {
          currentUser: s,
          premiumType: t,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eN, {
          premiumType: t,
          onClose: a
        }, "boost-item"), (0, r.jsx)(eh, {}, "screen-share-item")) : e.push((0, r.jsx)(ej, {
          currentUser: s,
          onClose: a
        }, "badge-item"), (0, r.jsx)(eg, {
          currentUser: s,
          premiumType: t,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eC, {
          premiumType: t
        }, "emoji-stickers-item"), (0, r.jsx)(eN, {
          premiumType: t,
          onClose: a
        }, "boost-item"), (0, r.jsx)(eh, {}, "screen-share-item"), (0, r.jsx)(eE, {
          premiumType: t
        }, "uploads-item"))
    }
    return e
  }, [t, s, a, o]);
  return (0, r.jsx)(eI.Provider, {
    value: {
      isPremiumRebrand: l
    },
    children: (0, r.jsx)("div", {
      className: i()(J.whatYouLoseItemContainer, {
        [J.premiumRebrand]: l,
        [J.noMargin]: l && c.length <= 2
      }),
      children: c
    })
  })
}
let eb = function(e) {
  let {
    premiumType: s,
    titleText: t,
    subtitleText: a,
    footer: i,
    onClose: o,
    onDiscountClaim: c,
    onContinue: u,
    analyticsLocations: d,
    isLoading: f = false,
    churnUserDiscountOffer: x = null,
    isDowngrade: g = false,
    subtitleIcon: j,
    subtitleClassName: C
  } = e, N = (0, m.e7)([A.default], () => {
    let e = A.default.getCurrentUser();
    return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e
  });
  n.useEffect(() => {
    (0, M.Z)(N.id, N.getAvatarURL(null, 80))
  }, [N]);
  let h = null != x && !f;
  return (n.useEffect(() => {
    h && Z.default.track(Y.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
      location_stack: d,
      discount_id: null == x ? true : x.discount_id
    })
  }, [h, d, x]), f) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(W.Z, {
      premiumType: s,
      onClose: o
    }), (0, r.jsx)(p.hzk, {
      "data-migration-pending": true,
      className: J.body,
      children: (0, r.jsx)(p.$jN, {
        className: J.spinner
      })
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(W.Z, {
      premiumType: s,
      onClose: o
    }), (0, r.jsxs)(p.hzk, {
      "data-migration-pending": true,
      className: J.body,
      children: [(0, r.jsx)(p.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: J.title,
        children: t
      }), (0, r.jsxs)("div", {
        className: C,
        children: [j, (0, r.jsx)(p.Text, {
          variant: "text-md/normal",
          children: a
        })]
      }), (0, r.jsx)(e_, {
        currentUser: N,
        premiumType: s,
        onClose: o,
        isDowngrade: g
      })]
    }), !h && (0, r.jsx)(p.mzw, {
      "data-migration-pending": true,
      children: i
    }), h && (0, r.jsx)(K.Z, {
      churnUserDiscountOffer: x,
      onDiscountClaim: c,
      onContinue: u
    })]
  })
}