/** Chunk was on 31978 **/
/** chunk id: 441110, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk367907 = require("./367907.js"),
  Chunk524444 = require("./524444.jsx"),
  Chunk297047 = require("./297047.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk829424 = require("./829424.js");
let f = function(e) {
  let {
    guild: t,
    message: n,
    onClose: f
  } = e, b = c.Z.getChannel(u.Z.getChannelId(t.id));
  return ((0, o.ZP)(() => {
    d.default.track(p.rMx.OPEN_POPOUT, {
      type: "New Member Badge Popout",
      guild_id: t.id,
      channel_id: null == b ? true : b.id
    })
  }), null == b) ? null : (0, r.jsx)(a.W_, {
    className: g.messagePopoutContent,
    children: (0, r.jsxs)("div", {
      className: g.popoutContainer,
      children: [(0, r.jsxs)("div", {
        className: g.mainContent,
        children: [(0, r.jsx)("div", {
          className: g.iconContainer,
          children: (0, r.jsx)(l.hg2, {
            size: "custom",
            color: "currentColor",
            width: 40,
            height: 40
          })
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(l.X6q, {
            variant: "heading-md/semibold",
            className: g.header,
            children: m.intl.string(m.t["v/OYd3"])
          }), (0, r.jsx)(l.Text, {
            variant: "text-sm/normal",
            children: m.intl.string(m.t.Z85MlJ)
          })]
        })]
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: g.ctaButton,
        children: (0, r.jsx)(l.zxk, {
          variant: "primary",
          size: "sm",
          text: m.intl.format(m.t["+xsVS0"], {
            username: n.author.username
          }),
          fullWidth: true,
          onClick: () => {
            i.ZP.trackWithMetadata(p.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, {
              target_user_id: n.author.id
            }), f(), (0, s.q)(n.author, b.id)
          }
        })
      })]
    })
  })
}