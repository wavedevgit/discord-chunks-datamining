/** Chunk was on web.js **/
/** chunk id: 66004, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk775602 = require("./775602.js"),
  Chunk58149 = require("./58149.js"),
  Chunk667050 = require("./667050.js"),
  Chunk407781 = require("./407781.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk6694 = require("./6694.js");
let _ = 50;

function h(e) {
  let {
    channelId: t,
    guildId: n,
    userId: h,
    containerDimensions: m
  } = e, g = (0, s.bG)([l.A], () => l.A.useReducedMotion), [E, y] = i.useState([]), b = E.length < _;
  i.useEffect(() => {
    function e(e) {
      let {
        channelId: r,
        userId: i,
        emoji: s,
        animationType: o,
        animationId: l
      } = e;
      if (null != h && h !== i) return;
      let d = null != s && null != o && null != l;
      if (r === t && !g && b && d) {
        let e = (0, u.Br)(s),
          r = null != s.id && !s.animated,
          d = {
            id: (0, a.A)(),
            animationType: o,
            animationId: l,
            shouldResize: r,
            url: e,
            userId: i
          };
        y(e => [...e, d]), c.Ay.trackWithMetadata(f.HAw.VOICE_CHANNEL_EFFECT_VIEWED, {
          channel_id: t,
          guild_id: n
        })
      }
    }
    return o.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
      o.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
    }
  }, [t, n, h, g, b]);
  let O = i.useCallback(e => {
    y(t => {
      let n = [...t],
        r = n.findIndex(t => t.id === e);
      return n.splice(r, 1), n
    })
  }, []);
  return g ? null : (0, r.jsx)("div", {
    className: p.Y,
    style: {
      width: m.width
    },
    children: (0, r.jsx)("div", {
      className: p.z,
      children: E.map(e => (0, r.jsx)(d.A, {
        containerDimensions: m,
        effect: e,
        onComplete: O
      }, e.id))
    })
  })
}