/** Chunk was on web.js **/
/** chunk id: 441110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
let m = function(e) {
  let {
    guild: t,
    message: n,
    onClose: m
  } = e, h = c.Z.getChannel(u.Z.getChannelId(t.id));
  if ((0, a.ZP)(() => {
      d.default.track(f.rMx.OPEN_POPOUT, {
        type: "New Member Badge Popout",
        guild_id: t.id,
        channel_id: null == h ? true : h.id
      })
    }), null == h) return null;
  let g = () => {
    o.ZP.trackWithMetadata(f.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, {
      target_user_id: n.author.id
    }), m(), (0, l.q)(n.author, h.id)
  };
  return (0, r.jsx)(s.W_, {
    className: _.messagePopoutContent,
    children: (0, r.jsxs)("div", {
      className: _.popoutContainer,
      children: [(0, r.jsxs)("div", {
        className: _.mainContent,
        children: [(0, r.jsx)("div", {
          className: _.iconContainer,
          children: (0, r.jsx)(i.hg2, {
            size: "custom",
            color: "currentColor",
            width: 40,
            height: 40
          })
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(i.Heading, {
            variant: "heading-md/semibold",
            className: _.header,
            children: p.intl.string(p.t["v/OYd2"])
          }), (0, r.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: p.intl.string(p.t.Z85MlD)
          })]
        })]
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: _.ctaButton,
        children: (0, r.jsx)(i.Button, {
          variant: "primary",
          size: "sm",
          text: p.intl.format(p.t["+xsVS6"], {
            username: n.author.username
          }),
          fullWidth: true,
          onClick: g
        })
      })]
    })
  })
}