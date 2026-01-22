/** Chunk was on web.js **/
/** chunk id: 150099, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk857182 = require("./857182.js"),
  Chunk572957 = require("./572957.js"),
  Chunk419056 = require("./419056.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk420779 = require("./420779.js");
let f = e => {
  let {
    channelId: t,
    messageId: n
  } = e, f = (0, a.bG)([l.A], () => l.A.shouldShowBump(n), [n]), p = i.useCallback(() => {
    o.A.dismissPublishBump(n), (0, c.A)(t, n)
  }, [t, n]), _ = i.useCallback(() => {
    o.A.dismissPublishBump(n)
  }, [n]), h = i.useCallback(() => {
    o.A.permanentlyHidePublishBump(t)
  }, [t]);
  return f ? (0, r.jsxs)("div", {
    className: d.kL,
    children: [(0, r.jsxs)("div", {
      className: d.mp,
      children: [(0, r.jsx)(s.koX, {
        size: "xs",
        color: "currentColor",
        className: d.Kk
      }), (0, r.jsx)(s.Heading, {
        variant: "heading-sm/normal",
        className: d.dS,
        children: u.intl.string(u.t.hasZoU)
      }), (0, r.jsx)(s.Text, {
        color: "text-brand",
        className: d.mk,
        variant: "text-sm/normal",
        children: (0, r.jsx)(s.DUT, {
          onClick: p,
          children: u.intl.string(u.t.MFGE51)
        })
      }), (0, r.jsx)(s.DUT, {
        onClick: _,
        children: (0, r.jsx)(s.aXh, {
          size: "xs",
          color: "currentColor",
          className: d.ut
        })
      })]
    }), (0, r.jsx)(s.Text, {
      color: "text-muted",
      className: d.qx,
      variant: "text-sm/normal",
      children: (0, r.jsx)(s.DUT, {
        onClick: h,
        children: u.intl.string(u.t.efSkDm)
      })
    })]
  }) : null
}