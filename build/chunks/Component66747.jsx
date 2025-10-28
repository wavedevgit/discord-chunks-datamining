/** Chunk was on 6850 **/
/** chunk id: 66747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => el
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk498607 = require("./498607.js"),
  c = require.n(Chunk498607),
  Chunk399606 = require("./399606.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
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
  Chunk266631 = require("./266631.js");
let W = Chunk647438.memo(function(e) {
    let {
      member: t
    } = e, n = l.useMemo(() => (0, x.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), i = l.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
    return (0, r.jsxs)("div", {
      className: Q.flagContainer,
      children: [t.hasUnusualDmActivity && (0, r.jsx)(C.u, {
        text: Y.intl.string(Y.t.QrfVTp),
        children: (0, r.jsx)(b.b6m, {
          size: "custom",
          width: 20,
          height: 20,
          color: d.Z.colors.TEXT_MUTED.css
        })
      }), n && (0, r.jsx)(C.u, {
        "aria-label": Y.intl.string(Y.t["xfJP+u"]),
        __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
          className: Q.communicationDisabledTooltip,
          children: [(0, r.jsx)("div", {
            children: Y.intl.string(Y.t["xfJP+u"])
          }), (0, r.jsx)(g.Z, {
            deadline: i,
            showUnits: true,
            stopAtOneSec: true
          })]
        }),
        children: (0, r.jsx)(b.YlB, {
          size: "custom",
          width: 20,
          height: 20,
          color: d.Z.colors.TEXT_DANGER.css
        })
      }), (0, H.He)(t.userId) && (0, r.jsx)(C.u, {
        text: Y.intl.string(Y.t.PK9FQ2),
        children: (0, r.jsx)(D.Z, {
          width: 20,
          height: 20,
          color: d.Z.colors.TEXT_DANGER.css
        })
      }), (0, j.EY)(t) && (0, r.jsx)(C.u, {
        text: Y.intl.string(Y.t.qOVbaX),
        children: (0, r.jsx)(b.ics, {
          size: "custom",
          width: 20,
          height: 20,
          color: d.Z.colors.TEXT_MUTED.css
        })
      })]
    })
  }),
  K = Chunk647438.memo(function(e) {
    let {
      member: t,
      highestRole: n
    } = e, i = (0, u.e7)([S.Z], () => S.Z.getGuild(t.guildId), [t.guildId]), a = t.roles.length - 1, s = l.useMemo(() => new Intl.NumberFormat(Y.intl.currentLocale).format(a), [a]), c = (0, B.vN)(t), d = (0, B.vN)(t, true), m = (0, u.e7)([Z.Z], () => Z.Z.can(q.Plq.MANAGE_ROLES, i), [i]);
    return null == i ? null : (0, r.jsxs)("div", {
      className: Q.roleContainer,
      children: [null != n && (0, r.jsx)(F.Z, {
        className: o()(Q.roleTooltipItem, Q.highestRole),
        role: n,
        guildId: t.guildId
      }), a > 0 && (0, r.jsx)(b.P3F, {
        className: Q.otherRoles,
        onClick: e => d(e),
        children: (0, r.jsx)(C.u, {
          text: Y.intl.string(Y.t.DY6n4q),
          children: (0, r.jsxs)(b.Text, {
            variant: "text-xs/medium",
            color: "header-primary",
            children: ["+", s]
          })
        })
      }), m && (0, r.jsx)(C.u, {
        text: Y.intl.string(Y.t.h3pSLR),
        children: (0, r.jsx)(b.P3F, {
          onClick: c,
          className: o()(Q.otherRoles, Q.addRoleContainer),
          children: (0, r.jsx)(b.qJs, {
            size: "custom",
            color: "currentColor",
            className: Q.addRoleIcon,
            width: 16,
            height: 16
          })
        })
      })]
    })
  }),
  J = Chunk647438.memo(function(e) {
    var t, n;
    let {
      member: l,
      user: i
    } = e, o = (0, _.X7)(null == l ? true : l.guildId, null == l ? true : l.userId, null != (t = null == l ? true : l.colorStrings) ? t : null);
    return null == i || null == l ? null : (0, r.jsxs)("div", {
      className: Q.memberNameContainer,
      children: [(0, r.jsx)("div", {
        className: Q.memberAvatar,
        children: (0, r.jsx)(p.Z, {
          user: i
        })
      }), (0, r.jsx)("div", {
        className: Q.memberName,
        children: (0, r.jsx)(b.Text, {
          variant: "text-sm/medium",
          children: (0, r.jsxs)("div", {
            className: Q.nameContainer,
            children: [(0, r.jsx)(b.PUh, {
              name: L.ZP.getName(l.guildId, null, i),
              colorString: null != (n = l.colorString) ? n : null,
              colorStrings: o,
              className: Q.memberNameText
            }), (0, r.jsx)(O.ZP, {
              primaryGuild: null == i ? true : i.primaryGuild,
              userId: null == i ? true : i.id,
              contextGuildId: l.guildId,
              containerClassName: Q.memberClanTag
            })]
          })
        })
      }), (0, r.jsx)("div", {
        className: Q.memberGlobalName,
        children: (0, r.jsx)(b.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          tag: "span",
          children: I.ZP.getUserTag(i)
        })
      })]
    })
  });

function X(e) {
  return {
    short: null == e ? null : (0, V.fv)(e, V.jq.JOINED_AT),
    long: new Date(null != e ? e : 0).toLocaleDateString(Y.intl.currentLocale, V.UG)
  }
}

function $(e) {
  let {
    member: t,
    showLongDate: n,
    isSortedBy: i
  } = e, [o, a] = l.useState(null);
  l.useEffect(() => {
    a(X(t.joinedAtTimestamp))
  }, [t.joinedAtTimestamp]), (0, f.Z)(() => {
    a(X(t.joinedAtTimestamp))
  }, 1e4);
  let s = i ? "text-brand" : "text-default";
  return (null == o ? true : o.short) == null ? null : n ? (0, r.jsx)("div", {
    className: Q.__invalid_joinedAtContainer,
    children: (0, r.jsx)(b.Text, {
      variant: "text-sm/medium",
      color: s,
      children: o.long
    })
  }) : (0, r.jsx)("div", {
    className: Q.__invalid_joinedAtContainer,
    children: (0, r.jsx)(C.u, {
      align: "left",
      __unsupportedReactNodeAsText: o.long,
      children: (0, r.jsx)(b.Text, {
        variant: "text-sm/medium",
        color: s,
        children: o.short
      })
    })
  })
}
let ee = Chunk647438.memo(function(e) {
    let {
      member: t,
      showLongDate: n,
      isSortedBy: i
    } = e, {
      accountCreationDateShort: o,
      accountCreationDateLong: a
    } = l.useMemo(() => {
      let e = P.default.extractTimestamp(t.userId);
      return {
        accountCreationDateShort: (0, V.fv)(e, V.jq.ACCOUNT_AGE),
        accountCreationDateLong: new Date(e).toLocaleDateString(Y.intl.currentLocale, V.I)
      }
    }, [t.userId]), s = i ? "text-brand" : "text-default";
    return n ? (0, r.jsx)(b.Text, {
      variant: "text-sm/medium",
      color: s,
      children: a
    }) : (0, r.jsx)(C.u, {
      align: "left",
      __unsupportedReactNodeAsText: a,
      children: (0, r.jsx)(b.Text, {
        variant: "text-sm/medium",
        color: s,
        children: o
      })
    })
  }),
  et = Chunk647438.memo(function(e) {
    let {
      member: t,
      user: n,
      highestRole: i,
      isHoldingAdvancedInfoKey: a,
      onOpenModerationMenu: s,
      onOpenMemberView: d,
      compact: p,
      hasModViewPanelAccess: f
    } = e, h = (0, u.e7)([Z.Z, S.Z], () => Z.Z.can(q.Plq.MANAGE_GUILD, S.Z.getGuild(t.guildId)), [t.guildId]), {
      selectedUserIds: g,
      addUsers: j,
      removeUser: x
    } = (0, U.Z)(t.guildId), v = (0, E.xC)(t.guildId), y = (0, E.hB)(t.guildId, v, t.userId), O = (0, u.e7)([T.Z], () => {
      var e;
      return null != (e = T.Z.getSearchStateByGuildId(t.guildId).selectedSort) ? e : M.d$.ORDER_BY_UNSPECIFIED
    }, [t.guildId], c()), H = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != t && y && (g.has(t.userId) ? x(t.userId) : j([t.userId]))
    }, [j, y, t, x, g]), _ = O === M.d$.ORDER_BY_GUILD_JOINED_AT_ASC, w = O === M.d$.ORDER_BY_USER_ID_ASC || O === M.d$.ORDER_BY_USER_ID_DESC;
    return (0, r.jsxs)(r.Fragment, {
      children: [v && (0, r.jsx)(C.u, {
        shouldShow: !y,
        text: Y.intl.string(Y.t["Se4c7+"]),
        children: (0, r.jsx)("td", {
          children: (0, r.jsx)("div", {
            className: o()(Q.__invalid_checkbox, Q.xsmallCol),
            children: (0, r.jsx)(b.P3F, {
              onClick: H,
              children: (0, r.jsx)(m.$q, {
                type: m.M0.INVERTED,
                value: g.has(t.userId),
                disabled: !y
              })
            })
          })
        })
      }), (0, r.jsx)("td", {
        className: o()({
          [Q.compact]: p
        }),
        children: (0, r.jsx)(J, {
          member: t,
          user: n
        })
      }), (0, r.jsx)("td", {
        className: o()(Q.smallCol, {
          [Q.compact]: p
        }),
        children: (0, r.jsx)($, {
          showLongDate: a,
          member: t,
          isSortedBy: _
        })
      }), (0, r.jsx)("td", {
        className: o()(Q.smallCol, {
          [Q.compact]: p
        }),
        children: (0, r.jsx)(ee, {
          showLongDate: a,
          member: t,
          isSortedBy: w
        })
      }), h && (0, r.jsx)("td", {
        className: o()(Q.smallCol, {
          [Q.compact]: p
        }),
        children: (0, r.jsx)(A.ZP, {
          userId: t.userId,
          guildId: t.guildId
        })
      }), (0, r.jsx)("td", {
        className: o()(Q.mediumCol, {
          [Q.compact]: p
        }),
        children: (0, r.jsx)(K, {
          member: t,
          highestRole: i
        })
      }), (0, r.jsx)("td", {
        className: o()(Q.smallCol, {
          [Q.compact]: p
        }),
        children: (0, r.jsx)(W, {
          member: t
        })
      }), (0, r.jsx)("td", {
        className: o()(Q.smallCol, {
          [Q.compact]: p
        }),
        children: (0, r.jsxs)("div", {
          className: Q.actionCell,
          children: [(0, r.jsx)(C.u, {
            asContainer: true,
            text: f ? Y.intl.string(Y.t.nHfkf4) : Y.intl.string(Y.t.uTre2y),
            children: (0, r.jsx)(b.P3F, {
              onClick: d,
              className: Q.button,
              children: f ? (0, r.jsx)(R.Z, {
                width: en,
                height: en
              }) : (0, r.jsx)(b.tBG, {
                size: "custom",
                color: "currentColor",
                width: en,
                height: en
              })
            })
          }), (0, r.jsx)(C.u, {
            asContainer: true,
            text: Y.intl.string(Y.t.x8Nn4M),
            children: (0, r.jsx)(b.P3F, {
              onClick: s,
              className: Q.button,
              children: (0, r.jsx)(b.Huf, {
                size: "custom",
                color: "currentColor",
                width: en,
                height: en
              })
            })
          })]
        })
      })]
    })
  }),
  en = 18,
  er = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
  el = Chunk647438.memo(function(e) {
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
    } = (0, h.ZP)(), p = (0, u.e7)([w.ZP], () => w.ZP.getGuildSidebarState(n), [n]), f = (null == p ? true : p.details.userId) === t, g = (0, u.e7)([T.Z], () => T.Z.getEnhancedMember(n, t), [n, t]), j = (0, B.zq)(g), x = (0, u.e7)([N.default], () => N.default.getUser(t), [t]), O = (0, y.m)(n), H = (0, B.RN)(null != g ? g : true), _ = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), H(e)
    }, [H]), S = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != g && (0, B.RE)(g, b)
    }, [g, b]), Z = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != g && (O ? (0, v.r)(g.guildId, g.userId, G.oC.MEMBER_SAFETY, {
        modViewPanel: z.k.INFO
      }) : (0, B.RE)(g, b))
    }, [g, b, O]), D = l.useCallback((e, t) => c()((0, a.omit)(e, er), (0, a.omit)(t, er)), []);
    return null == g ? null : (0, r.jsx)(k.Z, {
      role: "row",
      value: g,
      style: i,
      className: o()(Q.roundedRow, Q.memberRowContainer, s && Q.selected, f && Q.memberSelected, d && Q.loading),
      equalityFn: D,
      onClick: S,
      onContextMenu: _,
      children: (0, r.jsx)(et, {
        member: g,
        user: x,
        highestRole: j,
        isHoldingAdvancedInfoKey: C,
        onOpenModerationMenu: _,
        onOpenMemberView: Z,
        compact: m,
        hasModViewPanelAccess: O
      })
    })
  })