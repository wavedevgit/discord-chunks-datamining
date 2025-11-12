/** Chunk was on web.js **/
/** chunk id: 166584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./539854.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk641984 = require("./641984.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = P(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let D = 4,
  w = 268,
  x = 2,
  L = e => {
    if (null == e) return 0;
    let {
      width: t
    } = e.getBoundingClientRect();
    return t > 0 ? t + D : 0
  };

function M(e) {
  let {
    user: t,
    currentUser: n,
    guild: l,
    guildMember: d,
    roles: f,
    highestRole: _,
    canManageRoles: p,
    onAddRole: h,
    onRemoveRole: b
  } = e, S = i.useRef({}), C = (e, t) => {
    null != t ? S.current[e] = t : delete S.current[e]
  }, [P, M] = i.useState(f), [j, k] = i.useState(w), [U, G] = i.useState(false), B = i.useRef(null), Z = i.useRef(null), F = i.useRef(0);
  i.useLayoutEffect(() => {
    F.current = 0
  }, [f]), i.useLayoutEffect(() => {
    if (U) return;
    let e = L(B.current),
      t = L(Z.current),
      n = [],
      r = w - e - t;
    for (let e = 0; e < x; e++) {
      let t = e === x - 1 ? r : w;
      for (let e = 0, r = n.length; r < f.length; r++) {
        let i = f[r],
          a = S.current[i.id];
        if (null == a) {
          0 === F.current && n.push(i);
          continue
        }
        let o = Math.min(a.getBoundingClientRect().width, t);
        if (e + o > t) break;
        e += o + D, n.push(i)
      }
    }
    M(n.length === P.length ? P : n), k(r), F.current++
  }, [f, P, U]);
  let V = i.useMemo(() => "roles-".concat((0, a.Z)()), []),
    H = (0, o.ZP)({
      id: V,
      isEnabled: true,
      scrollToStart: v.Cyb,
      scrollToEnd: v.Cyb,
      wrap: true
    }),
    Y = f.length,
    W = 0 === Y ? I.intl.string(I.t["vR7M+y"]) : I.intl.formatToPlainString(I.t.PCs0oo, {
      numRoles: Y
    }),
    K = (U ? f : P).map((e, i) => {
      var a;
      return (0, r.jsx)(y.Z, {
        role: e,
        guildId: l.id,
        style: {
          maxWidth: U || i !== P.length - 1 ? w : j
        },
        disableBorderColor: true,
        ref: t => C(e.id, t),
        onRemove: () => b(e),
        canRemove: (null == (a = e.tags) ? true : a.guild_connections) === null ? t.id === n.id : p && g.r6(l, n.id, _, e)
      }, e.id)
    }),
    {
      trackUserProfileAction: z
    } = (0, E.KZ)(),
    q = i.useCallback(() => {
      G(true), z({
        action: "EXPAND_ROLES"
      })
    }, [z]),
    X = i.useCallback(() => {
      G(false), z({
        action: "COLLAPSE_ROLES"
      })
    }, [z]);
  return (0, r.jsx)(s.bG, {
    navigator: H,
    children: (0, r.jsx)(s.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = R(e, ["ref"]);
        return (0, r.jsxs)("div", N(A({
          className: T.root,
          "aria-label": W,
          ref: t
        }, n), {
          children: [K, P.length < f.length ? U ? (0, r.jsx)(c.u, {
            asContainer: true,
            text: I.intl.string(I.t.XnXtCt),
            children: (0, r.jsx)(u.P3F, {
              onClick: X,
              className: T.collapseButton,
              children: (0, r.jsx)(m.Z, {
                direction: m.Z.Directions.LEFT,
                width: 12,
                height: 12
              })
            })
          }) : (0, r.jsx)(c.u, {
            asContainer: true,
            text: I.intl.string(I.t.DY6n4q),
            children: (0, r.jsx)(u.P3F, {
              innerRef: B,
              onClick: q,
              className: T.expandButton,
              children: (0, r.jsx)(u.Text, {
                variant: "text-xs/medium",
                children: "+".concat(f.length - P.length)
              })
            })
          }) : null, p && null != d ? (0, r.jsx)(O.Z, {
            buttonRef: Z,
            guild: l,
            guildMember: d,
            numRoles: Y,
            highestRole: _,
            onAddRole: h
          }) : null]
        }))
      }
    })
  })
}

function j(e) {
  let {
    user: t,
    currentUser: n,
    guild: a
  } = e, {
    trackUserProfileAction: o
  } = (0, E.KZ)(), s = (0, l.e7)([_.ZP], () => _.ZP.getMember(a.id, t.id)), c = null == s ? true : s.roles, u = (0, l.Wu)([p.Z], () => p.Z.getManyRoles(a.id, null != c ? c : []).sort(b.Z), [c, a.id]), m = g.e9(a, n.id), [y] = (0, l.Wu)([h.Z], () => [h.Z.can(v.Plq.MANAGE_ROLES, a), null != a ? h.Z.getGuildVersion(a.id) : null]), O = i.useCallback(e => {
    var n, r;
    o({
      action: "REMOVE_ROLE"
    });
    let i = null != (r = null == c ? true : c.filter(t => t !== e.id)) ? r : [];
    (null == (n = e.tags) ? true : n.guild_connections) === null ? d.Z.unassignGuildRoleConnection(a.id, e.id) : f.Z.updateMemberRoles(a.id, t.id, i, [], [e.id])
  }, [c, a.id, t.id, o]), I = i.useCallback(e => {
    o({
      action: "ADD_ROLE"
    });
    let n = null != c ? c : [];
    n.includes(e) || (n = [...n, e]), f.Z.updateMemberRoles(a.id, t.id, n, [e], [])
  }, [c, a.id, t.id, o]), T = y && null != s;
  return 0 !== u.length || T ? (0, r.jsx)(M, {
    user: t,
    currentUser: n,
    guild: a,
    guildMember: s,
    roles: u,
    highestRole: m,
    canManageRoles: y,
    onAddRole: I,
    onRemoveRole: O
  }) : null
}