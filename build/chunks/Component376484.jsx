/** Chunk was on web.js **/
/** chunk id: 376484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk446411 = require("./446411.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk553385 = require("./553385.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk912849 = require("./912849.js");

function _(e) {
  let {
    message: t,
    channel: i,
    compact: s
  } = e, l = null != t.embeds && t.embeds.length > 0;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(c.Z, {
      className: a()(p.mainContainer, {
        [p.compact]: s
      }),
      icon: n(570111),
      compact: s,
      children: (0, r.jsx)("div", {
        className: a()(p.__invalid_content, {
          [p.compact]: s
        }),
        children: (0, r.jsx)("div", {
          className: a()(p.__invalid_messageContent, {
            [p.compact]: s
          }),
          children: t.content
        })
      })
    }), (0, r.jsx)("div", {
      className: a()(p.__invalid_embedContent, {
        [p.compact]: s
      }),
      children: (0, r.jsx)(h, {
        message: t
      })
    }), (0, r.jsx)("div", {
      className: p.actions,
      children: (0, r.jsx)(o.Button, {
        variant: "secondary",
        text: f.intl.string(f.t.zdBCIv),
        onClick: () => {
          l ? (0, u.z$)(t) : (0, u.XP)(i.guild_id, i.id, t.id)
        }
      })
    })]
  })
}

function h(e) {
  var t;
  let {
    message: n
  } = e, [i] = null != (t = n.embeds) ? t : [];
  if (null == i) return null;
  let a = (e, t) => l.Z.parseEmbedTitle(t, true, {
      channelId: n.channel_id
    }),
    o = (e, t, r) => l.Z.parse(t, true, {
      channelId: n.channel_id
    });
  return (0, r.jsx)(s.ZP, {
    className: p.embed,
    embed: i,
    renderTitle: a,
    renderDescription: o,
    autoPlayGif: false,
    renderImageComponent: d.VqG,
    renderVideoComponent: d.VqG,
    renderLinkComponent: d.VqG
  })
}