/** Chunk was on 46467 **/
/** chunk id: 653577, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk362721 = require("./362721.js"),
  Chunk12498 = require("./12498.js"),
  Chunk454585 = require("./454585.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk158871 = require("./158871.js"),
  Chunk430864 = require("./430864.js");

function _(e) {
  let {
    channel: t,
    connected: n,
    hovered: l,
    subtitle: _,
    onClick: y,
    showEmptyChannelTopic: O
  } = e, v = (0, a.e7)([d.Z], () => d.Z.getChannelStatus(t)), j = null != v && v.length > 0, x = (0, u.ZP)(t, true), C = null != _ && _.length > 0;
  if (i.useEffect(() => {
      j && h.default.track(p.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
        channel_id: t.id,
        guild_id: t.guild_id
      })
    }, [j, t.id, t.guild_id]), null == t.guild_id) return null;
  let E = o()(m.statusDiv, n && x ? m.hoverable : null);
  return j ? (0, r.jsx)(c.P3F, {
    className: E,
    onClick: x ? y : true,
    children: (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      className: o()(m.statusText, b.markup),
      children: (0, r.jsx)(s.Z, {
        children: f.Z.parseVoiceChannelStatus(v, true, {
          channelId: t.id
        })
      })
    })
  }) : n && x && (!C || l) && O ? (0, r.jsxs)(c.P3F, {
    className: E,
    onClick: y,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      className: m.statusText,
      children: g.intl.string(g.t.Mgpxiw)
    }), (0, r.jsx)(c.vdY, {
      color: "currentColor",
      className: m.pencilIcon,
      size: "xxs"
    })]
  }) : C ? (0, r.jsx)(s.Z, {
    children: _
  }) : null
}