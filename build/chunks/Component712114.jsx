/** Chunk was on web.js **/
/** chunk id: 712114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk536442 = require("./536442.js"),
  Chunk39604 = require("./39604.js"),
  Chunk176127 = require("./176127.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk105882 = require("./105882.js");

function _(e) {
  let {
    onOpenClips: t,
    lastClipsSession: n,
    closePopout: _
  } = e;

  function p() {
    (0, l.Kw)(l.v6.CLIPS_CHANNEL_ATTACH_REMINDER), _()
  }
  return (i.useEffect(() => () => {
    (0, c.eL)()
  }, []), (0, s.Z)({
    type: o.ImpressionTypes.VIEW,
    name: o.ImpressionNames.HOTSPOT,
    properties: {
      hotspot_location: l.v6.CLIPS_CHANNEL_ATTACH_REMINDER
    }
  }), null == n) ? null : (0, r.jsxs)("div", {
    className: f.recentClipsPopout,
    children: [(0, r.jsx)("div", {
      className: f.thumbnailStackContainer,
      children: (0, r.jsx)(u.Z, {})
    }), (0, r.jsx)(a.X6q, {
      className: f.header,
      color: "header-primary",
      variant: "heading-md/extrabold",
      children: d.intl.format(d.t["+qxkzM"], {
        count: n.newClipIds.length
      })
    }), (0, r.jsx)(a.Text, {
      color: "text-default",
      className: f.__invalid_content,
      variant: "text-sm/medium",
      children: d.intl.format(d.t["7XX0/f"], {
        applicationName: n.applicationName
      })
    }), (0, r.jsx)("div", {
      className: f.buttonsContainer,
      children: (0, r.jsxs)(a.hE2, {
        children: [(0, r.jsx)(a.zxk, {
          variant: "secondary",
          text: d.intl.string(d.t["7r5Z19"]),
          onClick: p
        }), (0, r.jsx)(a.zxk, {
          variant: "primary",
          text: d.intl.string(d.t.md4qKy),
          onClick: t
        })]
      })
    })]
  })
}