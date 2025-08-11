/** Chunk was on 59207 **/
/** chunk id: 435626, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk821982 = require("./821982.js"),
  Chunk125988 = require("./125988.js"),
  Chunk228624 = require("./228624.js"),
  Chunk267097 = require("./267097.js"),
  Chunk109213 = require("./109213.js"),
  Chunk626135 = require("./626135.js"),
  Chunk333867 = require("./333867.jsx"),
  Chunk963249 = require("./963249.js"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk184575 = require("./184575.js"),
  Chunk476945 = require("./476945.js"),
  Chunk945182 = require("./945182.js");

function v(t) {
  let {
    analyticsLocations: e,
    transitionState: n,
    onClose: o,
    giftRecipient: i,
    analyticsObject: c
  } = t;
  return (0, s.ZP)(() => {
    y.default.track(m.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
      location: c,
      location_stack: e
    })
  }), <a.Fragment>{<I />}{<r.Y0X size={r.CgR.DYNAMIC} transitionState={n} className={b.modalRoot} parentComponent={"GiftCategorySelectModal"}>{<r.xBx className={b.header} separator={false}>{<r.vwX tag={r.RB0.H4}>{T.intl.string(T.t.YBGjsr)}</r.vwX>}{<r.olH onClick={() => {
            y.default.track(m.rMx.MODAL_DISMISSED, {
              type: m.jXE.GIFT_CATEGORY_SELECT_MODAL,
              location_object: m.qAy.BUTTON_CTA
            }), o()
          }} className={b.cursorPointer} />}</r.xBx>}{<r.hzk className={b.modalContent}><N analyticsLocations={e} giftRecipient={i} analyticsObject={c} onClose={o} /></r.hzk>}</r.Y0X>}</a.Fragment>
}
let I = () => ((0, Chunk267097.Z)(), null);

function N(t) {
  let {
    giftRecipient: e,
    analyticsObject: n,
    onClose: o
  } = t, {
    showBothNitroSkusInCategorySelect: s
  } = j.G.useExperiment({
    location: "gift-button"
  }, {
    autoTrackExposure: false
  }), u = (0, _.hv)("CategoryButtons"), {
    analyticsLocations: d
  } = (0, l.ZP)(c.Z.GIFT_CATEGORY_SELECT_MODAL), p = t => {
    t && o()
  }, g = t => {
    var a, o;
    let i = m.Qqv.NITRO_SKU_SELECTION;
    t === x.Si.TIER_2 ? i = m.Qqv.NITRO_STANDARD : t === x.Si.TIER_0 && (i = m.Qqv.NITRO_BASIC), (0, h.Z)({
      isGift: true,
      giftRecipient: e,
      giftingOrigin: x.Wt.DM_CHANNEL,
      initialPlanId: null,
      analyticsLocations: d,
      subscriptionTier: t,
      analyticsObject: (a = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), a.forEach(function(e) {
            var a;
            a = n[e], e in t ? Object.defineProperty(t, e, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = a
          })
        }
        return t
      }({}, n), o = o = {
        section: m.jXE.GIFT_CATEGORY_SELECT_MODAL,
        object: m.qAy.GIFT_CATEGORY_OPTION,
        objectType: i
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          n.push.apply(n, a)
        }
        return n
      })(Object(o)).forEach(function(t) {
        Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(o, t))
      }), a),
      onClose: p
    })
  };
  return <a.Fragment>{<r.P3F onClick={() => g(s ? x.Si.TIER_2 : true)}><div className={i()(b.categoryButton, b.nitroButton)}>{<r.Text variant={"display-sm"} color={"always-white"} className={b.buttonText}>{T.intl.string(T.t["lG6a5+"])}</r.Text>}{<S imageType={0} />}</div></r.P3F>}{s && <r.P3F onClick={() => g(x.Si.TIER_0)}><div className={i()(b.nitroBasicButton, b.categoryButton)}>{<r.Text variant={"display-sm"} color={"always-white"} className={b.buttonText}>{T.intl.string(T.t["t9uG/v"])}</r.Text>}{<S imageType={1} />}</div></r.P3F>}{<r.P3F onClick={() => {
        (0, O.Z)({
          isGift: true,
          giftingOrigin: x.Wt.DM_CHANNEL,
          analyticsLocations: d,
          analyticsObject: n,
          giftRecipient: e,
          onClose: p,
          variantsReturnStyle: u
        })
      }}><div className={i()(b.shopButton, b.categoryButton)}>{<r.Text variant={"display-sm"} color={"always-white"} className={b.buttonText}>{T.intl.string(T.t.gFlB9f)}</r.Text>}{<S imageType={2} />}</div></r.P3F>}</a.Fragment>
}

function S(t) {
  let {
    imageType: e
  } = t, {
    avatarPlaceholderSrc: n
  } = (0, p.Z)({
    size: (0, u.y9)(r.EFr.SIZE_80)
  }), o = (0, d.Z)("a_c3cffc19e9784f7d0b005eecdf1b566e", r.EFr.SIZE_80, false);
  return 0 === e || 1 === e ? <div className={b.wumpusImageContainer}><r.Eep src={1 === e ? E : C} mediaLayoutType={f.hV.RESPONSIVE} width={122} height={110} zoomable={false} /></div> : 2 === e ? <div className={b.shopImageContainer}><r.qEK src={n} avatarDecoration={o} size={r.EFr.SIZE_80} aria-hidden={true} /></div> : true
}