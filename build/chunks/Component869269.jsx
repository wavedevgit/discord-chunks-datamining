/** Chunk was on 29679 **/
/** chunk id: 869269, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk289393 = require("./289393.js"),
  Chunk723047 = require("./723047.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk587431 = require("./587431.jsx"),
  Chunk86126 = require("./86126.jsx"),
  Chunk880193 = require("./880193.jsx"),
  Chunk516448 = require("./516448.jsx"),
  Chunk975331 = require("./975331.jsx"),
  Chunk231610 = require("./231610.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk851016 = require("./851016.js"),
  Chunk992983 = require("./992983.js");

function j(e) {
  var t, n;
  let {
    allSubscriptionListings: j,
    priceTiers: v,
    loading: _,
    error: O,
    handlePublishTier: y,
    onDeleteEditState: C
  } = e, {
    editStateId: N
  } = (0, c.N)(), E = (0, l.e7)([a.Z], () => a.Z.getSubscriptionListing(N)), I = (0, o.mY)(), S = i.useMemo(() => {
    let e = j.filter(e => e.id !== N).map(e => {
      var t;
      return null == (t = e.subscription_plans[0]) ? true : t.price
    });
    return null == v ? true : v.filter(t => !e.includes(t))
  }, [j, N, v]), T = null == E, P = null != (t = null == E ? true : E.published) && t, w = null != (n = null == E ? true : E.archived) && n;
  return (0, r.jsxs)("div", {
    className: x.body,
    children: [null != O && (0, r.jsx)(d.Z, {
      children: O.getAnyErrorMessage()
    }), !P && !I && !w && (0, r.jsxs)("div", {
      className: x.publishListing,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-md/semibold",
          className: x.publishListingInfoHeader,
          children: h.intl.string(h.t.WOlcS0)
        }), (0, r.jsx)(s.R94, {
          type: s.R94.Types.DESCRIPTION,
          children: h.intl.string(h.t.rMulDQ)
        })]
      }), (0, r.jsx)(s.ua7, {
        shouldShow: T,
        tooltipClassName: b.autoWidth,
        text: h.intl.string(h.t.v7lRIi),
        children: e => {
          var t, n;
          return (0, r.jsx)("div", (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, e), n = n = {
            children: (0, r.jsx)(s.zxk, {
              disabled: T,
              variant: "secondary",
              onClick: y,
              loading: _,
              text: h.intl.string(h.t.Lj6R5u)
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      })]
    }), (0, r.jsx)(m.Z, {
      priceTiers: S
    }), (0, r.jsx)(g.Z, {
      allSubscriptionListings: j
    }), (0, r.jsx)(p.Z, {}), (0, r.jsx)(f.Z, {}), (0, r.jsx)(u.Z, {
      onDeleteEditState: C
    })]
  })
}