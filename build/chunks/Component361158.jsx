/** Chunk was on web.js **/
/** chunk id: 361158, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B8: () => N,
  dF: () => w,
  up: () => C,
  xr: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk296489 = require("./296489.js"),
  s = require.n(Chunk296489),
  Chunk89229 = require("./89229.js"),
  Chunk307343 = require("./307343.js"),
  Chunk353640 = require("./353640.js"),
  Chunk121894 = require("./121894.js"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775121 = require("./775121.js"),
  Chunk240248 = require("./240248.js"),
  Chunk750506 = require("./750506.jsx"),
  Chunk87404 = require("./87404.js"),
  Chunk282664 = require("./282664.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
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

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = (0, Chunk240248.xI)(Chunk319060.A.FULL_SCREEN_LAYER_ANIMATION_DURATION),
  A = (0, Chunk353640.v)(e => ({
    fullScreenLayers: [],
    addLayer: t => (0, u.r)(() => {
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
  return (0, f.tjt)(n), i.useEffect(() => (p.A.disable(), t.key !== m._s && p.A.enableTemp(R(t.key)), () => {
    p.A.disableTemp()
  }), [t.key]), (0, r.jsx)(t.LayerComponent, {
    children: (0, r.jsxs)("div", {
      className: g.zr,
      ref: n,
      children: [(0, r.jsx)("div", {
        className: g.$E
      }), t.render({
        transitionState: null != t ? t.transitionState : 3,
        closeLayer: () => w(t.key)
      })]
    })
  })
}
let S = {
    enter: Chunk282664.Ve,
    enterActive: Chunk282664.T8,
    enterDone: Chunk282664.lG,
    exit: Chunk282664.NS,
    exitActive: Chunk282664.N5,
    exitDone: Chunk282664.Dr
  },
  T = {
    enter: Chunk282664.Zf,
    enterActive: Chunk282664.BA,
    enterDone: Chunk282664.zo,
    exit: Chunk282664.ph,
    exitActive: Chunk282664.zX,
    exitDone: Chunk282664.hf
  };

function C() {
  let {
    reducedMotion: e
  } = i.useContext(f.CZY), t = e.enabled ? T : S, n = A(e => e.fullScreenLayers), a = n.map(e => ({
    item: e,
    nodeRef: i.createRef()
  }));
  return (0, r.jsx)(o.A, {
    children: a.map(e => {
      let {
        item: i,
        nodeRef: a
      } = e;
      return (0, r.jsx)(l.A, {
        nodeRef: a,
        classNames: i.options.disableAnimation ? true : t,
        timeout: v,
        onEntered: () => {
          (0, u.r)(() => {
            A.setState({
              fullScreenLayers: n.map(e => e.key === i.key ? O(y({}, e), {
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
    o = null != n ? n : s()();
  return (0, u.r)(() => {
    A.setState(t => ({
      fullScreenLayers: [...t.fullScreenLayers, {
        key: o,
        transitionState: 1,
        LayerComponent: null != r ? r : h.Ay,
        render: e,
        options: {
          disableAnimation: i,
          showAppUnderLayer: a
        }
      }]
    }))
  }), o
}

function w(e) {
  (0, u.r)(() => {
    A.setState(t => ({
      fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
    }))
  })
}

function R(e) {
  return {
    POP_LAYER: {
      binds: ["esc"],
      comboKeysBindGlobal: true,
      action() {
        w(e)
      }
    }
  }
}