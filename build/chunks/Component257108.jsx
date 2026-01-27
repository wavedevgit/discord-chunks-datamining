/** Chunk was on web.js **/
/** chunk id: 257108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk135621 = require("./135621.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk48862 = require("./48862.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk587590 = require("./587590.js");

function E(e) {
  var t, n;
  let {
    type: i,
    textValue: E,
    maxCharacterCount: y,
    showRemainingCharsAfterCount: b,
    className: O
  } = e, v = (0, o.bG)([f.default], () => p.Ay.canUseIncreasedMessageLength(f.default.getCurrentUser())), A = (0, d.A)(), I = null != y ? y : A, S = null != (t = null != b ? b : y) ? t : A / 10, T = E.length, C = null != i.upsellLongMessages && (null != T ? T : 0) > h.uvi && v, N = null != i.upsellLongMessages && !v, w = I - T, R = w > S, P = 0 === w ? m.intl.string(m.t.tU6YQ7) : w > 0 ? m.intl.formatToPlainString(m.t.qH8uFW, {
    count: w
  }) : m.intl.string(m.t.YSRIqa), {
    analyticsLocations: D
  } = (0, u.Ay)(c.A.CHARACTER_COUNT);
  if (!(C && w >= 0 || !R || N && !R)) return null;
  let L = w >= 0;
  return (0, r.jsx)(u.f5, {
    value: D,
    children: (0, r.jsxs)("div", {
      className: a()(O, g.Dq),
      children: [(0, r.jsxs)("div", {
        className: g.SW,
        children: [C && L ? (0, r.jsx)(s.m, {
          text: m.intl.formatToPlainString(m.t.vcvHa0, {
            maxLength: I
          }),
          position: "top",
          children: (0, r.jsx)(l.tvc, {
            size: "md",
            color: "currentColor",
            className: g.y
          })
        }) : null, R ? null : (0, r.jsx)(s.m, {
          text: P,
          position: "top",
          children: (0, r.jsx)(l.Text, {
            variant: "text-sm/semibold",
            tabularNumbers: true,
            "aria-hidden": true,
            color: L ? "text-default" : "text-feedback-critical",
            children: w
          })
        })]
      }), (0, r.jsx)(l.AC4, {
        children: m.intl.format(m.t.qH8uFW, {
          count: w
        })
      }), N && !R ? (0, r.jsx)(_.A, {
        className: g.UX,
        iconOnly: (null == (n = i.upsellLongMessages) ? true : n.iconOnly) || false,
        remaining: w
      }) : null]
    })
  })
}