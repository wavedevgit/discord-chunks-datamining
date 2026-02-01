/** Chunk was on 9207 **/
/** chunk id: 146528, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
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
      infoIconTooltipText: l
    } = e;
    return (0, r.jsxs)("div", {
      className: w.L0,
      children: [(0, r.jsxs)("div", {
        className: w.a5,
        children: [(0, r.jsx)(d.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: w.HU,
          children: t
        }), i && (0, r.jsx)(c.m, {
          text: l,
          children: (0, r.jsx)(d.mir, {
            size: "xs",
            color: "currentColor",
            className: w.Mo
          })
        })]
      }), (0, r.jsx)(d.Heading, {
        variant: "heading-xl/semibold",
        className: w.sx,
        children: n
      })]
    })
  },
  G = e => {
    let {
      subscription: t
    } = e, {
      analyticsLocations: n
    } = (0, m.Ay)(), [i] = (0, h.Kq)({
      subscriptionId: t.id,
      renewal: true,
      analyticsLocations: n,
      analyticsLocation: p.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), l = (0, a.bG)([T.A], () => T.A.hasFetchedPaymentSources);
    return null != i && l ? (0, r.jsx)(E.A, {
      subscription: t,
      currentInvoicePreview: i,
      dropdownClassName: w.Nw
    }) : (0, r.jsx)(d.y$y, {})
  },
  U = e => {
    let {
      isTrial: t,
      isCancelled: n,
      isResubscribing: i,
      shouldHideRoleSubscriptionEntryPoints: l,
      onCancelSubscriptionClick: s,
      onResubscribeClick: a,
      onChangePlanClick: o
    } = e;
    return n && (t || l) ? null : (0, r.jsx)(d.D0$, {
      label: L.intl.string(L.t["4neDM+"]),
      children: (0, r.jsx)("div", {
        className: w.__invalid_rowButtons,
        children: n ? (0, r.jsx)(d.Button, {
          variant: "primary",
          text: L.intl.string(L.t.y3mAE4),
          onClick: a,
          loading: i
        }) : (0, r.jsxs)(r.Fragment, {
          children: [!t && !l && (0, r.jsx)(g.A, {
            label: L.intl.string(L.t.FRbWR8),
            onClick: o
          }), (0, r.jsx)(g.A, {
            label: L.intl.string(L.t.Dx0lF7),
            onClick: s
          })]
        })
      })
    })
  },
  k = e => {
    let {
      subscription: t
    } = e, {
      listing: n,
      groupListing: l,
      guild: a,
      expanded: p,
      handleToggleExpanded: g,
      subscriptionInfo: h
    } = (0, I.A)(t), [E, T] = i.useState(false), k = (0, A.GV)(), {
      analyticsLocations: B
    } = (0, m.Ay)(), {
      shouldHideGuildPurchaseEntryPoints: H
    } = (0, f.MH)(null == a ? true : a.id), V = null == t ? true : t.isPurchasedViaAppleGeneric;
    if (null == l || null == n || null == h) return null;
    let F = async () => {
      try {
        T(true), await u.QP(t, B), (0, v.q)()
      } finally {
        T(false)
      }
    }, {
      isCancelled: Y,
      isPastDue: W,
      subscriptionPrice: K,
      memberSince: z,
      nextRenewalDate: Z,
      nextRenewalLabel: X,
      isTrial: q
    } = h, J = n.soft_deleted || null == a || V;
    return (0, r.jsxs)("div", {
      className: w.kL,
      children: [(0, r.jsx)(N.A, {
        onClick: g,
        className: w.N1,
        children: e => {
          let {
            areaRef: t,
            handleStopPropagation: i
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [null != a && (0, r.jsx)(b.A, {
              guild: a,
              active: true,
              size: b.A.Sizes.MEDIUM
            }), (0, r.jsxs)("div", {
              className: w.if,
              children: [(0, r.jsx)(d.Text, {
                variant: "text-md/medium",
                className: w.J5,
                children: null != a ? a.name : L.intl.string(L.t["He+cmd"])
              }), (0, r.jsxs)("div", {
                className: w.xp,
                children: [(0, r.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  className: w.KR,
                  children: n.name
                }), Y ? (0, r.jsx)(d.LpS, {
                  text: L.intl.string(L.t["7uFZGt"])
                }) : q ? (0, r.jsx)(d.LpS, {
                  text: L.intl.string(L.t["6anton"]),
                  color: o.A.unsafe_rawColors.BRAND_500.css
                }) : W ? (0, r.jsx)(c.m, {
                  text: L.intl.string(L.t.eSuJE2),
                  children: (0, r.jsx)("div", {
                    children: (0, r.jsx)(d.LpS, {
                      className: w.qc,
                      text: L.intl.string(L.t.NrRwIl),
                      color: o.A.unsafe_rawColors.YELLOW_300.css
                    })
                  })
                }) : null, V ? (0, r.jsx)(c.m, {
                  text: L.intl.string(L.t.nv1IqK),
                  children: (0, r.jsx)("div", {
                    children: (0, r.jsx)(d.LpS, {
                      text: L.intl.string(L.t["sBl3X/"]),
                      color: o.A.colors.BACKGROUND_MOD_MUTED.css
                    })
                  })
                }) : null]
              })]
            }), (0, r.jsx)(d.DUT, {
              onClick: i(g),
              "aria-label": L.intl.string(L.t.e5eQOy),
              "aria-controls": k,
              "aria-expanded": p,
              focusProps: {
                ringTarget: t
              },
              children: (0, r.jsx)(d.abt, {
                size: "md",
                color: "currentColor",
                className: s()(w.D6, {
                  [w.S7]: p
                })
              })
            })]
          })
        }
      }), p ? (0, r.jsxs)("div", {
        id: k,
        children: [(0, r.jsx)("div", {
          className: w.yF
        }), (0, r.jsx)(y.A, {
          groupListingId: l.id,
          subscription: t,
          className: w.kE
        }), (0, r.jsxs)("div", {
          className: w.Zx,
          children: [(0, r.jsx)(M, {
            label: X,
            value: Z
          }), (0, r.jsx)(M, {
            label: L.intl.string(L.t.dltUMH),
            value: K,
            showInfoIcon: q,
            infoIconTooltipText: q ? L.intl.string(L.t["/q6fpa"]) : true
          }), (0, r.jsx)(M, {
            label: L.intl.string(L.t.AOcwWB),
            value: z
          })]
        }), (0, r.jsx)(d.hKd, {
          size: 16
        }), !Y && !V && (0, r.jsx)(d.D0$, {
          label: L.intl.string(L.t.wmMFvA),
          children: (0, r.jsx)(G, {
            subscription: t
          })
        }), !J && (0, r.jsx)(U, {
          isTrial: q,
          isCancelled: Y,
          isResubscribing: E,
          shouldHideRoleSubscriptionEntryPoints: H,
          onCancelSubscriptionClick: () => {
            null != a && (0, j.q)({
              groupListing: l,
              listing: n,
              subscription: t
            })
          },
          onChangePlanClick: () => {
            null != a && ((0, O.pX)(P.BVt.CHANNEL(a.id, R.VV.ROLE_SUBSCRIPTIONS)), (0, C.default)(), _.A.show(P.kqX.BACK_TO_PREVIOUS_SCREEN, true, L.intl.string(L.t.DvbaM4), () => (0, S.openUserSettings)(x.X.SUBSCRIPTIONS_PANEL, {
              section: P.nc_.SUBSCRIPTIONS,
              subsection: D.nR
            })))
          },
          onResubscribeClick: F
        })]
      }) : null]
    })
  }