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
  } = e, _ = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), [p, h] = i.useState(d), m = i.useRef((0, l._)(t, p)), [g, E] = i.useState(null == f), [b, y] = i.useState(false), [O, v] = i.useState(false), I = () => {
    m.current = (0, l._)(t, p), v(e => e + 1)
  }, T = () => {
    E(false), y(true), v(false), h(d)
  };
  i.useEffect(() => {
    null == f && h(d)
  }, [f, d]);
  let S = {
      applyAnimation: I,
      idleAnimationState: f,
      isChanging: b,
      resetAnimation: T,
      versionKey: O
    },
    A = i.useRef(S);
  i.useEffect(() => {
    A.current = S
  }), i.useEffect(() => {
    let {
      resetAnimation: e,
      versionKey: t,
      applyAnimation: n
    } = A.current;
    if (null != f && t >= 0) return void e();
    n()
  }, [t, f]), i.useEffect(() => {
    let {
      applyAnimation: e,
      isChanging: t,
      idleAnimationState: n
    } = A.current;
    t && null != n || e()
  }, [p]), i.useEffect(() => {
    let {
      applyAnimation: e,
      idleAnimationState: t
    } = A.current;
    b && (E(null == t), y(false), e())
  }, [b]);
  let C = () => {
    null != f && (h(f), E(true))
  };
  if (!c.Cj.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, r.jsx)(o.Fmz, {
    importData: m.current,
    shouldAnimate: !_ && u,
    className: n,
    versionKey: O,
    onComplete: null != f ? C : true,
    loop: g
  })
}