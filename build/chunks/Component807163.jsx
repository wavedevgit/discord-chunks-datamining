/** Chunk was on web.js **/
/** chunk id: 807163, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eP,
  g: () => eN
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function ep(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ef(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let e_ = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  em = {
    boostItemVisual: Chunk652528,
    emojiStickersVisual: Chunk874692,
    screenShareItemVisual: Chunk360088,
    uploadsMessagesItemVisual: Chunk391458,
    uploadsMessagesItemVisualV2: Chunk70967,
    PL: Chunk674264,
    TR: Chunk304880
  },
  eh = {
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
  return (0, Chunk780384.wj)(module) ? eh : em
}

function eE(e) {
  let {
    description: t,
    onLearnMore: n,
    renderVisual: i
  } = e, o = eA();
  return (0, r.jsxs)("div", {
    className: a()(Q.whatYouLoseItem, {
      [Q.premiumRebrand]: o
    }),
    children: [(0, r.jsxs)("div", {
      className: a()(Q.whatYouLoseItemLeftColumn, {
        [Q.premiumRebrand]: o
      }),
      children: [(0, r.jsx)(p.Text, {
        variant: "text-md/normal",
        children: t
      }), (0, r.jsx)(p.Avr, {
        onClick: n,
        text: q.intl.string(q.t.hvVgAZ)
      })]
    }), (0, r.jsx)("div", {
      className: a()(Q.whatYouLoseItemRightColumn, {
        [Q.premiumRebrand]: o
      }),
      children: i()
    })]
  })
}

function eb(e) {
  var t = ec({}, eu(e));
  let {
    theme: n
  } = (0, R.z)(), i = (0, p.dQu)(p.TVs.colors.INTERACTIVE_TEXT_ACTIVE, n).hex();
  return (0, r.jsx)(p.SrA, ep(ed({
    size: "md"
  }, t), {
    color: i
  }))
}

function ey(e) {
  let t, {
      currentUser: n,
      premiumType: i,
      onClose: o
    } = e,
    a = (0, T.ZP)(n.id),
    s = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
    l = i === K.PremiumTypes.TIER_1,
    c = () => {
      o(), (0, D.openUserSettings)(w.n.PROFILE_PANEL, {
        section: z.oAB.PROFILE_CUSTOMIZATION
      }), M.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "user_profile_customization"
      })
    };
  return t = (null == a ? true : a.premiumType) === K.PremiumTypes.TIER_2 ? (0, r.jsxs)(P.Z, {
    user: n,
    displayProfile: a,
    forceShowPremium: true,
    themeType: null,
    className: Q.profileCard,
    children: [(0, r.jsx)(N.b, {
      user: n,
      displayProfile: a,
      avatarSize: p.EFr.SIZE_56,
      avatarOffsetX: 8,
      avatarOffsetY: 2,
      bannerWidth: 172,
      bannerHeight: 60,
      themePadding: 4
    }), (0, r.jsx)(e_, {
      className: Q.profileAvatar,
      src: n.getAvatarURL(true, (0, p.dcp)(p.EFr.SIZE_56), !s),
      size: p.EFr.SIZE_56,
      "aria-label": n.username
    }), (0, r.jsxs)("div", {
      className: Q.profileUserInfo,
      children: [(0, r.jsx)(A.Z, {
        className: Q.profileNameTag,
        usernameClass: Q.profileNameTagUsername,
        name: n.toString()
      }), (0, r.jsx)(eb, {
        className: Q.profilePremiumIcon
      })]
    })]
  }) : (0, r.jsxs)("div", {
    className: Q.profileCardTier1,
    children: [(0, r.jsx)(e_, {
      className: Q.profileAvatarTier1,
      src: n.getAvatarURL(true, (0, p.dcp)(p.EFr.SIZE_56), !s),
      size: p.EFr.SIZE_56,
      "aria-label": n.username
    }), (0, r.jsxs)("div", {
      className: Q.profileUserInfoTier1,
      children: [(0, r.jsx)(A.Z, {
        className: Q.profileNameTag,
        usernameClass: Q.profileNameTagUsername,
        name: n.toString()
      }), (0, r.jsx)(p.SrA, {
        size: "md",
        color: "currentColor",
        className: Q.profilePremiumIcon
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
    currentUser: o,
    onClose: a
  } = e, s = (0, F.Rw)(), {
    analyticsLocations: l
  } = (0, b.ZP)(E.Z.PREMIUM_UNCANCEL_MODAL), c = (0, F.GG)(), u = null != (t = null == s ? true : s.id) ? t : K.VU.PREMIUM_TENURE_1_MONTH, d = (0, B.Z)(u);
  if (!(0, G.M5)(o, K.PremiumTypes.TIER_2) || null == c) return null;
  let f = null != (n = null == s ? true : s.status) ? n : F.Vq.UPCOMING,
    _ = null != (i = null == s ? true : s.nameUnformatted) ? i : K.vK[K.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted,
    m = (0, V.J)(u),
    h = q.intl.string(_),
    g = f === F.Vq.EARNED,
    y = null != s && "daysLeft" in s ? s.daysLeft : 1,
    O = q.t.pwkxYF;
  if (g) {
    let e = Math.max((0, G.k)(c), 1);
    e >= 365 ? (y = Math.floor(e / 365), O = q.t["/ojPfi"]) : (y = e, O = q.t.IItWYo)
  }
  let v = () => {
    a(), (0, H.k)({
      analyticsLocations: l,
      displayProfile: null
    }), M.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
      action: "badges"
    })
  };
  return (0, r.jsx)(eE, {
    description: q.intl.format(O, {
      time: y
    }),
    onLearnMore: v,
    renderVisual: () => (0, r.jsx)(p.$1m, {
      className: Q.badgeGradientWrapper,
      color: d,
      children: (0, r.jsx)("img", {
        alt: h,
        src: m,
        className: Q.badgeImage
      })
    })
  })
}

function ev(e) {
  let {
    premiumType: t
  } = e, n = 3, i = (0, d.e7)([g.Z], () => g.Z.useReducedMotion), o = (0, y.wC)(null).filter(e => e.type === O.B.GUILD && (e.animated || null != e.guildId)).slice(0, n), a = (0, d.Wu)([S.Z], () => S.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, n - o.length)), s = eg().emojiStickersVisual, l = t === K.PremiumTypes.TIER_1, c = () => {
    window.open(U.Z.getArticleURL(z.BhN.PREMIUM_DETAILS)), M.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
      action: "emojis_stickers"
    })
  };
  return (0, r.jsx)(eE, {
    description: l ? q.intl.format(q.t.couiKJ, {}) : q.intl.format(q.t["0hUHi6"], {}),
    onLearnMore: c,
    renderVisual: () => null != o && o.length > 0 || !l && null != a && a.length > 0 ? (0, r.jsxs)("div", {
      className: Q.emojiStickersPersonalizedContainer,
      children: [o.map(e => null == e.id ? e.url : k.ZP.getEmojiURL({
        id: e.id,
        animated: !i && e.animated,
        size: 58
      })).map((e, t) => null != e ? (0, r.jsx)("img", {
        className: Q.personalizedEmoji,
        alt: "",
        src: e
      }, "emoji-".concat(t)) : null), l ? null : a.map(e => (0, r.jsx)(I.Z, {
        disableAnimation: i,
        sticker: e,
        size: 58,
        withLoadingIndicator: false
      }, e.id))]
    }) : (0, r.jsx)("img", {
      className: Q.nonPersonalizedGraphic,
      alt: "",
      src: s
    })
  })
}

function eS(e) {
  let {
    premiumType: t,
    onClose: n
  } = e;
  i.useEffect(() => _.Z.wait(() => (0, m.X8)()), []);
  let o = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
    [s, l] = (0, d.Wu)([j.Z, x.Z], () => {
      let e = j.Z.boostSlots,
        t = new Map;
      u()(e).map("premiumGuildSubscription").map("guildId").forEach(e => {
        if (null != x.Z.getGuild(e)) {
          var n;
          let r = null != (n = t.get(e)) ? n : 0;
          t.set(e, r + 1)
        }
      });
      let n = null,
        r = 0;
      return t.size > 0 && ([n, r] = Array.from(t.entries()).reduce((e, t) => t[1] > e[1] ? t : e)), [x.Z.getGuild(n), r]
    }),
    c = null != s && l > 0,
    f = eg().boostItemVisual,
    h = () => {
      n(), (0, D.openUserSettings)(w.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        section: z.oAB.GUILD_BOOSTING
      }), M.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "boosts"
      })
    };
  return (0, r.jsx)(eE, {
    description: t === K.PremiumTypes.TIER_1 ? q.intl.format(q.t.K4Hv69, {}) : q.intl.format(q.t.wRxEDW, {}),
    onLearnMore: h,
    renderVisual: () => c ? (0, r.jsx)("div", {
      className: Q.boostCardContainer,
      children: (0, r.jsxs)("div", {
        className: Q.boostCard,
        children: [(0, r.jsx)(v.Z, {
          guild: s,
          size: v.Z.Sizes.MEDIUM,
          animate: !o,
          className: Q.boostCardIcon
        }), (0, r.jsxs)("div", {
          className: Q.boostCardInfo,
          children: [(0, r.jsx)(p.Text, {
            variant: "text-md/normal",
            className: a()(Q.textSingleLineEllipsis, Q.boostCardTitle),
            children: s.name
          }), (0, r.jsxs)("div", {
            className: Q.boostCardSubtitle,
            children: [(0, r.jsx)(p.Ucv, {
              color: p.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
              className: Q.boostCardGem
            }), (0, r.jsx)(p.Text, {
              variant: "text-xs/normal",
              className: a()(Q.textSingleLineEllipsis, Q.boostCardCount),
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
let eI = () => {
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

function eT(e) {
  let {
    premiumType: t
  } = e, n = eg().uploadsMessagesItemVisual, i = () => {
    window.open(U.Z.getArticleURL(z.BhN.PREMIUM_DETAILS)), M.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
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
let eC = Chunk473749.createContext({
    isPremiumRebrand: false
  }),
  eA = () => Chunk473749.useContext(eC).isPremiumRebrand;

function eN(e) {
  let {
    currentUser: t,
    premiumType: n,
    onClose: o,
    isDowngrade: s = false,
    isPremiumRebrand: l = false
  } = e, c = i.useMemo(() => {
    let e = [];
    switch (n) {
      case K.PremiumTypes.TIER_0:
        e.push((0, r.jsx)(ev, {
          premiumType: n
        }), (0, r.jsx)(eT, {
          premiumType: n
        }));
        break;
      case K.PremiumTypes.TIER_1:
        s ? e.push((0, r.jsx)(ey, {
          currentUser: t,
          premiumType: n,
          onClose: o
        }, "profile-item"), (0, r.jsx)(eI, {}, "screen-share-item"), (0, r.jsx)(eS, {
          premiumType: n,
          onClose: o
        }, "boost-item")) : e.push((0, r.jsx)(ey, {
          currentUser: t,
          premiumType: n,
          onClose: o
        }, "profile-item"), (0, r.jsx)(ev, {
          premiumType: n
        }, "emoji-stickers-item"), (0, r.jsx)(eI, {}, "screen-share-item"), (0, r.jsx)(eT, {
          premiumType: n
        }, "uploads-item"), (0, r.jsx)(eS, {
          premiumType: n,
          onClose: o
        }, "boost-item"));
        break;
      case K.PremiumTypes.TIER_2:
        s ? e.push((0, r.jsx)(ey, {
          currentUser: t,
          premiumType: n,
          onClose: o
        }, "profile-item"), (0, r.jsx)(eS, {
          premiumType: n,
          onClose: o
        }, "boost-item"), (0, r.jsx)(eI, {}, "screen-share-item")) : e.push((0, r.jsx)(eO, {
          currentUser: t,
          onClose: o
        }, "badge-item"), (0, r.jsx)(ey, {
          currentUser: t,
          premiumType: n,
          onClose: o
        }, "profile-item"), (0, r.jsx)(ev, {
          premiumType: n
        }, "emoji-stickers-item"), (0, r.jsx)(eS, {
          premiumType: n,
          onClose: o
        }, "boost-item"), (0, r.jsx)(eI, {}, "screen-share-item"), (0, r.jsx)(eT, {
          premiumType: n
        }, "uploads-item"))
    }
    return e
  }, [n, t, o, s]);
  return (0, r.jsx)(eC.Provider, {
    value: {
      isPremiumRebrand: l
    },
    children: (0, r.jsx)("div", {
      className: a()(Q.whatYouLoseItemContainer, {
        [Q.premiumRebrand]: l,
        [Q.noMargin]: l && c.length <= 2
      }),
      children: c
    })
  })
}
let eP = function(e) {
  let {
    premiumType: t,
    titleText: n,
    subtitleText: o,
    footer: a,
    onClose: s,
    onDiscountClaim: c,
    onContinue: u,
    analyticsLocations: f,
    isLoading: _ = false,
    churnUserDiscountOffer: m = null,
    isDowngrade: h = false,
    subtitleIcon: g,
    subtitleClassName: E
  } = e, b = (0, d.e7)([L.default], () => {
    let e = L.default.getCurrentUser();
    return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e
  });
  i.useEffect(() => {
    (0, C.Z)(b.id, b.getAvatarURL(null, 80))
  }, [b]);
  let y = null != m && !_;
  return (i.useEffect(() => {
    y && M.default.track(z.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
      location_stack: f,
      discount_id: null == m ? true : m.discount_id
    })
  }, [y, f, m]), _) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(W.Z, {
      premiumType: t,
      onClose: s
    }), (0, r.jsx)(p.hzk, {
      "data-migration-pending": true,
      className: Q.body,
      children: (0, r.jsx)(p.$jN, {
        className: Q.spinner
      })
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(W.Z, {
      premiumType: t,
      onClose: s
    }), (0, r.jsxs)(p.hzk, {
      "data-migration-pending": true,
      className: Q.body,
      children: [(0, r.jsx)(p.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        className: Q.title,
        children: n
      }), (0, r.jsxs)("div", {
        className: E,
        children: [g, (0, r.jsx)(p.Text, {
          variant: "text-md/normal",
          children: o
        })]
      }), (0, r.jsx)(eN, {
        currentUser: b,
        premiumType: t,
        onClose: s,
        isDowngrade: h
      })]
    }), !y && (0, r.jsx)(p.mzw, {
      "data-migration-pending": true,
      children: a
    }), y && (0, r.jsx)(Y.Z, {
      churnUserDiscountOffer: m,
      onDiscountClaim: c,
      onContinue: u
    })]
  })
}