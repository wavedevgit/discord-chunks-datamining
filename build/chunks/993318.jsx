/** Chunk was on 86653 **/
/** chunk id: 993318, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  AnnouncementModal: () => O,
  WrappedAnnouncementModal: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk313201 = require("./313201.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk688465 = require("./688465.jsx"),
  Chunk794231 = require("./794231.js"),
  Chunk543936 = require("./543936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk418822 = require("./418822.js"),
  Chunk6210 = require("./6210.js"),
  Chunk313460 = require("./313460.js"),
  Chunk686936 = require("./686936.js"),
  Chunk326238 = require("./326238.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = a[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let Chunk450390 = require("./450390.js"),
  C = e => {
    var t, a;
    return <s.zx{...t = x({}, e), a = a = {
      "aria-label": p.intl.string(p.t.cpT0Cg),
      look: s.zx.Looks.BLANK,
      size: s.zx.Sizes.NONE,
      children: (0, r.jsx)("img", {
        src: j,
        alt: "Close Modal",
        className: f.closeButtonIcon
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        a.push.apply(a, r)
      }
      return a
    })(Object(a)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
    }), t} />
  },
  y = e => {
    let {
      animatedAssetURL: t,
      staticAssetURL: a,
      className: s
    } = e;
    return (0, c.e7)([o.Z], () => o.Z.useReducedMotion) || null == t ? <img src={a} className={s} alt={""} /> : <i.Z autoPlay={true} loop={true} className={s}><source src={t} type={"video/webm"} /></i.Z>
  },
  N = e => {
    let {
      header: t,
      subHeader: a,
      staticAsset: s,
      animatedAsset: c
    } = e;
    return <div className={f.featureCard}>{<y staticAssetURL={s} animatedAssetURL={c} className={f.orbAsset} />}{<div className={f.featureCardTextGroup}>{<n.X6q variant={"heading-md/extrabold"} className={f.featureCardTextHeader}>{t}</n.X6q>}{<div className={f.featureCardTextSubHeader}>{a}</div>}</div>}</div>
  },
  O = e => {
    let {
      onClose: t,
      ctaOnClick: a,
      transitionState: s
    } = e, c = (0, d.Dt)(), {
      showBetaTag: o
    } = u.Z.useExperiment({
      location: "virtual_currency_announcement_modal_v2"
    }), i = [{
      header: p.intl.string(p.t["2Nvn8/"]),
      subHeader: p.intl.string(p.t.F1lGFx),
      staticAsset: _.Z
    }, {
      header: p.intl.string(p.t["1IEs7+"]),
      subHeader: p.intl.string(p.t.mej05u),
      staticAsset: g.Z
    }];
    return <n.Y0X className={f.root} transitionState={s} aria-labelledby={c} data-migration-pending={true} hideShadow={true} parentComponent={"AnnouncementModalV2"}>{<C className={f.closeButton} onClick={t} />}{<y staticAssetURL={m.Z} animatedAssetURL={h.Z} className={f.heroAsset} />}{<n.hzk className={f.content}>{<div className={f.headerContainer}>{<n.X6q variant={"display-md"} className={f.header}>{p.intl.string(p.t.XKlAys)}</n.X6q>}{o && <l.Z className={f.betaBadge} />}</div>}{<n.X6q variant={"heading-lg/semibold"} className={f.subHeader}>{p.intl.string(p.t.icWQKi)}</n.X6q>}{i.length > 0 && <div className={f.featureCardGroup}>{i.map((e, t) => (0, r.jsx)(N, x({}, e), "".concat(e.header, "_").concat(t)))}</div>}{<n.gtL onClick={a} color={f.buttonColor} className={f.button}>{p.intl.string(p.t.ynollp)}</n.gtL>}</n.hzk>}</n.Y0X>
  },
  v = e => <b.x errorSource={"ORBS_ANNOUNCEMENT_MODAL"}><O{...x({}, e)} /></b.x>