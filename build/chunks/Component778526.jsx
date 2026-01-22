/** Chunk was on 47841 **/
/** chunk id: 778526, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk636194 = require("./636194.js"),
  Chunk11351 = require("./11351.js"),
  Chunk306444 = require("./306444.jsx"),
  Chunk652056 = require("./652056.jsx"),
  Chunk930657 = require("./930657.jsx"),
  Chunk4600 = require("./4600.jsx"),
  Chunk964758 = require("./964758.jsx"),
  Chunk57731 = require("./57731.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk275316 = require("./275316.js");

function h(e) {
  var t, n;
  let {
    allSubscriptionListings: h,
    priceTiers: j,
    loading: O,
    error: y,
    handlePublishTier: v,
    onDeleteEditState: A
  } = e, {
    editStateId: E
  } = (0, d.O)(), N = (0, l.bG)([c.A], () => c.A.getSubscriptionListing(E)), _ = (0, o.gN)(), S = i.useMemo(() => {
    let e = h.filter(e => e.id !== E).map(e => {
      var t;
      return null == (t = e.subscription_plans[0]) ? true : t.price
    });
    return null == j ? true : j.filter(t => !e.includes(t))
  }, [h, E, j]), T = null == N, I = null != (t = null == N ? true : N.published) && t, C = null != (n = null == N ? true : N.archived) && n;
  return (0, r.jsxs)("div", {
    className: x.rf,
    children: [null != y && (0, r.jsx)(a.wx6, {
      type: "critical",
      children: y.getAnyErrorMessage()
    }), !I && !_ && !C && (0, r.jsxs)("div", {
      className: x.Oy,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          className: x.Bm,
          children: p.intl.string(p.t.WOlcS8)
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          children: p.intl.string(p.t.rMulDT)
        })]
      }), (0, r.jsx)(s.m, {
        shouldShow: T,
        text: p.intl.string(p.t.v7lRIh),
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(a.Button, {
            disabled: T,
            variant: "secondary",
            onClick: v,
            loading: O,
            text: p.intl.string(p.t.Lj6R5m)
          })
        })
      })]
    }), (0, r.jsx)(f.A, {
      priceTiers: S
    }), (0, r.jsx)(g.A, {
      allSubscriptionListings: h
    }), (0, r.jsx)(b.A, {}), (0, r.jsx)(m.A, {}), (0, r.jsx)(u.A, {
      onDeleteEditState: A
    })]
  })
}