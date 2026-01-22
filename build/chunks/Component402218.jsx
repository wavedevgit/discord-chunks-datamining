/** Chunk was on 35894 **/
/** chunk id: 402218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => er
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk33851 = require("./33851.js"),
  c = require.n(Chunk33851),
  Chunk417597 = require("./417597.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk396583 = require("./396583.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk576470 = require("./576470.jsx"),
  Chunk229527 = require("./229527.js"),
  Chunk316031 = require("./316031.js"),
  Chunk706752 = require("./706752.js"),
  Chunk985925 = require("./985925.js"),
  Chunk534400 = require("./534400.jsx"),
  Chunk694318 = require("./694318.js"),
  Chunk967144 = require("./967144.js"),
  Chunk761640 = require("./761640.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk530347 = require("./530347.jsx"),
  Chunk881548 = require("./881548.jsx"),
  Chunk562153 = require("./562153.js"),
  Chunk661191 = require("./661191.js"),
  Chunk427262 = require("./427262.js"),
  Chunk157347 = require("./157347.js"),
  Chunk70738 = require("./70738.js"),
  Chunk134413 = require("./134413.js"),
  Chunk266047 = require("./266047.js"),
  Chunk178052 = require("./178052.jsx"),
  Chunk589935 = require("./589935.jsx"),
  Chunk225671 = require("./225671.js"),
  Chunk189552 = require("./189552.js"),
  Chunk950072 = require("./950072.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk486974 = require("./486974.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk918372 = require("./918372.js");
let K = Chunk64700.memo(function(e) {
    let {
      member: t
    } = e, n = l.useMemo(() => (0, h.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), i = l.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
    return (0, r.jsxs)("div", {
      className: Y.Ak,
      children: [t.hasUnusualDmActivity && (0, r.jsx)(C.m, {
        text: q.intl.string(q.t.QrfVTp),
        children: (0, r.jsx)(f.EF8, {
          size: "custom",
          width: 20,
          height: 20,
          color: u.A.colors.TEXT_MUTED.css
        })
      }), n && (0, r.jsx)(C.m, {
        "aria-label": q.intl.string(q.t["xfJP+u"]),
        __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
          className: Y.CN,
          children: [(0, r.jsx)("div", {
            children: q.intl.string(q.t["xfJP+u"])
          }), (0, r.jsx)(j.A, {
            deadline: i,
            showUnits: true,
            stopAtOneSec: true
          })]
        }),
        children: (0, r.jsx)(f.gQi, {
          size: "custom",
          width: 20,
          height: 20,
          color: u.A.colors.TEXT_FEEDBACK_CRITICAL.css
        })
      }), (0, v.cx)(t.userId) && (0, r.jsx)(C.m, {
        text: q.intl.string(q.t.PK9FQ2),
        children: (0, r.jsx)(_.A, {
          width: 20,
          height: 20,
          color: u.A.colors.TEXT_FEEDBACK_CRITICAL.css
        })
      }), (0, g.TR)(t) && (0, r.jsx)(C.m, {
        text: q.intl.string(q.t.qOVbaX),
        children: (0, r.jsx)(f._mZ, {
          size: "custom",
          width: 20,
          height: 20,
          color: u.A.colors.TEXT_MUTED.css
        })
      })]
    })
  }),
  Q = Chunk64700.memo(function(e) {
    let {
      member: t,
      highestRole: n
    } = e, i = (0, d.bG)([A.A], () => A.A.getGuild(t.guildId), [t.guildId]), a = t.roles.length - 1, s = l.useMemo(() => new Intl.NumberFormat(q.intl.currentLocale).format(a), [a]), c = (0, U.Cy)(t), u = (0, U.Cy)(t, true), b = (0, d.bG)([D.A], () => D.A.can(B.xBc.MANAGE_ROLES, i), [i]);
    return null == i ? null : (0, r.jsxs)("div", {
      className: Y.yk,
      children: [null != n && (0, r.jsx)(F.A, {
        className: o()(Y.Zf, Y.Lc),
        role: n,
        guildId: t.guildId
      }), a > 0 && (0, r.jsx)(f.DUT, {
        className: Y.yt,
        onClick: e => u(e),
        children: (0, r.jsx)(C.m, {
          text: q.intl.string(q.t.DY6n4q),
          children: (0, r.jsxs)(f.Text, {
            variant: "text-xs/medium",
            color: "text-strong",
            children: ["+", s]
          })
        })
      }), b && (0, r.jsx)(C.m, {
        text: q.intl.string(q.t.h3pSLR),
        children: (0, r.jsx)(f.DUT, {
          onClick: c,
          className: o()(Y.yt, Y.$g),
          children: (0, r.jsx)(f.j96, {
            size: "custom",
            color: "currentColor",
            className: Y.fd,
            width: 16,
            height: 16
          })
        })
      })]
    })
  }),
  X = Chunk64700.memo(function(e) {
    var t, n;
    let {
      member: l,
      user: i
    } = e, o = (0, H.gn)(null == l ? true : l.guildId, null == l ? true : l.userId, null != (t = null == l ? true : l.colorStrings) ? t : null);
    return null == i || null == l ? null : (0, r.jsxs)("div", {
      className: Y.FD,
      children: [(0, r.jsx)("div", {
        className: Y.Wn,
        children: (0, r.jsx)(b.A, {
          user: i
        })
      }), (0, r.jsx)("div", {
        className: Y.eg,
        children: (0, r.jsx)(f.Text, {
          variant: "text-sm/medium",
          children: (0, r.jsxs)("div", {
            className: Y.VW,
            children: [(0, r.jsx)(f.gyj, {
              name: P.Ay.getName(l.guildId, null, i),
              colorString: null != (n = l.colorString) ? n : null,
              colorStrings: o,
              className: Y.bc
            }), (0, r.jsx)(O.Ay, {
              primaryGuild: null == i ? true : i.primaryGuild,
              userId: null == i ? true : i.id,
              contextGuildId: l.guildId,
              containerClassName: Y.Dz
            })]
          })
        })
      }), (0, r.jsx)("div", {
        className: Y.Br,
        children: (0, r.jsx)(f.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          tag: "span",
          children: L.Ay.getUserTag(i)
        })
      })]
    })
  });

function J(e) {
  return {
    short: null == e ? null : (0, E.hL)(e, E.wN.JOINED_AT),
    long: new Date(null != e ? e : 0).toLocaleDateString(q.intl.currentLocale, E.wp)
  }
}

function W(e) {
  let {
    member: t,
    showLongDate: n,
    isSortedBy: i
  } = e, [o, a] = l.useState(null);
  l.useEffect(() => {
    a(J(t.joinedAtTimestamp))
  }, [t.joinedAtTimestamp]), (0, m.A)(() => {
    a(J(t.joinedAtTimestamp))
  }, 1e4);
  let s = i ? "text-brand" : "text-default";
  return (null == o ? true : o.short) == null ? null : n ? (0, r.jsx)("div", {
    className: Y.__invalid_joinedAtContainer,
    children: (0, r.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: s,
      children: o.long
    })
  }) : (0, r.jsx)("div", {
    className: Y.__invalid_joinedAtContainer,
    children: (0, r.jsx)(C.m, {
      align: "left",
      __unsupportedReactNodeAsText: o.long,
      children: (0, r.jsx)(f.Text, {
        variant: "text-sm/medium",
        color: s,
        children: o.short
      })
    })
  })
}
let $ = Chunk64700.memo(function(e) {
    let {
      member: t,
      showLongDate: n,
      isSortedBy: i
    } = e, {
      accountCreationDateShort: o,
      accountCreationDateLong: a
    } = l.useMemo(() => {
      let e = V.default.extractTimestamp(t.userId);
      return {
        accountCreationDateShort: (0, E.hL)(e, E.wN.ACCOUNT_AGE),
        accountCreationDateLong: new Date(e).toLocaleDateString(q.intl.currentLocale, E.OA)
      }
    }, [t.userId]), s = i ? "text-brand" : "text-default";
    return n ? (0, r.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: s,
      children: a
    }) : (0, r.jsx)(C.m, {
      align: "left",
      __unsupportedReactNodeAsText: a,
      children: (0, r.jsx)(f.Text, {
        variant: "text-sm/medium",
        color: s,
        children: o
      })
    })
  }),
  ee = Chunk64700.memo(function(e) {
    let {
      member: t,
      user: n,
      highestRole: i,
      isHoldingAdvancedInfoKey: a,
      onOpenModerationMenu: s,
      onOpenMemberView: u,
      compact: b,
      hasModViewPanelAccess: m
    } = e, p = (0, d.bG)([D.A, A.A], () => D.A.can(B.xBc.MANAGE_GUILD, A.A.getGuild(t.guildId)), [t.guildId]), {
      selectedUserIds: j,
      addUsers: g,
      removeUser: h
    } = (0, k.A)(t.guildId), x = (0, R.vA)(t.guildId), y = (0, R.O6)(t.guildId, x, t.userId), O = (0, d.bG)([I.A], () => {
      var e;
      return null != (e = I.A.getSearchStateByGuildId(t.guildId).selectedSort) ? e : M.mF.ORDER_BY_UNSPECIFIED
    }, [t.guildId], c()), v = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != t && y && (j.has(t.userId) ? h(t.userId) : g([t.userId]))
    }, [g, y, t, h, j]), H = O === M.mF.ORDER_BY_GUILD_JOINED_AT_ASC, w = O === M.mF.ORDER_BY_USER_ID_ASC || O === M.mF.ORDER_BY_USER_ID_DESC;
    return (0, r.jsxs)(r.Fragment, {
      children: [x && (0, r.jsx)("td", {
        children: (0, r.jsx)(C.m, {
          shouldShow: !y,
          ariaHidden: y,
          text: q.intl.string(q.t["Se4c7+"]),
          children: (0, r.jsx)(f.DUT, {
            onClick: v,
            children: (0, r.jsx)(f.P7L, {
              checked: j.has(t.userId),
              disabled: !y
            })
          })
        })
      }), (0, r.jsx)("td", {
        className: o()(Y.QB, {
          [Y.oE]: b
        }),
        children: (0, r.jsx)(X, {
          member: t,
          user: n
        })
      }), (0, r.jsx)("td", {
        className: o()(Y.qp, {
          [Y.oE]: b
        }),
        children: (0, r.jsx)(W, {
          showLongDate: a,
          member: t,
          isSortedBy: H
        })
      }), (0, r.jsx)("td", {
        className: o()(Y.qp, {
          [Y.oE]: b
        }),
        children: (0, r.jsx)($, {
          showLongDate: a,
          member: t,
          isSortedBy: w
        })
      }), p && (0, r.jsx)("td", {
        className: o()(Y.qp, {
          [Y.oE]: b
        }),
        children: (0, r.jsx)(Z.Ay, {
          userId: t.userId,
          guildId: t.guildId
        })
      }), (0, r.jsx)("td", {
        className: o()(Y.QB, {
          [Y.oE]: b
        }),
        children: (0, r.jsx)(Q, {
          member: t,
          highestRole: i
        })
      }), (0, r.jsx)("td", {
        className: o()(Y.qp, {
          [Y.oE]: b
        }),
        children: (0, r.jsx)(K, {
          member: t
        })
      }), (0, r.jsx)("td", {
        className: o()(Y.OL, {
          [Y.oE]: b
        }),
        children: (0, r.jsxs)("div", {
          className: Y.$E,
          children: [(0, r.jsx)(C.m, {
            asContainer: true,
            text: m ? q.intl.string(q.t.nHfkf4) : q.intl.string(q.t.uTre2y),
            children: (0, r.jsx)(f.DUT, {
              onClick: u,
              className: Y.x6,
              children: m ? (0, r.jsx)(N.A, {
                width: et,
                height: et
              }) : (0, r.jsx)(f.nys, {
                size: "custom",
                color: "currentColor",
                width: et,
                height: et
              })
            })
          }), (0, r.jsx)(C.m, {
            asContainer: true,
            text: q.intl.string(q.t.x8Nn4M),
            children: (0, r.jsx)(f.DUT, {
              onClick: s,
              className: Y.x6,
              children: (0, r.jsx)(f.FHP, {
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
  er = Chunk64700.memo(function(e) {
    let {
      userId: t,
      guildId: n,
      style: i,
      rowSelected: s,
      isLoading: u = false,
      isHoldingAdvancedInfoKey: C = false,
      compact: f = false
    } = e, {
      analyticsLocations: b
    } = (0, p.Ay)(), m = (0, d.bG)([w.Ay], () => w.Ay.getGuildSidebarState(n), [n]), j = (null == m ? true : m.details.userId) === t, g = (0, d.bG)([I.A], () => I.A.getEnhancedMember(n, t), [n, t]), h = (0, U.YH)(g), O = (0, d.bG)([S.default], () => S.default.getUser(t), [t]), v = (0, y.q)(n), H = (0, U.UY)(null != g ? g : true), A = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), H(e)
    }, [H]), D = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != g && (0, U.Ko)(g, b)
    }, [g, b]), _ = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != g && (v ? (0, x.z)(g.guildId, g.userId, G.VV.MEMBER_SAFETY, {
        modViewPanel: z.g.INFO
      }) : (0, U.Ko)(g, b))
    }, [g, b, v]), N = l.useCallback((e, t) => c()((0, a.omit)(e, en), (0, a.omit)(t, en)), []);
    return null == g ? null : (0, r.jsx)(T.A, {
      role: "row",
      value: g,
      style: i,
      className: o()(Y.yF, Y.iA, s && Y.wH, j && Y.qb, u && Y.Lq),
      equalityFn: N,
      onClick: D,
      onContextMenu: A,
      children: (0, r.jsx)(ee, {
        member: g,
        user: O,
        highestRole: h,
        isHoldingAdvancedInfoKey: C,
        onOpenModerationMenu: A,
        onOpenMemberView: _,
        compact: f,
        hasModViewPanelAccess: v
      })
    })
  })