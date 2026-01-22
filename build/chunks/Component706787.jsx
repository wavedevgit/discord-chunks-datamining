/** Chunk was on 31748 **/
/** chunk id: 706787, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk108531 = require("./108531.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk927813 = require("./927813.js"),
  Chunk614518 = require("./614518.js"),
  Chunk804771 = require("./804771.js");
let p = 6 * Chunk927813.A.Millis.SECOND,
  b = 2 * Chunk927813.A.Millis.SECOND,
  g = 2 * Chunk927813.A.Millis.SECOND,
  m = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function h(e) {
  let {
    userId: t,
    voiceChannelEffect: n,
    onComplete: u
  } = e, {
    emoji: h,
    sentAt: A
  } = n, y = (0, a.bG)([c.A], () => c.A.useReducedMotion), [_, E] = r.useState(true), v = !y, O = (0, s.pnh)(_, {
    from: {
      rotate: false
    },
    enter: {
      rotate: 0
    },
    leave: {
      rotate: false
    },
    config: i.config.default,
    onRest: (e, t) => {
      let {
        phase: n
      } = t;
      "leave" === n && u()
    }
  });
  return (r.useEffect(() => {
    let e;
    return Date.now() - A >= g ? (0, d.a)(t) : e = setTimeout(() => {
      E(false), v && (0, d.a)(t)
    }, v ? b : p), () => {
      null != e && clearTimeout(e)
    }
  }, [A, t, v]), v) ? null : O((e, t) => {
    var n;
    let {
      rotate: r
    } = e;
    return t && (0, l.jsx)(i.animated.div, {
      className: f._,
      style: {
        transform: r.to(m)
      },
      children: (0, l.jsx)(o.A, {
        className: f.F,
        emojiId: h.id,
        emojiName: h.name,
        animated: null != (n = h.animated) && n
      })
    })
  })
}