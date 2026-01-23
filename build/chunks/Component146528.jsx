/** Chunk was on web.js **/
/** chunk id: 146528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk912851 = require("./912851.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk178856 = require("./178856.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk465932 = require("./465932.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk543767 = require("./543767.js"),
  Chunk420139 = require("./420139.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk780964 = require("./780964.js"),
  Chunk12901 = require("./12901.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk295405 = require("./295405.js"),
  Chunk379082 = require("./379082.js"),
  Chunk710144 = require("./710144.jsx"),
  Chunk815332 = require("./815332.jsx"),
  Chunk568286 = require("./568286.jsx"),
  Chunk638182 = require("./638182.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk185814 = require("./185814.js");
let M = e => {
    let {
      label: t,
      value: n,
      showInfoIcon: i,
      infoIconTooltipText: a
    } = e;
    return (0, r.jsxs)("div", {
      className: j.L0,
      children: [(0, r.jsxs)("div", {
        className: j.a5,
        children: [(0, r.jsx)(u.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: j.HU,
          children: t
        }), i && (0, r.jsx)(c.m, {
          text: a,
          children: (0, r.jsx)(u.mir, {
            size: "xs",
            color: "currentColor",
            className: j.Mo
          })
        })]
      }), (0, r.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: j.sx,
        children: n
      })]
    })
  },
  k = e => {
    let {
      subscription: t
    } = e, {
      analyticsLocations: n
    } = (0, _.Ay)(), [i] = (0, y.Kq)({
      subscriptionId: t.id,
      renewal: true,
      analyticsLocations: n,
      analyticsLocation: p.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), a = (0, o.bG)([S.A], () => S.A.hasFetchedPaymentSources);
    return null != i && a ? (0, r.jsx)(b.A, {
      subscription: t,
      currentInvoicePreview: i,
      dropdownClassName: j.Nw
    }) : (0, r.jsx)(u.y$y, {})
  },
  U = e => {
    let {
      isTrial: t,
      isCancelled: n,
      isResubscribing: i,
      shouldHideRoleSubscriptionEntryPoints: a,
      onCancelSubscriptionClick: s,
      onResubscribeClick: o,
      onChangePlanClick: l
    } = e;
    return n && (t || a) ? null : (0, r.jsx)(u.D0$, {
      label: L.intl.string(L.t["4neDM+"]),
      children: (0, r.jsx)("div", {
        className: j.__invalid_rowButtons,
        children: n ? (0, r.jsx)(u.Button, {
          variant: "primary",
          text: L.intl.string(L.t.y3mAE4),
          onClick: o,
          loading: i
        }) : (0, r.jsxs)(r.Fragment, {
          children: [!t && !a && (0, r.jsx)(h.A, {
            label: L.intl.string(L.t.FRbWR8),
            onClick: l
          }), (0, r.jsx)(h.A, {
            label: L.intl.string(L.t.Dx0lF7),
            onClick: s
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
      guild: o,
      expanded: p,
      handleToggleExpanded: h,
      subscriptionInfo: y
    } = (0, T.A)(t), [b, S] = i.useState(false), G = (0, m.GV)(), {
      analyticsLocations: V
    } = (0, _.Ay)(), {
      shouldHideGuildPurchaseEntryPoints: F
    } = (0, g.MH)(null == o ? true : o.id), B = null == t ? true : t.isPurchasedViaAppleGeneric;
    if (null == a || null == n || null == y) return null;
    let H = () => {
        null != o && ((0, O.pX)(P.BVt.CHANNEL(o.id, D.VV.ROLE_SUBSCRIPTIONS)), (0, A.default)(), f.A.show(P.kqX.BACK_TO_PREVIOUS_SCREEN, true, L.intl.string(L.t.DvbaM4), () => (0, I.openUserSettings)(v.X.SUBSCRIPTIONS_PANEL, {
          section: P.nc_.SUBSCRIPTIONS,
          subsection: x.nR
        })))
      },
      Y = () => {
        null != o && (0, w.q)({
          groupListing: a,
          listing: n,
          subscription: t
        })
      },
      W = async () => {
        try {
          S(true), await d.QP(t, V), (0, R.q)()
        } finally {
          S(false)
        }
      }, {
        isCancelled: K,
        isPastDue: z,
        subscriptionPrice: q,
        memberSince: Z,
        nextRenewalDate: X,
        nextRenewalLabel: Q,
        isTrial: J
      } = y, $ = n.soft_deleted || null == o || B, ee = () => p ? (0, r.jsxs)("div", {
        id: G,
        children: [(0, r.jsx)("div", {
          className: j.yF
        }), (0, r.jsx)(N.A, {
          groupListingId: a.id,
          subscription: t,
          className: j.kE
        }), (0, r.jsxs)("div", {
          className: j.Zx,
          children: [(0, r.jsx)(M, {
            label: Q,
            value: X
          }), (0, r.jsx)(M, {
            label: L.intl.string(L.t.dltUMH),
            value: q,
            showInfoIcon: J,
            infoIconTooltipText: J ? L.intl.string(L.t["/q6fpa"]) : true
          }), (0, r.jsx)(M, {
            label: L.intl.string(L.t.AOcwWB),
            value: Z
          })]
        }), (0, r.jsx)(u.hKd, {
          size: 16
        }), !K && !B && (0, r.jsx)(u.D0$, {
          label: L.intl.string(L.t.wmMFvA),
          children: (0, r.jsx)(k, {
            subscription: t
          })
        }), !$ && (0, r.jsx)(U, {
          isTrial: J,
          isCancelled: K,
          isResubscribing: b,
          shouldHideRoleSubscriptionEntryPoints: F,
          onCancelSubscriptionClick: Y,
          onChangePlanClick: H,
          onResubscribeClick: W
        })]
      }) : null, et = () => K ? (0, r.jsx)(u.LpS, {
        text: L.intl.string(L.t["7uFZGt"])
      }) : J ? (0, r.jsx)(u.LpS, {
        text: L.intl.string(L.t["6anton"]),
        color: l.A.unsafe_rawColors.BRAND_500.css
      }) : z ? (0, r.jsx)(c.m, {
        text: L.intl.string(L.t.eSuJE2),
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(u.LpS, {
            className: j.qc,
            text: L.intl.string(L.t.NrRwIl),
            color: l.A.unsafe_rawColors.YELLOW_300.css
          })
        })
      }) : null, en = () => B ? (0, r.jsx)(c.m, {
        text: L.intl.string(L.t.nv1IqK),
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(u.LpS, {
            text: L.intl.string(L.t["sBl3X/"]),
            color: l.A.colors.BACKGROUND_MOD_MUTED.css
          })
        })
      }) : null;
    return (0, r.jsxs)("div", {
      className: j.kL,
      children: [(0, r.jsx)(C.A, {
        onClick: h,
        className: j.N1,
        children: e => {
          let {
            areaRef: t,
            handleStopPropagation: i
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [null != o && (0, r.jsx)(E.A, {
              guild: o,
              active: true,
              size: E.A.Sizes.MEDIUM
            }), (0, r.jsxs)("div", {
              className: j.if,
              children: [(0, r.jsx)(u.Text, {
                variant: "text-md/medium",
                className: j.J5,
                children: null != o ? o.name : L.intl.string(L.t["He+cmd"])
              }), (0, r.jsxs)("div", {
                className: j.xp,
                children: [(0, r.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  className: j.KR,
                  children: n.name
                }), et(), en()]
              })]
            }), (0, r.jsx)(u.DUT, {
              onClick: i(h),
              "aria-label": L.intl.string(L.t.e5eQOy),
              "aria-controls": G,
              "aria-expanded": p,
              focusProps: {
                ringTarget: t
              },
              children: (0, r.jsx)(u.abt, {
                size: "md",
                color: "currentColor",
                className: s()(j.D6, {
                  [j.S7]: p
                })
              })
            })]
          })
        }
      }), ee()]
    })
  }