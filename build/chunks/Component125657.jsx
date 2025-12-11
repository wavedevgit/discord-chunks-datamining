/** Chunk was on 9414 **/
/** chunk id: 125657, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk412899 = require("./412899.jsx"),
  Chunk995648 = require("./995648.jsx"),
  Chunk385499 = require("./385499.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk422559 = require("./422559.js"),
  Chunk598077 = require("./598077.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk768581 = require("./768581.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk939248 = require("./939248.js");

function v(e) {
  var t;
  let {
    guild: n,
    applicationIntegration: v
  } = e, {
    application: O
  } = v, y = null != O.bot ? new m.Z(O.bot) : null, C = (0, a.e7)([f.ZP], () => null != y ? f.ZP.getMember(n.id, y.id) : null, [y, n]), N = (0, a.e7)([g.Z], () => g.Z.getEveryoneRole(n)), S = (0, a.Wu)([g.Z], () => {
    var e;
    return g.Z.getManyRoles(n.id, null != (e = null == C ? true : C.roles) ? e : [])
  }), I = null == y ? true : y.id;
  r.useEffect(() => {
    null != I && s.Z.requestMembersById(n.id, I)
  }, [n.id, I]);
  let w = r.useMemo(() => l.$e(N.permissions, ...S.map(e => e.permissions)), [S, N]);
  if (null == y) return null;
  let E = h.ZP.getApplicationIconURL({
    id: O.id,
    guildMember: C,
    bot: O.bot,
    icon: O.icon,
    size: 32
  });
  return (0, i.jsx)(o.Zbd, {
    editable: true,
    className: j.card,
    children: (0, i.jsxs)(b.Z, {
      direction: b.Z.Direction.VERTICAL,
      children: [(0, i.jsxs)(b.Z, {
        align: b.Z.Align.CENTER,
        children: [(0, i.jsx)("img", {
          alt: "",
          src: E,
          className: j.iconWrapper
        }), (0, i.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-sm/normal",
          children: x.intl.format(x.t.GyhzGw, {
            user: y.toString()
          })
        }), (0, i.jsx)(u.Z, {
          className: j.tag,
          verified: y.isVerifiedBot()
        })]
      }), function(e, t, n, r) {
        let a = [],
          s = [];
        for (let e of p.VY) l.e$(r, e) ? a.push(e) : s.push(e);
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(o.izJ, {
            className: j.divider
          }), n.length > 0 ? (0, i.jsx)(o.gNt, {
            label: x.intl.format(x.t.PCs0oo, {
              numRoles: n.length
            }),
            children: (0, i.jsx)(c.ZP, {
              className: j.rolePills,
              user: e,
              guild: t,
              userRoleIds: n,
              wrap: false,
              readOnly: true
            })
          }) : null, a.length > 0 || s.length > 0 ? (0, i.jsx)(d.Z, {
            grantedPermissions: a,
            grantedPermissionsHeader: x.intl.string(x.t["hA4+su"]),
            disabledPermissions: s,
            disabledPermissionsHeader: x.intl.string(x.t["/rEZ2i"])
          }) : null]
        })
      }(y, n, null != (t = null == C ? true : C.roles) ? t : [], w)]
    })
  })
}