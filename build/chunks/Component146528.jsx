/** Chunk was on 60667 **/
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
      className: L.L0,
      children: [(0, r.jsxs)("div", {
        className: L.a5,
        children: [(0, r.jsx)(d.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: L.HU,
          children: t
        }), i && (0, r.jsx)(c.m, {
          text: l,
          children: (0, r.jsx)(d.mir, {
            size: "xs",
            color: "currentColor",
            className: L.Mo
          })
        })]
      }), (0, r.jsx)(d.Heading, {
        variant: "heading-xl/semibold",
        className: L.sx,
        children: n
      })]
    })
  },
  U = e => {
    let {
      subscription: t
    } = e, {
      analyticsLocations: n
    } = (0, m.Ay)(), [i] = (0, b.Kq)({
      subscriptionId: t.id,
      renewal: true,
      analyticsLocations: n,
      analyticsLocation: p.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), l = (0, a.bG)([I.A], () => I.A.hasFetchedPaymentSources);
    return null != i && l ? (0, r.jsx)(E.A, {
      subscription: t,
      currentInvoicePreview: i,
      dropdownClassName: L.Nw
    }) : (0, r.jsx)(d.y$y, {})
  },
  G = e => {
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
      label: w.intl.string(w.t["4neDM+"]),
      children: (0, r.jsx)("div", {
        className: L.__invalid_rowButtons,
        children: n ? (0, r.jsx)(d.Button, {
          variant: "primary",
          text: w.intl.string(w.t.y3mAE4),
          onClick: a,
          loading: i
        }) : (0, r.jsxs)(r.Fragment, {
          children: [!t && !l && (0, r.jsx)(g.A, {
            label: w.intl.string(w.t.FRbWR8),
            onClick: o
          }), (0, r.jsx)(g.A, {
            label: w.intl.string(w.t.Dx0lF7),
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
      subscriptionInfo: b
    } = (0, S.A)(t), [E, I] = i.useState(false), k = (0, A.GV)(), {
      analyticsLocations: V
    } = (0, m.Ay)(), {
      shouldHideGuildPurchaseEntryPoints: H
    } = (0, f.MH)(null == a ? true : a.id), B = null == t ? true : t.isPurchasedViaAppleGeneric;
    if (null == l || null == n || null == b) return null;
    let F = async () => {
      try {
        I(true), await u.QP(t, V), (0, y.q)()
      } finally {
        I(false)
      }
    }, {
      isCancelled: Y,
      isPastDue: W,
      subscriptionPrice: z,
      memberSince: K,
      nextRenewalDate: Z,
      nextRenewalLabel: X,
      isTrial: q
    } = b, J = n.soft_deleted || null == a || B;
    return (0, r.jsxs)("div", {
      className: L.kL,
      children: [(0, r.jsx)(j.A, {
        onClick: g,
        className: L.N1,
        children: e => {
          let {
            areaRef: t,
            handleStopPropagation: i
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [null != a && (0, r.jsx)(h.A, {
              guild: a,
              active: true,
              size: h.A.Sizes.MEDIUM
            }), (0, r.jsxs)("div", {
              className: L.if,
              children: [(0, r.jsx)(d.Text, {
                variant: "text-md/medium",
                className: L.J5,
                children: null != a ? a.name : w.intl.string(w.t["He+cmd"])
              }), (0, r.jsxs)("div", {
                className: L.xp,
                children: [(0, r.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  className: L.KR,
                  children: n.name
                }), Y ? (0, r.jsx)(d.LpS, {
                  text: w.intl.string(w.t["7uFZGt"])
                }) : q ? (0, r.jsx)(d.LpS, {
                  text: w.intl.string(w.t["6anton"]),
                  color: o.A.unsafe_rawColors.BRAND_500.css
                }) : W ? (0, r.jsx)(c.m, {
                  text: w.intl.string(w.t.eSuJE2),
                  children: (0, r.jsx)("div", {
                    children: (0, r.jsx)(d.LpS, {
                      className: L.qc,
                      text: w.intl.string(w.t.NrRwIl),
                      color: o.A.unsafe_rawColors.YELLOW_300.css
                    })
                  })
                }) : null, B ? (0, r.jsx)(c.m, {
                  text: w.intl.string(w.t.nv1IqK),
                  children: (0, r.jsx)("div", {
                    children: (0, r.jsx)(d.LpS, {
                      text: w.intl.string(w.t["sBl3X/"]),
                      color: o.A.colors.BACKGROUND_MOD_MUTED.css
                    })
                  })
                }) : null]
              })]
            }), (0, r.jsx)(d.DUT, {
              onClick: i(g),
              "aria-label": w.intl.string(w.t.e5eQOy),
              "aria-controls": k,
              "aria-expanded": p,
              focusProps: {
                ringTarget: t
              },
              children: (0, r.jsx)(d.abt, {
                size: "md",
                color: "currentColor",
                className: s()(L.D6, {
                  [L.S7]: p
                })
              })
            })]
          })
        }
      }), p ? (0, r.jsxs)("div", {
        id: k,
        children: [(0, r.jsx)("div", {
          className: L.yF
        }), (0, r.jsx)(v.A, {
          groupListingId: l.id,
          subscription: t,
          className: L.kE
        }), (0, r.jsxs)("div", {
          className: L.Zx,
          children: [(0, r.jsx)(M, {
            label: X,
            value: Z
          }), (0, r.jsx)(M, {
            label: w.intl.string(w.t.dltUMH),
            value: z,
            showInfoIcon: q,
            infoIconTooltipText: q ? w.intl.string(w.t["/q6fpa"]) : true
          }), (0, r.jsx)(M, {
            label: w.intl.string(w.t.AOcwWB),
            value: K
          })]
        }), (0, r.jsx)(d.hKd, {
          size: 16
        }), !Y && !B && (0, r.jsx)(d.D0$, {
          label: w.intl.string(w.t.wmMFvA),
          children: (0, r.jsx)(U, {
            subscription: t
          })
        }), !J && (0, r.jsx)(G, {
          isTrial: q,
          isCancelled: Y,
          isResubscribing: E,
          shouldHideRoleSubscriptionEntryPoints: H,
          onCancelSubscriptionClick: () => {
            null != a && (0, N.q)({
              groupListing: l,
              listing: n,
              subscription: t
            })
          },
          onChangePlanClick: () => {
            null != a && ((0, x.pX)(P.BVt.CHANNEL(a.id, R.VV.ROLE_SUBSCRIPTIONS)), (0, C.default)(), _.A.show(P.kqX.BACK_TO_PREVIOUS_SCREEN, true, w.intl.string(w.t.DvbaM4), () => (0, T.openUserSettings)(O.X.SUBSCRIPTIONS_PANEL, {
              section: P.nc_.SUBSCRIPTIONS,
              subsection: D.nR
            })))
          },
          onResubscribeClick: F
        })]
      }) : null]
    })
  }