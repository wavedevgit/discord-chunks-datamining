/** Chunk was on 88474 **/
/** chunk id: 66004, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function m(e) {
  let {
    channelId: t,
    guildId: n,
    userId: m,
    containerDimensions: g
  } = e, y = (0, a.bG)([o.A], () => o.A.useReducedMotion), [b, _] = l.useState([]), h = b.length < 50;
  l.useEffect(() => {
    function e(e) {
      let {
        channelId: r,
        userId: l,
        emoji: a,
        animationType: s,
        animationId: o
      } = e;
      if (null != m && m !== l) return;
      let d = null != a && null != s && null != o;
      if (r === t && !y && h && d) {
        let e = (0, u.Br)(a),
          r = null != a.id && !a.animated,
          d = {
            id: (0, i.A)(),
            animationType: s,
            animationId: o,
            shouldResize: r,
            url: e,
            userId: l
          };
        _(e => [...e, d]), c.Ay.trackWithMetadata(p.HAw.VOICE_CHANNEL_EFFECT_VIEWED, {
          channel_id: t,
          guild_id: n
        })
      }
    }
    return s.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
      s.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
    }
  }, [t, n, m, y, h]);
  let A = l.useCallback(e => {
    _(t => {
      let n = [...t],
        r = n.findIndex(t => t.id === e);
      return n.splice(r, 1), n
    })
  }, []);
  return y ? null : (0, r.jsx)("div", {
    className: f.Y,
    style: {
      width: g.width
    },
    children: (0, r.jsx)("div", {
      className: f.z,
      children: b.map(e => (0, r.jsx)(d.A, {
        containerDimensions: g,
        effect: e,
        onComplete: A
      }, e.id))
    })
  })
}