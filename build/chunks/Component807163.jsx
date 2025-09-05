/** Chunk was on web.js **/
/** chunk id: 807163, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eO,
  g: () => ey
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk230711 = require("./230711.js"),
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

function et(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function en() {
  return (en = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function er(e) {
  if (null == e) throw TypeError("Cannot destructure " + e);
  return e
}

function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      et(e, t, n[t])
    })
  }
  return e
}

function ea(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eo(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ea(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let es = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  el = {
    boostItemVisual: Chunk652528,
    emojiStickersVisual: Chunk874692,
    screenShareItemVisual: Chunk360088,
    uploadsMessagesItemVisual: Chunk391458,
    uploadsMessagesItemVisualV2: Chunk70967,
    PL: Chunk674264,
    TR: Chunk304880
  },
  ec = {
    boostItemVisual: Chunk834982,
    emojiStickersVisual: Chunk912450,
    screenShareItemVisual: Chunk360088,
    uploadsMessagesItemVisual: Chunk703548,
    uploadsMessagesItemVisualV2: Chunk869333,
    PL: Chunk674264,
    TR: Chunk304880
  };

function eu() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk780384.wj)(module) ? ec : el
}

function ed(e) {
  let {
    description: t,
    onLearnMore: n,
    renderVisual: i
  } = e, a = eb();
  return (0, r.jsxs)("div", {
    className: o()(V.whatYouLoseItem, {
      [V.premiumRebrand]: a
    }),
    children: [(0, r.jsxs)("div", {
      className: o()(V.whatYouLoseItemLeftColumn, {
        [V.premiumRebrand]: a
      }),
      children: [(0, r.jsx)(p.Text, {
        variant: "text-md/normal",
        children: t
      }), (0, r.jsx)(_.zx, {
        "data-migration-pending": true,
        look: _.zx.Looks.LINK,
        color: _.zx.Colors.LINK,
        size: _.zx.Sizes.NONE,
        className: V.whatYouLoseItemLearnMore,
        onClick: n,
        children: F.intl.string(F.t.hvVgAQ)
      })]
    }), (0, r.jsx)("div", {
      className: o()(V.whatYouLoseItemRightColumn, {
        [V.premiumRebrand]: a
      }),
      children: i()
    })]
  })
}

function ef(e) {
  var t = en({}, er(e));
  let {
    theme: n
  } = (0, P.z)(), i = (0, p.dQu)(p.TVs.colors.INTERACTIVE_ACTIVE, n).hex();
  return (0, r.jsx)(p.SrA, eo(ei({
    size: "md"
  }, t), {
    color: i
  }))
}

function e_(e) {
  let t, {
      currentUser: n,
      premiumType: i,
      onClose: a
    } = e,
    o = (0, S.ZP)(n.id),
    s = (0, d.e7)([b.Z], () => b.Z.useReducedMotion),
    l = i === B.p9.TIER_1,
    c = () => {
      a(), g.Z.open(Z.oAB.PROFILE_CUSTOMIZATION), L.default.track(Z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "user_profile_customization"
      })
    };
  return t = (null == o ? true : o.premiumType) === B.p9.TIER_2 ? (0, r.jsxs)(R.Z, {
    user: n,
    displayProfile: o,
    forceShowPremium: true,
    themeType: null,
    className: V.profileCard,
    children: [(0, r.jsx)(N.b, {
      user: n,
      displayProfile: o,
      avatarSize: p.EFr.SIZE_56,
      avatarOffsetX: 8,
      avatarOffsetY: 2,
      bannerWidth: 172,
      bannerHeight: 60,
      themePadding: 4
    }), (0, r.jsx)(es, {
      className: V.profileAvatar,
      src: n.getAvatarURL(true, (0, p.pxk)(p.EFr.SIZE_56), !s),
      size: p.EFr.SIZE_56,
      "aria-label": n.username
    }), (0, r.jsxs)("div", {
      className: V.profileUserInfo,
      children: [(0, r.jsx)(C.Z, {
        className: V.profileNameTag,
        usernameClass: V.profileNameTagUsername,
        name: n.toString()
      }), (0, r.jsx)(ef, {
        className: V.profilePremiumIcon
      })]
    })]
  }) : (0, r.jsxs)("div", {
    className: V.profileCardTier1,
    children: [(0, r.jsx)(es, {
      className: V.profileAvatarTier1,
      src: n.getAvatarURL(true, (0, p.pxk)(p.EFr.SIZE_56), !s),
      size: p.EFr.SIZE_56,
      "aria-label": n.username
    }), (0, r.jsxs)("div", {
      className: V.profileUserInfoTier1,
      children: [(0, r.jsx)(C.Z, {
        className: V.profileNameTag,
        usernameClass: V.profileNameTagUsername,
        name: n.toString()
      }), (0, r.jsx)(p.SrA, {
        size: "md",
        color: "currentColor",
        className: V.profilePremiumIcon
      })]
    })]
  }), (0, r.jsx)(ed, {
    description: l ? F.intl.format(F.t.xCaYwM, {}) : F.intl.format(F.t["gpqr+v"], {}),
    onLearnMore: c,
    renderVisual: () => t
  }, "profile-item")
}

function ep(e) {
  let {
    premiumType: t
  } = e, n = 3, i = (0, d.e7)([b.Z], () => b.Z.useReducedMotion), a = (0, y.wC)(null).filter(e => e.type === O.B.GUILD && (e.animated || null != e.guildId)).slice(0, n), o = (0, d.Wu)([I.Z], () => I.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, n - a.length)), s = eu().emojiStickersVisual, l = t === B.p9.TIER_1, c = () => {
    window.open(k.Z.getArticleURL(Z.BhN.PREMIUM_DETAILS)), L.default.track(Z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
      action: "emojis_stickers"
    })
  };
  return (0, r.jsx)(ed, {
    description: l ? F.intl.format(F.t.couiKC, {}) : F.intl.format(F.t["0hUHi4"], {}),
    onLearnMore: c,
    renderVisual: () => null != a && a.length > 0 || !l && null != o && o.length > 0 ? (0, r.jsxs)("div", {
      className: V.emojiStickersPersonalizedContainer,
      children: [a.map(e => null == e.id ? e.url : j.ZP.getEmojiURL({
        id: e.id,
        animated: !i && e.animated,
        size: 58
      })).map(e => null != e ? (0, r.jsx)("img", {
        className: V.personalizedEmoji,
        alt: "",
        src: e
      }) : null), l ? null : o.map(e => (0, r.jsx)(T.Z, {
        disableAnimation: i,
        sticker: e,
        size: 58,
        withLoadingIndicator: false
      }, e.id))]
    }) : (0, r.jsx)("img", {
      className: V.nonPersonalizedGraphic,
      alt: "",
      src: s
    })
  }, "emoji-stickers-item")
}

function eh(e) {
  let {
    premiumType: t,
    onClose: n
  } = e;
  i.useEffect(() => h.Z.wait(() => (0, m.X8)()), []);
  let a = (0, d.e7)([b.Z], () => b.Z.useReducedMotion),
    [s, l] = (0, d.Wu)([x.Z, w.Z], () => {
      let e = x.Z.boostSlots,
        t = new Map;
      u()(e).map("premiumGuildSubscription").map("guildId").forEach(e => {
        if (null != w.Z.getGuild(e)) {
          var n;
          let r = null != (n = t.get(e)) ? n : 0;
          t.set(e, r + 1)
        }
      });
      let n = null,
        r = 0;
      return t.size > 0 && ([n, r] = Array.from(t.entries()).reduce((e, t) => t[1] > e[1] ? t : e)), [w.Z.getGuild(n), r]
    }),
    c = null != s && l > 0,
    f = eu().boostItemVisual,
    _ = () => {
      n(), g.Z.open(Z.oAB.GUILD_BOOSTING), L.default.track(Z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "boosts"
      })
    };
  return (0, r.jsx)(ed, {
    description: t === B.p9.TIER_1 ? F.intl.format(F.t["K4Hv6+"], {}) : F.intl.format(F.t.wRxEDQ, {}),
    onLearnMore: _,
    renderVisual: () => c ? (0, r.jsx)("div", {
      className: V.boostCardContainer,
      children: (0, r.jsxs)("div", {
        className: V.boostCard,
        children: [(0, r.jsx)(v.Z, {
          guild: s,
          size: v.Z.Sizes.MEDIUM,
          animate: !a,
          className: V.boostCardIcon
        }), (0, r.jsxs)("div", {
          className: V.boostCardInfo,
          children: [(0, r.jsx)(p.Text, {
            variant: "text-md/normal",
            className: o()(V.textSingleLineEllipsis, V.boostCardTitle),
            children: s.name
          }), (0, r.jsxs)("div", {
            className: V.boostCardSubtitle,
            children: [(0, r.jsx)(p.$Eu, {
              color: p.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
              className: V.boostCardGem
            }), (0, r.jsx)(p.Text, {
              variant: "text-xs/normal",
              className: o()(V.textSingleLineEllipsis, V.boostCardCount),
              children: F.intl.format(F.t["Ou/g/P"], {
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
  }, "boost-item")
}
let em = () => {
  let e = eu().screenShareItemVisual,
    t = () => {
      window.open(Chunk63063.Z.getArticleURL(Chunk981631.BhN.STREAM_QUALITY_SETTINGS)), Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "screen_share"
      })
    };
  return (0, Chunk951288.jsx)(ed, {
    description: Chunk388032.intl.format(Chunk388032.t.wK04T0, {}),
    onLearnMore: exports,
    renderVisual: () => (0, Chunk951288.jsx)("img", {
      alt: "",
      src: module
    })
  }, "screen-share-item")
};

function eg(e) {
  let {
    premiumType: t
  } = e, n = eu().uploadsMessagesItemVisual, i = () => {
    window.open(k.Z.getArticleURL(Z.BhN.PREMIUM_DETAILS)), L.default.track(Z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
      action: "msgs_uploads"
    })
  };
  return (0, r.jsx)(ed, {
    description: t === B.p9.TIER_2 ? F.intl.format(F.t.GsOFRE, {}) : F.intl.format(F.t.wFWO6O, {}),
    onLearnMore: i,
    renderVisual: () => (0, r.jsx)("img", {
      alt: "",
      src: n
    })
  }, "uploads-item")
}
let eE = Chunk647438.createContext({
    isPremiumRebrand: false
  }),
  eb = () => Chunk647438.useContext(eE).isPremiumRebrand;

function ey(e) {
  let {
    currentUser: t,
    premiumType: n,
    onClose: a,
    isDowngrade: s = false,
    isPremiumRebrand: l = false
  } = e, c = i.useMemo(() => {
    let e = [];
    switch (n) {
      case B.p9.TIER_0:
        e.push((0, r.jsx)(ep, {
          premiumType: n
        }), (0, r.jsx)(eg, {
          premiumType: n
        }));
        break;
      case B.p9.TIER_1:
        s ? e.push((0, r.jsx)(e_, {
          currentUser: t,
          premiumType: n,
          onClose: a
        }), (0, r.jsx)(em, {}), (0, r.jsx)(eh, {
          premiumType: n,
          onClose: a
        })) : e.push((0, r.jsx)(e_, {
          currentUser: t,
          premiumType: n,
          onClose: a
        }), (0, r.jsx)(ep, {
          premiumType: n
        }), (0, r.jsx)(em, {}), (0, r.jsx)(eg, {
          premiumType: n
        }), (0, r.jsx)(eh, {
          premiumType: n,
          onClose: a
        }));
        break;
      case B.p9.TIER_2:
        s ? e.push((0, r.jsx)(e_, {
          currentUser: t,
          premiumType: n,
          onClose: a
        }), (0, r.jsx)(eh, {
          premiumType: n,
          onClose: a
        }), (0, r.jsx)(em, {})) : e.push((0, r.jsx)(e_, {
          currentUser: t,
          premiumType: n,
          onClose: a
        }), (0, r.jsx)(ep, {
          premiumType: n
        }), (0, r.jsx)(eh, {
          premiumType: n,
          onClose: a
        }), (0, r.jsx)(em, {}), (0, r.jsx)(eg, {
          premiumType: n
        }))
    }
    return e
  }, [n, t, a, s]);
  return (0, r.jsx)(eE.Provider, {
    value: {
      isPremiumRebrand: l
    },
    children: (0, r.jsx)("div", {
      className: o()(V.whatYouLoseItemContainer, {
        [V.premiumRebrand]: l,
        [V.noMargin]: l && c.length <= 2
      }),
      children: c
    })
  })
}
let eO = function(e) {
  let {
    premiumType: t,
    titleText: n,
    subtitleText: a,
    footer: o,
    onClose: s,
    onDiscountClaim: c,
    onContinue: u,
    analyticsLocations: f,
    isLoading: _ = false,
    churnUserDiscountOffer: h = null,
    isDowngrade: m = false,
    subtitleIcon: g,
    subtitleClassName: E
  } = e, b = (0, d.e7)([D.default], () => {
    let e = D.default.getCurrentUser();
    return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e
  });
  i.useEffect(() => {
    (0, A.Z)(b.id, b.getAvatarURL(null, 80))
  }, [b]);
  let y = null != h && !_;
  return (i.useEffect(() => {
    y && L.default.track(Z.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
      location_stack: f,
      discount_id: null == h ? true : h.discount_id
    })
  }, [y, f, h]), _) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(G.Z, {
      premiumType: t,
      onClose: s
    }), (0, r.jsx)(p.hzk, {
      "data-migration-pending": true,
      className: V.body,
      children: (0, r.jsx)(p.$jN, {
        className: V.spinner
      })
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(G.Z, {
      premiumType: t,
      onClose: s
    }), (0, r.jsxs)(p.hzk, {
      "data-migration-pending": true,
      className: V.body,
      children: [(0, r.jsx)(p.X6q, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: V.title,
        children: n
      }), (0, r.jsxs)("div", {
        className: E,
        children: [g, (0, r.jsx)(p.Text, {
          variant: "text-md/normal",
          children: a
        })]
      }), (0, r.jsx)(ey, {
        currentUser: b,
        premiumType: t,
        onClose: s,
        isDowngrade: m
      })]
    }), !y && (0, r.jsx)(p.mzw, {
      "data-migration-pending": true,
      children: o
    }), y && (0, r.jsx)(U.Z, {
      churnUserDiscountOffer: h,
      onDiscountClaim: c,
      onContinue: u
    })]
  })
}