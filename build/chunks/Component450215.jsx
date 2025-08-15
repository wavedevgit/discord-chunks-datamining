/** Chunk was on 6049 **/
/** chunk id: 450215, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk44315 = require("./44315.js"),
  Chunk937615 = require("./937615.js"),
  Chunk817460 = require("./817460.js"),
  Chunk584825 = require("./584825.js"),
  Chunk289393 = require("./289393.js"),
  Chunk723047 = require("./723047.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk290348 = require("./290348.js"),
  Chunk857081 = require("./857081.jsx"),
  Chunk869269 = require("./869269.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk605041 = require("./605041.js");

function C(e) {
  var t, n;
  let {
    guildId: l,
    initialEditStateId: s,
    allSubscriptionListings: C,
    priceTiers: N,
    onDeleteEditState: I,
    groupListingId: E,
    onBeforeDispatchNewListing: S,
    onAfterDispatchNewListing: T
  } = e, [P, w] = i.useState(s), R = (0, c.e7)([h.Z], () => h.Z.getSubscriptionListing(P)), Z = null == R, [D, A] = i.useState(Z), k = null == R ? true : R.subscription_plans[0], L = null != (t = null == R ? true : R.published) && t, M = null != (n = null == R ? true : R.archived) && n, G = !M && !L && true !== R, U = true === R, B = (0, f.mY)(), [F] = x._T(P), [H] = x.mR(P), [z] = x.PK(P), [W] = x.d9(P, 1024), V = "" !== F ? F : O.intl.string(O.t.QWhe9P), Y = "" !== F && null != W && "" !== z && null != H && !B, K = x.rU(P), {
    loading: q,
    error: X,
    handleCreateOrUpdateFromEditState: Q
  } = x.Xo(), {
    submitting: J,
    error: $,
    publishSubscriptionListing: ee
  } = (0, p.HQ)(), et = q || J;
  return (0, r.jsxs)("div", {
    className: y.container,
    children: [(0, r.jsxs)("div", {
      className: a()(y.header, {
        [y.headerExpanded]: D
      }),
      children: [(0, r.jsx)("div", {
        className: y.headerImageContainer,
        children: null == W ? (0, r.jsx)(j.Z, {
          className: y.starIcon,
          "aria-hidden": true
        }) : (0, r.jsx)("img", {
          className: y.headerImage,
          src: W,
          alt: V
        })
      }), (0, r.jsxs)("div", {
        className: y.headerListingInfo,
        children: [(0, r.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "interactive-active",
          children: V
        }), (0, r.jsx)(d.LZC, {
          size: 2
        }), (0, r.jsxs)("div", {
          className: y.headerDescriptionContainer,
          children: [G && (0, r.jsx)(d.IGR, {
            color: (0, u.Lq)(_.Ilk.YELLOW_300),
            text: O.intl.string(O.t.vosPk5),
            className: y.draftBadge
          }), M && (0, r.jsx)(d.IGR, {
            color: (0, u.Lq)(_.Ilk.PRIMARY_500),
            text: O.intl.string(O.t.nhbtEh),
            className: y.archivedBadge
          }), U && (0, r.jsx)(d.IGR, {
            color: (0, u.Lq)(_.Ilk.PRIMARY_500),
            text: O.intl.string(O.t.aiwXen),
            className: y.unsavedBadge
          }), null != k && (0, r.jsxs)(d.Text, {
            color: "interactive-normal",
            variant: "text-sm/normal",
            children: [(0, m.T4)(k.price, k.currency), "/", (0, g.JE)(k)]
          })]
        })]
      }), D ? (0, r.jsxs)("div", {
        className: y.headerActions,
        children: [(0, r.jsx)(d.Avr, {
          variant: "secondary",
          onClick: () => {
            x.GM(P), Z ? null == I || I() : A(false)
          },
          text: O.intl.string(O.t["ETE/oK"])
        }), (0, r.jsx)(d.zxk, {
          variant: "primary",
          onClick: () => Q({
            guildId: l,
            editStateId: P,
            groupListingId: E,
            onBeforeDispatchNewListing: S,
            onAfterDispatchNewListing: e => {
              w(e.id), null == T || T(e)
            }
          }),
          disabled: !Y || !K,
          loading: et,
          text: O.intl.string(O.t.R3BPHx)
        })]
      }) : (0, r.jsx)(d.P3F, {
        onClick: () => A(true),
        "aria-label": O.intl.string(O.t["2qPbmJ"]),
        children: (0, r.jsx)(d.vdY, {
          size: "xs",
          color: "currentColor",
          className: y.pencilIcon
        })
      })]
    }), D && (0, r.jsx)(b.I, {
      editStateId: P,
      guildId: l,
      groupListingId: E,
      children: (0, r.jsx)(v.Z, {
        allSubscriptionListings: C,
        priceTiers: N,
        loading: et,
        error: null != X ? X : $,
        handlePublishTier: () => {
          o()(null != E, "group listing doesnt exist"), o()(null != R, "subscription listing doesnt exist"), ee({
            guildId: l,
            groupListingId: E,
            listingId: R.id
          })
        },
        onDeleteEditState: I
      })
    })]
  })
}