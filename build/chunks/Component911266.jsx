/** Chunk was on 81985 **/
/** chunk id: 911266, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
let v = e => {
  let {
    message: t,
    hovering: n,
    compact: l
  } = e, v = i.useRef((0, o.random)(false, 24)).current, O = (0, s.e7)([f.Z], () => f.Z.confettiMode), j = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), x = i.useRef(0), C = i.useRef(null), E = i.useRef(null), [S, _] = i.useState(false), I = i.useMemo(() => !n && !O && !j, [O, n, j]);
  if (i.useEffect(() => {
      n || _(false), n && O && _(true)
    }, [n, O]), i.useEffect(() => {
      !j && (S || (false === n && (x.current = 0, null != C.current && (clearTimeout(C.current), C.current = null)), x.current = Date.now(), C.current = setTimeout(() => {
        let e = x.current;
        if (0 !== e && false !== n && !(Date.now() - e < 1e3) && !O) {
          if (null != E.current) {
            var r;
            let {
              x: e,
              y: n,
              width: i,
              height: l
            } = null == (r = E.current) ? true : r.getBoundingClientRect();
            (0, m.Z)(t, {
              x: e,
              y: n - 20,
              w: i,
              h: l
            }, true, h.LL.UserTriggered)
          } else(0, m.Z)(t, true, true, h.LL.UserTriggered);
          _(true), c.Z.dispatch({
            type: "POTIONS_SET_CONFETTI_MODE",
            enabled: true
          })
        }
      }, 1100)))
    }, [O, S, n, t, j]), !(0, g.p7)("Message Confetti Peak") || !(0, b.Uw)(t)) return null;
  let P = (0, b.Eq)(t);
  if (null == P) return null;
  if (l) return (0, r.jsx)("span", {
    className: y.hidden,
    "aria-hidden": "true"
  });
  let Z = P.emoji[0],
    N = null == Z.id ? p.ZP.getURL(Z.name) : d.ZP.getEmojiURL({
      id: Z.id,
      animated: false,
      size: 32,
      forcePNG: true
    });
  return (0, r.jsxs)("div", {
    ref: E,
    className: y.emojiWrapper,
    style: {
      right: "".concat(256 + v, "px")
    },
    children: [(0, r.jsx)("img", {
      alt: "",
      src: N,
      className: a()([y.emoji, y.left, I && y.shy, O && y.confettiMode]),
      width: 28
    }), (0, r.jsx)("img", {
      alt: "",
      src: N,
      className: a()([y.emoji, y.right, I && y.shy, O && y.confettiMode]),
      width: 26
    }), (0, r.jsx)("img", {
      alt: "",
      src: N,
      className: a()([y.emoji, y.center, I && y.shy, O && y.confettiMode]),
      width: 32
    })]
  })
}