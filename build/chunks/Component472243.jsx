/** Chunk was on web.js **/
/** chunk id: 472243, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk849522 = require("./849522.js"),
  Chunk639119 = require("./639119.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk694320 = require("./694320.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk781990 = require("./781990.js");

function y(e) {
  var t, n, i, y;
  let {
    type: O,
    textValue: v,
    maxCharacterCount: S,
    showRemainingCharsAfterCount: I,
    className: T
  } = e, C = (0, o.e7)([p.default], () => _.ZP.canUseIncreasedMessageLength(p.default.getCurrentUser())), A = (0, d.Z)(), N = null != S ? S : A, P = null != (y = null != I ? I : S) ? y : A / 10, R = v.length, w = null != O.upsellLongMessages && (null != R ? R : 0) > h.J6R && C, D = null != O.upsellLongMessages && !C, x = (null == (n = (0, f.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === g.Si.TIER_2, L = N - R, j = L > P, M = L < 0 && x, k = 0 === L ? E.intl.string(E.t.tU6YQ7) : L > 0 ? E.intl.formatToPlainString(E.t.qH8uFW, {
    count: L
  }) : E.intl.string(E.t.YSRIqa), {
    analyticsLocations: U
  } = (0, u.ZP)(c.Z.CHARACTER_COUNT);
  if (!(w && L >= 0 || !j || D && !j)) return null;
  let G = L >= 0;
  return (0, r.jsx)(u.Gt, {
    value: U,
    children: (0, r.jsxs)("div", {
      className: a()(T, b.characterCount),
      children: [(0, r.jsxs)("div", {
        className: b.flairContainer,
        children: [w && G ? (0, r.jsx)(s.u, {
          text: E.intl.formatToPlainString(E.t.vcvHa0, {
            maxLength: N
          }),
          position: "top",
          children: (0, r.jsx)(l.SrA, {
            size: "md",
            color: "currentColor",
            className: b.premiumFlair
          })
        }) : null, j || M ? null : (0, r.jsx)(s.u, {
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
      }), (0, r.jsx)(l.nn4, {
        children: E.intl.format(E.t.qH8uFW, {
          count: L
        })
      }), D && !j ? (0, r.jsx)(m.Z, {
        className: b.upsell,
        iconOnly: (null == (i = O.upsellLongMessages) ? true : i.iconOnly) || false,
        remaining: L
      }) : null]
    })
  })
}