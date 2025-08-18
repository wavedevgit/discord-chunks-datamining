/** Chunk was on 91173 **/
/** chunk id: 260736, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk67390 = require("./67390.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk739566 = require("./739566.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk587091 = require("./587091.js");

function m(e) {
  let {
    compact: t,
    message: n,
    channel: m
  } = e, f = (0, o.ZP)(n), _ = (0, s.l)({
    user: n.author,
    channelId: n.channel_id,
    guildId: m.guild_id,
    messageId: n.id
  })(f), g = a.Z.getArticleURL(u.BhN.HD_STREAMING_POTION);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: p.parentContainer,
      children: (0, r.jsx)(c.Z, {
        iconNode: (0, r.jsx)(i.hh5, {
          size: "sm"
        }),
        timestamp: n.timestamp,
        compact: t,
        children: d.intl.format(d.t["u0qJ4+"], {
          actorName: f.nick,
          actorHook: _
        })
      })
    }), (0, r.jsxs)(i.P3F, {
      onClick: () => {
        window.open(a.Z.getArticleURL(u.BhN.HD_STREAMING_POTION), "_blank")
      },
      className: p.embed,
      children: [(0, r.jsx)(l.Z, {}), (0, r.jsxs)("div", {
        className: p.text,
        children: [(0, r.jsx)(i.Text, {
          color: "text-default",
          variant: "text-sm/semibold",
          className: p.title,
          children: d.intl.string(d.t["Fh/mk5"])
        }), (0, r.jsx)(i.Text, {
          color: "text-primary",
          variant: "text-xs/normal",
          children: d.intl.format(d.t["bmGF+f"], {
            helpCenterLink: g
          })
        })]
      })]
    })]
  })
}