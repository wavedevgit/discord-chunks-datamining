/** Chunk was on 73705 **/
/** chunk id: 316617, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let x = e => {
  let {
    message: t
  } = e, n = (0, s.ZP)(t), x = (0, l.e7)([g.Z], () => g.Z.getChannel(t.channel_id)), v = i.useMemo(() => (0, o.Z)(t), [t]), {
    content: j
  } = (0, m.Z)(v, {
    hideSimpleEmbedContent: false
  }), y = p.jU.useSetting(), O = i.useCallback(() => {
    let {
      leadingIcon: e,
      trailingIcon: n
    } = (0, _.f)(t, j, false, false, "", {
      leadingIconClass: b.attachmentIcon,
      trailingIconClass: b.attachmentIcon,
      iconSize: f.WW
    });
    return (0, r.jsxs)("div", {
      className: b.contentContainer,
      children: [e, (0, r.jsx)(d.ZP, {
        message: t,
        content: j,
        compact: y
      }), n]
    })
  }, [t, j, y]);
  return null == x ? null : (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsx)(a.Heading, {
      className: b.header,
      variant: "heading-sm/semibold",
      children: h.intl.string(h.t.iouM3d)
    }), (0, r.jsx)(a.Ttm, {
      className: b.messagePreviewContainer,
      children: (0, r.jsx)(c.Z, {
        childrenMessageContent: O(),
        childrenHeader: (0, r.jsx)(u.ZP, {
          message: t,
          channel: x,
          author: n,
          guildId: x.guild_id
        }),
        disableInteraction: true,
        author: n
      })
    })]
  })
}