/** Chunk was on web.js **/
/** chunk id: 412899, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UB: () => z,
  ZP: () => $
}), require("./388685.js"), require("./642613.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk85703 = require("./85703.js");

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

function B(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function F(e, t) {
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
  } = e, i = F(e, ["userRoleIds", "position"]), a = (0, v.Dt)();
  return (0, r.jsxs)(h.VqE, {
    className: o()(j.overflowRolesPopout, {
      [j.popoutBottom]: "bottom" === n,
      [j.popoutTop]: "top" === n
    }),
    "aria-labelledby": a,
    children: [(0, r.jsx)("div", {
      className: j.overflowRolesPopoutArrowWrapper,
      children: (0, r.jsx)("div", {
        className: j.overflowRolesPopoutArrow
      })
    }), (0, r.jsxs)(O.Z, {
      className: j.overflowRolesPopoutHeader,
      align: O.Z.Align.CENTER,
      children: [(0, r.jsx)(h.U65, {
        size: "xs",
        color: p.Z.unsafe_rawColors.PRIMARY_400.css,
        className: j.overflowRolesPopoutHeaderIcon
      }), (0, r.jsx)("div", {
        className: j.overflowRolesPopoutHeaderText,
        id: a,
        children: k.intl.format(k.t.PCs0oo, {
          numRoles: t.length
        })
      })]
    }), (0, r.jsx)(Q, Z(G({}, i), {
      wrap: true,
      userRoleIds: t
    }))]
  })
}
let z = Chunk647438.forwardRef(function(e, t) {
  var a, s, l;
  let c, {
      canRemove: d,
      className: g,
      role: E,
      onRemove: O,
      guildId: v,
      disableBorderColor: T,
      onMouseDown: C
    } = e,
    N = (0, u.JA)(E.id),
    {
      tabIndex: R
    } = N,
    P = F(N, ["tabIndex"]),
    D = (0, I.p9)({
      roleId: E.id,
      size: 16,
      guildId: v
    }),
    w = (0, _.e7)([b.Z], () => b.Z.roleStyle),
    L = (0, S._f)(v, E, E.colorStrings),
    x = (null == (a = E.tags) ? true : a.guild_connections) === null,
    M = i.useCallback(e => {
      (0, m.jW)(e, async () => {
        let {
          default: e
        } = await n.e("5396").then(n.bind(n, 731646));
        return t => (0, r.jsx)(e, Z(G({}, t), {
          id: E.id,
          label: k.intl.string(k.t.sMsaLg)
        }))
      })
    }, [E.id]),
    U = (0, h.dQu)(p.Z.unsafe_rawColors.PRIMARY_300).hsl(),
    B = null != (s = E.colorString) ? s : U,
    V = null != (l = (0, f.wK)(B, .6)) ? l : true,
    H = p.Z.unsafe_rawColors.WHITE_500.css,
    Y = (0, f._i)(B);
  null != Y && .3 > (0, f.Bd)(Y) && (H = p.Z.unsafe_rawColors.PRIMARY_630.css), c = x ? (0, r.jsx)(y.Z, {
    className: j.roleFlowerStar,
    iconClassName: d ? j.roleVerifiedIcon : true,
    color: B,
    size: 14
  }) : "dot" === w ? (0, r.jsx)(h.FhE, {
    className: j.roleDot,
    color: B,
    colors: L,
    background: false,
    tooltip: false
  }) : (0, r.jsx)(h.xko, {
    color: B,
    colors: L
  });
  let W = i.useMemo(() => {
    var t;
    return G({
      borderColor: T ? true : V
    }, null != (t = e.style) ? t : {})
  }, [V, T, e.style]);
  return (0, r.jsx)(h.tEY, {
    children: (0, r.jsxs)("div", Z(G({
      ref: t,
      className: o()(j.role, g),
      style: W,
      onContextMenu: M,
      onMouseDown: C,
      "aria-label": E.name,
      tabIndex: R
    }, P), {
      children: [(0, r.jsxs)(h.P3F, {
        className: o()(d && j.roleRemoveButtonCanRemove, j.roleRemoveButton),
        onClick: d ? O : true,
        tabIndex: d ? R : false,
        focusProps: {
          focusClassName: j.roleRemoveIconFocused
        },
        "aria-hidden": !d,
        "aria-label": k.intl.formatToPlainString(k.t.QrxwhY, {
          roleName: E.name
        }),
        children: [c, d ? (0, r.jsx)(h.Dio, {
          size: "md",
          color: H,
          className: j.roleRemoveIcon,
          "aria-hidden": true
        }) : null]
      }), null != D ? (0, r.jsx)(A.Z, Z(G({
        className: j.roleIcon
      }, D), {
        enableTooltip: false
      })) : null, (0, r.jsx)("div", {
        "aria-hidden": true,
        className: j.roleName,
        children: (0, r.jsx)(h.Text, {
          variant: "text-xs/medium",
          className: j.roleNameOverflow,
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
      return (0, r.jsx)(K, Z(G({}, e), {
        position: null != n ? n : "top"
      }))
    },
    position: "top",
    align: "center",
    children: e => (0, r.jsx)(h.tEY, {
      children: (0, r.jsx)("button", Z(G(Z(G({
        ref: l
      }, e), {
        className: o()(j.overflowButton, a)
      }), s), {
        children: "+".concat(n)
      }))
    })
  })
}

function X(e) {
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
    p = (0, _.e7)([b.Z], () => b.Z.roleStyle),
    m = w.Z.getHighestRole(n),
    g = P.ZP.getMember(n.id, a.id),
    E = e => !(0, R.fI)(e) && !e.managed && w.Z.isRoleHigher(n, m, e) && (null == g || false === g.roles.indexOf(e.id));
  return (0, r.jsx)(h.yRy, {
    targetElementRef: t,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(N.Z, {
        guild: n,
        roleStyle: p,
        roleFilter: E,
        onSelect: s,
        onClose: t
      })
    },
    position: "bottom",
    align: "center",
    children: e => (0, r.jsx)(h.tEY, {
      children: (0, r.jsx)("button", Z(G(Z(G({
        ref: t
      }, e), {
        className: o()(j.addButton, l, c),
        "aria-label": k.intl.string(k.t.e3Wlyw),
        type: "button"
      }), f), {
        children: (0, r.jsx)(h.qJs, {
          size: "md",
          color: "currentColor",
          className: o()(j.addButtonIcon, d),
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
      userRoleIds: s,
      wrap: f = true,
      width: p,
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
      (null == (t = e.tags) ? true : t.guild_connections) === null ? g.Z.unassignGuildRoleConnection(a.id, e.id) : T.Z.updateMemberRoles(a.id, n.id, r, [], [e.id])
    }, [s, a.id, n.id]),
    I = i.useCallback(e => {
      let t = s;
      t.includes(e) || (t = [...t, e]), T.Z.updateMemberRoles(a.id, n.id, t, [e], [])
    }, [s, a.id, n.id]),
    [S, A] = i.useState(null),
    N = (0, _.Wu)([D.Z], () => D.Z.getManyRoles(a.id, s).sort(C.Z)),
    R = i.useMemo(() => null != S ? N.slice(0, S) : N, [N, S]),
    P = s.length - R.length;
  i.useLayoutEffect(() => {
    if (f) return;
    if ("number" != typeof p) throw Error("Unexpected null width");
    let e = 0,
      t = 0,
      n = p - H - Y;
    for (let r = 0; r < R.length; r++) {
      let i = R[r],
        a = y.current[i.id];
      if (null != a) {
        if ((t += a.offsetWidth + Y) > n) break;
        e++
      }
    }
    A(t => e < R.length ? e : t)
  }, [f, p, R]);
  let U = L.default.getCurrentUser();
  l()(null != U, "MemberRolesList: currentUser cannot be undefined");
  let B = !m && w.Z.can(M.Plq.MANAGE_ROLES, a),
    V = x.e9(a, U.id),
    K = i.useMemo(() => "roles-".concat((0, c.Z)()), []),
    Q = (0, d.ZP)({
      id: K,
      isEnabled: true,
      scrollToStart: W,
      scrollToEnd: W,
      wrap: true
    }),
    J = R.map(e => {
      var t;
      return (0, r.jsx)(z, {
        className: E,
        role: e,
        canRemove: (null == (t = e.tags) ? true : t.guild_connections) === null ? n.id === U.id : B && x.r6(a, U.id, V, e),
        onRemove: () => v(e),
        ref: t => O(e.id, t),
        guildId: a.id,
        disableBorderColor: b
      }, e.id)
    });
  return null != S && 0 !== P ? t = (0, r.jsx)(q, Z(G({}, e), {
    numRolesHidden: P
  })) : B && (t = (0, r.jsx)(X, Z(G({}, e), {
    handleAddRole: I
  }))), (0, r.jsx)(u.bG, {
    navigator: Q,
    children: (0, r.jsx)(u.SJ, {
      children: e => {
        var {
          ref: n
        } = e, i = F(e, ["ref"]);
        return (0, r.jsxs)("div", Z(G({
          className: o()(j.root, h),
          "aria-label": k.intl.formatToPlainString(k.t.PCs0oo, {
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
let J = (0, Chunk112724.Z)(Q);

function $(e) {
  return (0, _.e7)([w.Z], () => {
    var t;
    return w.Z.getGuildVersion(null == (t = e.guild) ? true : t.id)
  }), false === e.wrap ? (0, r.jsx)(J, G({}, e)) : (0, r.jsx)(Q, G({}, e))
}