/** Chunk was on 47463 **/
/** chunk id: 125657, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk144645 = require("./144645.js");

function j(e) {
  var t;
  let {
    guild: n,
    applicationIntegration: j
  } = e, {
    application: v
  } = j, y = null != v.bot ? new b.Z(v.bot) : null, O = (0, a.e7)([g.ZP], () => null != y ? g.ZP.getMember(n.id, y.id) : null, [y, n]), _ = (0, a.e7)([f.Z], () => f.Z.getEveryoneRole(n)), C = (0, a.Wu)([f.Z], () => {
    var e;
    return f.Z.getManyRoles(n.id, null != (e = null == O ? true : O.roles) ? e : [])
  }), N = null == y ? true : y.id;
  r.useEffect(() => {
    null != N && s.Z.requestMembersById(n.id, N)
  }, [n.id, N]);
  let Z = r.useMemo(() => l.$e(_.permissions, ...C.map(e => e.permissions)), [C, _]);
  return null == y ? null : (0, i.jsx)(o.Zbd, {
    editable: true,
    className: x.card,
    children: (0, i.jsxs)(p.Z, {
      direction: p.Z.Direction.VERTICAL,
      children: [(0, i.jsxs)(p.Z, {
        align: p.Z.Align.CENTER,
        children: [(0, i.jsx)("img", {
          alt: "",
          src: y.getAvatarURL(n.id, 32),
          className: x.iconWrapper
        }), (0, i.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-sm/normal",
          children: h.intl.format(h.t.GyhzGx, {
            user: y.toString()
          })
        }), (0, i.jsx)(u.Z, {
          className: x.tag,
          verified: y.isVerifiedBot()
        })]
      }), function(e, t, n, r) {
        let a = [],
          s = [];
        for (let e of m.VY) l.e$(r, e) ? a.push(e) : s.push(e);
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(o.$i$, {
            className: x.divider
          }), n.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.vwX, {
              className: x.permissionHeader,
              children: h.intl.format(h.t.PCs0oq, {
                numRoles: n.length
              })
            }), (0, i.jsx)(c.ZP, {
              className: x.rolePills,
              user: e,
              guild: t,
              userRoleIds: n,
              wrap: false,
              readOnly: true
            })]
          }) : null, a.length > 0 || s.length > 0 ? (0, i.jsx)(d.Z, {
            grantedPermissions: a,
            grantedPermissionsHeader: h.intl.string(h.t["hA4+sr"]),
            disabledPermissions: s,
            disabledPermissionsHeader: h.intl.string(h.t["/rEZ2t"])
          }) : null]
        })
      }(y, n, null != (t = null == O ? true : O.roles) ? t : [], Z)]
    })
  })
}