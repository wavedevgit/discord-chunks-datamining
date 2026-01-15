/** Chunk was on web.js **/
/** chunk id: 412899, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UB: () => z,
  ZP: () => $
}), require("./388685.js"), require("./642613.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk772848 = require("./772848.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk924826 = require("./924826.js"),
  Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk749210 = require("./749210.js"),
  Chunk112724 = require("./112724.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk134433 = require("./134433.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk518738 = require("./518738.js"),
  Chunk434404 = require("./434404.js"),
  Chunk884902 = require("./884902.js"),
  Chunk48950 = require("./48950.jsx"),
  Chunk635042 = require("./635042.js"),
  Chunk608798 = require("./608798.jsx"),
  Chunk345162 = require("./345162.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk975614 = require("./975614.js");

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

function Z(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i = V(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function V(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let H = 30,
  Y = 4,
  W = () => Promise.resolve();

function K(e) {
  let {
    userRoleIds: t,
    position: n
  } = e, i = B(e, ["userRoleIds", "position"]), a = (0, v.Dt)();
  return (0, r.jsxs)(h.VqE, {
    className: o()(k.overflowRolesPopout, {
      [k.popoutBottom]: "bottom" === n,
      [k.popoutTop]: "top" === n
    }),
    "aria-labelledby": a,
    children: [(0, r.jsx)("div", {
      className: k.overflowRolesPopoutArrowWrapper,
      children: (0, r.jsx)("div", {
        className: k.overflowRolesPopoutArrow
      })
    }), (0, r.jsxs)(O.Z, {
      className: k.overflowRolesPopoutHeader,
      align: O.Z.Align.CENTER,
      children: [(0, r.jsx)(h.U65, {
        size: "xs",
        color: _.Z.unsafe_rawColors.PRIMARY_400.css,
        className: k.overflowRolesPopoutHeaderIcon
      }), (0, r.jsx)("div", {
        className: k.overflowRolesPopoutHeaderText,
        id: a,
        children: M.intl.format(M.t.PCs0oo, {
          numRoles: t.length
        })
      })]
    }), (0, r.jsx)(X, F(G({}, i), {
      wrap: true,
      userRoleIds: t
    }))]
  })
}
let z = Chunk473749.forwardRef(function(e, t) {
  var a, s, l;
  let c, {
      canRemove: d,
      className: g,
      role: E,
      onRemove: O,
      guildId: v,
      disableBorderColor: I,
      onMouseDown: A,
      guild: N
    } = e,
    P = (0, u.JA)(E.id),
    {
      tabIndex: w
    } = P,
    R = B(P, ["tabIndex"]),
    D = (0, S.p9)({
      roleId: E.id,
      size: 16,
      guildId: v,
      role: E,
      guild: N
    }),
    x = (0, p.e7)([b.Z], () => b.Z.roleStyle),
    L = (0, T._f)(v, E, E.colorStrings),
    j = (null == (a = E.tags) ? true : a.guild_connections) === null,
    U = i.useCallback(e => {
      (0, m.jW)(e, async () => {
        let {
          default: e
        } = await n.e("5396").then(n.bind(n, 731646));
        return t => (0, r.jsx)(e, F(G({}, t), {
          id: E.id,
          label: M.intl.string(M.t.sMsaLg)
        }))
      })
    }, [E.id]),
    Z = (0, h.dQu)(_.Z.unsafe_rawColors.PRIMARY_300).hsl(),
    V = null != (s = E.colorString) ? s : Z,
    H = null != (l = (0, f.wK)(V, .6)) ? l : true,
    Y = _.Z.unsafe_rawColors.WHITE.css,
    W = (0, f._i)(V);
  null != W && .3 > (0, f.Bd)(W) && (Y = _.Z.unsafe_rawColors.PRIMARY_630.css), c = j ? (0, r.jsx)(y.Z, {
    className: k.roleFlowerStar,
    iconClassName: d ? k.roleVerifiedIcon : true,
    color: V,
    size: 14
  }) : "dot" === x ? (0, r.jsx)(h.FhE, {
    className: k.roleDot,
    color: V,
    colors: L,
    background: false,
    tooltip: false
  }) : (0, r.jsx)(h.xko, {
    color: V,
    colors: L
  });
  let K = i.useMemo(() => {
    var t;
    return G({
      borderColor: I ? true : H
    }, null != (t = e.style) ? t : {})
  }, [H, I, e.style]);
  return (0, r.jsx)(h.tEY, {
    children: (0, r.jsxs)("div", F(G({
      ref: t,
      className: o()(k.role, g),
      style: K,
      onContextMenu: U,
      onMouseDown: A,
      "aria-label": E.name,
      tabIndex: w
    }, R), {
      children: [(0, r.jsxs)(h.P3F, {
        className: o()(d && k.roleRemoveButtonCanRemove, k.roleRemoveButton),
        onClick: d ? O : true,
        tabIndex: d ? w : false,
        focusProps: {
          focusClassName: k.roleRemoveIconFocused
        },
        "aria-hidden": !d,
        "aria-label": M.intl.formatToPlainString(M.t.QrxwhY, {
          roleName: E.name
        }),
        children: [c, d ? (0, r.jsx)(h.Dio, {
          size: "md",
          color: Y,
          className: k.roleRemoveIcon,
          "aria-hidden": true
        }) : null]
      }), null != D ? (0, r.jsx)(C.Z, F(G({
        className: k.roleIcon
      }, D), {
        enableTooltip: false
      })) : null, (0, r.jsx)("div", {
        "aria-hidden": true,
        className: k.roleName,
        children: (0, r.jsx)(h.Text, {
          variant: "text-xs/medium",
          className: k.roleNameOverflow,
          children: E.name
        })
      })]
    }))
  })
});

function q(e) {
  let {
    user: t,
    numRolesHidden: n,
    roleClassName: a
  } = e, s = (0, u.JA)("overflow-more-roles-".concat(t.id)), l = i.useRef(null);
  return (0, r.jsx)(h.yRy, {
    targetElementRef: l,
    renderPopout: t => {
      let {
        position: n
      } = t;
      return (0, r.jsx)(K, F(G({}, e), {
        position: null != n ? n : "top"
      }))
    },
    position: "top",
    align: "center",
    children: e => (0, r.jsx)(h.tEY, {
      children: (0, r.jsx)("button", F(G(F(G({
        ref: l
      }, e), {
        className: o()(k.overflowButton, a)
      }), s), {
        children: "+".concat(n)
      }))
    })
  })
}

function Q(e) {
  let t = i.useRef(null),
    {
      guild: n,
      user: a,
      handleAddRole: s,
      roleClassName: l,
      addButtonClassName: c,
      addButtonIconClassName: d
    } = e,
    f = (0, u.JA)("overflow-add-roles-".concat(a.id)),
    _ = (0, p.e7)([b.Z], () => b.Z.roleStyle),
    m = D.Z.getHighestRole(n),
    g = w.ZP.getMember(n.id, a.id),
    E = e => !(0, P.fI)(e) && !e.managed && D.Z.isRoleHigher(n, m, e) && (null == g || false === g.roles.indexOf(e.id));
  return (0, r.jsx)(h.yRy, {
    targetElementRef: t,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(N.Z, {
        guild: n,
        roleStyle: _,
        roleFilter: E,
        onSelect: s,
        onClose: t
      })
    },
    position: "bottom",
    align: "center",
    children: e => (0, r.jsx)(h.tEY, {
      children: (0, r.jsx)("button", F(G(F(G({
        ref: t
      }, e), {
        className: o()(k.addButton, l, c),
        "aria-label": M.intl.string(M.t.e3Wlyw),
        type: "button"
      }), f), {
        children: (0, r.jsx)(h.qJs, {
          size: "md",
          color: "currentColor",
          className: o()(k.addButtonIcon, d),
          "aria-hidden": true
        })
      }))
    })
  })
}

function X(e) {
  let t, {
      user: n,
      guild: a,
      userRoleIds: s,
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
  let v = i.useCallback(e => {
      var t;
      let r = s.filter(t => t !== e.id);
      (null == (t = e.tags) ? true : t.guild_connections) === null ? g.Z.unassignGuildRoleConnection(a.id, e.id) : I.Z.updateMemberRoles(a.id, n.id, r, [], [e.id])
    }, [s, a.id, n.id]),
    S = i.useCallback(e => {
      let t = s;
      t.includes(e) || (t = [...t, e]), I.Z.updateMemberRoles(a.id, n.id, t, [e], [])
    }, [s, a.id, n.id]),
    [T, C] = i.useState(null),
    N = (0, p.Wu)([R.Z], () => R.Z.getManyRoles(a.id, s).sort(A.Z)),
    P = i.useMemo(() => null != T ? N.slice(0, T) : N, [N, T]),
    w = s.length - P.length;
  i.useLayoutEffect(() => {
    if (f) return;
    if ("number" != typeof _) throw Error("Unexpected null width");
    let e = 0,
      t = 0,
      n = _ - H - Y;
    for (let r = 0; r < P.length; r++) {
      let i = P[r],
        a = y.current[i.id];
      if (null != a) {
        if ((t += a.offsetWidth + Y) > n) break;
        e++
      }
    }
    C(t => e < P.length ? e : t)
  }, [f, _, P]);
  let U = x.default.getCurrentUser();
  l()(null != U, "MemberRolesList: currentUser cannot be undefined");
  let Z = !m && D.Z.can(j.Plq.MANAGE_ROLES, a),
    V = L.e9(a, U.id),
    K = i.useMemo(() => "roles-".concat((0, c.Z)()), []),
    X = (0, d.ZP)({
      id: K,
      isEnabled: true,
      scrollToStart: W,
      scrollToEnd: W,
      wrap: true
    }),
    J = P.map(e => {
      var t;
      return (0, r.jsx)(z, {
        className: E,
        role: e,
        canRemove: (null == (t = e.tags) ? true : t.guild_connections) === null ? n.id === U.id : Z && L.r6(a, U.id, V, e),
        onRemove: () => v(e),
        ref: t => O(e.id, t),
        guildId: a.id,
        disableBorderColor: b
      }, e.id)
    });
  return null != T && 0 !== w ? t = (0, r.jsx)(q, F(G({}, e), {
    numRolesHidden: w
  })) : Z && (t = (0, r.jsx)(Q, F(G({}, e), {
    handleAddRole: S
  }))), (0, r.jsx)(u.bG, {
    navigator: X,
    children: (0, r.jsx)(u.SJ, {
      children: e => {
        var {
          ref: n
        } = e, i = B(e, ["ref"]);
        return (0, r.jsxs)("div", F(G({
          className: o()(k.root, h),
          "aria-label": M.intl.formatToPlainString(M.t.PCs0oo, {
            numRoles: s.length
          }),
          ref: n
        }, i), {
          children: [J, t]
        }))
      }
    })
  })
}
let J = (0, Chunk112724.Z)(X);

function $(e) {
  return (0, p.e7)([D.Z], () => {
    var t;
    return D.Z.getGuildVersion(null == (t = e.guild) ? true : t.id)
  }), false === e.wrap ? (0, r.jsx)(J, G({}, e)) : (0, r.jsx)(X, G({}, e))
}