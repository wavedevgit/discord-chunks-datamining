/** Chunk was on 5665 **/
/** chunk id: 911266, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk874341 = require("./874341.js");
let _ = e => {
  let {
    message: t,
    hovering: n,
    compact: l
  } = e, _ = i.useRef((0, o.random)(false, 24)).current, C = (0, s.e7)([h.Z], () => h.Z.confettiMode), x = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), v = i.useRef(0), O = i.useRef(null), j = i.useRef(null), [E, S] = i.useState(false), P = i.useMemo(() => !n && !C && !x, [C, n, x]);
  if (i.useEffect(() => {
      n || S(false), n && C && S(true)
    }, [n, C]), i.useEffect(() => {
      !x && (E || (false === n && (v.current = 0, null != O.current && (clearTimeout(O.current), O.current = null)), v.current = Date.now(), O.current = setTimeout(() => {
        let e = v.current;
        if (0 !== e && false !== n && !(Date.now() - e < 1e3) && !C) {
          if (null != j.current) {
            var r;
            let {
              x: e,
              y: n,
              width: i,
              height: l
            } = null == (r = j.current) ? true : r.getBoundingClientRect();
            (0, g.Z)(t, {
              x: e,
              y: n - 20,
              w: i,
              h: l
            }, true, f.LL.UserTriggered)
          } else(0, g.Z)(t, true, true, f.LL.UserTriggered);
          S(true), c.Z.dispatch({
            type: "POTIONS_SET_CONFETTI_MODE",
            enabled: true
          })
        }
      }, 1100)))
    }, [C, E, n, t, x]), !(0, m.p7)("Message Confetti Peak") || !(0, b.Uw)(t)) return null;
  let I = (0, b.Eq)(t);
  if (null == I) return null;
  if (l) return (0, r.jsx)("span", {
    className: y.hidden,
    "aria-hidden": "true"
  });
  let Z = I.emoji[0],
    T = null == Z.id ? p.ZP.getURL(Z.name) : d.ZP.getEmojiURL({
      id: Z.id,
      animated: false,
      size: 32,
      forcePNG: true
    });
  return (0, r.jsxs)("div", {
    ref: j,
    className: y.emojiWrapper,
    style: {
      right: "".concat(256 + _, "px")
    },
    children: [(0, r.jsx)("img", {
      alt: "",
      src: T,
      className: a()([y.emoji, y.left, P && y.shy, C && y.confettiMode]),
      width: 28
    }), (0, r.jsx)("img", {
      alt: "",
      src: T,
      className: a()([y.emoji, y.right, P && y.shy, C && y.confettiMode]),
      width: 26
    }), (0, r.jsx)("img", {
      alt: "",
      src: T,
      className: a()([y.emoji, y.center, P && y.shy, C && y.confettiMode]),
      width: 32
    })]
  })
}