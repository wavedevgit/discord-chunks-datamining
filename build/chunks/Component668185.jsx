/** Chunk was on web.js **/
/** chunk id: 668185, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk149765 = require("./149765.js"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk422559 = require("./422559.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk348061 = require("./348061.js");

function d(e) {
  let {
    application: t,
    permissions: n,
    deniedPermissions: d,
    onPermissionsChange: f,
    guild: _
  } = e, p = i.useMemo(() => a.U_(_.permissions), [_.permissions]);
  i.useEffect(() => {
    f(false, a.hX(n, p))
  }, [p, f, n]);
  let h = l.VY.filter(e => a.e$(n, e)),
    m = h.filter(e => !a.e$(p, e)).map(e => {
      let t = (0, l.wt)(e),
        n = !a.e$(d, e);
      return (0, r.jsx)("li", {
        className: u.permission,
        children: (0, r.jsx)(s.Checkbox, {
          checked: n,
          onChange: t => f(t, e),
          label: t
        })
      }, String(e))
    }),
    g = h.filter(e => a.e$(p, e)).map(e => {
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
        }), (0, r.jsx)(o.x, {
          variant: "text-md/normal",
          children: t
        })]
      }, String(e))
    });
  return (0, r.jsxs)("div", {
    className: u.botPermissions,
    children: [m.length > 0 ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(o.x, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: c.intl.format(c.t.sOaT2j, {
          applicationName: t.name,
          guildName: _.name
        })
      }), (0, r.jsx)("ul", {
        className: u.permissionsList,
        children: m
      })]
    }) : null, g.length > 0 ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(o.x, {
        variant: "text-sm/medium",
        color: "header-secondary",
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