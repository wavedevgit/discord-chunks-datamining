/** Chunk was on web.js **/
/** chunk id: 807163, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eR,
  g: () => eN
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk848572 = require("./848572.js"),
  Chunk863504 = require("./863504.js"),
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
  if (null == e) throw TypeError("Cannot destructure " + e);
  return e
}

function ed(e) {
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

function ef(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function e_(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ef(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ep = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  eh = {
    boostItemVisual: Chunk652528,
    emojiStickersVisual: Chunk874692,
    screenShareItemVisual: Chunk360088,
    uploadsMessagesItemVisual: Chunk391458,
    uploadsMessagesItemVisualV2: Chunk70967,
    PL: Chunk674264,
    TR: Chunk304880
  },
  em = {
    boostItemVisual: Chunk834982,
    emojiStickersVisual: Chunk912450,
    screenShareItemVisual: Chunk360088,
    uploadsMessagesItemVisual: Chunk703548,
    uploadsMessagesItemVisualV2: Chunk869333,
    PL: Chunk674264,
    TR: Chunk304880
  };

function eg() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk780384.wj)(module) ? em : eh
}

function eE(e) {
  let {
    description: t,
    onLearnMore: n,
    renderVisual: i
  } = e, a = eC();
  return (0, r.jsxs)("div", {
    className: o()(X.whatYouLoseItem, {
      [X.premiumRebrand]: a
    }),
    children: [(0, r.jsxs)("div", {
      className: o()(X.whatYouLoseItemLeftColumn, {
        [X.premiumRebrand]: a
      }),
      children: [(0, r.jsx)(_.Text, {
        variant: "text-md/normal",
        children: t
      }), (0, r.jsx)(_.Avr, {
        onClick: n,
        text: q.intl.string(q.t.hvVgAZ)
      })]
    }), (0, r.jsx)("div", {
      className: o()(X.whatYouLoseItemRightColumn, {
        [X.premiumRebrand]: a
      }),
      children: i()
    })]
  })
}

function eb(e) {
  var t = ec({}, eu(e));
  let {
    theme: n
  } = (0, P.z)(), i = (0, _.dQu)(_.TVs.colors.INTERACTIVE_ACTIVE, n).hex();
  return (0, r.jsx)(_.SrA, e_(ed({
    size: "md"
  }, t), {
    color: i
  }))
}

function ey(e) {
  let t, {
      currentUser: n,
      premiumType: i,
      onClose: a
    } = e,
    o = (0, S.ZP)(n.id),
    s = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
    l = i === K.PremiumTypes.TIER_1,
    c = () => {
      a(), (0, w.openUserSettings)(D.n.PROFILE_PANEL, {
        section: z.oAB.PROFILE_CUSTOMIZATION
      }), k.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "user_profile_customization"
      })
    };
  return t = (null == o ? true : o.premiumType) === K.PremiumTypes.TIER_2 ? (0, r.jsxs)(R.Z, {
    user: n,
    displayProfile: o,
    forceShowPremium: true,
    themeType: null,
    className: X.profileCard,
    children: [(0, r.jsx)(N.b, {
      user: n,
      displayProfile: o,
      avatarSize: _.EFr.SIZE_56,
      avatarOffsetX: 8,
      avatarOffsetY: 2,
      bannerWidth: 172,
      bannerHeight: 60,
      themePadding: 4
    }), (0, r.jsx)(ep, {
      className: X.profileAvatar,
      src: n.getAvatarURL(true, (0, _.pxk)(_.EFr.SIZE_56), !s),
      size: _.EFr.SIZE_56,
      "aria-label": n.username
    }), (0, r.jsxs)("div", {
      className: X.profileUserInfo,
      children: [(0, r.jsx)(C.Z, {
        className: X.profileNameTag,
        usernameClass: X.profileNameTagUsername,
        name: n.toString()
      }), (0, r.jsx)(eb, {
        className: X.profilePremiumIcon
      })]
    })]
  }) : (0, r.jsxs)("div", {
    className: X.profileCardTier1,
    children: [(0, r.jsx)(ep, {
      className: X.profileAvatarTier1,
      src: n.getAvatarURL(true, (0, _.pxk)(_.EFr.SIZE_56), !s),
      size: _.EFr.SIZE_56,
      "aria-label": n.username
    }), (0, r.jsxs)("div", {
      className: X.profileUserInfoTier1,
      children: [(0, r.jsx)(C.Z, {
        className: X.profileNameTag,
        usernameClass: X.profileNameTagUsername,
        name: n.toString()
      }), (0, r.jsx)(_.SrA, {
        size: "md",
        color: "currentColor",
        className: X.profilePremiumIcon
      })]
    })]
  }), (0, r.jsx)(eE, {
    description: l ? q.intl.format(q.t.xCaYwE, {}) : q.intl.format(q.t["gpqr+n"], {}),
    onLearnMore: c,
    renderVisual: () => t
  })
}

function eO(e) {
  var t, n, i;
  let {
    currentUser: a,
    onClose: o
  } = e, s = (0, Z.Rw)(), {
    analyticsLocations: l
  } = (0, b.ZP)(E.Z.PREMIUM_UNCANCEL_MODAL), c = (0, Z.GG)(), u = null != (t = null == s ? true : s.id) ? t : K.VU.PREMIUM_TENURE_1_MONTH, d = (0, F.Z)(u);
  if (!(0, G.M5)(a, K.PremiumTypes.TIER_2) || null == c) return null;
  let f = null != (n = null == s ? true : s.status) ? n : Z.Vq.UPCOMING,
    p = null != (i = null == s ? true : s.nameUnformatted) ? i : K.vK[K.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted,
    h = (0, V.J)(u),
    m = q.intl.string(p),
    g = f === Z.Vq.EARNED,
    y = null != s && "daysLeft" in s ? s.daysLeft : 1,
    O = q.t.pwkxYF;
  if (g) {
    let e = Math.max((0, G.k)(c), 1);
    e >= 365 ? (y = Math.floor(e / 365), O = q.t["/ojPfi"]) : (y = e, O = q.t.IItWYo)
  }
  let v = () => {
    o(), (0, H.k)({
      analyticsLocations: l,
      displayProfile: null
    }), k.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
      action: "badges"
    })
  };
  return (0, r.jsx)(eE, {
    description: q.intl.format(O, {
      time: y
    }),
    onLearnMore: v,
    renderVisual: () => (0, r.jsx)(_.$1m, {
      className: X.badgeGradientWrapper,
      color: d,
      children: (0, r.jsx)("img", {
        alt: m,
        src: h,
        className: X.badgeImage
      })
    })
  })
}

function ev(e) {
  let {
    premiumType: t
  } = e, n = 3, i = (0, d.e7)([g.Z], () => g.Z.useReducedMotion), a = (0, y.wC)(null).filter(e => e.type === O.B.GUILD && (e.animated || null != e.guildId)).slice(0, n), o = (0, d.Wu)([I.Z], () => I.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, n - a.length)), s = eg().emojiStickersVisual, l = t === K.PremiumTypes.TIER_1, c = () => {
    window.open(U.Z.getArticleURL(z.BhN.PREMIUM_DETAILS)), k.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
      action: "emojis_stickers"
    })
  };
  return (0, r.jsx)(eE, {
    description: l ? q.intl.format(q.t.couiKJ, {}) : q.intl.format(q.t["0hUHi6"], {}),
    onLearnMore: c,
    renderVisual: () => null != a && a.length > 0 || !l && null != o && o.length > 0 ? (0, r.jsxs)("div", {
      className: X.emojiStickersPersonalizedContainer,
      children: [a.map(e => null == e.id ? e.url : j.ZP.getEmojiURL({
        id: e.id,
        animated: !i && e.animated,
        size: 58
      })).map((e, t) => null != e ? (0, r.jsx)("img", {
        className: X.personalizedEmoji,
        alt: "",
        src: e
      }, "emoji-".concat(t)) : null), l ? null : o.map(e => (0, r.jsx)(T.Z, {
        disableAnimation: i,
        sticker: e,
        size: 58,
        withLoadingIndicator: false
      }, e.id))]
    }) : (0, r.jsx)("img", {
      className: X.nonPersonalizedGraphic,
      alt: "",
      src: s
    })
  })
}

function eI(e) {
  let {
    premiumType: t,
    onClose: n
  } = e;
  i.useEffect(() => p.Z.wait(() => (0, h.X8)()), []);
  let a = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
    [s, l] = (0, d.Wu)([M.Z, L.Z], () => {
      let e = M.Z.boostSlots,
        t = new Map;
      u()(e).map("premiumGuildSubscription").map("guildId").forEach(e => {
        if (null != L.Z.getGuild(e)) {
          var n;
          let r = null != (n = t.get(e)) ? n : 0;
          t.set(e, r + 1)
        }
      });
      let n = null,
        r = 0;
      return t.size > 0 && ([n, r] = Array.from(t.entries()).reduce((e, t) => t[1] > e[1] ? t : e)), [L.Z.getGuild(n), r]
    }),
    c = null != s && l > 0,
    f = eg().boostItemVisual,
    m = () => {
      n(), (0, w.openUserSettings)(D.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        section: z.oAB.GUILD_BOOSTING
      }), k.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "boosts"
      })
    };
  return (0, r.jsx)(eE, {
    description: t === K.PremiumTypes.TIER_1 ? q.intl.format(q.t.K4Hv69, {}) : q.intl.format(q.t.wRxEDW, {}),
    onLearnMore: m,
    renderVisual: () => c ? (0, r.jsx)("div", {
      className: X.boostCardContainer,
      children: (0, r.jsxs)("div", {
        className: X.boostCard,
        children: [(0, r.jsx)(v.Z, {
          guild: s,
          size: v.Z.Sizes.MEDIUM,
          animate: !a,
          className: X.boostCardIcon
        }), (0, r.jsxs)("div", {
          className: X.boostCardInfo,
          children: [(0, r.jsx)(_.Text, {
            variant: "text-md/normal",
            className: o()(X.textSingleLineEllipsis, X.boostCardTitle),
            children: s.name
          }), (0, r.jsxs)("div", {
            className: X.boostCardSubtitle,
            children: [(0, r.jsx)(_.Ucv, {
              color: _.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
              className: X.boostCardGem
            }), (0, r.jsx)(_.Text, {
              variant: "text-xs/normal",
              className: o()(X.textSingleLineEllipsis, X.boostCardCount),
              children: q.intl.format(q.t["Ou/g/P"], {
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
let eT = () => {
  let e = eg().screenShareItemVisual,
    t = () => {
      window.open(Chunk63063.Z.getArticleURL(Chunk981631.BhN.STREAM_QUALITY_SETTINGS)), Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "screen_share"
      })
    };
  return (0, Chunk54381.jsx)(eE, {
    description: Chunk388032.intl.format(Chunk388032.t.wK04T1, {}),
    onLearnMore: exports,
    renderVisual: () => (0, Chunk54381.jsx)("img", {
      alt: "",
      src: module
    })
  })
};

function eS(e) {
  let {
    premiumType: t
  } = e, n = eg().uploadsMessagesItemVisual, i = () => {
    window.open(U.Z.getArticleURL(z.BhN.PREMIUM_DETAILS)), k.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
      action: "msgs_uploads"
    })
  };
  return (0, r.jsx)(eE, {
    description: t === K.PremiumTypes.TIER_2 ? q.intl.format(q.t.GsOFRJ, {}) : q.intl.format(q.t.wFWO6D, {}),
    onLearnMore: i,
    renderVisual: () => (0, r.jsx)("img", {
      alt: "",
      src: n
    })
  })
}
let eA = Chunk473749.createContext({
    isPremiumRebrand: false
  }),
  eC = () => Chunk473749.useContext(eA).isPremiumRebrand;

function eN(e) {
  let {
    currentUser: t,
    premiumType: n,
    onClose: a,
    isDowngrade: s = false,
    isPremiumRebrand: l = false
  } = e, c = i.useMemo(() => {
    let e = [];
    switch (n) {
      case K.PremiumTypes.TIER_0:
        e.push((0, r.jsx)(ev, {
          premiumType: n
        }), (0, r.jsx)(eS, {
          premiumType: n
        }));
        break;
      case K.PremiumTypes.TIER_1:
        s ? e.push((0, r.jsx)(ey, {
          currentUser: t,
          premiumType: n,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eT, {}, "screen-share-item"), (0, r.jsx)(eI, {
          premiumType: n,
          onClose: a
        }, "boost-item")) : e.push((0, r.jsx)(ey, {
          currentUser: t,
          premiumType: n,
          onClose: a
        }, "profile-item"), (0, r.jsx)(ev, {
          premiumType: n
        }, "emoji-stickers-item"), (0, r.jsx)(eT, {}, "screen-share-item"), (0, r.jsx)(eS, {
          premiumType: n
        }, "uploads-item"), (0, r.jsx)(eI, {
          premiumType: n,
          onClose: a
        }, "boost-item"));
        break;
      case K.PremiumTypes.TIER_2:
        s ? e.push((0, r.jsx)(ey, {
          currentUser: t,
          premiumType: n,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eI, {
          premiumType: n,
          onClose: a
        }, "boost-item"), (0, r.jsx)(eT, {}, "screen-share-item")) : e.push((0, r.jsx)(eO, {
          currentUser: t,
          onClose: a
        }, "badge-item"), (0, r.jsx)(ey, {
          currentUser: t,
          premiumType: n,
          onClose: a
        }, "profile-item"), (0, r.jsx)(ev, {
          premiumType: n
        }, "emoji-stickers-item"), (0, r.jsx)(eI, {
          premiumType: n,
          onClose: a
        }, "boost-item"), (0, r.jsx)(eT, {}, "screen-share-item"), (0, r.jsx)(eS, {
          premiumType: n
        }, "uploads-item"))
    }
    return e
  }, [n, t, a, s]);
  return (0, r.jsx)(eA.Provider, {
    value: {
      isPremiumRebrand: l
    },
    children: (0, r.jsx)("div", {
      className: o()(X.whatYouLoseItemContainer, {
        [X.premiumRebrand]: l,
        [X.noMargin]: l && c.length <= 2
      }),
      children: c
    })
  })
}
let eR = function(e) {
  let {
    premiumType: t,
    titleText: n,
    subtitleText: a,
    footer: o,
    onClose: s,
    onDiscountClaim: c,
    onContinue: u,
    analyticsLocations: f,
    isLoading: p = false,
    churnUserDiscountOffer: h = null,
    isDowngrade: m = false,
    subtitleIcon: g,
    subtitleClassName: E
  } = e, b = (0, d.e7)([x.default], () => {
    let e = x.default.getCurrentUser();
    return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e
  });
  i.useEffect(() => {
    (0, A.Z)(b.id, b.getAvatarURL(null, 80))
  }, [b]);
  let y = null != h && !p;
  return (i.useEffect(() => {
    y && k.default.track(z.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
      location_stack: f,
      discount_id: null == h ? true : h.discount_id
    })
  }, [y, f, h]), p) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(Y.Z, {
      premiumType: t,
      onClose: s
    }), (0, r.jsx)(_.hzk, {
      "data-migration-pending": true,
      className: X.body,
      children: (0, r.jsx)(_.$jN, {
        className: X.spinner
      })
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(Y.Z, {
      premiumType: t,
      onClose: s
    }), (0, r.jsxs)(_.hzk, {
      "data-migration-pending": true,
      className: X.body,
      children: [(0, r.jsx)(_.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: X.title,
        children: n
      }), (0, r.jsxs)("div", {
        className: E,
        children: [g, (0, r.jsx)(_.Text, {
          variant: "text-md/normal",
          children: a
        })]
      }), (0, r.jsx)(eN, {
        currentUser: b,
        premiumType: t,
        onClose: s,
        isDowngrade: m
      })]
    }), !y && (0, r.jsx)(_.mzw, {
      "data-migration-pending": true,
      children: o
    }), y && (0, r.jsx)(W.Z, {
      churnUserDiscountOffer: h,
      onDiscountClaim: c,
      onContinue: u
    })]
  })
}