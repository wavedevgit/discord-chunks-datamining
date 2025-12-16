/** Chunk was on 54597 **/
/** chunk id: 29022, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk84058 = require("./84058.js"),
  Chunk422559 = require("./422559.js"),
  Chunk485386 = require("./485386.js"),
  Chunk700785 = require("./700785.js"),
  Chunk645041 = require("./645041.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk135899 = require("./135899.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk687313 = require("./687313.js");

function b(t) {
  let {
    guild: e
  } = t, n = (0, l.e7)([S.Z], () => S.Z.getEveryoneRole(e));
  if (null == n) return null;
  let {
    name: o,
    color: a
  } = n;
  return (0, i.jsxs)("span", {
    className: h.roleRow,
    children: [(0, i.jsx)(u.FhE, {
      className: h.roleDot,
      color: a.toString(),
      background: false,
      tooltip: false
    }), (0, i.jsx)(u.Text, {
      className: h.roleName,
      variant: "text-sm/medium",
      color: "interactive-text-active",
      children: o
    })]
  })
}
let R = t => t.toString() === O.Plq.MENTION_EVERYONE.toString() ? T.intl.string(T.t.yCpsQw) : (0, E.wt)(t);

function y(t) {
  let {
    permissions: e,
    step: n
  } = t;
  return 2 === n ? null : (0, i.jsxs)("div", {
    className: h.tableContainer,
    children: [(0, i.jsx)(u.Text, {
      className: h.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: 0 === n ? T.intl.string(T.t["0WZKI4"]) : T.intl.string(T.t.xU8RDk)
    }), (0, i.jsx)("div", {
      className: h.permissionsTable,
      children: e.map((t, e) => (0, i.jsxs)("div", {
        className: h.permissionRow,
        children: [(0, i.jsx)("div", {
          className: 0 === n ? h.bulletPositive : h.bulletWarning
        }), (0, i.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: R(t)
        })]
      }, e))
    })]
  })
}

function g(t) {
  let {
    permissions: e,
    step: n
  } = t;
  return 0 === e.length && 2 !== n ? null : (2 === n && (e = m.$X), (0, i.jsxs)("div", {
    className: h.tableContainer,
    children: [(0, i.jsx)(u.Text, {
      className: h.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: 2 === n ? T.intl.string(T.t.FgMS6i) : T.intl.string(T.t.Yo5qlq)
    }), (0, i.jsx)("div", {
      className: h.permissionsTable,
      children: e.map((t, e) => (0, i.jsxs)("div", {
        className: h.permissionRow,
        children: [(0, i.jsx)("div", {
          className: h.bullet
        }), (0, i.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: R(t)
        })]
      }, e))
    })]
  }))
}

function C(t) {
  let {
    permissions: e,
    step: n
  } = t, {
    enabledPermissions: o,
    disabledPermissions: a
  } = e;
  return 0 === o.length && 2 !== n ? null : (0, i.jsxs)("div", {
    className: h.table,
    children: [2 !== n ? (0, i.jsx)(y, {
      permissions: o,
      step: n
    }) : null, (0, i.jsx)(g, {
      permissions: a,
      step: n
    })]
  })
}

function L(t) {
  let {
    guild: e,
    permissions: n,
    step: o,
    canEveryoneModerate: a,
    isDefaultNotificationsAllMessages: l
  } = t;
  return (0, i.jsxs)(i.Fragment, {
    children: [l ? (0, i.jsxs)("div", {
      className: h.checklistRow,
      children: [(0, i.jsx)(u.owK, {
        size: "md",
        className: h.checklistIcon,
        color: r.Z.unsafe_rawColors.GREEN_360.css,
        secondaryColor: r.Z.unsafe_rawColors.WHITE_100.css
      }), (0, i.jsx)(u.Text, {
        variant: "text-md/normal",
        children: T.intl.format(T.t.K8Eg4P, {
          infoHook: () => (0, i.jsx)(c.u, {
            text: T.intl.string(T.t["3h2WyM"]),
            "aria-label": T.intl.string(T.t["3h2WyM"]),
            children: (0, i.jsx)(u.d3s, {
              size: "xs",
              color: "currentColor",
              className: h.icon
            })
          })
        })
      })]
    }) : null, a ? (0, i.jsxs)("div", {
      className: h.checklistRow,
      children: [(0, i.jsx)(u.owK, {
        size: "md",
        className: h.checklistIcon,
        color: r.Z.unsafe_rawColors.GREEN_360.css,
        secondaryColor: r.Z.unsafe_rawColors.WHITE_100.css
      }), (0, i.jsx)(u.Text, {
        variant: "text-md/normal",
        children: T.intl.string(T.t.LfeFFr)
      }), (0, i.jsx)(b, {
        guild: e
      })]
    }) : null, (0, i.jsx)(C, {
      permissions: n,
      step: o
    })]
  })
}

function x(t) {
  let {
    guild: e,
    canEveryoneModerate: n,
    isDefaultNotificationsAllMessages: l,
    transitionState: r,
    onClose: c
  } = t, [u, E] = o.useState(0), h = o.useMemo(() => {
    let t = [],
      n = [];
    return m.$X.map(i => {
      f.oz(i, e) ? t.push(i) : n.push(i)
    }), {
      enabledPermissions: t,
      disabledPermissions: n
    }
  }, [e]);
  if (null == e) return null;
  let b = () => {
      n && (() => {
        var t, n;
        let i = S.Z.getEveryoneRole(e),
          o = a.Od(i.permissions, m.mu);
        (0, _.Gf)(e.id, [(t = function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), i.forEach(function(e) {
              var i;
              i = n[e], e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : t[e] = i
            })
          }
          return t
        }({}, i), n = n = {
          permissions: o
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            n.push.apply(n, i)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t)])
      })(), l && (p.Z.updateGuild({
        defaultMessageNotifications: O.bL.ONLY_MENTIONS
      }), p.Z.saveGuild(e.id, {
        defaultMessageNotifications: O.bL.ONLY_MENTIONS
      }))
    },
    R = [...0 === u ? [{
      variant: "secondary",
      text: T.intl.string(T.t.gWQZvr),
      onClick: () => {
        c(), (0, N.Qd)(s.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e.id, true, I.L.DISMISS)
      }
    }] : [], {
      variant: "primary",
      text: 0 === u ? n ? T.intl.string(T.t.R7GC7b) : T.intl.string(T.t.iOSdAW) : T.intl.string(T.t.mVuDq5),
      onClick: () => {
        var t, i;
        n || (b(), c(), (0, N.Qd)(s.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (t = null == e ? true : e.id) ? t : "", true, I.L.PRIMARY)), 0 === u ? (E(1), setTimeout(() => E(2), 3e3)) : 2 === u && (b(), c(), (0, N.Qd)(s.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (i = null == e ? true : e.id) ? i : "", true, I.L.PRIMARY))
      },
      loading: 1 === u
    }];
  return (0, i.jsx)(d.u_l, {
    transitionState: r,
    onClose: c,
    size: "md",
    title: n ? T.intl.string(T.t["7/ux15"]) : T.intl.string(T.t.sRcn4z),
    subtitle: n ? T.intl.string(T.t.aliKPx) : T.intl.string(T.t.F4KDOH),
    actions: R,
    children: (0, i.jsx)(L, {
      guild: e,
      permissions: h,
      step: u,
      canEveryoneModerate: n,
      isDefaultNotificationsAllMessages: l
    })
  })
}