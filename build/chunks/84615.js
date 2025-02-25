/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Ox: () => A,
  QP: () => S,
  ob: () => R,
  q4: () => C
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(97613),
  a = n.n(o),
  s = n(858863),
  l = n(5188),
  c = n(15729),
  u = n(731965),
  d = n(477690),
  f = n(481060),
  _ = n(714338),
  p = n(624138),
  h = n(314910),
  g = n(308569),
  m = n(852915);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = (0, p.Mg)(d.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION),
  S = (0, c.U)(e => ({
    fullScreenLayers: [],
    addLayer: t => (0, u.j)(() => {
      e(e => {
        let {
          fullScreenLayers: n
        } = e;
        return {
          fullScreenLayers: [...n, t]
        }
      })
    })
  }));

function I(e) {
  let {
    item: t
  } = e, n = i.useRef(null);
  return (0, f.Tbt)(n), i.useEffect(() => (_.Z.disable(), t.key !== g.CV && _.Z.enableTemp(P(t.key)), () => {
    _.Z.disableTemp()
  }), [t.key]), (0, r.jsx)(t.LayerComponent, {
    children: (0, r.jsxs)("div", {
      className: m.root,
      ref: n,
      children: [(0, r.jsx)("div", {
        className: m.drag
      }), t.render({
        transitionState: null != t ? t.transitionState : 3,
        closeLayer: () => R(t.key)
      })]
    })
  })
}
let T = {
    enter: m.enter,
    enterActive: m.enterActive,
    enterDone: m.enterDone,
    exit: m.exit,
    exitActive: m.exitActive,
    exitDone: m.exitDone
  },
  N = {
    enter: m.enterReducedMotion,
    enterActive: m.enterActiveReducedMotion,
    enterDone: m.enterDoneReducedMotion,
    exit: m.exitReducedMotion,
    exitActive: m.exitActiveReducedMotion,
    exitDone: m.exitDoneReducedMotion
  };

function A() {
  let {
    reducedMotion: e
  } = i.useContext(f.Sfi), t = e.enabled ? N : T, n = S(e => e.fullScreenLayers);
  return (0, r.jsx)(s.Z, {
    children: n.map(e => (0, r.jsx)(l.Z, {
      classNames: t,
      timeout: O,
      onEntered: () => {
        (0, u.j)(() => {
          S.setState({
            fullScreenLayers: n.map(t => t.key === e.key ? y(v({}, t), {
              transitionState: 2
            }) : t)
          })
        })
      },
      unmountOnExit: !0,
      children: (0, r.jsx)(I, {
        item: e
      })
    }, e.key))
  })
}

function C(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
    {
      layerKey: n,
      Layer: r
    } = t,
    i = null != n ? n : a()();
  return (0, u.j)(() => {
    S.setState(t => ({
      fullScreenLayers: [...t.fullScreenLayers, {
        key: i,
        transitionState: 1,
        LayerComponent: null != r ? r : h.ZP,
        render: e
      }]
    }))
  }), i
}

function R(e) {
  (0, u.j)(() => {
    S.setState(t => ({
      fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
    }))
  })
}

function P(e) {
  return {
    POP_LAYER: {
      binds: ["esc"],
      comboKeysBindGlobal: !0,
      action() {
        R(e)
      }
    }
  }
}