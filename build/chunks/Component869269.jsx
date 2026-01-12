/** Chunk was on 9536 **/
/** chunk id: 869269, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
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
  Chunk252154 = require("./252154.js");

function x(e) {
  var t, n;
  let {
    allSubscriptionListings: x,
    priceTiers: j,
    loading: v,
    error: O,
    handlePublishTier: y,
    onDeleteEditState: C
  } = e, {
    editStateId: N
  } = (0, d.N)(), E = (0, l.e7)([o.Z], () => o.Z.getSubscriptionListing(N)), I = (0, c.mY)(), S = i.useMemo(() => {
    let e = x.filter(e => e.id !== N).map(e => {
      var t;
      return null == (t = e.subscription_plans[0]) ? true : t.price
    });
    return null == j ? true : j.filter(t => !e.includes(t))
  }, [x, N, j]), _ = null == E, T = null != (t = null == E ? true : E.published) && t, P = null != (n = null == E ? true : E.archived) && n;
  return (0, r.jsxs)("div", {
    className: h.body,
    children: [null != O && (0, r.jsx)(s.M14, {
      type: "critical",
      children: O.getAnyErrorMessage()
    }), !T && !I && !P && (0, r.jsxs)("div", {
      className: h.publishListing,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          className: h.publishListingInfoHeader,
          children: p.intl.string(p.t.WOlcS8)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: p.intl.string(p.t.rMulDT)
        })]
      }), (0, r.jsx)(a.u, {
        shouldShow: _,
        text: p.intl.string(p.t.v7lRIh),
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(s.Button, {
            disabled: _,
            variant: "secondary",
            onClick: y,
            loading: v,
            text: p.intl.string(p.t.Lj6R5m)
          })
        })
      })]
    }), (0, r.jsx)(g.Z, {
      priceTiers: S
    }), (0, r.jsx)(m.Z, {
      allSubscriptionListings: x
    }), (0, r.jsx)(f.Z, {}), (0, r.jsx)(b.Z, {}), (0, r.jsx)(u.Z, {
      onDeleteEditState: C
    })]
  })
}