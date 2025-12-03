/** Chunk was on 384 **/
/** chunk id: 450215, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk937615 = require("./937615.js"),
  Chunk817460 = require("./817460.js"),
  Chunk584825 = require("./584825.js"),
  Chunk289393 = require("./289393.js"),
  Chunk723047 = require("./723047.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk290348 = require("./290348.js"),
  Chunk857081 = require("./857081.jsx"),
  Chunk869269 = require("./869269.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk605041 = require("./605041.js");

function C(e) {
  var t, n;
  let {
    guildId: l,
    initialEditStateId: s,
    allSubscriptionListings: C,
    priceTiers: y,
    onDeleteEditState: N,
    groupListingId: E,
    onBeforeDispatchNewListing: I,
    onAfterDispatchNewListing: S
  } = e, [T, P] = i.useState(s), w = (0, c.e7)([f.Z], () => f.Z.getSubscriptionListing(T)), Z = null == w, [R, D] = i.useState(Z), A = null == w ? true : w.subscription_plans[0], L = null != (t = null == w ? true : w.published) && t, k = null != (n = null == w ? true : w.archived) && n, G = !k && !L && true !== w, M = true === w, U = (0, h.mY)(), [B] = x._T(T), [F] = x.mR(T), [H] = x.PK(T), [W] = x.d9(T, 1024), z = "" !== B ? B : v.intl.string(v.t.QWhe9G), V = "" !== B && null != W && "" !== H && null != F && !U, K = x.rU(T), {
    loading: Y,
    error: q,
    handleCreateOrUpdateFromEditState: X
  } = x.Xo(), {
    submitting: J,
    error: Q,
    publishSubscriptionListing: $
  } = (0, p.HQ)(), ee = Y || J;
  return (0, r.jsxs)("div", {
    className: O.container,
    children: [(0, r.jsxs)("div", {
      className: a()(O.header, {
        [O.headerExpanded]: R
      }),
      children: [(0, r.jsx)("div", {
        className: O.headerImageContainer,
        children: null == W ? (0, r.jsx)(j.Z, {
          className: O.starIcon,
          "aria-hidden": true
        }) : (0, r.jsx)("img", {
          className: O.headerImage,
          src: W,
          alt: z
        })
      }), (0, r.jsxs)("div", {
        className: O.headerListingInfo,
        children: [(0, r.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "interactive-active",
          children: z
        }), (0, r.jsx)(d.LZC, {
          size: 2
        }), (0, r.jsxs)("div", {
          className: O.headerDescriptionContainer,
          children: [G && (0, r.jsx)(d.IGR, {
            color: u.Z.unsafe_rawColors.YELLOW_300.css,
            text: v.intl.string(v.t.vosPk5),
            className: O.draftBadge
          }), k && (0, r.jsx)(d.IGR, {
            color: u.Z.unsafe_rawColors.PRIMARY_500.css,
            text: v.intl.string(v.t.nhbtEl),
            className: O.archivedBadge
          }), M && (0, r.jsx)(d.IGR, {
            color: u.Z.unsafe_rawColors.PRIMARY_500.css,
            text: v.intl.string(v.t.aiwXeq),
            className: O.unsavedBadge
          }), null != A && (0, r.jsxs)(d.Text, {
            color: "interactive-normal",
            variant: "text-sm/normal",
            children: [(0, g.T4)(A.price, A.currency), "/", (0, m.JE)(A)]
          })]
        })]
      }), R ? (0, r.jsxs)("div", {
        className: O.headerActions,
        children: [(0, r.jsx)(d.Avr, {
          variant: "secondary",
          onClick: () => {
            x.GM(T), Z ? null == N || N() : D(false)
          },
          text: v.intl.string(v.t["ETE/oC"])
        }), (0, r.jsx)(d.Button, {
          variant: "primary",
          onClick: () => X({
            guildId: l,
            editStateId: T,
            groupListingId: E,
            onBeforeDispatchNewListing: I,
            onAfterDispatchNewListing: e => {
              P(e.id), null == S || S(e)
            }
          }),
          disabled: !V || !K,
          loading: ee,
          text: v.intl.string(v.t["R3BPH+"])
        })]
      }) : (0, r.jsx)(d.P3F, {
        onClick: () => D(true),
        "aria-label": v.intl.string(v.t["2qPbmO"]),
        children: (0, r.jsx)(d.vdY, {
          size: "xs",
          color: "currentColor",
          className: O.pencilIcon
        })
      })]
    }), R && (0, r.jsx)(b.I, {
      editStateId: T,
      guildId: l,
      groupListingId: E,
      children: (0, r.jsx)(_.Z, {
        allSubscriptionListings: C,
        priceTiers: y,
        loading: ee,
        error: null != q ? q : Q,
        handlePublishTier: () => {
          o()(null != E, "group listing doesnt exist"), o()(null != w, "subscription listing doesnt exist"), $({
            guildId: l,
            groupListingId: E,
            listingId: w.id
          })
        },
        onDeleteEditState: N
      })
    })]
  })
}