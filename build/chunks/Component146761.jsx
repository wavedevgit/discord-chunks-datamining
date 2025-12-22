/** Chunk was on web.js **/
/** chunk id: 146761, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => N,
  d: () => C
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk366939 = require("./366939.js"),
  Chunk74538 = require("./74538.js"),
  Chunk51144 = require("./51144.js"),
  Chunk643281 = require("./643281.js"),
  Chunk591085 = require("./591085.js"),
  Chunk340426 = require("./340426.js"),
  Chunk546090 = require("./546090.jsx"),
  Chunk366733 = require("./366733.jsx"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk12048 = require("./12048.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = () => (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
    direction: "horizontal",
    gap: 10,
    padding: {
      top: 12,
      bottom: 12
    },
    className: Chunk12048.header,
    children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "display-md",
      className: Chunk12048.logoHeader,
      children: (0, Chunk282793.sO)()
    }), (0, Chunk54381.jsx)(Chunk481060.Cts, {
      type: "beta",
      variant: "expressive"
    })]
  }),
  T = e => {
    let {
      title: t,
      description: n,
      button: i
    } = e;
    return (0, r.jsxs)("div", {
      className: b.descriptionAndButtonContainer,
      children: [(0, r.jsxs)(o.Kqy, {
        direction: "vertical",
        gap: 8,
        className: b.descriptionContainer,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          children: t
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        })]
      }), (0, r.jsx)("div", {
        className: b.buttonContainer,
        children: i
      })]
    })
  },
  C = e => {
    var t;
    let {
      currentUser: i
    } = e, {
      premiumGroupMembership: a,
      isLoading: s
    } = (0, f.Z)(), {
      premiumGroupMembers: l,
      isLoading: u
    } = (0, d.Z)(null != (t = null == a ? true : a.subscriptionId) ? t : null);
    if (u || null == l || s || null == a) return (0, r.jsx)(o.$jN, {});
    let p = a.subscriptionId,
      y = a.currentPeriodEnd,
      {
        primary: v,
        members: C
      } = l,
      {
        title: A,
        description: N
      } = (() => {
        switch (a.subscriptionStatus) {
          case h.O0b.CANCELED:
            return {
              title: E.intl.string(g.default.mCwdPj), description: E.intl.format(g.default.wH9NYG, {
                endDate: y
              })
            };
          case h.O0b.PAUSED:
            return {
              title: E.intl.string(g.default.IDyd1e), description: E.intl.format(g.default["8MfYhr"], {
                premiumGroupProductName: (0, m.sO)(),
                helpCenterLink: m.j3
              })
            };
          case h.O0b.PAST_DUE:
          case h.O0b.ACCOUNT_HOLD:
          case h.O0b.BILLING_RETRY:
            return {
              title: E.intl.string(g.default.Duq8zp), description: E.intl.format(g.default["MHn/D6"], {
                endDate: y,
                premiumGroupProductName: (0, m.sO)()
              })
            };
          default:
            return {
              title: E.intl.formatToPlainString(g.default.xiUjMF, {
                premiumGroupProductName: (0, m.sO)()
              }), description: E.intl.format(g.default["2HEyqG"], {
                primaryName: (0, c.XM)(v),
                premiumGroupProductName: (0, m.sO)(),
                helpCenterLink: m.j3
              })
            }
        }
      })(),
      P = () => {
        (0, o.ZDy)(async () => {
          let {
            default: e
          } = await n.e("92326").then(n.bind(n, 3446));
          return t => (0, r.jsx)(e, S(O({}, t), {
            premiumGroupSubscriptionId: p,
            currentUser: i
          }))
        })
      };
    return (0, r.jsxs)(o.$1m, {
      className: b.container,
      color: "nitro-pink",
      children: [(0, r.jsx)(I, {}), (0, r.jsxs)("div", {
        className: b.contentGrid,
        children: [(0, r.jsx)(T, {
          title: A,
          description: N,
          button: (0, r.jsx)(o.Button, {
            variant: "secondary",
            text: E.intl.string(g.default.NCu2JD),
            onClick: P
          })
        }), (0, r.jsxs)(o.Kqy, {
          direction: "vertical",
          padding: {
            left: 32,
            bottom: 12
          },
          gap: 0,
          children: [(0, r.jsx)(o.Heading, {
            variant: "heading-sm/medium",
            color: "text-strong",
            className: b.usersListHeader,
            children: E.intl.string(g.default["oqw/KW"])
          }), (0, r.jsx)(_.Vl, {
            user: v,
            isOwnUser: false
          }), C.map(e => (0, r.jsx)(_.kg, {
            user: e,
            isOwnUser: e.id === (null == i ? true : i.id)
          }, e.id))]
        })]
      })]
    })
  },
  A = e => {
    let {
      premiumGroupMembers: t,
      isLoadingPremiumGroupMembers: n,
      canInvite: i,
      onInvite: a,
      onRemoveMember: s,
      onRemoveInvitedUser: l,
      numTotalSeats: c,
      numUsedSeats: u,
      numAvailableInvites: d
    } = e;
    if (n || null == t) return (0, r.jsx)(o.$jN, {});
    let {
      primary: f,
      members: m,
      invitedUsers: h
    } = t;
    return (0, r.jsxs)(o.Kqy, {
      direction: "vertical",
      padding: {
        left: 32,
        bottom: 12
      },
      gap: 0,
      children: [(0, r.jsxs)(o.Kqy, {
        direction: "vertical",
        gap: 4,
        padding: {
          top: 12,
          left: 4,
          right: 4,
          bottom: 10
        },
        children: [(0, r.jsxs)(o.Kqy, {
          direction: "horizontal",
          justify: "space-between",
          align: "center",
          gap: 4,
          children: [(0, r.jsx)(o.Heading, {
            variant: "heading-sm/medium",
            color: "text-strong",
            children: E.intl.string(g.default["oqw/KW"])
          }), (0, r.jsx)(p.Z, {
            onInvite: a,
            disabled: !i
          })]
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-subtle",
          children: E.intl.format(g.default["/a/UoP"], {
            usedSeats: u,
            totalSeats: c
          })
        })]
      }), (0, r.jsx)(_.Vl, {
        user: f,
        isOwnUser: true
      }), m.map(e => (0, r.jsx)(_.UA, {
        user: e,
        onRemove: () => s(e)
      }, e.id)), h.map(e => (0, r.jsx)(_.gk, {
        user: e,
        onRemove: () => l(e)
      }, e.id)), Array.from({
        length: d
      }).map((e, t) => (0, r.jsx)(_.QU, {
        onInvite: a,
        canInvite: i
      }, "seat-available-".concat(t)))]
    })
  },
  N = e => {
    let {
      subscription: t,
      analyticsLocations: c
    } = e, {
      premiumGroupMembers: f,
      isLoading: p
    } = (0, d.Z)(t.id), {
      numAvailableInvites: _,
      numTotalSeats: y,
      numUsedSeats: v
    } = (0, a.cj)([u.Z], () => ({
      numAvailableInvites: u.Z.getNumAvailableInvites(),
      numTotalSeats: u.Z.getNumTotalSeats(),
      numUsedSeats: u.Z.getNumUsedSeats()
    })), [C, N] = i.useState(false), {
      status: P
    } = t, R = i.useCallback(() => {
      (0, o.ZDy)(async () => {
        let {
          PremiumBrandRefreshSubscriptionCancellationModal: e
        } = await n.e("26526").then(n.bind(n, 48813));
        return n => (0, r.jsx)(e, S(O({}, n), {
          premiumSubscription: t,
          analyticsLocations: c
        }))
      })
    }, [t, c]), w = i.useCallback(async () => {
      N(true), await (0, s.O5)(t, c), N(false)
    }, [t, c]), D = e => {
      (0, o.ZDy)(async () => {
        let {
          default: i
        } = await n.e("30153").then(n.bind(n, 845959));
        return n => (0, r.jsx)(i, S(O({}, n), {
          subscriptionId: t.id,
          member: e
        }))
      })
    }, x = () => {
      (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("86948").then(n.bind(n, 153241));
        return n => (0, r.jsx)(e, S(O({}, n), {
          subscription: t
        }))
      })
    }, L = e => {
      (0, o.ZDy)(async () => {
        let {
          default: i
        } = await n.e("72114").then(n.bind(n, 157312));
        return n => (0, r.jsx)(i, S(O({}, n), {
          subscriptionId: t.id,
          invitedUser: e
        }))
      })
    }, j = () => {
      switch (P) {
        case h.O0b.CANCELED:
          return {
            title: E.intl.string(g.default.KME8Q6), description: E.intl.format(g.default["1sNA+Y"], {
              endDate: t.currentPeriodEnd,
              premiumGroupProductName: (0, m.sO)()
            })
          };
        case h.O0b.PAUSED:
          return {
            title: E.intl.string(g.default["4flKoC"]), description: E.intl.format(g.default["Q++BmO"], {
              premiumGroupProductName: (0, m.sO)()
            })
          };
        case h.O0b.PAST_DUE:
        case h.O0b.ACCOUNT_HOLD:
        case h.O0b.BILLING_RETRY:
          return {
            title: E.intl.string(g.default.cfeFEt), description: E.intl.format(g.default["5+LPUW"], {
              endDate: t.currentPeriodEnd,
              helpCenterLink: m.j3
            })
          };
        default:
          return {
            title: E.intl.formatToPlainString(g.default.NRCfnQ, {
              premiumGroupProductName: (0, m.sO)()
            }), description: E.intl.format(g.default.lvnrnb, {
              totalSeats: m.v$,
              premiumGroupProductName: (0, m.sO)(),
              helpCenterLink: m.j3
            })
          }
      }
    }, M = () => l.Vw(t) ? (0, r.jsx)(o.Button, {
      variant: "expressive",
      size: "md",
      text: E.intl.string(g.default.EFTJMQ),
      onClick: w,
      loading: C
    }) : (0, r.jsx)(o.Button, {
      variant: "secondary",
      size: "md",
      text: E.intl.string(g.default.oO0EYw),
      onClick: R
    }), k = i.useMemo(() => !m.Ou.includes(t.status) && _ > 0, [t.status, _]), {
      title: U,
      description: G
    } = j();
    return (0, r.jsxs)(o.$1m, {
      className: b.container,
      color: "nitro-pink",
      children: [(0, r.jsx)(I, {}), (0, r.jsxs)("div", {
        className: b.contentGrid,
        children: [(0, r.jsx)(T, {
          title: U,
          description: G,
          button: M()
        }), (0, r.jsx)(A, {
          premiumGroupMembers: f,
          isLoadingPremiumGroupMembers: p,
          canInvite: k,
          onInvite: x,
          onRemoveMember: D,
          onRemoveInvitedUser: L,
          numTotalSeats: y,
          numUsedSeats: v,
          numAvailableInvites: _
        })]
      })]
    })
  }