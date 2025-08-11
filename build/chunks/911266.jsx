/** Chunk was on web.js **/
/** chunk id: 911266, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk675479 = require("./675479.js");
let b = 1e3,
  y = 256,
  O = e => {
    let {
      message: t,
      hovering: n,
      compact: o
    } = e, O = i.useRef((0, s.random)(false, 24)).current, v = (0, l.e7)([_.Z], () => _.Z.confettiMode), I = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), T = i.useRef(0), S = i.useRef(null), A = i.useRef(null), [N, C] = i.useState(false), R = i.useMemo(() => !n && !v && !I, [v, n, I]);
    if (i.useEffect(() => {
        n || C(false), n && v && C(true)
      }, [n, v]), i.useEffect(() => {
        !I && (N || (false === n && (T.current = 0, null != S.current && (clearTimeout(S.current), S.current = null)), T.current = Date.now(), S.current = setTimeout(() => {
          let e = T.current;
          if (0 !== e && false !== n && !(Date.now() - e < b) && !v) {
            if (null != A.current) {
              var r;
              let {
                x: e,
                y: n,
                width: i,
                height: o
              } = null == (r = A.current) ? true : r.getBoundingClientRect();
              (0, m.Z)(t, {
                x: e,
                y: n - 20,
                w: i,
                h: o
              }, true, p.LL.UserTriggered)
            } else(0, m.Z)(t, true, true, p.LL.UserTriggered);
            C(true), c.Z.dispatch({
              type: "POTIONS_SET_CONFETTI_MODE",
              enabled: true
            })
          }
        }, b + 100)))
      }, [v, N, n, t, I]), !(0, h.p7)("Message Confetti Peak") || !(0, g.Uw)(t)) return null;
    let P = (0, g.Eq)(t);
    if (null == P) return null;
    if (o) return <span className={E.hidden} aria-hidden={"true"} />;
    let w = P.emoji[0],
      D = null == w.id ? f.ZP.getURL(w.name) : d.ZP.getEmojiURL({
        id: w.id,
        animated: false,
        size: 32,
        forcePNG: true
      });
    return <div ref={A} className={E.emojiWrapper} style={{
        right: "".concat(y + O, "px")
      }}>{<img alt={""} src={D} className={a()([E.emoji, E.left, R && E.shy, v && E.confettiMode])} width={28} />}{<img alt={""} src={D} className={a()([E.emoji, E.right, R && E.shy, v && E.confettiMode])} width={26} />}{<img alt={""} src={D} className={a()([E.emoji, E.center, R && E.shy, v && E.confettiMode])} width={32} />}</div>
  }