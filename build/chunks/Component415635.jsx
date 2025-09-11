/** Chunk was on web.js **/
/** chunk id: 415635, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk825836 = require("./825836.js");
let m = 50;

function g(e) {
  let {
    channelId: t,
    guildId: n,
    userId: g,
    containerDimensions: E
  } = e, b = (0, o.e7)([l.Z], () => l.Z.useReducedMotion), [y, O] = i.useState([]), v = y.length < m;
  i.useEffect(() => {
    function e(e) {
      var r;
      let {
        channelId: i,
        userId: o,
        emoji: s,
        animationType: l,
        animationId: _
      } = e;
      if (null != g && g !== o || u.Z.getEnabled() && (0, d.Z)(null != (r = null == s ? true : s.name) ? r : "")) return;
      let h = null != s && null != l && null != _;
      if (i === t && !b && v && h) {
        let e = (0, f._r)(s),
          r = null != s.id && !s.animated,
          i = {
            id: (0, a.Z)(),
            animationType: l,
            animationId: _,
            shouldResize: r,
            url: e,
            userId: o
          };
        O(e => [...e, i]), c.ZP.trackWithMetadata(p.rMx.VOICE_CHANNEL_EFFECT_VIEWED, {
          channel_id: t,
          guild_id: n
        })
      }
    }
    return s.Z.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
      s.Z.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
    }
  }, [t, n, g, b, v]);
  let I = i.useCallback(e => {
    O(t => {
      let n = [...t],
        r = n.findIndex(t => t.id === e);
      return n.splice(r, 1), n
    })
  }, []);
  return b ? null : (0, r.jsx)("div", {
    className: h.effectsWrapper,
    style: {
      width: E.width
    },
    children: (0, r.jsx)("div", {
      className: h.effects,
      children: y.map(e => (0, r.jsx)(_.Z, {
        containerDimensions: E,
        effect: e,
        onComplete: I
      }, e.id))
    })
  })
}