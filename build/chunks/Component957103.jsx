/** Chunk was on 21968 **/
/** chunk id: 957103, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk950072 = require("./950072.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk560927 = require("./560927.js");

function u(e) {
  var t;
  let {
    roles: u,
    guildId: p
  } = e, m = null != (t = u[0]) ? t : null, g = u.length - 1, b = r.useMemo(() => new Intl.NumberFormat(c.intl.currentLocale).format(g), [g]), f = r.useCallback(e => {
    e.stopPropagation(), (0, s.L3)(e, async () => {
      let {
        default: e
      } = await n.e("54526").then(n.bind(n, 551309));
      return () => (0, i.jsx)(e, {
        roles: u
      })
    })
  }, [u]);
  return 0 === u.length ? null : (0, i.jsxs)("div", {
    className: d.yk,
    children: [null != m && (0, i.jsx)(o.A, {
      className: d.Bc,
      role: m,
      guildId: p
    }), g > 0 && (0, i.jsx)(a.DUT, {
      className: d.yt,
      onClick: f,
      children: (0, i.jsx)(l.m, {
        text: c.intl.string(c.t.DY6n4q),
        children: (0, i.jsxs)(a.Text, {
          variant: "text-xs/medium",
          color: "text-strong",
          children: ["+", b]
        })
      })
    })]
  })
}