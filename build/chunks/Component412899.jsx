/** Chunk was on 10576 **/
/** chunk id: 412899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  UB: () => B,
  ZP: () => q
}), require("./388685.js"), require("./642613.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk85703 = require("./85703.js");

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
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
  }
  return l
}
let Z = () => Promise.resolve();

function z(e) {
  let {
    userRoleIds: t,
    position: n
  } = e, l = F(e, ["userRoleIds", "position"]), i = (0, p.Dt)();
  return (0, r.jsxs)(m.VqE, {
    className: a()(w.overflowRolesPopout, {
      [w.popoutBottom]: "bottom" === n,
      [w.popoutTop]: "top" === n
    }),
    "aria-labelledby": i,
    children: [(0, r.jsx)("div", {
      className: w.overflowRolesPopoutArrowWrapper,
      children: (0, r.jsx)("div", {
        className: w.overflowRolesPopoutArrow
      })
    }), (0, r.jsxs)(N.Z, {
      className: w.overflowRolesPopoutHeader,
      align: N.Z.Align.CENTER,
      children: [(0, r.jsx)(m.U65, {
        size: "xs",
        color: A.Z.unsafe_rawColors.PRIMARY_400.css,
        className: w.overflowRolesPopoutHeaderIcon
      }), (0, r.jsx)("div", {
        className: w.overflowRolesPopoutHeaderText,
        id: i,
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
let B = Chunk647438.forwardRef(function(e, t) {
  var i, s, o;
  let u, {
      canRemove: d,
      className: I,
      role: g,
      onRemove: N,
      guildId: p,
      disableBorderColor: S,
      onMouseDown: D
    } = e,
    L = (0, c.JA)(g.id),
    {
      tabIndex: b
    } = L,
    U = F(L, ["tabIndex"]),
    v = (0, R.p9)({
      roleId: g.id,
      size: 16,
      guildId: p
    }),
    M = (0, _.e7)([h.Z], () => h.Z.roleStyle),
    x = (0, C._f)(p, g, g.colorStrings),
    P = (null == (i = g.tags) ? true : i.guild_connections) === null,
    j = l.useCallback(e => {
      (0, T.jW)(e, async () => {
        let {
          default: e
        } = await n.e("5396").then(n.bind(n, 731646));
        return t => (0, r.jsx)(e, k(G({}, t), {
          id: g.id,
          label: y.intl.string(y.t.sMsaLi)
        }))
      })
    }, [g.id]),
    Z = (0, m.dQu)(A.Z.unsafe_rawColors.PRIMARY_300).hsl(),
    z = null != (s = g.colorString) ? s : Z,
    B = null != (o = (0, E.wK)(z, .6)) ? o : true,
    V = A.Z.unsafe_rawColors.WHITE_500.css,
    H = (0, E._i)(z);
  null != H && .3 > (0, E.Bd)(H) && (V = A.Z.unsafe_rawColors.PRIMARY_630.css), u = P ? (0, r.jsx)(f.Z, {
    className: w.roleFlowerStar,
    iconClassName: d ? w.roleVerifiedIcon : true,
    color: z,
    size: 14
  }) : "dot" === M ? (0, r.jsx)(m.FhE, {
    className: w.roleDot,
    color: z,
    colors: x,
    background: false,
    tooltip: false
  }) : (0, r.jsx)(m.xko, {
    color: z,
    colors: x
  });
  let K = l.useMemo(() => {
    var t;
    return G({
      borderColor: S ? true : B
    }, null != (t = e.style) ? t : {})
  }, [B, S, e.style]);
  return (0, r.jsx)(m.tEY, {
    children: (0, r.jsxs)("div", k(G({
      ref: t,
      className: a()(w.role, I),
      style: K,
      onContextMenu: j,
      onMouseDown: D,
      "aria-label": g.name,
      tabIndex: b
    }, U), {
      children: [(0, r.jsxs)(m.P3F, {
        className: a()(d && w.roleRemoveButtonCanRemove, w.roleRemoveButton),
        onClick: d ? N : true,
        tabIndex: d ? b : false,
        focusProps: {
          focusClassName: w.roleRemoveIconFocused
        },
        "aria-hidden": !d,
        "aria-label": y.intl.formatToPlainString(y.t.QrxwhY, {
          roleName: g.name
        }),
        children: [u, d ? (0, r.jsx)(m.Dio, {
          size: "md",
          color: V,
          className: w.roleRemoveIcon,
          "aria-hidden": true
        }) : null]
      }), null != v ? (0, r.jsx)(O.Z, k(G({
        className: w.roleIcon
      }, v), {
        enableTooltip: false
      })) : null, (0, r.jsx)("div", {
        "aria-hidden": true,
        className: w.roleName,
        children: (0, r.jsx)(m.Text, {
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
    roleClassName: i
  } = e, s = (0, c.JA)("overflow-more-roles-".concat(t.id)), o = l.useRef(null);
  return (0, r.jsx)(m.yRy, {
    targetElementRef: o,
    renderPopout: t => {
      let {
        position: n
      } = t;
      return (0, r.jsx)(z, k(G({}, e), {
        position: null != n ? n : "top"
      }))
    },
    position: "top",
    align: "center",
    children: e => (0, r.jsx)(m.tEY, {
      children: (0, r.jsx)("button", k(G(k(G({
        ref: o
      }, e), {
        className: a()(w.overflowButton, i)
      }), s), {
        children: "+".concat(n)
      }))
    })
  })
}

function H(e) {
  let t = l.useRef(null),
    {
      guild: n,
      user: i,
      handleAddRole: s,
      roleClassName: o,
      addButtonClassName: u,
      addButtonIconClassName: d
    } = e,
    E = (0, c.JA)("overflow-add-roles-".concat(i.id)),
    A = (0, _.e7)([h.Z], () => h.Z.roleStyle),
    T = v.Z.getHighestRole(n),
    I = b.ZP.getMember(n.id, i.id),
    g = e => !(0, L.fI)(e) && !e.managed && v.Z.isRoleHigher(n, T, e) && (null == I || false === I.roles.indexOf(e.id));
  return (0, r.jsx)(m.yRy, {
    targetElementRef: t,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(P.Z, {
        guild: n,
        roleStyle: A,
        roleFilter: g,
        onSelect: s,
        onClose: t
      })
    },
    position: "bottom",
    align: "center",
    children: e => (0, r.jsx)(m.tEY, {
      children: (0, r.jsx)("button", k(G(k(G({
        ref: t
      }, e), {
        className: a()(w.addButton, o, u),
        "aria-label": y.intl.string(y.t.e3Wly8),
        type: "button"
      }), E), {
        children: (0, r.jsx)(m.qJs, {
          size: "md",
          color: "currentColor",
          className: a()(w.addButtonIcon, d),
          "aria-hidden": true
        })
      }))
    })
  })
}

function K(e) {
  let t, {
      user: n,
      guild: i,
      userRoleIds: s,
      wrap: E = true,
      width: A,
      className: m,
      readOnly: T,
      roleClassName: g,
      disableBorderColor: h
    } = e,
    f = l.useRef({}),
    N = l.useCallback(e => {
      var t;
      let r = s.filter(t => t !== e.id);
      (null == (t = e.tags) ? true : t.guild_connections) === null ? I.Z.unassignGuildRoleConnection(i.id, e.id) : S.Z.updateMemberRoles(i.id, n.id, r, [], [e.id])
    }, [s, i.id, n.id]),
    O = l.useCallback(e => {
      let t = s;
      t.includes(e) || (t = [...t, e]), S.Z.updateMemberRoles(i.id, n.id, t, [e], [])
    }, [s, i.id, n.id]),
    [p, R] = l.useState(null),
    C = (0, _.Wu)([U.Z], () => U.Z.getManyRoles(i.id, s).sort(D.Z)),
    L = l.useMemo(() => null != p ? C.slice(0, p) : C, [C, p]),
    b = s.length - L.length;
  l.useLayoutEffect(() => {
    if (E) return;
    if ("number" != typeof A) throw Error("Unexpected null width");
    let e = 0,
      t = 0,
      n = A - 30 - 4;
    for (let r = 0; r < L.length; r++) {
      let l = L[r],
        i = f.current[l.id];
      if (null != i) {
        if ((t += i.offsetWidth + 4) > n) break;
        e++
      }
    }
    R(t => e < L.length ? e : t)
  }, [E, A, L]);
  let P = M.default.getCurrentUser();
  o()(null != P, "MemberRolesList: currentUser cannot be undefined");
  let z = !T && v.Z.can(j.Plq.MANAGE_ROLES, i),
    K = x.e9(i, P.id),
    W = l.useMemo(() => "roles-".concat((0, u.Z)()), []),
    q = (0, d.ZP)({
      id: W,
      isEnabled: true,
      scrollToStart: Z,
      scrollToEnd: Z,
      wrap: true
    }),
    Y = L.map(e => {
      var t;
      return (0, r.jsx)(B, {
        className: g,
        role: e,
        canRemove: (null == (t = e.tags) ? true : t.guild_connections) === null ? n.id === P.id : z && x.r6(i, P.id, K, e),
        onRemove: () => N(e),
        ref: t => {
          var n;
          return n = e.id, void(null != t ? f.current[n] = t : delete f.current[n])
        },
        guildId: i.id,
        disableBorderColor: h
      }, e.id)
    });
  return null != p && 0 !== b ? t = (0, r.jsx)(V, k(G({}, e), {
    numRolesHidden: b
  })) : z && (t = (0, r.jsx)(H, k(G({}, e), {
    handleAddRole: O
  }))), (0, r.jsx)(c.bG, {
    navigator: q,
    children: (0, r.jsx)(c.SJ, {
      children: e => {
        var {
          ref: n
        } = e, l = F(e, ["ref"]);
        return (0, r.jsxs)("div", k(G({
          className: a()(w.root, m),
          "aria-label": y.intl.formatToPlainString(y.t.PCs0oq, {
            numRoles: s.length
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
  return (0, _.e7)([v.Z], () => {
    var t;
    return v.Z.getGuildVersion(null == (t = e.guild) ? true : t.id)
  }), false === e.wrap ? (0, r.jsx)(W, G({}, e)) : (0, r.jsx)(K, G({}, e))
}