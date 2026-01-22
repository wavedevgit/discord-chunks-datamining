/** Chunk was on 19632 **/
/** chunk id: 723028, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk521489 = require("./521489.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk247181 = require("./247181.jsx"),
  Chunk309777 = require("./309777.jsx"),
  Chunk429364 = require("./429364.jsx"),
  Chunk327742 = require("./327742.js");

function m(e) {
  let {
    clip: t,
    channelId: l,
    transitionState: m,
    onClose: h
  } = e, {
    analyticsLocations: p
  } = (0, s.Ay)(i.A.CLIPS_EDITOR);
  return (0, n.jsx)(s.f5, {
    value: p,
    children: (0, n.jsx)(r.N, {
      onClose: h,
      transitionState: m,
      trackingProps: {
        impression: {
          impressionName: a.ImpressionNames.CLIP_EDITOR_VIEWED
        }
      },
      children: (0, n.jsx)("div", {
        className: d.jT,
        children: (0, n.jsxs)(c.p, {
          clip: t,
          children: [(0, n.jsx)(o.A, {
            clip: t,
            transitionState: m
          }), (0, n.jsx)(u.A, {
            channelId: l,
            clip: t,
            onClose: h
          })]
        })
      })
    })
  })
}