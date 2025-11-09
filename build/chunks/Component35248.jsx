/** Chunk was on web.js **/
/** chunk id: 35248, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => y,
  a: () => O
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk821849 = require("./821849.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk311821 = require("./311821.jsx"),
  Chunk357189 = require("./357189.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk362755 = require("./362755.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk236052 = require("./236052.js");
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
        setSelectedSkuId: v,
        browserCheckoutState: I,
        browserCheckoutStateLoadId: S,
        browserCheckoutStateSkuId: T,
        browserCheckoutStatePlanId: A,
        contextMetadata: C
      } = (0, f.JL)(),
      {
        isGift: N
      } = (0, d.wD)(),
      [R, P] = i.useState(false);
    switch (n) {
      case _.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        t = h.i$l.GOOGLE_PAY;
        break;
      case _.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
        t = h.i$l.APPLE_PAY
    }
    return i.useEffect(() => {
      let e = setTimeout(() => {
        var e;
        R || (P(true), (0, o.r5)(C.loadId), (0, u.ko)({
          planId: null != (e = null == y ? true : y.id) ? e : m.Xh.PREMIUM_MONTH_TIER_2,
          isGift: N,
          loadId: C.loadId,
          paymentMethodType: t
        }, c))
      }, b);
      return () => clearTimeout(e)
    }, [y, N, C, c, P, R, t]), i.useEffect(() => {
      null !== T && (m.YQ.includes(T) && ((0, s.GZ)(T), (0, o.jg)()), v(T)), null !== A && O(A), S === C.loadId && I === p.Y.DONE && l()
    }, [v, O, I, S, T, A, C, l]), (0, r.jsxs)("div", {
      className: E.body,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-xl/bold",
        children: g.intl.string(g.t.C4HYfy)
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        className: E.description,
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
      children: (0, r.jsxs)(a.mzw, {
        justify: l.Z.Justify.BETWEEN,
        align: l.Z.Align.CENTER,
        "data-migration-pending": true,
        children: [(0, r.jsx)(c.y, {
          onClick: t,
          children: g.intl.string(g.t["4Qvmmj"])
        }), (0, r.jsx)(c.Z, {
          onClick: n
        })]
      })
    })
  }