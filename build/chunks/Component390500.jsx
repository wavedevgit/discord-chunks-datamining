/** Chunk was on 1272 **/
/** chunk id: 390500, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk926526 = require("./926526.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk871612 = require("./871612.js");
let c = function(e) {
  let {
    onWithdrawApplication: t,
    guild: n = null
  } = e, c = null == n ? true : n.id;
  return i.useEffect(() => {
    null != c && (0, a.Pq)(c)
  }, [c]), (0, r.jsxs)("div", {
    className: o.confirmation,
    children: [(0, r.jsx)("div", {
      className: o.iconWrapper,
      children: (0, r.jsx)(l.wGF, {
        size: "md",
        color: l.TVs.colors.INTERACTIVE_TEXT_ACTIVE
      })
    }), (0, r.jsxs)("div", {
      className: o.statusTextContainer,
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