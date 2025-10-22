/** Chunk was on 64982 **/
/** chunk id: 869269, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function x(e) {
  var t, n;
  let {
    allSubscriptionListings: x,
    priceTiers: j,
    loading: v,
    error: _,
    handlePublishTier: C,
    onDeleteEditState: O
  } = e, {
    editStateId: y
  } = (0, d.N)(), E = (0, l.e7)([o.Z], () => o.Z.getSubscriptionListing(y)), N = (0, c.mY)(), I = i.useMemo(() => {
    let e = x.filter(e => e.id !== y).map(e => {
      var t;
      return null == (t = e.subscription_plans[0]) ? true : t.price
    });
    return null == j ? true : j.filter(t => !e.includes(t))
  }, [x, y, j]), S = null == E, T = null != (t = null == E ? true : E.published) && t, P = null != (n = null == E ? true : E.archived) && n;
  return (0, r.jsxs)("div", {
    className: b.body,
    children: [null != _ && (0, r.jsx)(s.M14, {
      type: "critical",
      children: _.getAnyErrorMessage()
    }), !T && !N && !P && (0, r.jsxs)("div", {
      className: b.publishListing,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          className: b.publishListingInfoHeader,
          children: h.intl.string(h.t.WOlcS8)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: h.intl.string(h.t.rMulDT)
        })]
      }), (0, r.jsx)(a.u, {
        shouldShow: S,
        text: h.intl.string(h.t.v7lRIh),
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(s.Button, {
            disabled: S,
            variant: "secondary",
            onClick: C,
            loading: v,
            text: h.intl.string(h.t.Lj6R5m)
          })
        })
      })]
    }), (0, r.jsx)(g.Z, {
      priceTiers: I
    }), (0, r.jsx)(m.Z, {
      allSubscriptionListings: x
    }), (0, r.jsx)(p.Z, {}), (0, r.jsx)(f.Z, {}), (0, r.jsx)(u.Z, {
      onDeleteEditState: O
    })]
  })
}