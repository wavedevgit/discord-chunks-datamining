/** Chunk was on 1272 **/
/** chunk id: 390500, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk926526 = require("./926526.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk394121 = require("./394121.js");
let c = function(e) {
  let {
    onWithdrawApplication: t,
    guild: n = null
  } = e, c = null == n ? true : n.id;
  return i.useEffect(() => {
    null != c && (0, a.Pq)(c)
  }, [c]), (0, r.jsxs)("div", {
    className: s.confirmation,
    children: [(0, r.jsx)("div", {
      className: s.iconWrapper,
      children: (0, r.jsx)(l.wGF, {
        size: "md",
        color: l.TVs.colors.INTERACTIVE_ACTIVE
      })
    }), (0, r.jsxs)("div", {
      className: s.statusTextContainer,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: (null == n ? true : n.name) != null ? o.intl.formatToPlainString(o.t["0Qlu/6"], {
          guildName: n.name
        }) : o.intl.string(o.t["5iLvSx"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: o.intl.string(o.t.FdsK4h)
      })]
    }), (0, r.jsx)(l.Button, {
      fullWidth: true,
      onClick: t,
      variant: "critical-primary",
      size: "md",
      text: o.intl.string(o.t.g9tK0o)
    })]
  })
}