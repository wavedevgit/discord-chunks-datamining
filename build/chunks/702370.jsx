/** Chunk was on 16476 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eF
}), require("./388685.js"), require("./314940.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk278074 = require("./278074.js"),
  Chunk873546 = require("./873546.js"),
  Chunk979554 = require("./979554.js"),
  Chunk314794 = require("./314794.js"),
  Chunk399606 = require("./399606.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk727637 = require("./727637.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk570908 = require("./570908.jsx"),
  Chunk786761 = require("./786761.js"),
  Chunk3148 = require("./3148.js"),
  Chunk739566 = require("./739566.js"),
  Chunk753206 = require("./753206.js"),
  Chunk4242 = require("./4242.js"),
  Chunk333867 = require("./333867.jsx"),
  Chunk767714 = require("./767714.js"),
  Chunk678135 = require("./678135.jsx"),
  Chunk876917 = require("./876917.js"),
  Chunk643879 = require("./643879.js"),
  Chunk484459 = require("./484459.js"),
  Chunk822857 = require("./822857.js"),
  Chunk960919 = require("./960919.js"),
  Chunk275388 = require("./275388.jsx"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk335131 = require("./335131.js"),
  Chunk1870 = require("./1870.js"),
  Chunk429368 = require("./429368.js"),
  Chunk884697 = require("./884697.js"),
  Chunk228624 = require("./228624.js"),
  Chunk635552 = require("./635552.js"),
  Chunk83479 = require("./83479.js"),
  Chunk290175 = require("./290175.js"),
  Chunk905357 = require("./905357.js"),
  Chunk724994 = require("./724994.js"),
  Chunk328456 = require("./328456.js"),
  Chunk390698 = require("./390698.jsx"),
  Chunk141011 = require("./141011.jsx"),
  Chunk525518 = require("./525518.jsx"),
  Chunk426171 = require("./426171.js"),
  Chunk224068 = require("./224068.jsx"),
  Chunk813083 = require("./813083.js"),
  Chunk680942 = require("./680942.jsx"),
  Chunk558060 = require("./558060.jsx"),
  Chunk539598 = require("./539598.jsx"),
  Chunk237031 = require("./237031.jsx"),
  Chunk372654 = require("./372654.js"),
  Chunk38914 = require("./38914.jsx"),
  Chunk262786 = require("./262786.js"),
  Chunk259673 = require("./259673.jsx"),
  Chunk508925 = require("./508925.jsx"),
  Chunk953405 = require("./953405.js"),
  Chunk453713 = require("./453713.jsx"),
  Chunk616066 = require("./616066.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk332246 = require("./332246.js"),
  Chunk58201 = require("./58201.js"),
  Chunk794324 = require("./794324.js"),
  Chunk361110 = require("./361110.js"),
  Chunk956472 = require("./956472.js"),
  Chunk832149 = require("./832149.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk785218 = require("./785218.js");

function eT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function ek(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eN = e => {
    let {
      item: t,
      user: n,
      isBundleItem: a = false
    } = e, l = i.useRef(null), o = (0, b.Z)(l);
    return (0, c.EQ)(t.type).with(d.Z.AVATAR_DECORATION, () => <div className={a ? eE.bundleAvatarPreviewContainer : eE.avatarPreviewContainer}><eh.R user={n} item={t} /></div>).with(d.Z.PROFILE_EFFECT, () => <div className={a ? eE.bundlePfxPreviewContainer : eE.pfxPreviewContainer} ref={l}><T.Z profileEffectId={t.id} isHovering={o} removeSetHeight={true} /></div>).with(d.Z.NAMEPLATE, () => <div ref={l} className={eE.nameplatePreviewContainer}><eb.Z className={eE.nameplatePreview} nameplate={t} isHighlighted={o} showPlaceholderUser={true} nameplatePreviewSize={"large"} /></div>).otherwise(() => null)
  },
  eZ = e => {
    let {
      product: t,
      user: n
    } = e, [a, l] = i.useState(0);
    i.useEffect(() => {
      let e = setInterval(() => {
        t.items.length > 0 && l(e => (e + 1) % t.items.length)
      }, 5e3);
      return () => {
        clearInterval(e)
      }
    }, [t.skuId, t.items.length, n.id]);
    let o = t.items.length;
    return <div className={eE.bundlePreviewContainer}><v.MyZ activeSlide={String(a)}>{t.items.map((e, i) => {
          let a = String(i),
            l = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(o, ")");
          return (0, r.jsx)(v.Mi4, {
            id: a,
            children: (0, r.jsxs)("div", {
              className: eE.bundlePreviewSlide,
              children: [(0, r.jsx)(eN, {
                item: e,
                user: n,
                isBundleItem: true
              }), (0, r.jsxs)(v.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: eE.bundleSlideTitle,
                children: [null == l ? true : l.name, " ", s]
              })]
            })
          }, a)
        })}</v.MyZ></div>
  },
  eA = e => {
    let {
      product: t,
      user: n
    } = e;
    return (0, G.x6)(t) ? <eZ product={t} user={n} /> : (0, ew.o0)(t.skuId) ? <ef.b animationState={"on_hover"} product={t} /> : t.items.length > 0 ? <eN item={t.items[0]} user={n} /> : null
  },
  eR = e => {
    let {
      skuId: t
    } = e;
    return t === m.a.PREMIUM_TIER_2_3_DAY ? <v.Text variant={"text-sm/normal"} className={eE.learnMoreLink}>{eS.intl.format(eS.t.Q1scdH, {
        helpdeskArticle: M.Z.getArticleURL(eC.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })}</v.Text> : null
  },
  eL = e => {
    let t, {
        product: n,
        user: a,
        category: o,
        shouldCheckoutWithOrbs: c,
        onClose: m,
        returnRef: b,
        previewingVariantIndexProps: g,
        selectedVariantIndex: j,
        tab: O
      } = e,
      {
        analyticsLocations: _
      } = (0, x.ZP)(),
      w = U.ZP.canUseCollectibles(a),
      {
        previewingVariantIndex: C
      } = g,
      y = (0, eP.N)(n, C),
      E = (0, eg.W)(n, j);
    s()(null != E, "Selected product should not be null");
    let T = (0, J.L)(n),
      {
        isPurchased: k,
        isPartiallyOwnedBundle: N
      } = (0, J.L)(E),
      {
        isDisabled: L,
        disabledReason: B
      } = (0, X.G)(E.skuId),
      D = (0, G.ne)({
        product: E,
        isPartiallyOwnedBundle: N,
        isPurchased: k
      }),
      M = (0, f.e7)([z.Z], () => z.Z.isClaiming === (null == E ? true : E.skuId)),
      W = (0, P.ZP)(),
      ee = (0, p.wj)(W),
      et = (0, G.G1)(E),
      en = (0, G.ql)(E, eC.tuJ.DEFAULT),
      ec = (null == en ? true : en.amount) === 0,
      {
        firstAvatarDecoration: eu
      } = (0, Q.Rj)(null != y ? y : E),
      em = i.useMemo(() => (0, G.BH)(E, w), [E, w]),
      {
        handleUseNow: ef,
        isApplying: eh
      } = (0, q.W)({
        product: E,
        onSuccess: m
      }),
      eb = (0, V.hv)("CollectiblesProductPreviewInfo"),
      ex = (0, Y.T)(E),
      {
        enabled: ej
      } = (0, Z.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      eN = (0, ed._)(n.eligibleOffers),
      eZ = null != eN,
      {
        checkoutEligiblePrices: eL,
        isOrbExclusive: eB,
        hasSufficientOrbs: eD
      } = (0, eO.Ip)({
        product: E,
        isPremiumUser: w,
        tab: O,
        hasDiscountOffer: eZ
      }),
      eM = i.useCallback(() => (0, I.Z)({
        skuId: E.skuId,
        analyticsLocations: _,
        variantsReturnStyle: eb,
        onClose: e => e ? m() : (0, eI.dG)()
      }), [_, m, E.skuId, eb]);
    i.useEffect(() => {
      if (null != eu) return (0, h.cV)(eu), () => (0, h.cV)(true)
    }, [eu]);
    let eU = (e, t) => {
        let n = () => {
            (0, R.qA)({
              skuId: E.skuId,
              onCheckoutSuccess: e => {
                var t;
                let {
                  entitlements: n
                } = e;
                (0, F.qg)({
                  variantsReturnStyle: eb,
                  location: "collectible_checkout_with_orb"
                }), m(), (0, e_.Z)({
                  product: E,
                  analyticsLocations: _,
                  itemConsumed: null == (t = n[0]) ? true : t.consumed,
                  purchaseType: ew.o8.ORB
                })
              },
              analyticsLocations: _
            })
          },
          i = L ? eS.intl.string(eS.t.cTdr39) : eS.intl.string(eS.t.zqh7ZG),
          a = !eD || L,
          l = eS.intl.formatToPlainString(eS.t["fNG/09"], {
            orbPrice: e.amount
          }),
          o = a ? "".concat(l, ", ").concat(i) : l;
        return <v.ua7 position={"top"} text={i} shouldShow={a} aria-label={false}>{i => (0, r.jsx)(v.zxk, ek(eT({}, i), {
            variant: t ? "primary" : "secondary",
            onClick: n,
            disabled: a,
            "aria-label": o,
            text: eS.intl.format(eS.t.kAgx5O, {
              orbPrice: e.amount,
              orbIconHook: () => (0, r.jsx)(A.Z, {
                className: eE.orbIconAligned,
                shouldUseThemeColor: a && !t
              })
            }),
            fullWidth: true
          }))}</v.ua7>
      },
      eH = (e, t) => {
        let n = !et && !ec && !u.tq && !eB && D,
          i = (0, G.x6)(E) ? eS.intl.string(eS.t.V1AWw8) : E.type === d.Z.PROFILE_EFFECT ? eS.intl.string(eS.t.kAeDcH) : E.type === d.Z.NAMEPLATE ? eS.intl.string(eS.t.H3vhqa) : eS.intl.string(eS.t.AQ0Ven);
        return eZ ? i = eS.intl.formatToPlainString(eS.t["5U5RBw"], {
          discountOfferAmount: eN
        }) : ej && (i = eS.intl.formatToPlainString(eS.t["cNSL/v"], {
          price: (0, H.T4)(e.amount, e.currency)
        })), <div className={eE.checkoutButtonsRow}>{<v.zxk variant={t ? "primary" : "secondary"} onClick={eM} text={i} fullWidth={true} />}{n && <ea.Z primary={t} product={E} onSuccess={m} />}</div>
      },
      eF = (0, K.G)(E);
    return <div className={eE.collectibleInfoContainer}>{<div className={eE.titleContainer}><ei.Z category={o} display={"modal"} /></div>}{<eA product={null != y ? y : E} user={a} />}{<div>{<div className={eE.description}>{<er.Z product={E} isDarkText={!ee} isOrbExclusive={eB} />}{<v.X6q variant={"heading-xl/extrabold"} className={eE.headingWithItemTypePill}>{ex}</v.X6q>}{<v.Text variant={"text-sm/normal"}>{eF}</v.Text>}{<eR skuId={E.skuId} />}{T.isPurchased || T.isPartiallyOwnedBundle ? <$.U className={eE.priceTag} isPartiallyPurchased={N} /> : et ? <v.Text variant={"text-md/semibold"} className={eE.priceTag}>{eS.intl.string(eS.t.rt69oq)}</v.Text> : ej ? <ep.a prices={eL} product={E} isPremiumUser={w} discount={em} hasSufficientOrbs={eD} isProductDisabled={L} discountOfferAmount={eN} /> : <div className={eE.priceTagContainer}>{<el.Z product={E} discount={em} isPremiumUser={w} hideStrikethroughPrice={!w || eZ} nitroIconType={"tooltip"} nitroIconSize={"xs"} discountOfferAmount={eN} />}{w || eZ ? null : <eo.Z product={E} />}</div>}</div>}{<v.Rny><ev.P selectedVariantIndex={j} variantGroupProduct={n} previewingVariantIndexProps={g} className={eE.variantsSwitch} /></v.Rny>}{null !== B && <v.Text variant={"text-xs/normal"} className={eE.disabledReason}>{B}</v.Text>}{<div className={eE.buttonsContainer}>{!et || w || ec ? D ? k ? (0, r.jsx)(v.zxk, {
            variant: "primary",
            onClick: ef,
            loading: eh,
            text: eS.intl.string(eS.t.MAS7uL),
            fullWidth: true
          }) : et ? (0, r.jsx)(v.zxk, {
            loading: M,
            loadingStartedLabel: eS.intl.string(eS.t["TYw+9v"]),
            loadingFinishedLabel: eS.intl.string(eS.t.Pg1UPz),
            onClick: async () => {
              await (0, F.fK)(E.skuId), m(), (0, e_.Z)({
                product: E,
                analyticsLocations: _,
                purchaseType: ew.o8.PREMIUM_PURCHASE
              })
            },
            text: eS.intl.string(eS.t.zp6caG),
            fullWidth: true
          }) : (0, r.jsx)(r.Fragment, {
            children: eL.map((e, t) => {
              let n = 0 === t;
              return e.currency === eI.pK.DISCORD_ORB ? eU(e, n) : eH(e, n)
            })
          }) : null : (t = eS.intl.string(eS.t.sEAnVF), (0, r.jsx)(S.Z, {
            subscriptionTier: ey.Si.TIER_2,
            fullWidth: true,
            textOptions: {
              textOverride: t
            },
            onClick: es.v,
            onSubscribeModalClose: () => {
              (0, es.T)({
                product: E,
                category: o,
                shouldCheckoutWithOrbs: c,
                returnRef: b,
                analyticsLocations: _
              })
            }
          }))}</div>}{<v.Text className={l()(eE.disclaimer, !ee && eE.disclaimerLight)} variant={"text-xxs/normal"}>{et && !k ? eS.intl.string(eS.t.nKdAlJ) : null}</v.Text>}</div>}</div>
  },
  eB = e => {
    let {
      user: t,
      innerClassName: n
    } = e;
    return <div className={eE.nameplateRightPanePreviewAvatarContainer}><j.Z avatar={(0, r.jsx)(v.qEK, {
          src: t.avatarSrc,
          size: v.EFr.SIZE_32,
          "aria-label": t.name,
          status: v.Skl.ONLINE
        })} name={t.name} innerClassName={l()(eE.nameplateRightPanePreviewAvatarInner, n)} /></div>
  },
  eD = e => {
    let {
      user: t,
      nameplate: n
    } = e, i = (0, y.w$)();
    return <div className={eE.nameplateRightPanePreviewContainer} role={"img"} aria-label={eS.intl.string(eS.t.SZeUdX)}><v.Rny>{<eB user={i.mallow} innerClassName={eE.userBlue} />}{<v.Text variant={"text-sm/semibold"} className={eE.namplateRightPanePreviewSectionGroup}>{eS.intl.string(eS.t["yzW/fX"])}{" - 3"}</v.Text>}{<eB user={i.phibi} innerClassName={eE.userPink} />}{<div className={eE.nameplateRightPanePreviewAvatarContainer}><eb.Z className={eE.nameplatePreview} innerClassName={eE.userPink} user={t} nameplate={n} showStatus={true} isHighlighted={true} /></div>}{<eB user={i.locke} innerClassName={eE.userPink} />}{<v.Text variant={"text-sm/semibold"} className={eE.namplateRightPanePreviewSectionGroup}>{eS.intl.string(eS.t["NG43//"])}{" - 12"}</v.Text>}{<eB user={i.boom} innerClassName={eE.userGreen} />}{<eB user={i.cherry} innerClassName={eE.userGreen} />}</v.Rny></div>
  },
  eM = e => {
    let {
      product: t,
      user: n
    } = e, i = U.ZP.canUsePremiumProfileCustomization(n), a = (0, f.cj)([L.Z], () => L.Z.getAllPending()), {
      pendingAvatar: l
    } = a, o = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(a, ["pendingAvatar"]), s = (0, k.SD)({
      userId: n.id,
      image: l
    }), c = t.type === d.Z.AVATAR_DECORATION, [u] = t.items, {
      firstAvatarDecoration: m,
      firstProfileEffect: p
    } = (0, Q.Rj)(t), v = null != p;
    return <div className={(null == u ? true : u.type) === d.Z.AVATAR_DECORATION ? eE.previewsContainerInner : eE.profileEffectPreviewsContainerInner}>{(null == u ? true : u.type) === d.Z.NAMEPLATE ? (0, r.jsx)(eD, {
        user: n,
        nameplate: u
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(E.Z, ek(eT({}, o), {
          pendingAvatar: s,
          user: n,
          canUsePremiumCustomization: i,
          pendingAvatarDecoration: m,
          pendingProfileEffectId: null == p ? true : p.id,
          disabledInputs: true,
          hideMessageInput: !v,
          hideCustomStatus: true,
          hideBioSection: c,
          hideViewFullProfileButton: true,
          interactive: false
        })), c && (0, r.jsx)(eH, {
          user: n
        })]
      })}</div>
  },
  eU = e => {
    let {
      author: t
    } = e;
    return (0, O.e5)(ek(eT({}, (0, _.ZP)({
      author: t,
      channelId: "1337",
      content: eS.intl.string(eS.t.d5YwKy)
    })), {
      state: eC.yb.SENT,
      id: "0"
    }))
  },
  eH = e => {
    let {
      user: t
    } = e, n = eU({
      author: t
    });
    return <div role={"img"} aria-label={eS.intl.string(eS.t["TN+ZvL"])}><v.Rny><v.Zbd className={eE.chatPreview} outline={true} aria-hidden={true}>{<C.Z className={eE.mockMessage} author={(0, w.ZH)(n)} message={n} />}{<div className={eE.mockInput}>{<v.oFk size={"md"} color={"currentColor"} className={eE.mockInputButton} />}{<v.EO4 size={"md"} color={"currentColor"} className={eE.mockInputButton} />}</div>}</v.Zbd></v.Rny></div>
  },
  eF = e => {
    let {
      transitionState: t,
      onClose: n,
      product: a,
      category: l,
      returnRef: o,
      analyticsSource: c,
      analyticsLocations: u,
      shouldCheckoutWithOrbs: p,
      tab: h
    } = e, b = (0, f.e7)([B.default], () => B.default.getCurrentUser()), P = (0, ej.f)(a), {
      previewingVariantIndex: j
    } = P, O = (0, f.e7)([z.Z], () => z.Z.purchases), _ = (0, W.o)(a, O), w = (0, eP.N)(a, j), C = (0, eg.W)(a, _);
    s()(null != C, "Selected product should not be null");
    let {
      analyticsLocations: y
    } = (0, x.ZP)([...u, g.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, en.u9)(C.skuId);
    let {
      pdpBackground: I,
      logo: S
    } = (0, ex.OR)(l);
    i.useEffect(() => {
      null != b && (0, N.Z)(b.id, b.getAvatarURL(true, 80))
    }, [b]);
    let E = i.useMemo(() => (0, G.jm)(a.type, a.skuId), [a.type, a.skuId]);
    i.useEffect(() => {
      D.default.track(eC.rMx.OPEN_MODAL, {
        type: eC.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: c,
        location_stack: y,
        sku_id: C.skuId,
        product_type: E
      }), C.items.forEach(F.oK)
    }, [c, y, C.skuId, C.items, E]);
    let T = (0, R.r9)(),
      k = t === v.Dvm.EXITING;
    if (null == b) return null;
    let Z = (0, ew.ZS)(l.skuId);
    return <x.Gt value={y}><v.Y0X data-migration-pending={true} hideShadow={true} className={eE.modalRoot} returnRef={o} transitionState={t} size={v.CgR.DYNAMIC} parentComponent={"CollectiblesShopProductDetailsModal"}><v.hzk data-migration-pending={true} className={eE.modalContent}>{<eL user={b} product={a} category={l} onClose={n} previewingVariantIndexProps={P} selectedVariantIndex={_} shouldCheckoutWithOrbs={p} tab={h} />}{<div className={C.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eE.fractionalNitroPreviewContainer : C.type === d.Z.AVATAR_DECORATION ? eE.collectiblePreviewsContainerWithChat : eE.collectiblePreviewsContainerNoChat}>{<ee.Z asset={I} size={(0, ec.ML)(540)} className={eE.categoryBanner} categoryBannerOverride={Z} />}{(0, ew.o0)(a.skuId) ? a.skuId === ew.Vt.ORB_PROFILE_BADGE ? T || k ? null : <em.M user={b} /> : a.skuId === m.a.PREMIUM_TIER_2_3_DAY ? <eu.q /> : <ef.b product={a} className={eE.externalProductProfilePreview} /> : <eM user={b} product={null != w ? w : C} />}{<div className={eE.profilePreviewHeader}>{<div className={eE.titleImageContainer}><img className={eE.titleImage} style={null == Z ? true : Z.pdpLogoStyle} src={S} alt={l.name} /></div>}{<div className={eE.headerButtonContainer}>{<et.n skuId={C.skuId} tab={h} />}{<v.hU aria-label={eS.intl.string(eS.t.cpT0Cg)} onClick={n} icon={v.Uz9} variant={"overlay-secondary"} size={"sm"} />}</div>}</div>}</div>}</v.hzk></v.Y0X></x.Gt>
  }