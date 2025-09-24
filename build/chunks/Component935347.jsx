/** Chunk was on 1272 **/
/** chunk id: 935347, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk205355 = require("./205355.js"),
  Chunk607070 = require("./607070.js"),
  Chunk38618 = require("./38618.js"),
  Chunk197344 = require("./197344.js"),
  Chunk460181 = require("./460181.js"),
  Chunk474873 = require("./474873.js"),
  Chunk706454 = require("./706454.js"),
  Chunk215427 = require("./215427.js"),
  Chunk820254 = require("./820254.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk905656 = require("./905656.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk744749 = require("./744749.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class P extends Chunk647438.PureComponent {
  createSound() {
    let {
      soundpack: e
    } = this.props, t = (0, Chunk460181.uk)("discodo", module);
    return exports.volume = 1, exports
  }
  componentDidMount() {
    this.setProblemsTimeout()
  }
  componentDidUpdate(e, t) {
    let {
      ready: n,
      hide: r,
      problems: i
    } = this.state, {
      connected: l,
      soundpack: a
    } = this.props, o = l && n && !r && !i;
    e.soundpack !== a && (this._connectedSound = this.createSound()), e.connected !== l || o ? (l && null != this.videoRef && u.K.get(S.wli) && this._connectedSound.play(), this.setState({
      problems: false,
      hide: l
    })) : t.hide !== r ? (r ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({
      shouldRender: true
    }), setTimeout(() => this.setState({
      shouldRender: !r
    }), 200)) : t.problems !== i && i && p.Z.checkIncidents()
  }
  componentWillUnmount() {
    this.clearProblemsTimeout()
  }
  render() {
    let {
      connected: e,
      incident: t
    } = this.props, {
      hide: n
    } = this.state;
    if (!this.state.shouldRender) return null;
    {
      let i = this._loadingText,
        l = null;
      return null != this._eventLoadingText && (i = this._eventLoadingText), null != exports && (i = exports.name, l = exports.incident_updates[0].body), (0, Chunk951288.jsxs)("div", {
        className: Chunk744749.container,
        "data-fade": require,
        style: {
          "--connecting-container-fade-duration": "".concat(200, "ms"),
          "--connecting-content-fade-duration": "".concat(150, "ms")
        },
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk744749.content,
          children: [(0, Chunk951288.jsx)(Chunk905656.Z, {
            autoPlay: true,
            loop: !module,
            setRef: this.setVideoRef,
            onReady: this.handleReady,
            className: a()(Chunk744749.spinner, this.state.ready ? Chunk744749.ready : "")
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk744749.text,
            children: [null != exports ? null : (0, Chunk951288.jsx)("div", {
              className: Chunk744749.tipTitle,
              children: Chunk388032.intl.string(Chunk388032.t.v0R1Li)
            }), (0, Chunk951288.jsx)("div", {
              className: null != exports ? Chunk744749.title : Chunk744749.tip,
              children: Chunk647438
            }), (0, Chunk951288.jsx)("div", {
              className: Chunk744749.body,
              children: Chunk120356
            })]
          })]
        }), (0, Chunk951288.jsxs)("div", {
          className: a()(Chunk744749.problems, {
            [Chunk744749.slideIn]: this.state.problems
          }),
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk744749.problemsText,
            children: Chunk388032.intl.string(Chunk388032.t.AG2zPD)
          }), (0, Chunk951288.jsxs)("div", {
            children: [(0, Chunk951288.jsxs)(Chunk481060.eee, {
              className: Chunk744749.twitterLink,
              href: Chunk981631.yXt.TWITTER_SUPPORT,
              target: "_blank",
              children: [(0, Chunk951288.jsx)(Chunk481060.TAi, {
                size: "xs",
                color: "currentColor",
                className: Chunk744749.icon
              }), Chunk388032.intl.string(Chunk388032.t.KlyTbm)]
            }), (0, Chunk951288.jsxs)(Chunk481060.eee, {
              className: Chunk744749.statusLink,
              href: Chunk981631.yXt.STATUS,
              target: "_blank",
              children: [(0, Chunk951288.jsx)(Chunk820254.Z, {
                className: Chunk744749.icon
              }), Chunk388032.intl.string(Chunk388032.t.AgXXy8)]
            })]
          })]
        })]
      })
    }
  }
  constructor(e) {
    super(e), N(this, "videoRef", null), N(this, "_noProblemsTimeout", null), N(this, "_problemsTimeout", null), N(this, "_connectedSound", this.createSound()), N(this, "_loadingText", function() {
      let e = [C.intl.string(C.t.Ex79Ky), C.intl.string(C.t["+v5zsb"]), C.intl.string(C.t["RLx6+f"]), C.intl.string(C.t.Q1PZkJ), C.intl.string(C.t.x7sfVl), C.intl.format(C.t.PHuQsb, {
        tabHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "tab",
          className: T.keybind
        }, t)
      }), C.intl.string(C.t.UorX4e), C.intl.string(C.t["il/GZm"]), C.intl.string(C.t.HKBJv7), C.intl.format(C.t["FVVp7+"], {
        F6Hook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "f6",
          className: T.keybind
        }, t),
        tabHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "tab",
          className: T.keybind
        }, t)
      }), C.intl.string(C.t["7Y1hFB"]), C.intl.string(C.t["UcCW7+"]), C.intl.string(C.t.E5GhfX), C.intl.string(C.t.bANqo6), C.intl.string(C.t.yOEVDg), C.intl.string(C.t["u0Ra/P"]), C.intl.string(C.t.un4cQ0), C.intl.string(C.t["2cyYx8"]), C.intl.string(C.t.KCmze3), C.intl.string(C.t["C+hUc3"]), C.intl.string(C.t.I98MEB), C.intl.format(C.t.c0YCIy, {}), C.intl.string(C.t.z8AvIC), C.intl.string(C.t.IjX3Pz), C.intl.string(C.t.lg3CkZ), C.intl.string(C.t["4GaLhY"]), C.intl.string(C.t.qHKbU1), C.intl.string(C.t.mJxKDw), C.intl.string(C.t.iiQBXF), C.intl.string(C.t.YPD46e), C.intl.string(C.t.O8BpgY), C.intl.string(C.t.xzFwfn), C.intl.string(C.t["4G3fsb"]), C.intl.string(C.t["/jPyKC"]), C.intl.string(C.t["8x7D5e"]), C.intl.string(C.t.G6Q8Hx), C.intl.string(C.t["9Cx+xM"]), C.intl.string(C.t.WsZ8dX), C.intl.string(C.t.btoe7O), C.intl.string(C.t.E6Y0j4), C.intl.string(C.t["7KZ819"]), C.intl.string(C.t.hm7OKi), C.intl.string(C.t.H535i4), C.intl.string(C.t["08WJUV"]), C.intl.string(C.t.hhtfys), C.intl.string(C.t.on980d), C.intl.string(C.t.AL6c09), C.intl.string(C.t.iLTeFx), C.intl.string(C.t.b3vSu7), C.intl.string(C.t["f8ao5+"]), C.intl.format(C.t["1v1h8v"], {
        asterisks: "**"
      }), C.intl.format(C.t.MUlAVV, {
        quickSwitcherHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "mod+k",
          className: T.keybind
        }, t)
      }), C.intl.format(C.t.aes5VF, {
        markUnreadHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "alt+click",
          className: T.keybind
        }, t)
      }), C.intl.format(C.t.md9Svr, {
        markServerUnreadHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "shift+esc",
          className: T.keybind
        }, t)
      }), C.intl.format(C.t["X0Tu+v"], {
        navigateUnreadHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "shift+alt+up",
          className: T.keybind
        }, t),
        downHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "down",
          className: T.keybind
        }, t)
      }), C.intl.format(C.t.AkoeIS, {
        keyboardShortcutsHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "mod+/",
          className: T.keybind
        }, t)
      }), C.intl.format(C.t.P9sfAA, {
        messageNewlineHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "shift+return",
          className: T.keybind
        }, t)
      }), C.intl.format(C.t["3Ox33d"], {
        shiftHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "shift",
          className: T.keybind
        }, t)
      }), C.intl.format(C.t.enCV6e, {
        upHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "up",
          className: T.keybind
        }, t)
      })];
      return _.default.locale.startsWith("en-") && e.push(C.intl.string(C.t.dQ9Wqq)), e[s().random(e.length - 1)]
    }()), N(this, "_eventLoadingText", function() {
      let e = g.Z.getLoadingTips();
      if (null != e && e.length > 0) return e[s().random(e.length - 1)]
    }()), N(this, "handleReady", () => {
      this.setState({
        ready: true
      }), (0, y.isDesktop)() && (v.ZP.send("UPDATED_QUOTES", ["Hold Tight — Loading Discord"]), v.ZP.send("UPDATE_OPEN_ON_STARTUP"))
    }), N(this, "setVideoRef", e => {
      this.videoRef = e
    }), N(this, "setProblemsTimeout", () => {
      null == this._problemsTimeout && (this._problemsTimeout = setTimeout(() => this.setState({
        problems: true
      }), 1e4))
    }), N(this, "clearProblemsTimeout", () => {
      clearTimeout(this._problemsTimeout), this._problemsTimeout = null
    });
    let {
      connected: t
    } = e;
    this.state = {
      ready: t,
      hide: t,
      problems: false,
      shouldRender: !t
    }, this._connectedSound.volume = 1
  }
}
let j = Chunk442837.ZP.connectStores([Chunk38618.Z, Chunk215427.Z, Chunk474873.Z, Chunk607070.Z], () => ({
  isTryingToConnect: Chunk38618.Z.isTryingToConnect(),
  connected: Chunk38618.Z.isConnected(),
  incident: Chunk215427.Z.getIncident(),
  soundpack: Chunk474873.Z.getSoundpack(),
  reducedMotion: Chunk607070.Z.useReducedMotion
}))(e => {
  let {
    isTryingToConnect: t,
    connected: n,
    incident: i,
    soundpack: l,
    reducedMotion: a
  } = e;
  return t ? (0, r.jsx)(P, {
    reducedMotion: a,
    soundpack: l,
    connected: n,
    incident: i
  }) : null
})