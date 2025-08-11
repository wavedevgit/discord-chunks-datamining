/** Chunk was on web.js **/
/** chunk id: 269210, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gm: () => m,
  Uj: () => h,
  ZI: () => p
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk708816 = require("./708816.js"),
  Chunk368072 = require("./368072.js"),
  Chunk777207 = require("./777207.js"),
  Chunk692547 = require("./692547.js"),
  Chunk330711 = require("./330711.js"),
  Chunk812743 = require("./812743.js"),
  Chunk820468 = require("./820468.js");
let _ = 48,
  p = 5;

function h(e) {
  let {
    description: t,
    imgSrc: n,
    renderPurchaseButton: i,
    onPurchase: h,
    title: m,
    onDetails: g,
    benefitItems: E,
    benefitsSummary: b,
    subtitle: y,
    maxBenefits: O = p
  } = e;
  return <a.tE><div className={o()(d.container, f.hoverCard)} tabIndex={0} onClick={() => {
        null != g ? g() : null != h && h()
      }} onKeyUp={e => {
        "Enter" === e.key && (e.stopPropagation(), e.preventDefault(), null != g ? g() : null != h && h())
      }}>{<div className={d.card}><div className={d.body}>{<l.x tag={"div"} variant={"heading-lg/semibold"}>{m}</l.x>}{<div className={d.image}>{null != n ? (0, r.jsx)("img", {
              src: n.toString(),
              alt: ""
            }) : (0, r.jsx)(s.V, {
              color: c.Z.colors.ICON_PRIMARY,
              size: "custom",
              height: _,
              width: _
            })}</div>}{null != i ? i({
            onClick: e => {
              e.stopPropagation(), null == h || h()
            }
          }) : null}{y}{null != t && "" !== t && <l.x className={d.description} color={"text-default"} variant={"text-sm/medium"}>{t}</l.x>}</div></div>}{null != b && <div className={d.benefitsSummary}><l.x color={"interactive-normal"} variant={"text-sm/medium"}>{u.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({
            count: b
          })}</l.x></div>}{null != E && E.length > 0 && <div className={d.benefits}><div className={d.benefitsContainer}><div className={d.benefitsList}>{<l.x color={"header-secondary"} variant={"eyebrow"}>{u.Z.Messages.STOREFRONT_BENEFITS_TITLE}</l.x>}{E.length > O ? <r.Fragment>{E.slice(0, O)}{<l.x variant={"text-md/semibold"} color={"text-secondary"}>{u.Z.Messages.STOREFRONT_MORE_BENEFITS.format({
                  count: E.length - O
                })}</l.x>}</r.Fragment> : E}</div></div></div>}</div></a.tE>
}

function m(e) {
  let {
    icon: t,
    header: n,
    description: i
  } = e;
  return <div className={d.cardBenefit}>{<div className={d.cardBenefitIcon}>{t}</div>}{<div>{null != n && <l.x variant={"text-md/semibold"} color={"header-primary"}>{n}</l.x>}{<l.x variant={"text-sm/normal"}>{i}</l.x>}</div>}</div>
}