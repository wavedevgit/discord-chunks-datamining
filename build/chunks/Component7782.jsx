/** Chunk was on 40184 **/
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
let T = e => {
    let {
      userId: t,
      channelId: n
    } = e, l = (0, s.e7)([C.Z], () => C.Z.getMutualGuilds(t), [t]), a = r.useMemo(() => null != l ? l.slice(0, 3).map((e, t) => {
      let {
        guild: n
      } = e, r = null != n ? j.ZP.getGuildIconURL({
        id: n.id,
        icon: n.icon,
        size: 24
      }) : null;
      if (null == r) return null;
      let a = t === (l.length > 3 ? 3 : l.length) - 1,
        o = (0, i.jsx)("img", {
          src: r,
          alt: "",
          className: Z.avatar
        }, t);
      return a ? o : (0, i.jsx)(p.ZP, {
        className: Z.avatarMask,
        mask: p.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
        width: 24,
        height: 24,
        children: o
      }, t)
    }).filter(e => null != e) : [], [l]);
    return null == l || 0 === l.length ? (0, i.jsx)(c.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: I.intl.string(I.t.zjVh8h)
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("div", {
        className: Z.avatarContainer,
        children: a
      }), (0, i.jsx)(c.P3F, {
        onClick: () => {
          (0, v.openUserProfileModal)({
            userId: t,
            channelId: n,
            tabSection: P.oh.MUTUAL_GUILDS,
            sourceAnalyticsLocations: [d.Z.DM_CHANNEL]
          })
        },
        children: (0, i.jsx)(c.Text, {
          className: Z.mutualGuilds,
          variant: "text-sm/normal",
          children: I.intl.format(I.t.eE3oep, {
            count: l.length
          })
        })
      })]
    })
  },
  N = e => {
    var t;
    let {
      relationshipType: n,
      userId: r,
      showingBanner: l
    } = e, a = null == (t = E.default.getUser(r)) ? true : t.bot, o = () => {
      u.Z.addRelationship({
        userId: r,
        context: {
          location: _.ZY5.DM_CHANNEL
        }
      })
    }, s = (0, i.jsx)(c.Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => {
        u.Z.blockUser(r, {
          location: _.ZY5.DM_CHANNEL
        })
      },
      text: I.intl.string(I.t.l4Emac)
    }), d = (0, f.n)(r);
    switch (n) {
      case _.OGo.NONE:
        return (0, i.jsxs)(i.Fragment, {
          children: [!a && !l && (0, i.jsx)(c.Button, {
            size: "sm",
            variant: "primary",
            onClick: o,
            text: d
          }), s]
        });
      case _.OGo.FRIEND:
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(c.Button, {
            size: "sm",
            variant: "secondary",
            onClick: () => {
              u.Z.removeFriend(r, {
                location: _.ZY5.DM_CHANNEL
              })
            },
            text: I.intl.string(I.t.cvSt1J)
          }), s]
        });
      case _.OGo.BLOCKED:
        return (0, i.jsx)(c.Button, {
          size: "sm",
          variant: "secondary",
          onClick: () => {
            u.Z.unblockUser(r, {
              location: _.ZY5.DM_CHANNEL
            })
          },
          text: I.intl.string(I.t.XyHpKH)
        });
      case _.OGo.PENDING_INCOMING:
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(c.Button, {
            size: "sm",
            variant: "primary",
            onClick: o,
            text: I.intl.string(I.t["+WbSn5"])
          }), (0, i.jsx)(c.Button, {
            size: "sm",
            variant: "secondary",
            onClick: () => {
              u.Z.cancelFriendRequest(r, {
                location: _.ZY5.DM_CHANNEL
              })
            },
            text: I.intl.string(I.t.rQSndv)
          }), s]
        });
      case _.OGo.PENDING_OUTGOING:
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(c.Button, {
            size: "sm",
            variant: "primary",
            disabled: true,
            text: I.intl.string(I.t.xMH6vD)
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
    } = e, l = r.useCallback(() => {
      (0, c.showToast)((0, c.createToast)(I.intl.string(I.t.a2j0hv), c.ToastType.FAILURE))
    }, []), a = r.useCallback(() => {
      y.Z.closeChannelSidebar(x.uZ)
    }, []), o = r.useCallback(() => {
      y.Z.closeChannelSidebar(x.uZ)
    }, []), {
      acceptMessageRequest: s,
      rejectMessageRequest: u,
      isAcceptLoading: d,
      isRejectLoading: p,
      isOptimisticAccepted: f,
      isOptimisticRejected: h
    } = (0, m.m)({
      user: E.default.getUser(n),
      onError: l,
      onAcceptSuccess: o,
      onRejectSuccess: a
    }), g = d || p || f || h;
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(c.Button, {
        variant: "primary",
        size: "sm",
        disabled: g,
        onClick: () => s(t),
        loading: d,
        text: I.intl.string(I.t.Kz8Pwr)
      }), (0, i.jsx)(c.Button, {
        variant: "secondary",
        size: "sm",
        disabled: g,
        onClick: () => u(t),
        loading: p,
        text: I.intl.string(I.t.B2nygW)
      })]
    })
  },
  w = e => {
    let {
      userId: t,
      channel: n,
      showingBanner: r
    } = e, {
      channelId: l
    } = (0, g._)(), u = (0, s.e7)([h.Z], () => null != l && h.Z.isSpam(l), [l]), d = (0, s.e7)([O.Z], () => O.Z.getRelationshipType(t), [t]), p = n.id === l, f = !o.tq && !p, m = !!o.tq || p || u, y = u || p ? (0, i.jsxs)("div", {
      className: Z.inline,
      children: [(0, i.jsx)(A, {
        channelId: n.id,
        otherUserId: t
      }), (0, i.jsx)(b.Z, {
        channel: n
      })]
    }) : (0, i.jsxs)("div", {
      className: Z.inline,
      children: [(0, i.jsx)(N, {
        relationshipType: d,
        userId: t,
        showingBanner: r
      }), !r && (0, i.jsx)(S.Z, {
        otherUserId: t,
        channel: n,
        navigateAwayOnReportSuccess: f
      })]
    }), C = d !== _.OGo.PENDING_INCOMING || u || p ? null : (0, i.jsx)(c.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: I.intl.string(I.t.c2v5nO)
    });
    return (0, i.jsxs)("div", {
      className: m ? Z.mobileContainer : Z.container,
      children: [(0, i.jsx)("div", {
        className: Z.inline,
        children: (0, i.jsx)(T, {
          userId: t,
          channelId: n.id
        })
      }), !m && (0, i.jsx)("div", {
        className: Z.divider
      }), (0, i.jsxs)("div", {
        className: a()(Z.inline, Z.wrap),
        children: [C, y]
      })]
    })
  }