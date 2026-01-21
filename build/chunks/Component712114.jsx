/** Chunk was on 82124 **/
/** chunk id: 712114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk536442 = require("./536442.js"),
  Chunk39604 = require("./39604.js"),
  Chunk176127 = require("./176127.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk288048 = require("./288048.js");

function f(e) {
  let {
    onOpenClips: t,
    lastClipsSession: n,
    closePopout: f
  } = e;
  return (i.useEffect(() => () => {
    (0, c.eL)()
  }, []), (0, o.Z)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.HOTSPOT,
    properties: {
      hotspot_location: s.v6.CLIPS_CHANNEL_ATTACH_REMINDER
    }
  }), null == n) ? null : (0, r.jsxs)("div", {
    className: p.recentClipsPopout,
    children: [(0, r.jsx)("div", {
      className: p.thumbnailStackContainer,
      children: (0, r.jsx)(u.Z, {})
    }), (0, r.jsx)(a.Heading, {
      className: p.header,
      color: "text-strong",
      variant: "heading-md/extrabold",
      children: d.intl.format(d.t["+qxkzC"], {
        count: n.newClipIds.length
      })
    }), (0, r.jsx)(a.Text, {
      color: "text-default",
      className: p.__invalid_content,
      variant: "text-sm/medium",
      children: d.intl.format(d.t["7XX0/X"], {
        applicationName: n.applicationName
      })
    }), (0, r.jsx)("div", {
      className: p.buttonsContainer,
      children: (0, r.jsxs)(a.ButtonGroup, {
        children: [(0, r.jsx)(a.Button, {
          variant: "secondary",
          text: d.intl.string(d.t["7r5Z19"]),
          onClick: function() {
            (0, s.Kw)(s.v6.CLIPS_CHANNEL_ATTACH_REMINDER), f()
          }
        }), (0, r.jsx)(a.Button, {
          variant: "primary",
          text: d.intl.string(d.t.md4qKz),
          onClick: t
        })]
      })
    })]
  })
}