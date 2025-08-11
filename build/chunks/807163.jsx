/** Chunk was on 17938 **/
/** chunk id: 807163, original params: e,s,r (module,exports,require) **/
require.d(exports, {
  Z: () => ej,
  g: () => ef
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk813549 = require("./813549.js"),
  Chunk867176 = require("./867176.js"),
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
  Chunk18908 = require("./18908.js"),
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

function es() {
  return (es = Object.assign || function(e) {
    for (var s = 1; s < arguments.length; s++) {
      var r = arguments[s];
      for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
    }
    return e
  }).apply(this, arguments)
}
let er = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  et = {
    boostItemVisual: Chunk652528,
    emojiStickersVisual: Chunk874692,
    screenShareItemVisual: Chunk360088,
    uploadsMessagesItemVisual: Chunk391458,
    uploadsMessagesItemVisualV2: Chunk70967,
    PL: Chunk674264,
    TR: Chunk304880
  },
  en = {
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
  return (0, Chunk780384.wj)(module) ? en : et
}

function ei(e) {
  let {
    description: s,
    onLearnMore: r,
    renderVisual: n
  } = e, a = ex();
  return <div className={i()(K.whatYouLoseItem, {
      [K.premiumRebrand]: a
    })}>{<div className={i()(K.whatYouLoseItemLeftColumn, {
        [K.premiumRebrand]: a
      })}>{<x.Text variant={"text-md/normal"}>{s}</x.Text>}{<p.zx look={p.zx.Looks.LINK} color={p.zx.Colors.LINK} size={p.zx.Sizes.NONE} className={K.whatYouLoseItemLearnMore} onClick={r}>{D.intl.string(D.t.hvVgAQ)}</p.zx>}</div>}{<div className={i()(K.whatYouLoseItemRightColumn, {
        [K.premiumRebrand]: a
      })}>{n()}</div>}</div>
}

function eo(e) {
  var s, r, n = es({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  let {
    theme: a
  } = (0, M.z)(), i = (0, x.dQu)(x.TVs.colors.INTERACTIVE_ACTIVE, a).hex();
  return <x.SrA{...s = function(e) {
    for (var s = 1; s < arguments.length; s++) {
      var r = null != arguments[s] ? arguments[s] : {},
        t = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), t.forEach(function(s) {
        var t;
        t = r[s], s in e ? Object.defineProperty(e, s, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[s] = t
      })
    }
    return e
  }({
    size: "md"
  }, n), r = r = {
    color: i
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(r)) : (function(e, s) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var t = Object.getOwnPropertySymbols(e);
      r.push.apply(r, t)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(r, e))
  }), s} />
}

function el(e) {
  let s, {
      currentUser: r,
      premiumType: n,
      onClose: a
    } = e,
    i = (0, E.ZP)(r.id),
    o = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
    l = n === z.p9.TIER_1;
  return s = (null == i ? true : i.premiumType) === z.p9.TIER_2 ? <O.Z user={r} displayProfile={i} forceShowPremium={true} themeType={null} className={K.profileCard}>{<L.b user={r} displayProfile={i} avatarSize={x.EFr.SIZE_56} avatarOffsetX={8} avatarOffsetY={2} bannerWidth={172} bannerHeight={60} themePadding={4} />}{<er className={K.profileAvatar} src={r.getAvatarURL(true, (0, x.pxk)(x.EFr.SIZE_56), !o)} size={x.EFr.SIZE_56} aria-label={r.username} />}{<div className={K.profileUserInfo}>{<y.Z className={K.profileNameTag} usernameClass={K.profileNameTagUsername} name={r.toString()} />}{<eo className={K.profilePremiumIcon} />}</div>}</O.Z> : <div className={K.profileCardTier1}>{<er className={K.profileAvatarTier1} src={r.getAvatarURL(true, (0, x.pxk)(x.EFr.SIZE_56), !o)} size={x.EFr.SIZE_56} aria-label={r.username} />}{<div className={K.profileUserInfoTier1}>{<y.Z className={K.profileNameTag} usernameClass={K.profileNameTagUsername} name={r.toString()} />}{<x.SrA size={"md"} color={"currentColor"} className={K.profilePremiumIcon} />}</div>}</div>, <ei description={l ? D.intl.format(D.t.xCaYwM, {}) : D.intl.format(D.t["gpqr+v"], {})} onLearnMore={() => {
      a(), h.Z.open(V.oAB.PROFILE_CUSTOMIZATION), w.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "user_profile_customization"
      })
    }} renderVisual={() => s} />
}

function ec(e) {
  let {
    premiumType: s
  } = e, r = (0, m.e7)([g.Z], () => g.Z.useReducedMotion), n = (0, I.wC)(null).filter(e => e.type === N.B.GUILD && (e.animated || null != e.guildId)).slice(0, 3), a = (0, m.Wu)([v.Z], () => v.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)), i = ea().emojiStickersVisual, o = s === z.p9.TIER_1;
  return <ei description={o ? D.intl.format(D.t.couiKC, {}) : D.intl.format(D.t["0hUHi4"], {})} onLearnMore={() => {
      window.open(S.Z.getArticleURL(V.BhN.PREMIUM_DETAILS)), w.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "emojis_stickers"
      })
    }} renderVisual={() => null != n && n.length > 0 || !o && null != a && a.length > 0 ? (0, t.jsxs)("div", {
      className: K.emojiStickersPersonalizedContainer,
      children: [n.map(e => null == e.id ? e.url : R.ZP.getEmojiURL({
        id: e.id,
        animated: !r && e.animated,
        size: 58
      })).map(e => null != e ? (0, t.jsx)("img", {
        className: K.personalizedEmoji,
        alt: "",
        src: e
      }) : null), o ? null : a.map(e => (0, t.jsx)(b.Z, {
        disableAnimation: r,
        sticker: e,
        size: 58,
        withLoadingIndicator: false
      }, e.id))]
    }) : (0, t.jsx)("img", {
      className: K.nonPersonalizedGraphic,
      alt: "",
      src: i
    })} />
}

function eu(e) {
  let {
    premiumType: s,
    onClose: r
  } = e;
  n.useEffect(() => f.Z.wait(() => (0, j.X8)()), []);
  let a = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
    [o, l] = (0, m.Wu)([Z.Z, A.Z], () => {
      let e = Z.Z.boostSlots,
        s = new Map;
      u()(e).map("premiumGuildSubscription").map("guildId").forEach(e => {
        if (null != A.Z.getGuild(e)) {
          var r;
          let t = null != (r = s.get(e)) ? r : 0;
          s.set(e, t + 1)
        }
      });
      let r = null,
        t = 0;
      return s.size > 0 && ([r, t] = Array.from(s.entries()).reduce((e, s) => s[1] > e[1] ? s : e)), [A.Z.getGuild(r), t]
    }),
    c = null != o && l > 0,
    d = ea().boostItemVisual;
  return <ei description={s === z.p9.TIER_1 ? D.intl.format(D.t["K4Hv6+"], {}) : D.intl.format(D.t.wRxEDQ, {})} onLearnMore={() => {
      r(), h.Z.open(V.oAB.GUILD_BOOSTING), w.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "boosts"
      })
    }} renderVisual={() => c ? (0, t.jsx)("div", {
      className: K.boostCardContainer,
      children: (0, t.jsxs)("div", {
        className: K.boostCard,
        children: [(0, t.jsx)(T.Z, {
          guild: o,
          size: T.Z.Sizes.MEDIUM,
          animate: !a,
          className: K.boostCardIcon
        }), (0, t.jsxs)("div", {
          className: K.boostCardInfo,
          children: [(0, t.jsx)(x.Text, {
            variant: "text-md/normal",
            className: i()(K.textSingleLineEllipsis, K.boostCardTitle),
            children: o.name
          }), (0, t.jsxs)("div", {
            className: K.boostCardSubtitle,
            children: [(0, t.jsx)(x.$Eu, {
              color: x.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
              className: K.boostCardGem
            }), (0, t.jsx)(x.Text, {
              variant: "text-xs/normal",
              className: i()(K.textSingleLineEllipsis, K.boostCardCount),
              children: D.intl.format(D.t["Ou/g/P"], {
                boostCount: l
              })
            })]
          })]
        })]
      })
    }) : (0, t.jsx)("img", {
      alt: "",
      src: d
    })} />
}
let em = () => {
  let e = ea().screenShareItemVisual;
  return <ei description={Chunk388032.intl.format(Chunk388032.t.wK04T0, {})} onLearnMore={() => {
      window.open(Chunk63063.Z.getArticleURL(Chunk981631.BhN.STREAM_QUALITY_SETTINGS)), Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "screen_share"
      })
    }} renderVisual={() => (0, Chunk255367.jsx)("img", {
      alt: "",
      src: module
    })} />
};

function ed(e) {
  let {
    premiumType: s
  } = e, r = ea().uploadsMessagesItemVisual;
  return <ei description={s === z.p9.TIER_2 ? D.intl.format(D.t.GsOFRE, {}) : D.intl.format(D.t.wFWO6O, {})} onLearnMore={() => {
      window.open(S.Z.getArticleURL(V.BhN.PREMIUM_DETAILS)), w.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "msgs_uploads"
      })
    }} renderVisual={() => (0, t.jsx)("img", {
      alt: "",
      src: r
    })} />
}
let ep = Chunk73800.createContext({
    isPremiumRebrand: false
  }),
  ex = () => Chunk73800.useContext(ep).isPremiumRebrand;

function ef(e) {
  let {
    currentUser: s,
    premiumType: r,
    onClose: a,
    isDowngrade: o = false,
    isPremiumRebrand: l = false
  } = e, c = n.useMemo(() => {
    let e = [];
    switch (r) {
      case z.p9.TIER_0:
        e.push(<ec premiumType={r} />, <ed premiumType={r} />);
        break;
      case z.p9.TIER_1:
        o ? e.push(<el currentUser={s} premiumType={r} onClose={a} />, <em />, <eu premiumType={r} onClose={a} />) : e.push(<el currentUser={s} premiumType={r} onClose={a} />, <ec premiumType={r} />, <em />, <ed premiumType={r} />, <eu premiumType={r} onClose={a} />);
        break;
      case z.p9.TIER_2:
        o ? e.push(<el currentUser={s} premiumType={r} onClose={a} />, <eu premiumType={r} onClose={a} />, <em />) : e.push(<el currentUser={s} premiumType={r} onClose={a} />, <ec premiumType={r} />, <eu premiumType={r} onClose={a} />, <em />, <ed premiumType={r} />)
    }
    return e
  }, [r, s, a, o]);
  return <ep.Provider value={{
      isPremiumRebrand: l
    }}><div className={i()(K.whatYouLoseItemContainer, {
        [K.premiumRebrand]: l,
        [K.noMargin]: l && c.length <= 2
      })}>{c}</div></ep.Provider>
}
let ej = function(e) {
  let {
    premiumType: s,
    titleText: r,
    subtitleText: a,
    footer: i,
    onClose: o,
    onDiscountClaim: c,
    onContinue: u,
    analyticsLocations: d,
    isLoading: p = false,
    churnUserDiscountOffer: f = null,
    isDowngrade: j = false,
    subtitleIcon: h,
    subtitleClassName: C
  } = e, g = (0, m.e7)([P.default], () => {
    let e = P.default.getCurrentUser();
    return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e
  });
  n.useEffect(() => {
    (0, _.Z)(g.id, g.getAvatarURL(null, 80))
  }, [g]);
  let I = null != f && !p;
  return (n.useEffect(() => {
    I && w.default.track(V.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
      location_stack: d,
      discount_id: null == f ? true : f.discount_id
    })
  }, [I, d, f]), p) ? <t.Fragment>{<F.Z premiumType={s} onClose={o} />}{<x.hzk data-migration-pending={true} className={K.body}><x.$jN className={K.spinner} /></x.hzk>}</t.Fragment> : <t.Fragment>{<F.Z premiumType={s} onClose={o} />}{<x.hzk data-migration-pending={true} className={K.body}>{<x.X6q variant={"heading-xl/semibold"} color={"header-primary"} className={K.title}>{r}</x.X6q>}{<div className={C}>{h}{<x.Text variant={"text-md/normal"}>{a}</x.Text>}</div>}{<ef currentUser={g} premiumType={s} onClose={o} isDowngrade={j} />}</x.hzk>}{!I && <x.mzw data-migration-pending={true}>{i}</x.mzw>}{I && <k.Z churnUserDiscountOffer={f} onDiscountClaim={c} onContinue={u} />}</t.Fragment>
}