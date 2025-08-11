/** Chunk was on 54844 **/
/** chunk id: 316617, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk39154 = require("./39154.js"),
  Chunk739566 = require("./739566.js"),
  Chunk492593 = require("./492593.js"),
  Chunk930282 = require("./930282.js"),
  Chunk464891 = require("./464891.js"),
  Chunk267128 = require("./267128.jsx"),
  Chunk25015 = require("./25015.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.js"),
  Chunk782544 = require("./782544.js");
let f = e => {
  let {
    message: t
  } = e, n = (0, o.ZP)(t), f = (0, i.e7)([x.Z], () => x.Z.getChannel(t.channel_id)), v = l.useMemo(() => (0, s.Z)(t), [t]), {
    content: j
  } = (0, p.Z)(v, {
    hideSimpleEmbedContent: false
  }), y = g.jU.useSetting(), O = l.useCallback(() => {
    let {
      leadingIcon: e,
      trailingIcon: n
    } = (0, m.f)(t, j, false, false, "", {
      leadingIconClass: h.attachmentIcon,
      trailingIconClass: h.attachmentIcon,
      iconSize: _.WW
    });
    return <div className={h.contentContainer}>{e}{<d.ZP message={t} content={j} compact={y} />}{n}</div>
  }, [t, j, y]);
  return null == f ? null : <div className={h.container}>{<a.X6q className={h.header} variant={"heading-sm/semibold"}>{b.intl.string(b.t.iouM3d)}</a.X6q>}{<a.Ttm className={h.messagePreviewContainer}><c.Z childrenMessageContent={O()} childrenHeader={(0, r.jsx)(u.ZP, {
          message: t,
          channel: f,
          author: n,
          guildId: f.guild_id
        })} disableInteraction={true} author={n} /></a.Ttm>}</div>
}