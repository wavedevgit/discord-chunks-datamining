/** Chunk was on web.js **/
/** chunk id: 257108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
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
  Chunk234419 = require("./234419.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk48862 = require("./48862.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk587590 = require("./587590.js");

function b(e) {
  var t, n, i, b;
  let {
    type: O,
    textValue: v,
    maxCharacterCount: A,
    showRemainingCharsAfterCount: I,
    className: S
  } = e, T = (0, s.bG)([p.default], () => _.Ay.canUseIncreasedMessageLength(p.default.getCurrentUser())), C = (0, d.A)(), N = null != A ? A : C, R = null != (t = null != I ? I : A) ? t : C / 10, w = v.length, P = null != O.upsellLongMessages && (null != w ? w : 0) > m.uvi && T, D = null != O.upsellLongMessages && !T, x = (null == (i = (0, f.V)()) || null == (n = i.subscription_trial) ? true : n.sku_id) === g.pe.TIER_2, L = N - w, j = L > R, M = L < 0 && x, k = 0 === L ? E.intl.string(E.t.tU6YQ7) : L > 0 ? E.intl.formatToPlainString(E.t.qH8uFW, {
    count: L
  }) : E.intl.string(E.t.YSRIqa), {
    analyticsLocations: U
  } = (0, u.Ay)(c.A.CHARACTER_COUNT);
  if (!(P && L >= 0 || !j || D && !j)) return null;
  let G = L >= 0;
  return (0, r.jsx)(u.f5, {
    value: U,
    children: (0, r.jsxs)("div", {
      className: a()(S, y.Dq),
      children: [(0, r.jsxs)("div", {
        className: y.SW,
        children: [P && G ? (0, r.jsx)(o.m, {
          text: E.intl.formatToPlainString(E.t.vcvHa0, {
            maxLength: N
          }),
          position: "top",
          children: (0, r.jsx)(l.tvc, {
            size: "md",
            color: "currentColor",
            className: y.y
          })
        }) : null, j || M ? null : (0, r.jsx)(o.m, {
          text: k,
          position: "top",
          children: (0, r.jsx)(l.Text, {
            variant: "text-sm/semibold",
            tabularNumbers: true,
            "aria-hidden": true,
            color: G ? "text-default" : "text-feedback-critical",
            children: L
          })
        })]
      }), (0, r.jsx)(l.AC4, {
        children: E.intl.format(E.t.qH8uFW, {
          count: L
        })
      }), D && !j ? (0, r.jsx)(h.A, {
        className: y.UX,
        iconOnly: (null == (b = O.upsellLongMessages) ? true : b.iconOnly) || false,
        remaining: L
      }) : null]
    })
  })
}