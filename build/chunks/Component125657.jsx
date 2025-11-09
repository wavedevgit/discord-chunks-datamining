/** Chunk was on 99063 **/
/** chunk id: 125657, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk310625 = require("./310625.js");

function j(e) {
  var t;
  let {
    guild: n,
    applicationIntegration: j
  } = e, {
    application: v
  } = j, O = null != v.bot ? new b.Z(v.bot) : null, y = (0, a.e7)([g.ZP], () => null != O ? g.ZP.getMember(n.id, O.id) : null, [O, n]), _ = (0, a.e7)([f.Z], () => f.Z.getEveryoneRole(n)), C = (0, a.Wu)([f.Z], () => {
    var e;
    return f.Z.getManyRoles(n.id, null != (e = null == y ? true : y.roles) ? e : [])
  }), N = null == O ? true : O.id;
  r.useEffect(() => {
    null != N && s.Z.requestMembersById(n.id, N)
  }, [n.id, N]);
  let S = r.useMemo(() => l.$e(_.permissions, ...C.map(e => e.permissions)), [C, _]);
  return null == O ? null : (0, i.jsx)(o.Zbd, {
    editable: true,
    className: x.card,
    children: (0, i.jsxs)(p.Z, {
      direction: p.Z.Direction.VERTICAL,
      children: [(0, i.jsxs)(p.Z, {
        align: p.Z.Align.CENTER,
        children: [(0, i.jsx)("img", {
          alt: "",
          src: O.getAvatarURL(n.id, 32),
          className: x.iconWrapper
        }), (0, i.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-sm/normal",
          children: h.intl.format(h.t.GyhzGw, {
            user: O.toString()
          })
        }), (0, i.jsx)(u.Z, {
          className: x.tag,
          verified: O.isVerifiedBot()
        })]
      }), function(e, t, n, r) {
        let a = [],
          s = [];
        for (let e of m.VY) l.e$(r, e) ? a.push(e) : s.push(e);
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(o.izJ, {
            className: x.divider
          }), n.length > 0 ? (0, i.jsx)(o.gNt, {
            label: h.intl.format(h.t.PCs0oo, {
              numRoles: n.length
            }),
            children: (0, i.jsx)(c.ZP, {
              className: x.rolePills,
              user: e,
              guild: t,
              userRoleIds: n,
              wrap: false,
              readOnly: true
            })
          }) : null, a.length > 0 || s.length > 0 ? (0, i.jsx)(d.Z, {
            grantedPermissions: a,
            grantedPermissionsHeader: h.intl.string(h.t["hA4+su"]),
            disabledPermissions: s,
            disabledPermissionsHeader: h.intl.string(h.t["/rEZ2i"])
          }) : null]
        })
      }(O, n, null != (t = null == y ? true : y.roles) ? t : [], S)]
    })
  })
}