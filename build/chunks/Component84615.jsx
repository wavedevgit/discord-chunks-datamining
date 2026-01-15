/** Chunk was on web.js **/
/** chunk id: 84615, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ox: () => A,
  QP: () => S,
  ob: () => P,
  q4: () => N
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk97613 = require("./97613.js"),
  o = require.n(Chunk97613),
  Chunk757275 = require("./757275.js"),
  Chunk818537 = require("./818537.js"),
  Chunk663042 = require("./663042.js"),
  Chunk731965 = require("./731965.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk714338 = require("./714338.js"),
  Chunk624138 = require("./624138.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk308569 = require("./308569.js"),
  Chunk73822 = require("./73822.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
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

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = (0, Chunk624138.Mg)(Chunk477690.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION),
  S = (0, Chunk663042.U)(e => ({
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
    item: t,
    containerRef: n
  } = e;
  return (0, f.Tbt)(n), i.useEffect(() => (p.Z.disable(), t.key !== m.CV && p.Z.enableTemp(w(t.key)), () => {
    p.Z.disableTemp()
  }), [t.key]), (0, r.jsx)(t.LayerComponent, {
    children: (0, r.jsxs)("div", {
      className: g.root,
      ref: n,
      children: [(0, r.jsx)("div", {
        className: g.drag
      }), t.render({
        transitionState: null != t ? t.transitionState : 3,
        closeLayer: () => P(t.key)
      })]
    })
  })
}
let T = {
    enter: Chunk73822.enter,
    enterActive: Chunk73822.enterActive,
    enterDone: Chunk73822.enterDone,
    exit: Chunk73822.exit,
    exitActive: Chunk73822.exitActive,
    exitDone: Chunk73822.exitDone
  },
  C = {
    enter: Chunk73822.enterReducedMotion,
    enterActive: Chunk73822.enterActiveReducedMotion,
    enterDone: Chunk73822.enterDoneReducedMotion,
    exit: Chunk73822.exitReducedMotion,
    exitActive: Chunk73822.exitActiveReducedMotion,
    exitDone: Chunk73822.exitDoneReducedMotion
  };

function A() {
  let {
    reducedMotion: e
  } = i.useContext(f.Sfi), t = e.enabled ? C : T, n = S(e => e.fullScreenLayers), a = n.map(e => ({
    item: e,
    nodeRef: i.createRef()
  }));
  return (0, r.jsx)(s.Z, {
    children: a.map(e => {
      let {
        item: i,
        nodeRef: a
      } = e;
      return (0, r.jsx)(l.Z, {
        nodeRef: a,
        classNames: i.options.disableAnimation ? true : t,
        timeout: v,
        onEntered: () => {
          (0, u.j)(() => {
            S.setState({
              fullScreenLayers: n.map(e => e.key === i.key ? O(b({}, e), {
                transitionState: 2
              }) : e)
            })
          })
        },
        unmountOnExit: true,
        children: (0, r.jsx)(I, {
          containerRef: a,
          item: i
        })
      }, i.key)
    })
  })
}

function N(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Object.freeze({}),
    {
      layerKey: n,
      Layer: r,
      disableAnimation: i = false,
      showAppUnderLayer: a = false
    } = t,
    s = null != n ? n : o()();
  return (0, u.j)(() => {
    S.setState(t => ({
      fullScreenLayers: [...t.fullScreenLayers, {
        key: s,
        transitionState: 1,
        LayerComponent: null != r ? r : h.ZP,
        render: e,
        options: {
          disableAnimation: i,
          showAppUnderLayer: a
        }
      }]
    }))
  }), s
}

function P(e) {
  (0, u.j)(() => {
    S.setState(t => ({
      fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
    }))
  })
}

function w(e) {
  return {
    POP_LAYER: {
      binds: ["esc"],
      comboKeysBindGlobal: true,
      action() {
        P(e)
      }
    }
  }
}