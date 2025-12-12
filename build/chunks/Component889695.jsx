/** Chunk was on web.js **/
/** chunk id: 889695, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk593140 = require("./593140.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function C(e) {
  let {
    guildId: t
  } = e, n = (0, o.e7)([m.default], () => m.default.getCurrentUser()), I = (0, o.e7)([_.Z], () => _.Z.getGuild(t)), C = (0, o.e7)([p.Z], () => p.Z.getRolesSnapshot(t)), N = (0, o.e7)([p.Z], () => p.Z.getSortedRoles(t)), {
    impersonateType: P,
    viewingRoles: R
  } = (0, o.cj)([b.Z], () => ({
    impersonateType: b.Z.getImpersonateType(t),
    viewingRoles: b.Z.getViewingRoles(t)
  })), w = P === y.z.SERVER_SHOP, D = (0, o.e7)([f.ZP], () => null != n ? f.ZP.getTrueMember(t, n.id) : null), x = null != I ? C[(0, u.lV)(I)] : null, [L, j] = i.useState(() => {
    let e = null == R ? [] : g.default.keys(R);
    return null != x && e.push(x.id), e
  }), M = i.useRef(I);
  i.useEffect(() => {
    let e = {},
      t = M.current;
    if (null != t && null != P) {
      for (let t of L) {
        let n = C[t];
        null != n && (e[t] = n)
      }(0, E.Zm)(t.id, {
        type: P,
        roles: e
      })
    }
  }, [L, P, C]);
  let k = null != I && null != n && null != D ? N.find(e => D.roles.includes(e.id)) : true,
    U = i.useMemo(() => null != I && null != n ? N.filter(e => !(0, d.fI)(e)).filter(e => {
      var t;
      return !w || (null == (t = e.tags) ? true : t.subscription_listing_id) != null
    }).filter(e => (null == k ? true : k.id) === e.id || h.r6(I, n.id, k, e)) : [], [I, n, w, k, N]),
    G = i.useMemo(() => {
      let e = Array.from(U).map(e => ({
        leading: A(e),
        value: e.id,
        label: e.name,
        id: e.id.toString(),
        disabled: false
      }));
      return null != I && null != x && e.push({
        leading: A(x),
        value: x.id,
        label: x.name,
        id: x.id.toString(),
        disabled: true
      }), e
    }, [U, I, x]);
  if (null == n || null == I || null == D) return null;
  let Z = {};
  return (D.roles.forEach(e => {
    let t = C[e];
    null != t && (Z[t.id] = t)
  }), a.e$(h.I0({
    forceRoles: Z,
    context: I
  }), a.$e(O.Plq.MANAGE_GUILD, O.Plq.MANAGE_ROLES)) || (0, u.eM)(I, n)) ? (0, r.jsx)("div", {
    className: S.container,
    children: (0, r.jsxs)(s.uz, {
      selectionMode: "multiple",
      options: G,
      value: L,
      onSelectionChange: e => {
        j(e)
      },
      children: [(0, r.jsx)(s.Ct, {
        hideTags: true,
        autoFocus: true,
        placeholder: v.intl.string(v.t.Sojqsr)
      }), (0, r.jsx)(s.px, {
        renderListItem: e => (0, r.jsx)(l.W, T({}, e))
      })]
    })
  }) : (0, r.jsx)(c.Text, {
    variant: "text-md/medium",
    children: v.intl.string(v.t.MNSTbY)
  })
}

function A(e) {
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