/** Chunk was on 12097 **/
/** chunk id: 412899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  UB: () => B,
  ZP: () => q
}), require("./388685.js"), require("./642613.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
  Chunk91218 = require("./91218.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk518738 = require("./518738.js"),
  Chunk434404 = require("./434404.js"),
  Chunk884902 = require("./884902.js"),
  Chunk635042 = require("./635042.js"),
  Chunk345162 = require("./345162.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk944613 = require("./944613.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk78248 = require("./78248.js");

function G(e) {
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

function k(e, t) {
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
      s = Object.keys(e);
    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
  }
  return l
}
let z = () => Promise.resolve();

function Z(e) {
  let {
    userRoleIds: t,
    position: n
  } = e, l = F(e, ["userRoleIds", "position"]), s = (0, p.Dt)();
  return (0, r.jsxs)(T.VqE, {
    className: i()(w.overflowRolesPopout, {
      [w.popoutBottom]: "bottom" === n,
      [w.popoutTop]: "top" === n
    }),
    "aria-labelledby": s,
    children: [(0, r.jsx)("div", {
      className: w.overflowRolesPopoutArrowWrapper,
      children: (0, r.jsx)("div", {
        className: w.overflowRolesPopoutArrow
      })
    }), (0, r.jsxs)(h.Z, {
      className: w.overflowRolesPopoutHeader,
      align: h.Z.Align.CENTER,
      children: [(0, r.jsx)(T.U65, {
        size: "xs",
        color: A.Z.unsafe_rawColors.PRIMARY_400.css,
        className: w.overflowRolesPopoutHeaderIcon
      }), (0, r.jsx)("div", {
        className: w.overflowRolesPopoutHeaderText,
        id: s,
        children: y.intl.format(y.t.PCs0oq, {
          numRoles: t.length
        })
      })]
    }), (0, r.jsx)(K, k(G({}, l), {
      wrap: true,
      userRoleIds: t
    }))]
  })
}
let B = Chunk73800.forwardRef(function(e, t) {
  var s, a, o;
  let u, {
      canRemove: E,
      className: I,
      role: g,
      onRemove: h,
      guildId: p,
      disableBorderColor: S,
      onMouseDown: v
    } = e,
    D = (0, c.JA)(g.id),
    {
      tabIndex: b
    } = D,
    L = F(D, ["tabIndex"]),
    x = (0, R.p9)({
      roleId: g.id,
      size: 16,
      guildId: p
    }),
    U = (0, _.e7)([f.Z], () => f.Z.roleStyle),
    M = (0, C._f)(p, g, g.colorStrings),
    P = (null == (s = g.tags) ? true : s.guild_connections) === null,
    j = l.useCallback(e => {
      (0, m.jW)(e, async () => {
        let {
          default: e
        } = await n.e("5396").then(n.bind(n, 731646));
        return t => (0, r.jsx)(e, k(G({}, t), {
          id: g.id,
          label: y.intl.string(y.t.sMsaLi)
        }))
      })
    }, [g.id]),
    z = (0, T.dQu)(A.Z.unsafe_rawColors.PRIMARY_300).hsl(),
    Z = null != (a = g.colorString) ? a : z,
    B = null != (o = (0, d.wK)(Z, .6)) ? o : true,
    V = A.Z.unsafe_rawColors.WHITE_500.css,
    H = (0, d._i)(Z);
  null != H && .3 > (0, d.Bd)(H) && (V = A.Z.unsafe_rawColors.PRIMARY_630.css), u = P ? (0, r.jsx)(N.Z, {
    className: w.roleFlowerStar,
    iconClassName: E ? w.roleVerifiedIcon : true,
    color: Z,
    size: 14
  }) : "dot" === U ? (0, r.jsx)(T.FhE, {
    className: w.roleDot,
    color: Z,
    colors: M,
    background: false,
    tooltip: false
  }) : (0, r.jsx)(T.xko, {
    color: Z,
    colors: M
  });
  let K = l.useMemo(() => {
    var t;
    return G({
      borderColor: S ? true : B
    }, null != (t = e.style) ? t : {})
  }, [B, S, e.style]);
  return (0, r.jsx)(T.tEY, {
    children: (0, r.jsxs)("div", k(G({
      ref: t,
      className: i()(w.role, I),
      style: K,
      onContextMenu: j,
      onMouseDown: v,
      "aria-label": g.name,
      tabIndex: b
    }, L), {
      children: [(0, r.jsxs)(T.P3F, {
        className: i()(E && w.roleRemoveButtonCanRemove, w.roleRemoveButton),
        onClick: E ? h : true,
        tabIndex: E ? b : false,
        focusProps: {
          focusClassName: w.roleRemoveIconFocused
        },
        "aria-hidden": !E,
        "aria-label": y.intl.formatToPlainString(y.t.QrxwhY, {
          roleName: g.name
        }),
        children: [u, E ? (0, r.jsx)(T.Dio, {
          size: "md",
          color: V,
          className: w.roleRemoveIcon,
          "aria-hidden": true
        }) : null]
      }), null != x ? (0, r.jsx)(O.Z, k(G({
        className: w.roleIcon
      }, x), {
        enableTooltip: false
      })) : null, (0, r.jsx)("div", {
        "aria-hidden": true,
        className: w.roleName,
        children: (0, r.jsx)(T.Text, {
          variant: "text-xs/medium",
          className: w.roleNameOverflow,
          children: g.name
        })
      })]
    }))
  })
});

function V(e) {
  let {
    user: t,
    numRolesHidden: n,
    roleClassName: s
  } = e, a = (0, c.JA)("overflow-more-roles-".concat(t.id)), o = l.useRef(null);
  return (0, r.jsx)(T.yRy, {
    targetElementRef: o,
    renderPopout: t => {
      let {
        position: n
      } = t;
      return (0, r.jsx)(Z, k(G({}, e), {
        position: null != n ? n : "top"
      }))
    },
    position: "top",
    align: "center",
    children: e => (0, r.jsx)(T.tEY, {
      children: (0, r.jsx)("button", k(G(k(G({
        ref: o
      }, e), {
        className: i()(w.overflowButton, s)
      }), a), {
        children: "+".concat(n)
      }))
    })
  })
}

function H(e) {
  let t = l.useRef(null),
    {
      guild: n,
      user: s,
      handleAddRole: a,
      roleClassName: o,
      addButtonClassName: u,
      addButtonIconClassName: E
    } = e,
    d = (0, c.JA)("overflow-add-roles-".concat(s.id)),
    A = (0, _.e7)([f.Z], () => f.Z.roleStyle),
    m = x.Z.getHighestRole(n),
    I = b.ZP.getMember(n.id, s.id),
    g = e => !(0, D.fI)(e) && !e.managed && x.Z.isRoleHigher(n, m, e) && (null == I || false === I.roles.indexOf(e.id));
  return (0, r.jsx)(T.yRy, {
    targetElementRef: t,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(P.Z, {
        guild: n,
        roleStyle: A,
        roleFilter: g,
        onSelect: a,
        onClose: t
      })
    },
    position: "bottom",
    align: "center",
    children: e => (0, r.jsx)(T.tEY, {
      children: (0, r.jsx)("button", k(G(k(G({
        ref: t
      }, e), {
        className: i()(w.addButton, o, u),
        "aria-label": y.intl.string(y.t.e3Wly8),
        type: "button"
      }), d), {
        children: (0, r.jsx)(T.qJs, {
          size: "md",
          color: "currentColor",
          className: i()(w.addButtonIcon, E),
          "aria-hidden": true
        })
      }))
    })
  })
}

function K(e) {
  let t, {
      user: n,
      guild: s,
      userRoleIds: a,
      wrap: d = true,
      width: A,
      className: T,
      readOnly: m,
      roleClassName: g,
      disableBorderColor: f
    } = e,
    N = l.useRef({}),
    h = l.useCallback(e => {
      var t;
      let r = a.filter(t => t !== e.id);
      (null == (t = e.tags) ? true : t.guild_connections) === null ? I.Z.unassignGuildRoleConnection(s.id, e.id) : S.Z.updateMemberRoles(s.id, n.id, r, [], [e.id])
    }, [a, s.id, n.id]),
    O = l.useCallback(e => {
      let t = a;
      t.includes(e) || (t = [...t, e]), S.Z.updateMemberRoles(s.id, n.id, t, [e], [])
    }, [a, s.id, n.id]),
    [p, R] = l.useState(null),
    C = (0, _.Wu)([L.Z], () => L.Z.getManyRoles(s.id, a).sort(v.Z)),
    D = l.useMemo(() => null != p ? C.slice(0, p) : C, [C, p]),
    b = a.length - D.length;
  l.useLayoutEffect(() => {
    if (d) return;
    if ("number" != typeof A) throw Error("Unexpected null width");
    let e = 0,
      t = 0,
      n = A - 30 - 4;
    for (let r = 0; r < D.length; r++) {
      let l = D[r],
        s = N.current[l.id];
      if (null != s) {
        if ((t += s.offsetWidth + 4) > n) break;
        e++
      }
    }
    R(t => e < D.length ? e : t)
  }, [d, A, D]);
  let P = U.default.getCurrentUser();
  o()(null != P, "MemberRolesList: currentUser cannot be undefined");
  let Z = !m && x.Z.can(j.Plq.MANAGE_ROLES, s),
    K = M.e9(s, P.id),
    W = l.useMemo(() => "roles-".concat((0, u.Z)()), []),
    q = (0, E.ZP)({
      id: W,
      isEnabled: true,
      scrollToStart: z,
      scrollToEnd: z,
      wrap: true
    }),
    Y = D.map(e => {
      var t;
      return (0, r.jsx)(B, {
        className: g,
        role: e,
        canRemove: (null == (t = e.tags) ? true : t.guild_connections) === null ? n.id === P.id : Z && M.r6(s, P.id, K, e),
        onRemove: () => h(e),
        ref: t => {
          var n;
          return n = e.id, void(null != t ? N.current[n] = t : delete N.current[n])
        },
        guildId: s.id,
        disableBorderColor: f
      }, e.id)
    });
  return null != p && 0 !== b ? t = (0, r.jsx)(V, k(G({}, e), {
    numRolesHidden: b
  })) : Z && (t = (0, r.jsx)(H, k(G({}, e), {
    handleAddRole: O
  }))), (0, r.jsx)(c.bG, {
    navigator: q,
    children: (0, r.jsx)(c.SJ, {
      children: e => {
        var {
          ref: n
        } = e, l = F(e, ["ref"]);
        return (0, r.jsxs)("div", k(G({
          className: i()(w.root, T),
          "aria-label": y.intl.formatToPlainString(y.t.PCs0oq, {
            numRoles: a.length
          }),
          ref: n
        }, l), {
          children: [Y, t]
        }))
      }
    })
  })
}
let W = (0, Chunk112724.Z)(K);

function q(e) {
  return (0, _.e7)([x.Z], () => {
    var t;
    return x.Z.getGuildVersion(null == (t = e.guild) ? true : t.id)
  }), false === e.wrap ? (0, r.jsx)(W, G({}, e)) : (0, r.jsx)(K, G({}, e))
}