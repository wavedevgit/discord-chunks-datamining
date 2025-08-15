/** Chunk was on 96750 **/
/** chunk id: 415635, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function h(e) {
  let {
    channelId: t,
    guildId: n,
    userId: h,
    containerDimensions: b
  } = e, v = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), [_, y] = i.useState([]), O = _.length < 50;
  i.useEffect(() => {
    function e(e) {
      var r;
      let {
        channelId: i,
        userId: a,
        emoji: o,
        animationType: s,
        animationId: p
      } = e;
      if (null != h && h !== a || u.Z.getEnabled() && (0, d.Z)(null != (r = null == o ? true : o.name) ? r : "")) return;
      let g = null != o && null != s && null != p;
      if (i === t && !v && O && g) {
        let e = (0, f._r)(o),
          r = null != o.id && !o.animated,
          i = {
            id: (0, l.Z)(),
            animationType: s,
            animationId: p,
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
  }, [t, n, h, v, O]);
  let S = i.useCallback(e => {
    y(t => {
      let n = [...t],
        r = n.findIndex(t => t.id === e);
      return n.splice(r, 1), n
    })
  }, []);
  return v ? null : (0, r.jsx)("div", {
    className: g.effectsWrapper,
    style: {
      width: b.width
    },
    children: (0, r.jsx)("div", {
      className: g.effects,
      children: _.map(e => (0, r.jsx)(p.Z, {
        containerDimensions: b,
        effect: e,
        onComplete: S
      }, e.id))
    })
  })
}