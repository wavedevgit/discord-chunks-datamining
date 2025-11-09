/** Chunk was on web.js **/
/** chunk id: 441110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk112822 = require("./112822.js");
let h = function(e) {
  let {
    guild: t,
    message: n,
    onClose: h
  } = e, m = c.Z.getChannel(u.Z.getChannelId(t.id));
  if ((0, a.ZP)(() => {
      d.default.track(f.rMx.OPEN_POPOUT, {
        type: "New Member Badge Popout",
        guild_id: t.id,
        channel_id: null == m ? true : m.id
      })
    }), null == m) return null;
  let g = () => {
    o.ZP.trackWithMetadata(f.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, {
      target_user_id: n.author.id
    }), h(), (0, l.q)(n.author, m.id)
  };
  return (0, r.jsx)(s.W_, {
    className: p.messagePopoutContent,
    children: (0, r.jsxs)("div", {
      className: p.popoutContainer,
      children: [(0, r.jsxs)("div", {
        className: p.mainContent,
        children: [(0, r.jsx)("div", {
          className: p.iconContainer,
          children: (0, r.jsx)(i.hg2, {
            size: "custom",
            color: "currentColor",
            width: 40,
            height: 40
          })
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(i.Heading, {
            variant: "heading-md/semibold",
            className: p.header,
            children: _.intl.string(_.t["v/OYd2"])
          }), (0, r.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: _.intl.string(_.t.Z85MlD)
          })]
        })]
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: p.ctaButton,
        children: (0, r.jsx)(i.Button, {
          variant: "primary",
          size: "sm",
          text: _.intl.format(_.t["+xsVS6"], {
            username: n.author.username
          }),
          fullWidth: true,
          onClick: g
        })
      })]
    })
  })
}