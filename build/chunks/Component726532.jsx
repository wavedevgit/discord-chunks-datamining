/** Chunk was on 5606 **/
/** chunk id: 726532, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => T,
  j: () => S
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk158032 = require("./158032.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk427262 = require("./427262.js"),
  Chunk59784 = require("./59784.js"),
  Chunk233317 = require("./233317.js"),
  Chunk622017 = require("./622017.js"),
  Chunk113090 = require("./113090.js"),
  Chunk99499 = require("./99499.jsx"),
  Chunk752533 = require("./752533.jsx"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk546991 = require("./546991.js");

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = () => (0, r.jsxs)(s.BJc, {
    direction: "horizontal",
    gap: 10,
    padding: {
      top: 12,
      bottom: 12
    },
    className: x.wx,
    children: [(0, r.jsx)(s.Heading, {
      variant: "display-md",
      className: x.Nd,
      children: (0, b.DP)()
    }), (0, r.jsx)(s.Exy, {
      type: "beta",
      variant: "expressive"
    })]
  }),
  j = e => {
    let {
      title: t,
      description: n,
      button: i
    } = e;
    return (0, r.jsxs)("div", {
      className: x.bh,
      children: [(0, r.jsxs)(s.BJc, {
        direction: "vertical",
        gap: 8,
        className: x.iQ,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          children: t
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        })]
      }), (0, r.jsx)("div", {
        className: x.UD,
        children: i
      })]
    })
  },
  T = e => {
    var t;
    let {
      currentUser: i
    } = e, {
      premiumGroupMembership: l,
      isLoading: a
    } = (0, m.A)(), {
      premiumGroupMembers: o,
      isLoading: c
    } = (0, _.A)(null != (t = null == l ? true : l.subscriptionId) ? t : null);
    if (c || null == o || a || null == l) return (0, r.jsx)(s.y$y, {});
    let u = l.subscriptionId,
      p = l.currentPeriodEnd,
      {
        primary: g,
        members: T
      } = o,
      {
        title: v,
        description: S
      } = (() => {
        switch (l.subscriptionStatus) {
          case h.Dmq.CANCELED:
            return {
              title: E.intl.string(A.default.mCwdPj), description: E.intl.format(A.default.wH9NYG, {
                endDate: p
              })
            };
          case h.Dmq.PAUSED:
            return {
              title: E.intl.string(A.default.IDyd1e), description: E.intl.format(A.default["8MfYhr"], {
                premiumGroupProductName: (0, b.DP)(),
                helpCenterLink: b.TE
              })
            };
          case h.Dmq.PAST_DUE:
          case h.Dmq.ACCOUNT_HOLD:
          case h.Dmq.BILLING_RETRY:
            return {
              title: E.intl.string(A.default.Duq8zp), description: E.intl.format(A.default["MHn/D6"], {
                endDate: p,
                premiumGroupProductName: (0, b.DP)()
              })
            };
          default:
            return {
              title: E.intl.formatToPlainString(A.default.xiUjMF, {
                premiumGroupProductName: (0, b.DP)()
              }), description: E.intl.format(A.default["2HEyqG"], {
                primaryName: (0, d.$3)(g),
                premiumGroupProductName: (0, b.DP)(),
                helpCenterLink: b.TE
              })
            }
        }
      })();
    return (0, r.jsxs)(s.hLv, {
      className: x.kL,
      color: "nitro-pink",
      children: [(0, r.jsx)(y, {}), (0, r.jsxs)("div", {
        className: x.wS,
        children: [(0, r.jsx)(j, {
          title: v,
          description: S,
          button: (0, r.jsx)(s.Button, {
            variant: "secondary",
            text: E.intl.string(A.default.NCu2JD),
            onClick: () => {
              (0, s.mMO)(async () => {
                let {
                  default: e
                } = await n.e("92796").then(n.bind(n, 205463));
                return t => (0, r.jsx)(e, C(O({}, t), {
                  premiumGroupSubscriptionId: u,
                  currentUser: i
                }))
              })
            }
          })
        }), (0, r.jsxs)(s.BJc, {
          direction: "vertical",
          padding: {
            left: 32,
            bottom: 12
          },
          gap: 0,
          children: [(0, r.jsx)(s.Heading, {
            variant: "heading-sm/medium",
            color: "text-strong",
            className: x.Or,
            children: E.intl.string(A.default["oqw/KW"])
          }), (0, r.jsx)(f.U4, {
            user: g,
            isOwnUser: false
          }), T.map(e => (0, r.jsx)(f.YF, {
            user: e,
            isOwnUser: e.id === (null == i ? true : i.id)
          }, e.id))]
        })]
      })]
    })
  },
  v = e => {
    let {
      premiumGroupMembers: t,
      isLoadingPremiumGroupMembers: n,
      canInvite: i,
      onInvite: l,
      onRemoveMember: a,
      onRemoveInvitedUser: o,
      numTotalSeats: c,
      numUsedSeats: d,
      numAvailableInvites: u
    } = e;
    if (n || null == t) return (0, r.jsx)(s.y$y, {});
    let {
      primary: p,
      members: _,
      invitedUsers: m
    } = t;
    return (0, r.jsxs)(s.BJc, {
      direction: "vertical",
      padding: {
        left: 32,
        bottom: 12
      },
      gap: 0,
      children: [(0, r.jsxs)(s.BJc, {
        direction: "vertical",
        gap: 4,
        padding: {
          top: 12,
          left: 4,
          right: 4,
          bottom: 10
        },
        children: [(0, r.jsxs)(s.BJc, {
          direction: "horizontal",
          justify: "space-between",
          align: "center",
          gap: 4,
          children: [(0, r.jsx)(s.Heading, {
            variant: "heading-sm/medium",
            color: "text-strong",
            children: E.intl.string(A.default["oqw/KW"])
          }), (0, r.jsx)(g.A, {
            onInvite: l,
            disabled: !i
          })]
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-subtle",
          children: E.intl.format(A.default["/a/UoP"], {
            usedSeats: d,
            totalSeats: c
          })
        })]
      }), (0, r.jsx)(f.U4, {
        user: p,
        isOwnUser: true
      }), _.map(e => (0, r.jsx)(f.MT, {
        user: e,
        onRemove: () => a(e)
      }, e.id)), m.map(e => (0, r.jsx)(f.Bs, {
        user: e,
        onRemove: () => o(e)
      }, e.id)), Array.from({
        length: u
      }).map((e, t) => (0, r.jsx)(f.XN, {
        onInvite: l,
        canInvite: i
      }, "seat-available-".concat(t)))]
    })
  },
  S = e => {
    let {
      subscription: t,
      analyticsLocations: d
    } = e, {
      premiumGroupMembers: m,
      isLoading: g
    } = (0, _.A)(t.id), {
      numAvailableInvites: f,
      numTotalSeats: T,
      numUsedSeats: S
    } = (0, l.cf)([p.A], () => ({
      numAvailableInvites: p.A.getNumAvailableInvites(),
      numTotalSeats: p.A.getNumTotalSeats(),
      numUsedSeats: p.A.getNumUsedSeats()
    })), [I, N] = i.useState(false), {
      status: P
    } = t, R = i.useCallback(() => {
      (0, s.mMO)(async () => {
        let {
          PremiumBrandRefreshSubscriptionCancellationModal: e
        } = await n.e("72820").then(n.bind(n, 281439));
        return n => (0, r.jsx)(e, C(O({}, n), {
          premiumSubscription: t,
          analyticsLocations: d
        }))
      })
    }, [t, d]), D = i.useCallback(async () => {
      N(true), await (0, a.Ir)(t, d), N(false)
    }, [t, d]), w = i.useMemo(() => !b.BE.includes(t.status) && f > 0, [t.status, f]), {
      title: L,
      description: M
    } = (() => {
      switch (P) {
        case h.Dmq.CANCELED:
          return {
            title: E.intl.string(A.default.KME8Q6), description: E.intl.format(A.default["1sNA+Y"], {
              endDate: t.currentPeriodEnd,
              premiumGroupProductName: (0, b.DP)()
            })
          };
        case h.Dmq.PAUSED:
          return {
            title: E.intl.string(A.default["4flKoC"]), description: E.intl.format(A.default["Q++BmO"], {
              premiumGroupProductName: (0, b.DP)()
            })
          };
        case h.Dmq.PAST_DUE:
        case h.Dmq.ACCOUNT_HOLD:
        case h.Dmq.BILLING_RETRY:
          return {
            title: E.intl.string(A.default.cfeFEt), description: E.intl.format(A.default["5+LPUW"], {
              endDate: t.currentPeriodEnd,
              helpCenterLink: b.TE
            })
          };
        default:
          return {
            title: E.intl.formatToPlainString(A.default.NRCfnQ, {
              premiumGroupProductName: (0, b.DP)()
            }), description: E.intl.format(A.default.lvnrnb, {
              totalSeats: b.LM,
              premiumGroupProductName: (0, b.DP)(),
              helpCenterLink: b.TE
            })
          }
      }
    })();
    return (0, r.jsxs)(s.hLv, {
      className: x.kL,
      color: "nitro-pink",
      children: [(0, r.jsx)(y, {}), (0, r.jsxs)("div", {
        className: x.wS,
        children: [(0, r.jsx)(j, {
          title: L,
          description: M,
          button: c.ki(t) ? (0, r.jsx)(s.Button, {
            variant: "expressive",
            size: "md",
            text: E.intl.string(A.default.EFTJMQ),
            onClick: D,
            loading: I
          }) : (0, r.jsx)(s.Button, {
            variant: "secondary",
            size: "md",
            text: E.intl.string(A.default.oO0EYw),
            onClick: R
          })
        }), (0, r.jsx)(v, {
          premiumGroupMembers: m,
          isLoadingPremiumGroupMembers: g,
          canInvite: w,
          onInvite: () => {
            o.default.track(h.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, {
              subscription_id: t.id
            }), (0, s.mMO)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("73987"), n.e("37997")]).then(n.bind(n, 773486));
              return n => (0, r.jsx)(e, C(O({}, n), {
                subscription: t
              }))
            })
          },
          onRemoveMember: e => {
            o.default.track(h.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
              subscription_id: t.id,
              member_user_id: e.id
            }), (0, s.mMO)(async () => {
              let {
                default: i
              } = await n.e("21305").then(n.bind(n, 391040));
              return n => (0, r.jsx)(i, C(O({}, n), {
                subscriptionId: t.id,
                member: e
              }))
            })
          },
          onRemoveInvitedUser: e => {
            var i;
            o.default.track(h.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
              subscription_id: t.id,
              invited_user_id: e.id
            });
            let l = null == (i = u.A.getInviteByUserId(e.id)) ? true : i.invite;
            (0, s.mMO)(async () => {
              let {
                default: i
              } = await n.e("15554").then(n.bind(n, 115225));
              return n => (0, r.jsx)(i, C(O({}, n), {
                subscriptionId: t.id,
                invitedUser: e,
                subscriptionGroupMemberId: null == l ? true : l.id
              }))
            })
          },
          numTotalSeats: T,
          numUsedSeats: S,
          numAvailableInvites: f
        })]
      })]
    })
  }