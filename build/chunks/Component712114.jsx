/** Chunk was on 7891 **/
/** chunk id: 712114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  Chunk945202 = require("./945202.js");

function h(e) {
  let {
    onOpenClips: t,
    lastClipsSession: n,
    closePopout: h
  } = e;
  return (r.useEffect(() => () => {
    (0, c.eL)()
  }, []), (0, o.Z)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.HOTSPOT,
    properties: {
      hotspot_location: s.v6.CLIPS_CHANNEL_ATTACH_REMINDER
    }
  }), null == n) ? null : (0, i.jsxs)("div", {
    className: p.recentClipsPopout,
    children: [(0, i.jsx)("div", {
      className: p.thumbnailStackContainer,
      children: (0, i.jsx)(u.Z, {})
    }), (0, i.jsx)(a.Heading, {
      className: p.header,
      color: "header-primary",
      variant: "heading-md/extrabold",
      children: d.intl.format(d.t["+qxkzC"], {
        count: n.newClipIds.length
      })
    }), (0, i.jsx)(a.Text, {
      color: "text-default",
      className: p.__invalid_content,
      variant: "text-sm/medium",
      children: d.intl.format(d.t["7XX0/X"], {
        applicationName: n.applicationName
      })
    }), (0, i.jsx)("div", {
      className: p.buttonsContainer,
      children: (0, i.jsxs)(a.ButtonGroup, {
        children: [(0, i.jsx)(a.Button, {
          variant: "secondary",
          text: d.intl.string(d.t["7r5Z19"]),
          onClick: function() {
            (0, s.Kw)(s.v6.CLIPS_CHANNEL_ATTACH_REMINDER), h()
          }
        }), (0, i.jsx)(a.Button, {
          variant: "primary",
          text: d.intl.string(d.t.md4qKz),
          onClick: t
        })]
      })
    })]
  })
}