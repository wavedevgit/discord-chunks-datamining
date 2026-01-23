/** Chunk was on 47841 **/
/** chunk id: 778526, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
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

function x(e) {
  var t, n;
  let {
    allSubscriptionListings: x,
    priceTiers: j,
    loading: _,
    error: O,
    handlePublishTier: v,
    onDeleteEditState: y
  } = e, {
    editStateId: A
  } = (0, d.O)(), E = (0, l.bG)([o.A], () => o.A.getSubscriptionListing(A)), N = (0, c.gN)(), S = i.useMemo(() => {
    let e = x.filter(e => e.id !== A).map(e => {
      var t;
      return null == (t = e.subscription_plans[0]) ? true : t.price
    });
    return null == j ? true : j.filter(t => !e.includes(t))
  }, [x, A, j]), I = null == E, T = null != (t = null == E ? true : E.published) && t, C = null != (n = null == E ? true : E.archived) && n;
  return (0, r.jsxs)("div", {
    className: h.rf,
    children: [null != O && (0, r.jsx)(a.wx6, {
      type: "critical",
      children: O.getAnyErrorMessage()
    }), !T && !N && !C && (0, r.jsxs)("div", {
      className: h.Oy,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          className: h.Bm,
          children: b.intl.string(b.t.WOlcS8)
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          children: b.intl.string(b.t.rMulDT)
        })]
      }), (0, r.jsx)(s.m, {
        shouldShow: I,
        text: b.intl.string(b.t.v7lRIh),
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(a.Button, {
            disabled: I,
            variant: "secondary",
            onClick: v,
            loading: _,
            text: b.intl.string(b.t.Lj6R5m)
          })
        })
      })]
    }), (0, r.jsx)(g.A, {
      priceTiers: S
    }), (0, r.jsx)(m.A, {
      allSubscriptionListings: x
    }), (0, r.jsx)(p.A, {}), (0, r.jsx)(f.A, {}), (0, r.jsx)(u.A, {
      onDeleteEditState: y
    })]
  })
}