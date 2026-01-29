/** Chunk was on 1113 **/
/** chunk id: 436136, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk989095 = require("./989095.js"),
  Chunk868048 = require("./868048.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk709994 = require("./709994.js");

function u(e) {
  let {
    channel: t,
    clearUnreadsNotice: n
  } = e;
  return (0, r.jsxs)("div", {
    className: c.l,
    children: [(0, r.jsx)(i.A, {
      id: t.id
    }), (0, r.jsx)("div", {
      className: c.p,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        children: o.intl.format(o.t.P6Y2N1, {})
      })
    }), (0, r.jsx)(l.Button, {
      variant: "secondary",
      text: o.intl.string(o.t.KyUKhT),
      icon: l.ejX,
      size: "sm",
      onClick: () => {
        (0, s.A)(t.guild_id, t.id, a.vv.UNREADS_ONLY_MENTIONS), n()
      }
    })]
  })
}