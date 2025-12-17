/** Chunk was on 67000 **/
/** chunk id: 653577, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk362721 = require("./362721.js"),
  Chunk12498 = require("./12498.js"),
  Chunk454585 = require("./454585.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk433507 = require("./433507.js"),
  Chunk960324 = require("./960324.js");

function y(e) {
  let {
    channel: t,
    connected: n,
    hovered: l,
    subtitle: y,
    onClick: O,
    showEmptyChannelTopic: v
  } = e, j = (0, o.e7)([d.Z], () => d.Z.getChannelStatus(t)), C = null != j && j.length > 0, x = (0, u.ZP)(t, true), E = null != y && y.length > 0;
  if (i.useEffect(() => {
      C && h.default.track(p.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
        channel_id: t.id,
        guild_id: t.guild_id
      })
    }, [C, t.id, t.guild_id]), null == t.guild_id) return null;
  let S = a()(b.statusDiv, n && x ? b.hoverable : null);
  return C ? (0, r.jsx)(c.P3F, {
    className: S,
    onClick: x ? O : true,
    children: (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      className: a()(b.statusText, m.markup),
      children: (0, r.jsx)(s.Z, {
        children: f.Z.parseVoiceChannelStatus(j, true, {
          channelId: t.id
        })
      })
    })
  }) : n && x && (!E || l) && v ? (0, r.jsxs)(c.P3F, {
    className: S,
    onClick: O,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      className: b.statusText,
      children: g.intl.string(g.t.Mgpxiw)
    }), (0, r.jsx)(c.vdY, {
      color: "currentColor",
      className: b.pencilIcon,
      size: "xxs"
    })]
  }) : E ? (0, r.jsx)(s.Z, {
    children: y
  }) : null
}