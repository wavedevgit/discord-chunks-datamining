/** Chunk was on 66181 **/
/** chunk id: 949914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let L = e => {
    let {
      label: t,
      value: n,
      showInfoIcon: r,
      infoIconTooltipText: s
    } = e;
    return (0, i.jsxs)("div", {
      className: Z.infoCard,
      children: [(0, i.jsxs)("div", {
        className: Z.infoCardLabelContainer,
        children: [(0, i.jsx)(c.X6q, {
          variant: "heading-deprecated-12/semibold",
          className: Z.infoCardLabel,
          children: t
        }), r && (0, i.jsx)(c.ua7, {
          clickableOnMobile: true,
          text: s,
          children: e => (0, i.jsx)(c.d3s, k(w({
            size: "xs",
            color: "currentColor"
          }, e), {
            className: Z.infoCardIcon
          }))
        })]
      }), (0, i.jsx)(c.X6q, {
        variant: "heading-xl/semibold",
        className: Z.infoCardValue,
        children: n
      })]
    })
  },
  B = e => {
    let {
      subscription: t
    } = e, {
      analyticsLocations: n
    } = (0, h.ZP)(), [r] = (0, E.ED)({
      subscriptionId: t.id,
      renewal: true,
      analyticsLocations: n,
      analyticsLocation: g.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), s = (0, o.e7)([v.Z], () => v.Z.hasFetchedPaymentSources);
    return null != r && s ? (0, i.jsx)(C.Z, {
      subscription: t,
      currentInvoicePreview: r,
      dropdownClassName: Z.paymentSourceDropdown
    }) : (0, i.jsx)(c.$jN, {})
  },
  M = e => {
    let {
      isTrial: t,
      isCancelled: n,
      isResubscribing: r,
      shouldHideRoleSubscriptionEntryPoints: s,
      onCancelSubscriptionClick: a,
      onResubscribeClick: l,
      onChangePlanClick: o
    } = e;
    return n && (t || s) ? null : (0, i.jsxs)("div", {
      children: [(0, i.jsx)(c.vwX, {
        children: D.intl.string(D.t["4neDMz"])
      }), (0, i.jsx)("div", {
        className: Z.__invalid_rowButtons,
        children: n ? (0, i.jsx)(c.zxk, {
          variant: "primary",
          text: D.intl.string(D.t.y3mAEx),
          onClick: l,
          loading: r
        }) : (0, i.jsxs)(i.Fragment, {
          children: [!t && !s && (0, i.jsx)(b.Z, {
            label: D.intl.string(D.t.FRbWR0),
            onClick: o
          }), (0, i.jsx)(b.Z, {
            label: D.intl.string(D.t.Dx0lFx),
            onClick: a
          })]
        })
      })]
    })
  },
  U = e => {
    let {
      subscription: t
    } = e, {
      listing: n,
      groupListing: s,
      guild: o,
      expanded: g,
      handleToggleExpanded: b,
      subscriptionInfo: E
    } = (0, S.Z)(t), [C, v] = r.useState(false), U = (0, x.Dt)(), {
      analyticsLocations: V
    } = (0, h.ZP)(), {
      shouldHideGuildPurchaseEntryPoints: G
    } = (0, _.uP)(null == o ? true : o.id), F = (null == t ? true : t.paymentGateway) === A.gg$.APPLE_PARTNER;
    if (null == s || null == n || null == E) return null;
    let H = async () => {
      try {
        v(true), await d.pl(t, V), (0, y.h)()
      } finally {
        v(false)
      }
    }, {
      isCancelled: z,
      isPastDue: W,
      subscriptionPrice: Y,
      memberSince: K,
      nextRenewalDate: q,
      nextRenewalLabel: X,
      isTrial: J
    } = E, Q = n.soft_deleted || null == o || F;
    return (0, i.jsxs)("div", {
      className: Z.container,
      children: [(0, i.jsx)(T.Z, {
        onClick: b,
        className: Z.headerContainer,
        children: e => {
          let {
            areaRef: t,
            handleStopPropagation: r
          } = e;
          return (0, i.jsxs)(i.Fragment, {
            children: [null != o && (0, i.jsx)(j.Z, {
              guild: o,
              active: true,
              size: j.Z.Sizes.MEDIUM
            }), (0, i.jsxs)("div", {
              className: Z.headerTextContainer,
              children: [(0, i.jsx)(c.Text, {
                variant: "text-md/medium",
                className: Z.guildName,
                children: null != o ? o.name : D.intl.string(D.t["He+cmZ"])
              }), (0, i.jsxs)("div", {
                className: Z.headerSubtitleContainer,
                children: [(0, i.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  className: Z.tierName,
                  children: n.name
                }), z ? (0, i.jsx)(c.IGR, {
                  text: D.intl.string(D.t["7uFZGh"])
                }) : J ? (0, i.jsx)(c.IGR, {
                  text: D.intl.string(D.t["6antoq"]),
                  color: l.Z.BRAND_500
                }) : W ? (0, i.jsx)(c.ua7, {
                  text: D.intl.string(D.t.eSuJEx),
                  children: e => (0, i.jsx)("div", k(w({}, e), {
                    children: (0, i.jsx)(c.IGR, {
                      className: Z.paymentDueBadge,
                      text: D.intl.string(D.t.NrRwIi),
                      color: l.Z.YELLOW_300
                    })
                  }))
                }) : null, F ? (0, i.jsx)(c.ua7, {
                  text: D.intl.string(D.t.nv1IqK),
                  children: e => (0, i.jsx)("div", k(w({}, e), {
                    children: (0, i.jsx)(c.IGR, {
                      text: D.intl.string(D.t.sBl3X1),
                      color: f.Z.INTERACTIVE_MUTED
                    })
                  }))
                }) : null]
              })]
            }), (0, i.jsx)(c.P3F, {
              onClick: r(b),
              "aria-label": D.intl.string(D.t.e5eQOz),
              "aria-controls": U,
              "aria-expanded": g,
              focusProps: {
                ringTarget: t
              },
              children: (0, i.jsx)(c.CJ0, {
                size: "md",
                color: "currentColor",
                className: a()(Z.arrowIcon, {
                  [Z.arrowIconExpanded]: g
                })
              })
            })]
          })
        }
      }), g ? (0, i.jsxs)("div", {
        id: U,
        children: [(0, i.jsx)("div", {
          className: Z.divider
        }), (0, i.jsx)(N.Z, {
          groupListingId: s.id,
          subscription: t,
          className: Z.changePlanNotice
        }), (0, i.jsxs)("div", {
          className: Z.subscriptionInfoCards,
          children: [(0, i.jsx)(L, {
            label: X,
            value: q
          }), (0, i.jsx)(L, {
            label: D.intl.string(D.t.dltUMD),
            value: Y,
            showInfoIcon: J,
            infoIconTooltipText: J ? D.intl.string(D.t["/q6fpa"]) : true
          }), (0, i.jsx)(L, {
            label: D.intl.string(D.t.AOcwWF),
            value: K
          })]
        }), (0, i.jsx)(c.LZC, {
          size: 16
        }), !z && !F && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(c.vwX, {
            children: D.intl.string(D.t.wmMFvL)
          }), (0, i.jsx)(B, {
            subscription: t
          })]
        }), !Q && (0, i.jsx)(M, {
          isTrial: J,
          isCancelled: z,
          isResubscribing: C,
          shouldHideRoleSubscriptionEntryPoints: G,
          onCancelSubscriptionClick: () => {
            null != o && (0, I.h)({
              guildId: o.id,
              groupListing: s,
              listing: n,
              subscription: t
            })
          },
          onChangePlanClick: () => {
            null != o && ((0, O.uL)(A.Z5c.CHANNEL(o.id, P.oC.ROLE_SUBSCRIPTIONS)), (0, u.xf)(), m.Z.show(A.kVF.BACK_TO_PREVIOUS_SCREEN, true, D.intl.string(D.t.DvbaMz), () => p.Z.open(A.oAB.SUBSCRIPTIONS, R.cP)))
          },
          onResubscribeClick: H
        })]
      }) : null]
    })
  }