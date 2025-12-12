/** Chunk was on web.js **/
/** chunk id: 668185, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk149765 = require("./149765.js"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk422559 = require("./422559.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk979995 = require("./979995.js");

function d(e) {
  let {
    application: t,
    permissions: n,
    deniedPermissions: d,
    onPermissionsChange: f,
    guild: p
  } = e, _ = i.useMemo(() => o.U_(p.permissions), [p.permissions]);
  i.useEffect(() => {
    f(false, o.hX(n, _))
  }, [_, f, n]);
  let m = l.VY.filter(e => o.e$(n, e)),
    h = m.filter(e => !o.e$(_, e)).map(e => {
      let t = (0, l.wt)(e),
        n = !o.e$(d, e);
      return (0, r.jsx)("li", {
        className: u.permission,
        children: (0, r.jsx)(s.Checkbox, {
          checked: n,
          onChange: t => f(t, e),
          label: t
        })
      }, String(e))
    }),
    g = m.filter(e => o.e$(_, e)).map(e => {
      let t = (0, l.wt)(e);
      return (0, r.jsxs)("li", {
        className: u.permission,
        children: [(0, r.jsx)("div", {
          className: u.disabledPermissionIcon,
          children: (0, r.jsx)(s.Dio, {
            size: "md",
            color: "currentColor",
            className: u.icon
          })
        }), (0, r.jsx)(a.x, {
          variant: "text-md/normal",
          children: t
        })]
      }, String(e))
    });
  return (0, r.jsxs)("div", {
    className: u.botPermissions,
    children: [h.length > 0 ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(a.x, {
        variant: "text-sm/medium",
        color: "text-default",
        children: c.intl.format(c.t.sOaT2j, {
          applicationName: t.name,
          guildName: p.name
        })
      }), (0, r.jsx)("ul", {
        className: u.permissionsList,
        children: h
      })]
    }) : null, g.length > 0 ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(a.x, {
        variant: "text-sm/medium",
        color: "text-default",
        children: c.intl.format(c.t.fsOkF4, {
          applicationName: t.name
        })
      }), (0, r.jsx)("ul", {
        className: u.permissionsList,
        children: g
      })]
    }) : null]
  })
}