/** Chunk was on web.js **/
/** chunk id: 889695, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk496600 = require("./496600.jsx"),
  Chunk713072 = require("./713072.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk601964 = require("./601964.js"),
  Chunk345162 = require("./345162.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk709054 = require("./709054.js"),
  Chunk962086 = require("./962086.js"),
  Chunk160404 = require("./160404.js"),
  Chunk225675 = require("./225675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk124650 = require("./124650.js");

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

function A(e) {
  let {
    guildId: t
  } = e, n = (0, o.e7)([h.default], () => h.default.getCurrentUser()), T = (0, o.e7)([p.Z], () => p.Z.getGuild(t)), A = (0, o.e7)([_.Z], () => _.Z.getRolesSnapshot(t)), N = (0, o.e7)([_.Z], () => _.Z.getSortedRoles(t)), {
    impersonateType: R,
    viewingRoles: P
  } = (0, o.cj)([b.Z], () => ({
    impersonateType: b.Z.getImpersonateType(t),
    viewingRoles: b.Z.getViewingRoles(t)
  })), w = R === y.z.SERVER_SHOP, D = (0, o.e7)([f.ZP], () => null != n ? f.ZP.getTrueMember(t, n.id) : null), x = null != T ? A[(0, u.lV)(T)] : null, [L, M] = i.useState(() => {
    let e = null == P ? [] : g.default.keys(P);
    return null != x && e.push(x.id), e
  }), k = i.useRef(T);
  i.useEffect(() => {
    let e = {},
      t = k.current;
    if (null != t && null != R) {
      for (let t of L) {
        let n = A[t];
        null != n && (e[t] = n)
      }(0, E.Zm)(t.id, {
        type: R,
        roles: e
      })
    }
  }, [L, R, A]);
  let j = null != T && null != n && null != D ? N.find(e => D.roles.includes(e.id)) : true,
    U = i.useMemo(() => null != T && null != n ? N.filter(e => !(0, d.fI)(e)).filter(e => {
      var t;
      return !w || (null == (t = e.tags) ? true : t.subscription_listing_id) != null
    }).filter(e => (null == j ? true : j.id) === e.id || m.r6(T, n.id, j, e)) : [], [T, n, w, j, N]),
    G = i.useMemo(() => {
      let e = Array.from(U).map(e => ({
        leading: C(e),
        value: e.id,
        label: e.name,
        id: e.id.toString(),
        disabled: false
      }));
      return null != T && null != x && e.push({
        leading: C(x),
        value: x.id,
        label: x.name,
        id: x.id.toString(),
        disabled: true
      }), e
    }, [U, T, x]);
  if (null == n || null == T || null == D) return null;
  let B = {};
  return (D.roles.forEach(e => {
    let t = A[e];
    null != t && (B[t.id] = t)
  }), a.e$(m.I0({
    forceRoles: B,
    context: T
  }), a.$e(O.Plq.MANAGE_GUILD, O.Plq.MANAGE_ROLES)) || (0, u.eM)(T, n)) ? (0, r.jsx)("div", {
    className: I.container,
    children: (0, r.jsxs)(s.uz, {
      selectionMode: "multiple",
      options: G,
      value: L,
      onSelectionChange: e => {
        M(e)
      },
      children: [(0, r.jsx)(s.Ct, {
        hideTags: true,
        autoFocus: true,
        placeholder: v.intl.string(v.t.Sojqsr)
      }), (0, r.jsx)(s.px, {
        renderListItem: e => (0, r.jsx)(l.W, S({}, e))
      })]
    })
  }) : (0, r.jsx)(c.Text, {
    variant: "text-md/medium",
    children: v.intl.string(v.t.MNSTbY)
  })
}

function C(e) {
  return () => {
    var t;
    return (0, r.jsx)("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, r.jsx)("circle", {
        cx: "6",
        cy: "6",
        r: "6",
        fill: null != (t = e.colorString) ? t : "currentColor"
      })
    })
  }
}