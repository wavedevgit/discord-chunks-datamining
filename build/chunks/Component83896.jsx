/** Chunk was on 62987 **/
/** chunk id: 83896, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => O
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
  Chunk626135 = require("./626135.js"),
  Chunk906605 = require("./906605.js"),
  Chunk833858 = require("./833858.js"),
  Chunk866071 = require("./866071.js"),
  Chunk223135 = require("./223135.jsx"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk10359 = require("./10359.js"),
  Chunk254477 = require("./254477.js");

function O(e) {
  let {
    hangStatusActivity: t,
    channel: n,
    setPopoutRef: l
  } = e, O = i.useRef(null), j = (0, o.e7)([p.Z], () => p.Z.getVoiceChannelId() === n.id), E = (0, o.e7)([u.Z], () => u.Z.can(_.Plq.CONNECT, n)), S = (null == t ? true : t.emoji) == null || (0, g.K)(t.emoji, n), I = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId());
  i.useEffect(() => {
    null == l || l(null == O ? true : O.current)
  }, [O, l]), i.useEffect(() => {
    h.default.track(_.rMx.VIEW_HANG_STATUS, {
      source: "HangStatusPopout",
      guild_id: n.guild_id,
      channel_id: n.id
    })
  }, [n.guild_id, n.id]);
  let P = i.useCallback(() => {
      !j && E && (c.default.selectVoiceChannel(n.id), h.default.track(_.rMx.HANG_STATUS_CTA_CLICKED, {
        source: "HangStatusPopout",
        guild_id: n.guild_id,
        channel_id: n.id
      }))
    }, [j, E, n.guild_id, n.id]),
    Z = i.useCallback(() => {
      if (!j || !S || null == t.state) return;
      let [e] = (0, m.Fe)(t.state);
      if (null != e) {
        if (e === y.tN.CUSTOM) {
          if (null == t.details || null == t.emoji) return;
          (0, f._s)(t.details, t.emoji, true)
        } else(0, f.Zx)(e, true);
        h.default.track(_.rMx.SWIPE_HANG_STATUS, {
          guild_id: n.guild_id,
          channel_id: n.id,
          media_session_id: I
        })
      }
    }, [j, S, t, I, n.guild_id, n.id]);
  return (0, r.jsxs)("div", {
    ref: O,
    className: a()(x.popover, v.container),
    children: [(0, r.jsx)(b.Z, {
      size: 32,
      className: v.icon,
      hangStatusActivity: t
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      className: v.statusText,
      children: (0, m.O8)(t)
    }), j ? S && (0, r.jsx)(s.zxk, {
      size: "sm",
      variant: "secondary",
      text: C.intl.string(C.t["0eHzpq"]),
      onClick: Z
    }) : E && (0, r.jsx)(s.zxk, {
      size: "sm",
      variant: "secondary",
      text: C.intl.string(C.t["B/dHXF"]),
      onClick: P
    })]
  })
}