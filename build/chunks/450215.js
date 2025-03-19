/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => E
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(512722),
  o = n.n(l),
  c = n(442837),
  A = n(481060),
  d = n(44315),
  u = n(937615),
  g = n(817460),
  f = n(584825),
  m = n(289393),
  p = n(723047),
  h = n(727843),
  C = n(290348),
  b = n(857081),
  v = n(869269),
  x = n(981631),
  N = n(388032),
  j = n(174032);

function E(e) {
  var t, n;
  let {
    guildId: s,
    initialEditStateId: l,
    allSubscriptionListings: E,
    priceTiers: I,
    onDeleteEditState: O,
    groupListingId: y,
    onBeforeDispatchNewListing: w,
    onAfterDispatchNewListing: P
  } = e, [B, D] = i.useState(l), T = (0, c.e7)([m.Z], () => m.Z.getSubscriptionListing(B)), S = null == T, [L, R] = i.useState(S), Q = null == T ? void 0 : T.subscription_plans[0], Z = null !== (t = null == T ? void 0 : T.published) && void 0 !== t && t, W = null !== (n = null == T ? void 0 : T.archived) && void 0 !== n && n, k = !W && !Z && void 0 !== T, M = void 0 === T, _ = (0, p.mY)(), [G] = C._T(B), [F] = C.mR(B), [U] = C.PK(B), [H] = C.d9(B, 1024), z = "" !== G ? G : N.NW.string(N.t.QWhe9P), X = "" !== G && null != H && "" !== U && null != F && !_, Y = C.rU(B), {
    loading: K,
    error: V,
    handleCreateOrUpdateFromEditState: J
  } = C.Xo(), {
    submitting: q,
    error: $,
    publishSubscriptionListing: ee
  } = (0, f.HQ)(), et = K || q;
  return (0, r.jsxs)("div", {
    className: j.container,
    children: [(0, r.jsxs)("div", {
      className: a()(j.header, {
        [j.headerExpanded]: L
      }),
      children: [(0, r.jsx)("div", {
        className: j.headerImageContainer,
        children: null == H ? (0, r.jsx)(b.Z, {
          className: j.starIcon,
          "aria-hidden": !0
        }) : (0, r.jsx)("img", {
          className: j.headerImage,
          src: H,
          alt: z
        })
      }), (0, r.jsxs)("div", {
        className: j.headerListingInfo,
        children: [(0, r.jsx)(A.Text, {
          variant: "text-md/medium",
          color: "interactive-active",
          children: z
        }), (0, r.jsx)(A.LZC, {
          size: 2
        }), (0, r.jsxs)("div", {
          className: j.headerDescriptionContainer,
          children: [k && (0, r.jsx)(A.IGR, {
            color: (0, d.Lq)(x.Ilk.YELLOW_300),
            text: N.NW.string(N.t.vosPk5),
            className: j.draftBadge
          }), W && (0, r.jsx)(A.IGR, {
            color: (0, d.Lq)(x.Ilk.PRIMARY_500),
            text: N.NW.string(N.t.nhbtEh),
            className: j.archivedBadge
          }), M && (0, r.jsx)(A.IGR, {
            color: (0, d.Lq)(x.Ilk.PRIMARY_500),
            text: N.NW.string(N.t.aiwXen),
            className: j.unsavedBadge
          }), null != Q && (0, r.jsxs)(A.Text, {
            color: "interactive-normal",
            variant: "text-sm/normal",
            children: [(0, u.T4)(Q.price, Q.currency), "/", (0, g.JE)(Q)]
          })]
        })]
      }), L ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(A.zxk, {
          look: A.zxk.Looks.BLANK,
          className: j.cancel,
          onClick: () => {
            C.GM(B), S ? null == O || O() : R(!1)
          },
          children: N.NW.string(N.t["ETE/oK"])
        }), (0, r.jsx)(A.zxk, {
          onClick: () => J({
            guildId: s,
            editStateId: B,
            groupListingId: y,
            onBeforeDispatchNewListing: w,
            onAfterDispatchNewListing: e => {
              D(e.id), null == P || P(e)
            }
          }),
          disabled: !X || !Y,
          className: j.autoWidth,
          submitting: et,
          children: N.NW.string(N.t.R3BPHx)
        })]
      }) : (0, r.jsx)(A.P3F, {
        onClick: () => R(!0),
        "aria-label": N.NW.string(N.t["2qPbmJ"]),
        children: (0, r.jsx)(A.vdY, {
          size: "xs",
          color: "currentColor",
          className: j.pencilIcon
        })
      })]
    }), L && (0, r.jsx)(h.I, {
      editStateId: B,
      guildId: s,
      groupListingId: y,
      children: (0, r.jsx)(v.Z, {
        allSubscriptionListings: E,
        priceTiers: I,
        loading: et,
        error: null != V ? V : $,
        handlePublishTier: () => {
          o()(null != y, "group listing doesnt exist"), o()(null != T, "subscription listing doesnt exist"), ee({
            guildId: s,
            groupListingId: y,
            listingId: T.id
          })
        },
        onDeleteEditState: O
      })
    })]
  })
}