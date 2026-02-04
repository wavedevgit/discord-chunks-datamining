/** Chunk was on 17869 **/
/** chunk id: 803622, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => R
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk49229 = require("./49229.js"),
  Chunk793574 = require("./793574.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk327166 = require("./327166.js"),
  Chunk157550 = require("./157550.js"),
  Chunk471271 = require("./471271.js"),
  Chunk957283 = require("./957283.js"),
  Chunk772659 = require("./772659.jsx"),
  Chunk138298 = require("./138298.js"),
  Chunk622543 = require("./622543.js"),
  Chunk657331 = require("./657331.js"),
  Chunk761640 = require("./761640.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk302975 = require("./302975.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk228288 = require("./228288.js");
let N = e => {
    let {
      userId: t,
      channelId: n
    } = e, i = (0, o.bG)([_.A], () => _.A.getMutualGuilds(t), [t]), a = r.useMemo(() => null != i ? i.slice(0, 3).map((e, t) => {
      let {
        guild: n
      } = e, r = null != n ? C.Ay.getGuildIconURL({
        id: n.id,
        icon: n.icon,
        size: 24
      }) : null;
      if (null == r) return null;
      let a = t === (i.length > 3 ? 3 : i.length) - 1,
        s = (0, l.jsx)("img", {
          src: r,
          alt: "",
          className: T.my
        }, t);
      return a ? s : (0, l.jsx)(h.Ay, {
        className: T.cp,
        mask: h.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
        width: 24,
        height: 24,
        children: s
      }, t)
    }).filter(e => null != e) : [], [i]);
    return null == i || 0 === i.length ? (0, l.jsx)(c.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: I.intl.string(I.t.zjVh8h)
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: T.H,
        children: a
      }), (0, l.jsx)(c.DUT, {
        onClick: () => {
          (0, y.openUserProfileModal)({
            userId: t,
            channelId: n,
            tabSection: j.RP.MUTUAL_GUILDS,
            sourceAnalyticsLocations: [d.A.DM_CHANNEL]
          })
        },
        children: (0, l.jsx)(c.Text, {
          className: T.tE,
          variant: "text-sm/normal",
          children: I.intl.format(I.t.eE3oep, {
            count: i.length
          })
        })
      })]
    })
  },
  P = e => {
    var t;
    let {
      relationshipType: n,
      userId: r,
      showingBanner: i
    } = e, a = null == (t = O.default.getUser(r)) ? true : t.bot, s = () => {
      u.A.addRelationship({
        userId: r,
        context: {
          location: x.liQ.DM_CHANNEL
        }
      })
    }, o = (0, l.jsx)(c.Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => {
        u.A.blockUser(r, {
          location: x.liQ.DM_CHANNEL
        })
      },
      text: I.intl.string(I.t.l4Emac)
    }), d = (0, p.D)(r);
    switch (n) {
      case x.eA$.NONE:
        return (0, l.jsxs)(l.Fragment, {
          children: [!a && !i && (0, l.jsx)(c.Button, {
            size: "sm",
            variant: "primary",
            onClick: s,
            text: d
          }), o]
        });
      case x.eA$.FRIEND:
        return (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(c.Button, {
            size: "sm",
            variant: "secondary",
            onClick: () => {
              u.A.removeFriend(r, {
                location: x.liQ.DM_CHANNEL
              })
            },
            text: I.intl.string(I.t.cvSt1J)
          }), o]
        });
      case x.eA$.BLOCKED:
        return (0, l.jsx)(c.Button, {
          size: "sm",
          variant: "secondary",
          onClick: () => {
            u.A.unblockUser(r, {
              location: x.liQ.DM_CHANNEL
            })
          },
          text: I.intl.string(I.t.XyHpKH)
        });
      case x.eA$.PENDING_INCOMING:
        return (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(c.Button, {
            size: "sm",
            variant: "primary",
            onClick: s,
            text: I.intl.string(I.t["+WbSn5"])
          }), (0, l.jsx)(c.Button, {
            size: "sm",
            variant: "secondary",
            onClick: () => {
              u.A.cancelFriendRequest(r, {
                location: x.liQ.DM_CHANNEL
              })
            },
            text: I.intl.string(I.t.rQSndv)
          }), o]
        });
      case x.eA$.PENDING_OUTGOING:
        return (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(c.Button, {
            size: "sm",
            variant: "primary",
            disabled: true,
            text: I.intl.string(I.t.xMH6vD)
          }), o]
        });
      default:
        return null
    }
  },
  w = e => {
    let {
      channelId: t,
      otherUserId: n
    } = e, i = r.useCallback(() => {
      (0, c.showToast)((0, c.createToast)(I.intl.string(I.t.a2j0hv), c.ToastType.FAILURE))
    }, []), a = r.useCallback(() => {
      b.A.closeChannelSidebar(E.fe)
    }, []), s = r.useCallback(() => {
      b.A.closeChannelSidebar(E.fe)
    }, []), {
      acceptMessageRequest: o,
      rejectMessageRequest: u,
      isAcceptLoading: d,
      isRejectLoading: h,
      isOptimisticAccepted: p,
      isOptimisticRejected: f
    } = (0, m.t)({
      user: O.default.getUser(n),
      onError: i,
      onAcceptSuccess: s,
      onRejectSuccess: a
    }), g = d || h || p || f;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(c.Button, {
        variant: "primary",
        size: "sm",
        disabled: g,
        onClick: () => o(t),
        loading: d,
        text: I.intl.string(I.t.Kz8Pwr)
      }), (0, l.jsx)(c.Button, {
        variant: "secondary",
        size: "sm",
        disabled: g,
        onClick: () => u(t),
        loading: h,
        text: I.intl.string(I.t.B2nygW)
      })]
    })
  },
  R = e => {
    let {
      userId: t,
      channel: n,
      showingBanner: r
    } = e, {
      channelId: i
    } = (0, g.N)(), u = (0, o.bG)([f.A], () => null != i && f.A.isSpam(i), [i]), d = (0, o.bG)([v.A], () => v.A.getRelationshipType(t), [t]), h = n.id === i, p = !s.Fr && !h, m = !!s.Fr || h || u, b = u || h ? (0, l.jsxs)("div", {
      className: T.mG,
      children: [(0, l.jsx)(w, {
        channelId: n.id,
        otherUserId: t
      }), (0, l.jsx)(A.A, {
        channel: n
      })]
    }) : (0, l.jsxs)("div", {
      className: T.mG,
      children: [(0, l.jsx)(P, {
        relationshipType: d,
        userId: t,
        showingBanner: r
      }), !r && (0, l.jsx)(S.A, {
        otherUserId: t,
        channel: n,
        navigateAwayOnReportSuccess: p
      })]
    }), _ = d !== x.eA$.PENDING_INCOMING || u || h ? null : (0, l.jsx)(c.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: I.intl.string(I.t.c2v5nO)
    });
    return (0, l.jsxs)("div", {
      className: m ? T.AA : T.kL,
      children: [(0, l.jsx)("div", {
        className: T.mG,
        children: (0, l.jsx)(N, {
          userId: t,
          channelId: n.id
        })
      }), !m && (0, l.jsx)("div", {
        className: T.yF
      }), (0, l.jsxs)("div", {
        className: a()(T.mG, T.LV),
        children: [_, b]
      })]
    })
  }