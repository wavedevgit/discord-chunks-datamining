/** Chunk was on web.js **/
/** chunk id: 222709, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk528963 = require("./528963.js"),
  Chunk212342 = require("./212342.js"),
  Chunk887715 = require("./887715.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk617384 = require("./617384.js");
let f = e => {
  let {
    channelId: t,
    messageId: n
  } = e, f = (0, a.e7)([l.Z], () => l.Z.shouldShowBump(n), [n]), _ = i.useCallback(() => {
    s.Z.dismissPublishBump(n), (0, c.Z)(t, n)
  }, [t, n]), p = i.useCallback(() => {
    s.Z.dismissPublishBump(n)
  }, [n]), h = i.useCallback(() => {
    s.Z.permanentlyHidePublishBump(t)
  }, [t]);
  return f ? (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsxs)("div", {
      className: d.bumpBox,
      children: [(0, r.jsx)(o.MqZ, {
        size: "xs",
        color: "currentColor",
        className: d.icon
      }), (0, r.jsx)(o.Heading, {
        variant: "heading-sm/normal",
        className: d.tagline,
        children: u.intl.string(u.t.hasZoU)
      }), (0, r.jsx)(o.Text, {
        color: "text-brand",
        className: d.publish,
        variant: "text-sm/normal",
        children: (0, r.jsx)(o.P3F, {
          onClick: _,
          children: u.intl.string(u.t.MFGE51)
        })
      }), (0, r.jsx)(o.P3F, {
        onClick: p,
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
        onClick: h,
        children: u.intl.string(u.t.efSkDm)
      })
    })]
  }) : null
}