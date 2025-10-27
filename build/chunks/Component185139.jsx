/** Chunk was on web.js **/
/** chunk id: 185139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk289008 = require("./289008.js"),
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
    header: I,
    footer: T,
    isGift: S = false,
    giftMessage: A = E.intl.string(E.t["DrgnS+"]),
    hideBreadcrumbs: C = false,
    isLoading: N = false,
    purchaseError: R,
    purchaseErrorBlockRef: P,
    planError: D,
    onScroll: w,
    scrollerClassName: L,
    hasCurrencies: x = false
  } = e, M = null;
  null != v && null == (0, p.ly)(v) ? M = v : null != R ? M = R : null != D && (M = D);
  let k = null != M ? M.message : "";
  null != M && M instanceof d.HF && (M.code === f.SM.CARD_DECLINED && x && (k += " ".concat(E.intl.string(E.t.iWvwQS))), M.code === f.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (k = E.intl.string(E.t.ypuSd8)), M.code === g.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (k = E.intl.string(E.t.mXMmWE)));
  let {
    stripe: j
  } = (0, _.JL)();
  N = N || null == j;
  let U = i.useRef(new l.V7);
  i.useEffect(() => {
    let e = U.current;
    return null != j || e.isStarted() ? null != j && e.stop() : e.start(10 * m.Z.Millis.SECOND, () => {
      let e = Error("Stripe took too long to load");
      (0, h.q2)(e)
    }), () => {
      e.stop()
    }
  }, [j]);
  let G = t.includes(p.h8.PAYMENT_TYPE) ? p.h8.PAYMENT_TYPE : p.h8.ADD_PAYMENT_STEPS;
  return (0, r.jsxs)(a.Elements, {
    options: g.OBo,
    stripe: j,
    children: [I, (0, r.jsxs)("div", {
      className: s()("paymentModalContent", b.content),
      children: [S && n !== p.h8.CONFIRM ? (0, r.jsx)(u.Z, {
        className: b.paymentNote,
        iconSize: u.Z.Sizes.SMALL,
        icon: c.OgN,
        color: null == A ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
        children: A
      }) : null, C ? null : (0, r.jsx)("div", {
        className: b.breadcrumbsWrapper,
        children: (0, r.jsx)(c.OoM, {
          activeId: p.Ck.has(n) ? G : n,
          breadcrumbs: t.filter(e => !p.Ck.has(e) && !y.has(e)).map(e => ({
            id: e,
            label: (0, p.DJ)(e)
          }))
        })
      }), (0, r.jsxs)("div", {
        className: b.bodyWrapper,
        children: [null == M ? null : (0, r.jsx)("div", {
          className: b.errorBlockWrapper,
          ref: P,
          children: (0, r.jsx)(c.M14, {
            type: "critical",
            children: k
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
            className: s()(b.scroller, L),
            children: o
          })
        })]
      })]
    }), T]
  })
}