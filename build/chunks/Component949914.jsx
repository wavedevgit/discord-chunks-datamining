/** Chunk was on web.js **/
/** chunk id: 949914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => F
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk722770 = require("./722770.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk37234 = require("./37234.js"),
  Chunk254854 = require("./254854.js"),
  Chunk230711 = require("./230711.js"),
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

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let G = e => {
    let {
      label: t,
      value: n,
      showInfoIcon: i,
      infoIconTooltipText: a
    } = e;
    return (0, r.jsxs)("div", {
      className: L.infoCard,
      children: [(0, r.jsxs)("div", {
        className: L.infoCardLabelContainer,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-deprecated-12/semibold",
          className: L.infoCardLabel,
          children: t
        }), i && (0, r.jsx)(c.ua7, {
          clickableOnMobile: true,
          text: a,
          children: e => (0, r.jsx)(c.d3s, U(M({
            size: "xs",
            color: "currentColor"
          }, e), {
            className: L.infoCardIcon
          }))
        })]
      }), (0, r.jsx)(c.X6q, {
        variant: "heading-xl/semibold",
        className: L.infoCardValue,
        children: n
      })]
    })
  },
  B = e => {
    let {
      subscription: t
    } = e, {
      analyticsLocations: n
    } = (0, h.ZP)(), [i] = (0, O.ED)({
      subscriptionId: t.id,
      renewal: true,
      analyticsLocations: n,
      analyticsLocation: p.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), a = (0, l.e7)([T.Z], () => T.Z.hasFetchedPaymentSources);
    return null != i && a ? (0, r.jsx)(v.Z, {
      subscription: t,
      currentInvoicePreview: i,
      dropdownClassName: L.paymentSourceDropdown
    }) : (0, r.jsx)(c.$jN, {})
  },
  Z = e => {
    let {
      isTrial: t,
      isCancelled: n,
      isResubscribing: i,
      shouldHideRoleSubscriptionEntryPoints: a,
      onCancelSubscriptionClick: o,
      onResubscribeClick: s,
      onChangePlanClick: l
    } = e;
    return n && (t || a) ? null : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.vwX, {
        children: x.intl.string(x.t["4neDMz"])
      }), (0, r.jsx)("div", {
        className: L.__invalid_rowButtons,
        children: n ? (0, r.jsx)(c.zxk, {
          variant: "primary",
          text: x.intl.string(x.t.y3mAEx),
          onClick: s,
          loading: i
        }) : (0, r.jsxs)(r.Fragment, {
          children: [!t && !a && (0, r.jsx)(g.Z, {
            label: x.intl.string(x.t.FRbWR0),
            onClick: l
          }), (0, r.jsx)(g.Z, {
            label: x.intl.string(x.t.Dx0lFx),
            onClick: o
          })]
        })
      })]
    })
  },
  F = e => {
    let {
      subscription: t
    } = e, {
      listing: n,
      groupListing: a,
      guild: l,
      expanded: p,
      handleToggleExpanded: g,
      subscriptionInfo: O
    } = (0, S.Z)(t), [v, T] = i.useState(false), j = (0, E.Dt)(), {
      analyticsLocations: k
    } = (0, h.ZP)(), {
      shouldHideGuildPurchaseEntryPoints: F
    } = (0, b.uP)(null == l ? true : l.id), V = (null == t ? true : t.paymentGateway) === P.gg$.APPLE_PARTNER;
    if (null == a || null == n || null == O) return null;
    let H = () => {
        null != l && ((0, I.uL)(P.Z5c.CHANNEL(l.id, w.oC.ROLE_SUBSCRIPTIONS)), (0, d.xf)(), f.Z.show(P.kVF.BACK_TO_PREVIOUS_SCREEN, true, x.intl.string(x.t.DvbaMz), () => _.Z.open(P.oAB.SUBSCRIPTIONS, D.cP)))
      },
      Y = () => {
        null != l && (0, N.h)({
          groupListing: a,
          listing: n,
          subscription: t
        })
      },
      W = async () => {
        try {
          T(true), await u.pl(t, k), (0, R.h)()
        } finally {
          T(false)
        }
      }, {
        isCancelled: K,
        isPastDue: z,
        subscriptionPrice: q,
        memberSince: X,
        nextRenewalDate: Q,
        nextRenewalLabel: J,
        isTrial: $
      } = O, ee = n.soft_deleted || null == l || V, et = () => p ? (0, r.jsxs)("div", {
        id: j,
        children: [(0, r.jsx)("div", {
          className: L.divider
        }), (0, r.jsx)(C.Z, {
          groupListingId: a.id,
          subscription: t,
          className: L.changePlanNotice
        }), (0, r.jsxs)("div", {
          className: L.subscriptionInfoCards,
          children: [(0, r.jsx)(G, {
            label: J,
            value: Q
          }), (0, r.jsx)(G, {
            label: x.intl.string(x.t.dltUMD),
            value: q,
            showInfoIcon: $,
            infoIconTooltipText: $ ? x.intl.string(x.t["/q6fpa"]) : true
          }), (0, r.jsx)(G, {
            label: x.intl.string(x.t.AOcwWF),
            value: X
          })]
        }), (0, r.jsx)(c.LZC, {
          size: 16
        }), !K && !V && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.vwX, {
            children: x.intl.string(x.t.wmMFvL)
          }), (0, r.jsx)(B, {
            subscription: t
          })]
        }), !ee && (0, r.jsx)(Z, {
          isTrial: $,
          isCancelled: K,
          isResubscribing: v,
          shouldHideRoleSubscriptionEntryPoints: F,
          onCancelSubscriptionClick: Y,
          onChangePlanClick: H,
          onResubscribeClick: W
        })]
      }) : null, en = () => K ? (0, r.jsx)(c.IGR, {
        text: x.intl.string(x.t["7uFZGh"])
      }) : $ ? (0, r.jsx)(c.IGR, {
        text: x.intl.string(x.t["6antoq"]),
        color: s.Z.BRAND_500
      }) : z ? (0, r.jsx)(c.ua7, {
        text: x.intl.string(x.t.eSuJEx),
        children: e => (0, r.jsx)("div", U(M({}, e), {
          children: (0, r.jsx)(c.IGR, {
            className: L.paymentDueBadge,
            text: x.intl.string(x.t.NrRwIi),
            color: s.Z.YELLOW_300
          })
        }))
      }) : null, er = () => V ? (0, r.jsx)(c.ua7, {
        text: x.intl.string(x.t.nv1IqK),
        children: e => (0, r.jsx)("div", U(M({}, e), {
          children: (0, r.jsx)(c.IGR, {
            text: x.intl.string(x.t.sBl3X1),
            color: m.Z.INTERACTIVE_MUTED
          })
        }))
      }) : null;
    return (0, r.jsxs)("div", {
      className: L.container,
      children: [(0, r.jsx)(A.Z, {
        onClick: g,
        className: L.headerContainer,
        children: e => {
          let {
            areaRef: t,
            handleStopPropagation: i
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [null != l && (0, r.jsx)(y.Z, {
              guild: l,
              active: true,
              size: y.Z.Sizes.MEDIUM
            }), (0, r.jsxs)("div", {
              className: L.headerTextContainer,
              children: [(0, r.jsx)(c.Text, {
                variant: "text-md/medium",
                className: L.guildName,
                children: null != l ? l.name : x.intl.string(x.t["He+cmZ"])
              }), (0, r.jsxs)("div", {
                className: L.headerSubtitleContainer,
                children: [(0, r.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  className: L.tierName,
                  children: n.name
                }), en(), er()]
              })]
            }), (0, r.jsx)(c.P3F, {
              onClick: i(g),
              "aria-label": x.intl.string(x.t.e5eQOz),
              "aria-controls": j,
              "aria-expanded": p,
              focusProps: {
                ringTarget: t
              },
              children: (0, r.jsx)(c.CJ0, {
                size: "md",
                color: "currentColor",
                className: o()(L.arrowIcon, {
                  [L.arrowIconExpanded]: p
                })
              })
            })]
          })
        }
      }), et()]
    })
  }