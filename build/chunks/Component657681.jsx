/** Chunk was on 21968 **/
/** chunk id: 657681, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk417454 = require("./417454.jsx"),
  Chunk595738 = require("./595738.jsx"),
  Chunk709066 = require("./709066.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk376092 = require("./376092.js"),
  Chunk427157 = require("./427157.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk486020 = require("./486020.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk906809 = require("./906809.js");

function O(e) {
  var t;
  let {
    guild: n,
    applicationIntegration: O
  } = e, {
    application: y
  } = O, A = null != y.bot ? new g.A(y.bot) : null, v = (0, a.bG)([b.Ay], () => null != A ? b.Ay.getMember(n.id, A.id) : null, [A, n]), _ = (0, a.bG)([f.A], () => f.A.getEveryoneRole(n)), N = (0, a.yK)([f.A], () => {
    var e;
    return f.A.getManyRoles(n.id, null != (e = null == v ? true : v.roles) ? e : [])
  }), E = null == A ? true : A.id;
  r.useEffect(() => {
    null != E && o.A.requestMembersById(n.id, E)
  }, [n.id, E]);
  let T = r.useMemo(() => l.kg(_.permissions, ...N.map(e => e.permissions)), [N, _]);
  if (null == A) return null;
  let C = h.Ay.getApplicationIconURL({
    id: y.id,
    guildMember: v,
    bot: y.bot,
    icon: y.icon,
    size: 32
  });
  return (0, i.jsx)(s.ZpM, {
    editable: true,
    className: j.Nr,
    children: (0, i.jsxs)(p.A, {
      direction: p.A.Direction.VERTICAL,
      children: [(0, i.jsxs)(p.A, {
        align: p.A.Align.CENTER,
        children: [(0, i.jsx)("img", {
          alt: "",
          src: C,
          className: j.P0
        }), (0, i.jsx)(s.Text, {
          color: "text-strong",
          variant: "text-sm/normal",
          children: x.intl.format(x.t.GyhzGw, {
            user: A.toString()
          })
        }), (0, i.jsx)(u.A, {
          className: j.Tc,
          verified: A.isVerifiedBot()
        })]
      }), function(e, t, n, r) {
        let a = [],
          o = [];
        for (let e of m.Q) l.zy(r, e) ? a.push(e) : o.push(e);
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(s.cGx, {
            className: j.yF
          }), n.length > 0 ? (0, i.jsx)(s.D0$, {
            label: x.intl.format(x.t.PCs0oo, {
              numRoles: n.length
            }),
            children: (0, i.jsx)(c.Ay, {
              className: j.pf,
              user: e,
              guild: t,
              userRoleIds: n,
              wrap: false,
              readOnly: true
            })
          }) : null, a.length > 0 || o.length > 0 ? (0, i.jsx)(d.A, {
            grantedPermissions: a,
            grantedPermissionsHeader: x.intl.string(x.t["hA4+su"]),
            disabledPermissions: o,
            disabledPermissionsHeader: x.intl.string(x.t["/rEZ2i"])
          }) : null]
        })
      }(A, n, null != (t = null == v ? true : v.roles) ? t : [], T)]
    })
  })
}