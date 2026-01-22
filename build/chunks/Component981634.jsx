/** Chunk was on 47841 **/
/** chunk id: 981634, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk709066 = require("./709066.jsx"),
  Chunk351906 = require("./351906.js"),
  Chunk89200 = require("./89200.js");

function u(e) {
  let {
    className: t,
    avatarURL: n,
    name: i,
    bot: u,
    verifiedBot: f,
    userTag: g
  } = e, b = (0, s.bG)([o.A], () => o.A.hidePersonalInformation);
  return (0, r.jsxs)("div", {
    className: l()(d.kL, t),
    children: [(0, r.jsx)(a.euF, {
      className: d.my,
      src: n,
      size: a._3J.SIZE_24,
      "aria-label": i
    }), (0, r.jsxs)("div", {
      className: d.FS,
      children: [(0, r.jsx)(a.Text, {
        tag: "span",
        className: d.UU,
        color: "text-strong",
        variant: "text-sm/semibold",
        children: i
      }), u ? (0, r.jsx)(c.A, {
        className: d.AO,
        verified: f
      }) : null, b ? null : (0, r.jsx)(a.Text, {
        tag: "span",
        color: "interactive-text-default",
        className: d.a1,
        variant: "text-sm/normal",
        children: g
      })]
    })]
  })
}