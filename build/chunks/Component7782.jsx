/** Chunk was on 81985 **/
/** chunk id: 7782, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk100527 = require("./100527.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk276506 = require("./276506.js"),
  Chunk333984 = require("./333984.js"),
  Chunk486622 = require("./486622.js"),
  Chunk488634 = require("./488634.js"),
  Chunk86203 = require("./86203.jsx"),
  Chunk6025 = require("./6025.js"),
  Chunk621853 = require("./621853.js"),
  Chunk892001 = require("./892001.js"),
  Chunk433355 = require("./433355.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk525541 = require("./525541.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk60845 = require("./60845.js");
let N = e => {
    let {
      userId: t,
      channelId: n
    } = e, l = (0, s.e7)([v.Z], () => v.Z.getMutualGuilds(t), [t]), a = i.useMemo(() => null != l ? l.slice(0, 3).map((e, t) => {
      let {
        guild: n
      } = e, i = null != n ? E.ZP.getGuildIconURL({
        id: n.id,
        icon: n.icon,
        size: 24
      }) : null;
      if (null == i) return null;
      let a = t === (l.length > 3 ? 3 : l.length) - 1,
        o = (0, r.jsx)("img", {
          src: i,
          alt: "",
          className: Z.avatar
        }, t);
      return a ? o : (0, r.jsx)(p.ZP, {
        className: Z.avatarMask,
        mask: p.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
        width: 24,
        height: 24,
        children: o
      }, t)
    }).filter(e => null != e) : [], [l]);
    return null == l || 0 === l.length ? (0, r.jsx)(c.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: P.intl.string(P.t.zjVh8h)
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: Z.avatarContainer,
        children: a
      }), (0, r.jsx)(c.P3F, {
        onClick: () => {
          (0, O.openUserProfileModal)({
            userId: t,
            channelId: n,
            tabSection: I.oh.MUTUAL_GUILDS,
            sourceAnalyticsLocations: [d.Z.DM_CHANNEL]
          })
        },
        children: (0, r.jsx)(c.Text, {
          className: Z.mutualGuilds,
          variant: "text-sm/normal",
          children: P.intl.format(P.t.eE3oep, {
            count: l.length
          })
        })
      })]
    })
  },
  T = e => {
    var t;
    let {
      relationshipType: n,
      userId: i,
      showingBanner: l
    } = e, a = null == (t = C.default.getUser(i)) ? true : t.bot, o = () => {
      u.Z.addRelationship({
        userId: i,
        context: {
          location: _.ZY5.DM_CHANNEL
        }
      })
    }, s = (0, r.jsx)(c.Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => {
        u.Z.blockUser(i, {
          location: _.ZY5.DM_CHANNEL
        })
      },
      text: P.intl.string(P.t.l4Emac)
    }), d = (0, f.n)(i);
    switch (n) {
      case _.OGo.NONE:
        return (0, r.jsxs)(r.Fragment, {
          children: [!a && !l && (0, r.jsx)(c.Button, {
            size: "sm",
            variant: "primary",
            onClick: o,
            text: d
          }), s]
        });
      case _.OGo.FRIEND:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.Button, {
            size: "sm",
            variant: "secondary",
            onClick: () => {
              u.Z.removeFriend(i, {
                location: _.ZY5.DM_CHANNEL
              })
            },
            text: P.intl.string(P.t.cvSt1J)
          }), s]
        });
      case _.OGo.BLOCKED:
        return (0, r.jsx)(c.Button, {
          size: "sm",
          variant: "secondary",
          onClick: () => {
            u.Z.unblockUser(i, {
              location: _.ZY5.DM_CHANNEL
            })
          },
          text: P.intl.string(P.t.XyHpKH)
        });
      case _.OGo.PENDING_INCOMING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.Button, {
            size: "sm",
            variant: "primary",
            onClick: o,
            text: P.intl.string(P.t["+WbSn5"])
          }), (0, r.jsx)(c.Button, {
            size: "sm",
            variant: "secondary",
            onClick: () => {
              u.Z.cancelFriendRequest(i, {
                location: _.ZY5.DM_CHANNEL
              })
            },
            text: P.intl.string(P.t.rQSndv)
          }), s]
        });
      case _.OGo.PENDING_OUTGOING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.Button, {
            size: "sm",
            variant: "primary",
            disabled: true,
            text: P.intl.string(P.t.xMH6vD)
          }), s]
        });
      default:
        return null
    }
  },
  A = e => {
    let {
      channelId: t,
      otherUserId: n
    } = e, l = i.useCallback(() => {
      (0, c.showToast)((0, c.createToast)(P.intl.string(P.t.a2j0hv), c.ToastType.FAILURE))
    }, []), a = i.useCallback(() => {
      y.Z.closeChannelSidebar(j.uZ)
    }, []), o = i.useCallback(() => {
      y.Z.closeChannelSidebar(j.uZ)
    }, []), {
      acceptMessageRequest: s,
      rejectMessageRequest: u,
      isAcceptLoading: d,
      isRejectLoading: p,
      isOptimisticAccepted: f,
      isOptimisticRejected: h
    } = (0, g.m)({
      user: C.default.getUser(n),
      onError: l,
      onAcceptSuccess: o,
      onRejectSuccess: a
    }), m = d || p || f || h;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Button, {
        variant: "primary",
        size: "sm",
        disabled: m,
        onClick: () => s(t),
        loading: d,
        text: P.intl.string(P.t.Kz8Pwr)
      }), (0, r.jsx)(c.Button, {
        variant: "secondary",
        size: "sm",
        disabled: m,
        onClick: () => u(t),
        loading: p,
        text: P.intl.string(P.t.B2nygW)
      })]
    })
  },
  w = e => {
    let {
      userId: t,
      channel: n,
      showingBanner: i
    } = e, {
      channelId: l
    } = (0, m._)(), u = (0, s.e7)([h.Z], () => null != l && h.Z.isSpam(l), [l]), d = (0, s.e7)([x.Z], () => x.Z.getRelationshipType(t), [t]), p = n.id === l, f = !o.tq && !p, g = !!o.tq || p || u, y = u || p ? (0, r.jsxs)("div", {
      className: Z.inline,
      children: [(0, r.jsx)(A, {
        channelId: n.id,
        otherUserId: t
      }), (0, r.jsx)(b.Z, {
        channel: n
      })]
    }) : (0, r.jsxs)("div", {
      className: Z.inline,
      children: [(0, r.jsx)(T, {
        relationshipType: d,
        userId: t,
        showingBanner: i
      }), !i && (0, r.jsx)(S.Z, {
        otherUserId: t,
        channel: n,
        navigateAwayOnReportSuccess: f
      })]
    }), v = d !== _.OGo.PENDING_INCOMING || u || p ? null : (0, r.jsx)(c.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: P.intl.string(P.t.c2v5nO)
    });
    return (0, r.jsxs)("div", {
      className: g ? Z.mobileContainer : Z.container,
      children: [(0, r.jsx)("div", {
        className: Z.inline,
        children: (0, r.jsx)(N, {
          userId: t,
          channelId: n.id
        })
      }), !g && (0, r.jsx)("div", {
        className: Z.divider
      }), (0, r.jsxs)("div", {
        className: a()(Z.inline, Z.wrap),
        children: [v, y]
      })]
    })
  }