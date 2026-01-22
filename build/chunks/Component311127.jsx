/** Chunk was on web.js **/
/** chunk id: 311127, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk389723 = require("./389723.jsx"),
  Chunk332661 = require("./332661.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk260509 = require("./260509.js"),
  Chunk34457 = require("./34457.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk488926 = require("./488926.js"),
  Chunk661191 = require("./661191.js"),
  Chunk529942 = require("./529942.js"),
  Chunk164956 = require("./164956.js"),
  Chunk209700 = require("./209700.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk110927 = require("./110927.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
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

function T(e) {
  let {
    guildId: t
  } = e, n = (0, s.bG)([h.default], () => h.default.getCurrentUser()), S = (0, s.bG)([_.A], () => _.A.getGuild(t)), T = (0, s.bG)([p.A], () => p.A.getRolesSnapshot(t)), N = (0, s.bG)([p.A], () => p.A.getSortedRoles(t)), {
    impersonateType: R,
    viewingRoles: w
  } = (0, s.cf)([b.A], () => ({
    impersonateType: b.A.getImpersonateType(t),
    viewingRoles: b.A.getViewingRoles(t)
  })), P = R === y._.SERVER_SHOP, D = (0, s.bG)([f.Ay], () => null != n ? f.Ay.getTrueMember(t, n.id) : null), x = null != S ? T[(0, u.af)(S)] : null, [L, j] = i.useState(() => {
    let e = null == w ? [] : g.default.keys(w);
    return null != x && e.push(x.id), e
  }), M = i.useRef(S);
  i.useEffect(() => {
    let e = {},
      t = M.current;
    if (null != t && null != R) {
      for (let t of L) {
        let n = T[t];
        null != n && (e[t] = n)
      }(0, E.IA)(t.id, {
        type: R,
        roles: e
      })
    }
  }, [L, R, T]);
  let k = null != S && null != n && null != D ? N.find(e => D.roles.includes(e.id)) : true,
    U = i.useMemo(() => null != S && null != n ? N.filter(e => !(0, d.Oy)(e)).filter(e => {
      var t;
      return !P || (null == (t = e.tags) ? true : t.subscription_listing_id) != null
    }).filter(e => (null == k ? true : k.id) === e.id || m.wO(S, n.id, k, e)) : [], [S, n, P, k, N]),
    G = i.useMemo(() => {
      let e = Array.from(U).map(e => ({
        leading: C(e),
        value: e.id,
        label: e.name,
        id: e.id.toString(),
        disabled: false
      }));
      return null != S && null != x && e.push({
        leading: C(x),
        value: x.id,
        label: x.name,
        id: x.id.toString(),
        disabled: true
      }), e
    }, [U, S, x]);
  if (null == n || null == S || null == D) return null;
  let V = {};
  return (D.roles.forEach(e => {
    let t = T[e];
    null != t && (V[t.id] = t)
  }), a.zy(m.aH({
    forceRoles: V,
    context: S
  }), a.kg(O.xBc.MANAGE_GUILD, O.xBc.MANAGE_ROLES)) || (0, u.bM)(S, n)) ? (0, r.jsx)("div", {
    className: v.kL,
    children: (0, r.jsxs)(o.iS, {
      selectionMode: "multiple",
      options: G,
      value: L,
      onSelectionChange: e => {
        j(e)
      },
      children: [(0, r.jsx)(o.a3, {
        hideTags: true,
        autoFocus: true,
        placeholder: A.intl.string(A.t.Sojqsr)
      }), (0, r.jsx)(o.X2, {
        renderListItem: e => (0, r.jsx)(l.c, I({}, e))
      })]
    })
  }) : (0, r.jsx)(c.Text, {
    variant: "text-md/medium",
    children: A.intl.string(A.t.MNSTbY)
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