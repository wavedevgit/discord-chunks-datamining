/** Chunk was on 64982 **/
/** chunk id: 869269, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk289393 = require("./289393.js"),
  Chunk723047 = require("./723047.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk587431 = require("./587431.jsx"),
  Chunk86126 = require("./86126.jsx"),
  Chunk880193 = require("./880193.jsx"),
  Chunk516448 = require("./516448.jsx"),
  Chunk975331 = require("./975331.jsx"),
  Chunk66972 = require("./66972.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk747805 = require("./747805.js");

function j(e) {
  var t, n;
  let {
    allSubscriptionListings: j,
    priceTiers: _,
    loading: v,
    error: C,
    handlePublishTier: O,
    onDeleteEditState: y
  } = e, {
    editStateId: N
  } = (0, d.N)(), E = (0, l.e7)([o.Z], () => o.Z.getSubscriptionListing(N)), I = (0, c.mY)(), S = i.useMemo(() => {
    let e = j.filter(e => e.id !== N).map(e => {
      var t;
      return null == (t = e.subscription_plans[0]) ? true : t.price
    });
    return null == _ ? true : _.filter(t => !e.includes(t))
  }, [j, N, _]), T = null == E, P = null != (t = null == E ? true : E.published) && t, w = null != (n = null == E ? true : E.archived) && n;
  return (0, r.jsxs)("div", {
    className: b.body,
    children: [null != C && (0, r.jsx)(u.Z, {
      children: C.getAnyErrorMessage()
    }), !P && !I && !w && (0, r.jsxs)("div", {
      className: b.publishListing,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.X6q, {
          variant: "heading-md/semibold",
          className: b.publishListingInfoHeader,
          children: x.intl.string(x.t.WOlcS0)
        }), (0, r.jsx)(a.R94, {
          type: a.R94.Types.DESCRIPTION,
          children: x.intl.string(x.t.rMulDQ)
        })]
      }), (0, r.jsx)(s.u, {
        shouldShow: T,
        text: x.intl.string(x.t.v7lRIi),
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(a.zxk, {
            disabled: T,
            variant: "secondary",
            onClick: O,
            loading: v,
            text: x.intl.string(x.t.Lj6R5u)
          })
        })
      })]
    }), (0, r.jsx)(m.Z, {
      priceTiers: S
    }), (0, r.jsx)(p.Z, {
      allSubscriptionListings: j
    }), (0, r.jsx)(f.Z, {}), (0, r.jsx)(h.Z, {}), (0, r.jsx)(g.Z, {
      onDeleteEditState: y
    })]
  })
}