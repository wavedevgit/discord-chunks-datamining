/** Chunk was on 1272 **/
/** chunk id: 935347, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk108427 = require("./108427.js"),
  Chunk706454 = require("./706454.js"),
  Chunk215427 = require("./215427.js"),
  Chunk820254 = require("./820254.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk905656 = require("./905656.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk528195 = require("./528195.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class P extends Chunk473749.PureComponent {
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
    e.soundpack !== a && (this._connectedSound = this.createSound()), e.connected !== l || o ? (l && (0, _.t)(), l && null != this.videoRef && u.K.get(S.wli) && this._connectedSound.play(), this.setState({
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
      return null != this._eventLoadingText && (i = this._eventLoadingText), null != exports && (i = exports.name, l = exports.incident_updates[0].body), (0, Chunk54381.jsxs)("div", {
        className: Chunk528195.container,
        "data-fade": require,
        style: {
          "--connecting-container-fade-duration": "".concat(200, "ms"),
          "--connecting-content-fade-duration": "".concat(150, "ms")
        },
        children: [(0, Chunk54381.jsxs)("div", {
          className: Chunk528195.content,
          children: [(0, Chunk54381.jsx)(Chunk905656.Z, {
            autoPlay: true,
            loop: !module,
            setRef: this.setVideoRef,
            onReady: this.handleReady,
            className: a()(Chunk528195.spinner, this.state.ready ? Chunk528195.ready : "")
          }), (0, Chunk54381.jsxs)("div", {
            className: Chunk528195.text,
            children: [null != exports ? null : (0, Chunk54381.jsx)("div", {
              className: Chunk528195.tipTitle,
              children: Chunk388032.intl.string(Chunk388032.t.v0R1Lh)
            }), (0, Chunk54381.jsx)("div", {
              className: null != exports ? Chunk528195.title : Chunk528195.tip,
              children: Chunk473749
            }), (0, Chunk54381.jsx)("div", {
              className: Chunk528195.body,
              children: Chunk120356
            })]
          })]
        }), (0, Chunk54381.jsxs)("div", {
          className: a()(Chunk528195.problems, {
            [Chunk528195.slideIn]: this.state.problems
          }),
          children: [(0, Chunk54381.jsx)("div", {
            className: Chunk528195.problemsText,
            children: Chunk388032.intl.string(Chunk388032.t.AG2zPM)
          }), (0, Chunk54381.jsxs)("div", {
            children: [(0, Chunk54381.jsxs)(Chunk481060.Anchor, {
              className: Chunk528195.twitterLink,
              href: Chunk981631.yXt.TWITTER_SUPPORT,
              target: "_blank",
              children: [(0, Chunk54381.jsx)(Chunk481060.TAi, {
                size: "xs",
                color: "currentColor",
                className: Chunk528195.icon
              }), Chunk388032.intl.string(Chunk388032.t.KlyTbj)]
            }), (0, Chunk54381.jsxs)(Chunk481060.Anchor, {
              className: Chunk528195.statusLink,
              href: Chunk981631.yXt.STATUS,
              target: "_blank",
              children: [(0, Chunk54381.jsx)(Chunk820254.Z, {
                className: Chunk528195.icon
              }), Chunk388032.intl.string(Chunk388032.t.AgXXyy)]
            })]
          })]
        })]
      })
    }
  }
  constructor(e) {
    super(e), j(this, "videoRef", null), j(this, "_noProblemsTimeout", null), j(this, "_problemsTimeout", null), j(this, "_connectedSound", this.createSound()), j(this, "_loadingText", function() {
      let e = [T.intl.string(T.t.Ex79K6), T.intl.string(T.t["+v5zsT"]), T.intl.string(T.t["RLx6+Y"]), T.intl.string(T.t.Q1PZkN), T.intl.string(T.t.x7sfVg), T.intl.format(T.t.PHuQsQ, {
        tabHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "tab",
          className: N.keybind
        }, t)
      }), T.intl.string(T.t.UorX4T), T.intl.string(T.t["il/GZt"]), T.intl.string(T.t.HKBJvw), T.intl.format(T.t.FVVp79, {
        F6Hook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "f6",
          className: N.keybind
        }, t),
        tabHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "tab",
          className: N.keybind
        }, t)
      }), T.intl.string(T.t["7Y1hFH"]), T.intl.string(T.t.UcCW71), T.intl.string(T.t.E5Ghfc), T.intl.string(T.t.bANqo8), T.intl.string(T.t.yOEVDr), T.intl.string(T.t["u0Ra/G"]), T.intl.string(T.t.un4cQ7), T.intl.string(T.t["2cyYx1"]), T.intl.string(T.t.KCmze1), T.intl.string(T.t.I98MEE), T.intl.format(T.t.c0YCIx, {}), T.intl.string(T.t.z8AvIN), T.intl.string(T.t.IjX3P1), T.intl.string(T.t.lg3Ckc), T.intl.string(T.t["4GaLhY"]), T.intl.string(T.t.qHKbUw), T.intl.string(T.t.mJxKDw), T.intl.string(T.t.iiQBXF), T.intl.string(T.t.YPD46Q), T.intl.string(T.t.O8Bpga), T.intl.string(T.t.xzFwfi), T.intl.string(T.t["4G3fsX"]), T.intl.string(T.t["/jPyKC"]), T.intl.string(T.t["8x7D5c"]), T.intl.string(T.t.G6Q8H3), T.intl.string(T.t["9Cx+xL"]), T.intl.string(T.t.WsZ8dW), T.intl.string(T.t.btoe7M), T.intl.string(T.t.E6Y0j7), T.intl.string(T.t["7KZ81/"]), T.intl.string(T.t.hm7OKu), T.intl.string(T.t["H535i+"]), T.intl.string(T.t["08WJUR"]), T.intl.string(T.t.hhtfyi), T.intl.string(T.t.on980U), T.intl.string(T.t.AL6c01), T.intl.string(T.t.iLTeF6), T.intl.string(T.t.b3vSu7), T.intl.string(T.t.f8ao58), T.intl.format(T.t["1v1h8o"], {
        asterisks: "**"
      }), T.intl.format(T.t.MUlAVW, {
        quickSwitcherHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "mod+k",
          className: N.keybind
        }, t)
      }), T.intl.format(T.t.aes5VI, {
        markUnreadHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "alt+click",
          className: N.keybind
        }, t)
      }), T.intl.format(T.t.md9Svv, {
        markServerUnreadHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "shift+esc",
          className: N.keybind
        }, t)
      }), T.intl.format(T.t["X0Tu+u"], {
        navigateUnreadHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "shift+alt+up",
          className: N.keybind
        }, t),
        downHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "down",
          className: N.keybind
        }, t)
      }), T.intl.format(T.t.AkoeIY, {
        keyboardShortcutsHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "mod+/",
          className: N.keybind
        }, t)
      }), T.intl.format(T.t.P9sfAH, {
        messageNewlineHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "shift+return",
          className: N.keybind
        }, t)
      }), T.intl.format(T.t["3Ox33f"], {
        shiftHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "shift",
          className: N.keybind
        }, t)
      }), T.intl.format(T.t.enCV6b, {
        upHook: (e, t) => (0, r.jsx)(d.M2$, {
          shortcut: "up",
          className: N.keybind
        }, t)
      })];
      return E.default.locale.startsWith("en-") && e.push(T.intl.string(T.t.dQ9Wqk)), e[s().random(e.length - 1)]
    }()), j(this, "_eventLoadingText", function() {
      let e = m.Z.getLoadingTips();
      if (null != e && e.length > 0) return e[s().random(e.length - 1)]
    }()), j(this, "handleReady", () => {
      this.setState({
        ready: true
      }), (0, y.isDesktop)() && (I.ZP.send("UPDATED_QUOTES", ["Hold Tight — Loading Discord"]), I.ZP.send("UPDATE_OPEN_ON_STARTUP"))
    }), j(this, "setVideoRef", e => {
      this.videoRef = e
    }), j(this, "setProblemsTimeout", () => {
      null == this._problemsTimeout && (this._problemsTimeout = setTimeout(() => this.setState({
        problems: true
      }), 1e4))
    }), j(this, "clearProblemsTimeout", () => {
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
let x = Chunk442837.ZP.connectStores([Chunk38618.Z, Chunk215427.Z, Chunk474873.Z, Chunk607070.Z], () => ({
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