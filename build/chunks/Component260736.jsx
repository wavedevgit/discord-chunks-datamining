/** Chunk was on web.js **/
/** chunk id: 260736, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk222423 = require("./222423.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk739566 = require("./739566.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk215130 = require("./215130.js");

function p(e) {
  let {
    compact: t,
    message: n,
    channel: p
  } = e, _ = (0, s.ZP)(n), m = (0, l.l)({
    user: n.author,
    channelId: n.channel_id,
    guildId: p.guild_id,
    messageId: n.id
  })(_), h = o.Z.getArticleURL(u.BhN.HD_STREAMING_POTION);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: f.parentContainer,
      children: (0, r.jsx)(c.Z, {
        iconNode: (0, r.jsx)(i.hh5, {
          size: "sm"
        }),
        timestamp: n.timestamp,
        compact: t,
        children: d.intl.format(d.t.u0qJ4z, {
          actorName: _.nick,
          actorHook: m
        })
      })
    }), (0, r.jsxs)(i.P3F, {
      onClick: () => {
        window.open(o.Z.getArticleURL(u.BhN.HD_STREAMING_POTION), "_blank")
      },
      className: f.embed,
      children: [(0, r.jsx)(a.Z, {}), (0, r.jsxs)("div", {
        className: f.text,
        children: [(0, r.jsx)(i.Text, {
          color: "text-default",
          variant: "text-sm/semibold",
          className: f.title,
          children: d.intl.string(d.t["Fh/mk/"])
        }), (0, r.jsx)(i.Text, {
          color: "text-strong",
          variant: "text-xs/normal",
          children: d.intl.format(d.t["bmGF+V"], {
            helpCenterLink: h
          })
        })]
      })]
    })]
  })
}