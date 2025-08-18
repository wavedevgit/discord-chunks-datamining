/** Chunk was on 91173 **/
/** chunk id: 222709, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk528963 = require("./528963.js"),
  Chunk143740 = require("./143740.jsx"),
  Chunk212342 = require("./212342.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk785188 = require("./785188.js");
let p = e => {
  let {
    channelId: t,
    messageId: n
  } = e, p = (0, l.e7)([c.Z], () => c.Z.shouldShowBump(n), [n]), m = i.useCallback(() => {
    a.Z.dismissPublishBump(n), (0, s.Z)(t, n)
  }, [t, n]), f = i.useCallback(() => {
    a.Z.dismissPublishBump(n)
  }, [n]), g = i.useCallback(() => {
    a.Z.permanentlyHidePublishBump(t)
  }, [t]);
  return p ? (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsxs)("div", {
      className: d.bumpBox,
      children: [(0, r.jsx)(o.MqZ, {
        size: "xs",
        color: "currentColor",
        className: d.icon
      }), (0, r.jsx)(o.X6q, {
        variant: "heading-sm/normal",
        className: d.tagline,
        children: u.intl.string(u.t.hasZoa)
      }), (0, r.jsx)(o.Text, {
        color: "text-brand",
        className: d.publish,
        variant: "text-sm/normal",
        children: (0, r.jsx)(o.P3F, {
          onClick: m,
          children: u.intl.string(u.t["MFGE5+"])
        })
      }), (0, r.jsx)(o.P3F, {
        onClick: f,
        children: (0, r.jsx)(o.k$p, {
          size: "xs",
          color: "currentColor",
          className: d.closeIcon
        })
      })]
    }), (0, r.jsx)(o.Text, {
      color: "text-muted",
      className: d.hidePermanently,
      variant: "text-sm/normal",
      children: (0, r.jsx)(o.P3F, {
        onClick: g,
        children: u.intl.string(u.t.efSkDg)
      })
    })]
  }) : null
}