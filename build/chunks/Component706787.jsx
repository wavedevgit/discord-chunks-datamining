/** Chunk was on 31748 **/
/** chunk id: 706787, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk970984 = require("./970984.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk927813 = require("./927813.js"),
  Chunk614518 = require("./614518.js"),
  Chunk804771 = require("./804771.js");
let p = 6 * Chunk927813.A.Millis.SECOND,
  g = 2 * Chunk927813.A.Millis.SECOND,
  m = 2 * Chunk927813.A.Millis.SECOND,
  _ = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function h(e) {
  let {
    userId: t,
    voiceChannelEffect: n,
    onComplete: u
  } = e, {
    emoji: h,
    sentAt: y
  } = n, A = (0, a.bG)([c.A], () => c.A.useReducedMotion), [b, E] = l.useState(true), v = !A, O = (0, o.pnh)(b, {
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
  return (l.useEffect(() => {
    let e;
    return Date.now() - y >= m ? (0, d.a)(t) : e = setTimeout(() => {
      E(false), v && (0, d.a)(t)
    }, v ? g : p), () => {
      null != e && clearTimeout(e)
    }
  }, [y, t, v]), v) ? null : O((e, t) => {
    var n;
    let {
      rotate: l
    } = e;
    return t && (0, r.jsx)(i.animated.div, {
      className: f._,
      style: {
        transform: l.to(_)
      },
      children: (0, r.jsx)(s.A, {
        className: f.F,
        emojiId: h.id,
        emojiName: h.name,
        animated: null != (n = h.animated) && n
      })
    })
  })
}