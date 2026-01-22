/** Chunk was on 21738 **/
/** chunk id: 6939, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk51271 = require("./51271.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk400783 = require("./400783.js");
let c = function(e) {
  let {
    onWithdrawApplication: t,
    guild: n = null
  } = e, c = null == n ? true : n.id;
  return i.useEffect(() => {
    null != c && (0, a.NC)(c)
  }, [c]), (0, r.jsxs)("div", {
    className: o.EL,
    children: [(0, r.jsx)("div", {
      className: o.P0,
      children: (0, r.jsx)(l.Qfk, {
        size: "md",
        color: l.LU0.colors.INTERACTIVE_TEXT_ACTIVE
      })
    }), (0, r.jsxs)("div", {
      className: o.bc,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: (null == n ? true : n.name) != null ? s.intl.formatToPlainString(s.t["0Qlu/6"], {
          guildName: n.name
        }) : s.intl.string(s.t["5iLvSx"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "text-default",
        children: s.intl.string(s.t.FdsK4h)
      })]
    }), (0, r.jsx)(l.Button, {
      fullWidth: true,
      onClick: t,
      variant: "critical-primary",
      size: "md",
      text: s.intl.string(s.t.g9tK0o)
    })]
  })
}