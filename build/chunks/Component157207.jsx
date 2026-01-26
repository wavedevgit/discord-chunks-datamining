/** Chunk was on 67564 **/
/** chunk id: 157207, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk397927 = require("./397927.js"),
  Chunk139286 = require("./139286.js"),
  Chunk450510 = require("./450510.js"),
  Chunk399925 = require("./399925.js"),
  Chunk237607 = require("./237607.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk305711 = require("./305711.js");

function h(e) {
  let {
    onOpenClips: t,
    lastClipsSession: n,
    closePopout: h
  } = e;
  return (l.useEffect(() => () => {
    (0, c.jA)()
  }, []), (0, a.A)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.HOTSPOT,
    properties: {
      hotspot_location: o._2.CLIPS_CHANNEL_ATTACH_REMINDER
    }
  }), null == n) ? null : (0, r.jsxs)("div", {
    className: p.WG,
    children: [(0, r.jsx)("div", {
      className: p.Yt,
      children: (0, r.jsx)(u.A, {})
    }), (0, r.jsx)(s.Heading, {
      className: p.wx,
      color: "text-strong",
      variant: "heading-md/extrabold",
      children: d.intl.format(d.t["+qxkzC"], {
        count: n.newClipIds.length
      })
    }), (0, r.jsx)(s.Text, {
      color: "text-default",
      className: p.__invalid_content,
      variant: "text-sm/medium",
      children: d.intl.format(d.t["7XX0/X"], {
        applicationName: n.applicationName
      })
    }), (0, r.jsx)("div", {
      className: p.NC,
      children: (0, r.jsxs)(s.ButtonGroup, {
        children: [(0, r.jsx)(s.Button, {
          variant: "secondary",
          text: d.intl.string(d.t["7r5Z19"]),
          onClick: function() {
            (0, o.sF)(o._2.CLIPS_CHANNEL_ATTACH_REMINDER), h()
          }
        }), (0, r.jsx)(s.Button, {
          variant: "primary",
          text: d.intl.string(d.t.md4qKz),
          onClick: t
        })]
      })
    })]
  })
}