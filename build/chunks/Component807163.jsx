/** Chunk was on web.js **/
/** chunk id: 807163, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eP,
  g: () => eR
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
  Chunk768634 = require("./768634.js"),
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

function ec(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eu() {
  return (eu = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function ed(e) {
  if (null == e) throw TypeError("Cannot destructure " + e);
  return e
}

function ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ec(e, t, n[t])
    })
  }
  return e
}

function e_(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : e_(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eh = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  em = {
    boostItemVisual: Chunk652528,
    emojiStickersVisual: Chunk874692,
    screenShareItemVisual: Chunk360088,
    uploadsMessagesItemVisual: Chunk391458,
    uploadsMessagesItemVisualV2: Chunk70967,
    PL: Chunk674264,
    TR: Chunk304880
  },
  eg = {
    boostItemVisual: Chunk834982,
    emojiStickersVisual: Chunk912450,
    screenShareItemVisual: Chunk360088,
    uploadsMessagesItemVisual: Chunk703548,
    uploadsMessagesItemVisualV2: Chunk869333,
    PL: Chunk674264,
    TR: Chunk304880
  };

function eE() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk780384.wj)(module) ? eg : em
}

function eb(e) {
  let {
    description: t,
    onLearnMore: n,
    renderVisual: i
  } = e, a = eN();
  return (0, r.jsxs)("div", {
    className: o()(Q.whatYouLoseItem, {
      [Q.premiumRebrand]: a
    }),
    children: [(0, r.jsxs)("div", {
      className: o()(Q.whatYouLoseItemLeftColumn, {
        [Q.premiumRebrand]: a
      }),
      children: [(0, r.jsx)(_.Text, {
        variant: "text-md/normal",
        children: t
      }), (0, r.jsx)(_.Avr, {
        onClick: n,
        text: X.intl.string(X.t.hvVgAZ)
      })]
    }), (0, r.jsx)("div", {
      className: o()(Q.whatYouLoseItemRightColumn, {
        [Q.premiumRebrand]: a
      }),
      children: i()
    })]
  })
}

function ey(e) {
  var t = eu({}, ed(e));
  let {
    theme: n
  } = (0, P.z)(), i = (0, _.dQu)(_.TVs.colors.INTERACTIVE_ACTIVE, n).hex();
  return (0, r.jsx)(_.SrA, ep(ef({
    size: "md"
  }, t), {
    color: i
  }))
}

function eO(e) {
  let t, {
      currentUser: n,
      premiumType: i,
      onClose: a
    } = e,
    o = (0, S.ZP)(n.id),
    s = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
    l = i === z.PremiumTypes.TIER_1,
    c = () => {
      a(), (0, w.openUserSettings)(D.n.PROFILE_PANEL, {
        section: q.oAB.PROFILE_CUSTOMIZATION
      }), k.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "user_profile_customization"
      })
    };
  return t = (null == o ? true : o.premiumType) === z.PremiumTypes.TIER_2 ? (0, r.jsxs)(R.Z, {
    user: n,
    displayProfile: o,
    forceShowPremium: true,
    themeType: null,
    className: Q.profileCard,
    children: [(0, r.jsx)(N.b, {
      user: n,
      displayProfile: o,
      avatarSize: _.EFr.SIZE_56,
      avatarOffsetX: 8,
      avatarOffsetY: 2,
      bannerWidth: 172,
      bannerHeight: 60,
      themePadding: 4
    }), (0, r.jsx)(eh, {
      className: Q.profileAvatar,
      src: n.getAvatarURL(true, (0, _.pxk)(_.EFr.SIZE_56), !s),
      size: _.EFr.SIZE_56,
      "aria-label": n.username
    }), (0, r.jsxs)("div", {
      className: Q.profileUserInfo,
      children: [(0, r.jsx)(C.Z, {
        className: Q.profileNameTag,
        usernameClass: Q.profileNameTagUsername,
        name: n.toString()
      }), (0, r.jsx)(ey, {
        className: Q.profilePremiumIcon
      })]
    })]
  }) : (0, r.jsxs)("div", {
    className: Q.profileCardTier1,
    children: [(0, r.jsx)(eh, {
      className: Q.profileAvatarTier1,
      src: n.getAvatarURL(true, (0, _.pxk)(_.EFr.SIZE_56), !s),
      size: _.EFr.SIZE_56,
      "aria-label": n.username
    }), (0, r.jsxs)("div", {
      className: Q.profileUserInfoTier1,
      children: [(0, r.jsx)(C.Z, {
        className: Q.profileNameTag,
        usernameClass: Q.profileNameTagUsername,
        name: n.toString()
      }), (0, r.jsx)(_.SrA, {
        size: "md",
        color: "currentColor",
        className: Q.profilePremiumIcon
      })]
    })]
  }), (0, r.jsx)(eb, {
    description: l ? X.intl.format(X.t.xCaYwE, {}) : X.intl.format(X.t["gpqr+n"], {}),
    onLearnMore: c,
    renderVisual: () => t
  })
}

function ev(e) {
  var t, n, i;
  let {
    currentUser: a,
    onClose: o
  } = e, s = (0, Z.C)(a, "BadgeItem"), l = (0, F.Rw)(), {
    analyticsLocations: c
  } = (0, b.ZP)(E.Z.PREMIUM_UNCANCEL_MODAL), u = (0, F.GG)(), d = null != (t = null == l ? true : l.id) ? t : z.VU.PREMIUM_TENURE_1_MONTH, f = (0, V.Z)(d);
  if (!s || null == u) return null;
  let p = null != (n = null == l ? true : l.status) ? n : F.Vq.UPCOMING,
    h = null != (i = null == l ? true : l.nameUnformatted) ? i : z.vK[z.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted,
    m = (0, H.J)(d),
    g = X.intl.string(h),
    y = p === F.Vq.EARNED,
    O = null != l && "daysLeft" in l ? l.daysLeft : 1,
    v = X.t.pwkxYF;
  if (y) {
    let e = Math.max((0, G.k)(u), 1);
    e >= 365 ? (O = Math.floor(e / 365), v = X.t["/ojPfi"]) : (O = e, v = X.t.IItWYo)
  }
  let I = () => {
    o(), (0, Y.k)({
      analyticsLocations: c,
      displayProfile: null
    }), k.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
      action: "badges"
    })
  };
  return (0, r.jsx)(eb, {
    description: X.intl.format(v, {
      time: O
    }),
    onLearnMore: I,
    renderVisual: () => (0, r.jsx)(_.$1m, {
      className: Q.badgeGradientWrapper,
      color: f,
      children: (0, r.jsx)("img", {
        alt: g,
        src: m,
        className: Q.badgeImage
      })
    })
  })
}

function eI(e) {
  let {
    premiumType: t
  } = e, n = 3, i = (0, d.e7)([g.Z], () => g.Z.useReducedMotion), a = (0, y.wC)(null).filter(e => e.type === O.B.GUILD && (e.animated || null != e.guildId)).slice(0, n), o = (0, d.Wu)([I.Z], () => I.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, n - a.length)), s = eE().emojiStickersVisual, l = t === z.PremiumTypes.TIER_1, c = () => {
    window.open(U.Z.getArticleURL(q.BhN.PREMIUM_DETAILS)), k.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
      action: "emojis_stickers"
    })
  };
  return (0, r.jsx)(eb, {
    description: l ? X.intl.format(X.t.couiKJ, {}) : X.intl.format(X.t["0hUHi6"], {}),
    onLearnMore: c,
    renderVisual: () => null != a && a.length > 0 || !l && null != o && o.length > 0 ? (0, r.jsxs)("div", {
      className: Q.emojiStickersPersonalizedContainer,
      children: [a.map(e => null == e.id ? e.url : j.ZP.getEmojiURL({
        id: e.id,
        animated: !i && e.animated,
        size: 58
      })).map((e, t) => null != e ? (0, r.jsx)("img", {
        className: Q.personalizedEmoji,
        alt: "",
        src: e
      }, "emoji-".concat(t)) : null), l ? null : o.map(e => (0, r.jsx)(T.Z, {
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

function eT(e) {
  let {
    premiumType: t,
    onClose: n
  } = e;
  i.useEffect(() => p.Z.wait(() => (0, h.X8)()), []);
  let a = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
    [s, l] = (0, d.Wu)([M.Z, x.Z], () => {
      let e = M.Z.boostSlots,
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
    f = eE().boostItemVisual,
    m = () => {
      n(), (0, w.openUserSettings)(D.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        section: q.oAB.GUILD_BOOSTING
      }), k.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "boosts"
      })
    };
  return (0, r.jsx)(eb, {
    description: t === z.PremiumTypes.TIER_1 ? X.intl.format(X.t.K4Hv69, {}) : X.intl.format(X.t.wRxEDW, {}),
    onLearnMore: m,
    renderVisual: () => c ? (0, r.jsx)("div", {
      className: Q.boostCardContainer,
      children: (0, r.jsxs)("div", {
        className: Q.boostCard,
        children: [(0, r.jsx)(v.Z, {
          guild: s,
          size: v.Z.Sizes.MEDIUM,
          animate: !a,
          className: Q.boostCardIcon
        }), (0, r.jsxs)("div", {
          className: Q.boostCardInfo,
          children: [(0, r.jsx)(_.Text, {
            variant: "text-md/normal",
            className: o()(Q.textSingleLineEllipsis, Q.boostCardTitle),
            children: s.name
          }), (0, r.jsxs)("div", {
            className: Q.boostCardSubtitle,
            children: [(0, r.jsx)(_.Ucv, {
              color: _.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
              className: Q.boostCardGem
            }), (0, r.jsx)(_.Text, {
              variant: "text-xs/normal",
              className: o()(Q.textSingleLineEllipsis, Q.boostCardCount),
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
let eS = () => {
  let e = eE().screenShareItemVisual,
    t = () => {
      window.open(Chunk63063.Z.getArticleURL(Chunk981631.BhN.STREAM_QUALITY_SETTINGS)), Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "screen_share"
      })
    };
  return (0, Chunk54381.jsx)(eb, {
    description: Chunk388032.intl.format(Chunk388032.t.wK04T1, {}),
    onLearnMore: exports,
    renderVisual: () => (0, Chunk54381.jsx)("img", {
      alt: "",
      src: module
    })
  })
};

function eA(e) {
  let {
    premiumType: t
  } = e, n = eE().uploadsMessagesItemVisual, i = () => {
    window.open(U.Z.getArticleURL(q.BhN.PREMIUM_DETAILS)), k.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
      action: "msgs_uploads"
    })
  };
  return (0, r.jsx)(eb, {
    description: t === z.PremiumTypes.TIER_2 ? X.intl.format(X.t.GsOFRJ, {}) : X.intl.format(X.t.wFWO6D, {}),
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
  eN = () => Chunk473749.useContext(eC).isPremiumRebrand;

function eR(e) {
  let {
    currentUser: t,
    premiumType: n,
    onClose: a,
    isDowngrade: s = false,
    isPremiumRebrand: l = false
  } = e, c = i.useMemo(() => {
    let e = [];
    switch (n) {
      case z.PremiumTypes.TIER_0:
        e.push((0, r.jsx)(eI, {
          premiumType: n
        }), (0, r.jsx)(eA, {
          premiumType: n
        }));
        break;
      case z.PremiumTypes.TIER_1:
        s ? e.push((0, r.jsx)(eO, {
          currentUser: t,
          premiumType: n,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eS, {}, "screen-share-item"), (0, r.jsx)(eT, {
          premiumType: n,
          onClose: a
        }, "boost-item")) : e.push((0, r.jsx)(eO, {
          currentUser: t,
          premiumType: n,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eI, {
          premiumType: n
        }, "emoji-stickers-item"), (0, r.jsx)(eS, {}, "screen-share-item"), (0, r.jsx)(eA, {
          premiumType: n
        }, "uploads-item"), (0, r.jsx)(eT, {
          premiumType: n,
          onClose: a
        }, "boost-item"));
        break;
      case z.PremiumTypes.TIER_2:
        s ? e.push((0, r.jsx)(eO, {
          currentUser: t,
          premiumType: n,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eT, {
          premiumType: n,
          onClose: a
        }, "boost-item"), (0, r.jsx)(eS, {}, "screen-share-item")) : e.push((0, r.jsx)(ev, {
          currentUser: t,
          onClose: a
        }, "badge-item"), (0, r.jsx)(eO, {
          currentUser: t,
          premiumType: n,
          onClose: a
        }, "profile-item"), (0, r.jsx)(eI, {
          premiumType: n
        }, "emoji-stickers-item"), (0, r.jsx)(eT, {
          premiumType: n,
          onClose: a
        }, "boost-item"), (0, r.jsx)(eS, {}, "screen-share-item"), (0, r.jsx)(eA, {
          premiumType: n
        }, "uploads-item"))
    }
    return e
  }, [n, t, a, s]);
  return (0, r.jsx)(eC.Provider, {
    value: {
      isPremiumRebrand: l
    },
    children: (0, r.jsx)("div", {
      className: o()(Q.whatYouLoseItemContainer, {
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
  } = e, b = (0, d.e7)([L.default], () => {
    let e = L.default.getCurrentUser();
    return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e
  });
  i.useEffect(() => {
    (0, A.Z)(b.id, b.getAvatarURL(null, 80))
  }, [b]);
  let y = null != h && !p;
  return (i.useEffect(() => {
    y && k.default.track(q.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
      location_stack: f,
      discount_id: null == h ? true : h.discount_id
    })
  }, [y, f, h]), p) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(K.Z, {
      premiumType: t,
      onClose: s
    }), (0, r.jsx)(_.hzk, {
      "data-migration-pending": true,
      className: Q.body,
      children: (0, r.jsx)(_.$jN, {
        className: Q.spinner
      })
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(K.Z, {
      premiumType: t,
      onClose: s
    }), (0, r.jsxs)(_.hzk, {
      "data-migration-pending": true,
      className: Q.body,
      children: [(0, r.jsx)(_.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: Q.title,
        children: n
      }), (0, r.jsxs)("div", {
        className: E,
        children: [g, (0, r.jsx)(_.Text, {
          variant: "text-md/normal",
          children: a
        })]
      }), (0, r.jsx)(eR, {
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