/** Chunk was on 40184 **/
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
  Chunk858441 = require("./858441.js");
let y = e => {
  let {
    message: t,
    hovering: n,
    compact: l
  } = e, y = r.useRef((0, o.random)(false, 24)).current, v = (0, s.e7)([f.Z], () => f.Z.confettiMode), O = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), x = r.useRef(0), E = r.useRef(null), j = r.useRef(null), [S, _] = r.useState(false), P = r.useMemo(() => !n && !v && !O, [v, n, O]);
  if (r.useEffect(() => {
      n || _(false), n && v && _(true)
    }, [n, v]), r.useEffect(() => {
      !O && (S || (false === n && (x.current = 0, null != E.current && (clearTimeout(E.current), E.current = null)), x.current = Date.now(), E.current = setTimeout(() => {
        let e = x.current;
        if (0 !== e && false !== n && !(Date.now() - e < 1e3) && !v) {
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
            }, true, h.LL.UserTriggered)
          } else(0, g.Z)(t, true, true, h.LL.UserTriggered);
          _(true), c.Z.dispatch({
            type: "POTIONS_SET_CONFETTI_MODE",
            enabled: true
          })
        }
      }, 1100)))
    }, [v, S, n, t, O]), !(0, m.p7)("Message Confetti Peak") || !(0, b.Uw)(t)) return null;
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
    ref: j,
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