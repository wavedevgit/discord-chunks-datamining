/** Chunk was on web.js **/
/** chunk id: 226884, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk58149 = require("./58149.js"),
  Chunk652176 = require("./652176.jsx"),
  Chunk448290 = require("./448290.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk360158 = require("./360158.js");
let h = function(e) {
  let {
    guild: t,
    message: n,
    onClose: h
  } = e, m = c.A.getChannel(u.A.getChannelId(t.id));
  if ((0, a.Ay)(() => {
      d.default.track(f.HAw.OPEN_POPOUT, {
        type: "New Member Badge Popout",
        guild_id: t.id,
        channel_id: null == m ? true : m.id
      })
    }), null == m) return null;
  let g = () => {
    s.Ay.trackWithMetadata(f.HAw.NEW_MEMBER_MENTION_CTA_CLICKED, {
      target_user_id: n.author.id
    }), h(), (0, l.C)(n.author, m.id)
  };
  return (0, r.jsx)(o.Uq, {
    className: _.cc,
    children: (0, r.jsxs)("div", {
      className: _.jC,
      children: [(0, r.jsxs)("div", {
        className: _.rb,
        children: [(0, r.jsx)("div", {
          className: _.zc,
          children: (0, r.jsx)(i.NVf, {
            size: "custom",
            color: "currentColor",
            width: 40,
            height: 40
          })
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(i.Heading, {
            variant: "heading-md/semibold",
            className: _.wx,
            children: p.intl.string(p.t["v/OYd2"])
          }), (0, r.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: p.intl.string(p.t.Z85MlD)
          })]
        })]
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: _.lI,
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