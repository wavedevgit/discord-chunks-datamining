/** Chunk was on web.js **/
/** chunk id: 949914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk722770 = require("./722770.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk254854 = require("./254854.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk377171 = require("./377171.js"),
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
  Chunk602589 = require("./602589.js");
let j = e => {
    let {
      label: t,
      value: n,
      showInfoIcon: i,
      infoIconTooltipText: a
    } = e;
    return (0, r.jsxs)("div", {
      className: k.infoCard,
      children: [(0, r.jsxs)("div", {
        className: k.infoCardLabelContainer,
        children: [(0, r.jsx)(u.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: k.infoCardLabel,
          children: t
        }), i && (0, r.jsx)(c.u, {
          text: a,
          children: (0, r.jsx)(u.d3s, {
            size: "xs",
            color: "currentColor",
            className: k.infoCardIcon
          })
        })]
      }), (0, r.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: k.infoCardValue,
        children: n
      })]
    })
  },
  U = e => {
    let {
      subscription: t
    } = e, {
      analyticsLocations: n
    } = (0, p.ZP)(), [i] = (0, y.ED)({
      subscriptionId: t.id,
      renewal: true,
      analyticsLocations: n,
      analyticsLocation: _.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), a = (0, l.e7)([A.Z], () => A.Z.hasFetchedPaymentSources);
    return null != i && a ? (0, r.jsx)(O.Z, {
      subscription: t,
      currentInvoicePreview: i,
      dropdownClassName: k.paymentSourceDropdown
    }) : (0, r.jsx)(u.$jN, {})
  },
  G = e => {
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
      label: M.intl.string(M.t["4neDM+"]),
      children: (0, r.jsx)("div", {
        className: k.__invalid_rowButtons,
        children: n ? (0, r.jsx)(u.Button, {
          variant: "primary",
          text: M.intl.string(M.t.y3mAE4),
          onClick: s,
          loading: i
        }) : (0, r.jsxs)(r.Fragment, {
          children: [!t && !a && (0, r.jsx)(m.Z, {
            label: M.intl.string(M.t.FRbWR8),
            onClick: l
          }), (0, r.jsx)(m.Z, {
            label: M.intl.string(M.t.Dx0lF7),
            onClick: o
          })]
        })
      })
    })
  },
  B = e => {
    let {
      subscription: t
    } = e, {
      listing: n,
      groupListing: a,
      guild: l,
      expanded: _,
      handleToggleExpanded: m,
      subscriptionInfo: y
    } = (0, C.Z)(t), [O, A] = i.useState(false), B = (0, g.Dt)(), {
      analyticsLocations: Z
    } = (0, p.ZP)(), {
      shouldHideGuildPurchaseEntryPoints: F
    } = (0, E.uP)(null == l ? true : l.id), V = (null == t ? true : t.paymentGateway) === D.gg$.APPLE_PARTNER;
    if (null == a || null == n || null == y) return null;
    let H = () => {
        null != l && ((0, v.uL)(D.Z5c.CHANNEL(l.id, L.oC.ROLE_SUBSCRIPTIONS)), (0, S.default)(), f.Z.show(D.kVF.BACK_TO_PREVIOUS_SCREEN, true, M.intl.string(M.t.DvbaM4), () => (0, T.openUserSettings)(I.n.SUBSCRIPTIONS_PANEL, {
          section: D.oAB.SUBSCRIPTIONS,
          subsection: x.cP
        })))
      },
      Y = () => {
        null != l && (0, P.h)({
          groupListing: a,
          listing: n,
          subscription: t
        })
      },
      W = async () => {
        try {
          A(true), await d.pl(t, Z), (0, w.h)()
        } finally {
          A(false)
        }
      }, {
        isCancelled: K,
        isPastDue: z,
        subscriptionPrice: q,
        memberSince: X,
        nextRenewalDate: Q,
        nextRenewalLabel: J,
        isTrial: $
      } = y, ee = n.soft_deleted || null == l || V, et = () => _ ? (0, r.jsxs)("div", {
        id: B,
        children: [(0, r.jsx)("div", {
          className: k.divider
        }), (0, r.jsx)(R.Z, {
          groupListingId: a.id,
          subscription: t,
          className: k.changePlanNotice
        }), (0, r.jsxs)("div", {
          className: k.subscriptionInfoCards,
          children: [(0, r.jsx)(j, {
            label: J,
            value: Q
          }), (0, r.jsx)(j, {
            label: M.intl.string(M.t.dltUMH),
            value: q,
            showInfoIcon: $,
            infoIconTooltipText: $ ? M.intl.string(M.t["/q6fpa"]) : true
          }), (0, r.jsx)(j, {
            label: M.intl.string(M.t.AOcwWB),
            value: X
          })]
        }), (0, r.jsx)(u.LZC, {
          size: 16
        }), !K && !V && (0, r.jsx)(u.gNt, {
          label: M.intl.string(M.t.wmMFvA),
          children: (0, r.jsx)(U, {
            subscription: t
          })
        }), !ee && (0, r.jsx)(G, {
          isTrial: $,
          isCancelled: K,
          isResubscribing: O,
          shouldHideRoleSubscriptionEntryPoints: F,
          onCancelSubscriptionClick: Y,
          onChangePlanClick: H,
          onResubscribeClick: W
        })]
      }) : null, en = () => K ? (0, r.jsx)(u.IGR, {
        text: M.intl.string(M.t["7uFZGt"])
      }) : $ ? (0, r.jsx)(u.IGR, {
        text: M.intl.string(M.t["6anton"]),
        color: s.Z.BRAND_500
      }) : z ? (0, r.jsx)(c.u, {
        text: M.intl.string(M.t.eSuJE2),
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(u.IGR, {
            className: k.paymentDueBadge,
            text: M.intl.string(M.t.NrRwIl),
            color: s.Z.YELLOW_300
          })
        })
      }) : null, er = () => V ? (0, r.jsx)(c.u, {
        text: M.intl.string(M.t.nv1IqK),
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(u.IGR, {
            text: M.intl.string(M.t["sBl3X/"]),
            color: h.Z.INTERACTIVE_MUTED
          })
        })
      }) : null;
    return (0, r.jsxs)("div", {
      className: k.container,
      children: [(0, r.jsx)(N.Z, {
        onClick: m,
        className: k.headerContainer,
        children: e => {
          let {
            areaRef: t,
            handleStopPropagation: i
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [null != l && (0, r.jsx)(b.Z, {
              guild: l,
              active: true,
              size: b.Z.Sizes.MEDIUM
            }), (0, r.jsxs)("div", {
              className: k.headerTextContainer,
              children: [(0, r.jsx)(u.Text, {
                variant: "text-md/medium",
                className: k.guildName,
                children: null != l ? l.name : M.intl.string(M.t["He+cmd"])
              }), (0, r.jsxs)("div", {
                className: k.headerSubtitleContainer,
                children: [(0, r.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  className: k.tierName,
                  children: n.name
                }), en(), er()]
              })]
            }), (0, r.jsx)(u.P3F, {
              onClick: i(m),
              "aria-label": M.intl.string(M.t.e5eQOy),
              "aria-controls": B,
              "aria-expanded": _,
              focusProps: {
                ringTarget: t
              },
              children: (0, r.jsx)(u.CJ0, {
                size: "md",
                color: "currentColor",
                className: o()(k.arrowIcon, {
                  [k.arrowIconExpanded]: _
                })
              })
            })]
          })
        }
      }), et()]
    })
  }