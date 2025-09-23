/** Chunk was on 17938 **/
/** chunk id: 807163, original params: e,s,t (module,exports,require) **/
require.d(exports, {
  Z: () => eh,
  g: () => ej
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk998502 = require("./998502.js"),
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

function et() {
  return (et = Object.assign || function(e) {
    for (var s = 1; s < arguments.length; s++) {
      var t = arguments[s];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
    }
    return e
  }).apply(this, arguments)
}
let er = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  en = {
    boostItemVisual: Chunk652528,
    emojiStickersVisual: Chunk874692,
    screenShareItemVisual: Chunk360088,
    uploadsMessagesItemVisual: Chunk391458,
    uploadsMessagesItemVisualV2: Chunk70967,
    PL: Chunk674264,
    TR: Chunk304880
  },
  ei = {
    boostItemVisual: Chunk834982,
    emojiStickersVisual: Chunk912450,
    screenShareItemVisual: Chunk360088,
    uploadsMessagesItemVisual: Chunk703548,
    uploadsMessagesItemVisualV2: Chunk869333,
    PL: Chunk674264,
    TR: Chunk304880
  };

function ea() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk780384.wj)(module) ? ei : en
}

function eo(e) {
  let {
    description: s,
    onLearnMore: t,
    renderVisual: n
  } = e, i = ef();
  return (0, r.jsxs)("div", {
    className: a()(K.whatYouLoseItem, {
      [K.premiumRebrand]: i
    }),
    children: [(0, r.jsxs)("div", {
      className: a()(K.whatYouLoseItemLeftColumn, {
        [K.premiumRebrand]: i
      }),
      children: [(0, r.jsx)(x.Text, {
        variant: "text-md/normal",
        children: s
      }), (0, r.jsx)(p.zx, {
        "data-migration-pending": true,
        look: p.zx.Looks.LINK,
        color: p.zx.Colors.LINK,
        size: p.zx.Sizes.NONE,
        className: K.whatYouLoseItemLearnMore,
        onClick: t,
        children: B.intl.string(B.t.hvVgAQ)
      })]
    }), (0, r.jsx)("div", {
      className: a()(K.whatYouLoseItemRightColumn, {
        [K.premiumRebrand]: i
      }),
      children: n()
    })]
  })
}

function el(e) {
  var s, t, n = et({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  let {
    theme: i
  } = (0, O.z)(), a = (0, x.dQu)(x.TVs.colors.INTERACTIVE_ACTIVE, i).hex();
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
    color: a
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

function ec(e) {
  let s, {
      currentUser: t,
      premiumType: n,
      onClose: i
    } = e,
    a = (0, v.ZP)(t.id),
    o = (0, m.e7)([C.Z], () => C.Z.useReducedMotion),
    l = n === V.p9.TIER_1;
  return s = (null == a ? true : a.premiumType) === V.p9.TIER_2 ? (0, r.jsxs)(L.Z, {
    user: t,
    displayProfile: a,
    forceShowPremium: true,
    themeType: null,
    className: K.profileCard,
    children: [(0, r.jsx)(y.b, {
      user: t,
      displayProfile: a,
      avatarSize: x.EFr.SIZE_56,
      avatarOffsetX: 8,
      avatarOffsetY: 2,
      bannerWidth: 172,
      bannerHeight: 60,
      themePadding: 4
    }), (0, r.jsx)(er, {
      className: K.profileAvatar,
      src: t.getAvatarURL(true, (0, x.pxk)(x.EFr.SIZE_56), !o),
      size: x.EFr.SIZE_56,
      "aria-label": t.username
    }), (0, r.jsxs)("div", {
      className: K.profileUserInfo,
      children: [(0, r.jsx)(_.Z, {
        className: K.profileNameTag,
        usernameClass: K.profileNameTagUsername,
        name: t.toString()
      }), (0, r.jsx)(el, {
        className: K.profilePremiumIcon
      })]
    })]
  }) : (0, r.jsxs)("div", {
    className: K.profileCardTier1,
    children: [(0, r.jsx)(er, {
      className: K.profileAvatarTier1,
      src: t.getAvatarURL(true, (0, x.pxk)(x.EFr.SIZE_56), !o),
      size: x.EFr.SIZE_56,
      "aria-label": t.username
    }), (0, r.jsxs)("div", {
      className: K.profileUserInfoTier1,
      children: [(0, r.jsx)(_.Z, {
        className: K.profileNameTag,
        usernameClass: K.profileNameTagUsername,
        name: t.toString()
      }), (0, r.jsx)(x.SrA, {
        size: "md",
        color: "currentColor",
        className: K.profilePremiumIcon
      })]
    })]
  }), (0, r.jsx)(eo, {
    description: l ? B.intl.format(B.t.xCaYwM, {}) : B.intl.format(B.t["gpqr+v"], {}),
    onLearnMore: () => {
      i(), (0, M.openUserSettings)(P.n.PROFILE_PANEL, {
        section: D.oAB.PROFILE_CUSTOMIZATION
      }), R.default.track(D.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "user_profile_customization"
      })
    },
    renderVisual: () => s
  })
}

function eu(e) {
  let {
    premiumType: s
  } = e, t = (0, m.e7)([C.Z], () => C.Z.useReducedMotion), n = (0, g.wC)(null).filter(e => e.type === I.B.GUILD && (e.animated || null != e.guildId)).slice(0, 3), i = (0, m.Wu)([T.Z], () => T.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)), a = ea().emojiStickersVisual, o = s === V.p9.TIER_1;
  return (0, r.jsx)(eo, {
    description: o ? B.intl.format(B.t.couiKC, {}) : B.intl.format(B.t["0hUHi4"], {}),
    onLearnMore: () => {
      window.open(Z.Z.getArticleURL(D.BhN.PREMIUM_DETAILS)), R.default.track(D.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "emojis_stickers"
      })
    },
    renderVisual: () => null != n && n.length > 0 || !o && null != i && i.length > 0 ? (0, r.jsxs)("div", {
      className: K.emojiStickersPersonalizedContainer,
      children: [n.map(e => null == e.id ? e.url : w.ZP.getEmojiURL({
        id: e.id,
        animated: !t && e.animated,
        size: 58
      })).map((e, s) => null != e ? (0, r.jsx)("img", {
        className: K.personalizedEmoji,
        alt: "",
        src: e
      }, "emoji-".concat(s)) : null), o ? null : i.map(e => (0, r.jsx)(b.Z, {
        disableAnimation: t,
        sticker: e,
        size: 58,
        withLoadingIndicator: false
      }, e.id))]
    }) : (0, r.jsx)("img", {
      className: K.nonPersonalizedGraphic,
      alt: "",
      src: a
    })
  })
}

function em(e) {
  let {
    premiumType: s,
    onClose: t
  } = e;
  n.useEffect(() => f.Z.wait(() => (0, j.X8)()), []);
  let i = (0, m.e7)([C.Z], () => C.Z.useReducedMotion),
    [o, l] = (0, m.Wu)([U.Z, A.Z], () => {
      let e = U.Z.boostSlots,
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
    d = ea().boostItemVisual;
  return (0, r.jsx)(eo, {
    description: s === V.p9.TIER_1 ? B.intl.format(B.t["K4Hv6+"], {}) : B.intl.format(B.t.wRxEDQ, {}),
    onLearnMore: () => {
      t(), (0, M.openUserSettings)(P.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        section: D.oAB.GUILD_BOOSTING
      }), R.default.track(D.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "boosts"
      })
    },
    renderVisual: () => c ? (0, r.jsx)("div", {
      className: K.boostCardContainer,
      children: (0, r.jsxs)("div", {
        className: K.boostCard,
        children: [(0, r.jsx)(N.Z, {
          guild: o,
          size: N.Z.Sizes.MEDIUM,
          animate: !i,
          className: K.boostCardIcon
        }), (0, r.jsxs)("div", {
          className: K.boostCardInfo,
          children: [(0, r.jsx)(x.Text, {
            variant: "text-md/normal",
            className: a()(K.textSingleLineEllipsis, K.boostCardTitle),
            children: o.name
          }), (0, r.jsxs)("div", {
            className: K.boostCardSubtitle,
            children: [(0, r.jsx)(x.$Eu, {
              color: x.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
              className: K.boostCardGem
            }), (0, r.jsx)(x.Text, {
              variant: "text-xs/normal",
              className: a()(K.textSingleLineEllipsis, K.boostCardCount),
              children: B.intl.format(B.t["Ou/g/P"], {
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
let ed = () => {
  let e = ea().screenShareItemVisual;
  return (0, Chunk951288.jsx)(eo, {
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

function ep(e) {
  let {
    premiumType: s
  } = e, t = ea().uploadsMessagesItemVisual;
  return (0, r.jsx)(eo, {
    description: s === V.p9.TIER_2 ? B.intl.format(B.t.GsOFRE, {}) : B.intl.format(B.t.wFWO6O, {}),
    onLearnMore: () => {
      window.open(Z.Z.getArticleURL(D.BhN.PREMIUM_DETAILS)), R.default.track(D.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "msgs_uploads"
      })
    },
    renderVisual: () => (0, r.jsx)("img", {
      alt: "",
      src: t
    })
  })
}
let ex = Chunk647438.createContext({
    isPremiumRebrand: false
  }),
  ef = () => Chunk647438.useContext(ex).isPremiumRebrand;

function ej(e) {
  let {
    currentUser: s,
    premiumType: t,
    onClose: i,
    isDowngrade: o = false,
    isPremiumRebrand: l = false
  } = e, c = n.useMemo(() => {
    let e = [];
    switch (t) {
      case V.p9.TIER_0:
        e.push((0, r.jsx)(eu, {
          premiumType: t
        }), (0, r.jsx)(ep, {
          premiumType: t
        }));
        break;
      case V.p9.TIER_1:
        o ? e.push((0, r.jsx)(ec, {
          currentUser: s,
          premiumType: t,
          onClose: i
        }, "profile-item"), (0, r.jsx)(ed, {}, "screen-share-item"), (0, r.jsx)(em, {
          premiumType: t,
          onClose: i
        }, "boost-item")) : e.push((0, r.jsx)(ec, {
          currentUser: s,
          premiumType: t,
          onClose: i
        }, "profile-item"), (0, r.jsx)(eu, {
          premiumType: t
        }, "emoji-stickers-item"), (0, r.jsx)(ed, {}, "screen-share-item"), (0, r.jsx)(ep, {
          premiumType: t
        }, "uploads-item"), (0, r.jsx)(em, {
          premiumType: t,
          onClose: i
        }, "boost-item"));
        break;
      case V.p9.TIER_2:
        o ? e.push((0, r.jsx)(ec, {
          currentUser: s,
          premiumType: t,
          onClose: i
        }, "profile-item"), (0, r.jsx)(em, {
          premiumType: t,
          onClose: i
        }, "boost-item"), (0, r.jsx)(ed, {}, "screen-share-item")) : e.push((0, r.jsx)(ec, {
          currentUser: s,
          premiumType: t,
          onClose: i
        }, "profile-item"), (0, r.jsx)(eu, {
          premiumType: t
        }, "emoji-stickers-item"), (0, r.jsx)(em, {
          premiumType: t,
          onClose: i
        }, "boost-item"), (0, r.jsx)(ed, {}, "screen-share-item"), (0, r.jsx)(ep, {
          premiumType: t
        }, "uploads-item"))
    }
    return e
  }, [t, s, i, o]);
  return (0, r.jsx)(ex.Provider, {
    value: {
      isPremiumRebrand: l
    },
    children: (0, r.jsx)("div", {
      className: a()(K.whatYouLoseItemContainer, {
        [K.premiumRebrand]: l,
        [K.noMargin]: l && c.length <= 2
      }),
      children: c
    })
  })
}
let eh = function(e) {
  let {
    premiumType: s,
    titleText: t,
    subtitleText: i,
    footer: a,
    onClose: o,
    onDiscountClaim: c,
    onContinue: u,
    analyticsLocations: d,
    isLoading: p = false,
    churnUserDiscountOffer: f = null,
    isDowngrade: j = false,
    subtitleIcon: h,
    subtitleClassName: C
  } = e, g = (0, m.e7)([S.default], () => {
    let e = S.default.getCurrentUser();
    return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e
  });
  n.useEffect(() => {
    (0, E.Z)(g.id, g.getAvatarURL(null, 80))
  }, [g]);
  let I = null != f && !p;
  return (n.useEffect(() => {
    I && R.default.track(D.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
      location_stack: d,
      discount_id: null == f ? true : f.discount_id
    })
  }, [I, d, f]), p) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(z.Z, {
      premiumType: s,
      onClose: o
    }), (0, r.jsx)(x.hzk, {
      "data-migration-pending": true,
      className: K.body,
      children: (0, r.jsx)(x.$jN, {
        className: K.spinner
      })
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(z.Z, {
      premiumType: s,
      onClose: o
    }), (0, r.jsxs)(x.hzk, {
      "data-migration-pending": true,
      className: K.body,
      children: [(0, r.jsx)(x.X6q, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: K.title,
        children: t
      }), (0, r.jsxs)("div", {
        className: C,
        children: [h, (0, r.jsx)(x.Text, {
          variant: "text-md/normal",
          children: i
        })]
      }), (0, r.jsx)(ej, {
        currentUser: g,
        premiumType: s,
        onClose: o,
        isDowngrade: j
      })]
    }), !I && (0, r.jsx)(x.mzw, {
      "data-migration-pending": true,
      children: a
    }), I && (0, r.jsx)(F.Z, {
      churnUserDiscountOffer: f,
      onDiscountClaim: c,
      onContinue: u
    })]
  })
}