/** Chunk was on web.js **/
/** chunk id: 889695, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk658722 = require("./658722.js"),
  a = require.n(Chunk658722),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
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

function T(e) {
  var t;
  return (0, r.jsx)("span", {
    style: {
      color: null != (t = e.colorString) ? t : "currentColor"
    },
    children: e.name
  })
}

function S(e) {
  let {
    guildId: t
  } = e, n = (0, l.e7)([h.default], () => h.default.getCurrentUser()), o = (0, l.e7)([p.Z], () => p.Z.getGuild(t)), S = (0, l.e7)([_.Z], () => _.Z.getRolesSnapshot(t)), A = (0, l.e7)([_.Z], () => _.Z.getSortedRoles(t)), {
    impersonateType: N,
    viewingRoles: C
  } = (0, l.cj)([b.Z], () => ({
    impersonateType: b.Z.getImpersonateType(t),
    viewingRoles: b.Z.getViewingRoles(t)
  })), R = N === y.z.SERVER_SHOP, P = (0, l.e7)([f.ZP], () => null != n ? f.ZP.getTrueMember(t, n.id) : null), [w, D] = (0, c.A7R)(null == C ? [] : g.default.keys(C)), L = i.useRef(o);
  i.useEffect(() => {
    let e = {},
      t = L.current;
    if (null != t && null != N) {
      for (let t of w) {
        let n = S[t];
        null != n && (e[t] = n)
      }(0, E.Zm)(t.id, {
        type: N,
        roles: e
      })
    }
  }, [w, N, S]);
  let x = null != o && null != n && null != P ? A.find(e => P.roles.includes(e.id)) : true,
    M = i.useMemo(() => null != o && null != n ? A.filter(e => !(0, d.fI)(e)).filter(e => {
      var t;
      return !R || (null == (t = e.tags) ? true : t.subscription_listing_id) != null
    }).filter(e => (null == x ? true : x.id) === e.id || m.r6(o, n.id, x, e)) : [], [o, n, R, x, A]);
  if (null == n || null == o || null == P) return null;
  let k = {};
  return (P.roles.forEach(e => {
    let t = S[e];
    null != t && (k[t.id] = t)
  }), s.e$(m.I0({
    forceRoles: k,
    context: o
  }), s.$e(O.Plq.MANAGE_GUILD, O.Plq.MANAGE_ROLES)) || (0, u.eM)(o, n)) ? (0, r.jsx)("div", {
    className: I.container,
    children: (0, r.jsx)(c.hQY, {
      placeholder: v.intl.string(v.t.Sojqsr),
      value: w,
      onChange: D,
      autoFocus: true,
      children: e => {
        let t = M.reduce((t, n) => (a()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, r.jsxs)(c.lo1, {
            value: n.id,
            children: [(0, r.jsx)(c.lo1.Label, {
              children: T(n)
            }), (0, r.jsx)(c.lo1.Checkbox, {})]
          }, n.id)), t), []),
          n = S[(0, u.lV)(o)];
        return null != n && t.push((0, r.jsxs)(c.lo1, {
          value: n.id,
          disabled: true,
          children: [(0, r.jsx)(c.lo1.Label, {
            children: T(n)
          }), (0, r.jsx)(c.lo1.Checkbox, {
            checked: true
          })]
        }, n.id)), t
      }
    })
  }) : (0, r.jsx)(c.Text, {
    variant: "text-md/medium",
    children: v.intl.string(v.t.MNSTbW)
  })
}