/** Chunk was on 70127 **/
/** chunk id: 83896, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk496675 = require("./496675.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk938475 = require("./938475.js"),
  Chunk626135 = require("./626135.js"),
  Chunk906605 = require("./906605.js"),
  Chunk833858 = require("./833858.js"),
  Chunk866071 = require("./866071.js"),
  Chunk223135 = require("./223135.jsx"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk35913 = require("./35913.js"),
  Chunk929618 = require("./929618.js");

function j(e) {
  let {
    hangStatusActivity: t,
    channel: n,
    userId: l,
    setPopoutRef: j
  } = e, E = i.useRef(null), S = (0, o.e7)([p.Z], () => p.Z.getVoiceChannelId() === n.id), I = (0, o.e7)([u.Z], () => u.Z.can(C.Plq.CONNECT, n)), P = (null == t ? true : t.emoji) == null || (0, b.K)(t.emoji, n), Z = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId());
  i.useEffect(() => {
    null == j || j(null == E ? true : E.current)
  }, [E, j]), i.useEffect(() => {
    f.default.track(C.rMx.VIEW_HANG_STATUS, {
      source: "HangStatusPopout",
      guild_id: n.guild_id,
      channel_id: n.id
    })
  }, [n.guild_id, n.id]);
  let T = i.useCallback(() => {
      !S && I && (c.default.selectVoiceChannel(n.id), f.default.track(C.rMx.HANG_STATUS_CTA_CLICKED, {
        source: "HangStatusPopout",
        guild_id: n.guild_id,
        channel_id: n.id,
        media_session_id: Z,
        call_num_participants: h.ZP.countVoiceStatesForChannel(n.id),
        other_user_id: l,
        cta_type: "join"
      }))
    }, [S, I, n.guild_id, n.id, l, Z]),
    N = i.useCallback(() => {
      if (!S || !P || null == t.state) return;
      let [e] = (0, g.Fe)(t.state);
      if (null != e) {
        if (e === _.tN.CUSTOM) {
          if (null == t.details || null == t.emoji) return;
          (0, m._s)(t.details, t.emoji, true)
        } else(0, m.Zx)(e, true);
        f.default.track(C.rMx.HANG_STATUS_CTA_CLICKED, {
          source: "HangStatusPopout",
          guild_id: n.guild_id,
          channel_id: n.id,
          media_session_id: Z,
          call_num_participants: h.ZP.countVoiceStatesForChannel(n.id),
          other_user_id: l,
          cta_type: "swipe"
        })
      }
    }, [S, P, t, Z, n.guild_id, n.id, l]);
  return (0, r.jsxs)("div", {
    ref: E,
    className: a()(O.popover, x.container),
    children: [(0, r.jsx)(y.Z, {
      size: 32,
      className: x.icon,
      hangStatusActivity: t
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      className: x.statusText,
      children: (0, g.O8)(t)
    }), S ? P && (0, r.jsx)(s.zxk, {
      size: "sm",
      variant: "secondary",
      text: v.intl.string(v.t["0eHzpq"]),
      onClick: N
    }) : I && (0, r.jsx)(s.zxk, {
      size: "sm",
      variant: "secondary",
      text: v.intl.string(v.t["B/dHXF"]),
      onClick: T
    })]
  })
}