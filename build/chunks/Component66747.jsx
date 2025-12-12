/** Chunk was on 6850 **/
/** chunk id: 66747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => er
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk498607 = require("./498607.js"),
  c = require.n(Chunk498607),
  Chunk399606 = require("./399606.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk745735 = require("./745735.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk346486 = require("./346486.jsx"),
  Chunk715903 = require("./715903.js"),
  Chunk69882 = require("./69882.js"),
  Chunk189432 = require("./189432.js"),
  Chunk189357 = require("./189357.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk493892 = require("./493892.js"),
  Chunk884902 = require("./884902.js"),
  Chunk433355 = require("./433355.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk203893 = require("./203893.jsx"),
  Chunk777288 = require("./777288.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk815790 = require("./815790.js"),
  Chunk588215 = require("./588215.js"),
  Chunk241559 = require("./241559.js"),
  Chunk893966 = require("./893966.js"),
  Chunk685244 = require("./685244.jsx"),
  Chunk16829 = require("./16829.jsx"),
  Chunk256003 = require("./256003.js"),
  Chunk472596 = require("./472596.js"),
  Chunk285173 = require("./285173.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk983266 = require("./983266.js");
let Q = Chunk473749.memo(function(e) {
    let {
      member: t
    } = e, n = l.useMemo(() => (0, j.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), i = l.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
    return (0, r.jsxs)("div", {
      className: Y.flagContainer,
      children: [t.hasUnusualDmActivity && (0, r.jsx)(C.u, {
        text: z.intl.string(z.t.QrfVTp),
        children: (0, r.jsx)(m.b6m, {
          size: "custom",
          width: 20,
          height: 20,
          color: d.Z.colors.TEXT_MUTED.css
        })
      }), n && (0, r.jsx)(C.u, {
        "aria-label": z.intl.string(z.t["xfJP+u"]),
        __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
          className: Y.communicationDisabledTooltip,
          children: [(0, r.jsx)("div", {
            children: z.intl.string(z.t["xfJP+u"])
          }), (0, r.jsx)(h.Z, {
            deadline: i,
            showUnits: true,
            stopAtOneSec: true
          })]
        }),
        children: (0, r.jsx)(m.YlB, {
          size: "custom",
          width: 20,
          height: 20,
          color: d.Z.colors.TEXT_FEEDBACK_CRITICAL.css
        })
      }), (0, O.He)(t.userId) && (0, r.jsx)(C.u, {
        text: z.intl.string(z.t.PK9FQ2),
        children: (0, r.jsx)(N.Z, {
          width: 20,
          height: 20,
          color: d.Z.colors.TEXT_FEEDBACK_CRITICAL.css
        })
      }), (0, g.EY)(t) && (0, r.jsx)(C.u, {
        text: z.intl.string(z.t.qOVbaX),
        children: (0, r.jsx)(m.ics, {
          size: "custom",
          width: 20,
          height: 20,
          color: d.Z.colors.TEXT_MUTED.css
        })
      })]
    })
  }),
  W = Chunk473749.memo(function(e) {
    let {
      member: t,
      highestRole: n
    } = e, i = (0, u.e7)([S.Z], () => S.Z.getGuild(t.guildId), [t.guildId]), a = t.roles.length - 1, s = l.useMemo(() => new Intl.NumberFormat(z.intl.currentLocale).format(a), [a]), c = (0, U.vN)(t), d = (0, U.vN)(t, true), b = (0, u.e7)([Z.Z], () => Z.Z.can(B.Plq.MANAGE_ROLES, i), [i]);
    return null == i ? null : (0, r.jsxs)("div", {
      className: Y.roleContainer,
      children: [null != n && (0, r.jsx)(F.Z, {
        className: o()(Y.roleTooltipItem, Y.highestRole),
        role: n,
        guildId: t.guildId
      }), a > 0 && (0, r.jsx)(m.P3F, {
        className: Y.otherRoles,
        onClick: e => d(e),
        children: (0, r.jsx)(C.u, {
          text: z.intl.string(z.t.DY6n4q),
          children: (0, r.jsxs)(m.Text, {
            variant: "text-xs/medium",
            color: "text-strong",
            children: ["+", s]
          })
        })
      }), b && (0, r.jsx)(C.u, {
        text: z.intl.string(z.t.h3pSLR),
        children: (0, r.jsx)(m.P3F, {
          onClick: c,
          className: o()(Y.otherRoles, Y.addRoleContainer),
          children: (0, r.jsx)(m.qJs, {
            size: "custom",
            color: "currentColor",
            className: Y.addRoleIcon,
            width: 16,
            height: 16
          })
        })
      })]
    })
  }),
  K = Chunk473749.memo(function(e) {
    var t, n;
    let {
      member: l,
      user: i
    } = e, o = (0, H.X7)(null == l ? true : l.guildId, null == l ? true : l.userId, null != (t = null == l ? true : l.colorStrings) ? t : null);
    return null == i || null == l ? null : (0, r.jsxs)("div", {
      className: Y.memberNameContainer,
      children: [(0, r.jsx)("div", {
        className: Y.memberAvatar,
        children: (0, r.jsx)(b.Z, {
          user: i
        })
      }), (0, r.jsx)("div", {
        className: Y.memberName,
        children: (0, r.jsx)(m.Text, {
          variant: "text-sm/medium",
          children: (0, r.jsxs)("div", {
            className: Y.nameContainer,
            children: [(0, r.jsx)(m.PUh, {
              name: R.ZP.getName(l.guildId, null, i),
              colorString: null != (n = l.colorString) ? n : null,
              colorStrings: o,
              className: Y.memberNameText
            }), (0, r.jsx)(y.ZP, {
              primaryGuild: null == i ? true : i.primaryGuild,
              userId: null == i ? true : i.id,
              contextGuildId: l.guildId,
              containerClassName: Y.memberClanTag
            })]
          })
        })
      }), (0, r.jsx)("div", {
        className: Y.memberGlobalName,
        children: (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          tag: "span",
          children: I.ZP.getUserTag(i)
        })
      })]
    })
  });

function J(e) {
  return {
    short: null == e ? null : (0, P.fv)(e, P.jq.JOINED_AT),
    long: new Date(null != e ? e : 0).toLocaleDateString(z.intl.currentLocale, P.UG)
  }
}

function X(e) {
  let {
    member: t,
    showLongDate: n,
    isSortedBy: i
  } = e, [o, a] = l.useState(null);
  l.useEffect(() => {
    a(J(t.joinedAtTimestamp))
  }, [t.joinedAtTimestamp]), (0, f.Z)(() => {
    a(J(t.joinedAtTimestamp))
  }, 1e4);
  let s = i ? "text-brand" : "text-default";
  return (null == o ? true : o.short) == null ? null : n ? (0, r.jsx)("div", {
    className: Y.__invalid_joinedAtContainer,
    children: (0, r.jsx)(m.Text, {
      variant: "text-sm/medium",
      color: s,
      children: o.long
    })
  }) : (0, r.jsx)("div", {
    className: Y.__invalid_joinedAtContainer,
    children: (0, r.jsx)(C.u, {
      align: "left",
      __unsupportedReactNodeAsText: o.long,
      children: (0, r.jsx)(m.Text, {
        variant: "text-sm/medium",
        color: s,
        children: o.short
      })
    })
  })
}
let $ = Chunk473749.memo(function(e) {
    let {
      member: t,
      showLongDate: n,
      isSortedBy: i
    } = e, {
      accountCreationDateShort: o,
      accountCreationDateLong: a
    } = l.useMemo(() => {
      let e = L.default.extractTimestamp(t.userId);
      return {
        accountCreationDateShort: (0, P.fv)(e, P.jq.ACCOUNT_AGE),
        accountCreationDateLong: new Date(e).toLocaleDateString(z.intl.currentLocale, P.I)
      }
    }, [t.userId]), s = i ? "text-brand" : "text-default";
    return n ? (0, r.jsx)(m.Text, {
      variant: "text-sm/medium",
      color: s,
      children: a
    }) : (0, r.jsx)(C.u, {
      align: "left",
      __unsupportedReactNodeAsText: a,
      children: (0, r.jsx)(m.Text, {
        variant: "text-sm/medium",
        color: s,
        children: o
      })
    })
  }),
  ee = Chunk473749.memo(function(e) {
    let {
      member: t,
      user: n,
      highestRole: i,
      isHoldingAdvancedInfoKey: a,
      onOpenModerationMenu: s,
      onOpenMemberView: d,
      compact: b,
      hasModViewPanelAccess: f
    } = e, p = (0, u.e7)([Z.Z, S.Z], () => Z.Z.can(B.Plq.MANAGE_GUILD, S.Z.getGuild(t.guildId)), [t.guildId]), {
      selectedUserIds: h,
      addUsers: g,
      removeUser: j
    } = (0, A.Z)(t.guildId), x = (0, M.xC)(t.guildId), v = (0, M.hB)(t.guildId, x, t.userId), y = (0, u.e7)([E.Z], () => {
      var e;
      return null != (e = E.Z.getSearchStateByGuildId(t.guildId).selectedSort) ? e : V.d$.ORDER_BY_UNSPECIFIED
    }, [t.guildId], c()), O = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != t && v && (h.has(t.userId) ? j(t.userId) : g([t.userId]))
    }, [g, v, t, j, h]), H = y === V.d$.ORDER_BY_GUILD_JOINED_AT_ASC, w = y === V.d$.ORDER_BY_USER_ID_ASC || y === V.d$.ORDER_BY_USER_ID_DESC;
    return (0, r.jsxs)(r.Fragment, {
      children: [x && (0, r.jsx)("td", {
        children: (0, r.jsx)("div", {
          className: Y.xsmallCol,
          children: (0, r.jsx)(C.u, {
            shouldShow: !v,
            ariaHidden: v,
            text: z.intl.string(z.t["Se4c7+"]),
            children: (0, r.jsx)(m.P3F, {
              onClick: O,
              children: (0, r.jsx)(m.FZ5, {
                checked: h.has(t.userId),
                disabled: !v
              })
            })
          })
        })
      }), (0, r.jsx)("td", {
        className: o()(Y.mediumCol, {
          [Y.compact]: b
        }),
        children: (0, r.jsx)(K, {
          member: t,
          user: n
        })
      }), (0, r.jsx)("td", {
        className: o()(Y.smallCol, {
          [Y.compact]: b
        }),
        children: (0, r.jsx)(X, {
          showLongDate: a,
          member: t,
          isSortedBy: H
        })
      }), (0, r.jsx)("td", {
        className: o()(Y.smallCol, {
          [Y.compact]: b
        }),
        children: (0, r.jsx)($, {
          showLongDate: a,
          member: t,
          isSortedBy: w
        })
      }), p && (0, r.jsx)("td", {
        className: o()(Y.smallCol, {
          [Y.compact]: b
        }),
        children: (0, r.jsx)(k.ZP, {
          userId: t.userId,
          guildId: t.guildId
        })
      }), (0, r.jsx)("td", {
        className: o()(Y.mediumCol, {
          [Y.compact]: b
        }),
        children: (0, r.jsx)(W, {
          member: t,
          highestRole: i
        })
      }), (0, r.jsx)("td", {
        className: o()(Y.smallCol, {
          [Y.compact]: b
        }),
        children: (0, r.jsx)(Q, {
          member: t
        })
      }), (0, r.jsx)("td", {
        className: o()(Y.fillCol, {
          [Y.compact]: b
        }),
        children: (0, r.jsxs)("div", {
          className: Y.actionCell,
          children: [(0, r.jsx)(C.u, {
            asContainer: true,
            text: f ? z.intl.string(z.t.nHfkf4) : z.intl.string(z.t.uTre2y),
            children: (0, r.jsx)(m.P3F, {
              onClick: d,
              className: Y.button,
              children: f ? (0, r.jsx)(_.Z, {
                width: et,
                height: et
              }) : (0, r.jsx)(m.tBG, {
                size: "custom",
                color: "currentColor",
                width: et,
                height: et
              })
            })
          }), (0, r.jsx)(C.u, {
            asContainer: true,
            text: z.intl.string(z.t.x8Nn4M),
            children: (0, r.jsx)(m.P3F, {
              onClick: s,
              className: Y.button,
              children: (0, r.jsx)(m.Huf, {
                size: "custom",
                color: "currentColor",
                width: et,
                height: et
              })
            })
          })]
        })
      })]
    })
  }),
  et = 18,
  en = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
  er = Chunk473749.memo(function(e) {
    let {
      userId: t,
      guildId: n,
      style: i,
      rowSelected: s,
      isLoading: d = false,
      isHoldingAdvancedInfoKey: C = false,
      compact: m = false
    } = e, {
      analyticsLocations: b
    } = (0, p.ZP)(), f = (0, u.e7)([w.ZP], () => w.ZP.getGuildSidebarState(n), [n]), h = (null == f ? true : f.details.userId) === t, g = (0, u.e7)([E.Z], () => E.Z.getEnhancedMember(n, t), [n, t]), j = (0, U.zq)(g), y = (0, u.e7)([D.default], () => D.default.getUser(t), [t]), O = (0, v.m)(n), H = (0, U.RN)(null != g ? g : true), S = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), H(e)
    }, [H]), Z = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != g && (0, U.RE)(g, b)
    }, [g, b]), N = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != g && (O ? (0, x.r)(g.guildId, g.userId, q.oC.MEMBER_SAFETY, {
        modViewPanel: G.k.INFO
      }) : (0, U.RE)(g, b))
    }, [g, b, O]), _ = l.useCallback((e, t) => c()((0, a.omit)(e, en), (0, a.omit)(t, en)), []);
    return null == g ? null : (0, r.jsx)(T.Z, {
      role: "row",
      value: g,
      style: i,
      className: o()(Y.roundedRow, Y.memberRowContainer, s && Y.selected, h && Y.memberSelected, d && Y.loading),
      equalityFn: _,
      onClick: Z,
      onContextMenu: S,
      children: (0, r.jsx)(ee, {
        member: g,
        user: y,
        highestRole: j,
        isHoldingAdvancedInfoKey: C,
        onOpenModerationMenu: S,
        onOpenMemberView: N,
        compact: m,
        hasModViewPanelAccess: O
      })
    })
  })