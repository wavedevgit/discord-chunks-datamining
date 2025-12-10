/** Chunk was on 7891 **/
/** chunk id: 911266, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = e, y = r.useRef((0, o.random)(false, 24)).current, v = (0, s.e7)([h.Z], () => h.Z.confettiMode), _ = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), O = r.useRef(0), x = r.useRef(null), E = r.useRef(null), [j, S] = r.useState(false), P = r.useMemo(() => !n && !v && !_, [v, n, _]);
  if (r.useEffect(() => {
      n || S(false), n && v && S(true)
    }, [n, v]), r.useEffect(() => {
      !_ && (j || (false === n && (O.current = 0, null != x.current && (clearTimeout(x.current), x.current = null)), O.current = Date.now(), x.current = setTimeout(() => {
        let e = O.current;
        if (0 !== e && false !== n && !(Date.now() - e < 1e3) && !v) {
          if (null != E.current) {
            var i;
            let {
              x: e,
              y: n,
              width: r,
              height: l
            } = null == (i = E.current) ? true : i.getBoundingClientRect();
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
    }, [v, j, n, t, _]), !(0, m.p7)("Message Confetti Peak") || !(0, b.Uw)(t)) return null;
  let I = (0, b.Eq)(t);
  if (null == I) return null;
  if (l) return (0, i.jsx)("span", {
    className: C.hidden,
    "aria-hidden": "true"
  });
  let Z = I.emoji[0],
    T = null == Z.id ? p.ZP.getURL(Z.name) : d.ZP.getEmojiURL({
      id: Z.id,
      animated: false,
      size: 32,
      forcePNG: true
    });
  return (0, i.jsxs)("div", {
    ref: E,
    className: C.emojiWrapper,
    style: {
      right: "".concat(256 + y, "px")
    },
    children: [(0, i.jsx)("img", {
      alt: "",
      src: T,
      className: a()([C.emoji, C.left, P && C.shy, v && C.confettiMode]),
      width: 28
    }), (0, i.jsx)("img", {
      alt: "",
      src: T,
      className: a()([C.emoji, C.right, P && C.shy, v && C.confettiMode]),
      width: 26
    }), (0, i.jsx)("img", {
      alt: "",
      src: T,
      className: a()([C.emoji, C.center, P && C.shy, v && C.confettiMode]),
      width: 32
    })]
  })
}