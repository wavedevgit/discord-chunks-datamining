/** Chunk was on 6850 **/
/** chunk id: 66747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => el
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk498607 = require("./498607.js"),
  c = require.n(Chunk498607),
  Chunk399606 = require("./399606.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.js"),
  Chunk745735 = require("./745735.js"),
  Chunk906732 = require("./906732.js"),
  Chunk346486 = require("./346486.js"),
  Chunk715903 = require("./715903.js"),
  Chunk69882 = require("./69882.js"),
  Chunk189432 = require("./189432.js"),
  Chunk189357 = require("./189357.js"),
  Chunk172751 = require("./172751.js"),
  Chunk493892 = require("./493892.js"),
  Chunk884902 = require("./884902.js"),
  Chunk433355 = require("./433355.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk203893 = require("./203893.js"),
  Chunk777288 = require("./777288.js"),
  Chunk5192 = require("./5192.js"),
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk815790 = require("./815790.js"),
  Chunk588215 = require("./588215.js"),
  Chunk241559 = require("./241559.js"),
  Chunk893966 = require("./893966.js"),
  Chunk685244 = require("./685244.js"),
  Chunk16829 = require("./16829.jsx"),
  Chunk256003 = require("./256003.js"),
  Chunk472596 = require("./472596.js"),
  Chunk285173 = require("./285173.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.js"),
  Chunk350381 = require("./350381.js");

function Y(e) {
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

function W(e, t) {
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
let X = Chunk73800.memo(function(e) {
    let {
      member: t
    } = e, n = l.useMemo(() => (0, j.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), o = l.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
    return <div className={G.flagContainer}>{t.hasUnusualDmActivity && <C.ua7 text={z.intl.string(z.t.QrfVTk)}>{e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, r.jsx)(C.b6m, {
            size: "custom",
            width: 20,
            height: 20,
            onMouseEnter: t,
            onMouseLeave: n,
            color: d.Z.colors.TEXT_MUTED.css
          })
        }}</C.ua7>}{n && <C.ua7 aria-label={z.intl.string(z.t["xfJP+v"])} allowOverflow={true} text={(0, r.jsxs)("div", {
          className: G.communicationDisabledTooltip,
          children: [(0, r.jsx)("div", {
            children: z.intl.string(z.t["xfJP+v"])
          }), (0, r.jsx)(f.Z, {
            deadline: o,
            showUnits: true,
            stopAtOneSec: true
          })]
        })}>{e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, r.jsx)(C.YlB, {
            size: "custom",
            width: 20,
            height: 20,
            onMouseEnter: t,
            onMouseLeave: n,
            color: d.Z.colors.TEXT_DANGER.css
          })
        }}</C.ua7>}{(0, y.He)(t.userId) && <C.ua7 text={z.intl.string(z.t.PK9FQ0)}>{e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, r.jsx)(S.Z, {
            width: 20,
            height: 20,
            onMouseEnter: t,
            onMouseLeave: n,
            color: d.Z.colors.TEXT_DANGER.css
          })
        }}</C.ua7>}{(0, h.EY)(t) && <C.ua7 text={z.intl.string(z.t.qOVbaW)}>{e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, r.jsx)(C.ics, {
            size: "custom",
            width: 20,
            height: 20,
            onMouseEnter: t,
            onMouseLeave: n,
            color: d.Z.colors.TEXT_MUTED.css
          })
        }}</C.ua7>}</div>
  }),
  J = Chunk73800.memo(function(e) {
    let {
      member: t,
      highestRole: n
    } = e, o = (0, u.e7)([_.Z], () => _.Z.getGuild(t.guildId), [t.guildId]), a = t.roles.length - 1, s = l.useMemo(() => new Intl.NumberFormat(z.intl.currentLocale).format(a), [a]), c = (0, A.vN)(t), d = (0, A.vN)(t, true), m = (0, u.e7)([w.Z], () => w.Z.can(U.Plq.MANAGE_ROLES, o), [o]);
    return null == o ? null : <div className={G.roleContainer}>{null != n && <B.Z className={i()(G.roleTooltipItem, G.highestRole)} role={n} guildId={t.guildId} />}{a > 0 && <C.P3F className={G.otherRoles} onClick={e => d(e)}><C.ua7 text={z.intl.string(z.t.DY6n4u)}>{e => (0, r.jsxs)(C.Text, W(Y({
            variant: "text-xs/medium",
            color: "header-primary"
          }, e), {
            children: ["+", s]
          }))}</C.ua7></C.P3F>}{m && <C.ua7 text={z.intl.string(z.t.h3pSLS)}>{e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, r.jsx)(C.P3F, {
            className: i()(G.otherRoles, G.addRoleContainer),
            onClick: c,
            onMouseEnter: t,
            onMouseLeave: n,
            children: (0, r.jsx)(C.qJs, {
              size: "custom",
              color: "currentColor",
              className: G.addRoleIcon,
              width: 16,
              height: 16
            })
          })
        }}</C.ua7>}</div>
  }),
  K = Chunk73800.memo(function(e) {
    var t, n;
    let {
      member: l,
      user: o
    } = e, i = (0, O.X7)(null == l ? true : l.guildId, null == l ? true : l.userId, null != (t = null == l ? true : l.colorStrings) ? t : null);
    return null == o || null == l ? null : <div className={G.memberNameContainer}>{<div className={G.memberAvatar}><m.Z user={o} /></div>}{<div className={G.memberName}><C.Text variant={"text-sm/medium"}><div className={G.nameContainer}>{<C.PUh name={D.ZP.getName(l.guildId, null, o)} colorString={null != (n = l.colorString) ? n : null} colorStrings={i} className={G.memberNameText} />}{<v.ZP primaryGuild={null == o ? true : o.primaryGuild} userId={null == o ? true : o.id} contextGuildId={l.guildId} containerClassName={G.memberClanTag} />}</div></C.Text></div>}{<div className={G.memberGlobalName}><C.Text variant={"text-xs/normal"} color={"header-secondary"} tag={"span"}>{R.ZP.getUserTag(o)}</C.Text></div>}</div>
  });

function Q(e) {
  return {
    short: null == e ? null : (0, I.fv)(e, I.jq.JOINED_AT),
    long: new Date(null != e ? e : 0).toLocaleDateString(z.intl.currentLocale, I.UG)
  }
}

function $(e) {
  let {
    member: t,
    showLongDate: n,
    isSortedBy: o
  } = e, [i, a] = l.useState(null);
  l.useEffect(() => {
    a(Q(t.joinedAtTimestamp))
  }, [t.joinedAtTimestamp]), (0, b.Z)(() => {
    a(Q(t.joinedAtTimestamp))
  }, 1e4);
  let s = o ? "text-brand" : "text-default";
  return (null == i ? true : i.short) == null ? null : n ? <div className={G.__invalid_joinedAtContainer}><C.Text variant={"text-sm/medium"} color={s}>{i.long}</C.Text></div> : <div className={G.__invalid_joinedAtContainer}><C.ua7 align={"left"} text={i.long}>{e => (0, r.jsx)(C.Text, W(Y({}, e), {
        variant: "text-sm/medium",
        color: s,
        children: i.short
      }))}</C.ua7></div>
}
let ee = Chunk73800.memo(function(e) {
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
        accountCreationDateShort: (0, I.fv)(e, I.jq.ACCOUNT_AGE),
        accountCreationDateLong: new Date(e).toLocaleDateString(z.intl.currentLocale, I.I)
      }
    }, [t.userId]), s = o ? "text-brand" : "text-default";
    return n ? <C.Text variant={"text-sm/medium"} color={s}>{a}</C.Text> : <C.ua7 align={"left"} text={a}>{e => (0, r.jsx)(C.Text, W(Y({}, e), {
        variant: "text-sm/medium",
        color: s,
        children: i
      }))}</C.ua7>
  }),
  et = Chunk73800.memo(function(e) {
    let {
      member: t,
      user: n,
      highestRole: o,
      isHoldingAdvancedInfoKey: a,
      onOpenModerationMenu: s,
      onOpenMemberView: d,
      compact: m,
      hasModViewPanelAccess: b
    } = e, p = (0, u.e7)([w.Z, _.Z], () => w.Z.can(U.Plq.MANAGE_GUILD, _.Z.getGuild(t.guildId)), [t.guildId]), {
      selectedUserIds: f,
      addUsers: h,
      removeUser: j
    } = (0, k.Z)(t.guildId), g = (0, M.xC)(t.guildId), x = (0, M.hB)(t.guildId, g, t.userId), v = (0, u.e7)([V.Z], () => {
      var e;
      return null != (e = V.Z.getSearchStateByGuildId(t.guildId).selectedSort) ? e : P.d$.ORDER_BY_UNSPECIFIED
    }, [t.guildId], c()), y = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != t && x && (f.has(t.userId) ? j(t.userId) : h([t.userId]))
    }, [h, x, t, j, f]), O = v === P.d$.ORDER_BY_GUILD_JOINED_AT_ASC, H = v === P.d$.ORDER_BY_USER_ID_ASC || v === P.d$.ORDER_BY_USER_ID_DESC;
    return <r.Fragment>{g && <C.ua7 tooltipClassName={G.disabledActionTooltip} shouldShow={!x} text={z.intl.string(z.t["Se4c7+"])}>{e => (0, r.jsx)("td", W(Y({}, e), {
          children: (0, r.jsx)("div", {
            className: i()(G.__invalid_checkbox, G.xsmallCol),
            children: (0, r.jsx)(C.P3F, {
              onClick: y,
              children: (0, r.jsx)(C.XZJ, {
                type: C.XZJ.Types.INVERTED,
                value: f.has(t.userId),
                disabled: !x
              })
            })
          })
        }))}</C.ua7>}{<td className={i()({
          [G.compact]: m
        })}><K member={t} user={n} /></td>}{<td className={i()(G.smallCol, {
          [G.compact]: m
        })}><$ showLongDate={a} member={t} isSortedBy={O} /></td>}{<td className={i()(G.smallCol, {
          [G.compact]: m
        })}><ee showLongDate={a} member={t} isSortedBy={H} /></td>}{p && <td className={i()(G.smallCol, {
          [G.compact]: m
        })}><T.ZP userId={t.userId} guildId={t.guildId} /></td>}{<td className={i()(G.mediumCol, {
          [G.compact]: m
        })}><J member={t} highestRole={o} /></td>}{<td className={i()(G.smallCol, {
          [G.compact]: m
        })}><X member={t} /></td>}{<td className={i()(G.smallCol, {
          [G.compact]: m
        })}><div className={G.actionCell}>{<C.ua7 text={b ? z.intl.string(z.t.nHfkf3) : z.intl.string(z.t.uTre29)}>{e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, r.jsx)(C.P3F, {
                onMouseEnter: t,
                onMouseLeave: n,
                onClick: d,
                className: G.button,
                children: b ? (0, r.jsx)(Z.Z, {
                  width: en,
                  height: en
                }) : (0, r.jsx)(C.tBG, {
                  size: "custom",
                  color: "currentColor",
                  width: en,
                  height: en
                })
              })
            }}</C.ua7>}{<C.ua7 text={z.intl.string(z.t.x8Nn4O)}>{e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, r.jsx)(C.P3F, {
                onMouseEnter: t,
                onMouseLeave: n,
                onClick: s,
                className: G.button,
                children: (0, r.jsx)(C.Huf, {
                  size: "custom",
                  color: "currentColor",
                  width: en,
                  height: en
                })
              })
            }}</C.ua7>}</div></td>}</r.Fragment>
  }),
  en = 18,
  er = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
  el = Chunk73800.memo(function(e) {
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
    } = (0, p.ZP)(), f = (0, u.e7)([H.ZP], () => H.ZP.getGuildSidebarState(n), [n]), h = (null == f ? true : f.details.userId) === t, j = (0, u.e7)([V.Z], () => V.Z.getEnhancedMember(n, t), [n, t]), v = (0, A.zq)(j), y = (0, u.e7)([N.default], () => N.default.getUser(t), [t]), O = (0, x.m)(n), _ = (0, A.RN)(null != j ? j : true), w = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), _(e)
    }, [_]), S = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != j && (0, A.RE)(j, b)
    }, [j, b]), Z = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != j && (O ? (0, g.r)(j.guildId, j.userId, F.oC.MEMBER_SAFETY, {
        modViewPanel: q.k.INFO
      }) : (0, A.RE)(j, b))
    }, [j, b, O]), D = l.useCallback((e, t) => c()((0, a.omit)(e, er), (0, a.omit)(t, er)), []);
    return null == j ? null : <E.Z role={"row"} value={j} style={o} className={i()(G.roundedRow, G.memberRowContainer, s && G.selected, h && G.memberSelected, d && G.loading)} equalityFn={D} onClick={S} onContextMenu={w}><et member={j} user={y} highestRole={v} isHoldingAdvancedInfoKey={C} onOpenModerationMenu={w} onOpenMemberView={Z} compact={m} hasModViewPanelAccess={O} /></E.Z>
  })