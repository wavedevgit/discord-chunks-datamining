/** Chunk was on 42446 **/
/** chunk id: 653981, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => L
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk997509 = require("./997509.js"),
  Chunk636042 = require("./636042.js"),
  Chunk376092 = require("./376092.js"),
  Chunk317525 = require("./317525.js"),
  Chunk488926 = require("./488926.js"),
  Chunk45780 = require("./45780.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk124759 = require("./124759.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk763481 = require("./763481.js");

function y(t) {
  let {
    guild: e
  } = t, n = (0, s.bG)([S.A], () => S.A.getEveryoneRole(e));
  if (null == n) return null;
  let {
    name: o,
    color: a
  } = n;
  return (0, i.jsxs)("span", {
    className: f.xf,
    children: [(0, i.jsx)(_.WYI, {
      className: f.m4,
      color: a.toString(),
      background: false,
      tooltip: false
    }), (0, i.jsx)(_.Text, {
      className: f.S3,
      variant: "text-sm/medium",
      color: "interactive-text-active",
      children: o
    })]
  })
}
let x = t => t.toString() === O.xBc.MENTION_EVERYONE.toString() ? T.intl.string(T.t.yCpsQw) : (0, E.hx)(t);

function b(t) {
  let {
    permissions: e,
    step: n
  } = t;
  return 2 === n ? null : (0, i.jsxs)("div", {
    className: f.CZ,
    children: [(0, i.jsx)(_.Text, {
      className: f.qd,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: 0 === n ? T.intl.string(T.t["0WZKI4"]) : T.intl.string(T.t.xU8RDk)
    }), (0, i.jsx)("div", {
      className: f.lM,
      children: e.map((t, e) => (0, i.jsxs)("div", {
        className: f.ce,
        children: [(0, i.jsx)("div", {
          className: 0 === n ? f.I0 : f.dT
        }), (0, i.jsx)(_.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: x(t)
        })]
      }, e))
    })]
  })
}

function C(t) {
  let {
    permissions: e,
    step: n
  } = t;
  return 0 === e.length && 2 !== n ? null : (2 === n && (e = m.dR), (0, i.jsxs)("div", {
    className: f.CZ,
    children: [(0, i.jsx)(_.Text, {
      className: f.qd,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: 2 === n ? T.intl.string(T.t.FgMS6i) : T.intl.string(T.t.Yo5qlq)
    }), (0, i.jsx)("div", {
      className: f.lM,
      children: e.map((t, e) => (0, i.jsxs)("div", {
        className: f.ce,
        children: [(0, i.jsx)("div", {
          className: f.xE
        }), (0, i.jsx)(_.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: x(t)
        })]
      }, e))
    })]
  }))
}

function R(t) {
  let {
    permissions: e,
    step: n
  } = t, {
    enabledPermissions: o,
    disabledPermissions: a
  } = e;
  return 0 === o.length && 2 !== n ? null : (0, i.jsxs)("div", {
    className: f.tp,
    children: [2 !== n ? (0, i.jsx)(b, {
      permissions: o,
      step: n
    }) : null, (0, i.jsx)(C, {
      permissions: a,
      step: n
    })]
  })
}

function g(t) {
  let {
    guild: e,
    permissions: n,
    step: o,
    canEveryoneModerate: a,
    isDefaultNotificationsAllMessages: s
  } = t;
  return (0, i.jsxs)(i.Fragment, {
    children: [s ? (0, i.jsxs)("div", {
      className: f.J_,
      children: [(0, i.jsx)(_.yr3, {
        size: "md",
        className: f.aV,
        color: l.A.unsafe_rawColors.GREEN_360.css,
        secondaryColor: l.A.unsafe_rawColors.WHITE.css
      }), (0, i.jsx)(_.Text, {
        variant: "text-md/normal",
        children: T.intl.format(T.t.K8Eg4P, {
          infoHook: () => (0, i.jsx)(c.m, {
            text: T.intl.string(T.t["3h2WyM"]),
            "aria-label": T.intl.string(T.t["3h2WyM"]),
            children: (0, i.jsx)(_.mir, {
              size: "xs",
              color: "currentColor",
              className: f.Kk
            })
          })
        })
      })]
    }) : null, a ? (0, i.jsxs)("div", {
      className: f.J_,
      children: [(0, i.jsx)(_.yr3, {
        size: "md",
        className: f.aV,
        color: l.A.unsafe_rawColors.GREEN_360.css,
        secondaryColor: l.A.unsafe_rawColors.WHITE.css
      }), (0, i.jsx)(_.Text, {
        variant: "text-md/normal",
        children: T.intl.string(T.t.LfeFFr)
      }), (0, i.jsx)(y, {
        guild: e
      })]
    }) : null, (0, i.jsx)(R, {
      permissions: n,
      step: o
    })]
  })
}

function L(t) {
  let {
    guild: e,
    canEveryoneModerate: n,
    isDefaultNotificationsAllMessages: s,
    transitionState: l,
    onClose: c
  } = t, [_, E] = o.useState(0), f = o.useMemo(() => {
    let t = [],
      n = [];
    return m.dR.map(i => {
      I.Ib(i, e) ? t.push(i) : n.push(i)
    }), {
      enabledPermissions: t,
      disabledPermissions: n
    }
  }, [e]);
  if (null == e) return null;
  let y = () => {
      var t, i;
      let o, r;
      n && (o = S.A.getEveryoneRole(e), r = a.TF(o.permissions, m.e$), (0, u.JY)(e.id, [(t = function(t) {
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
      }({}, o), i = i = {
        permissions: r
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n.push.apply(n, i)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t)])), s && (p.A.updateGuild({
        defaultMessageNotifications: O.orn.ONLY_MENTIONS
      }), p.A.saveGuild(e.id, {
        defaultMessageNotifications: O.orn.ONLY_MENTIONS
      }))
    },
    x = [...0 === _ ? [{
      variant: "secondary",
      text: T.intl.string(T.t.gWQZvr),
      onClick: () => {
        c(), (0, N._$)(r.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e.id, true, h.i.DISMISS)
      }
    }] : [], {
      variant: "primary",
      text: 0 === _ ? n ? T.intl.string(T.t.R7GC7b) : T.intl.string(T.t.iOSdAW) : T.intl.string(T.t.mVuDq5),
      onClick: () => {
        var t, i;
        n || (y(), c(), (0, N._$)(r.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (t = null == e ? true : e.id) ? t : "", true, h.i.PRIMARY)), 0 === _ ? (E(1), setTimeout(() => E(2), 3e3)) : 2 === _ && (y(), c(), (0, N._$)(r.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (i = null == e ? true : e.id) ? i : "", true, h.i.PRIMARY))
      },
      loading: 1 === _
    }];
  return (0, i.jsx)(d.aFV, {
    transitionState: l,
    onClose: c,
    size: "md",
    title: n ? T.intl.string(T.t["7/ux15"]) : T.intl.string(T.t.sRcn4z),
    subtitle: n ? T.intl.string(T.t.aliKPx) : T.intl.string(T.t.F4KDOH),
    actions: x,
    children: (0, i.jsx)(g, {
      guild: e,
      permissions: f,
      step: _,
      canEveryoneModerate: n,
      isDefaultNotificationsAllMessages: s
    })
  })
}