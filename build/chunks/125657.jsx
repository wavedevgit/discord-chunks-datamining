/** Chunk was on 13616 **/
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
  Chunk412899 = require("./412899.js"),
  Chunk995648 = require("./995648.js"),
  Chunk385499 = require("./385499.js"),
  Chunk600164 = require("./600164.js"),
  Chunk422559 = require("./422559.js"),
  Chunk598077 = require("./598077.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk388032 = require("./388032.js"),
  Chunk439478 = require("./439478.js");

function j(e) {
  var t;
  let {
    guild: n,
    applicationIntegration: j
  } = e, {
    application: v
  } = j, O = null != v.bot ? new b.Z(v.bot) : null, y = (0, o.e7)([g.ZP], () => null != O ? g.ZP.getMember(n.id, O.id) : null, [O, n]), _ = (0, o.e7)([f.Z], () => f.Z.getEveryoneRole(n)), C = (0, o.Wu)([f.Z], () => {
    var e;
    return f.Z.getManyRoles(n.id, null != (e = null == y ? true : y.roles) ? e : [])
  }), N = null == O ? true : O.id;
  r.useEffect(() => {
    null != N && s.Z.requestMembersById(n.id, N)
  }, [n.id, N]);
  let S = r.useMemo(() => l.$e(_.permissions, ...C.map(e => e.permissions)), [C, _]);
  return null == O ? null : <a.Zbd editable={true} className={x.card}><p.Z direction={p.Z.Direction.VERTICAL}>{<p.Z align={p.Z.Align.CENTER}>{<img alt={""} src={O.getAvatarURL(n.id, 32)} className={x.iconWrapper} />}{<a.Text color={"header-primary"} variant={"text-sm/normal"}>{h.intl.format(h.t.GyhzGx, {
            user: O.toString()
          })}</a.Text>}{<u.Z className={x.tag} verified={O.isVerifiedBot()} />}</p.Z>}{function(e, t, n, r) {
        let o = [],
          s = [];
        for (let e of m.VY) l.e$(r, e) ? o.push(e) : s.push(e);
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(a.$i$, {
            className: x.divider
          }), n.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(a.vwX, {
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
          }) : null, o.length > 0 || s.length > 0 ? (0, i.jsx)(d.Z, {
            grantedPermissions: o,
            grantedPermissionsHeader: h.intl.string(h.t["hA4+sr"]),
            disabledPermissions: s,
            disabledPermissionsHeader: h.intl.string(h.t["/rEZ2t"])
          }) : null]
        })
      }(O, n, null != (t = null == y ? true : y.roles) ? t : [], S)}</p.Z></a.Zbd>
}