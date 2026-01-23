/** Chunk was on 97492 **/
/** chunk id: 562991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk532622 = require("./532622.js"),
  Chunk309698 = require("./309698.js"),
  Chunk46054 = require("./46054.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk499711 = require("./499711.js"),
  Chunk206314 = require("./206314.js");

function A(e) {
  let {
    channel: t,
    connected: n,
    hovered: i,
    subtitle: A,
    onClick: y,
    showEmptyChannelTopic: _
  } = e, O = (0, a.bG)([d.A], () => d.A.getChannelStatus(t)), j = null != O && O.length > 0, v = (0, u.Ay)(t, true), x = null != A && A.length > 0;
  if (l.useEffect(() => {
      j && h.default.track(f.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
        channel_id: t.id,
        guild_id: t.guild_id
      })
    }, [j, t.id, t.guild_id]), null == t.guild_id) return null;
  let E = s()(m.Ui, n && v ? m.BI : null);
  return j ? (0, r.jsx)(c.DUT, {
    className: E,
    onClick: v ? y : true,
    children: (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      className: s()(m.qS, b.PT),
      children: (0, r.jsx)(o.A, {
        children: p.A.parseVoiceChannelStatus(O, true, {
          channelId: t.id
        })
      })
    })
  }) : n && v && (!x || i) && _ ? (0, r.jsxs)(c.DUT, {
    className: E,
    onClick: y,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      className: m.qS,
      children: g.intl.string(g.t.Mgpxiw)
    }), (0, r.jsx)(c.R2l, {
      color: "currentColor",
      className: m.rD,
      size: "xxs"
    })]
  }) : x ? (0, r.jsx)(o.A, {
    children: A
  }) : null
}