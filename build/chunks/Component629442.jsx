/** Chunk was on web.js **/
/** chunk id: 629442, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk136722 = require("./136722.js"),
  Chunk571356 = require("./571356.js"),
  Chunk397927 = require("./397927.js"),
  Chunk376092 = require("./376092.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk967984 = require("./967984.js");

function d(e) {
  let {
    application: t,
    permissions: n,
    deniedPermissions: d,
    onPermissionsChange: f,
    guild: p
  } = e, _ = i.useMemo(() => a.B8(p.permissions), [p.permissions]);
  i.useEffect(() => {
    f(false, a.pb(n, _))
  }, [_, f, n]);
  let h = l.Q.filter(e => a.zy(n, e)),
    m = h.filter(e => !a.zy(_, e)).map(e => {
      let t = (0, l.hx)(e),
        n = !a.zy(d, e);
      return (0, r.jsx)("li", {
        className: u.EK,
        children: (0, r.jsx)(s.Checkbox, {
          checked: n,
          onChange: t => f(t, e),
          label: t
        })
      }, String(e))
    }),
    g = h.filter(e => a.zy(_, e)).map(e => {
      let t = (0, l.hx)(e);
      return (0, r.jsxs)("li", {
        className: u.EK,
        children: [(0, r.jsx)("div", {
          className: u.nW,
          children: (0, r.jsx)(s.PGe, {
            size: "md",
            color: "currentColor",
            className: u.Kk
          })
        }), (0, r.jsx)(o.E, {
          variant: "text-md/normal",
          children: t
        })]
      }, String(e))
    });
  return (0, r.jsxs)("div", {
    className: u.AS,
    children: [m.length > 0 ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(o.E, {
        variant: "text-sm/medium",
        color: "text-default",
        children: c.intl.format(c.t.sOaT2j, {
          applicationName: t.name,
          guildName: p.name
        })
      }), (0, r.jsx)("ul", {
        className: u.RH,
        children: m
      })]
    }) : null, g.length > 0 ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(o.E, {
        variant: "text-sm/medium",
        color: "text-default",
        children: c.intl.format(c.t.fsOkF4, {
          applicationName: t.name
        })
      }), (0, r.jsx)("ul", {
        className: u.RH,
        children: g
      })]
    }) : null]
  })
}