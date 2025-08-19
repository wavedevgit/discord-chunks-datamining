/** Chunk was on 12630 **/
/** chunk id: 412899, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  UB: () => F,
  ZP: () => Y
}), require("./388685.js"), require("./642613.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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

function Z(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
      return Object.getOwnPropertyDescriptor(t, A).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = t[e], e in A ? Object.defineProperty(A, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : A[e] = n
    })
  }
  return A
}

function S(A, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : (function(A, e) {
    var t = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(A);
      t.push.apply(t, n)
    }
    return t
  })(Object(e)).forEach(function(t) {
    Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
  }), A
}

function R(A, e) {
  if (null == A) return {};
  var t, n, r = function(A, e) {
    if (null == A) return {};
    var t, n, r = {},
      l = Object.keys(A);
    for (n = 0; n < l.length; n++) t = l[n], e.indexOf(t) >= 0 || (r[t] = A[t]);
    return r
  }(A, e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(A);
    for (n = 0; n < l.length; n++) t = l[n], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t])
  }
  return r
}
let G = () => Promise.resolve();

function U(A) {
  let {
    userRoleIds: e,
    position: t
  } = A, r = R(A, ["userRoleIds", "position"]), l = (0, p.Dt)();
  return (0, n.jsxs)(h.VqE, {
    className: i()(N.overflowRolesPopout, {
      [N.popoutBottom]: "bottom" === t,
      [N.popoutTop]: "top" === t
    }),
    "aria-labelledby": l,
    children: [(0, n.jsx)("div", {
      className: N.overflowRolesPopoutArrowWrapper,
      children: (0, n.jsx)("div", {
        className: N.overflowRolesPopoutArrow
      })
    }), (0, n.jsxs)(D.Z, {
      className: N.overflowRolesPopoutHeader,
      align: D.Z.Align.CENTER,
      children: [(0, n.jsx)(h.U65, {
        size: "xs",
        color: u.Z.unsafe_rawColors.PRIMARY_400.css,
        className: N.overflowRolesPopoutHeaderIcon
      }), (0, n.jsx)("div", {
        className: N.overflowRolesPopoutHeaderText,
        id: l,
        children: x.intl.format(x.t.PCs0oq, {
          numRoles: e.length
        })
      })]
    }), (0, n.jsx)(z, S(Z({}, r), {
      wrap: true,
      userRoleIds: e
    }))]
  })
}
let F = Chunk647438.forwardRef(function(A, e) {
  var l, s, a;
  let o, {
      canRemove: c,
      className: E,
      role: C,
      onRemove: D,
      guildId: p,
      disableBorderColor: H,
      onMouseDown: O
    } = A,
    Q = (0, g.JA)(C.id),
    {
      tabIndex: P
    } = Q,
    j = R(Q, ["tabIndex"]),
    V = (0, I.p9)({
      roleId: C.id,
      size: 16,
      guildId: p
    }),
    m = (0, v.e7)([B.Z], () => B.Z.roleStyle),
    T = (0, b._f)(p, C, C.colorStrings),
    y = (null == (l = C.tags) ? true : l.guild_connections) === null,
    L = r.useCallback(A => {
      (0, d.jW)(A, async () => {
        let {
          default: A
        } = await t.e("5396").then(t.bind(t, 731646));
        return e => (0, n.jsx)(A, S(Z({}, e), {
          id: C.id,
          label: x.intl.string(x.t.sMsaLi)
        }))
      })
    }, [C.id]),
    G = (0, h.dQu)(u.Z.unsafe_rawColors.PRIMARY_300).hsl(),
    U = null != (s = C.colorString) ? s : G,
    F = null != (a = (0, f.wK)(U, .6)) ? a : true,
    k = u.Z.unsafe_rawColors.WHITE_500.css,
    X = (0, f._i)(U);
  null != X && .3 > (0, f.Bd)(X) && (k = u.Z.unsafe_rawColors.PRIMARY_630.css), o = y ? (0, n.jsx)(w.Z, {
    className: N.roleFlowerStar,
    iconClassName: c ? N.roleVerifiedIcon : true,
    color: U,
    size: 14
  }) : "dot" === m ? (0, n.jsx)(h.FhE, {
    className: N.roleDot,
    color: U,
    colors: T,
    background: false,
    tooltip: false
  }) : (0, n.jsx)(h.xko, {
    color: U,
    colors: T
  });
  let z = r.useMemo(() => {
    var e;
    return Z({
      borderColor: H ? true : F
    }, null != (e = A.style) ? e : {})
  }, [F, H, A.style]);
  return (0, n.jsx)(h.tEY, {
    children: (0, n.jsxs)("div", S(Z({
      ref: e,
      className: i()(N.role, E),
      style: z,
      onContextMenu: L,
      onMouseDown: O,
      "aria-label": C.name,
      tabIndex: P
    }, j), {
      children: [(0, n.jsxs)(h.P3F, {
        className: i()(c && N.roleRemoveButtonCanRemove, N.roleRemoveButton),
        onClick: c ? D : true,
        tabIndex: c ? P : false,
        focusProps: {
          focusClassName: N.roleRemoveIconFocused
        },
        "aria-hidden": !c,
        "aria-label": x.intl.formatToPlainString(x.t.QrxwhY, {
          roleName: C.name
        }),
        children: [o, c ? (0, n.jsx)(h.Dio, {
          size: "md",
          color: k,
          className: N.roleRemoveIcon,
          "aria-hidden": true
        }) : null]
      }), null != V ? (0, n.jsx)(M.Z, S(Z({
        className: N.roleIcon
      }, V), {
        enableTooltip: false
      })) : null, (0, n.jsx)("div", {
        "aria-hidden": true,
        className: N.roleName,
        children: (0, n.jsx)(h.Text, {
          variant: "text-xs/medium",
          className: N.roleNameOverflow,
          children: C.name
        })
      })]
    }))
  })
});

function k(A) {
  let {
    user: e,
    numRolesHidden: t,
    roleClassName: l
  } = A, s = (0, g.JA)("overflow-more-roles-".concat(e.id)), a = r.useRef(null);
  return (0, n.jsx)(h.yRy, {
    targetElementRef: a,
    renderPopout: e => {
      let {
        position: t
      } = e;
      return (0, n.jsx)(U, S(Z({}, A), {
        position: null != t ? t : "top"
      }))
    },
    position: "top",
    align: "center",
    children: A => (0, n.jsx)(h.tEY, {
      children: (0, n.jsx)("button", S(Z(S(Z({
        ref: a
      }, A), {
        className: i()(N.overflowButton, l)
      }), s), {
        children: "+".concat(t)
      }))
    })
  })
}

function X(A) {
  let e = r.useRef(null),
    {
      guild: t,
      user: l,
      handleAddRole: s,
      roleClassName: a,
      addButtonClassName: o,
      addButtonIconClassName: c
    } = A,
    f = (0, g.JA)("overflow-add-roles-".concat(l.id)),
    u = (0, v.e7)([B.Z], () => B.Z.roleStyle),
    d = V.Z.getHighestRole(t),
    E = P.ZP.getMember(t.id, l.id),
    C = A => !(0, Q.fI)(A) && !A.managed && V.Z.isRoleHigher(t, d, A) && (null == E || false === E.roles.indexOf(A.id));
  return (0, n.jsx)(h.yRy, {
    targetElementRef: e,
    renderPopout: A => {
      let {
        closePopout: e
      } = A;
      return (0, n.jsx)(y.Z, {
        guild: t,
        roleStyle: u,
        roleFilter: C,
        onSelect: s,
        onClose: e
      })
    },
    position: "bottom",
    align: "center",
    children: A => (0, n.jsx)(h.tEY, {
      children: (0, n.jsx)("button", S(Z(S(Z({
        ref: e
      }, A), {
        className: i()(N.addButton, a, o),
        "aria-label": x.intl.string(x.t.e3Wly8),
        type: "button"
      }), f), {
        children: (0, n.jsx)(h.qJs, {
          size: "md",
          color: "currentColor",
          className: i()(N.addButtonIcon, c),
          "aria-hidden": true
        })
      }))
    })
  })
}

function z(A) {
  let e, {
      user: t,
      guild: l,
      userRoleIds: s,
      wrap: f = true,
      width: u,
      className: h,
      readOnly: d,
      roleClassName: C,
      disableBorderColor: B
    } = A,
    w = r.useRef({}),
    D = r.useCallback(A => {
      var e;
      let n = s.filter(e => e !== A.id);
      (null == (e = A.tags) ? true : e.guild_connections) === null ? E.Z.unassignGuildRoleConnection(l.id, A.id) : H.Z.updateMemberRoles(l.id, t.id, n, [], [A.id])
    }, [s, l.id, t.id]),
    M = r.useCallback(A => {
      let e = s;
      e.includes(A) || (e = [...e, A]), H.Z.updateMemberRoles(l.id, t.id, e, [A], [])
    }, [s, l.id, t.id]),
    [p, I] = r.useState(null),
    b = (0, v.Wu)([j.Z], () => j.Z.getManyRoles(l.id, s).sort(O.Z)),
    Q = r.useMemo(() => null != p ? b.slice(0, p) : b, [b, p]),
    P = s.length - Q.length;
  r.useLayoutEffect(() => {
    if (f) return;
    if ("number" != typeof u) throw Error("Unexpected null width");
    let A = 0,
      e = 0,
      t = u - 30 - 4;
    for (let n = 0; n < Q.length; n++) {
      let r = Q[n],
        l = w.current[r.id];
      if (null != l) {
        if ((e += l.offsetWidth + 4) > t) break;
        A++
      }
    }
    I(e => A < Q.length ? A : e)
  }, [f, u, Q]);
  let y = m.default.getCurrentUser();
  a()(null != y, "MemberRolesList: currentUser cannot be undefined");
  let U = !d && V.Z.can(L.Plq.MANAGE_ROLES, l),
    z = T.e9(l, y.id),
    K = r.useMemo(() => "roles-".concat((0, o.Z)()), []),
    Y = (0, c.ZP)({
      id: K,
      isEnabled: true,
      scrollToStart: G,
      scrollToEnd: G,
      wrap: true
    }),
    W = Q.map(A => {
      var e;
      return (0, n.jsx)(F, {
        className: C,
        role: A,
        canRemove: (null == (e = A.tags) ? true : e.guild_connections) === null ? t.id === y.id : U && T.r6(l, y.id, z, A),
        onRemove: () => D(A),
        ref: e => {
          var t;
          return t = A.id, void(null != e ? w.current[t] = e : delete w.current[t])
        },
        guildId: l.id,
        disableBorderColor: B
      }, A.id)
    });
  return null != p && 0 !== P ? e = (0, n.jsx)(k, S(Z({}, A), {
    numRolesHidden: P
  })) : U && (e = (0, n.jsx)(X, S(Z({}, A), {
    handleAddRole: M
  }))), (0, n.jsx)(g.bG, {
    navigator: Y,
    children: (0, n.jsx)(g.SJ, {
      children: A => {
        var {
          ref: t
        } = A, r = R(A, ["ref"]);
        return (0, n.jsxs)("div", S(Z({
          className: i()(N.root, h),
          "aria-label": x.intl.formatToPlainString(x.t.PCs0oq, {
            numRoles: s.length
          }),
          ref: t
        }, r), {
          children: [W, e]
        }))
      }
    })
  })
}
let K = (0, Chunk112724.Z)(z);

function Y(A) {
  return (0, v.e7)([V.Z], () => {
    var e;
    return V.Z.getGuildVersion(null == (e = A.guild) ? true : e.id)
  }), false === A.wrap ? (0, n.jsx)(K, Z({}, A)) : (0, n.jsx)(z, Z({}, A))
}