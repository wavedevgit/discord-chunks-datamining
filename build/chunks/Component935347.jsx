/** Chunk was on 1272 **/
/** chunk id: 935347, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
class j extends Chunk647438.PureComponent {
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
    } = this.props, s = l && n && !r && !i;
    e.soundpack !== a && (this._connectedSound = this.createSound()), e.connected !== l || s ? (l && null != this.videoRef && u.K.get(C.wli) && this._connectedSound.play(), this.setState({
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
              children: Chunk388032.intl.string(Chunk388032.t.v0R1Lh)
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
            children: Chunk388032.intl.string(Chunk388032.t.AG2zPM)
          }), (0, Chunk951288.jsxs)("div", {
            children: [(0, Chunk951288.jsxs)(Chunk481060.Anchor, {
              className: Chunk744749.twitterLink,
              href: Chunk981631.yXt.TWITTER_SUPPORT,
              target: "_blank",
              children: [(0, Chunk951288.jsx)(Chunk481060.TAi, {
                size: "xs",
                color: "currentColor",
                className: Chunk744749.icon
              }), Chunk388032.intl.string(Chunk388032.t.KlyTbj)]
            }), (0, Chunk951288.jsxs)(Chunk481060.Anchor, {
              className: Chunk744749.statusLink,
              href: Chunk981631.yXt.STATUS,
              target: "_blank",
              children: [(0, Chunk951288.jsx)(Chunk820254.Z, {
                className: Chunk744749.icon
              }), Chunk388032.intl.string(Chunk388032.t.AgXXyy)]
            })]
          })]
        })]
      })
    }
  }
  constructor(e) {
    super(e), N(this, "videoRef", null), N(this, "_noProblemsTimeout", null), N(this, "_problemsTimeout", null), N(this, "_connectedSound", this.createSound()), N(this, "_loadingText", function() {
      let e = [S.intl.string(S.t.Ex79K6), S.intl.string(S.t["+v5zsT"]), S.intl.string(S.t["RLx6+Y"]), S.intl.string(S.t.Q1PZkN), S.intl.string(S.t.x7sfVg), S.intl.format(S.t.PHuQsQ, {
        tabHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "tab",
          className: T.keybind
        }, t)
      }), S.intl.string(S.t.UorX4T), S.intl.string(S.t["il/GZt"]), S.intl.string(S.t.HKBJvw), S.intl.format(S.t.FVVp79, {
        F6Hook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "f6",
          className: T.keybind
        }, t),
        tabHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "tab",
          className: T.keybind
        }, t)
      }), S.intl.string(S.t["7Y1hFH"]), S.intl.string(S.t.UcCW71), S.intl.string(S.t.E5Ghfc), S.intl.string(S.t.bANqo8), S.intl.string(S.t.yOEVDr), S.intl.string(S.t["u0Ra/G"]), S.intl.string(S.t.un4cQ7), S.intl.string(S.t["2cyYx1"]), S.intl.string(S.t.KCmze1), S.intl.string(S.t.I98MEE), S.intl.format(S.t.c0YCIx, {}), S.intl.string(S.t.z8AvIN), S.intl.string(S.t.IjX3P1), S.intl.string(S.t.lg3Ckc), S.intl.string(S.t["4GaLhY"]), S.intl.string(S.t.qHKbUw), S.intl.string(S.t.mJxKDw), S.intl.string(S.t.iiQBXF), S.intl.string(S.t.YPD46Q), S.intl.string(S.t.O8Bpga), S.intl.string(S.t.xzFwfi), S.intl.string(S.t["4G3fsX"]), S.intl.string(S.t["/jPyKC"]), S.intl.string(S.t["8x7D5c"]), S.intl.string(S.t.G6Q8H3), S.intl.string(S.t["9Cx+xL"]), S.intl.string(S.t.WsZ8dW), S.intl.string(S.t.btoe7M), S.intl.string(S.t.E6Y0j7), S.intl.string(S.t["7KZ81/"]), S.intl.string(S.t.hm7OKu), S.intl.string(S.t["H535i+"]), S.intl.string(S.t["08WJUR"]), S.intl.string(S.t.hhtfyi), S.intl.string(S.t.on980U), S.intl.string(S.t.AL6c01), S.intl.string(S.t.iLTeF6), S.intl.string(S.t.b3vSu7), S.intl.string(S.t.f8ao58), S.intl.format(S.t["1v1h8o"], {
        asterisks: "**"
      }), S.intl.format(S.t.MUlAVW, {
        quickSwitcherHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "mod+k",
          className: T.keybind
        }, t)
      }), S.intl.format(S.t.aes5VI, {
        markUnreadHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "alt+click",
          className: T.keybind
        }, t)
      }), S.intl.format(S.t.md9Svv, {
        markServerUnreadHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "shift+esc",
          className: T.keybind
        }, t)
      }), S.intl.format(S.t["X0Tu+u"], {
        navigateUnreadHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "shift+alt+up",
          className: T.keybind
        }, t),
        downHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "down",
          className: T.keybind
        }, t)
      }), S.intl.format(S.t.AkoeIY, {
        keyboardShortcutsHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "mod+/",
          className: T.keybind
        }, t)
      }), S.intl.format(S.t.P9sfAH, {
        messageNewlineHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "shift+return",
          className: T.keybind
        }, t)
      }), S.intl.format(S.t["3Ox33f"], {
        shiftHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "shift",
          className: T.keybind
        }, t)
      }), S.intl.format(S.t.enCV6b, {
        upHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "up",
          className: T.keybind
        }, t)
      })];
      return b.default.locale.startsWith("en-") && e.push(S.intl.string(S.t.dQ9Wqk)), e[o().random(e.length - 1)]
    }()), N(this, "_eventLoadingText", function() {
      let e = h.Z.getLoadingTips();
      if (null != e && e.length > 0) return e[o().random(e.length - 1)]
    }()), N(this, "handleReady", () => {
      this.setState({
        ready: true
      }), (0, I.isDesktop)() && (y.ZP.send("UPDATED_QUOTES", ["Hold Tight — Loading Discord"]), y.ZP.send("UPDATE_OPEN_ON_STARTUP"))
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
let P = Chunk442837.ZP.connectStores([Chunk38618.Z, Chunk215427.Z, Chunk474873.Z, Chunk607070.Z], () => ({
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
  return t ? (0, r.jsx)(j, {
    reducedMotion: a,
    soundpack: l,
    connected: n,
    incident: i
  }) : null
})