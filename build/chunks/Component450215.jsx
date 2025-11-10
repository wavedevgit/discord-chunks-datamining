/** Chunk was on 384 **/
/** chunk id: 450215, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function y(e) {
  var t, n;
  let {
    guildId: l,
    initialEditStateId: s,
    allSubscriptionListings: y,
    priceTiers: N,
    onDeleteEditState: E,
    groupListingId: I,
    onBeforeDispatchNewListing: S,
    onAfterDispatchNewListing: T
  } = e, [P, w] = i.useState(s), Z = (0, c.e7)([f.Z], () => f.Z.getSubscriptionListing(P)), R = null == Z, [D, A] = i.useState(R), L = null == Z ? true : Z.subscription_plans[0], k = null != (t = null == Z ? true : Z.published) && t, G = null != (n = null == Z ? true : Z.archived) && n, M = !G && !k && true !== Z, U = true === Z, B = (0, h.mY)(), [F] = x._T(P), [H] = x.mR(P), [W] = x.PK(P), [z] = x.d9(P, 1024), V = "" !== F ? F : O.intl.string(O.t.QWhe9G), K = "" !== F && null != z && "" !== W && null != H && !B, Y = x.rU(P), {
    loading: q,
    error: X,
    handleCreateOrUpdateFromEditState: J
  } = x.Xo(), {
    submitting: Q,
    error: $,
    publishSubscriptionListing: ee
  } = (0, p.HQ)(), et = q || Q;
  return (0, r.jsxs)("div", {
    className: C.container,
    children: [(0, r.jsxs)("div", {
      className: a()(C.header, {
        [C.headerExpanded]: D
      }),
      children: [(0, r.jsx)("div", {
        className: C.headerImageContainer,
        children: null == z ? (0, r.jsx)(j.Z, {
          className: C.starIcon,
          "aria-hidden": true
        }) : (0, r.jsx)("img", {
          className: C.headerImage,
          src: z,
          alt: V
        })
      }), (0, r.jsxs)("div", {
        className: C.headerListingInfo,
        children: [(0, r.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "interactive-active",
          children: V
        }), (0, r.jsx)(d.LZC, {
          size: 2
        }), (0, r.jsxs)("div", {
          className: C.headerDescriptionContainer,
          children: [M && (0, r.jsx)(d.IGR, {
            color: (0, u.Lq)(v.Ilk.YELLOW_300),
            text: O.intl.string(O.t.vosPk5),
            className: C.draftBadge
          }), G && (0, r.jsx)(d.IGR, {
            color: (0, u.Lq)(v.Ilk.PRIMARY_500),
            text: O.intl.string(O.t.nhbtEl),
            className: C.archivedBadge
          }), U && (0, r.jsx)(d.IGR, {
            color: (0, u.Lq)(v.Ilk.PRIMARY_500),
            text: O.intl.string(O.t.aiwXeq),
            className: C.unsavedBadge
          }), null != L && (0, r.jsxs)(d.Text, {
            color: "interactive-normal",
            variant: "text-sm/normal",
            children: [(0, g.T4)(L.price, L.currency), "/", (0, m.JE)(L)]
          })]
        })]
      }), D ? (0, r.jsxs)("div", {
        className: C.headerActions,
        children: [(0, r.jsx)(d.Avr, {
          variant: "secondary",
          onClick: () => {
            x.GM(P), R ? null == E || E() : A(false)
          },
          text: O.intl.string(O.t["ETE/oC"])
        }), (0, r.jsx)(d.Button, {
          variant: "primary",
          onClick: () => J({
            guildId: l,
            editStateId: P,
            groupListingId: I,
            onBeforeDispatchNewListing: S,
            onAfterDispatchNewListing: e => {
              w(e.id), null == T || T(e)
            }
          }),
          disabled: !K || !Y,
          loading: et,
          text: O.intl.string(O.t["R3BPH+"])
        })]
      }) : (0, r.jsx)(d.P3F, {
        onClick: () => A(true),
        "aria-label": O.intl.string(O.t["2qPbmO"]),
        children: (0, r.jsx)(d.vdY, {
          size: "xs",
          color: "currentColor",
          className: C.pencilIcon
        })
      })]
    }), D && (0, r.jsx)(b.I, {
      editStateId: P,
      guildId: l,
      groupListingId: I,
      children: (0, r.jsx)(_.Z, {
        allSubscriptionListings: y,
        priceTiers: N,
        loading: et,
        error: null != X ? X : $,
        handlePublishTier: () => {
          o()(null != I, "group listing doesnt exist"), o()(null != Z, "subscription listing doesnt exist"), ee({
            guildId: l,
            groupListingId: I,
            listingId: Z.id
          })
        },
        onDeleteEditState: E
      })
    })]
  })
}