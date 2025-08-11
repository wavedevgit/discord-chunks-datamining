/** Chunk was on web.js **/
/** chunk id: 166584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./388685.js"), require("./539854.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk772848 = require("./772848.js"),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk434404 = require("./434404.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk700785 = require("./700785.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk635042 = require("./635042.js"),
  Chunk256226 = require("./256226.jsx"),
  Chunk314172 = require("./314172.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk701991 = require("./701991.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = R(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let P = 4,
  w = 268,
  D = 2,
  L = e => {
    if (null == e) return 0;
    let {
      width: t
    } = e.getBoundingClientRect();
    return t > 0 ? t + P : 0
  };

function x(e) {
  let {
    user: t,
    currentUser: n,
    guild: l,
    guildMember: u,
    roles: d,
    highestRole: f,
    canManageRoles: _,
    onAddRole: p,
    onRemoveRole: E
  } = e, T = i.useRef({}), A = (e, t) => {
    null != t ? T.current[e] = t : delete T.current[e]
  }, [R, x] = i.useState(d), [M, k] = i.useState(w), [j, U] = i.useState(false), G = i.useRef(null), B = i.useRef(null), Z = i.useRef(0);
  i.useLayoutEffect(() => {
    Z.current = 0
  }, [d]), i.useLayoutEffect(() => {
    if (j) return;
    let e = L(G.current),
      t = L(B.current),
      n = [],
      r = w - e - t;
    for (let e = 0; e < D; e++) {
      let t = e === D - 1 ? r : w;
      for (let e = 0, r = n.length; r < d.length; r++) {
        let i = d[r],
          o = T.current[i.id];
        if (null == o) {
          0 === Z.current && n.push(i);
          continue
        }
        let a = Math.min(o.getBoundingClientRect().width, t);
        if (e + a > t) break;
        e += a + P, n.push(i)
      }
    }
    x(n.length === R.length ? R : n), k(r), Z.current++
  }, [d, R, j]);
  let F = i.useMemo(() => "roles-".concat((0, o.Z)()), []),
    V = (0, a.ZP)({
      id: F,
      isEnabled: true,
      scrollToStart: O.Cyb,
      scrollToEnd: O.Cyb,
      wrap: true
    }),
    H = d.length,
    Y = 0 === H ? v.intl.string(v.t["vR7M+/"]) : v.intl.formatToPlainString(v.t.PCs0oq, {
      numRoles: H
    }),
    W = (j ? d : R).map((e, i) => {
      var o;
      return (0, r.jsx)(b.Z, {
        role: e,
        guildId: l.id,
        style: {
          maxWidth: j || i !== R.length - 1 ? w : M
        },
        disableBorderColor: true,
        ref: t => A(e.id, t),
        onRemove: () => E(e),
        canRemove: (null == (o = e.tags) ? true : o.guild_connections) === null ? t.id === n.id : _ && m.r6(l, n.id, f, e)
      }, e.id)
    }),
    {
      trackUserProfileAction: K
    } = (0, g.KZ)(),
    z = i.useCallback(() => {
      U(true), K({
        action: "EXPAND_ROLES"
      })
    }, [K]),
    q = i.useCallback(() => {
      U(false), K({
        action: "COLLAPSE_ROLES"
      })
    }, [K]);
  return (0, r.jsx)(s.bG, {
    navigator: V,
    children: (0, r.jsx)(s.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = C(e, ["ref"]);
        return (0, r.jsxs)("div", N(S({
          className: I.root,
          "aria-label": Y,
          ref: t
        }, n), {
          children: [W, R.length < d.length ? j ? (0, r.jsx)(c.DY3, {
            text: v.intl.string(v.t.XnXtCg),
            children: (0, r.jsx)(c.P3F, {
              onClick: q,
              className: I.collapseButton,
              children: (0, r.jsx)(h.Z, {
                direction: h.Z.Directions.LEFT,
                width: 12,
                height: 12
              })
            })
          }) : (0, r.jsx)(c.DY3, {
            text: v.intl.string(v.t.DY6n4u),
            children: (0, r.jsx)(c.P3F, {
              innerRef: G,
              onClick: z,
              className: I.expandButton,
              children: (0, r.jsx)(c.Text, {
                variant: "text-xs/medium",
                children: "+".concat(d.length - R.length)
              })
            })
          }) : null, _ && null != u ? (0, r.jsx)(y.Z, {
            buttonRef: B,
            guild: l,
            guildMember: u,
            numRoles: H,
            highestRole: f,
            onAddRole: p
          }) : null]
        }))
      }
    })
  })
}

function M(e) {
  let {
    user: t,
    currentUser: n,
    guild: o
  } = e, {
    trackUserProfileAction: a
  } = (0, g.KZ)(), s = (0, l.e7)([f.ZP], () => f.ZP.getMember(o.id, t.id)), c = null == s ? true : s.roles, h = (0, l.Wu)([_.Z], () => _.Z.getManyRoles(o.id, null != c ? c : []).sort(E.Z), [c, o.id]), b = m.e9(o, n.id), [y] = (0, l.Wu)([p.Z], () => [p.Z.can(O.Plq.MANAGE_ROLES, o), null != o ? p.Z.getGuildVersion(o.id) : null]), v = i.useCallback(e => {
    var n, r;
    a({
      action: "REMOVE_ROLE"
    });
    let i = null != (r = null == c ? true : c.filter(t => t !== e.id)) ? r : [];
    (null == (n = e.tags) ? true : n.guild_connections) === null ? u.Z.unassignGuildRoleConnection(o.id, e.id) : d.Z.updateMemberRoles(o.id, t.id, i, [], [e.id])
  }, [c, o.id, t.id, a]), I = i.useCallback(e => {
    a({
      action: "ADD_ROLE"
    });
    let n = null != c ? c : [];
    n.includes(e) || (n = [...n, e]), d.Z.updateMemberRoles(o.id, t.id, n, [e], [])
  }, [c, o.id, t.id, a]), T = y && null != s;
  return 0 !== h.length || T ? (0, r.jsx)(x, {
    user: t,
    currentUser: n,
    guild: o,
    guildMember: s,
    roles: h,
    highestRole: b,
    canManageRoles: y,
    onAddRole: I,
    onRemoveRole: v
  }) : null
}