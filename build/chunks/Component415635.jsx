/** Chunk was on 96750 **/
/** chunk id: 415635, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk607070 = require("./607070.js"),
  Chunk367907 = require("./367907.js"),
  Chunk37091 = require("./37091.js"),
  Chunk721264 = require("./721264.js"),
  Chunk963838 = require("./963838.js"),
  Chunk39127 = require("./39127.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk57495 = require("./57495.js");

function v(e) {
  let {
    channelId: t,
    guildId: n,
    userId: v,
    containerDimensions: _
  } = e, b = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), [h, y] = i.useState([]), O = h.length < 50;
  i.useEffect(() => {
    function e(e) {
      var r;
      let {
        channelId: i,
        userId: a,
        emoji: o,
        animationType: s,
        animationId: f
      } = e;
      if (null != v && v !== a || u.Z.getEnabled() && (0, d.Z)(null != (r = null == o ? true : o.name) ? r : "")) return;
      let g = null != o && null != s && null != f;
      if (i === t && !b && O && g) {
        let e = (0, p._r)(o),
          r = null != o.id && !o.animated,
          i = {
            id: (0, l.Z)(),
            animationType: s,
            animationId: f,
            shouldResize: r,
            url: e,
            userId: a
          };
        y(e => [...e, i]), c.ZP.trackWithMetadata(m.rMx.VOICE_CHANNEL_EFFECT_VIEWED, {
          channel_id: t,
          guild_id: n
        })
      }
    }
    return o.Z.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
      o.Z.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
    }
  }, [t, n, v, b, O]);
  let j = i.useCallback(e => {
    y(t => {
      let n = [...t],
        r = n.findIndex(t => t.id === e);
      return n.splice(r, 1), n
    })
  }, []);
  return b ? null : (0, r.jsx)("div", {
    className: g.effectsWrapper,
    style: {
      width: _.width
    },
    children: (0, r.jsx)("div", {
      className: g.effects,
      children: h.map(e => (0, r.jsx)(f.Z, {
        containerDimensions: _,
        effect: e,
        onComplete: j
      }, e.id))
    })
  })
}