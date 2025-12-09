/** Chunk was on web.js **/
/** chunk id: 185139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk575053 = require("./575053.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk609194 = require("./609194.jsx"),
  Chunk881052 = require("./881052.js"),
  Chunk128069 = require("./128069.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js");
require("./51499.jsx"), require("./614277.jsx");
var Chunk122289 = require("./122289.js"),
  Chunk70956 = require("./70956.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk987954 = require("./987954.js");
let y = new Set([Chunk409813.h8.SKU_SELECT, Chunk409813.h8.AWAITING_AUTHENTICATION, Chunk409813.h8.AWAITING_PURCHASE_TOKEN_AUTH, Chunk409813.h8.CONFIRM]);

function O(e) {
  let {
    steps: t,
    currentStep: n,
    body: o,
    overrideKey: O,
    paymentError: v,
    header: S,
    footer: I,
    isGift: T = false,
    giftMessage: A = E.intl.string(E.t["DrgnS+"]),
    hideBreadcrumbs: C = false,
    isLoading: N = false,
    purchaseError: P,
    purchaseErrorBlockRef: R,
    planError: D,
    onScroll: w,
    scrollerClassName: x,
    hasCurrencies: L = false
  } = e, j = null;
  null != v && null == (0, _.ly)(v) ? j = v : null != P ? j = P : null != D && (j = D);
  let M = null != j ? j.message : "";
  null != j && j instanceof d.HF && (j.code === f.SM.CARD_DECLINED && L && (M += " ".concat(E.intl.string(E.t.iWvwQS))), j.code === f.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (M = E.intl.string(E.t.ypuSd8)), j.code === g.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (M = E.intl.string(E.t.mXMmWE)));
  let {
    stripe: k
  } = (0, p.JL)();
  N = N || null == k;
  let U = i.useRef(new l.V7);
  i.useEffect(() => {
    let e = U.current;
    return null != k || e.isStarted() ? null != k && e.stop() : e.start(10 * h.Z.Millis.SECOND, () => {
      let e = Error("Stripe took too long to load");
      (0, m.q2)(e)
    }), () => {
      e.stop()
    }
  }, [k]);
  let G = t.includes(_.h8.PAYMENT_TYPE) ? _.h8.PAYMENT_TYPE : _.h8.ADD_PAYMENT_STEPS;
  return (0, r.jsxs)(a.Elements, {
    options: g.OBo,
    stripe: k,
    children: [S, (0, r.jsxs)("div", {
      className: s()("paymentModalContent", b.content),
      children: [T && n !== _.h8.CONFIRM ? (0, r.jsx)(u.Z, {
        className: b.paymentNote,
        iconSize: u.Z.Sizes.SMALL,
        icon: c.OgN,
        color: null == A ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
        children: A
      }) : null, C ? null : (0, r.jsx)("div", {
        className: b.breadcrumbsWrapper,
        children: (0, r.jsx)(c.OoM, {
          activeId: _.Ck.has(n) ? G : n,
          breadcrumbs: t.filter(e => !_.Ck.has(e) && !y.has(e)).map(e => ({
            id: e,
            label: (0, _.DJ)(e)
          }))
        })
      }), (0, r.jsxs)("div", {
        className: b.bodyWrapper,
        children: [null == j ? null : (0, r.jsx)("div", {
          className: b.errorBlockWrapper,
          ref: R,
          children: (0, r.jsx)(c.M14, {
            type: "critical",
            children: M
          })
        }), N ? (0, r.jsx)(c.$jN, {
          className: b.loadingBlock
        }) : (0, r.jsx)(c.qBt, {
          className: b.sequencer,
          overrideKey: O,
          staticClassName: b.sequencerStatic,
          animatedNodeClassName: b.sequencerAnimatedNode,
          fillParent: true,
          step: n,
          steps: t,
          sideMargin: 20,
          children: (0, r.jsx)(c.h21, {
            onScroll: w,
            className: s()(b.scroller, x),
            children: o
          })
        })]
      })]
    }), I]
  })
}