/** Chunk was on 66866 **/
/** chunk id: 376484, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk446411 = require("./446411.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk553385 = require("./553385.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk356177 = require("./356177.js");

function f(e) {
  let {
    message: t,
    channel: i,
    compact: o
  } = e, s = null != t.embeds && t.embeds.length > 0;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(c.Z, {
      className: l()(m.mainContainer, {
        [m.compact]: o
      }),
      icon: n(570111),
      compact: o,
      children: (0, r.jsx)("div", {
        className: l()(m.__invalid_content, {
          [m.compact]: o
        }),
        children: (0, r.jsx)("div", {
          className: l()(m.__invalid_messageContent, {
            [m.compact]: o
          }),
          children: t.content
        })
      })
    }), (0, r.jsx)("div", {
      className: l()(m.__invalid_embedContent, {
        [m.compact]: o
      }),
      children: (0, r.jsx)(_, {
        message: t
      })
    }), (0, r.jsx)("div", {
      className: m.actions,
      children: (0, r.jsx)(a.zxk, {
        variant: "secondary",
        text: p.intl.string(p.t.zdBCIi),
        onClick: () => {
          s ? (0, u.z$)(t) : (0, u.XP)(i.guild_id, i.id, t.id)
        }
      })
    })]
  })
}

function _(e) {
  var t;
  let {
    message: n
  } = e, [i] = null != (t = n.embeds) ? t : [];
  return null == i ? null : (0, r.jsx)(o.ZP, {
    className: m.embed,
    embed: i,
    renderTitle: (e, t) => s.Z.parseEmbedTitle(t, true, {
      channelId: n.channel_id
    }),
    renderDescription: (e, t, r) => s.Z.parse(t, true, {
      channelId: n.channel_id
    }),
    autoPlayGif: false,
    renderImageComponent: d.VqG,
    renderVideoComponent: d.VqG,
    renderLinkComponent: d.VqG
  })
}