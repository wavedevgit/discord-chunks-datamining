/** Chunk was on 54597 **/
/** chunk id: 29022, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => D
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.js"),
  Chunk434404 = require("./434404.js"),
  Chunk764260 = require("./764260.js"),
  Chunk422559 = require("./422559.js"),
  Chunk601964 = require("./601964.js"),
  Chunk485386 = require("./485386.js"),
  Chunk768581 = require("./768581.js"),
  Chunk700785 = require("./700785.js"),
  Chunk645041 = require("./645041.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk135899 = require("./135899.js"),
  Chunk388032 = require("./388032.js"),
  Chunk800830 = require("./800830.js");

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function y(e) {
  let {
    guild: t,
    headerText: a,
    headerSubtext: o,
    step: s
  } = e, l = N.ZP.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 120
  });
  return <d.xBx className={g.header}>{<div className={g.headerIconContainer}>{null != l ? <d.qEK src={l} aria-label={t.name} size={d.EFr.SIZE_120} className={g.__invalid_guildIcon} /> : <div className={g.acronym}>{(0, m.gM)(t)}</div>}{2 === s ? <d.owK size={"md"} className={g.greenPing} color={r.Z.unsafe_rawColors.GREEN_360.css} secondaryColor={r.Z.unsafe_rawColors.WHITE_100.css} /> : <_.Ee src={n(173326)} className={g.redPing} />}</div>}{<div className={g.headerText}>{<d.X6q variant={"heading-lg/extrabold"} color={"header-primary"}>{a}</d.X6q>}{<d.Text variant={"text-md/normal"} color={"header-primary"}>{o}</d.Text>}</div>}</d.xBx>
}

function C(e) {
  let {
    guild: t
  } = e, n = (0, s.e7)([E.Z], () => E.Z.getEveryoneRole(t));
  if (null == n) return null;
  let {
    name: a,
    color: o
  } = n;
  return <span className={g.roleRow}>{<d.FhE className={g.roleDot} color={o.toString()} background={false} tooltip={false} />}{<d.Text className={g.roleName} variant={"text-sm/medium"} color={"interactive-active"}>{a}</d.Text>}</span>
}
let R = e => e.toString() === h.Plq.MENTION_EVERYONE.toString() ? x.intl.string(x.t.yCpsQ0) : (0, f.wt)(e);

function j(e) {
  let {
    permissions: t,
    step: n
  } = e;
  return 2 === n ? null : <div className={g.tableContainer}>{<d.Text className={g.tableHeader} variant={"text-xs/semibold"} color={"text-muted"}>{0 === n ? x.intl.string(x.t["0WZKIy"]) : x.intl.string(x.t.xU8RDg)}</d.Text>}{<div className={g.permissionsTable}>{t.map((e, t) => (0, i.jsxs)("div", {
        className: g.permissionRow,
        children: [(0, i.jsx)("div", {
          className: 0 === n ? g.bulletPositive : g.bulletWarning
        }), (0, i.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: R(e)
        })]
      }, t))}</div>}</div>
}

function L(e) {
  let {
    permissions: t,
    step: n
  } = e;
  return 0 === t.length && 2 !== n ? null : (2 === n && (t = T.$X), <div className={g.tableContainer}>{<d.Text className={g.tableHeader} variant={"text-xs/semibold"} color={"text-muted"}>{2 === n ? x.intl.string(x.t.FgMS6u) : x.intl.string(x.t.Yo5qlp)}</d.Text>}{<div className={g.permissionsTable}>{t.map((e, t) => (0, i.jsxs)("div", {
        className: g.permissionRow,
        children: [(0, i.jsx)("div", {
          className: g.bullet
        }), (0, i.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: R(e)
        })]
      }, t))}</div>}</div>)
}

function v(e) {
  let {
    permissions: t,
    step: n
  } = e, {
    enabledPermissions: a,
    disabledPermissions: o
  } = t;
  return 0 === a.length && 2 !== n ? null : <div className={g.table}>{2 !== n ? <j permissions={a} step={n} /> : null}{<L permissions={o} step={n} />}</div>
}

function U(e) {
  let {
    guild: t,
    permissions: n,
    step: a,
    canEveryoneModerate: o,
    isDefaultNotificationsAllMessages: s
  } = e;
  return <d.hzk><div className={g.updatedForm}>{s ? <div className={g.checklistRow}>{<d.owK size={"md"} className={g.checklistIcon} color={r.Z.unsafe_rawColors.GREEN_360.css} secondaryColor={r.Z.unsafe_rawColors.WHITE_100.css} />}{<d.Text variant={"text-md/normal"}>{x.intl.format(x.t.K8Eg4O, {
            infoHook: () => (0, i.jsx)(d.ua7, {
              text: x.intl.string(x.t["3h2WyM"]),
              "aria-label": x.intl.string(x.t["3h2WyM"]),
              children: e => (0, i.jsx)(d.d3s, b({
                size: "xs",
                color: "currentColor",
                className: g.icon
              }, e))
            })
          })}</d.Text>}</div> : null}{o ? <div className={g.checklistRow}>{<d.owK size={"md"} className={g.checklistIcon} color={r.Z.unsafe_rawColors.GREEN_360.css} secondaryColor={r.Z.unsafe_rawColors.WHITE_100.css} />}{<d.Text variant={"text-md/normal"}>{x.intl.string(x.t.LfeFFh)}</d.Text>}{<C guild={t} />}</div> : null}{<v permissions={n} step={a} />}</div></d.hzk>
}

function G(e) {
  let {
    onConfirm: t,
    onDismiss: n,
    canEveryoneModerate: a,
    step: o
  } = e;
  return <d.mzw className={g.footer}>{<d.zxk variant={"primary"} text={0 === o ? a ? x.intl.string(x.t.R7GC7e) : x.intl.string(x.t.iOSdAQ) : x.intl.string(x.t.mVuDq6)} onClick={t} loading={1 === o} />}{0 === o ? <c.zx look={c.zx.Looks.LINK} onClick={n} color={c.zx.Colors.PRIMARY}><d.Text variant={"text-sm/semibold"} color={"header-primary"}>{x.intl.string(x.t.gWQZvr)}</d.Text></c.zx> : null}</d.mzw>
}

function D(e) {
  let {
    guild: t,
    canEveryoneModerate: n,
    isDefaultNotificationsAllMessages: s,
    transitionState: r,
    onClose: c
  } = e, [_, f] = a.useState(0), m = a.useMemo(() => {
    let e = [],
      n = [];
    return T.$X.map(i => {
      S.oz(i, t) ? e.push(i) : n.push(i)
    }), {
      enabledPermissions: e,
      disabledPermissions: n
    }
  }, [t]);
  if (null == t) return null;
  let N = () => {
      var e, n;
      let i = E.Z.getEveryoneRole(t),
        a = o.Od(i.permissions, T.mu);
      (0, p.Gf)(t.id, [(e = b({}, i), n = n = {
        permissions: a
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(n)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }), e)])
    },
    C = () => {
      u.Z.updateGuild({
        defaultMessageNotifications: h.bL.ONLY_MENTIONS
      }), u.Z.saveGuild(t.id, {
        defaultMessageNotifications: h.bL.ONLY_MENTIONS
      })
    },
    R = () => {
      n && N(), s && C()
    };
  return <d.Y0X transitionState={r} size={d.CgR.SMALL} className={g.modal} parentComponent={"GuildSettingsDisableUnsafeDefaultPermissionsNotice"}>{<y guild={t} headerText={n ? x.intl.string(x.t["7/ux19"]) : x.intl.string(x.t["sRcn4+"])} headerSubtext={n ? x.intl.string(x.t.aliKPz) : x.intl.string(x.t.F4KDOD)} step={_} />}{<U guild={t} permissions={m} step={_} canEveryoneModerate={n} isDefaultNotificationsAllMessages={s} />}{<G onConfirm={() => {
        var e, i;
        n || (R(), c(), (0, I.Qd)(l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (e = null == t ? true : t.id) ? e : "", true, O.L.PRIMARY)), 0 === _ ? (f(1), setTimeout(() => f(2), 3e3)) : 2 === _ && (R(), c(), (0, I.Qd)(l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (i = null == t ? true : t.id) ? i : "", true, O.L.PRIMARY))
      }} onDismiss={() => {
        c(), (0, I.Qd)(l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t.id, true, O.L.DISMISS)
      }} step={_} canEveryoneModerate={n} />}</d.Y0X>
}