/** Chunk was on web.js **/
/** chunk id: 376484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk446411 = require("./446411.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk553385 = require("./553385.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk356177 = require("./356177.js");

function p(e) {
  let {
    message: t,
    channel: i,
    compact: s
  } = e, l = null != t.embeds && t.embeds.length > 0;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(c.Z, {
      className: a()(_.mainContainer, {
        [_.compact]: s
      }),
      icon: n(570111),
      compact: s,
      children: (0, r.jsx)("div", {
        className: a()(_.__invalid_content, {
          [_.compact]: s
        }),
        children: (0, r.jsx)("div", {
          className: a()(_.__invalid_messageContent, {
            [_.compact]: s
          }),
          children: t.content
        })
      })
    }), (0, r.jsx)("div", {
      className: a()(_.__invalid_embedContent, {
        [_.compact]: s
      }),
      children: (0, r.jsx)(h, {
        message: t
      })
    }), (0, r.jsx)("div", {
      className: _.actions,
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
    className: _.embed,
    embed: i,
    renderTitle: a,
    renderDescription: o,
    autoPlayGif: false,
    renderImageComponent: d.VqG,
    renderVideoComponent: d.VqG,
    renderLinkComponent: d.VqG
  })
}