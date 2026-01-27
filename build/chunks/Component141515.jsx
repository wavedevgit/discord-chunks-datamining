/** Chunk was on 41727 **/
/** chunk id: 141515, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk976860 = require("./976860.js"),
  Chunk652793 = require("./652793.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    guild: t,
    selected: n
  } = e;
  return (0, r.jsx)(s.G, {
    id: "home-tab-".concat(t.id),
    renderIcon: e => (0, r.jsx)(l.Zf8, {
      size: "md",
      color: "currentColor",
      className: e
    }),
    text: c.intl.string(c.t.VbpLyU),
    selected: n,
    onClick: function() {
      (0, i.pX)(a.BVt.CHANNEL(t.id, o.VV.GUILD_HOME))
    }
  })
}