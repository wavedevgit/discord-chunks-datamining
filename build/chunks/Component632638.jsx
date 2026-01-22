/** Chunk was on web.js **/
/** chunk id: 632638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342393 = require("./342393.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk451988 = require("./451988.js"),
  Chunk397927 = require("./397927.js"),
  Chunk102741 = require("./102741.jsx"),
  Chunk198982 = require("./198982.js"),
  Chunk136857 = require("./136857.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js");
require("./69494.jsx"), require("./482132.jsx");
var Chunk739508 = require("./739508.js"),
  Chunk927813 = require("./927813.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk676032 = require("./676032.js");
let y = new Set([Chunk166532.pn.SKU_SELECT, Chunk166532.pn.AWAITING_AUTHENTICATION, Chunk166532.pn.AWAITING_PURCHASE_TOKEN_AUTH, Chunk166532.pn.CONFIRM]);

function O(e) {
  let {
    steps: t,
    currentStep: n,
    body: s,
    overrideKey: O,
    paymentError: A,
    header: v,
    footer: S,
    isGift: I = false,
    giftMessage: T = E.intl.string(E.t["DrgnS+"]),
    hideBreadcrumbs: C = false,
    isLoading: N = false,
    purchaseError: R,
    purchaseErrorBlockRef: w,
    planError: P,
    onScroll: D,
    scrollerClassName: x,
    hasCurrencies: L = false
  } = e, j = null;
  null != A && null == (0, _.ou)(A) ? j = A : null != R ? j = R : null != P && (j = P);
  let M = null != j ? j.message : "";
  null != j && j instanceof d.Ey && (j.code === f.tG.CARD_DECLINED && L && (M += " ".concat(E.intl.string(E.t.iWvwQS))), j.code === f.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (M = E.intl.string(E.t.ypuSd8)), j.code === g.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (M = E.intl.string(E.t.mXMmWE)));
  let {
    stripe: k
  } = (0, p.P5)();
  N = N || null == k;
  let U = i.useRef(new l.Ep);
  i.useEffect(() => {
    let e = U.current;
    return null != k || e.isStarted() ? null != k && e.stop() : e.start(10 * m.A.Millis.SECOND, () => {
      let e = Error("Stripe took too long to load");
      (0, h.pM)(e)
    }), () => {
      e.stop()
    }
  }, [k]);
  let G = t.includes(_.pn.PAYMENT_TYPE) ? _.pn.PAYMENT_TYPE : _.pn.ADD_PAYMENT_STEPS;
  return (0, r.jsxs)(a.Elements, {
    options: g.XL8,
    stripe: k,
    children: [v, (0, r.jsxs)("div", {
      className: o()("paymentModalContent", b.Qs),
      children: [I && n !== _.pn.CONFIRM ? (0, r.jsx)(u.A, {
        className: b.zJ,
        iconSize: u.A.Sizes.SMALL,
        icon: c.okO,
        color: null == T ? u.A.Colors.PRIMARY : u.A.Colors.SECONDARY,
        children: T
      }) : null, C ? null : (0, r.jsx)("div", {
        className: b.QN,
        children: (0, r.jsx)(c.BIu, {
          activeId: _.ZC.has(n) ? G : n,
          breadcrumbs: t.filter(e => !_.ZC.has(e) && !y.has(e)).map(e => ({
            id: e,
            label: (0, _.Ir)(e)
          }))
        })
      }), (0, r.jsxs)("div", {
        className: b.uK,
        children: [null == j ? null : (0, r.jsx)("div", {
          className: b.Nk,
          ref: w,
          children: (0, r.jsx)(c.wx6, {
            type: "critical",
            children: M
          })
        }), N ? (0, r.jsx)(c.y$y, {
          className: b.CI
        }) : (0, r.jsx)(c.YC2, {
          className: b.C9,
          overrideKey: O,
          staticClassName: b.a2,
          animatedNodeClassName: b.L2,
          fillParent: true,
          step: n,
          steps: t,
          sideMargin: 20,
          children: (0, r.jsx)(c.ChK, {
            onScroll: D,
            className: o()(b.XG, x),
            children: s
          })
        })]
      })]
    }), S]
  })
}