/** Chunk was on web.js **/
/** chunk id: 617745, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => O,
  t: () => y
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk73825 = require("./73825.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk683433 = require("./683433.jsx"),
  Chunk36167 = require("./36167.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk814626 = require("./814626.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk926701 = require("./926701.js");
let b = 1e3,
  y = e => {
    let t, {
        step: n,
        onPurchaseComplete: l,
        onHandoffFailure: c
      } = e,
      {
        selectedPlan: y,
        setSelectedPlanId: O,
        setSelectedSkuId: A,
        browserCheckoutState: v,
        browserCheckoutStateLoadId: S,
        browserCheckoutStateSkuId: I,
        browserCheckoutStatePlanId: T,
        contextMetadata: C
      } = (0, f.P5)(),
      {
        isGift: N
      } = (0, d.Pv)(),
      [R, w] = i.useState(false);
    switch (n) {
      case p.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        t = h.do8.GOOGLE_PAY;
        break;
      case p.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
        t = h.do8.APPLE_PAY
    }
    return i.useEffect(() => {
      let e = setTimeout(() => {
        var e;
        R || (w(true), (0, s.Ze)(C.loadId), (0, u.my)({
          planId: null != (e = null == y ? true : y.id) ? e : m.gD.PREMIUM_MONTH_TIER_2,
          isGift: N,
          loadId: C.loadId,
          paymentMethodType: t
        }, c))
      }, b);
      return () => clearTimeout(e)
    }, [y, N, C, c, w, R, t]), i.useEffect(() => {
      null !== I && (m.oz.includes(I) && ((0, o.ur)(I), (0, s.hP)()), A(I)), null !== T && O(T), S === C.loadId && v === _.k.DONE && l()
    }, [A, O, v, S, I, T, C, l]), (0, r.jsxs)("div", {
      className: E.r,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-xl/bold",
        children: g.intl.string(g.t.C4HYfy)
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        className: E.h,
        children: g.intl.string(g.t.xfG7Jp)
      })]
    })
  },
  O = e => {
    let {
      onPrimaryClick: t,
      onBackClick: n
    } = e;
    return (0, r.jsx)("div", {
      children: (0, r.jsxs)(a.jlY, {
        justify: l.A.Justify.BETWEEN,
        align: l.A.Align.CENTER,
        "data-migration-pending": true,
        children: [(0, r.jsx)(c.F, {
          onClick: t,
          children: g.intl.string(g.t["4Qvmmj"])
        }), (0, r.jsx)(c.A, {
          onClick: n
        })]
      })
    })
  }