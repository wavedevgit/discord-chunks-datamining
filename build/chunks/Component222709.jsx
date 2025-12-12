/** Chunk was on web.js **/
/** chunk id: 222709, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk528963 = require("./528963.js"),
  Chunk212342 = require("./212342.js"),
  Chunk742828 = require("./742828.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk785188 = require("./785188.js");
let f = e => {
  let {
    channelId: t,
    messageId: n
  } = e, f = (0, o.e7)([l.Z], () => l.Z.shouldShowBump(n), [n]), p = i.useCallback(() => {
    s.Z.dismissPublishBump(n), (0, c.Z)(t, n)
  }, [t, n]), _ = i.useCallback(() => {
    s.Z.dismissPublishBump(n)
  }, [n]), m = i.useCallback(() => {
    s.Z.permanentlyHidePublishBump(t)
  }, [t]);
  return f ? (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsxs)("div", {
      className: d.bumpBox,
      children: [(0, r.jsx)(a.MqZ, {
        size: "xs",
        color: "currentColor",
        className: d.icon
      }), (0, r.jsx)(a.Heading, {
        variant: "heading-sm/normal",
        className: d.tagline,
        children: u.intl.string(u.t.hasZoU)
      }), (0, r.jsx)(a.Text, {
        color: "text-brand",
        className: d.publish,
        variant: "text-sm/normal",
        children: (0, r.jsx)(a.P3F, {
          onClick: p,
          children: u.intl.string(u.t.MFGE51)
        })
      }), (0, r.jsx)(a.P3F, {
        onClick: _,
        children: (0, r.jsx)(a.k$p, {
          size: "xs",
          color: "currentColor",
          className: d.closeIcon
        })
      })]
    }), (0, r.jsx)(a.Text, {
      color: "text-muted",
      className: d.hidePermanently,
      variant: "text-sm/normal",
      children: (0, r.jsx)(a.P3F, {
        onClick: m,
        children: u.intl.string(u.t.efSkDm)
      })
    })]
  }) : null
}