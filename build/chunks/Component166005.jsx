/** Chunk was on web.js **/
/** chunk id: 166005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => J,
  Y: () => K
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk835245 = require("./835245.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk884362 = require("./884362.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk686956 = require("./686956.js"),
  Chunk775602 = require("./775602.js"),
  Chunk915089 = require("./915089.js"),
  Chunk201275 = require("./201275.js"),
  Chunk997509 = require("./997509.js"),
  Chunk967144 = require("./967144.js"),
  Chunk657048 = require("./657048.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk34457 = require("./34457.js"),
  Chunk696451 = require("./696451.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk488926 = require("./488926.js"),
  Chunk465738 = require("./465738.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk456665 = require("./456665.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = k(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function k(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let U = Chunk827734.A.unsafe_rawColors.PRIMARY_300;

function G(e) {
  var t, n;
  let {
    role: i,
    guildId: a,
    trailing: s,
    itemRef: l,
    labelId: c,
    className: d,
    style: _
  } = e, h = (0, E.$7)({
    roleId: i.id,
    size: 12,
    guildId: a
  }), g = (0, u.bG)([m.A], () => m.A.roleStyle), y = (0, b.X_)(a, i, i.colorStrings), v = (null == (n = i.tags) ? true : n.guild_connections) === null, A = (0, p.rdh)(U).hex(), I = null != (t = i.colorString) ? t : A, S = () => "dot" === g ? (0, r.jsx)(p.WYI, {
    className: P.m4,
    color: I,
    background: false,
    colors: y,
    tooltip: false
  }) : (0, r.jsx)(p.RYH, {
    color: I,
    colors: y
  });
  return (0, r.jsxs)("div", {
    ref: l,
    className: o()(P.JC, d),
    style: _,
    children: [S(), v && (0, r.jsx)(p.qYV, {
      className: P.AP,
      size: "custom",
      width: 12,
      height: 12,
      color: "currentColor"
    }), (0, r.jsx)(f.m_, {
      text: i.name,
      overflowOnly: true,
      ariaHidden: true,
      children: (0, r.jsx)(p.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        className: P.S3,
        id: c,
        children: i.name
      })
    }), null != h ? (0, r.jsx)(O.A, M(L({
      className: P.UT
    }, h), {
      enableTooltip: false
    })) : null, s]
  })
}

function V(e) {
  let {
    role: t,
    canRemove: n,
    onRemoveRole: a,
    onContextMenu: o
  } = e, s = j(e, ["role", "canRemove", "onRemoveRole", "onContextMenu"]), c = (0, l.rm)(t.id), {
    tabIndex: u
  } = c, d = j(c, ["tabIndex"]), _ = (0, g.GV)(), h = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null == a || a(t)
  }, [a, t]), m = n ? (0, r.jsx)(f.m_, {
    text: R.intl.string(R.t["T+3Adg"]),
    spacing: 4,
    ariaHidden: true,
    children: (0, r.jsx)(p.DUT, {
      "aria-label": R.intl.formatToPlainString(R.t.QrxwhY, {
        roleName: t.name
      }),
      onClick: h,
      className: P.DT,
      tabIndex: u,
      children: (0, r.jsx)(p.PGe, {
        size: "xxs",
        color: "currentColor"
      })
    })
  }) : true;
  return (0, r.jsx)(p.vN3, {
    children: (0, r.jsx)("div", M(L({}, d), {
      tabIndex: u,
      onContextMenu: o,
      className: P.b6,
      "aria-labelledby": _,
      children: (0, r.jsx)(G, L({
        role: t,
        className: n ? P.nO : true,
        trailing: m,
        labelId: _
      }, s))
    }))
  })
}

function F(e) {
  let {
    roleCount: t,
    children: n
  } = e, a = i.useMemo(() => "roles-".concat((0, s.A)()), []), o = (0, c.Ay)({
    id: a,
    isEnabled: true,
    scrollToStart: w.js$,
    scrollToEnd: w.js$,
    wrap: true
  }), u = R.intl.formatToPlainString(R.t.PCs0oo, {
    numRoles: t
  });
  return (0, r.jsx)(l.hD, {
    navigator: o,
    children: (0, r.jsx)(l.PR, {
      children: e => {
        let {
          ref: t
        } = e, i = j(e, ["ref"]);
        return (0, r.jsx)("div", M(L({}, i), {
          ref: t,
          "aria-label": u,
          className: P.JK,
          children: n
        }))
      }
    })
  })
}

function B(e) {
  var t;
  let {
    userId: n,
    guild: a,
    showLabel: s = false,
    onAddRole: l,
    buttonRef: c
  } = e, d = (0, u.bG)([T.default], () => T.default.getCurrentUser()), _ = null != d ? C.HJ(a, d.id) : null, h = (0, u.bG)([I.Ay], () => I.Ay.getMember(a.id, n)), g = null != (t = null == h ? true : h.roles) ? t : [], E = (0, u.bG)([m.A], () => m.A.roleStyle), b = i.useRef(null), O = null != c ? c : b, v = i.useCallback(e => {
    var t;
    null == l || l();
    let r = I.Ay.getMember(a.id, n),
      i = null != (t = null == r ? true : r.roles) ? t : [];
    i.includes(e) || (i = [...i, e]), y.A.updateMemberRoles(a.id, n, i, [e], [])
  }, [a.id, n, l]), w = e => !(0, A.Oy)(e) && !e.managed && S.A.isRoleHigher(a, _, e) && false === g.indexOf(e.id);
  return (0, r.jsx)(p.YNO, {
    targetElementRef: O,
    position: "bottom",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(N.A, {
        guild: a,
        roleStyle: E,
        roleFilter: w,
        onSelect: v,
        onClose: t
      })
    },
    children: e => (0, r.jsx)(f.m_, {
      text: R.intl.string(R.t.e3Wlyw),
      shouldShow: !s,
      ariaHidden: true,
      children: (0, r.jsxs)(p.DUT, M(L({
        innerRef: O,
        "aria-label": R.intl.string(R.t.e3Wlyw),
        className: o()(P.c9, {
          [P.MS]: s
        })
      }, e), {
        children: [(0, r.jsx)(p.j96, {
          size: "sm",
          color: "currentColor"
        }), s && (0, r.jsx)(p.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: R.intl.string(R.t.e3Wlyw)
        })]
      }))
    })
  })
}

function H(e) {
  let {
    userId: t,
    guild: n,
    roles: r,
    allowEditing: a,
    readOnly: o
  } = e, s = (0, u.bG)([T.default], () => T.default.getCurrentUser()), l = v.Q_.useSetting(), [c] = (0, u.yK)([S.A], () => [S.A.can(w.xBc.MANAGE_ROLES, n), S.A.getGuildVersion(n.id)]), d = null != s ? C.HJ(n, s.id) : null, f = i.useMemo(() => {
    let e = new Set;
    return o || !a || r.forEach(r => {
      var i;
      ((null == (i = r.tags) ? true : i.guild_connections) === null ? t === (null == s ? true : s.id) : c && C.wO(n, null == s ? true : s.id, d, r)) && e.add(r.id)
    }), e
  }, [o, a, r, t, null == s ? true : s.id, c, n, d]), p = !o && l, _ = !o && a && c;
  return {
    canAddRoles: _,
    canRemoveAnyRoles: f.size > 0,
    isRoleRemovable: i.useCallback(e => f.has(e), [f]),
    hasDeveloperContextMenu: p
  }
}

function Y(e, t, n) {
  return i.useCallback(r => {
    var i, a;
    null == n || n();
    let o = I.Ay.getMember(t, e),
      s = (null != (i = null == o ? true : o.roles) ? i : []).filter(e => e !== r.id);
    (null == (a = r.tags) ? true : a.guild_connections) === null ? h.A.unassignGuildRoleConnection(t, r.id) : y.A.updateMemberRoles(t, e, s, [], [r.id])
  }, [n, t, e])
}

function W() {
  return i.useCallback((e, t) => {
    (0, _.L3)(e, async () => {
      let {
        default: e
      } = await n.e("15687").then(n.bind(n, 646938));
      return n => (0, r.jsx)(e, M(L({}, n), {
        id: t,
        label: R.intl.string(R.t.sMsaLg)
      }))
    })
  }, [])
}

function K(e) {
  let {
    userId: t,
    guild: n,
    roles: i,
    className: a,
    onRemoveRole: s,
    onAddRole: l,
    readOnly: c = false,
    allowEditing: u = false
  } = e, {
    canAddRoles: d,
    canRemoveAnyRoles: f,
    hasDeveloperContextMenu: p,
    isRoleRemovable: _
  } = H({
    userId: t,
    guild: n,
    roles: i,
    allowEditing: u,
    readOnly: c
  }), h = d || f || p, m = Y(t, n.id, s), g = W(), E = () => (0, r.jsx)(B, {
    userId: t,
    guild: n,
    showLabel: 0 === i.length,
    onAddRole: l
  });
  return 0 === i.length ? d ? (0, r.jsx)("div", {
    className: o()(P.MR, a),
    children: E()
  }) : null : (0, r.jsx)("div", {
    className: o()(P.MR, a),
    children: h ? (0, r.jsxs)(F, {
      roleCount: i.length,
      children: [i.map(e => (0, r.jsx)(V, {
        role: e,
        guildId: n.id,
        canRemove: _(e.id),
        onRemoveRole: f ? m : true,
        onContextMenu: p ? t => g(t, e.id) : true
      }, e.id)), d ? E() : null]
    }) : (0, r.jsx)("ul", {
      className: P.nt,
      "aria-label": R.intl.string(R.t["LPJmL/"]),
      children: i.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(G, {
          role: e,
          guildId: n.id
        })
      }, e.id))
    })
  })
}

function z(e) {
  let {
    isExpanded: t,
    overflowCount: n,
    onClick: i,
    buttonRef: a
  } = e, s = t ? R.intl.string(R.t.XnXtCt) : R.intl.string(R.t.DY6n4q), l = t ? R.intl.string(R.t.XnXtCt) : R.intl.formatToPlainString(R.t.zr0Y5R, {
    numberOfItems: n
  });
  return (0, r.jsx)(f.m_, {
    text: s,
    ariaHidden: true,
    children: (0, r.jsx)(p.DUT, {
      innerRef: a,
      "aria-label": l,
      onClick: i,
      className: o()(P.s6, {
        [P.X1]: !t
      }),
      children: t ? (0, r.jsx)(p.n2b, {
        size: "xs",
        color: "currentColor"
      }) : (0, r.jsx)(p.Text, {
        variant: "text-xs/normal",
        color: "none",
        children: "+".concat(n)
      })
    })
  })
}
let q = 4,
  Z = 268,
  Q = 2,
  X = e => {
    if (null == e) return 0;
    let {
      width: t
    } = e.getBoundingClientRect();
    return t > 0 ? t + q : 0
  };

function J(e) {
  let {
    userId: t,
    guild: n,
    roles: a,
    className: s,
    onAddRole: l,
    onRemoveRole: c,
    onExpand: u,
    onCollapse: d,
    allowEditing: f = false,
    readOnly: p = false
  } = e, {
    canAddRoles: _,
    canRemoveAnyRoles: h,
    hasDeveloperContextMenu: m,
    isRoleRemovable: g
  } = H({
    userId: t,
    guild: n,
    roles: a,
    allowEditing: f,
    readOnly: p
  }), E = _ || h || m, y = Y(t, n.id, c), b = W(), O = i.useRef({}), v = (e, t) => {
    null != t ? O.current[e] = t : delete O.current[e]
  }, [A, I] = i.useState(a), [S, T] = i.useState(Z), [C, N] = i.useState(false), w = i.useRef(null), D = i.useRef(null), L = i.useRef(0);
  i.useLayoutEffect(() => {
    L.current = 0
  }, [a]), i.useLayoutEffect(() => {
    if (C) return;
    let e = X(w.current),
      t = X(D.current),
      n = [],
      r = Z - e - t;
    for (let e = 0; e < Q; e++) {
      let t = e === Q - 1 ? r : Z;
      for (let e = 0, r = n.length; r < a.length; r++) {
        let i = a[r],
          o = O.current[i.id];
        if (null == o) {
          0 === L.current && n.push(i);
          continue
        }
        let s = Math.min(o.getBoundingClientRect().width, t);
        if (e + s > t) break;
        e += s + q, n.push(i)
      }
    }
    I(n.length === A.length ? A : n), T(r), L.current++
  }, [a, A, C]);
  let x = C ? a : A,
    M = () => {
      C ? (null == d || d(), N(false)) : (null == u || u(), N(true))
    },
    j = () => A.length < a.length ? (0, r.jsx)(z, {
      isExpanded: C,
      overflowCount: a.length - A.length,
      onClick: M,
      buttonRef: w
    }) : null,
    k = () => (0, r.jsx)(B, {
      buttonRef: D,
      userId: t,
      guild: n,
      showLabel: 0 === a.length,
      onAddRole: l
    });
  return 0 === a.length ? _ ? (0, r.jsx)("div", {
    className: o()(P.MR, s),
    children: k()
  }) : null : (0, r.jsx)("div", {
    className: o()(P.MR, s),
    children: E ? (0, r.jsxs)(F, {
      roleCount: a.length,
      children: [x.map((e, t) => (0, r.jsx)(V, {
        role: e,
        guildId: n.id,
        canRemove: g(e.id),
        onRemoveRole: h ? y : true,
        itemRef: t => v(e.id, t),
        onContextMenu: m ? t => b(t, e.id) : true,
        style: {
          maxWidth: C || t !== A.length - 1 ? Z : S
        }
      }, e.id)), j(), _ ? k() : null]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("ul", {
        className: P.nt,
        "aria-label": R.intl.string(R.t["LPJmL/"]),
        children: x.map((e, t) => (0, r.jsx)("li", {
          children: (0, r.jsx)(G, {
            itemRef: t => v(e.id, t),
            role: e,
            guildId: n.id,
            style: {
              maxWidth: C || t !== A.length - 1 ? Z : S
            }
          })
        }, e.id))
      }), j()]
    })
  })
}