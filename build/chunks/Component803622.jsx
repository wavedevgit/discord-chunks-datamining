/** Chunk was on 1113 **/
/** chunk id: 803622, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => R
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let T = e => {
    let {
      userId: t,
      channelId: n
    } = e, i = (0, o.bG)([y.A], () => y.A.getMutualGuilds(t), [t]), s = l.useMemo(() => null != i ? i.slice(0, 3).map((e, t) => {
      let {
        guild: n
      } = e, l = null != n ? v.Ay.getGuildIconURL({
        id: n.id,
        icon: n.icon,
        size: 24
      }) : null;
      if (null == l) return null;
      let s = t === (i.length > 3 ? 3 : i.length) - 1,
        a = (0, r.jsx)("img", {
          src: l,
          alt: "",
          className: N.my
        }, t);
      return s ? a : (0, r.jsx)(h.Ay, {
        className: N.cp,
        mask: h.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
        width: 24,
        height: 24,
        children: a
      }, t)
    }).filter(e => null != e) : [], [i]);
    return null == i || 0 === i.length ? (0, r.jsx)(c.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: I.intl.string(I.t.zjVh8h)
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: N.H,
        children: s
      }), (0, r.jsx)(c.DUT, {
        onClick: () => {
          (0, O.openUserProfileModal)({
            userId: t,
            channelId: n,
            tabSection: S.RP.MUTUAL_GUILDS,
            sourceAnalyticsLocations: [d.A.DM_CHANNEL]
          })
        },
        children: (0, r.jsx)(c.Text, {
          className: N.tE,
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
      userId: l,
      showingBanner: i
    } = e, s = null == (t = x.default.getUser(l)) ? true : t.bot, a = () => {
      u.A.addRelationship({
        userId: l,
        context: {
          location: C.liQ.DM_CHANNEL
        }
      })
    }, o = (0, r.jsx)(c.Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => {
        u.A.blockUser(l, {
          location: C.liQ.DM_CHANNEL
        })
      },
      text: I.intl.string(I.t.l4Emac)
    }), d = (0, p.D)(l);
    switch (n) {
      case C.eA$.NONE:
        return (0, r.jsxs)(r.Fragment, {
          children: [!s && !i && (0, r.jsx)(c.Button, {
            size: "sm",
            variant: "primary",
            onClick: a,
            text: d
          }), o]
        });
      case C.eA$.FRIEND:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.Button, {
            size: "sm",
            variant: "secondary",
            onClick: () => {
              u.A.removeFriend(l, {
                location: C.liQ.DM_CHANNEL
              })
            },
            text: I.intl.string(I.t.cvSt1J)
          }), o]
        });
      case C.eA$.BLOCKED:
        return (0, r.jsx)(c.Button, {
          size: "sm",
          variant: "secondary",
          onClick: () => {
            u.A.unblockUser(l, {
              location: C.liQ.DM_CHANNEL
            })
          },
          text: I.intl.string(I.t.XyHpKH)
        });
      case C.eA$.PENDING_INCOMING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.Button, {
            size: "sm",
            variant: "primary",
            onClick: a,
            text: I.intl.string(I.t["+WbSn5"])
          }), (0, r.jsx)(c.Button, {
            size: "sm",
            variant: "secondary",
            onClick: () => {
              u.A.cancelFriendRequest(l, {
                location: C.liQ.DM_CHANNEL
              })
            },
            text: I.intl.string(I.t.rQSndv)
          }), o]
        });
      case C.eA$.PENDING_OUTGOING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.Button, {
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
    } = e, i = l.useCallback(() => {
      (0, c.showToast)((0, c.createToast)(I.intl.string(I.t.a2j0hv), c.ToastType.FAILURE))
    }, []), s = l.useCallback(() => {
      A.A.closeChannelSidebar(_.fe)
    }, []), a = l.useCallback(() => {
      A.A.closeChannelSidebar(_.fe)
    }, []), {
      acceptMessageRequest: o,
      rejectMessageRequest: u,
      isAcceptLoading: d,
      isRejectLoading: h,
      isOptimisticAccepted: p,
      isOptimisticRejected: g
    } = (0, f.t)({
      user: x.default.getUser(n),
      onError: i,
      onAcceptSuccess: a,
      onRejectSuccess: s
    }), m = d || h || p || g;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Button, {
        variant: "primary",
        size: "sm",
        disabled: m,
        onClick: () => o(t),
        loading: d,
        text: I.intl.string(I.t.Kz8Pwr)
      }), (0, r.jsx)(c.Button, {
        variant: "secondary",
        size: "sm",
        disabled: m,
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
      showingBanner: l
    } = e, {
      channelId: i
    } = (0, m.N)(), u = (0, o.bG)([g.A], () => null != i && g.A.isSpam(i), [i]), d = (0, o.bG)([j.A], () => j.A.getRelationshipType(t), [t]), h = n.id === i, p = !a.Fr && !h, f = !!a.Fr || h || u, A = u || h ? (0, r.jsxs)("div", {
      className: N.mG,
      children: [(0, r.jsx)(w, {
        channelId: n.id,
        otherUserId: t
      }), (0, r.jsx)(b.A, {
        channel: n
      })]
    }) : (0, r.jsxs)("div", {
      className: N.mG,
      children: [(0, r.jsx)(P, {
        relationshipType: d,
        userId: t,
        showingBanner: l
      }), !l && (0, r.jsx)(E.A, {
        otherUserId: t,
        channel: n,
        navigateAwayOnReportSuccess: p
      })]
    }), y = d !== C.eA$.PENDING_INCOMING || u || h ? null : (0, r.jsx)(c.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: I.intl.string(I.t.c2v5nO)
    });
    return (0, r.jsxs)("div", {
      className: f ? N.AA : N.kL,
      children: [(0, r.jsx)("div", {
        className: N.mG,
        children: (0, r.jsx)(T, {
          userId: t,
          channelId: n.id
        })
      }), !f && (0, r.jsx)("div", {
        className: N.yF
      }), (0, r.jsxs)("div", {
        className: s()(N.mG, N.LV),
        children: [y, A]
      })]
    })
  }