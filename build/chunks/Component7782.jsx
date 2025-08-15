/** Chunk was on 73551 **/
/** chunk id: 7782, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk291738 = require("./291738.js");
let Z = e => {
    let {
      userId: t,
      channelId: n
    } = e, l = (0, a.e7)([y.Z], () => y.Z.getMutualGuilds(t), [t]), o = i.useMemo(() => null != l ? l.slice(0, 3).map((e, t) => {
      let {
        guild: n
      } = e, i = null != n ? j.ZP.getGuildIconURL({
        id: n.id,
        icon: n.icon,
        size: 24
      }) : null;
      if (null == i) return null;
      let a = t === (l.length > 3 ? 3 : l.length) - 1,
        o = (0, r.jsx)("img", {
          src: i,
          alt: "",
          className: I.avatar
        }, t);
      return a ? o : (0, r.jsx)(d.ZP, {
        className: I.avatarMask,
        mask: d.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
        width: 24,
        height: 24,
        children: o
      }, t)
    }).filter(e => null != e) : [], [l]);
    return null == l || 0 === l.length ? (0, r.jsx)(s.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: P.intl.string(P.t.zjVh8v)
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: I.avatarContainer,
        children: o
      }), (0, r.jsx)(s.P3F, {
        onClick: () => {
          (0, _.openUserProfileModal)({
            userId: t,
            channelId: n,
            section: S.oh.MUTUAL_GUILDS,
            sourceAnalyticsLocations: [u.Z.DM_CHANNEL]
          })
        },
        children: (0, r.jsx)(s.Text, {
          className: I.mutualGuilds,
          variant: "text-sm/normal",
          children: P.intl.format(P.t.eE3oen, {
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
    } = e, a = null == (t = v.default.getUser(i)) ? true : t.bot, u = () => {
      c.Z.addRelationship({
        userId: i,
        context: {
          location: E.ZY5.DM_CHANNEL
        }
      })
    }, d = (0, r.jsx)(o.zx, {
      className: I.action,
      size: o.zx.Sizes.TINY,
      color: o.zx.Colors.PRIMARY,
      onClick: () => {
        c.Z.blockUser(i, {
          location: E.ZY5.DM_CHANNEL
        })
      },
      children: P.intl.string(P.t.l4EmaW)
    }), h = (0, p.n)({
      userId: i
    });
    switch (n) {
      case E.OGo.NONE:
        return (0, r.jsxs)(r.Fragment, {
          children: [!a && !l && (0, r.jsx)(o.zx, {
            className: I.action,
            size: o.zx.Sizes.TINY,
            onClick: u,
            children: h
          }), d]
        });
      case E.OGo.FRIEND:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.zx, {
            className: I.action,
            size: o.zx.Sizes.TINY,
            onClick: () => {
              c.Z.removeFriend(i, {
                location: E.ZY5.DM_CHANNEL
              })
            },
            color: o.zx.Colors.PRIMARY,
            children: P.intl.string(P.t.cvSt1N)
          }), d]
        });
      case E.OGo.BLOCKED:
        return (0, r.jsx)(o.zx, {
          className: I.action,
          size: o.zx.Sizes.TINY,
          onClick: () => {
            c.Z.unblockUser(i, {
              location: E.ZY5.DM_CHANNEL
            })
          },
          color: o.zx.Colors.PRIMARY,
          children: P.intl.string(P.t.XyHpKC)
        });
      case E.OGo.PENDING_INCOMING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.Text, {
            className: I.action,
            color: "header-secondary",
            variant: "text-sm/normal",
            children: P.intl.string(P.t.c2v5nJ)
          }), (0, r.jsx)(o.zx, {
            className: I.action,
            size: o.zx.Sizes.TINY,
            onClick: u,
            children: P.intl.string(P.t["+WbSn5"])
          }), (0, r.jsx)(o.zx, {
            className: I.action,
            size: o.zx.Sizes.TINY,
            color: o.zx.Colors.PRIMARY,
            onClick: () => {
              c.Z.cancelFriendRequest(i, {
                location: E.ZY5.DM_CHANNEL
              })
            },
            children: P.intl.string(P.t.rQSndn)
          }), d]
        });
      case E.OGo.PENDING_OUTGOING:
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.zx, {
            className: I.action,
            size: o.zx.Sizes.TINY,
            disabled: true,
            children: P.intl.string(P.t.xMH6vL)
          }), d]
        });
      default:
        return null
    }
  },
  N = e => {
    let {
      channelId: t,
      otherUserId: n
    } = e, l = i.useCallback(() => {
      (0, s.showToast)((0, s.createToast)(P.intl.string(P.t.a2j0ho), s.ToastType.FAILURE))
    }, []), a = i.useCallback(() => {
      b.Z.closeChannelSidebar(C.uZ)
    }, []), o = i.useCallback(() => {
      b.Z.closeChannelSidebar(C.uZ)
    }, []), {
      acceptMessageRequest: c,
      rejectMessageRequest: u,
      isAcceptLoading: d,
      isRejectLoading: p,
      isOptimisticAccepted: h,
      isOptimisticRejected: m
    } = (0, f.m)({
      user: v.default.getUser(n),
      onError: l,
      onAcceptSuccess: o,
      onRejectSuccess: a
    }), g = d || p || h || m;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.zxk, {
        variant: "primary",
        size: "sm",
        disabled: g,
        onClick: () => c(t),
        loading: d,
        text: P.intl.string(P.t.Kz8Pws)
      }), (0, r.jsx)(s.zxk, {
        variant: "secondary",
        size: "sm",
        disabled: g,
        onClick: () => u(t),
        loading: p,
        text: P.intl.string(P.t.B2nygY)
      })]
    })
  },
  A = e => {
    let {
      userId: t,
      channel: n,
      showingBanner: i
    } = e, {
      channelId: o
    } = (0, m._)(), s = (0, a.e7)([h.Z], () => null != o && h.Z.isSpam(o), [o]), c = (0, a.e7)([x.Z], () => x.Z.getRelationshipType(t), [t]), u = n.id === o, d = !l.tq && !u, p = !!l.tq || u || s, f = s || u ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N, {
        channelId: n.id,
        otherUserId: t
      }), (0, r.jsx)(g.Z, {
        channel: n
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(T, {
        relationshipType: c,
        userId: t,
        showingBanner: i
      }), !i && (0, r.jsx)(O.Z, {
        otherUserId: t,
        channel: n,
        navigateAwayOnReportSuccess: d
      })]
    });
    return (0, r.jsxs)("div", {
      className: p ? I.mobileContainer : I.container,
      children: [(0, r.jsx)("div", {
        className: I.inline,
        children: (0, r.jsx)(Z, {
          userId: t,
          channelId: n.id
        })
      }), !p && (0, r.jsx)("div", {
        className: I.divider
      }), (0, r.jsx)("div", {
        className: I.inline,
        children: f
      })]
    })
  }