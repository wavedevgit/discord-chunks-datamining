/** Chunk was on 42300 **/
/** chunk id: 911266, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk607070 = require("./607070.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk823961 = require("./823961.js"),
  Chunk992970 = require("./992970.js"),
  Chunk111810 = require("./111810.js"),
  Chunk287941 = require("./287941.js"),
  Chunk235894 = require("./235894.js"),
  Chunk485933 = require("./485933.js");
let y = e => {
  let {
    message: t,
    hovering: n,
    compact: l
  } = e, y = r.useRef((0, o.random)(false, 24)).current, _ = (0, s.e7)([h.Z], () => h.Z.confettiMode), v = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), x = r.useRef(0), O = r.useRef(null), j = r.useRef(null), [E, S] = r.useState(false), P = r.useMemo(() => !n && !_ && !v, [_, n, v]);
  if (r.useEffect(() => {
      n || S(false), n && _ && S(true)
    }, [n, _]), r.useEffect(() => {
      !v && (E || (false === n && (x.current = 0, null != O.current && (clearTimeout(O.current), O.current = null)), x.current = Date.now(), O.current = setTimeout(() => {
        let e = x.current;
        if (0 !== e && false !== n && !(Date.now() - e < 1e3) && !_) {
          if (null != j.current) {
            var i;
            let {
              x: e,
              y: n,
              width: r,
              height: l
            } = null == (i = j.current) ? true : i.getBoundingClientRect();
            (0, g.Z)(t, {
              x: e,
              y: n - 20,
              w: r,
              h: l
            }, true, f.LL.UserTriggered)
          } else(0, g.Z)(t, true, true, f.LL.UserTriggered);
          S(true), c.Z.dispatch({
            type: "POTIONS_SET_CONFETTI_MODE",
            enabled: true
          })
        }
      }, 1100)))
    }, [_, E, n, t, v]), !(0, m.p7)("Message Confetti Peak") || !(0, b.Uw)(t)) return null;
  let I = (0, b.Eq)(t);
  if (null == I) return null;
  if (l) return (0, i.jsx)("span", {
    className: C.hidden,
    "aria-hidden": "true"
  });
  let Z = I.emoji[0],
    N = null == Z.id ? p.ZP.getURL(Z.name) : d.ZP.getEmojiURL({
      id: Z.id,
      animated: false,
      size: 32,
      forcePNG: true
    });
  return (0, i.jsxs)("div", {
    ref: j,
    className: C.emojiWrapper,
    style: {
      right: "".concat(256 + y, "px")
    },
    children: [(0, i.jsx)("img", {
      alt: "",
      src: N,
      className: a()([C.emoji, C.left, P && C.shy, _ && C.confettiMode]),
      width: 28
    }), (0, i.jsx)("img", {
      alt: "",
      src: N,
      className: a()([C.emoji, C.right, P && C.shy, _ && C.confettiMode]),
      width: 26
    }), (0, i.jsx)("img", {
      alt: "",
      src: N,
      className: a()([C.emoji, C.center, P && C.shy, _ && C.confettiMode]),
      width: 32
    })]
  })
}