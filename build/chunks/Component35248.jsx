/** Chunk was on web.js **/
/** chunk id: 35248, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => I,
  a: () => T
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk772848 = require("./772848.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk821849 = require("./821849.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk311821 = require("./311821.jsx"),
  Chunk591759 = require("./591759.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk362755 = require("./362755.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk940667 = require("./940667.js");
let O = 1e3;

function v(e, t, n, r, i) {
  let s = g.ANM.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n, i),
    l = new URL(f.Z.makeUrl(g.Z5c.BILLING_LOGIN_HANDOFF)),
    c = (0, o.Z)();
  return l.searchParams.append("handoff_key", c), l.searchParams.append("redirect_to", s), a.tn.post({
    url: g.ANM.HANDOFF,
    body: {
      key: c
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    l.searchParams.append("handoff_token", e.body.handoff_token), window.open(l.href)
  }, () => {
    r()
  })
}
let I = e => {
    let t, {
        step: n,
        onPurchaseComplete: o,
        onHandoffFailure: a
      } = e,
      {
        selectedPlan: u,
        setSelectedPlanId: d,
        setSelectedSkuId: f,
        browserCheckoutState: I,
        browserCheckoutStateLoadId: T,
        browserCheckoutStateSkuId: S,
        browserCheckoutStatePlanId: A,
        contextMetadata: N
      } = (0, p.JL)(),
      {
        isGift: C
      } = (0, _.wD)(),
      [R, P] = i.useState(false);
    switch (n) {
      case h.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        t = g.i$l.GOOGLE_PAY;
        break;
      case h.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
        t = g.i$l.APPLE_PAY
    }
    return i.useEffect(() => {
      let e = setTimeout(() => {
        var e;
        R || (P(true), (0, l.r5)(N.loadId), v(null != (e = null == u ? true : u.id) ? e : E.Xh.PREMIUM_MONTH_TIER_2, C, N.loadId, a, t))
      }, O);
      return () => clearTimeout(e)
    }, [u, C, N, a, P, R, t]), i.useEffect(() => {
      null !== S && (E.YQ.includes(S) && ((0, c.GZ)(S), (0, l.jg)()), f(S)), null !== A && d(A), T === N.loadId && I === m.Y.DONE && o()
    }, [f, d, I, T, S, A, N, o]), (0, r.jsxs)("div", {
      className: y.body,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-xl/bold",
        children: b.intl.string(b.t.C4HYf3)
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        className: y.description,
        children: b.intl.string(b.t.xfG7Ji)
      })]
    })
  },
  T = e => {
    let {
      onPrimaryClick: t,
      onBackClick: n
    } = e;
    return (0, r.jsx)("div", {
      children: (0, r.jsxs)(s.mzw, {
        justify: u.Z.Justify.BETWEEN,
        align: u.Z.Align.CENTER,
        "data-migration-pending": true,
        children: [(0, r.jsx)(d.y, {
          onClick: t,
          children: b.intl.string(b.t["4Qvmmp"])
        }), (0, r.jsx)(d.Z, {
          onClick: n
        })]
      })
    })
  }