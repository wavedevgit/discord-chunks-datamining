/** Chunk was on 39048 **/
/** chunk id: 822525, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk580630 = require("./580630.js"),
  Chunk500345 = require("./500345.js"),
  Chunk599941 = require("./599941.js"),
  Chunk636194 = require("./636194.js"),
  Chunk11351 = require("./11351.js"),
  Chunk306444 = require("./306444.jsx"),
  Chunk922975 = require("./922975.js"),
  Chunk679428 = require("./679428.jsx"),
  Chunk778526 = require("./778526.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk17149 = require("./17149.js");

function y(e) {
  var t, n;
  let {
    guildId: l,
    initialEditStateId: a,
    allSubscriptionListings: y,
    priceTiers: A,
    onDeleteEditState: E,
    groupListingId: N,
    onBeforeDispatchNewListing: S,
    onAfterDispatchNewListing: I
  } = e, [C, T] = i.useState(a), P = (0, c.bG)([f.A], () => f.A.getSubscriptionListing(C)), w = null == P, [R, D] = i.useState(w), G = null == P ? true : P.subscription_plans[0], L = null != (t = null == P ? true : P.published) && t, k = null != (n = null == P ? true : P.archived) && n, M = !k && !L && true !== P, U = true === P, B = (0, h.gN)(), [F] = x.tx(C), [H] = x.bL(C), [V] = x.I8(C), [K] = x.lK(C, 1024), z = "" !== F ? F : O.intl.string(O.t.QWhe9G), W = "" !== F && null != K && "" !== V && null != H && !B, Y = x.rf(C), {
    loading: X,
    error: J,
    handleCreateOrUpdateFromEditState: Z
  } = x.j1(), {
    submitting: Q,
    error: q,
    publishSubscriptionListing: $
  } = (0, p.Yc)(), ee = X || Q;
  return (0, r.jsxs)("div", {
    className: v.kL,
    children: [(0, r.jsxs)("div", {
      className: s()(v.wx, {
        [v.xo]: R
      }),
      children: [(0, r.jsx)("div", {
        className: v.oZ,
        children: null == K ? (0, r.jsx)(j.A, {
          className: v.wv,
          "aria-hidden": true
        }) : (0, r.jsx)("img", {
          className: v.F0,
          src: K,
          alt: z
        })
      }), (0, r.jsxs)("div", {
        className: v.me,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "interactive-text-active",
          children: z
        }), (0, r.jsx)(u.hKd, {
          size: 2
        }), (0, r.jsxs)("div", {
          className: v.Hp,
          children: [M && (0, r.jsx)(u.LpS, {
            color: d.A.unsafe_rawColors.YELLOW_300.css,
            text: O.intl.string(O.t.vosPk5),
            className: v.vW
          }), k && (0, r.jsx)(u.LpS, {
            color: d.A.unsafe_rawColors.PRIMARY_500.css,
            text: O.intl.string(O.t.nhbtEl),
            className: v.KR
          }), U && (0, r.jsx)(u.LpS, {
            color: d.A.unsafe_rawColors.PRIMARY_500.css,
            text: O.intl.string(O.t.aiwXeq),
            className: v.s7
          }), null != G && (0, r.jsxs)(u.Text, {
            color: "interactive-text-default",
            variant: "text-sm/normal",
            children: [(0, g.$g)(G.price, G.currency), "/", (0, m.cV)(G)]
          })]
        })]
      }), R ? (0, r.jsxs)("div", {
        className: v.$s,
        children: [(0, r.jsx)(u.QWc, {
          variant: "secondary",
          onClick: () => {
            x.Ts(C), w ? null == E || E() : D(false)
          },
          text: O.intl.string(O.t["ETE/oC"])
        }), (0, r.jsx)(u.Button, {
          variant: "primary",
          onClick: () => Z({
            guildId: l,
            editStateId: C,
            groupListingId: N,
            onBeforeDispatchNewListing: S,
            onAfterDispatchNewListing: e => {
              T(e.id), null == I || I(e)
            }
          }),
          disabled: !W || !Y,
          loading: ee,
          text: O.intl.string(O.t["R3BPH+"])
        })]
      }) : (0, r.jsx)(u.DUT, {
        onClick: () => D(true),
        "aria-label": O.intl.string(O.t["2qPbmO"]),
        children: (0, r.jsx)(u.R2l, {
          size: "xs",
          color: "currentColor",
          className: v.rD
        })
      })]
    }), R && (0, r.jsx)(b.A, {
      editStateId: C,
      guildId: l,
      groupListingId: N,
      children: (0, r.jsx)(_.A, {
        allSubscriptionListings: y,
        priceTiers: A,
        loading: ee,
        error: null != J ? J : q,
        handlePublishTier: () => {
          o()(null != N, "group listing doesnt exist"), o()(null != P, "subscription listing doesnt exist"), $({
            guildId: l,
            groupListingId: N,
            listingId: P.id
          })
        },
        onDeleteEditState: E
      })
    })]
  })
}