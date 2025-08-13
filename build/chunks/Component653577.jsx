/** Chunk was on 41753 **/
/** chunk id: 653577, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk362721 = require("./362721.js"),
  Chunk12498 = require("./12498.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk759552 = require("./759552.js"),
  Chunk692228 = require("./692228.js");

function O(e) {
  let {
    channel: t,
    connected: n,
    hovered: l,
    subtitle: O,
    onClick: _,
    enableHangStatus: y,
    allowChannelTopic: C
  } = e, v = (0, s.e7)([u.Z], () => u.Z.getChannelStatus(t)), j = null != v && v.length > 0, E = (0, c.ZP)(t, true), S = (!y || !!C) && E, x = null != O && O.length > 0;
  if (i.useEffect(() => {
      j && p.default.track(f.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
        channel_id: t.id,
        guild_id: t.guild_id
      })
    }, [j, t.id, t.guild_id]), null == t.guild_id) return null;
  let I = o()(m.statusDiv, n && S ? m.hoverable : null);
  return j ? (0, r.jsx)(a.P3F, {
    className: I,
    onClick: S ? _ : true,
    children: (0, r.jsx)(a.Text, {
      variant: "text-xs/medium",
      className: o()(m.statusText, b.markup),
      children: (0, r.jsx)(d.Z, {
        children: h.Z.parseVoiceChannelStatus(v, true, {
          channelId: t.id
        })
      })
    })
  }) : n && S && (!x || l) ? (0, r.jsxs)(a.P3F, {
    className: I,
    onClick: _,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-xs/medium",
      className: m.statusText,
      children: g.intl.string(g.t.Mgpxi4)
    }), (0, r.jsx)(a.vdY, {
      color: "currentColor",
      className: m.pencilIcon,
      size: "xxs"
    })]
  }) : x ? (0, r.jsx)(d.Z, {
    children: O
  }) : null
}