/** Chunk was on web.js **/
/** chunk id: 472243, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    maxCharacterCount: I,
    showRemainingCharsAfterCount: T,
    className: S
  } = e, A = (0, o.e7)([_.default], () => p.ZP.canUseIncreasedMessageLength(_.default.getCurrentUser())), C = (0, d.Z)(), N = null != I ? I : C, R = null != (y = null != T ? T : I) ? y : C / 10, P = v.length, D = null != O.upsellLongMessages && (null != P ? P : 0) > m.J6R && A, w = null != O.upsellLongMessages && !A, x = (null == (n = (0, f.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === g.Si.TIER_2, L = N - P, M = L > R, j = L < 0 && x, k = 0 === L ? E.intl.string(E.t.tU6YQ7) : L > 0 ? E.intl.formatToPlainString(E.t.qH8uFW, {
    count: L
  }) : E.intl.string(E.t.YSRIqa), {
    analyticsLocations: U
  } = (0, u.ZP)(c.Z.CHARACTER_COUNT);
  if (!(D && L >= 0 || !M || w && !M)) return null;
  let G = L >= 0;
  return (0, r.jsx)(u.Gt, {
    value: U,
    children: (0, r.jsxs)("div", {
      className: a()(S, b.characterCount),
      children: [(0, r.jsxs)("div", {
        className: b.flairContainer,
        children: [D && G ? (0, r.jsx)(s.u, {
          text: E.intl.formatToPlainString(E.t.vcvHa0, {
            maxLength: N
          }),
          position: "top",
          children: (0, r.jsx)(l.SrA, {
            size: "md",
            color: "currentColor",
            className: b.premiumFlair
          })
        }) : null, M || j ? null : (0, r.jsx)(s.u, {
          text: k,
          position: "top",
          children: (0, r.jsx)(l.Text, {
            variant: "text-sm/semibold",
            tabularNumbers: true,
            "aria-hidden": true,
            color: G ? "text-default" : "text-danger",
            children: L
          })
        })]
      }), (0, r.jsx)(l.nn4, {
        children: E.intl.format(E.t.qH8uFW, {
          count: L
        })
      }), w && !M ? (0, r.jsx)(h.Z, {
        className: b.upsell,
        iconOnly: (null == (i = O.upsellLongMessages) ? true : i.iconOnly) || false,
        remaining: L
      }) : null]
    })
  })
}