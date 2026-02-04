/** Chunk was on 9207 **/
/** chunk id: 726532, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => T,
  j: () => N
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

function x(e, t) {
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
let C = () => (0, r.jsxs)(s.BJc, {
    direction: "horizontal",
    gap: 10,
    padding: {
      top: 12,
      bottom: 12
    },
    className: E.wx,
    children: [(0, r.jsx)(s.Heading, {
      variant: "display-md",
      className: E.Nd,
      children: (0, A.DP)()
    }), (0, r.jsx)(s.Exy, {
      type: "beta",
      variant: "expressive"
    })]
  }),
  S = e => {
    let {
      title: t,
      description: n,
      button: i
    } = e;
    return (0, r.jsxs)("div", {
      className: E.bh,
      children: [(0, r.jsxs)(s.BJc, {
        direction: "vertical",
        gap: 8,
        className: E.iQ,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          children: t
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        })]
      }), (0, r.jsx)("div", {
        className: E.UD,
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
    } = (0, p.A)(null != (t = null == l ? true : l.subscriptionId) ? t : null);
    if (c || null == o || a || null == l) return (0, r.jsx)(s.y$y, {});
    let u = l.subscriptionId,
      _ = l.currentPeriodEnd,
      {
        primary: T,
        members: I
      } = o,
      {
        title: N,
        description: y
      } = (() => {
        switch (l.subscriptionStatus) {
          case f.Dmq.CANCELED:
            return {
              title: h.intl.string(b.default.mCwdPj), description: h.intl.format(b.default.wH9NYG, {
                endDate: _
              })
            };
          case f.Dmq.PAUSED:
            return {
              title: h.intl.string(b.default.IDyd1e), description: h.intl.format(b.default["8MfYhr"], {
                premiumGroupProductName: (0, A.DP)(),
                helpCenterLink: A.TE
              })
            };
          case f.Dmq.PAST_DUE:
          case f.Dmq.ACCOUNT_HOLD:
          case f.Dmq.BILLING_RETRY:
            return {
              title: h.intl.string(b.default.Duq8zp), description: h.intl.format(b.default["MHn/D6"], {
                endDate: _,
                premiumGroupProductName: (0, A.DP)()
              })
            };
          default:
            return {
              title: h.intl.formatToPlainString(b.default.xiUjMF, {
                premiumGroupProductName: (0, A.DP)()
              }), description: h.intl.format(b.default["2HEyqG"], {
                primaryName: (0, d.$3)(T),
                premiumGroupProductName: (0, A.DP)(),
                helpCenterLink: A.TE
              })
            }
        }
      })();
    return (0, r.jsxs)(s.hLv, {
      className: E.kL,
      color: "nitro-pink",
      children: [(0, r.jsx)(C, {}), (0, r.jsxs)("div", {
        className: E.wS,
        children: [(0, r.jsx)(S, {
          title: N,
          description: y,
          button: (0, r.jsx)(s.Button, {
            variant: "secondary",
            text: h.intl.string(b.default.NCu2JD),
            onClick: () => {
              (0, s.mMO)(async () => {
                let {
                  default: e
                } = await n.e("92796").then(n.bind(n, 205463));
                return t => (0, r.jsx)(e, x(O({}, t), {
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
            className: E.Or,
            children: h.intl.string(b.default["oqw/KW"])
          }), (0, r.jsx)(g.U4, {
            user: T,
            isOwnUser: false
          }), I.map(e => (0, r.jsx)(g.YF, {
            user: e,
            isOwnUser: e.id === (null == i ? true : i.id)
          }, e.id))]
        })]
      })]
    })
  },
  I = e => {
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
      primary: _,
      members: p,
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
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-sm/medium",
          color: "text-strong",
          children: h.intl.string(b.default["oqw/KW"])
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-subtle",
          children: h.intl.format(b.default["/a/UoP"], {
            usedSeats: d,
            totalSeats: c
          })
        })]
      }), (0, r.jsx)(g.U4, {
        user: _,
        isOwnUser: true
      }), p.map(e => (0, r.jsx)(g.MT, {
        user: e,
        onRemove: () => a(e)
      }, e.id)), m.map(e => (0, r.jsx)(g.Bs, {
        user: e,
        onRemove: () => o(e)
      }, e.id)), Array.from({
        length: u
      }).map((e, t) => (0, r.jsx)(g.XN, {
        onInvite: l,
        canInvite: i
      }, "seat-available-".concat(t)))]
    })
  },
  N = e => {
    let {
      subscription: t,
      analyticsLocations: d
    } = e, {
      premiumGroupMembers: m,
      isLoading: g
    } = (0, p.A)(t.id), {
      numAvailableInvites: T,
      numTotalSeats: N,
      numUsedSeats: y
    } = (0, l.cf)([_.A], () => ({
      numAvailableInvites: _.A.getNumAvailableInvites(),
      numTotalSeats: _.A.getNumTotalSeats(),
      numUsedSeats: _.A.getNumUsedSeats()
    })), [v, j] = i.useState(false), {
      status: P
    } = t, R = i.useCallback(() => {
      (0, s.mMO)(async () => {
        let {
          PremiumBrandRefreshSubscriptionCancellationModal: e
        } = await n.e("72820").then(n.bind(n, 281439));
        return n => (0, r.jsx)(e, x(O({}, n), {
          premiumSubscription: t,
          analyticsLocations: d
        }))
      })
    }, [t, d]), D = i.useCallback(async () => {
      j(true), await (0, a.Ir)(t, d), j(false)
    }, [t, d]), L = () => {
      o.default.track(f.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, {
        subscription_id: t.id
      }), (0, s.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("73987"), n.e("37997")]).then(n.bind(n, 773486));
        return n => (0, r.jsx)(e, x(O({}, n), {
          subscription: t
        }))
      })
    }, w = i.useMemo(() => !A.BE.includes(t.status) && T > 0, [t.status, T]), {
      title: M,
      description: G
    } = (() => {
      switch (P) {
        case f.Dmq.CANCELED:
          return {
            title: h.intl.string(b.default.KME8Q6), description: h.intl.format(b.default["1sNA+Y"], {
              endDate: t.currentPeriodEnd,
              premiumGroupProductName: (0, A.DP)()
            })
          };
        case f.Dmq.PAUSED:
          return {
            title: h.intl.string(b.default["4flKoC"]), description: h.intl.format(b.default["Q++BmO"], {
              premiumGroupProductName: (0, A.DP)()
            })
          };
        case f.Dmq.PAST_DUE:
        case f.Dmq.ACCOUNT_HOLD:
        case f.Dmq.BILLING_RETRY:
          return {
            title: h.intl.string(b.default.cfeFEt), description: h.intl.format(b.default["5+LPUW"], {
              endDate: t.currentPeriodEnd,
              helpCenterLink: A.TE
            })
          };
        default:
          return {
            title: h.intl.formatToPlainString(b.default.NRCfnQ, {
              premiumGroupProductName: (0, A.DP)()
            }), description: h.intl.format(b.default.lvnrnb, {
              totalSeats: A.LM,
              premiumGroupProductName: (0, A.DP)(),
              helpCenterLink: A.TE
            })
          }
      }
    })();
    return (0, r.jsxs)(s.hLv, {
      className: E.kL,
      color: "nitro-pink",
      children: [(0, r.jsx)(C, {}), (0, r.jsxs)("div", {
        className: E.wS,
        children: [(0, r.jsx)(S, {
          title: M,
          description: G,
          button: c.ki(t) ? (0, r.jsx)(s.Button, {
            variant: "expressive",
            size: "md",
            text: h.intl.string(b.default.EFTJMQ),
            onClick: D,
            loading: v
          }) : (0, r.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 12,
            children: [(0, r.jsx)(s.Button, {
              variant: "primary",
              size: "md",
              fullWidth: true,
              text: h.intl.string(b.default.Tcmclj),
              onClick: L,
              disabled: !w
            }), (0, r.jsx)(s.Button, {
              variant: "secondary",
              size: "md",
              fullWidth: true,
              text: h.intl.string(b.default.oO0EYw),
              onClick: R
            })]
          })
        }), (0, r.jsx)(I, {
          premiumGroupMembers: m,
          isLoadingPremiumGroupMembers: g,
          canInvite: w,
          onInvite: L,
          onRemoveMember: e => {
            o.default.track(f.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
              subscription_id: t.id,
              member_user_id: e.id
            }), (0, s.mMO)(async () => {
              let {
                default: i
              } = await n.e("21305").then(n.bind(n, 391040));
              return n => (0, r.jsx)(i, x(O({}, n), {
                subscriptionId: t.id,
                member: e
              }))
            })
          },
          onRemoveInvitedUser: e => {
            var i;
            o.default.track(f.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
              subscription_id: t.id,
              invited_user_id: e.id
            });
            let l = null == (i = u.A.getInviteByUserId(e.id)) ? true : i.invite;
            (0, s.mMO)(async () => {
              let {
                default: i
              } = await n.e("15554").then(n.bind(n, 115225));
              return n => (0, r.jsx)(i, x(O({}, n), {
                subscriptionId: t.id,
                invitedUser: e,
                subscriptionGroupMemberId: null == l ? true : l.id
              }))
            })
          },
          numTotalSeats: N,
          numUsedSeats: y,
          numAvailableInvites: T
        })]
      })]
    })
  }