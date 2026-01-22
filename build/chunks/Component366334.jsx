/** Chunk was on web.js **/
/** chunk id: 366334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk659612 = require("./659612.jsx"),
  Chunk898612 = require("./898612.jsx"),
  Chunk232492 = require("./232492.js"),
  Chunk53605 = require("./53605.js");

function d(e) {
  let {
    benefit: t,
    guildId: n
  } = e, i = (0, c.A)(n, t.ref_id), d = (0, r.jsx)(o.A, {
    guildId: n,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  }), f = null != i ? (0, r.jsx)(s.DUT, {
    className: u.__invalid_channelLink,
    onClick: i.navigateToChannel,
    "aria-label": i.ariaLabel,
    role: "link",
    children: (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "text-strong",
      className: a()(u.UU, u.F$),
      children: (0, l.A)(t)
    })
  }) : (0, r.jsx)(s.Text, {
    variant: "text-md/medium",
    color: "text-strong",
    className: u.UU,
    children: (0, l.A)(t)
  });
  return (0, r.jsxs)("div", {
    className: u.kL,
    children: [(0, r.jsxs)("div", {
      className: u.op,
      children: [f, (0, r.jsx)(s.Text, {
        color: "interactive-text-default",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, r.jsx)("div", {
      className: u.qq,
      children: d
    })]
  })
}