/** Chunk was on web.js **/
/** chunk id: 949914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => V
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk722770 = require("./722770.js"),
  Chunk442837 = require("./442837.js"),
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

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let B = e => {
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
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-deprecated-12/semibold",
          className: j.infoCardLabel,
          children: t
        }), i && (0, r.jsx)(c.ua7, {
          clickableOnMobile: true,
          text: a,
          children: e => (0, r.jsx)(c.d3s, G(k({
            size: "xs",
            color: "currentColor"
          }, e), {
            className: j.infoCardIcon
          }))
        })]
      }), (0, r.jsx)(c.X6q, {
        variant: "heading-xl/semibold",
        className: j.infoCardValue,
        children: n
      })]
    })
  },
  Z = e => {
    let {
      subscription: t
    } = e, {
      analyticsLocations: n
    } = (0, _.ZP)(), [i] = (0, b.ED)({
      subscriptionId: t.id,
      renewal: true,
      analyticsLocations: n,
      analyticsLocation: f.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), a = (0, l.e7)([S.Z], () => S.Z.hasFetchedPaymentSources);
    return null != i && a ? (0, r.jsx)(y.Z, {
      subscription: t,
      currentInvoicePreview: i,
      dropdownClassName: j.paymentSourceDropdown
    }) : (0, r.jsx)(c.$jN, {})
  },
  F = e => {
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
        className: j.__invalid_rowButtons,
        children: n ? (0, r.jsx)(c.zxk, {
          variant: "primary",
          text: x.intl.string(x.t.y3mAEx),
          onClick: s,
          loading: i
        }) : (0, r.jsxs)(r.Fragment, {
          children: [!t && !a && (0, r.jsx)(h.Z, {
            label: x.intl.string(x.t.FRbWR0),
            onClick: l
          }), (0, r.jsx)(h.Z, {
            label: x.intl.string(x.t.Dx0lFx),
            onClick: o
          })]
        })
      })]
    })
  },
  V = e => {
    let {
      subscription: t
    } = e, {
      listing: n,
      groupListing: a,
      guild: l,
      expanded: f,
      handleToggleExpanded: h,
      subscriptionInfo: b
    } = (0, A.Z)(t), [y, S] = i.useState(false), M = (0, m.Dt)(), {
      analyticsLocations: U
    } = (0, _.ZP)(), {
      shouldHideGuildPurchaseEntryPoints: V
    } = (0, g.uP)(null == l ? true : l.id), H = (null == t ? true : t.paymentGateway) === w.gg$.APPLE_PARTNER;
    if (null == a || null == n || null == b) return null;
    let Y = () => {
        null != l && ((0, O.uL)(w.Z5c.CHANNEL(l.id, D.oC.ROLE_SUBSCRIPTIONS)), (0, I.default)(), d.Z.show(w.kVF.BACK_TO_PREVIOUS_SCREEN, true, x.intl.string(x.t.DvbaMz), () => (0, T.openUserSettings)(v.n.SUBSCRIPTIONS_PANEL, {
          section: w.oAB.SUBSCRIPTIONS,
          subsection: L.cP
        })))
      },
      W = () => {
        null != l && (0, R.h)({
          groupListing: a,
          listing: n,
          subscription: t
        })
      },
      K = async () => {
        try {
          S(true), await u.pl(t, U), (0, P.h)()
        } finally {
          S(false)
        }
      }, {
        isCancelled: z,
        isPastDue: q,
        subscriptionPrice: X,
        memberSince: Q,
        nextRenewalDate: J,
        nextRenewalLabel: $,
        isTrial: ee
      } = b, et = n.soft_deleted || null == l || H, en = () => f ? (0, r.jsxs)("div", {
        id: M,
        children: [(0, r.jsx)("div", {
          className: j.divider
        }), (0, r.jsx)(N.Z, {
          groupListingId: a.id,
          subscription: t,
          className: j.changePlanNotice
        }), (0, r.jsxs)("div", {
          className: j.subscriptionInfoCards,
          children: [(0, r.jsx)(B, {
            label: $,
            value: J
          }), (0, r.jsx)(B, {
            label: x.intl.string(x.t.dltUMD),
            value: X,
            showInfoIcon: ee,
            infoIconTooltipText: ee ? x.intl.string(x.t["/q6fpa"]) : true
          }), (0, r.jsx)(B, {
            label: x.intl.string(x.t.AOcwWF),
            value: Q
          })]
        }), (0, r.jsx)(c.LZC, {
          size: 16
        }), !z && !H && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.vwX, {
            children: x.intl.string(x.t.wmMFvL)
          }), (0, r.jsx)(Z, {
            subscription: t
          })]
        }), !et && (0, r.jsx)(F, {
          isTrial: ee,
          isCancelled: z,
          isResubscribing: y,
          shouldHideRoleSubscriptionEntryPoints: V,
          onCancelSubscriptionClick: W,
          onChangePlanClick: Y,
          onResubscribeClick: K
        })]
      }) : null, er = () => z ? (0, r.jsx)(c.IGR, {
        text: x.intl.string(x.t["7uFZGh"])
      }) : ee ? (0, r.jsx)(c.IGR, {
        text: x.intl.string(x.t["6antoq"]),
        color: s.Z.BRAND_500
      }) : q ? (0, r.jsx)(c.ua7, {
        text: x.intl.string(x.t.eSuJEx),
        children: e => (0, r.jsx)("div", G(k({}, e), {
          children: (0, r.jsx)(c.IGR, {
            className: j.paymentDueBadge,
            text: x.intl.string(x.t.NrRwIi),
            color: s.Z.YELLOW_300
          })
        }))
      }) : null, ei = () => H ? (0, r.jsx)(c.ua7, {
        text: x.intl.string(x.t.nv1IqK),
        children: e => (0, r.jsx)("div", G(k({}, e), {
          children: (0, r.jsx)(c.IGR, {
            text: x.intl.string(x.t.sBl3X1),
            color: p.Z.INTERACTIVE_MUTED
          })
        }))
      }) : null;
    return (0, r.jsxs)("div", {
      className: j.container,
      children: [(0, r.jsx)(C.Z, {
        onClick: h,
        className: j.headerContainer,
        children: e => {
          let {
            areaRef: t,
            handleStopPropagation: i
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [null != l && (0, r.jsx)(E.Z, {
              guild: l,
              active: true,
              size: E.Z.Sizes.MEDIUM
            }), (0, r.jsxs)("div", {
              className: j.headerTextContainer,
              children: [(0, r.jsx)(c.Text, {
                variant: "text-md/medium",
                className: j.guildName,
                children: null != l ? l.name : x.intl.string(x.t["He+cmZ"])
              }), (0, r.jsxs)("div", {
                className: j.headerSubtitleContainer,
                children: [(0, r.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  className: j.tierName,
                  children: n.name
                }), er(), ei()]
              })]
            }), (0, r.jsx)(c.P3F, {
              onClick: i(h),
              "aria-label": x.intl.string(x.t.e5eQOz),
              "aria-controls": M,
              "aria-expanded": f,
              focusProps: {
                ringTarget: t
              },
              children: (0, r.jsx)(c.CJ0, {
                size: "md",
                color: "currentColor",
                className: o()(j.arrowIcon, {
                  [j.arrowIconExpanded]: f
                })
              })
            })]
          })
        }
      }), en()]
    })
  }