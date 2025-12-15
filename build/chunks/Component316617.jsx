/** Chunk was on 54844 **/
/** chunk id: 316617, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
  Chunk642900 = require("./642900.js");
let v = e => {
  let {
    message: t
  } = e, n = (0, o.ZP)(t), v = (0, i.e7)([g.Z], () => g.Z.getChannel(t.channel_id)), j = l.useMemo(() => (0, s.Z)(t), [t]), {
    content: _
  } = (0, b.Z)(j, {
    hideSimpleEmbedContent: false
  }), y = p.jU.useSetting(), O = l.useCallback(() => {
    let {
      leadingIcon: e,
      trailingIcon: n
    } = (0, m.f)(t, _, false, false, "", {
      leadingIconClass: h.attachmentIcon,
      trailingIconClass: h.attachmentIcon,
      iconSize: f.WW
    });
    return (0, r.jsxs)("div", {
      className: h.contentContainer,
      children: [e, (0, r.jsx)(c.ZP, {
        message: t,
        content: _,
        compact: y
      }), n]
    })
  }, [t, _, y]);
  return null == v ? null : (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)(a.Heading, {
      className: h.header,
      variant: "heading-sm/semibold",
      children: x.intl.string(x.t.iouM3a)
    }), (0, r.jsx)(a.Ttm, {
      className: h.messagePreviewContainer,
      children: (0, r.jsx)(d.Z, {
        childrenMessageContent: O(),
        childrenHeader: (0, r.jsx)(u.ZP, {
          message: t,
          channel: v,
          author: n,
          guildId: v.guild_id
        }),
        disableInteraction: true,
        author: n
      })
    })]
  })
}