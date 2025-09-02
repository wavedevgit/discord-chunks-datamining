/** Chunk was on 6850 **/
/** chunk id: 66747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eo
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk498607 = require("./498607.js"),
  c = require.n(Chunk498607),
  Chunk399606 = require("./399606.js"),
  Chunk692547 = require("./692547.js"),
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

function W(e) {
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

function K(e, t) {
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
let Q = Chunk647438.memo(function(e) {
    let {
      member: t
    } = e, n = l.useMemo(() => (0, g.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), o = l.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
    return (0, r.jsxs)("div", {
      className: Y.flagContainer,
      children: [t.hasUnusualDmActivity && (0, r.jsx)(m.ua7, {
        text: G.intl.string(G.t.QrfVTk),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, r.jsx)(m.b6m, {
            size: "custom",
            width: 20,
            height: 20,
            onMouseEnter: t,
            onMouseLeave: n,
            color: d.Z.colors.TEXT_MUTED.css
          })
        }
      }), n && (0, r.jsx)(m.ua7, {
        "aria-label": G.intl.string(G.t["xfJP+v"]),
        allowOverflow: true,
        text: (0, r.jsxs)("div", {
          className: Y.communicationDisabledTooltip,
          children: [(0, r.jsx)("div", {
            children: G.intl.string(G.t["xfJP+v"])
          }), (0, r.jsx)(h.Z, {
            deadline: o,
            showUnits: true,
            stopAtOneSec: true
          })]
        }),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, r.jsx)(m.YlB, {
            size: "custom",
            width: 20,
            height: 20,
            onMouseEnter: t,
            onMouseLeave: n,
            color: d.Z.colors.TEXT_DANGER.css
          })
        }
      }), (0, O.He)(t.userId) && (0, r.jsx)(m.ua7, {
        text: G.intl.string(G.t.PK9FQ0),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, r.jsx)(D.Z, {
            width: 20,
            height: 20,
            onMouseEnter: t,
            onMouseLeave: n,
            color: d.Z.colors.TEXT_DANGER.css
          })
        }
      }), (0, j.EY)(t) && (0, r.jsx)(m.ua7, {
        text: G.intl.string(G.t.qOVbaW),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, r.jsx)(m.ics, {
            size: "custom",
            width: 20,
            height: 20,
            onMouseEnter: t,
            onMouseLeave: n,
            color: d.Z.colors.TEXT_MUTED.css
          })
        }
      })]
    })
  }),
  X = Chunk647438.memo(function(e) {
    let {
      member: t,
      highestRole: n
    } = e, o = (0, u.e7)([w.Z], () => w.Z.getGuild(t.guildId), [t.guildId]), a = t.roles.length - 1, s = l.useMemo(() => new Intl.NumberFormat(G.intl.currentLocale).format(a), [a]), c = (0, B.vN)(t), d = (0, B.vN)(t, true), C = (0, u.e7)([N.Z], () => N.Z.can(F.Plq.MANAGE_ROLES, o), [o]);
    return null == o ? null : (0, r.jsxs)("div", {
      className: Y.roleContainer,
      children: [null != n && (0, r.jsx)(U.Z, {
        className: i()(Y.roleTooltipItem, Y.highestRole),
        role: n,
        guildId: t.guildId
      }), a > 0 && (0, r.jsx)(m.P3F, {
        className: Y.otherRoles,
        onClick: e => d(e),
        children: (0, r.jsx)(m.ua7, {
          text: G.intl.string(G.t.DY6n4u),
          children: e => (0, r.jsxs)(m.Text, K(W({
            variant: "text-xs/medium",
            color: "header-primary"
          }, e), {
            children: ["+", s]
          }))
        })
      }), C && (0, r.jsx)(m.ua7, {
        text: G.intl.string(G.t.h3pSLS),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, r.jsx)(m.P3F, {
            className: i()(Y.otherRoles, Y.addRoleContainer),
            onClick: c,
            onMouseEnter: t,
            onMouseLeave: n,
            children: (0, r.jsx)(m.qJs, {
              size: "custom",
              color: "currentColor",
              className: Y.addRoleIcon,
              width: 16,
              height: 16
            })
          })
        }
      })]
    })
  }),
  J = Chunk647438.memo(function(e) {
    var t, n;
    let {
      member: l,
      user: o
    } = e, i = (0, _.X7)(null == l ? true : l.guildId, null == l ? true : l.userId, null != (t = null == l ? true : l.colorStrings) ? t : null);
    return null == o || null == l ? null : (0, r.jsxs)("div", {
      className: Y.memberNameContainer,
      children: [(0, r.jsx)("div", {
        className: Y.memberAvatar,
        children: (0, r.jsx)(b.Z, {
          user: o
        })
      }), (0, r.jsx)("div", {
        className: Y.memberName,
        children: (0, r.jsx)(m.Text, {
          variant: "text-sm/medium",
          children: (0, r.jsxs)("div", {
            className: Y.nameContainer,
            children: [(0, r.jsx)(m.PUh, {
              name: R.ZP.getName(l.guildId, null, o),
              colorString: null != (n = l.colorString) ? n : null,
              colorStrings: i,
              className: Y.memberNameText
            }), (0, r.jsx)(y.ZP, {
              primaryGuild: null == o ? true : o.primaryGuild,
              userId: null == o ? true : o.id,
              contextGuildId: l.guildId,
              containerClassName: Y.memberClanTag
            })]
          })
        })
      }), (0, r.jsx)("div", {
        className: Y.memberGlobalName,
        children: (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          tag: "span",
          children: I.ZP.getUserTag(o)
        })
      })]
    })
  });

function $(e) {
  return {
    short: null == e ? null : (0, P.fv)(e, P.jq.JOINED_AT),
    long: new Date(null != e ? e : 0).toLocaleDateString(G.intl.currentLocale, P.UG)
  }
}

function ee(e) {
  let {
    member: t,
    showLongDate: n,
    isSortedBy: o
  } = e, [i, a] = l.useState(null);
  l.useEffect(() => {
    a($(t.joinedAtTimestamp))
  }, [t.joinedAtTimestamp]), (0, p.Z)(() => {
    a($(t.joinedAtTimestamp))
  }, 1e4);
  let s = o ? "text-brand" : "text-default";
  return (null == i ? true : i.short) == null ? null : n ? (0, r.jsx)("div", {
    className: Y.__invalid_joinedAtContainer,
    children: (0, r.jsx)(m.Text, {
      variant: "text-sm/medium",
      color: s,
      children: i.long
    })
  }) : (0, r.jsx)("div", {
    className: Y.__invalid_joinedAtContainer,
    children: (0, r.jsx)(m.ua7, {
      align: "left",
      text: i.long,
      children: e => (0, r.jsx)(m.Text, K(W({}, e), {
        variant: "text-sm/medium",
        color: s,
        children: i.short
      }))
    })
  })
}
let et = Chunk647438.memo(function(e) {
    let {
      member: t,
      showLongDate: n,
      isSortedBy: o
    } = e, {
      accountCreationDateShort: i,
      accountCreationDateLong: a
    } = l.useMemo(() => {
      let e = L.default.extractTimestamp(t.userId);
      return {
        accountCreationDateShort: (0, P.fv)(e, P.jq.ACCOUNT_AGE),
        accountCreationDateLong: new Date(e).toLocaleDateString(G.intl.currentLocale, P.I)
      }
    }, [t.userId]), s = o ? "text-brand" : "text-default";
    return n ? (0, r.jsx)(m.Text, {
      variant: "text-sm/medium",
      color: s,
      children: a
    }) : (0, r.jsx)(m.ua7, {
      align: "left",
      text: a,
      children: e => (0, r.jsx)(m.Text, K(W({}, e), {
        variant: "text-sm/medium",
        color: s,
        children: i
      }))
    })
  }),
  en = Chunk647438.memo(function(e) {
    let {
      member: t,
      user: n,
      highestRole: o,
      isHoldingAdvancedInfoKey: a,
      onOpenModerationMenu: s,
      onOpenMemberView: d,
      compact: b,
      hasModViewPanelAccess: p
    } = e, f = (0, u.e7)([N.Z, w.Z], () => N.Z.can(F.Plq.MANAGE_GUILD, w.Z.getGuild(t.guildId)), [t.guildId]), {
      selectedUserIds: h,
      addUsers: j,
      removeUser: g
    } = (0, A.Z)(t.guildId), x = (0, V.xC)(t.guildId), v = (0, V.hB)(t.guildId, x, t.userId), y = (0, u.e7)([E.Z], () => {
      var e;
      return null != (e = E.Z.getSearchStateByGuildId(t.guildId).selectedSort) ? e : M.d$.ORDER_BY_UNSPECIFIED
    }, [t.guildId], c()), O = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != t && v && (h.has(t.userId) ? g(t.userId) : j([t.userId]))
    }, [j, v, t, g, h]), _ = y === M.d$.ORDER_BY_GUILD_JOINED_AT_ASC, H = y === M.d$.ORDER_BY_USER_ID_ASC || y === M.d$.ORDER_BY_USER_ID_DESC;
    return (0, r.jsxs)(r.Fragment, {
      children: [x && (0, r.jsx)(m.ua7, {
        tooltipClassName: Y.disabledActionTooltip,
        shouldShow: !v,
        text: G.intl.string(G.t["Se4c7+"]),
        children: e => (0, r.jsx)("td", K(W({}, e), {
          children: (0, r.jsx)("div", {
            className: i()(Y.__invalid_checkbox, Y.xsmallCol),
            children: (0, r.jsx)(m.P3F, {
              onClick: O,
              children: (0, r.jsx)(C.$q, {
                type: C.M0.INVERTED,
                value: h.has(t.userId),
                disabled: !v
              })
            })
          })
        }))
      }), (0, r.jsx)("td", {
        className: i()({
          [Y.compact]: b
        }),
        children: (0, r.jsx)(J, {
          member: t,
          user: n
        })
      }), (0, r.jsx)("td", {
        className: i()(Y.smallCol, {
          [Y.compact]: b
        }),
        children: (0, r.jsx)(ee, {
          showLongDate: a,
          member: t,
          isSortedBy: _
        })
      }), (0, r.jsx)("td", {
        className: i()(Y.smallCol, {
          [Y.compact]: b
        }),
        children: (0, r.jsx)(et, {
          showLongDate: a,
          member: t,
          isSortedBy: H
        })
      }), f && (0, r.jsx)("td", {
        className: i()(Y.smallCol, {
          [Y.compact]: b
        }),
        children: (0, r.jsx)(k.ZP, {
          userId: t.userId,
          guildId: t.guildId
        })
      }), (0, r.jsx)("td", {
        className: i()(Y.mediumCol, {
          [Y.compact]: b
        }),
        children: (0, r.jsx)(X, {
          member: t,
          highestRole: o
        })
      }), (0, r.jsx)("td", {
        className: i()(Y.smallCol, {
          [Y.compact]: b
        }),
        children: (0, r.jsx)(Q, {
          member: t
        })
      }), (0, r.jsx)("td", {
        className: i()(Y.smallCol, {
          [Y.compact]: b
        }),
        children: (0, r.jsxs)("div", {
          className: Y.actionCell,
          children: [(0, r.jsx)(m.ua7, {
            text: p ? G.intl.string(G.t.nHfkf3) : G.intl.string(G.t.uTre29),
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, r.jsx)(m.P3F, {
                onMouseEnter: t,
                onMouseLeave: n,
                onClick: d,
                className: Y.button,
                children: p ? (0, r.jsx)(Z.Z, {
                  width: er,
                  height: er
                }) : (0, r.jsx)(m.tBG, {
                  size: "custom",
                  color: "currentColor",
                  width: er,
                  height: er
                })
              })
            }
          }), (0, r.jsx)(m.ua7, {
            text: G.intl.string(G.t.x8Nn4O),
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, r.jsx)(m.P3F, {
                onMouseEnter: t,
                onMouseLeave: n,
                onClick: s,
                className: Y.button,
                children: (0, r.jsx)(m.Huf, {
                  size: "custom",
                  color: "currentColor",
                  width: er,
                  height: er
                })
              })
            }
          })]
        })
      })]
    })
  }),
  er = 18,
  el = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
  eo = Chunk647438.memo(function(e) {
    let {
      userId: t,
      guildId: n,
      style: o,
      rowSelected: s,
      isLoading: d = false,
      isHoldingAdvancedInfoKey: C = false,
      compact: m = false
    } = e, {
      analyticsLocations: b
    } = (0, f.ZP)(), p = (0, u.e7)([H.ZP], () => H.ZP.getGuildSidebarState(n), [n]), h = (null == p ? true : p.details.userId) === t, j = (0, u.e7)([E.Z], () => E.Z.getEnhancedMember(n, t), [n, t]), g = (0, B.zq)(j), y = (0, u.e7)([S.default], () => S.default.getUser(t), [t]), O = (0, v.m)(n), _ = (0, B.RN)(null != j ? j : true), w = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), _(e)
    }, [_]), N = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != j && (0, B.RE)(j, b)
    }, [j, b]), D = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != j && (O ? (0, x.r)(j.guildId, j.userId, q.oC.MEMBER_SAFETY, {
        modViewPanel: z.k.INFO
      }) : (0, B.RE)(j, b))
    }, [j, b, O]), Z = l.useCallback((e, t) => c()((0, a.omit)(e, el), (0, a.omit)(t, el)), []);
    return null == j ? null : (0, r.jsx)(T.Z, {
      role: "row",
      value: j,
      style: o,
      className: i()(Y.roundedRow, Y.memberRowContainer, s && Y.selected, h && Y.memberSelected, d && Y.loading),
      equalityFn: Z,
      onClick: N,
      onContextMenu: w,
      children: (0, r.jsx)(en, {
        member: j,
        user: y,
        highestRole: g,
        isHoldingAdvancedInfoKey: C,
        onOpenModerationMenu: w,
        onOpenMemberView: D,
        compact: m,
        hasModViewPanelAccess: O
      })
    })
  })