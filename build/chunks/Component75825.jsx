/** Chunk was on web.js **/
/** chunk id: 75825, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk920569 = require("./920569.js"),
  Chunk788868 = require("./788868.js");

function u(e) {
  let {
    giftStyle: t,
    className: n,
    shouldAnimate: u = true,
    defaultAnimationState: d,
    idleAnimationState: f
  } = e, p = (0, a.bG)([o.A], () => o.A.useReducedMotion), [_, h] = i.useState(d), m = i.useRef((0, l.z)(t, _)), [g, E] = i.useState(null == f), [y, b] = i.useState(false), [O, v] = i.useState(false), A = () => {
    m.current = (0, l.z)(t, _), v(e => e + 1)
  }, I = () => {
    E(false), b(true), v(false), h(d)
  };
  i.useEffect(() => {
    null == f && h(d)
  }, [f, d]);
  let S = {
      applyAnimation: A,
      idleAnimationState: f,
      isChanging: y,
      resetAnimation: I,
      versionKey: O
    },
    T = i.useRef(S);
  i.useEffect(() => {
    T.current = S
  }), i.useEffect(() => {
    let {
      resetAnimation: e,
      versionKey: t,
      applyAnimation: n
    } = T.current;
    null != f && t >= 0 ? e() : n()
  }, [t, f]), i.useEffect(() => {
    let {
      applyAnimation: e,
      isChanging: t,
      idleAnimationState: n
    } = T.current;
    t && null != n || e()
  }, [_]), i.useEffect(() => {
    let {
      applyAnimation: e,
      idleAnimationState: t
    } = T.current;
    y && (E(null == t), b(false), e())
  }, [y]);
  let C = () => {
    null != f && (h(f), E(true))
  };
  if (!c.o2.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, r.jsx)(s.akl, {
    importData: m.current,
    shouldAnimate: !p && u,
    className: n,
    versionKey: O,
    onComplete: null != f ? C : true,
    loop: g
  })
}