/** Chunk was on web.js **/
/** chunk id: 796012, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V1: () => L,
  rF: () => O,
  yC: () => C,
  yh: () => E
}), require("./896048.js");
var r, i, a, s, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  u = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk615300 = require("./615300.js"),
  Chunk397927 = require("./397927.js"),
  Chunk531726 = require("./531726.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var m = function(e) {
  return e.NORMAL = "normal", e.SPEED_START = "speed_start", e.SPEED_LOOP = "speed_loop", e.FINISH = "finish", e.IDLE = "idle", e
}(m || {});
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
class E extends(r = Chunk64700.PureComponent) {
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
    return n.e("78503").then(n.t.bind(n, 635489, 19)).then(e => {
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
    return (0, o.jsx)(p.tvC, {
      className: u()(_.AI, e),
      importData: this.importDefault,
      nextScene: i ? "idle" : t,
      sceneSegments: g,
      onScenePlay: n,
      onSceneComplete: r,
      pauseWhileUnfocused: a,
      pause: i
    })
  }
}
h(E, "Scenes", m);
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
class O extends(i = Chunk64700.PureComponent) {
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
    return n.e("19898").then(n.t.bind(n, 262546, 19)).then(e => {
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
    return (0, o.jsx)(p.tvC, {
      className: u()(_.AI, e),
      importData: this.importDefault,
      nextScene: i ? "idle" : t,
      sceneSegments: y,
      onScenePlay: n,
      onSceneComplete: r,
      pauseWhileUnfocused: a,
      pause: i
    })
  }
}
h(O, "Scenes", b);
var A = function(e) {
  return e.IDLE_ENTRY = "idle_entry", e.IDLE_LOOP = "idle_loop", e.BOOST_START = "boost_start", e.BOOST_LOOP = "boost_loop", e.BOOST_END = "boost_end", e.VICTORY = "victory", e.ERROR = "error", e
}(A || {});
let v = {
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
class S extends Chunk64700.PureComponent {
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
    return (0, o.jsxs)("div", {
      className: _.I5,
      children: [(0, o.jsx)(f.A.div, {
        className: e,
        style: this.getStyle(false)
      }), (0, o.jsx)(f.A.div, {
        className: e,
        style: this.getStyle(true)
      })]
    })
  }
}
let I = Object.freeze({
    IDLE_ENTRY: {
      toValue: 1,
      duration: 1500
    },
    IDLE_LOOP: {
      toValue: 1,
      duration: 6e3,
      easing: Chunk615300.A.Easing.linear
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
  T = 1.2;
class C extends(a = Chunk64700.PureComponent) {
  static getNextScene(e) {
    switch (e) {
      case C.Scenes.IDLE_ENTRY:
        return C.Scenes.IDLE_LOOP;
      case C.Scenes.BOOST_START:
        return C.Scenes.BOOST_LOOP;
      case C.Scenes.BOOST_END:
        return C.Scenes.VICTORY;
      case C.Scenes.VICTORY:
        return C.Scenes.IDLE_ENTRY;
      case C.Scenes.ERROR:
        return C.Scenes.IDLE_LOOP;
      default:
        return e
    }
  }
  componentWillUnmount() {
    this.didUnmount = true
  }
  importData() {
    return n.e("69421").then(n.t.bind(n, 548375, 19)).then(e => {
      let {
        default: t
      } = e;
      return t
    })
  }
  animateEntry(e) {
    f.A.parallel([f.A.timing(this.foregroundAnimation.y, {
      toValue: e.toValue,
      duration: e.duration,
      delay: e.delay || 0
    }), f.A.timing(this.backgroundAnimation.y, {
      toValue: e.toValue,
      duration: e.duration * T,
      delay: e.delay || 0
    })]).start()
  }
  animateIdleEntry() {
    this.animateEntry(I.IDLE_ENTRY)
  }
  animateError() {
    this.animateEntry(I.ERROR)
  }
  animateIdleLoop() {
    this.animateIdleLoopBackground(), this.animateIdleLoopForeground()
  }
  animateBoostStart() {
    f.A.parallel([f.A.timing(this.foregroundAnimation.y, {
      toValue: I.BOOST_START.toValue,
      duration: I.BOOST_START.duration,
      delay: I.BOOST_START.delay
    }), f.A.timing(this.backgroundAnimation.y, {
      toValue: I.BOOST_START.toValue,
      duration: I.BOOST_START.duration * T,
      delay: I.BOOST_START.delay
    })]).start()
  }
  render() {
    let {
      className: e,
      nextScene: t,
      pause: n,
      onSceneComplete: r
    } = this.props;
    return (0, o.jsxs)("div", {
      className: u()(_.nv, e),
      children: [n ? (0, o.jsxs)("div", {
        className: _.I5,
        children: [(0, o.jsx)("div", {
          className: _.RK
        }), (0, o.jsx)("div", {
          className: _.aM
        })]
      }) : (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(S, {
          className: _.RK,
          animation: this.backgroundAnimation
        }), (0, o.jsx)(S, {
          className: _.aM,
          animation: this.foregroundAnimation
        })]
      }), (0, o.jsx)(p.tvC, {
        className: _.AI,
        importData: this.importData,
        nextScene: n ? "idle_loop" : t,
        sceneSegments: v,
        onScenePlay: this.handleScenePlay,
        onSceneComplete: r,
        pauseWhileUnfocused: false,
        pause: n
      })]
    })
  }
  constructor(...e) {
    super(...e), h(this, "backgroundAnimation", new f.A.ValueXY({
      x: 0,
      y: 0
    })), h(this, "foregroundAnimation", new f.A.ValueXY({
      x: 0,
      y: 0
    })), h(this, "didUnmount", false), h(this, "animateIdleLoopBackground", () => {
      this.didUnmount || (this.backgroundAnimation.x.setValue(0), f.A.timing(this.backgroundAnimation.x, {
        toValue: I.IDLE_LOOP.toValue,
        duration: I.IDLE_LOOP.duration * T,
        easing: f.A.Easing.linear
      }).start(this.animateIdleLoopBackground))
    }), h(this, "animateIdleLoopForeground", () => {
      this.didUnmount || (this.foregroundAnimation.x.setValue(0), f.A.timing(this.foregroundAnimation.x, {
        toValue: I.IDLE_LOOP.toValue,
        duration: I.IDLE_LOOP.duration,
        easing: I.IDLE_LOOP.easing
      }).start(this.animateIdleLoopForeground))
    }), h(this, "handleScenePlay", e => {
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
h(C, "Scenes", A);
var N = function(e) {
  return e.ENTRY = "entry", e.IDLE = "idle", e.STARS = "stars", e.ERROR = "error", e.SUCCESS = "success", e
}(N || {});
let R = {
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
  w = Object.freeze({
    WHITE: "#ebf0f7",
    PINK: "#fa6ef6"
  }),
  P = [{
    left: 29,
    top: 100,
    color: w.WHITE
  }, {
    left: 245,
    top: 11,
    color: w.PINK
  }, {
    left: 393,
    top: 22,
    color: w.WHITE
  }, {
    left: 74,
    top: 30,
    color: w.PINK
  }, {
    left: 188,
    top: 9,
    color: w.WHITE
  }, {
    left: 379,
    top: 97,
    color: w.PINK
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
    EASING_MIDDLE: Chunk615300.A.Easing.bezier(.3, .01, 0, .99),
    EASING_END: Chunk615300.A.Easing.bezier(0, false, .99, 0)
  });

function x(e) {
  let {
    animate: t
  } = e, [n, r] = l.useState(0), i = (0, p.mX6)(P.length, P.map((e, i) => {
    let a = i > 0 ? D.DELAY_STAGGER * i + Math.random() * (D.DELAY_MAX - D.DELAY_MIN) + D.DELAY_MIN : 0,
      s = Math.random() * (D.SIZE_MAX - D.SIZE_MIN) + D.SIZE_MIN;
    return {
      from: {
        scale: D.SCALE_INITIAL,
        rotate: D.ROTATE_INITIAL,
        top: e.top,
        left: e.left,
        width: s,
        height: s
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
        }), i === P.length - 1 && r(n + 1)) : await e({
          scale: D.SCALE_INITIAL,
          rotate: D.ROTATE_INITIAL
        })
      }
    }
  }));
  return (0, o.jsx)(o.Fragment, {
    children: i.map((e, t) => {
      let n = P[t];
      return (0, o.jsx)(d.animated.svg, {
        style: e,
        className: _.Sw,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12.14 12.24",
        children: (0, o.jsx)("path", {
          d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
          fill: n.color
        })
      }, t)
    })
  })
}
class L extends(s = Chunk64700.PureComponent) {
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
    return n.e("45870").then(n.t.bind(n, 738503, 19)).then(e => {
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
    return (0, o.jsxs)("div", {
      className: u()(_.JL, e),
      children: [(0, o.jsx)(p.tvC, {
        className: _.i_,
        importData: this.importData,
        nextScene: n ? "idle" : t,
        sceneSegments: R,
        onScenePlay: r,
        onSceneComplete: i,
        pauseWhileUnfocused: a,
        pause: n
      }), (0, o.jsx)(x, {
        animate: !n && "stars" === t
      })]
    })
  }
}
h(L, "Scenes", N)