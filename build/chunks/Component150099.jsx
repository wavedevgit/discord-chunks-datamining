/** Chunk was on 9753 **/
/** chunk id: 150099, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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
let p = e => {
  let {
    channelId: t,
    messageId: n
  } = e, p = (0, l.bG)([o.A], () => o.A.shouldShowBump(n), [n]), m = i.useCallback(() => {
    s.A.dismissPublishBump(n), (0, c.A)(t, n)
  }, [t, n]), f = i.useCallback(() => {
    s.A.dismissPublishBump(n)
  }, [n]), g = i.useCallback(() => {
    s.A.permanentlyHidePublishBump(t)
  }, [t]);
  return p ? (0, r.jsxs)("div", {
    className: d.kL,
    children: [(0, r.jsxs)("div", {
      className: d.mp,
      children: [(0, r.jsx)(a.koX, {
        size: "xs",
        color: "currentColor",
        className: d.Kk
      }), (0, r.jsx)(a.Heading, {
        variant: "heading-sm/normal",
        className: d.dS,
        children: u.intl.string(u.t.hasZoU)
      }), (0, r.jsx)(a.Text, {
        color: "text-brand",
        className: d.mk,
        variant: "text-sm/normal",
        children: (0, r.jsx)(a.DUT, {
          onClick: m,
          children: u.intl.string(u.t.MFGE51)
        })
      }), (0, r.jsx)(a.DUT, {
        onClick: f,
        children: (0, r.jsx)(a.aXh, {
          size: "xs",
          color: "currentColor",
          className: d.ut
        })
      })]
    }), (0, r.jsx)(a.Text, {
      color: "text-muted",
      className: d.qx,
      variant: "text-sm/normal",
      children: (0, r.jsx)(a.DUT, {
        onClick: g,
        children: u.intl.string(u.t.efSkDm)
      })
    })]
  }) : null
}