/** Chunk was on 17869 **/
/** chunk id: 706787, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk92674 = require("./92674.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk927813 = require("./927813.js"),
  Chunk614518 = require("./614518.js"),
  Chunk804771 = require("./804771.js");
let p = 6 * Chunk927813.A.Millis.SECOND,
  f = 2 * Chunk927813.A.Millis.SECOND,
  m = 2 * Chunk927813.A.Millis.SECOND,
  g = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function A(e) {
  let {
    userId: t,
    voiceChannelEffect: n,
    onComplete: u
  } = e, {
    emoji: A,
    sentAt: b
  } = n, _ = (0, a.bG)([c.A], () => c.A.useReducedMotion), [y, E] = r.useState(true), v = !_, O = (0, s.pnh)(y, {
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
    return Date.now() - b >= m ? (0, d.a)(t) : e = setTimeout(() => {
      E(false), v && (0, d.a)(t)
    }, v ? f : p), () => {
      null != e && clearTimeout(e)
    }
  }, [b, t, v]), v) ? null : O((e, t) => {
    var n;
    let {
      rotate: r
    } = e;
    return t && (0, l.jsx)(i.animated.div, {
      className: h._,
      style: {
        transform: r.to(g)
      },
      children: (0, l.jsx)(o.A, {
        className: h.F,
        emojiId: A.id,
        emojiName: A.name,
        animated: null != (n = A.animated) && n
      })
    })
  })
}