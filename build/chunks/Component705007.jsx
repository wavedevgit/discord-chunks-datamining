/** Chunk was on web.js **/
/** chunk id: 705007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => J,
  n: () => W
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk924826 = require("./924826.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk749210 = require("./749210.js"),
  Chunk607070 = require("./607070.js"),
  Chunk313201 = require("./313201.js"),
  Chunk518738 = require("./518738.js"),
  Chunk434404 = require("./434404.js"),
  Chunk884902 = require("./884902.js"),
  Chunk48950 = require("./48950.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk345162 = require("./345162.js"),
  Chunk271383 = require("./271383.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk608798 = require("./608798.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk129001 = require("./129001.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
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

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e, t) {
  if (null == e) return {};
  var n, r, i = k(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function k(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let U = Chunk692547.Z.unsafe_rawColors.PRIMARY_300;

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
  } = e, h = (0, E.p9)({
    roleId: i.id,
    size: 12,
    guildId: a
  }), g = (0, u.e7)([m.Z], () => m.Z.roleStyle), b = (0, y._f)(a, i, i.colorStrings), v = (null == (t = i.tags) ? true : t.guild_connections) === null, S = (0, p.dQu)(U).hex(), I = null != (n = i.colorString) ? n : S, T = () => "dot" === g ? (0, r.jsx)(p.FhE, {
    className: R.roleDot,
    color: I,
    background: false,
    colors: b,
    tooltip: false
  }) : (0, r.jsx)(p.xko, {
    color: I,
    colors: b
  });
  return (0, r.jsxs)("div", {
    ref: l,
    className: o()(R.role, d),
    style: _,
    children: [T(), v && (0, r.jsx)(p.xPt, {
      className: R.connectionRoleIcon,
      size: "custom",
      width: 12,
      height: 12,
      color: "currentColor"
    }), (0, r.jsx)(f.u, {
      text: i.name,
      overflowOnly: true,
      ariaHidden: true,
      children: (0, r.jsx)(p.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        className: R.roleName,
        id: c,
        children: i.name
      })
    }), null != h ? (0, r.jsx)(O.Z, j(x({
      className: R.roleIcon
    }, h), {
      enableTooltip: false
    })) : null, s]
  })
}

function Z(e) {
  var {
    role: t,
    canRemove: n,
    onRemoveRole: a,
    onContextMenu: o
  } = e, s = M(e, ["role", "canRemove", "onRemoveRole", "onContextMenu"]);
  let c = (0, l.JA)(t.id),
    {
      tabIndex: u
    } = c,
    d = M(c, ["tabIndex"]),
    _ = (0, g.Dt)(),
    h = i.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), null == a || a(t)
    }, [a, t]),
    m = n ? (0, r.jsx)(f.u, {
      text: w.intl.string(w.t["T+3Adg"]),
      spacing: 4,
      ariaHidden: true,
      children: (0, r.jsx)(p.P3F, {
        "aria-label": w.intl.formatToPlainString(w.t.QrxwhY, {
          roleName: t.name
        }),
        onClick: h,
        className: R.removeButton,
        tabIndex: u,
        children: (0, r.jsx)(p.Dio, {
          size: "xxs",
          color: "currentColor"
        })
      })
    }) : true;
  return (0, r.jsx)(p.tEY, {
    children: (0, r.jsx)("div", j(x({}, d), {
      tabIndex: u,
      onContextMenu: o,
      className: R.roleTag,
      "aria-labelledby": _,
      children: (0, r.jsx)(G, x({
        role: t,
        className: n ? R.hasRemoveButton : true,
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
  } = e, a = i.useMemo(() => "roles-".concat((0, s.Z)()), []), o = (0, c.ZP)({
    id: a,
    isEnabled: true,
    scrollToStart: P.Cyb,
    scrollToEnd: P.Cyb,
    wrap: true
  }), u = w.intl.formatToPlainString(w.t.PCs0oo, {
    numRoles: t
  });
  return (0, r.jsx)(l.bG, {
    navigator: o,
    children: (0, r.jsx)(l.SJ, {
      children: e => {
        var {
          ref: t
        } = e, i = M(e, ["ref"]);
        return (0, r.jsx)("div", j(x({}, i), {
          ref: t,
          "aria-label": u,
          className: R.listContentsInteractive,
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
  } = e, d = (0, u.e7)([C.default], () => C.default.getCurrentUser()), _ = null != d ? A.e9(a, d.id) : null, h = (0, u.e7)([I.ZP], () => I.ZP.getMember(a.id, n)), g = null != (t = null == h ? true : h.roles) ? t : [], E = (0, u.e7)([m.Z], () => m.Z.roleStyle), y = i.useRef(null), O = null != c ? c : y, v = i.useCallback(e => {
    var t;
    null == l || l();
    let r = I.ZP.getMember(a.id, n),
      i = null != (t = null == r ? true : r.roles) ? t : [];
    i.includes(e) || (i = [...i, e]), b.Z.updateMemberRoles(a.id, n, i, [e], [])
  }, [a.id, n, l]), P = e => !(0, S.fI)(e) && !e.managed && T.Z.isRoleHigher(a, _, e) && false === g.indexOf(e.id);
  return (0, r.jsx)(p.yRy, {
    targetElementRef: O,
    position: "bottom",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(N.Z, {
        guild: a,
        roleStyle: E,
        roleFilter: P,
        onSelect: v,
        onClose: t
      })
    },
    children: e => (0, r.jsx)(f.u, {
      text: w.intl.string(w.t.e3Wlyw),
      shouldShow: !s,
      ariaHidden: true,
      children: (0, r.jsxs)(p.P3F, j(x({
        innerRef: O,
        "aria-label": w.intl.string(w.t.e3Wlyw),
        className: o()(R.addButton, {
          [R.showLabel]: s
        })
      }, e), {
        children: [(0, r.jsx)(p.qJs, {
          size: "sm",
          color: "currentColor"
        }), s && (0, r.jsx)(p.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: w.intl.string(w.t.e3Wlyw)
        })]
      }))
    })
  })
}

function V(e) {
  let {
    userId: t,
    guild: n,
    roles: r,
    allowEditing: a,
    readOnly: o
  } = e, s = (0, u.e7)([C.default], () => C.default.getCurrentUser()), l = v.Sb.useSetting(), [c] = (0, u.Wu)([T.Z], () => [T.Z.can(P.Plq.MANAGE_ROLES, n), T.Z.getGuildVersion(n.id)]), d = null != s ? A.e9(n, s.id) : null, f = i.useMemo(() => {
    let e = new Set;
    return o || !a || r.forEach(r => {
      var i;
      ((null == (i = r.tags) ? true : i.guild_connections) === null ? t === (null == s ? true : s.id) : c && A.r6(n, null == s ? true : s.id, d, r)) && e.add(r.id)
    }), e
  }, [o, a, r, t, null == s ? true : s.id, c, n, d]), p = !o && l, _ = !o && a && c;
  return {
    canAddRoles: _,
    canRemoveAnyRoles: f.size > 0,
    isRoleRemovable: i.useCallback(e => f.has(e), [f]),
    hasDeveloperContextMenu: p
  }
}

function H(e, t, n) {
  return i.useCallback(r => {
    var i, a;
    null == n || n();
    let o = I.ZP.getMember(t, e),
      s = (null != (a = null == o ? true : o.roles) ? a : []).filter(e => e !== r.id);
    (null == (i = r.tags) ? true : i.guild_connections) === null ? h.Z.unassignGuildRoleConnection(t, r.id) : b.Z.updateMemberRoles(t, e, s, [], [r.id])
  }, [n, t, e])
}

function Y() {
  return i.useCallback((e, t) => {
    (0, _.jW)(e, async () => {
      let {
        default: e
      } = await n.e("5396").then(n.bind(n, 731646));
      return n => (0, r.jsx)(e, j(x({}, n), {
        id: t,
        label: w.intl.string(w.t.sMsaLg)
      }))
    })
  }, [])
}

function W(e) {
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
  } = V({
    userId: t,
    guild: n,
    roles: i,
    allowEditing: u,
    readOnly: c
  }), h = d || f || p, m = H(t, n.id, s), g = Y(), E = () => (0, r.jsx)(B, {
    userId: t,
    guild: n,
    showLabel: 0 === i.length,
    onAddRole: l
  });
  return 0 === i.length ? d ? (0, r.jsx)("div", {
    className: o()(R.roleListContainer, a),
    children: E()
  }) : null : (0, r.jsx)("div", {
    className: o()(R.roleListContainer, a),
    children: h ? (0, r.jsxs)(F, {
      roleCount: i.length,
      children: [i.map(e => (0, r.jsx)(Z, {
        role: e,
        guildId: n.id,
        canRemove: _(e.id),
        onRemoveRole: f ? m : true,
        onContextMenu: p ? t => g(t, e.id) : true
      }, e.id)), d ? E() : null]
    }) : (0, r.jsx)("ul", {
      className: R.listContentsStatic,
      "aria-label": w.intl.string(w.t["LPJmL/"]),
      children: i.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(G, {
          role: e,
          guildId: n.id
        })
      }, e.id))
    })
  })
}

function K(e) {
  let {
    isExpanded: t,
    overflowCount: n,
    onClick: i,
    buttonRef: a
  } = e, s = t ? w.intl.string(w.t.XnXtCt) : w.intl.string(w.t.DY6n4q), l = t ? w.intl.string(w.t.XnXtCt) : w.intl.formatToPlainString(w.t.zr0Y5R, {
    numberOfItems: n
  });
  return (0, r.jsx)(f.u, {
    text: s,
    ariaHidden: true,
    children: (0, r.jsx)(p.P3F, {
      innerRef: a,
      "aria-label": l,
      onClick: i,
      className: o()(R.pillButton, {
        [R.expandButton]: !t
      }),
      children: t ? (0, r.jsx)(p.V7D, {
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
let z = 4,
  q = 268,
  Q = 2,
  X = e => {
    if (null == e) return 0;
    let {
      width: t
    } = e.getBoundingClientRect();
    return t > 0 ? t + z : 0
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
  } = V({
    userId: t,
    guild: n,
    roles: a,
    allowEditing: f,
    readOnly: p
  }), E = _ || h || m, b = H(t, n.id, c), y = Y(), O = i.useRef({}), v = (e, t) => {
    null != t ? O.current[e] = t : delete O.current[e]
  }, [S, I] = i.useState(a), [T, C] = i.useState(q), [A, N] = i.useState(false), P = i.useRef(null), D = i.useRef(null), x = i.useRef(0);
  i.useLayoutEffect(() => {
    x.current = 0
  }, [a]), i.useLayoutEffect(() => {
    if (A) return;
    let e = X(P.current),
      t = X(D.current),
      n = [],
      r = q - e - t;
    for (let e = 0; e < Q; e++) {
      let t = e === Q - 1 ? r : q;
      for (let e = 0, r = n.length; r < a.length; r++) {
        let i = a[r],
          o = O.current[i.id];
        if (null == o) {
          0 === x.current && n.push(i);
          continue
        }
        let s = Math.min(o.getBoundingClientRect().width, t);
        if (e + s > t) break;
        e += s + z, n.push(i)
      }
    }
    I(n.length === S.length ? S : n), C(r), x.current++
  }, [a, S, A]);
  let L = A ? a : S,
    j = () => {
      A ? (null == d || d(), N(false)) : (null == u || u(), N(true))
    },
    M = () => S.length < a.length ? (0, r.jsx)(K, {
      isExpanded: A,
      overflowCount: a.length - S.length,
      onClick: j,
      buttonRef: P
    }) : null,
    k = () => (0, r.jsx)(B, {
      buttonRef: D,
      userId: t,
      guild: n,
      showLabel: 0 === a.length,
      onAddRole: l
    });
  return 0 === a.length ? _ ? (0, r.jsx)("div", {
    className: o()(R.roleListContainer, s),
    children: k()
  }) : null : (0, r.jsx)("div", {
    className: o()(R.roleListContainer, s),
    children: E ? (0, r.jsxs)(F, {
      roleCount: a.length,
      children: [L.map((e, t) => (0, r.jsx)(Z, {
        role: e,
        guildId: n.id,
        canRemove: g(e.id),
        onRemoveRole: h ? b : true,
        itemRef: t => v(e.id, t),
        onContextMenu: m ? t => y(t, e.id) : true,
        style: {
          maxWidth: A || t !== S.length - 1 ? q : T
        }
      }, e.id)), M(), _ ? k() : null]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("ul", {
        className: R.listContentsStatic,
        "aria-label": w.intl.string(w.t["LPJmL/"]),
        children: L.map((e, t) => (0, r.jsx)("li", {
          children: (0, r.jsx)(G, {
            itemRef: t => v(e.id, t),
            role: e,
            guildId: n.id,
            style: {
              maxWidth: A || t !== S.length - 1 ? q : T
            }
          })
        }, e.id))
      }), M()]
    })
  })
}