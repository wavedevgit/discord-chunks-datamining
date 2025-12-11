/** Chunk was on web.js **/
/** chunk id: 166584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./388685.js"), require("./539854.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk787397 = require("./787397.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
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

function P(e, t) {
  if (null == e) return {};
  var n, r, i = R(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let w = 4,
  D = 268,
  x = 2,
  L = e => {
    if (null == e) return 0;
    let {
      width: t
    } = e.getBoundingClientRect();
    return t > 0 ? t + w : 0
  };

function j(e) {
  let {
    user: t,
    currentUser: n,
    guild: l,
    guildMember: d,
    roles: f,
    highestRole: p,
    canManageRoles: _,
    onAddRole: m,
    onRemoveRole: b
  } = e, T = i.useRef({}), A = (e, t) => {
    null != t ? T.current[e] = t : delete T.current[e]
  }, [R, j] = i.useState(f), [M, k] = i.useState(D), [U, G] = i.useState(false), Z = i.useRef(null), B = i.useRef(null), F = i.useRef(0);
  i.useLayoutEffect(() => {
    F.current = 0
  }, [f]), i.useLayoutEffect(() => {
    if (U) return;
    let e = L(Z.current),
      t = L(B.current),
      n = [],
      r = D - e - t;
    for (let e = 0; e < x; e++) {
      let t = e === x - 1 ? r : D;
      for (let e = 0, r = n.length; r < f.length; r++) {
        let i = f[r],
          a = T.current[i.id];
        if (null == a) {
          0 === F.current && n.push(i);
          continue
        }
        let o = Math.min(a.getBoundingClientRect().width, t);
        if (e + o > t) break;
        e += o + w, n.push(i)
      }
    }
    j(n.length === R.length ? R : n), k(r), F.current++
  }, [f, R, U]);
  let V = i.useMemo(() => "roles-".concat((0, a.Z)()), []),
    H = (0, o.ZP)({
      id: V,
      isEnabled: true,
      scrollToStart: v.Cyb,
      scrollToEnd: v.Cyb,
      wrap: true
    }),
    Y = f.length,
    W = 0 === Y ? S.intl.string(S.t["vR7M+y"]) : S.intl.formatToPlainString(S.t.PCs0oo, {
      numRoles: Y
    }),
    K = (U ? f : R).map((e, i) => {
      var a;
      return (0, r.jsx)(y.Z, {
        role: e,
        guildId: l.id,
        style: {
          maxWidth: U || i !== R.length - 1 ? D : M
        },
        disableBorderColor: true,
        ref: t => A(e.id, t),
        onRemove: () => b(e),
        canRemove: (null == (a = e.tags) ? true : a.guild_connections) === null ? t.id === n.id : _ && g.r6(l, n.id, p, e)
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
    Q = i.useCallback(() => {
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
        } = e, n = P(e, ["ref"]);
        return (0, r.jsxs)("div", N(C({
          className: I.root,
          "aria-label": W,
          ref: t
        }, n), {
          children: [K, R.length < f.length ? U ? (0, r.jsx)(c.u, {
            asContainer: true,
            text: S.intl.string(S.t.XnXtCt),
            children: (0, r.jsx)(u.P3F, {
              onClick: Q,
              className: I.collapseButton,
              children: (0, r.jsx)(h.Z, {
                direction: h.Z.Directions.LEFT,
                width: 12,
                height: 12
              })
            })
          }) : (0, r.jsx)(c.u, {
            asContainer: true,
            text: S.intl.string(S.t.DY6n4q),
            children: (0, r.jsx)(u.P3F, {
              innerRef: Z,
              onClick: q,
              className: I.expandButton,
              children: (0, r.jsx)(u.Text, {
                variant: "text-xs/medium",
                children: "+".concat(f.length - R.length)
              })
            })
          }) : null, _ && null != d ? (0, r.jsx)(O.Z, {
            buttonRef: B,
            guild: l,
            guildMember: d,
            numRoles: Y,
            highestRole: p,
            onAddRole: m
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
    guild: a
  } = e, {
    trackUserProfileAction: o
  } = (0, E.KZ)(), s = (0, l.e7)([p.ZP], () => p.ZP.getMember(a.id, t.id)), c = null == s ? true : s.roles, u = (0, l.Wu)([_.Z], () => _.Z.getManyRoles(a.id, null != c ? c : []).sort(b.Z), [c, a.id]), h = g.e9(a, n.id), [y] = (0, l.Wu)([m.Z], () => [m.Z.can(v.Plq.MANAGE_ROLES, a), null != a ? m.Z.getGuildVersion(a.id) : null]), O = i.useCallback(e => {
    var n, r;
    o({
      action: "REMOVE_ROLE"
    });
    let i = null != (r = null == c ? true : c.filter(t => t !== e.id)) ? r : [];
    (null == (n = e.tags) ? true : n.guild_connections) === null ? d.Z.unassignGuildRoleConnection(a.id, e.id) : f.Z.updateMemberRoles(a.id, t.id, i, [], [e.id])
  }, [c, a.id, t.id, o]), S = i.useCallback(e => {
    o({
      action: "ADD_ROLE"
    });
    let n = null != c ? c : [];
    n.includes(e) || (n = [...n, e]), f.Z.updateMemberRoles(a.id, t.id, n, [e], [])
  }, [c, a.id, t.id, o]), I = y && null != s;
  return 0 !== u.length || I ? (0, r.jsx)(j, {
    user: t,
    currentUser: n,
    guild: a,
    guildMember: s,
    roles: u,
    highestRole: h,
    canManageRoles: y,
    onAddRole: S,
    onRemoveRole: O
  }) : null
}