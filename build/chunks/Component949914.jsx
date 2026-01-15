/** Chunk was on web.js **/
/** chunk id: 949914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk254854 = require("./254854.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk878596 = require("./878596.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk674180 = require("./674180.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk374649 = require("./374649.js"),
  Chunk908951 = require("./908951.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk313789 = require("./313789.js"),
  Chunk342386 = require("./342386.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk853872 = require("./853872.js"),
  Chunk245950 = require("./245950.js"),
  Chunk404203 = require("./404203.jsx"),
  Chunk330181 = require("./330181.jsx"),
  Chunk954821 = require("./954821.jsx"),
  Chunk980864 = require("./980864.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk64435 = require("./64435.js");
let M = e => {
    let {
      label: t,
      value: n,
      showInfoIcon: i,
      infoIconTooltipText: a
    } = e;
    return (0, r.jsxs)("div", {
      className: j.infoCard,
      children: [(0, r.jsxs)("div", {
        className: j.infoCardLabelContainer,
        children: [(0, r.jsx)(u.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: j.infoCardLabel,
          children: t
        }), i && (0, r.jsx)(c.u, {
          text: a,
          children: (0, r.jsx)(u.d3s, {
            size: "xs",
            color: "currentColor",
            className: j.infoCardIcon
          })
        })]
      }), (0, r.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: j.infoCardValue,
        children: n
      })]
    })
  },
  k = e => {
    let {
      subscription: t
    } = e, {
      analyticsLocations: n
    } = (0, _.ZP)(), [i] = (0, b.ED)({
      subscriptionId: t.id,
      renewal: true,
      analyticsLocations: n,
      analyticsLocation: p.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), a = (0, s.e7)([T.Z], () => T.Z.hasFetchedPaymentSources);
    return null != i && a ? (0, r.jsx)(y.Z, {
      subscription: t,
      currentInvoicePreview: i,
      dropdownClassName: j.paymentSourceDropdown
    }) : (0, r.jsx)(u.$jN, {})
  },
  U = e => {
    let {
      isTrial: t,
      isCancelled: n,
      isResubscribing: i,
      shouldHideRoleSubscriptionEntryPoints: a,
      onCancelSubscriptionClick: o,
      onResubscribeClick: s,
      onChangePlanClick: l
    } = e;
    return n && (t || a) ? null : (0, r.jsx)(u.gNt, {
      label: L.intl.string(L.t["4neDM+"]),
      children: (0, r.jsx)("div", {
        className: j.__invalid_rowButtons,
        children: n ? (0, r.jsx)(u.Button, {
          variant: "primary",
          text: L.intl.string(L.t.y3mAE4),
          onClick: s,
          loading: i
        }) : (0, r.jsxs)(r.Fragment, {
          children: [!t && !a && (0, r.jsx)(h.Z, {
            label: L.intl.string(L.t.FRbWR8),
            onClick: l
          }), (0, r.jsx)(h.Z, {
            label: L.intl.string(L.t.Dx0lF7),
            onClick: o
          })]
        })
      })
    })
  },
  G = e => {
    let {
      subscription: t
    } = e, {
      listing: n,
      groupListing: a,
      guild: s,
      expanded: p,
      handleToggleExpanded: h,
      subscriptionInfo: b
    } = (0, C.Z)(t), [y, T] = i.useState(false), G = (0, m.Dt)(), {
      analyticsLocations: Z
    } = (0, _.ZP)(), {
      shouldHideGuildPurchaseEntryPoints: F
    } = (0, g.uP)(null == s ? true : s.id), B = null == t ? true : t.isPurchasedViaAppleGeneric;
    if (null == a || null == n || null == b) return null;
    let V = () => {
        null != s && ((0, O.uL)(R.Z5c.CHANNEL(s.id, D.oC.ROLE_SUBSCRIPTIONS)), (0, S.default)(), f.Z.show(R.kVF.BACK_TO_PREVIOUS_SCREEN, true, L.intl.string(L.t.DvbaM4), () => (0, I.openUserSettings)(v.n.SUBSCRIPTIONS_PANEL, {
          section: R.oAB.SUBSCRIPTIONS,
          subsection: x.cP
        })))
      },
      H = () => {
        null != s && (0, P.h)({
          groupListing: a,
          listing: n,
          subscription: t
        })
      },
      Y = async () => {
        try {
          T(true), await d.pl(t, Z), (0, w.h)()
        } finally {
          T(false)
        }
      }, {
        isCancelled: W,
        isPastDue: K,
        subscriptionPrice: z,
        memberSince: q,
        nextRenewalDate: Q,
        nextRenewalLabel: X,
        isTrial: J
      } = b, $ = n.soft_deleted || null == s || B, ee = () => p ? (0, r.jsxs)("div", {
        id: G,
        children: [(0, r.jsx)("div", {
          className: j.divider
        }), (0, r.jsx)(N.Z, {
          groupListingId: a.id,
          subscription: t,
          className: j.changePlanNotice
        }), (0, r.jsxs)("div", {
          className: j.subscriptionInfoCards,
          children: [(0, r.jsx)(M, {
            label: X,
            value: Q
          }), (0, r.jsx)(M, {
            label: L.intl.string(L.t.dltUMH),
            value: z,
            showInfoIcon: J,
            infoIconTooltipText: J ? L.intl.string(L.t["/q6fpa"]) : true
          }), (0, r.jsx)(M, {
            label: L.intl.string(L.t.AOcwWB),
            value: q
          })]
        }), (0, r.jsx)(u.LZC, {
          size: 16
        }), !W && !B && (0, r.jsx)(u.gNt, {
          label: L.intl.string(L.t.wmMFvA),
          children: (0, r.jsx)(k, {
            subscription: t
          })
        }), !$ && (0, r.jsx)(U, {
          isTrial: J,
          isCancelled: W,
          isResubscribing: y,
          shouldHideRoleSubscriptionEntryPoints: F,
          onCancelSubscriptionClick: H,
          onChangePlanClick: V,
          onResubscribeClick: Y
        })]
      }) : null, et = () => W ? (0, r.jsx)(u.IGR, {
        text: L.intl.string(L.t["7uFZGt"])
      }) : J ? (0, r.jsx)(u.IGR, {
        text: L.intl.string(L.t["6anton"]),
        color: l.Z.unsafe_rawColors.BRAND_500.css
      }) : K ? (0, r.jsx)(c.u, {
        text: L.intl.string(L.t.eSuJE2),
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(u.IGR, {
            className: j.paymentDueBadge,
            text: L.intl.string(L.t.NrRwIl),
            color: l.Z.unsafe_rawColors.YELLOW_300.css
          })
        })
      }) : null, en = () => B ? (0, r.jsx)(c.u, {
        text: L.intl.string(L.t.nv1IqK),
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(u.IGR, {
            text: L.intl.string(L.t["sBl3X/"]),
            color: l.Z.colors.BACKGROUND_MOD_MUTED.css
          })
        })
      }) : null;
    return (0, r.jsxs)("div", {
      className: j.container,
      children: [(0, r.jsx)(A.Z, {
        onClick: h,
        className: j.headerContainer,
        children: e => {
          let {
            areaRef: t,
            handleStopPropagation: i
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [null != s && (0, r.jsx)(E.Z, {
              guild: s,
              active: true,
              size: E.Z.Sizes.MEDIUM
            }), (0, r.jsxs)("div", {
              className: j.headerTextContainer,
              children: [(0, r.jsx)(u.Text, {
                variant: "text-md/medium",
                className: j.guildName,
                children: null != s ? s.name : L.intl.string(L.t["He+cmd"])
              }), (0, r.jsxs)("div", {
                className: j.headerSubtitleContainer,
                children: [(0, r.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  className: j.tierName,
                  children: n.name
                }), et(), en()]
              })]
            }), (0, r.jsx)(u.P3F, {
              onClick: i(h),
              "aria-label": L.intl.string(L.t.e5eQOy),
              "aria-controls": G,
              "aria-expanded": p,
              focusProps: {
                ringTarget: t
              },
              children: (0, r.jsx)(u.CJ0, {
                size: "md",
                color: "currentColor",
                className: o()(j.arrowIcon, {
                  [j.arrowIconExpanded]: p
                })
              })
            })]
          })
        }
      }), ee()]
    })
  }