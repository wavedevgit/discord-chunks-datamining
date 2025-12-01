/** Chunk was on web.js **/
/** chunk id: 265386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk933557 = require("./933557.js"),
  Chunk359110 = require("./359110.js"),
  Chunk769654 = require("./769654.js"),
  Chunk922482 = require("./922482.js"),
  Chunk496675 = require("./496675.js"),
  Chunk373826 = require("./373826.jsx"),
  Chunk788858 = require("./788858.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704543 = require("./704543.js");

function b(e) {
  let {
    channel: t,
    guild: n,
    onAction: i,
    onClose: b
  } = e, y = (0, c.ZP)(t), O = (0, o.e7)([p.Z], () => t.isPrivate() || p.Z.can(h.Pl.CONNECT, t)), v = () => {
    if (!O) return y;
    let e = e => {
      e.stopPropagation(), t.isGuildStageVoice() ? (0, f.Cq)(t) : (l.default.selectVoiceChannel(t.id), (0, u.Kh)(t.id)), null == i || i({
        action: "OPEN_VOICE_CHANNEL"
      }), null == b || b()
    };
    return (0, r.jsx)(s.P3F, {
      className: a()(E.clickableText, E.inline),
      onClick: e,
      children: y
    })
  }, S = () => {
    if (null == n) return null;
    let e = e => {
      e.stopPropagation(), (0, d.X)(n.id), null == i || i({
        action: "OPEN_VOICE_GUILD"
      }), null == b || b()
    };
    return (0, r.jsx)(_.Z, {
      variant: "text-xs/normal",
      text: g.intl.formatToPlainString(g.t["hq/Qze"], {
        guildName: n.name
      }),
      onClick: e
    })
  };
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)(s.Heading, {
      variant: "heading-sm/semibold",
      color: "text-default",
      className: E.voiceChannelHeading,
      children: [(0, r.jsx)(m.Z, {
        channel: t,
        size: "xxs",
        color: s.TVs.colors.TEXT_DEFAULT,
        className: E.voiceIcon
      }), v()]
    }), S()]
  })
}