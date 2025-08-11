/** Chunk was on web.js **/
/** chunk id: 623488, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk240657 = require("./240657.jsx"),
  Chunk765400 = require("./765400.js"),
  Chunk916001 = require("./916001.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk940792 = require("./940792.js");

function _(e) {
  let {
    hidePurchaseToUnlockBadge: t,
    showDraftBadge: n,
    className: i,
    children: s
  } = e;
  return <div className={o()(f.productThumbnailContainer, i)}>{s}{!t && <div className={f.purchaseToUnlockBadge}>{<a.mBM size={"xs"} className={f.lockIcon} color={"currentColor"} aria-hidden={true} />}{<a.Text variant={"text-sm/normal"} color={"always-white"} className={f.__invalid_unlockText}>{d.intl.string(d.t.YmIiSU)}</a.Text>}</div>}{n && <div className={f.draftBadge}><c.v /></div>}</div>
}

function p(e) {
  let {
    onShowFullDescription: t,
    variant: n
  } = e, i = <r.Fragment>{<a.Text variant={n} color={null != t ? "text-link" : "interactive-hover"}>{d.intl.string(d.t["5fmYjY"])}</a.Text>}{<a.ZSh size={"xs"} color={"currentColor"} className={f.arrowIcon} />}</r.Fragment>, s = e => {
    e.stopPropagation(), null != t && t()
  };
  return null == t ? <div className={f.showMoreButton}>{i}</div> : <a.P3F className={o()(f.showMoreButton, f.hasAction)} onClick={s}>{i}</a.P3F>
}

function h(e) {
  let {
    imageUrl: t,
    name: n,
    description: i,
    formattedPrice: c,
    role: h,
    ctaComponent: m,
    shouldShowFullDescriptionButton: g = true,
    onShowFullDescription: E,
    productType: b,
    onTapCard: y,
    actionMenu: O,
    showOpaqueBackground: v = false,
    hideRoleTag: I = false,
    lineClamp: T = 1,
    cardWidth: S = 332,
    cardHeight: A,
    thumbnailHeight: N = 187,
    descriptionTextVariant: C = "text-sm/normal",
    isDraft: R = false
  } = e, P = (0, s.hQ)(), w = e => {
    e.stopPropagation()
  }, D = <r.Fragment>{<_ showDraftBadge={R} hidePurchaseToUnlockBadge={true}><img alt={""} src={t} className={f.productThumbnail} style={{
          height: N
        }} /></_>}{<div className={f.productDetails}>{<div className={f.productDetailContent}>{<a.X6q variant={"text-md/medium"} color={"header-primary"} className={f.productName} id={P}>{n}</a.X6q>}{<a.Rny><l.Z variant={C} color={"text-muted"} lineClamp={T} text={i} /></a.Rny>}{g && <p onShowFullDescription={E} variant={C} />}{I || null == h || "" === h.name ? null : <r.Fragment>{<a.LZC size={16} />}{<u.Z role={h} />}</r.Fragment>}</div>}{O}</div>}{<div className={f.purchaseDetails}>{<a.Text variant={"text-md/medium"} color={"interactive-active"} className={f.__invalid_productPrice}>{null != c ? c : d.intl.string(d.t["4uLhAg"])}</a.Text>}{<a.Text variant={"text-xxs/normal"} color={"text-default"} className={f.__invalid_productType}>{b}</a.Text>}{<div className={f.productActionButton} onClick={w}>{m}</div>}</div>}</r.Fragment>;
  return null == y ? <article className={o()(f.productCard, v ? f.opaqueBackground : f.solidBackground)} aria-labelledby={P}>{D}</article> : <div style={{
      width: S,
      height: A
    }}><a.kL8 tag={"article"} aria-label={d.intl.formatToPlainString(d.t["e+TmJS"], {
        productName: n
      })} className={o()(f.productCard, v ? f.opaqueBackground : f.solidBackground, f.cardClickableContainer)} onClick={y}>{D}</a.kL8></div>
}