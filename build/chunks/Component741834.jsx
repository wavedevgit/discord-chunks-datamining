/** Chunk was on 9414 **/
/** chunk id: 741834, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk285173 = require("./285173.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk281773 = require("./281773.js");

function u(e) {
  var t;
  let {
    roles: u,
    guildId: m
  } = e, b = null != (t = u[0]) ? t : null, p = u.length - 1, g = r.useMemo(() => new Intl.NumberFormat(c.intl.currentLocale).format(p), [p]), f = r.useCallback(e => {
    e.stopPropagation(), (0, o.jW)(e, async () => {
      let {
        default: e
      } = await n.e("98314").then(n.bind(n, 229051));
      return () => (0, i.jsx)(e, {
        roles: u
      })
    })
  }, [u]);
  return 0 === u.length ? null : (0, i.jsxs)("div", {
    className: d.roleContainer,
    children: [null != b && (0, i.jsx)(s.Z, {
      className: d.firstRole,
      role: b,
      guildId: m
    }), p > 0 && (0, i.jsx)(a.P3F, {
      className: d.otherRoles,
      onClick: f,
      children: (0, i.jsx)(l.u, {
        text: c.intl.string(c.t.DY6n4q),
        children: (0, i.jsxs)(a.Text, {
          variant: "text-xs/medium",
          color: "text-strong",
          children: ["+", g]
        })
      })
    })]
  })
}