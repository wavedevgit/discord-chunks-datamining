/** Chunk was on web.js **/
/** chunk id: 759625, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk659612 = require("./659612.jsx"),
  Chunk898612 = require("./898612.jsx"),
  Chunk232492 = require("./232492.js"),
  Chunk974105 = require("./974105.js");

function u(e) {
  let {
    benefit: t,
    guildId: n,
    onClick: u
  } = e, d = (0, l.A)(n, t.ref_id), f = () => {
    null == d || d.navigateToChannel(), u()
  }, p = (0, r.jsx)(o.A, {
    guildId: n,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  });
  return (0, r.jsxs)(i.DUT, {
    className: c.kL,
    onClick: f,
    "aria-label": null == d ? true : d.ariaLabel,
    role: "link",
    children: [(0, r.jsx)("div", {
      className: c.qq,
      children: p
    }), (0, r.jsxs)("div", {
      className: c.op,
      children: [(0, r.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        className: c.UU,
        children: (0, s.A)(t)
      }), (0, r.jsx)(i.Text, {
        color: "interactive-text-default",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, r.jsx)(a.A, {
      direction: a.A.Directions.RIGHT,
      className: c.OW
    })]
  })
}