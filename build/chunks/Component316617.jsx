/** Chunk was on 54844 **/
/** chunk id: 316617, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk39154 = require("./39154.js"),
  Chunk739566 = require("./739566.js"),
  Chunk492593 = require("./492593.jsx"),
  Chunk930282 = require("./930282.jsx"),
  Chunk464891 = require("./464891.jsx"),
  Chunk267128 = require("./267128.jsx"),
  Chunk25015 = require("./25015.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk492402 = require("./492402.js");
let f = e => {
  let {
    message: t
  } = e, n = (0, o.ZP)(t), f = (0, i.e7)([_.Z], () => _.Z.getChannel(t.channel_id)), v = l.useMemo(() => (0, s.Z)(t), [t]), {
    content: j
  } = (0, p.Z)(v, {
    hideSimpleEmbedContent: false
  }), y = g.jU.useSetting(), Z = l.useCallback(() => {
    let {
      leadingIcon: e,
      trailingIcon: n
    } = (0, m.f)(t, j, false, false, "", {
      leadingIconClass: b.attachmentIcon,
      trailingIconClass: b.attachmentIcon,
      iconSize: x.WW
    });
    return (0, r.jsxs)("div", {
      className: b.contentContainer,
      children: [e, (0, r.jsx)(c.ZP, {
        message: t,
        content: j,
        compact: y
      }), n]
    })
  }, [t, j, y]);
  return null == f ? null : (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsx)(a.Heading, {
      className: b.header,
      variant: "heading-sm/semibold",
      children: h.intl.string(h.t.iouM3a)
    }), (0, r.jsx)(a.Ttm, {
      className: b.messagePreviewContainer,
      children: (0, r.jsx)(d.Z, {
        childrenMessageContent: Z(),
        childrenHeader: (0, r.jsx)(u.ZP, {
          message: t,
          channel: f,
          author: n,
          guildId: f.guild_id
        }),
        disableInteraction: true,
        author: n
      })
    })]
  })
}