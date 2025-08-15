/** Chunk was on web.js **/
/** chunk id: 668185, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk149765 = require("./149765.js"),
  Chunk178940 = require("./178940.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk422559 = require("./422559.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk979995 = require("./979995.js");

function f(e) {
  let {
    application: t,
    permissions: n,
    deniedPermissions: f,
    onPermissionsChange: _,
    guild: p
  } = e, h = i.useMemo(() => a.U_(p.permissions), [p.permissions]);
  i.useEffect(() => {
    _(false, a.hX(n, h))
  }, [h, _, n]);
  let m = c.VY.filter(e => a.e$(n, e)),
    g = m.filter(e => !a.e$(h, e)).map(e => {
      let t = (0, c.wt)(e),
        n = !a.e$(f, e);
      return (0, r.jsx)("li", {
        className: d.permission,
        children: (0, r.jsx)(o.X, {
          value: n,
          onChange: (t, n) => _(n, e),
          type: o.X.Types.INVERTED,
          children: (0, r.jsx)(s.x, {
            variant: "text-md/normal",
            children: t
          })
        })
      }, String(e))
    }),
    E = m.filter(e => a.e$(h, e)).map(e => {
      let t = (0, c.wt)(e);
      return (0, r.jsxs)("li", {
        className: d.permission,
        children: [(0, r.jsx)("div", {
          className: d.disabledPermissionIcon,
          children: (0, r.jsx)(l.Dio, {
            size: "md",
            color: "currentColor",
            className: d.icon
          })
        }), (0, r.jsx)(s.x, {
          variant: "text-md/normal",
          children: t
        })]
      }, String(e))
    });
  return (0, r.jsxs)("div", {
    className: d.botPermissions,
    children: [g.length > 0 ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.x, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: u.intl.format(u.t.sOaT2t, {
          applicationName: t.name,
          guildName: p.name
        })
      }), (0, r.jsx)("ul", {
        className: d.permissionsList,
        children: g
      })]
    }) : null, E.length > 0 ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.x, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: u.intl.format(u.t.fsOkFx, {
          applicationName: t.name
        })
      }), (0, r.jsx)("ul", {
        className: d.permissionsList,
        children: E
      })]
    }) : null]
  })
}