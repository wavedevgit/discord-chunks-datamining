/** Chunk was on 37372 **/
/** chunk id: 417454, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Ay: () => z,
  b_: () => H
}), require("./896048.js"), require("./638769.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
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

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function k(e, t) {
  if (null == e) return {};
  var r, n, l, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        i = Object.getOwnPropertyNames(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let K = () => Promise.resolve();

function V(e) {
  let {
    userRoleIds: t,
    position: r
  } = e, l = k(e, ["userRoleIds", "position"]), i = (0, b.GV)();
  return (0, n.jsxs)(_.lGe, {
    className: o()(P.Jo, {
      [P.Vf]: "bottom" === r,
      [P.vy]: "top" === r
    }),
    "aria-labelledby": i,
    children: [(0, n.jsx)("div", {
      className: P.rF,
      children: (0, n.jsx)("div", {
        className: P.QG
      })
    }), (0, n.jsxs)(C.A, {
      className: P.q0,
      align: C.A.Align.CENTER,
      children: [(0, n.jsx)(_.iFK, {
        size: "xs",
        color: p.A.unsafe_rawColors.PRIMARY_400.css,
        className: P.LP
      }), (0, n.jsx)("div", {
        className: P.VT,
        id: i,
        children: U.intl.format(U.t.PCs0oo, {
          numRoles: t.length
        })
      })]
    }), (0, n.jsx)(B, M(L({}, l), {
      wrap: true,
      userRoleIds: t
    }))]
  })
}
let H = Chunk64700.forwardRef(function(e, t) {
  var i, s, a;
  let c, {
      canRemove: d,
      className: h,
      role: S,
      onRemove: C,
      guildId: b,
      disableBorderColor: A,
      onMouseDown: j,
      guild: D
    } = e,
    v = (0, u.rm)(S.id),
    {
      tabIndex: T
    } = v,
    x = k(v, ["tabIndex"]),
    G = (0, m.$7)({
      roleId: S.id,
      size: 16,
      guildId: b,
      role: S,
      guild: D
    }),
    w = (0, f.bG)([g.A], () => g.A.roleStyle),
    F = (0, R.X_)(b, S, S.colorStrings),
    N = (null == (a = S.tags) ? true : a.guild_connections) === null,
    K = l.useCallback(e => {
      (0, O.L3)(e, async () => {
        let {
          default: e
        } = await r.e("15687").then(r.bind(r, 646938));
        return t => (0, n.jsx)(e, M(L({}, t), {
          id: S.id,
          label: U.intl.string(U.t.sMsaLg)
        }))
      })
    }, [S.id]),
    V = (0, _.rdh)(p.A.unsafe_rawColors.PRIMARY_300).hsl(),
    H = null != (i = S.colorString) ? i : V,
    Y = null != (s = (0, E.xp)(H, .6)) ? s : true,
    W = p.A.unsafe_rawColors.WHITE.css,
    B = (0, E.LX)(H);
  null != B && .3 > (0, E.OK)(B) && (W = p.A.unsafe_rawColors.PRIMARY_630.css), c = N ? (0, n.jsx)(y.A, {
    className: P.U4,
    iconClassName: d ? P.gD : true,
    color: H,
    size: 14
  }) : "dot" === w ? (0, n.jsx)(_.WYI, {
    className: P.m4,
    color: H,
    colors: F,
    background: false,
    tooltip: false
  }) : (0, n.jsx)(_.RYH, {
    color: H,
    colors: F
  });
  let J = l.useMemo(() => {
    var t;
    return L({
      borderColor: A ? true : Y
    }, null != (t = e.style) ? t : {})
  }, [Y, A, e.style]);
  return (0, n.jsx)(_.vN3, {
    children: (0, n.jsxs)("div", M(L({
      ref: t,
      className: o()(P.JC, h),
      style: J,
      onContextMenu: K,
      onMouseDown: j,
      "aria-label": S.name,
      tabIndex: T
    }, x), {
      children: [(0, n.jsxs)(_.DUT, {
        className: o()(d && P.jH, P.j1),
        onClick: d ? C : true,
        tabIndex: d ? T : false,
        focusProps: {
          focusClassName: P.vZ
        },
        "aria-hidden": !d,
        "aria-label": U.intl.formatToPlainString(U.t.QrxwhY, {
          roleName: S.name
        }),
        children: [c, d ? (0, n.jsx)(_.PGe, {
          size: "md",
          color: W,
          className: P.s$,
          "aria-hidden": true
        }) : null]
      }), null != G ? (0, n.jsx)(I.A, M(L({
        className: P.UT
      }, G), {
        enableTooltip: false
      })) : null, (0, n.jsx)("div", {
        "aria-hidden": true,
        className: P.S3,
        children: (0, n.jsx)(_.Text, {
          variant: "text-xs/medium",
          className: P.sH,
          children: S.name
        })
      })]
    }))
  })
});

function Y(e) {
  let {
    user: t,
    numRolesHidden: r,
    roleClassName: i
  } = e, s = (0, u.rm)("overflow-more-roles-".concat(t.id)), a = l.useRef(null);
  return (0, n.jsx)(_.YNO, {
    targetElementRef: a,
    renderPopout: t => {
      let {
        position: r
      } = t;
      return (0, n.jsx)(V, M(L({}, e), {
        position: null != r ? r : "top"
      }))
    },
    position: "top",
    align: "center",
    children: e => (0, n.jsx)(_.vN3, {
      children: (0, n.jsx)("button", M(L(M(L({
        ref: a
      }, e), {
        className: o()(P.lv, i)
      }), s), {
        children: "+".concat(r)
      }))
    })
  })
}

function W(e) {
  let t = l.useRef(null),
    {
      guild: r,
      user: i,
      handleAddRole: s,
      roleClassName: a,
      addButtonClassName: c,
      addButtonIconClassName: d
    } = e,
    E = (0, u.rm)("overflow-add-roles-".concat(i.id)),
    p = (0, f.bG)([g.A], () => g.A.roleStyle),
    O = G.A.getHighestRole(r),
    h = T.Ay.getMember(r.id, i.id),
    S = e => !(0, v.Oy)(e) && !e.managed && G.A.isRoleHigher(r, O, e) && (null == h || false === h.roles.indexOf(e.id));
  return (0, n.jsx)(_.YNO, {
    targetElementRef: t,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(D.A, {
        guild: r,
        roleStyle: p,
        roleFilter: S,
        onSelect: s,
        onClose: t
      })
    },
    position: "bottom",
    align: "center",
    children: e => (0, n.jsx)(_.vN3, {
      children: (0, n.jsx)("button", M(L(M(L({
        ref: t
      }, e), {
        className: o()(P.c9, a, c),
        "aria-label": U.intl.string(U.t.e3Wlyw),
        type: "button"
      }), E), {
        children: (0, n.jsx)(_.j96, {
          size: "md",
          color: "currentColor",
          className: o()(P.hs, d),
          "aria-hidden": true
        })
      }))
    })
  })
}

function B(e) {
  let t, {
      user: r,
      guild: i,
      userRoleIds: s,
      wrap: E = true,
      width: p,
      className: _,
      readOnly: O,
      roleClassName: S,
      disableBorderColor: g
    } = e,
    y = l.useRef({}),
    C = l.useCallback(e => {
      var t;
      let n = s.filter(t => t !== e.id);
      (null == (t = e.tags) ? true : t.guild_connections) === null ? h.A.unassignGuildRoleConnection(i.id, e.id) : A.A.updateMemberRoles(i.id, r.id, n, [], [e.id])
    }, [s, i.id, r.id]),
    b = l.useCallback(e => {
      let t = s;
      t.includes(e) || (t = [...t, e]), A.A.updateMemberRoles(i.id, r.id, t, [e], [])
    }, [s, i.id, r.id]),
    [m, R] = l.useState(null),
    I = (0, f.yK)([x.A], () => x.A.getManyRoles(i.id, s).sort(j.m)),
    D = l.useMemo(() => null != m ? I.slice(0, m) : I, [I, m]),
    v = s.length - D.length;
  l.useLayoutEffect(() => {
    if (E) return;
    if ("number" != typeof p) throw Error("Unexpected null width");
    let e = 0,
      t = 0,
      r = p - 30 - 4;
    for (let n = 0; n < D.length; n++) {
      let l = D[n],
        i = y.current[l.id];
      if (null != i) {
        if ((t += i.offsetWidth + 4) > r) break;
        e++
      }
    }
    R(t => e < D.length ? e : t)
  }, [E, p, D]);
  let T = w.default.getCurrentUser();
  a()(null != T, "MemberRolesList: currentUser cannot be undefined");
  let V = !O && G.A.can(N.xBc.MANAGE_ROLES, i),
    B = F.HJ(i, T.id),
    J = l.useMemo(() => "roles-".concat((0, c.A)()), []),
    z = (0, d.Ay)({
      id: J,
      isEnabled: true,
      scrollToStart: K,
      scrollToEnd: K,
      wrap: true
    }),
    Z = D.map(e => {
      var t;
      return (0, n.jsx)(H, {
        className: S,
        role: e,
        canRemove: (null == (t = e.tags) ? true : t.guild_connections) === null ? r.id === T.id : V && F.wO(i, T.id, B, e),
        onRemove: () => C(e),
        ref: t => {
          var r;
          return r = e.id, void(null != t ? y.current[r] = t : delete y.current[r])
        },
        guildId: i.id,
        disableBorderColor: g
      }, e.id)
    });
  return null != m && 0 !== v ? t = (0, n.jsx)(Y, M(L({}, e), {
    numRolesHidden: v
  })) : V && (t = (0, n.jsx)(W, M(L({}, e), {
    handleAddRole: b
  }))), (0, n.jsx)(u.hD, {
    navigator: z,
    children: (0, n.jsx)(u.PR, {
      children: e => {
        let {
          ref: r
        } = e, l = k(e, ["ref"]);
        return (0, n.jsxs)("div", M(L({
          className: o()(P.zr, _),
          "aria-label": U.intl.formatToPlainString(U.t.PCs0oo, {
            numRoles: s.length
          }),
          ref: r
        }, l), {
          children: [Z, t]
        }))
      }
    })
  })
}
let J = (0, Chunk456412.A)(B);

function z(e) {
  return (0, f.bG)([G.A], () => {
    var t;
    return G.A.getGuildVersion(null == (t = e.guild) ? true : t.id)
  }), false === e.wrap ? (0, n.jsx)(J, L({}, e)) : (0, n.jsx)(B, L({}, e))
}