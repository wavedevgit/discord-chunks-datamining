/** Chunk was on web.js **/
/** chunk id: 110818, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Db: () => A,
  HC: () => O,
  NQ: () => E,
  fe: () => L
}), require("./388685.js");
var r, i, a, o, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  u = require.n(Chunk120356),
  Chunk620792 = require("./620792.js"),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk115164 = require("./115164.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var h = function(e) {
  return e.NORMAL = "normal", e.SPEED_START = "speed_start", e.SPEED_LOOP = "speed_loop", e.FINISH = "finish", e.IDLE = "idle", e
}(h || {});
let g = {
  normal: {
    BEG: 0,
    END: 600,
    shouldForcePlayAfter: true
  },
  speed_start: {
    BEG: 601,
    END: 636
  },
  speed_loop: {
    BEG: 637,
    END: 668
  },
  finish: {
    BEG: 669,
    END: 870
  },
  idle: {
    BEG: 871,
    END: 878
  }
};
class E extends(r = Chunk473749.PureComponent) {
  static getNextScene(e) {
    switch (e) {
      case E.Scenes.SPEED_START:
        return E.Scenes.SPEED_LOOP;
      case E.Scenes.FINISH:
        return E.Scenes.IDLE;
      default:
        return e
    }
  }
  importDefault() {
    return require.e("92668").then(require.t.bind(require, 92668, 19)).then(e => {
      let {
        default: t
      } = e;
      return t
    })
  }
  render() {
    let {
      className: e,
      nextScene: t,
      onScenePlay: n,
      onSceneComplete: r,
      pause: i,
      pauseWhileUnfocused: a
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk481060.kci, {
      className: u()(Chunk115164.sequencedAnimation, module),
      importData: this.importDefault,
      nextScene: i ? "idle" : exports,
      sceneSegments: g,
      onScenePlay: require,
      onSceneComplete: r,
      pauseWhileUnfocused: a,
      pause: i
    })
  }
}
m(E, "Scenes", h);
var b = function(e) {
  return e.NORMAL = "normal", e.SPEED_START = "speed_start", e.SPEED_LOOP = "speed_loop", e.FINISH = "finish", e.IDLE = "idle", e
}(b || {});
let y = {
  normal: {
    BEG: 0,
    END: 600,
    shouldForcePlayAfter: true
  },
  speed_start: {
    BEG: 601,
    END: 636
  },
  speed_loop: {
    BEG: 637,
    END: 668
  },
  finish: {
    BEG: 669,
    END: 870
  },
  idle: {
    BEG: 871,
    END: 878
  }
};
class O extends(i = Chunk473749.PureComponent) {
  static getNextScene(e) {
    switch (e) {
      case O.Scenes.SPEED_START:
        return O.Scenes.SPEED_LOOP;
      case O.Scenes.FINISH:
        return O.Scenes.IDLE;
      default:
        return e
    }
  }
  importDefault() {
    return require.e("45884").then(require.t.bind(require, 35065, 19)).then(e => {
      let {
        default: t
      } = e;
      return t
    })
  }
  render() {
    let {
      className: e,
      nextScene: t,
      onScenePlay: n,
      onSceneComplete: r,
      pause: i,
      pauseWhileUnfocused: a
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk481060.kci, {
      className: u()(Chunk115164.sequencedAnimation, module),
      importData: this.importDefault,
      nextScene: i ? "idle" : exports,
      sceneSegments: y,
      onScenePlay: require,
      onSceneComplete: r,
      pauseWhileUnfocused: a,
      pause: i
    })
  }
}
m(O, "Scenes", b);
var v = function(e) {
  return e.IDLE_ENTRY = "idle_entry", e.IDLE_LOOP = "idle_loop", e.BOOST_START = "boost_start", e.BOOST_LOOP = "boost_loop", e.BOOST_END = "boost_end", e.VICTORY = "victory", e.ERROR = "error", e
}(v || {});
let S = {
  idle_entry: {
    BEG: 0,
    END: 50
  },
  idle_loop: {
    BEG: 50,
    END: 230,
    shouldForcePlayAfter: true
  },
  boost_start: {
    BEG: 230,
    END: 275
  },
  boost_loop: {
    BEG: 275,
    END: 290
  },
  boost_end: {
    BEG: 386,
    END: 455
  },
  victory: {
    BEG: 470,
    END: 525
  },
  error: {
    BEG: 290,
    END: 375
  }
};
class I extends Chunk473749.PureComponent {
  getStyle(e) {
    let {
      animation: t
    } = this.props;
    return {
      transform: [{
        translateX: t.x.interpolate({
          inputRange: [0, 1],
          outputRange: e ? ["100%", "0%"] : ["0%", "-100%"]
        })
      }, {
        translateY: t.y.interpolate({
          inputRange: [0, 1],
          outputRange: ["100%", "0%"]
        })
      }]
    }
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk115164.panningAnimation,
      children: [(0, Chunk54381.jsx)(Chunk748780.Z.div, {
        className: module,
        style: this.getStyle(false)
      }), (0, Chunk54381.jsx)(Chunk748780.Z.div, {
        className: module,
        style: this.getStyle(true)
      })]
    })
  }
}
let T = Object.freeze({
    IDLE_ENTRY: {
      toValue: 1,
      duration: 1500
    },
    IDLE_LOOP: {
      toValue: 1,
      duration: 6e3,
      easing: Chunk748780.Z.Easing.linear
    },
    BOOST_START: {
      toValue: 0,
      duration: 2e3,
      delay: 500
    },
    ERROR: {
      toValue: 1,
      duration: 1500,
      delay: 1e3
    }
  }),
  C = 1.2;
class A extends(a = Chunk473749.PureComponent) {
  static getNextScene(e) {
    switch (e) {
      case A.Scenes.IDLE_ENTRY:
        return A.Scenes.IDLE_LOOP;
      case A.Scenes.BOOST_START:
        return A.Scenes.BOOST_LOOP;
      case A.Scenes.BOOST_END:
        return A.Scenes.VICTORY;
      case A.Scenes.VICTORY:
        return A.Scenes.IDLE_ENTRY;
      case A.Scenes.ERROR:
        return A.Scenes.IDLE_LOOP;
      default:
        return e
    }
  }
  componentWillUnmount() {
    this.didUnmount = true
  }
  importData() {
    return require.e("89506").then(require.t.bind(require, 88032, 19)).then(e => {
      let {
        default: t
      } = e;
      return t
    })
  }
  animateEntry(e) {
    f.Z.parallel([f.Z.timing(this.foregroundAnimation.y, {
      toValue: e.toValue,
      duration: e.duration,
      delay: e.delay || 0
    }), f.Z.timing(this.backgroundAnimation.y, {
      toValue: e.toValue,
      duration: e.duration * C,
      delay: e.delay || 0
    })]).start()
  }
  animateIdleEntry() {
    this.animateEntry(T.IDLE_ENTRY)
  }
  animateError() {
    this.animateEntry(T.ERROR)
  }
  animateIdleLoop() {
    this.animateIdleLoopBackground(), this.animateIdleLoopForeground()
  }
  animateBoostStart() {
    Chunk748780.Z.parallel([Chunk748780.Z.timing(this.foregroundAnimation.y, {
      toValue: T.BOOST_START.toValue,
      duration: T.BOOST_START.duration,
      delay: T.BOOST_START.delay
    }), Chunk748780.Z.timing(this.backgroundAnimation.y, {
      toValue: T.BOOST_START.toValue,
      duration: T.BOOST_START.duration * C,
      delay: T.BOOST_START.delay
    })]).start()
  }
  render() {
    let {
      className: e,
      nextScene: t,
      pause: n,
      onSceneComplete: r
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      className: u()(Chunk115164.tier2Animation, module),
      children: [require ? (0, Chunk54381.jsxs)("div", {
        className: Chunk115164.panningAnimation,
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk115164.tier2Background
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk115164.tier2Foreground
        })]
      }) : (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(I, {
          className: Chunk115164.tier2Background,
          animation: this.backgroundAnimation
        }), (0, Chunk54381.jsx)(I, {
          className: Chunk115164.tier2Foreground,
          animation: this.foregroundAnimation
        })]
      }), (0, Chunk54381.jsx)(Chunk481060.kci, {
        className: Chunk115164.sequencedAnimation,
        importData: this.importData,
        nextScene: require ? "idle_loop" : exports,
        sceneSegments: S,
        onScenePlay: this.handleScenePlay,
        onSceneComplete: r,
        pauseWhileUnfocused: false,
        pause: require
      })]
    })
  }
  constructor(...e) {
    super(...e), m(this, "backgroundAnimation", new f.Z.ValueXY({
      x: 0,
      y: 0
    })), m(this, "foregroundAnimation", new f.Z.ValueXY({
      x: 0,
      y: 0
    })), m(this, "didUnmount", false), m(this, "animateIdleLoopBackground", () => {
      this.didUnmount || (this.backgroundAnimation.x.setValue(0), f.Z.timing(this.backgroundAnimation.x, {
        toValue: T.IDLE_LOOP.toValue,
        duration: T.IDLE_LOOP.duration * C,
        easing: f.Z.Easing.linear
      }).start(this.animateIdleLoopBackground))
    }), m(this, "animateIdleLoopForeground", () => {
      this.didUnmount || (this.foregroundAnimation.x.setValue(0), f.Z.timing(this.foregroundAnimation.x, {
        toValue: T.IDLE_LOOP.toValue,
        duration: T.IDLE_LOOP.duration,
        easing: T.IDLE_LOOP.easing
      }).start(this.animateIdleLoopForeground))
    }), m(this, "handleScenePlay", e => {
      switch (e) {
        case "idle_entry":
          this.animateIdleEntry(), this.animateIdleLoop();
          break;
        case "error":
          this.animateError();
          break;
        case "boost_start":
          this.animateBoostStart()
      }
      let {
        onScenePlay: t
      } = this.props;
      null != t && t(e)
    })
  }
}
m(A, "Scenes", v);
var N = function(e) {
  return e.ENTRY = "entry", e.IDLE = "idle", e.STARS = "stars", e.ERROR = "error", e.SUCCESS = "success", e
}(N || {});
let P = {
    entry: {
      BEG: 0,
      END: 180
    },
    idle: {
      BEG: 180,
      END: 360,
      shouldForcePlayAfter: true
    },
    stars: {
      BEG: 180,
      END: 360,
      shouldForcePlayAfter: true
    },
    error: {
      BEG: 360,
      END: 540
    },
    success: {
      BEG: 540,
      END: 778
    }
  },
  R = Object.freeze({
    WHITE: "#ebf0f7",
    PINK: "#fa6ef6"
  }),
  w = [{
    left: 29,
    top: 100,
    color: R.WHITE
  }, {
    left: 245,
    top: 11,
    color: R.PINK
  }, {
    left: 393,
    top: 22,
    color: R.WHITE
  }, {
    left: 74,
    top: 30,
    color: R.PINK
  }, {
    left: 188,
    top: 9,
    color: R.WHITE
  }, {
    left: 379,
    top: 97,
    color: R.PINK
  }],
  D = Object.freeze({
    SCALE_INITIAL: 0,
    SCALE_MIDDLE: 1,
    SCALE_END: 0,
    ROTATE_INITIAL: 0,
    ROTATE_MIDDLE: 180,
    ROTATE_END: 360,
    DELAY_MIN: 200,
    DELAY_MAX: 500,
    DELAY_STAGGER: 200,
    DURATION_MIDDLE: 400,
    DURATION_END: 250,
    SIZE_MIN: 7,
    SIZE_MAX: 15,
    EASING_MIDDLE: Chunk748780.Z.Easing.bezier(.3, .01, 0, .99),
    EASING_END: Chunk748780.Z.Easing.bezier(0, false, .99, 0)
  });

function x(e) {
  let {
    animate: t
  } = e, [n, r] = l.useState(0), i = (0, p.bYB)(w.length, w.map((e, i) => {
    let a = i > 0 ? D.DELAY_STAGGER * i + Math.random() * (D.DELAY_MAX - D.DELAY_MIN) + D.DELAY_MIN : 0,
      o = Math.random() * (D.SIZE_MAX - D.SIZE_MIN) + D.SIZE_MIN;
    return {
      from: {
        scale: D.SCALE_INITIAL,
        rotate: D.ROTATE_INITIAL,
        top: e.top,
        left: e.left,
        width: o,
        height: o
      },
      to: async e => {
        t ? (await e({
          scale: D.SCALE_MIDDLE,
          rotate: D.ROTATE_MIDDLE,
          delay: a,
          config: {
            duration: D.DURATION_MIDDLE,
            easing: D.EASING_MIDDLE
          }
        }), await e({
          scale: D.SCALE_END,
          rotate: D.ROTATE_END,
          config: {
            duration: D.DURATION_END,
            easing: D.EASING_END
          }
        }), await e({
          scale: D.SCALE_INITIAL,
          rotate: D.ROTATE_INITIAL,
          immediate: true
        }), i === w.length - 1 && r(n + 1)) : await e({
          scale: D.SCALE_INITIAL,
          rotate: D.ROTATE_INITIAL
        })
      }
    }
  }));
  return (0, s.jsx)(s.Fragment, {
    children: i.map((e, t) => {
      let n = w[t];
      return (0, s.jsx)(d.animated.svg, {
        style: e,
        className: _.guildStar,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12.14 12.24",
        children: (0, s.jsx)("path", {
          d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
          fill: n.color
        })
      }, t)
    })
  })
}
class L extends(o = Chunk473749.PureComponent) {
  static getNextScene(e) {
    switch (e) {
      case "entry":
      case "error":
      case "success":
        return "idle";
      default:
        return e
    }
  }
  importData() {
    return require.e("75564").then(require.t.bind(require, 134072, 19)).then(e => {
      let {
        default: t
      } = e;
      return t
    })
  }
  render() {
    let {
      className: e,
      nextScene: t,
      pause: n,
      onScenePlay: r,
      onSceneComplete: i,
      pauseWhileUnfocused: a
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      className: u()(Chunk115164.guildWrapper, module),
      children: [(0, Chunk54381.jsx)(Chunk481060.kci, {
        className: Chunk115164.guildBackground,
        importData: this.importData,
        nextScene: require ? "idle" : exports,
        sceneSegments: P,
        onScenePlay: r,
        onSceneComplete: i,
        pauseWhileUnfocused: a,
        pause: require
      }), (0, Chunk54381.jsx)(x, {
        animate: !require && "stars" === exports
      })]
    })
  }
}
m(L, "Scenes", N)