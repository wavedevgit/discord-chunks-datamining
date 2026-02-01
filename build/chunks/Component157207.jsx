/** Chunk was on 61344 **/
/** chunk id: 157207, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let {
    onOpenClips: t,
    lastClipsSession: n,
    closePopout: p
  } = e;
  return (r.useEffect(() => () => {
    (0, c.jA)()
  }, []), (0, s.A)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.HOTSPOT,
    properties: {
      hotspot_location: o._2.CLIPS_CHANNEL_ATTACH_REMINDER
    }
  }), null == n) ? null : (0, l.jsxs)("div", {
    className: h.WG,
    children: [(0, l.jsx)("div", {
      className: h.Yt,
      children: (0, l.jsx)(u.A, {})
    }), (0, l.jsx)(a.Heading, {
      className: h.wx,
      color: "text-strong",
      variant: "heading-md/extrabold",
      children: d.intl.format(d.t["+qxkzC"], {
        count: n.newClipIds.length
      })
    }), (0, l.jsx)(a.Text, {
      color: "text-default",
      className: h.__invalid_content,
      variant: "text-sm/medium",
      children: d.intl.format(d.t["7XX0/X"], {
        applicationName: n.applicationName
      })
    }), (0, l.jsx)("div", {
      className: h.NC,
      children: (0, l.jsxs)(a.ButtonGroup, {
        children: [(0, l.jsx)(a.Button, {
          variant: "secondary",
          text: d.intl.string(d.t["7r5Z19"]),
          onClick: function() {
            (0, o.sF)(o._2.CLIPS_CHANNEL_ATTACH_REMINDER), p()
          }
        }), (0, l.jsx)(a.Button, {
          variant: "primary",
          text: d.intl.string(d.t.md4qKz),
          onClick: t
        })]
      })
    })]
  })
}