/** Chunk was on 91173 **/
/** chunk id: 889695, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function x(e) {
  var t;
  return (0, r.jsx)("span", {
    style: {
      color: null != (t = e.colorString) ? t : "currentColor"
    },
    children: e.name
  })
}

function j(e) {
  let {
    guildId: t
  } = e, n = (0, s.e7)([g.default], () => g.default.getCurrentUser()), l = (0, s.e7)([f.Z], () => f.Z.getGuild(t)), j = (0, s.e7)([m.Z], () => m.Z.getRolesSnapshot(t)), I = (0, s.e7)([m.Z], () => m.Z.getSortedRoles(t)), {
    impersonateType: S,
    viewingRoles: T
  } = (0, s.cj)([E.Z], () => ({
    impersonateType: E.Z.getImpersonateType(t),
    viewingRoles: E.Z.getViewingRoles(t)
  })), P = S === C.z.SERVER_SHOP, N = (0, s.e7)([p.ZP], () => null != n ? p.ZP.getTrueMember(t, n.id) : null), [A, w] = (0, c.A7R)(null == T ? [] : h.default.keys(T)), Z = i.useRef(l);
  i.useEffect(() => {
    let e = {},
      t = Z.current;
    if (null != t && null != S) {
      for (let t of A) {
        let n = j[t];
        null != n && (e[t] = n)
      }(0, b.Zm)(t.id, {
        type: S,
        roles: e
      })
    }
  }, [A, S, j]);
  let R = null != l && null != n && null != N ? I.find(e => N.roles.includes(e.id)) : true,
    D = i.useMemo(() => null != l && null != n ? I.filter(e => !(0, d.fI)(e)).filter(e => {
      var t;
      return !P || (null == (t = e.tags) ? true : t.subscription_listing_id) != null
    }).filter(e => (null == R ? true : R.id) === e.id || _.r6(l, n.id, R, e)) : [], [l, n, P, R, I]);
  if (null == n || null == l || null == N) return null;
  let L = {};
  return (N.roles.forEach(e => {
    let t = j[e];
    null != t && (L[t.id] = t)
  }), o.e$(_.I0({
    forceRoles: L,
    context: l
  }), o.$e(v.Plq.MANAGE_GUILD, v.Plq.MANAGE_ROLES)) || (0, u.eM)(l, n)) ? (0, r.jsx)("div", {
    className: y.container,
    children: (0, r.jsx)(c.hQY, {
      placeholder: O.intl.string(O.t.Sojqsr),
      value: A,
      onChange: w,
      autoFocus: true,
      children: e => {
        let t = D.reduce((t, n) => (a()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, r.jsxs)(c.lo1, {
            value: n.id,
            children: [(0, r.jsx)(c.lo1.Label, {
              children: x(n)
            }), (0, r.jsx)(c.lo1.Checkbox, {})]
          }, n.id)), t), []),
          n = j[(0, u.lV)(l)];
        return null != n && t.push((0, r.jsxs)(c.lo1, {
          value: n.id,
          disabled: true,
          children: [(0, r.jsx)(c.lo1.Label, {
            children: x(n)
          }), (0, r.jsx)(c.lo1.Checkbox, {
            checked: true
          })]
        }, n.id)), t
      }
    })
  }) : (0, r.jsx)(c.Text, {
    variant: "text-md/medium",
    children: O.intl.string(O.t.MNSTbW)
  })
}