/** Chunk was on web.js **/
/** chunk id: 730174, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk871751 = require("./871751.jsx"),
  Chunk46054 = require("./46054.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk819744 = require("./819744.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk272076 = require("./272076.js");

function _(e) {
  let {
    message: t,
    channel: i,
    compact: o
  } = e, l = null != t.embeds && t.embeds.length > 0;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(c.A, {
      className: a()(p.rs, {
        [p.oE]: o
      }),
      icon: n(394803),
      compact: o,
      children: (0, r.jsx)("div", {
        className: a()(p.__invalid_content, {
          [p.oE]: o
        }),
        children: (0, r.jsx)("div", {
          className: a()(p.__invalid_messageContent, {
            [p.oE]: o
          }),
          children: t.content
        })
      })
    }), (0, r.jsx)("div", {
      className: a()(p.__invalid_embedContent, {
        [p.oE]: o
      }),
      children: (0, r.jsx)(h, {
        message: t
      })
    }), (0, r.jsx)("div", {
      className: p.o1,
      children: (0, r.jsx)(s.Button, {
        variant: "secondary",
        text: f.intl.string(f.t.zdBCIv),
        onClick: () => {
          l ? (0, u.Iz)(t) : (0, u.yg)(i.guild_id, i.id, t.id)
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
  let a = (e, t) => l.A.parseEmbedTitle(t, true, {
      channelId: n.channel_id
    }),
    s = (e, t, r) => l.A.parse(t, true, {
      channelId: n.channel_id
    });
  return (0, r.jsx)(o.Ay, {
    className: p.E6,
    embed: i,
    renderTitle: a,
    renderDescription: s,
    autoPlayGif: false,
    renderImageComponent: d.FXj,
    renderVideoComponent: d.FXj,
    renderLinkComponent: d.FXj
  })
}