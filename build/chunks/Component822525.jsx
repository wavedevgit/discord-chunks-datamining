/** Chunk was on 47841 **/
/** chunk id: 822525, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
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

function A(e) {
  var t, n;
  let {
    guildId: l,
    initialEditStateId: a,
    allSubscriptionListings: A,
    priceTiers: E,
    onDeleteEditState: N,
    groupListingId: _,
    onBeforeDispatchNewListing: S,
    onAfterDispatchNewListing: T
  } = e, [I, C] = i.useState(a), P = (0, o.bG)([m.A], () => m.A.getSubscriptionListing(I)), w = null == P, [R, D] = i.useState(w), G = null == P ? true : P.subscription_plans[0], L = null != (t = null == P ? true : P.published) && t, k = null != (n = null == P ? true : P.archived) && n, M = !k && !L && true !== P, U = true === P, F = (0, p.gN)(), [B] = h.tx(I), [H] = h.bL(I), [V] = h.I8(I), [K] = h.lK(I, 1024), z = "" !== B ? B : y.intl.string(y.t.QWhe9G), Y = "" !== B && null != K && "" !== V && null != H && !F, W = h.rf(I), {
    loading: X,
    error: J,
    handleCreateOrUpdateFromEditState: Z
  } = h.j1(), {
    submitting: Q,
    error: q,
    publishSubscriptionListing: $
  } = (0, b.Yc)(), ee = X || Q;
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
            text: y.intl.string(y.t.vosPk5),
            className: v.vW
          }), k && (0, r.jsx)(u.LpS, {
            color: d.A.unsafe_rawColors.PRIMARY_500.css,
            text: y.intl.string(y.t.nhbtEl),
            className: v.KR
          }), U && (0, r.jsx)(u.LpS, {
            color: d.A.unsafe_rawColors.PRIMARY_500.css,
            text: y.intl.string(y.t.aiwXeq),
            className: v.s7
          }), null != G && (0, r.jsxs)(u.Text, {
            color: "interactive-text-default",
            variant: "text-sm/normal",
            children: [(0, f.$g)(G.price, G.currency), "/", (0, g.cV)(G)]
          })]
        })]
      }), R ? (0, r.jsxs)("div", {
        className: v.$s,
        children: [(0, r.jsx)(u.QWc, {
          variant: "secondary",
          onClick: () => {
            h.Ts(I), w ? null == N || N() : D(false)
          },
          text: y.intl.string(y.t["ETE/oC"])
        }), (0, r.jsx)(u.Button, {
          variant: "primary",
          onClick: () => Z({
            guildId: l,
            editStateId: I,
            groupListingId: _,
            onBeforeDispatchNewListing: S,
            onAfterDispatchNewListing: e => {
              C(e.id), null == T || T(e)
            }
          }),
          disabled: !Y || !W,
          loading: ee,
          text: y.intl.string(y.t["R3BPH+"])
        })]
      }) : (0, r.jsx)(u.DUT, {
        onClick: () => D(true),
        "aria-label": y.intl.string(y.t["2qPbmO"]),
        children: (0, r.jsx)(u.R2l, {
          size: "xs",
          color: "currentColor",
          className: v.rD
        })
      })]
    }), R && (0, r.jsx)(x.A, {
      editStateId: I,
      guildId: l,
      groupListingId: _,
      children: (0, r.jsx)(O.A, {
        allSubscriptionListings: A,
        priceTiers: E,
        loading: ee,
        error: null != J ? J : q,
        handlePublishTier: () => {
          c()(null != _, "group listing doesnt exist"), c()(null != P, "subscription listing doesnt exist"), $({
            guildId: l,
            groupListingId: _,
            listingId: P.id
          })
        },
        onDeleteEditState: N
      })
    })]
  })
}