/** Chunk was on 9536 **/
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
  Chunk11413 = require("./11413.js");

function C(e) {
  var t, n;
  let {
    guildId: l,
    initialEditStateId: s,
    allSubscriptionListings: C,
    priceTiers: N,
    onDeleteEditState: E,
    groupListingId: I,
    onBeforeDispatchNewListing: S,
    onAfterDispatchNewListing: _
  } = e, [T, P] = i.useState(s), w = (0, c.e7)([b.Z], () => b.Z.getSubscriptionListing(T)), Z = null == w, [R, D] = i.useState(Z), A = null == w ? true : w.subscription_plans[0], L = null != (t = null == w ? true : w.published) && t, k = null != (n = null == w ? true : w.archived) && n, G = !k && !L && true !== w, M = true === w, U = (0, p.mY)(), [B] = x._T(T), [F] = x.mR(T), [H] = x.PK(T), [W] = x.d9(T, 1024), z = "" !== B ? B : O.intl.string(O.t.QWhe9G), V = "" !== B && null != W && "" !== H && null != F && !U, K = x.rU(T), {
    loading: Y,
    error: q,
    handleCreateOrUpdateFromEditState: J
  } = x.Xo(), {
    submitting: X,
    error: Q,
    publishSubscriptionListing: $
  } = (0, m.HQ)(), ee = Y || X;
  return (0, r.jsxs)("div", {
    className: y.container,
    children: [(0, r.jsxs)("div", {
      className: a()(y.header, {
        [y.headerExpanded]: R
      }),
      children: [(0, r.jsx)("div", {
        className: y.headerImageContainer,
        children: null == W ? (0, r.jsx)(j.Z, {
          className: y.starIcon,
          "aria-hidden": true
        }) : (0, r.jsx)("img", {
          className: y.headerImage,
          src: W,
          alt: z
        })
      }), (0, r.jsxs)("div", {
        className: y.headerListingInfo,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "interactive-text-active",
          children: z
        }), (0, r.jsx)(u.LZC, {
          size: 2
        }), (0, r.jsxs)("div", {
          className: y.headerDescriptionContainer,
          children: [G && (0, r.jsx)(u.IGR, {
            color: d.Z.unsafe_rawColors.YELLOW_300.css,
            text: O.intl.string(O.t.vosPk5),
            className: y.draftBadge
          }), k && (0, r.jsx)(u.IGR, {
            color: d.Z.unsafe_rawColors.PRIMARY_500.css,
            text: O.intl.string(O.t.nhbtEl),
            className: y.archivedBadge
          }), M && (0, r.jsx)(u.IGR, {
            color: d.Z.unsafe_rawColors.PRIMARY_500.css,
            text: O.intl.string(O.t.aiwXeq),
            className: y.unsavedBadge
          }), null != A && (0, r.jsxs)(u.Text, {
            color: "interactive-text-default",
            variant: "text-sm/normal",
            children: [(0, g.T4)(A.price, A.currency), "/", (0, f.JE)(A)]
          })]
        })]
      }), R ? (0, r.jsxs)("div", {
        className: y.headerActions,
        children: [(0, r.jsx)(u.Avr, {
          variant: "secondary",
          onClick: () => {
            x.GM(T), Z ? null == E || E() : D(false)
          },
          text: O.intl.string(O.t["ETE/oC"])
        }), (0, r.jsx)(u.Button, {
          variant: "primary",
          onClick: () => J({
            guildId: l,
            editStateId: T,
            groupListingId: I,
            onBeforeDispatchNewListing: S,
            onAfterDispatchNewListing: e => {
              P(e.id), null == _ || _(e)
            }
          }),
          disabled: !V || !K,
          loading: ee,
          text: O.intl.string(O.t["R3BPH+"])
        })]
      }) : (0, r.jsx)(u.P3F, {
        onClick: () => D(true),
        "aria-label": O.intl.string(O.t["2qPbmO"]),
        children: (0, r.jsx)(u.vdY, {
          size: "xs",
          color: "currentColor",
          className: y.pencilIcon
        })
      })]
    }), R && (0, r.jsx)(h.I, {
      editStateId: T,
      guildId: l,
      groupListingId: I,
      children: (0, r.jsx)(v.Z, {
        allSubscriptionListings: C,
        priceTiers: N,
        loading: ee,
        error: null != q ? q : Q,
        handlePublishTier: () => {
          o()(null != I, "group listing doesnt exist"), o()(null != w, "subscription listing doesnt exist"), $({
            guildId: l,
            groupListingId: I,
            listingId: w.id
          })
        },
        onDeleteEditState: E
      })
    })]
  })
}