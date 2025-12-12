/** Chunk was on 384 **/
/** chunk id: 869269, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk289393 = require("./289393.js"),
  Chunk723047 = require("./723047.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk86126 = require("./86126.jsx"),
  Chunk880193 = require("./880193.jsx"),
  Chunk516448 = require("./516448.jsx"),
  Chunk975331 = require("./975331.jsx"),
  Chunk231610 = require("./231610.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk747805 = require("./747805.js");

function b(e) {
  var t, n;
  let {
    allSubscriptionListings: b,
    priceTiers: j,
    loading: _,
    error: v,
    handlePublishTier: O,
    onDeleteEditState: C
  } = e, {
    editStateId: y
  } = (0, u.N)(), N = (0, l.e7)([o.Z], () => o.Z.getSubscriptionListing(y)), E = (0, c.mY)(), I = i.useMemo(() => {
    let e = b.filter(e => e.id !== y).map(e => {
      var t;
      return null == (t = e.subscription_plans[0]) ? true : t.price
    });
    return null == j ? true : j.filter(t => !e.includes(t))
  }, [b, y, j]), S = null == N, T = null != (t = null == N ? true : N.published) && t, P = null != (n = null == N ? true : N.archived) && n;
  return (0, r.jsxs)("div", {
    className: x.body,
    children: [null != v && (0, r.jsx)(a.M14, {
      type: "critical",
      children: v.getAnyErrorMessage()
    }), !T && !E && !P && (0, r.jsxs)("div", {
      className: x.publishListing,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          className: x.publishListingInfoHeader,
          children: h.intl.string(h.t.WOlcS8)
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          children: h.intl.string(h.t.rMulDT)
        })]
      }), (0, r.jsx)(s.u, {
        shouldShow: S,
        text: h.intl.string(h.t.v7lRIh),
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(a.Button, {
            disabled: S,
            variant: "secondary",
            onClick: O,
            loading: _,
            text: h.intl.string(h.t.Lj6R5m)
          })
        })
      })]
    }), (0, r.jsx)(g.Z, {
      priceTiers: I
    }), (0, r.jsx)(m.Z, {
      allSubscriptionListings: b
    }), (0, r.jsx)(p.Z, {}), (0, r.jsx)(f.Z, {}), (0, r.jsx)(d.Z, {
      onDeleteEditState: C
    })]
  })
}