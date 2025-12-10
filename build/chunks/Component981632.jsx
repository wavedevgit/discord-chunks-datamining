/** Chunk was on web.js **/
/** chunk id: 981632, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk409302 = require("./409302.js"),
  Chunk474936 = require("./474936.js");

function u(e) {
  let {
    giftStyle: t,
    className: n,
    shouldAnimate: u = true,
    defaultAnimationState: d,
    idleAnimationState: f
  } = e, p = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), [_, m] = i.useState(d), h = i.useRef((0, l._)(t, _)), [g, E] = i.useState(null == f), [b, y] = i.useState(false), [O, v] = i.useState(false), S = () => {
    h.current = (0, l._)(t, _), v(e => e + 1)
  }, I = () => {
    E(false), y(true), v(false), m(d)
  };
  i.useEffect(() => {
    null == f && m(d)
  }, [f, d]);
  let T = {
      applyAnimation: S,
      idleAnimationState: f,
      isChanging: b,
      resetAnimation: I,
      versionKey: O
    },
    C = i.useRef(T);
  i.useEffect(() => {
    C.current = T
  }), i.useEffect(() => {
    let {
      resetAnimation: e,
      versionKey: t,
      applyAnimation: n
    } = C.current;
    if (null != f && t >= 0) return void e();
    n()
  }, [t, f]), i.useEffect(() => {
    let {
      applyAnimation: e,
      isChanging: t,
      idleAnimationState: n
    } = C.current;
    t && null != n || e()
  }, [_]), i.useEffect(() => {
    let {
      applyAnimation: e,
      idleAnimationState: t
    } = C.current;
    b && (E(null == t), y(false), e())
  }, [b]);
  let A = () => {
    null != f && (m(f), E(true))
  };
  if (!c.Cj.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, r.jsx)(o.Fmz, {
    importData: h.current,
    shouldAnimate: !p && u,
    className: n,
    versionKey: O,
    onComplete: null != f ? A : true,
    loop: g
  })
}