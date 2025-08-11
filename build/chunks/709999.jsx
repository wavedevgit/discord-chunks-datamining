/** Chunk was on 32104 **/
/** chunk id: 709999, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => ef,
  d: () => ec
}), require("./388685.js"), require("./314940.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk873546 = require("./873546.js"),
  Chunk180650 = require("./180650.js"),
  Chunk979554 = require("./979554.js"),
  Chunk399606 = require("./399606.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk333867 = require("./333867.jsx"),
  Chunk767714 = require("./767714.js"),
  Chunk876917 = require("./876917.js"),
  Chunk210887 = require("./210887.js"),
  Chunk822857 = require("./822857.js"),
  Chunk960919 = require("./960919.js"),
  Chunk275388 = require("./275388.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk335131 = require("./335131.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk1870 = require("./1870.js"),
  Chunk429368 = require("./429368.js"),
  Chunk884697 = require("./884697.js"),
  Chunk664018 = require("./664018.js"),
  Chunk228624 = require("./228624.js"),
  Chunk635552 = require("./635552.js"),
  Chunk290175 = require("./290175.js"),
  Chunk905357 = require("./905357.js"),
  Chunk724994 = require("./724994.js"),
  Chunk297651 = require("./297651.js"),
  Chunk390698 = require("./390698.jsx"),
  Chunk813083 = require("./813083.js"),
  Chunk680942 = require("./680942.jsx"),
  Chunk558060 = require("./558060.jsx"),
  Chunk237031 = require("./237031.jsx"),
  Chunk262786 = require("./262786.js"),
  Chunk508925 = require("./508925.jsx"),
  Chunk306092 = require("./306092.jsx"),
  Chunk453713 = require("./453713.jsx"),
  Chunk616066 = require("./616066.jsx"),
  Chunk216541 = require("./216541.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk67409 = require("./67409.js"),
  Chunk58201 = require("./58201.js"),
  Chunk201964 = require("./201964.js"),
  Chunk361110 = require("./361110.js"),
  Chunk956472 = require("./956472.js"),
  Chunk832149 = require("./832149.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk33588 = require("./33588.js");

function eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = i[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let ed = e => {
    let {
      profileEffectId: t,
      isHighlighted: i,
      isPurchased: l
    } = e;
    return <div className={ea.profileEffectShopPreview}><C.Z profileEffectId={t} isHovering={i} isPurchased={l && !i} removeSetHeight={true} /></div>
  },
  eu = e => {
    let {
      isHighlighted: t,
      isPurchased: i,
      user: l,
      item: n
    } = e;
    return <div className={ea.avatarContainer}><K.R item={n} user={l} isPurchased={i} isHighlighted={t} /></div>
  },
  ec = e => {
    let {
      showStatus: t,
      width: i,
      opacity: l
    } = e;
    return <div className={s()(ea.nameplatePreviewSampleItem, ea.placeholderItem)} style={{
        opacity: l
      }}>{<g.qEK src={null} size={g.EFr.SIZE_32} status={t ? el.Skl.ONLINE : true} statusColor={"var(--border-subtle)"} aria-hidden={true} imageClassName={ea.nameplatePlaceholderAvatar} />}{<div className={ea.placeholderBar} style={{
          maxWidth: null != i ? i : "100px"
        }} />}</div>
  },
  ep = e => {
    let {
      user: t,
      nameplate: i,
      isHighlighted: l,
      isPurchased: n
    } = e;
    return <div className={ea.nameplatePreviewRootContainer}><div className={ea.nameplatePreviewList}>{<div className={ea.fadeIn}>{<ec showStatus={true} width={94} opacity={.7} />}{<ec showStatus={true} width={110} opacity={.85} />}</div>}{<X.Z user={t} nameplate={i} className={ea.nameplatePreviewSampleItem} isHighlighted={l} showPlaceholderUser={!l} showStatus={true} isPurchased={n} />}{<div className={ea.fadeOut}>{<ec showStatus={true} width={110} opacity={.85} />}{<ec showStatus={true} width={94} opacity={.7} />}</div>}</div></div>
  },
  eg = e => {
    let {
      tab: t,
      selectedProduct: i,
      cardRef: l,
      children: n
    } = e, {
      handleCardVisibilityChange: s
    } = (0, B.E)(i.skuId, t === er.AW.CATALOG ? "full" : t);
    return <p.$ innerRef={l} onChange={s} threshold={0}>{n}</p.$>
  },
  eh = 12633 == require.j ? Chunk73800.memo(function(e) {
    var {
      tab: t,
      product: i,
      onMount: n,
      _isInHeroBlock: s = false
    } = e, a = function(e, t) {
      if (null == e) return {};
      var i, r, l = function(e, t) {
        if (null == e) return {};
        var i, r, l = {},
          n = Object.keys(e);
        for (r = 0; r < n.length; r++) i = n[r], t.indexOf(i) >= 0 || (l[i] = e[i]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for (r = 0; r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i])
      }
      return l
    }(e, ["tab", "product", "onMount", "_isInHeroBlock"]);
    let o = (0, c.e7)([S.Z], () => S.Z.purchases),
      d = (0, T.o)(i, o),
      u = (0, J.W)(i, d),
      p = l.useRef(null),
      {
        previewingVariantIndex: g,
        handleEntering: h,
        handleLeaving: m
      } = (0, ee.f)(i),
      v = (0, $.o)(i, o, g);
    return l.useEffect(() => {
      null == n || n(p, i)
    }, [n, i]), <eg tab={t} selectedProduct={u} cardRef={p}><ev{...eo({
        tab: t,
        product: i,
        selectedVariantIndex: d,
        selectedProduct: u,
        cardRef: p,
        previewingVariantIndex: g,
        handleEntering: h,
        handleLeaving: m,
        firstCollectibleItem: v,
        _isInHeroBlock: s
      }, a)} /></eg>
  }) : null;

function em(e) {
  let {
    product: t,
    tab: i,
    selectedProduct: l,
    selectedVariantIndex: n,
    cardRef: s,
    analyticsLocations: a,
    buildHandlePreviewClick: d,
    isPremiumUser: p,
    isPremiumProduct: h,
    isPurchased: m,
    isPartiallyOwnedBundle: f,
    isDisabled: C,
    discount: _
  } = e, j = (0, A.sp)(), T = (0, k.rN)(t), [L, R] = (0, c.Wu)([S.Z], () => [S.Z.isClaiming === t.skuId, null != S.Z.isClaiming && S.Z.isClaiming !== t.skuId]), Z = (0, N.hv)("CollectiblesShopTallCard"), W = (0, k.XM)(l, p, false), B = (0, k.ne)({
    product: l,
    isPartiallyOwnedBundle: f,
    isPurchased: m
  }), {
    enabled: M
  } = (0, b.WX)({
    location: "collectibles_shop_tall_card"
  }), {
    handleUseNow: z,
    isApplying: V
  } = (0, w.W)({
    product: l
  }), q = d(v.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), K = (0, F._)(t.eligibleOffers), Q = null != K, {
    displayPrices: X,
    checkoutEligiblePrices: J,
    isOrbExclusive: $,
    shouldCheckoutWithOrbs: ee,
    hasSufficientOrbs: eo
  } = (0, et.Ip)({
    product: t,
    isPremiumUser: p,
    tab: i,
    hasDiscountOffer: Q
  });
  if (0 === X.length) return null;
  let ed = () => <div className={ea.hoverUpsellContainer}><y.Z fullWidth={true} className={ea.__invalid_premiumSubscribeButton} disabled={R} onClick={e => e.stopPropagation()} textOptions={{
          textOverride: es.intl.string(es.t.sEAnVF)
        }} subscriptionTier={en.Si.TIER_2} /></div>,
    eu = () => <g.zxk variant={"primary"} onClick={e => {
        e.stopPropagation(), q(e)
      }} text={es.intl.string(es.t.FdGl5O)} fullWidth={true} />,
    ec = () => {
      let e = () => {
          O.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == j ? true : j.sessionId,
            sku_id: t.skuId,
            page_type: i,
            page_section: null == j ? true : j.pageSection,
            page_category: i === er.AW.HOME || null == j ? true : j.pageCategory,
            page_index: i === er.AW.CATALOG ? null == j ? true : j.pageIndex : true,
            page_size: i === er.AW.CATALOG ? null == j ? true : j.pageSize : true,
            tile_type: u.Z[t.type],
            tile_position: String(null == j ? true : j.tilePosition),
            cta_name: "buy button"
          }), (0, x.Z)({
            skuId: (0, Y.S)({
              product: t,
              selectedVariantIndex: n
            }),
            analyticsLocations: a,
            returnRef: s,
            variantsReturnStyle: Z
          })
        },
        l = Q ? es.intl.formatToPlainString(es.t["5U5RBw"], {
          discountOfferAmount: K
        }) : es.intl.formatToPlainString(es.t["cNSL/v"], {
          price: W
        });
      return <g.zxk variant={"primary"} onClick={t => {
          t.stopPropagation(), e()
        }} text={l} fullWidth={true} />
    },
    ep = () => {
      let e = () => {
        O.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == j ? true : j.sessionId,
          sku_id: t.skuId,
          page_type: i,
          page_section: null == j ? true : j.pageSection,
          page_category: i === er.AW.HOME || null == j ? true : j.pageCategory,
          page_index: i === er.AW.CATALOG ? null == j ? true : j.pageIndex : true,
          page_size: i === er.AW.CATALOG ? null == j ? true : j.pageSize : true,
          tile_type: u.Z[t.type],
          tile_position: String(null == j ? true : j.tilePosition),
          cta_name: "claim with orbs button"
        }), (0, E.qA)({
          skuId: (0, Y.S)({
            product: t,
            selectedVariantIndex: n
          }),
          onCheckoutSuccess: e => {
            var i;
            let {
              entitlements: r
            } = e;
            (0, I.qg)({
              variantsReturnStyle: Z,
              location: "collectible_checkout_with_orb"
            }), (0, ei.Z)({
              product: t,
              analyticsLocations: a,
              itemConsumed: null == (i = r[0]) ? true : i.consumed,
              purchaseType: er.o8.ORB
            })
          },
          analyticsLocations: a
        })
      };
      return <g.zxk variant={"primary"} text={es.intl.format(es.t.kAgx5O, {
          orbPrice: J[0].amount,
          orbIconHook: () => (0, r.jsx)(P.Z, {
            className: ea.orbIconAligned
          })
        })} onClick={t => {
          t.stopPropagation(), e()
        }} aria-label={es.intl.formatToPlainString(es.t["fNG/09"], {
          orbPrice: J[0].amount
        })} fullWidth={true} />
    },
    eg = () => {
      let e = async () => {
        O.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == j ? true : j.sessionId,
          sku_id: t.skuId,
          page_type: i,
          page_section: null == j ? true : j.pageSection,
          page_category: i === er.AW.HOME || null == j ? true : j.pageCategory,
          page_index: i === er.AW.CATALOG ? null == j ? true : j.pageIndex : true,
          page_size: i === er.AW.CATALOG ? null == j ? true : j.pageSize : true,
          tile_type: u.Z[t.type],
          tile_position: String(null == j ? true : j.tilePosition),
          cta_name: "claim premium product button"
        }), await (0, I.fK)(t.skuId), (0, ei.Z)({
          product: t,
          analyticsLocations: a,
          purchaseType: er.o8.PREMIUM_PURCHASE
        })
      };
      return <g.zxk variant={"primary"} onClick={t => {
          t.stopPropagation(), e()
        }} disabled={R} loading={L} loadingStartedLabel={es.intl.string(es.t["TYw+9v"])} loadingFinishedLabel={es.intl.string(es.t.Pg1UPz)} text={es.intl.string(es.t.zp6caG)} fullWidth={true} />
    },
    eh = () => <g.zxk variant={"primary"} onClick={e => {
        e.stopPropagation(), z()
      }} loading={V} text={es.intl.string(es.t.MAS7uL)} fullWidth={true} />,
    em = () => <g.zxk variant={"primary"} onClick={e => {
        e.stopPropagation(), q(e)
      }} text={es.intl.string(es.t.GpnHfH)} fullWidth={true} />;
  return <div className={ea.detailsWrapper}>{<div className={ea.innerBlur}>{C ? (0, r.jsx)(g.Text, {
        tag: "div",
        variant: "heading-md/semibold",
        color: "header-muted",
        className: ea.priceTag,
        children: es.intl.string(es.t.wu4gyc)
      }) : m || f ? (0, r.jsx)(H.U, {
        className: ea.priceTag,
        isPartiallyPurchased: f
      }) : h ? (0, r.jsx)(g.Text, {
        variant: "text-md/semibold",
        className: ea.priceTag,
        children: es.intl.string(es.t.rt69oq)
      }) : M ? (0, r.jsx)(U.e, {
        displayPrices: X,
        isPremiumUser: p,
        discount: _,
        hasSufficientOrbs: eo,
        discountOfferAmount: K
      }) : (0, r.jsx)(D.Z, {
        product: l,
        discount: _,
        isPremiumUser: p,
        className: ea.priceTag,
        hideStrikethroughPrice: true,
        nitroIconType: "default",
        nitroIconSize: "md",
        discountOfferAmount: K
      })}</div>}{<div className={ea.innerHover}><div className={ea.buttonsContainer}>{(() => {
          if (h && !p && !T) return ed();
          if (!B || C) return eu();
          if (m) return eh();
          if (h) return eg();
          if (ee)
            if (eo) return ep();
            else return eu();
          return i === er.AW.ORBS ? em() : ec()
        })()}{h || o.tq || $ || !B || i === er.AW.ORBS ? null : T ? <g.hU variant={"primary"} aria-label={es.intl.string(es.t.SKNnqq)} icon={g.tEF} onClick={e => {
            e.stopPropagation(), q(e)
          }} /> : <A.k0 newValue={{
            pageCategory: i === er.AW.HOME || null == j ? true : j.pageCategory
          }}><G.Z primary={true} product={t} selectedVariantIndex={n} returnRef={s} tooltipDelay={250} /></A.k0>}</div></div>}</div>
}
let ev = 12633 == require.j ? Chunk73800.memo(function(e) {
    let {
      product: t,
      user: i,
      category: n,
      tab: o,
      cardRef: p,
      selectedProduct: x,
      firstCollectibleItem: y,
      selectedVariantIndex: C,
      handleEntering: b,
      handleLeaving: P,
      previewingVariantIndex: E,
      className: I,
      _isInHeroBlock: S = false
    } = e, {
      analyticsLocations: T
    } = (0, f.ZP)([v.Z.COLLECTIBLES_SHOP_CARD]), N = (0, A.sp)(), w = (0, h.Z)(p), [B, H] = l.useState(false), G = w || B, D = (0, Z.T)(t), F = (0, c.e7)([m.Z], () => m.Z.useReducedMotion), U = j.ZP.canUseCollectibles(i), K = l.useMemo(() => (0, k.BH)(t, U), [t, U]), X = (0, k.G1)(t), Y = (0, c.e7)([_.Z], () => (0, g.wjy)(_.Z.theme)), J = (0, k.Yq)(t.skuId), $ = n.skuId === d.T.ANIME_V3 && (0, k.WW)(t.skuId), {
      hoverVariant: ee
    } = (0, L.E)("CollectiblesShopTallCard"), {
      isPurchased: ei,
      isPartiallyOwnedBundle: en
    } = (0, W.L)(x), {
      isDisabled: ec
    } = (0, R.G)(x.skuId), eg = null !== E ? E : C, [eh, ev] = l.useState(false), ef = l.useCallback(function(e, t, l) {
      let n = arguments.length > 3 && true !== arguments[3] && arguments[3];
      return (0, a.EQ)(e.type).with(u.Z.PROFILE_EFFECT, () => <ed isHighlighted={t} profileEffectId={e.id} isPurchased={l && !n} />).with(u.Z.AVATAR_DECORATION, () => <eu item={e} user={i} isHighlighted={t} isPurchased={l} />).with(u.Z.NAMEPLATE, () => <ep user={i} nameplate={e} isHighlighted={t} isPurchased={l} />).otherwise(() => null)
    }, [i]);
    l.useEffect(() => {
      let {
        current: e
      } = p;
      if (null == e) return;
      let t = () => H(true),
        i = t => {
          e.contains(t.relatedTarget) || H(false)
        };
      return e.addEventListener("focusin", t), e.addEventListener("focusout", i), e.blur(), () => {
        e.removeEventListener("focusin", t), e.removeEventListener("focusout", i)
      }
    }, [p]);
    let ex = l.useRef(null),
      {
        displayPrices: ey,
        isOrbExclusive: eC
      } = (0, et.oo)({
        product: t,
        isPremiumUser: U,
        tab: o
      }),
      e_ = l.useCallback(e => i => {
        let r = (0, et.oQ)({
          product: t
        });
        ex.current = i.currentTarget, O.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == N ? true : N.sessionId,
          sku_id: t.skuId,
          page_type: o,
          page_section: null == N ? true : N.pageSection,
          page_category: o === er.AW.HOME ? true : n.name,
          page_index: o === er.AW.CATALOG ? null == N ? true : N.pageIndex : true,
          page_size: o === er.AW.CATALOG ? null == N ? true : N.pageSize : true,
          tile_type: u.Z[t.type],
          tile_position: String(null == N ? true : N.tilePosition),
          cta_name: null
        }), (0, z.T)({
          product: t,
          category: n,
          shouldCheckoutWithOrbs: r,
          analyticsLocations: T,
          analyticsSource: e,
          returnRef: ex,
          tab: o
        })
      }, [t, n, o, T, N]),
      eb = e_(v.Z.COLLECTIBLES_SHOP_CARD);
    return 0 === ey.length || (0, k.x6)(t) && null != K && K.discountPercentage < 0 ? null : <g.tEY><g.kL8 className={s()(I, Y ? ea.shopCardDark : ea.shopCard, {
          [ea.partiallyOwned]: en && !G,
          [ea.shopCardAnimation]: !F && ee !== L.D.NO_MOVEMENT,
          [Y ? ea.shopCardDarkHighlighted : ea.shopCardHighlighted]: G
        })} ref={p} onClick={eb} aria-label={t.name}>{X && <g.ua7 tooltipContentClassName={ea.premiumWheelTooltipContent} color={g.ua7.Colors.PRIMARY} text={es.intl.string(es.t.nKdAlJ)}>{e => {
            var t, i;
            return (0, r.jsx)(g.IGR, (t = eo({}, e), i = i = {
              className: ea.premiumWheelBadge,
              text: (0, r.jsx)(g.SrA, {
                size: "md",
                color: "currentColor",
                className: ea.premiumWheel
              })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var i = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                i.push.apply(i, r)
              }
              return i
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }), t))
          }}</g.ua7>}{<M.Z category={n} className={ea.limitedTimeBadge} display={"card"} />}{en || ei || !J ? eC ? <g.IGR text={es.intl.string(es.t["0TmQRE"])} disableColor={true} className={ea.badge} /> : $ ? <g.IGR text={es.intl.string(es.t.S6kE9v)} disableColor={true} className={ea.badge} /> : null : <g.IGR text={es.intl.string(es.t.y2b7CA)} disableColor={true} className={ea.badge} />}{<div className={ea.preview}>{(0, a.EQ)(t.type).with(u.Z.PROFILE_EFFECT, u.Z.AVATAR_DECORATION, u.Z.NAMEPLATE, () => ef(y, G, ei)).with(u.Z.BUNDLE, () => (0, r.jsx)(Q.d, {
            product: t,
            user: i,
            isPurchased: ei,
            isHighlighted: G
          })).with(u.Z.VARIANTS_GROUP, () => {
            if (null == t.variants || 0 === t.variants.length) return null;
            let e = t.variants[eg];
            if (null == e) return null;
            let [i] = e.items;
            return ef(i, G, ei, eh)
          }).with(u.Z.EXTERNAL_SKU, () => (0, r.jsx)(V.b, {
            product: t,
            animationState: G ? "on" : "off",
            className: ec || ei && !G ? ea.externalProductDimmed : true
          })).otherwise(() => null)}</div>}{(() => {
          let e = ei ? g.sV5 : ec ? g.mBM : null;
          return null == e ? null : <div className={ea.cardStateIconWrapper}><e size={"custom"} color={"currentColor"} width={38} height={38} className={s()(ea.cardStateIcon, {
                [ea.checkmark]: ei
              })} /></div>
        })()}{<div className={s()(ea.cardText, Y ? ea.darkCardBackground : ea.lightCardBackground, {
            [ea.variantsGroup]: t.type === u.Z.VARIANTS_GROUP
          })}>{<g.X6q variant={"text-lg/bold"} className={ea.productName}>{D}</g.X6q>}{t.type === u.Z.VARIANTS_GROUP ? <q.P variantGroupProduct={t} previewingVariantIndexProps={{
              previewingVariantIndex: E,
              handleEntering: b,
              handleLeaving: P
            }} selectedVariantIndex={C} setIsHoveringOnSwitch={ev} minimal={!G} alternativeBackgroundColor={(null == y ? true : y.type) === u.Z.PROFILE_EFFECT} /> : null}{<em product={t} tab={o} buildHandlePreviewClick={e_} selectedProduct={x} selectedVariantIndex={C} cardRef={p} analyticsLocations={T} isPremiumUser={U} isPremiumProduct={X} isPartiallyOwnedBundle={en} isPurchased={ei} isDisabled={ec} discount={K} />}</div>}</g.kL8></g.tEY>
  }) : null,
  ef = 12633 == require.j ? eh : null