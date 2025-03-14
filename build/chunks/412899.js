/** Chunk was on 94289 **/
n.d(t, {
  UB: () => z,
  ZP: () => K
}), n(47120), n(230036), n(411104);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  i = n.n(a),
  s = n(512722),
  o = n.n(s),
  E = n(772848),
  c = n(91192),
  u = n(924826),
  _ = n(866442),
  d = n(442837),
  A = n(692547),
  T = n(481060),
  N = n(239091),
  I = n(749210),
  O = n(112724),
  g = n(607070),
  f = n(605436),
  R = n(134433),
  p = n(600164),
  S = n(91218),
  h = n(313201),
  U = n(518738),
  D = n(434404),
  L = n(271383),
  C = n(430824),
  m = n(496675),
  M = n(594174),
  v = n(700785),
  b = n(944613),
  P = n(981631),
  y = n(388032),
  x = n(520517);

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function G(e, t) {
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

function F(e, t) {
  if (null == e) return {};
  var n, r, l = function(e, t) {
    if (null == e) return {};
    var n, r, l = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
  }
  return l
}
let W = () => Promise.resolve();

function B(e) {
  let {
    userRoles: t,
    position: n
  } = e, l = F(e, ["userRoles", "position"]), a = (0, h.Dt)();
  return (0, r.jsxs)(T.VqE, {
    className: i()(x.overflowRolesPopout, {
      [x.popoutBottom]: "bottom" === n,
      [x.popoutTop]: "top" === n
    }),
    "aria-labelledby": a,
    children: [(0, r.jsx)("div", {
      className: x.overflowRolesPopoutArrowWrapper,
      children: (0, r.jsx)("div", {
        className: x.overflowRolesPopoutArrow
      })
    }), (0, r.jsxs)(p.Z, {
      className: x.overflowRolesPopoutHeader,
      align: p.Z.Align.CENTER,
      children: [(0, r.jsx)(T.U65, {
        size: "xs",
        color: A.Z.unsafe_rawColors.PRIMARY_400.css,
        className: x.overflowRolesPopoutHeaderIcon
      }), (0, r.jsx)("div", {
        className: x.overflowRolesPopoutHeaderText,
        id: a,
        children: y.NW.format(y.t.PCs0oq, {
          numRoles: t.length
        })
      })]
    }), (0, r.jsx)(V, G(j({}, l), {
      wrap: !0,
      userRoles: t
    }))]
  })
}
let z = l.forwardRef(function(e, t) {
  var a, s, o;
  let E;
  let {
    canRemove: u,
    className: I,
    role: O,
    onRemove: f,
    guildId: p,
    disableBorderColor: h,
    onMouseDown: D
  } = e, L = (0, c.JA)(O.id), {
    tabIndex: C
  } = L, m = F(L, ["tabIndex"]), M = (0, U.p9)({
    roleId: O.id,
    size: 16,
    guildId: p
  }), v = (0, d.e7)([g.Z], () => g.Z.roleStyle), b = (null === (a = O.tags) || void 0 === a ? void 0 : a.guild_connections) === null, P = l.useCallback(e => {
    (0, N.jW)(e, async () => {
      let {
        default: e
      } = await n.e("5396").then(n.bind(n, 731646));
      return t => (0, r.jsx)(e, G(j({}, t), {
        id: O.id,
        label: y.NW.string(y.t.sMsaLi)
      }))
    })
  }, [O.id]), W = (0, T.dQu)(A.Z.unsafe_rawColors.PRIMARY_300).hsl(), B = null !== (s = O.colorString) && void 0 !== s ? s : W, z = null !== (o = (0, _.wK)(B, .6)) && void 0 !== o ? o : void 0, w = A.Z.unsafe_rawColors.WHITE_500.css, k = (0, _._i)(B);
  null != k && .3 > (0, _.Bd)(k) && (w = A.Z.unsafe_rawColors.PRIMARY_630.css), E = b ? (0, r.jsx)(R.Z, {
    className: x.roleFlowerStar,
    iconClassName: u ? x.roleVerifiedIcon : void 0,
    color: B,
    size: 14
  }) : "dot" === v ? (0, r.jsx)(T.FhE, {
    className: x.roleDot,
    color: B,
    background: !1,
    tooltip: !1
  }) : (0, r.jsx)(T.xko, {
    color: B
  });
  let V = l.useMemo(() => {
    var t;
    return j({
      borderColor: h ? void 0 : z
    }, null !== (t = e.style) && void 0 !== t ? t : {})
  }, [z, h, e.style]);
  return (0, r.jsx)(T.tEY, {
    children: (0, r.jsxs)("div", G(j({
      ref: t,
      className: i()(x.role, I),
      style: V,
      onContextMenu: P,
      onMouseDown: D,
      "aria-label": O.name,
      tabIndex: C
    }, m), {
      children: [(0, r.jsxs)(T.P3F, {
        className: i()(u && x.roleRemoveButtonCanRemove, x.roleRemoveButton),
        onClick: u ? f : void 0,
        tabIndex: u ? C : -1,
        focusProps: {
          focusClassName: x.roleRemoveIconFocused
        },
        "aria-hidden": !u,
        "aria-label": y.NW.formatToPlainString(y.t.QrxwhY, {
          roleName: O.name
        }),
        children: [E, u ? (0, r.jsx)(T.Dio, {
          size: "md",
          color: w,
          className: x.roleRemoveIcon,
          "aria-hidden": !0
        }) : null]
      }), null != M ? (0, r.jsx)(S.Z, G(j({
        className: x.roleIcon
      }, M), {
        enableTooltip: !1
      })) : null, (0, r.jsx)("div", {
        "aria-hidden": !0,
        className: x.roleName,
        children: (0, r.jsx)(T.Text, {
          variant: "text-xs/medium",
          className: x.roleNameOverflow,
          children: O.name
        })
      })]
    }))
  })
});

function w(e) {
  let {
    user: t,
    numRolesHidden: n,
    roleClassName: l
  } = e, a = (0, c.JA)("overflow-more-roles-".concat(t.id));
  return (0, r.jsx)(T.yRy, {
    renderPopout: t => {
      let {
        position: n
      } = t;
      return (0, r.jsx)(B, G(j({}, e), {
        position: null != n ? n : "top"
      }))
    },
    position: "top",
    align: "center",
    children: e => (0, r.jsx)(T.tEY, {
      children: (0, r.jsx)("button", G(j(G(j({}, e), {
        className: i()(x.overflowButton, l)
      }), a), {
        children: "+".concat(n)
      }))
    })
  })
}

function k(e) {
  let {
    guild: t,
    user: n,
    handleAddRole: l,
    roleClassName: a,
    addButtonClassName: s,
    addButtonIconClassName: o
  } = e, E = (0, c.JA)("overflow-add-roles-".concat(n.id)), u = (0, d.e7)([g.Z], () => g.Z.roleStyle), _ = m.Z.getHighestRole(t), A = L.ZP.getMember(t.id, n.id), N = e => (0, f.Gy)(t.id, e.id) && !e.managed && m.Z.isRoleHigher(t, _, e) && (null == A || -1 === A.roles.indexOf(e.id));
  return (0, r.jsx)(T.yRy, {
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(b.Z, {
        guild: t,
        roleStyle: u,
        roleFilter: N,
        onSelect: l,
        onClose: n
      })
    },
    position: "bottom",
    align: "center",
    children: e => (0, r.jsx)(T.tEY, {
      children: (0, r.jsx)("button", G(j(G(j({}, e), {
        className: i()(x.addButton, a, s),
        "aria-label": y.NW.string(y.t.e3Wly8),
        type: "button"
      }), E), {
        children: (0, r.jsx)(T.qJs, {
          size: "md",
          color: "currentColor",
          className: i()(x.addButtonIcon, o),
          "aria-hidden": !0
        })
      }))
    })
  })
}

function V(e) {
  let t;
  let {
    user: n,
    guild: a,
    userRoles: s,
    wrap: _ = !0,
    width: A,
    className: T,
    readOnly: N,
    roleClassName: O,
    disableBorderColor: g
  } = e, f = l.useRef({}), R = l.useCallback(e => {
    var t;
    let r = s.filter(t => t !== e.id);
    (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? I.Z.unassignGuildRoleConnection(a.id, e.id) : D.Z.updateMemberRoles(a.id, n.id, r, [], [e.id])
  }, [s, a.id, n.id]), p = l.useCallback(e => {
    let t = s; - 1 === t.indexOf(e) && (t = t.concat([e])), D.Z.updateMemberRoles(a.id, n.id, t, [e], [])
  }, [s, a.id, n.id]), [S, h] = l.useState(null), U = (0, d.e7)([C.Z], () => C.Z.getRoles(a.id)), L = l.useMemo(() => {
    let e = Object.values(U).filter(e => s.includes(e.id)).sort((e, t) => {
      var n, r;
      let l = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
        a = (null === (r = t.tags) || void 0 === r ? void 0 : r.guild_connections) !== null;
      return l && !a ? 1 : !l && a ? -1 : 0
    });
    return null != S ? e.slice(0, S) : e
  }, [U, S, s]), b = s.length - L.length;
  l.useLayoutEffect(() => {
    if (_) return;
    if ("number" != typeof A) throw Error("Unexpected null width");
    let e = 0,
      t = 0,
      n = A - 30 - 4;
    for (let r = 0; r < L.length; r++) {
      let l = L[r],
        a = f.current[l.id];
      if (null != a) {
        if ((t += a.offsetWidth + 4) > n) break;
        e++
      }
    }
    h(t => e < L.length ? e : t)
  }, [_, A, L]);
  let B = M.default.getCurrentUser();
  o()(null != B, "MemberRolesList: currentUser cannot be undefined");
  let V = !N && m.Z.can(P.Plq.MANAGE_ROLES, a),
    H = v.e9(a, B.id),
    K = l.useMemo(() => "roles-".concat((0, E.Z)()), []),
    Z = (0, u.ZP)({
      id: K,
      isEnabled: !0,
      scrollToStart: W,
      scrollToEnd: W,
      wrap: !0
    }),
    q = L.map(e => {
      var t;
      return (0, r.jsx)(z, {
        className: O,
        role: e,
        canRemove: V && v.r6(a, B.id, H, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && n.id === B.id,
        onRemove: () => R(e),
        ref: t => {
          var n;
          return n = e.id, void(null != t ? f.current[n] = t : delete f.current[n])
        },
        guildId: a.id,
        disableBorderColor: g
      }, e.id)
    });
  return null != S && 0 !== b ? t = (0, r.jsx)(w, G(j({}, e), {
    numRolesHidden: b
  })) : V && (t = (0, r.jsx)(k, G(j({}, e), {
    handleAddRole: p
  }))), (0, r.jsx)(c.bG, {
    navigator: Z,
    children: (0, r.jsx)(c.SJ, {
      children: e => {
        var {
          ref: n
        } = e, l = F(e, ["ref"]);
        return (0, r.jsxs)("div", G(j({
          className: i()(x.root, T),
          "aria-label": y.NW.formatToPlainString(y.t.PCs0oq, {
            numRoles: s.length
          }),
          ref: n
        }, l), {
          children: [q, t]
        }))
      }
    })
  })
}
let H = (0, O.Z)(V);

function K(e) {
  return (0, d.e7)([m.Z], () => {
    var t;
    return m.Z.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
  }), !1 === e.wrap ? (0, r.jsx)(H, j({}, e)) : (0, r.jsx)(V, j({}, e))
}