/** Chunk was on web.js **/
/** chunk id: 417454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => J,
  b_: () => q
}), require("./896048.js"), require("./638769.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk835245 = require("./835245.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk884362 = require("./884362.js"),
  Chunk317097 = require("./317097.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk686956 = require("./686956.js"),
  Chunk456412 = require("./456412.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk63104 = require("./63104.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk201275 = require("./201275.js"),
  Chunk997509 = require("./997509.js"),
  Chunk967144 = require("./967144.js"),
  Chunk657048 = require("./657048.jsx"),
  Chunk1659 = require("./1659.js"),
  Chunk465738 = require("./465738.jsx"),
  Chunk34457 = require("./34457.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk488926 = require("./488926.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk702632 = require("./702632.js");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}

function V(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = H(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function H(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let Y = 30,
  W = 4,
  K = () => Promise.resolve();

function z(e) {
  let {
    userRoleIds: t,
    position: n
  } = e, i = B(e, ["userRoleIds", "position"]), a = (0, A.GV)();
  return (0, r.jsxs)(h.lGe, {
    className: s()(k.Jo, {
      [k.Vf]: "bottom" === n,
      [k.vy]: "top" === n
    }),
    "aria-labelledby": a,
    children: [(0, r.jsx)("div", {
      className: k.rF,
      children: (0, r.jsx)("div", {
        className: k.QG
      })
    }), (0, r.jsxs)(O.A, {
      className: k.q0,
      align: O.A.Align.CENTER,
      children: [(0, r.jsx)(h.iFK, {
        size: "xs",
        color: _.A.unsafe_rawColors.PRIMARY_400.css,
        className: k.LP
      }), (0, r.jsx)("div", {
        className: k.VT,
        id: a,
        children: M.intl.format(M.t.PCs0oo, {
          numRoles: t.length
        })
      })]
    }), (0, r.jsx)(Q, F(G({}, i), {
      wrap: true,
      userRoleIds: t
    }))]
  })
}
let q = Chunk64700.forwardRef(function(e, t) {
  var a, o, l;
  let c, {
      canRemove: d,
      className: g,
      role: E,
      onRemove: O,
      guildId: A,
      disableBorderColor: S,
      onMouseDown: C,
      guild: N
    } = e,
    R = (0, u.rm)(E.id),
    {
      tabIndex: w
    } = R,
    P = B(R, ["tabIndex"]),
    D = (0, v.$7)({
      roleId: E.id,
      size: 16,
      guildId: A,
      role: E,
      guild: N
    }),
    x = (0, p.bG)([b.A], () => b.A.roleStyle),
    L = (0, I.X_)(A, E, E.colorStrings),
    j = (null == (l = E.tags) ? true : l.guild_connections) === null,
    U = i.useCallback(e => {
      (0, m.L3)(e, async () => {
        let {
          default: e
        } = await n.e("15687").then(n.bind(n, 646938));
        return t => (0, r.jsx)(e, F(G({}, t), {
          id: E.id,
          label: M.intl.string(M.t.sMsaLg)
        }))
      })
    }, [E.id]),
    V = (0, h.rdh)(_.A.unsafe_rawColors.PRIMARY_300).hsl(),
    H = null != (a = E.colorString) ? a : V,
    Y = null != (o = (0, f.xp)(H, .6)) ? o : true,
    W = _.A.unsafe_rawColors.WHITE.css,
    K = (0, f.LX)(H);
  null != K && .3 > (0, f.OK)(K) && (W = _.A.unsafe_rawColors.PRIMARY_630.css), c = j ? (0, r.jsx)(y.A, {
    className: k.U4,
    iconClassName: d ? k.gD : true,
    color: H,
    size: 14
  }) : "dot" === x ? (0, r.jsx)(h.WYI, {
    className: k.m4,
    color: H,
    colors: L,
    background: false,
    tooltip: false
  }) : (0, r.jsx)(h.RYH, {
    color: H,
    colors: L
  });
  let z = i.useMemo(() => {
    var t;
    return G({
      borderColor: S ? true : Y
    }, null != (t = e.style) ? t : {})
  }, [Y, S, e.style]);
  return (0, r.jsx)(h.vN3, {
    children: (0, r.jsxs)("div", F(G({
      ref: t,
      className: s()(k.JC, g),
      style: z,
      onContextMenu: U,
      onMouseDown: C,
      "aria-label": E.name,
      tabIndex: w
    }, P), {
      children: [(0, r.jsxs)(h.DUT, {
        className: s()(d && k.jH, k.j1),
        onClick: d ? O : true,
        tabIndex: d ? w : false,
        focusProps: {
          focusClassName: k.vZ
        },
        "aria-hidden": !d,
        "aria-label": M.intl.formatToPlainString(M.t.QrxwhY, {
          roleName: E.name
        }),
        children: [c, d ? (0, r.jsx)(h.PGe, {
          size: "md",
          color: W,
          className: k.s$,
          "aria-hidden": true
        }) : null]
      }), null != D ? (0, r.jsx)(T.A, F(G({
        className: k.UT
      }, D), {
        enableTooltip: false
      })) : null, (0, r.jsx)("div", {
        "aria-hidden": true,
        className: k.S3,
        children: (0, r.jsx)(h.Text, {
          variant: "text-xs/medium",
          className: k.sH,
          children: E.name
        })
      })]
    }))
  })
});

function X(e) {
  let {
    user: t,
    numRolesHidden: n,
    roleClassName: a
  } = e, o = (0, u.rm)("overflow-more-roles-".concat(t.id)), l = i.useRef(null);
  return (0, r.jsx)(h.YNO, {
    targetElementRef: l,
    renderPopout: t => {
      let {
        position: n
      } = t;
      return (0, r.jsx)(z, F(G({}, e), {
        position: null != n ? n : "top"
      }))
    },
    position: "top",
    align: "center",
    children: e => (0, r.jsx)(h.vN3, {
      children: (0, r.jsx)("button", F(G(F(G({
        ref: l
      }, e), {
        className: s()(k.lv, a)
      }), o), {
        children: "+".concat(n)
      }))
    })
  })
}

function Z(e) {
  let t = i.useRef(null),
    {
      guild: n,
      user: a,
      handleAddRole: o,
      roleClassName: l,
      addButtonClassName: c,
      addButtonIconClassName: d
    } = e,
    f = (0, u.rm)("overflow-add-roles-".concat(a.id)),
    _ = (0, p.bG)([b.A], () => b.A.roleStyle),
    m = D.A.getHighestRole(n),
    g = w.Ay.getMember(n.id, a.id),
    E = e => !(0, R.Oy)(e) && !e.managed && D.A.isRoleHigher(n, m, e) && (null == g || false === g.roles.indexOf(e.id));
  return (0, r.jsx)(h.YNO, {
    targetElementRef: t,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(N.A, {
        guild: n,
        roleStyle: _,
        roleFilter: E,
        onSelect: o,
        onClose: t
      })
    },
    position: "bottom",
    align: "center",
    children: e => (0, r.jsx)(h.vN3, {
      children: (0, r.jsx)("button", F(G(F(G({
        ref: t
      }, e), {
        className: s()(k.c9, l, c),
        "aria-label": M.intl.string(M.t.e3Wlyw),
        type: "button"
      }), f), {
        children: (0, r.jsx)(h.j96, {
          size: "md",
          color: "currentColor",
          className: s()(k.hs, d),
          "aria-hidden": true
        })
      }))
    })
  })
}

function Q(e) {
  let t, {
      user: n,
      guild: a,
      userRoleIds: o,
      wrap: f = true,
      width: _,
      className: h,
      readOnly: m,
      roleClassName: E,
      disableBorderColor: b
    } = e,
    y = i.useRef({});

  function O(e, t) {
    null != t ? y.current[e] = t : delete y.current[e]
  }
  let A = i.useCallback(e => {
      var t;
      let r = o.filter(t => t !== e.id);
      (null == (t = e.tags) ? true : t.guild_connections) === null ? g.A.unassignGuildRoleConnection(a.id, e.id) : S.A.updateMemberRoles(a.id, n.id, r, [], [e.id])
    }, [o, a.id, n.id]),
    v = i.useCallback(e => {
      let t = o;
      t.includes(e) || (t = [...t, e]), S.A.updateMemberRoles(a.id, n.id, t, [e], [])
    }, [o, a.id, n.id]),
    [I, T] = i.useState(null),
    N = (0, p.yK)([P.A], () => P.A.getManyRoles(a.id, o).sort(C.m)),
    R = i.useMemo(() => null != I ? N.slice(0, I) : N, [N, I]),
    w = o.length - R.length;
  i.useLayoutEffect(() => {
    if (f) return;
    if ("number" != typeof _) throw Error("Unexpected null width");
    let e = 0,
      t = 0,
      n = _ - Y - W;
    for (let r = 0; r < R.length; r++) {
      let i = R[r],
        a = y.current[i.id];
      if (null != a) {
        if ((t += a.offsetWidth + W) > n) break;
        e++
      }
    }
    T(t => e < R.length ? e : t)
  }, [f, _, R]);
  let U = x.default.getCurrentUser();
  l()(null != U, "MemberRolesList: currentUser cannot be undefined");
  let V = !m && D.A.can(j.xBc.MANAGE_ROLES, a),
    H = L.HJ(a, U.id),
    z = i.useMemo(() => "roles-".concat((0, c.A)()), []),
    Q = (0, d.Ay)({
      id: z,
      isEnabled: true,
      scrollToStart: K,
      scrollToEnd: K,
      wrap: true
    }),
    $ = R.map(e => {
      var t;
      return (0, r.jsx)(q, {
        className: E,
        role: e,
        canRemove: (null == (t = e.tags) ? true : t.guild_connections) === null ? n.id === U.id : V && L.wO(a, U.id, H, e),
        onRemove: () => A(e),
        ref: t => O(e.id, t),
        guildId: a.id,
        disableBorderColor: b
      }, e.id)
    });
  return null != I && 0 !== w ? t = (0, r.jsx)(X, F(G({}, e), {
    numRolesHidden: w
  })) : V && (t = (0, r.jsx)(Z, F(G({}, e), {
    handleAddRole: v
  }))), (0, r.jsx)(u.hD, {
    navigator: Q,
    children: (0, r.jsx)(u.PR, {
      children: e => {
        let {
          ref: n
        } = e, i = B(e, ["ref"]);
        return (0, r.jsxs)("div", F(G({
          className: s()(k.zr, h),
          "aria-label": M.intl.formatToPlainString(M.t.PCs0oo, {
            numRoles: o.length
          }),
          ref: n
        }, i), {
          children: [$, t]
        }))
      }
    })
  })
}
let $ = (0, Chunk456412.A)(Q);

function J(e) {
  return (0, p.bG)([D.A], () => {
    var t;
    return D.A.getGuildVersion(null == (t = e.guild) ? true : t.id)
  }), false === e.wrap ? (0, r.jsx)($, G({}, e)) : (0, r.jsx)(Q, G({}, e))
}