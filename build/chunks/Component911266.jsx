/** Chunk was on 13140 **/
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
  Chunk874341 = require("./874341.js");
let y = e => {
  let {
    message: t,
    hovering: n,
    compact: l
  } = e, y = i.useRef((0, o.random)(false, 24)).current, C = (0, s.e7)([f.Z], () => f.Z.confettiMode), v = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), O = i.useRef(0), x = i.useRef(null), E = i.useRef(null), [j, S] = i.useState(false), P = i.useMemo(() => !n && !C && !v, [C, n, v]);
  if (i.useEffect(() => {
      n || S(false), n && C && S(true)
    }, [n, C]), i.useEffect(() => {
      !v && (j || (false === n && (O.current = 0, null != x.current && (clearTimeout(x.current), x.current = null)), O.current = Date.now(), x.current = setTimeout(() => {
        let e = O.current;
        if (0 !== e && false !== n && !(Date.now() - e < 1e3) && !C) {
          if (null != E.current) {
            var r;
            let {
              x: e,
              y: n,
              width: i,
              height: l
            } = null == (r = E.current) ? true : r.getBoundingClientRect();
            (0, g.Z)(t, {
              x: e,
              y: n - 20,
              w: i,
              h: l
            }, true, h.LL.UserTriggered)
          } else(0, g.Z)(t, true, true, h.LL.UserTriggered);
          S(true), c.Z.dispatch({
            type: "POTIONS_SET_CONFETTI_MODE",
            enabled: true
          })
        }
      }, 1100)))
    }, [C, j, n, t, v]), !(0, m.p7)("Message Confetti Peak") || !(0, b.Uw)(t)) return null;
  let I = (0, b.Eq)(t);
  if (null == I) return null;
  if (l) return (0, r.jsx)("span", {
    className: _.hidden,
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
    ref: E,
    className: _.emojiWrapper,
    style: {
      right: "".concat(256 + y, "px")
    },
    children: [(0, r.jsx)("img", {
      alt: "",
      src: T,
      className: a()([_.emoji, _.left, P && _.shy, C && _.confettiMode]),
      width: 28
    }), (0, r.jsx)("img", {
      alt: "",
      src: T,
      className: a()([_.emoji, _.right, P && _.shy, C && _.confettiMode]),
      width: 26
    }), (0, r.jsx)("img", {
      alt: "",
      src: T,
      className: a()([_.emoji, _.center, P && _.shy, C && _.confettiMode]),
      width: 32
    })]
  })
}