/** Chunk was on 56710 **/
/** chunk id: 175281, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
  Chunk748780 = require("./748780.js"),
  Chunk442837 = require("./442837.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk612226 = require("./612226.js"),
  Chunk951483 = require("./951483.js"),
  Chunk714338 = require("./714338.js"),
  Chunk607070 = require("./607070.js"),
  Chunk460181 = require("./460181.js"),
  Chunk585483 = require("./585483.js"),
  Chunk264549 = require("./264549.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk870525 = require("./870525.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let S = {
  UP: u().throttle(() => (0, Chunk460181.GN)("ddr-up"), 100),
  DOWN: u().throttle(() => (0, Chunk460181.GN)("ddr-down"), 100),
  LEFT: u().throttle(() => (0, Chunk460181.GN)("ddr-left"), 100),
  RIGHT: u().throttle(() => (0, Chunk460181.GN)("ddr-right"), 100)
};

function I(e) {
  switch (e.keyCode) {
    case j.yXg.ARROW_UP:
      return "UP";
    case j.yXg.ARROW_DOWN:
      return "DOWN";
    case j.yXg.ARROW_LEFT:
      return "LEFT";
    case j.yXg.ARROW_RIGHT:
      return "RIGHT";
    default:
      return null
  }
}
let P = [Chunk612226.Q2.MESSAGE, Chunk612226.Q2.NAVIGATION, Chunk612226.Q2.VOICE_AND_VIDEO, Chunk612226.Q2.CHAT, Chunk612226.Q2.MISCELLANEOUS];

function N(e) {
  let {
    showBackdrop: t
  } = e;
  return (0, r.jsx)("div", {
    className: o()(x.backdrop, {
      [x.show]: t
    })
  })
}

function Z() {
  let e = Chunk647438.useMemo(() => u()((0, Chunk612226.Rv)()).groupBy(e => e.group).value(), []);
  return (0, Chunk951288.jsx)("div", {
    className: Chunk870525.keyboardShortcutList,
    children: P.map(t => {
      let n = e[t],
        i = (0, g.UD)(t),
        l = (0, g.U6)(t);
      return (0, r.jsxs)("div", {
        className: x.keyboardShortcutSection,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(f.Heading, {
            variant: "heading-lg/semibold",
            children: i
          }), null != l && (0, r.jsx)(f.Text, {
            className: x.keybindGroupDescription,
            variant: "text-sm/normal",
            children: l
          })]
        }), (0, r.jsx)("div", {
          className: x.keyboardShortcutListGroup,
          children: n.map((e, t) => {
            var n;
            return (null == (n = e.predicate) ? true : n.call(e)) === false ? null : (0, r.jsxs)("div", {
              className: x.keybindGroup,
              children: [(0, r.jsx)(f.Text, {
                variant: "text-sm/normal",
                children: e.description
              }), (0, r.jsx)("div", {
                className: "keybind-shortcuts",
                children: e.binds.map(e => (0, r.jsx)(f.M2$, {
                  className: x.keybindKey,
                  shortcut: e
                }, e))
              })]
            }, t)
          })
        }, t)]
      }, t)
    })
  })
}
class w extends Chunk647438.PureComponent {
  componentDidMount() {
    this.lastInputedKeys = [], Chunk585483.S.subscribe(Chunk981631.CkL.SCROLL_PAGE_UP, this.scrollPageUp), Chunk585483.S.subscribe(Chunk981631.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener("keydown", this.handleKeyDown, {
      capture: true
    }), window.addEventListener("keyup", this.handleKeyUp, {
      capture: true
    })
  }
  componentWillUnmount() {
    Chunk585483.S.unsubscribe(Chunk981631.CkL.SCROLL_PAGE_UP, this.scrollPageUp), Chunk585483.S.unsubscribe(Chunk981631.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener("keydown", this.handleKeyDown, {
      capture: true
    }), window.removeEventListener("keyup", this.handleKeyUp, {
      capture: true
    })
  }
  render() {
    let {
      UP: e,
      DOWN: t,
      LEFT: n,
      RIGHT: i
    } = this.state;
    return (0, Chunk951288.jsxs)(Chunk748780.Z.div, {
      className: Chunk870525.keyboardShortcutsModal,
      style: this.getStyles(),
      children: [(0, Chunk951288.jsxs)(Chunk481060.H, {
        className: Chunk870525.modalTitle,
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk870525.content,
          children: Chunk388032.intl.string(Chunk388032.t["1BdUtx"])
        }), (0, Chunk951288.jsx)(Chunk481060.M2$, {
          shortcut: "mod+/"
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk870525.modalSubtitle,
        children: Chunk388032.intl.string(Chunk388032.t["2t19lU"])
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk870525.ddrArrows,
        children: [(0, Chunk951288.jsx)(T, {
          arrow: "LEFT",
          isActive: require,
          className: Chunk870525.left,
          children: "left"
        }), (0, Chunk951288.jsx)(T, {
          arrow: "DOWN",
          isActive: exports,
          className: Chunk870525.down,
          children: "down"
        }), (0, Chunk951288.jsx)(T, {
          arrow: "UP",
          isActive: module,
          className: Chunk870525.up,
          children: "up"
        }), (0, Chunk951288.jsx)(T, {
          arrow: "RIGHT",
          isActive: Chunk647438,
          className: Chunk870525.right,
          children: "right"
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.yWw, {
        ref: this.scrollerRef,
        fade: true,
        children: (0, Chunk951288.jsx)(Chunk481060.y5t, {
          children: (0, Chunk951288.jsx)(Z, {})
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      UP: false,
      DOWN: false,
      LEFT: false,
      RIGHT: false,
      opacity: new d.Z.Value(1),
      scaleX: new d.Z.Value(1),
      scaleY: new d.Z.Value(0),
      animating: false
    }), E(this, "scrollerRef", i.createRef()), E(this, "lastInputedKeys", []), E(this, "scrollPageUp", () => {
      let e = this.scrollerRef.current;
      s()(null != e, "Scroller is pagedUp when not mounted"), e.scrollPageUp({
        animate: true
      })
    }), E(this, "scrollPageDown", () => {
      let e = this.scrollerRef.current;
      s()(null != e, "Scroller is pagedDown when not mounted"), e.scrollPageDown({
        animate: true
      })
    }), E(this, "arrowUp", e => {
      let {
        direction: t
      } = e;
      this.setState({
        [t]: false
      })
    }), E(this, "arrowDown", e => {
      let {
        direction: t
      } = e;
      S[t](), this.setState({
        [t]: true
      })
    }), E(this, "componentWillLeave", e => {
      this.setState({
        animating: true
      }), this.state.opacity.setValue(1), this.state.scaleX.setValue(.5), this.state.scaleY.setValue(1), d.Z.sequence([d.Z.timing(this.state.opacity, {
        toValue: 0,
        duration: 800,
        easing: d.Z.Easing.cubic
      })]).start(e)
    }), E(this, "toggleOpacity", () => {
      1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1)
    }), E(this, "getStyles", () => ({
      opacity: this.state.opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      }),
      transform: [{
        scaleX: this.state.scaleX.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 2]
        })
      }, {
        scaleY: this.state.scaleY.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1]
        })
      }]
    })), E(this, "handleKeyDown", e => {
      if (this.lastInputedKeys.push(e.keyCode), this.lastInputedKeys = this.lastInputedKeys.slice(false), this.lastInputedKeys[0] === j.yXg.H && this.lastInputedKeys[1] === j.yXg.H && this.lastInputedKeys[2] === j.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === j.yXg.N && this.lastInputedKeys[4] === j.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled) return;
      let t = I(e);
      null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({
        direction: t
      }))
    }), E(this, "handleKeyUp", e => {
      if (this.props.keyboardModeEnabled) return;
      let t = I(e);
      null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({
        direction: t
      }))
    }), E(this, "onArrowClick", e => {
      this.arrowDown({
        direction: e
      })
    })
  }
}

function T(e) {
  let {
    isActive: t,
    arrow: n,
    className: l,
    children: a
  } = e, [s, c] = i.useState(t), u = i.useCallback(() => {
    S[n](), c(true)
  }, [n]);
  return i.useEffect(() => {
    if (s) {
      let e = setTimeout(() => c(false), 500);
      return () => clearTimeout(e)
    }
  }, [s]), (0, r.jsx)(f.P3F, {
    onClick: u,
    className: o()(x.arrow, l, {
      [x.active]: t || s
    }),
    children: a
  })
}

function A(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, [l, a] = i.useState(false), [s, c] = i.useState(false), u = i.useMemo(() => __OVERLAY__ ? (0, m.Zg)() : (0, g.Rv)(), []), {
    keyboardModeEnabled: d,
    useReducedMotion: y
  } = (0, p.cj)([_.Z], () => ({
    keyboardModeEnabled: _.Z.keyboardModeEnabled,
    useReducedMotion: _.Z.useReducedMotion
  }));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N, {
      showBackdrop: s
    }), (0, r.jsx)(f.Y0X, {
      className: o()(x.noBackground, {
        [x.noShadow]: l
      }),
      size: f.CgR.DYNAMIC,
      "aria-label": C.intl.string(C.t.T9DA2K),
      transitionState: t,
      parentComponent: "KeyboardShortcutsModal",
      children: (0, r.jsx)(h.W, {
        component: "div",
        children: l ? (0, r.jsx)(v.Z, {
          handleDemonClose: function() {
            c(false), setTimeout(n, 500)
          }
        }, "raging-demo") : (0, r.jsx)(w, {
          content: u,
          keyboardModeEnabled: d,
          activateRagingDemon: function() {
            y || (b.Z.disable(), a(true), c(true))
          }
        }, "modal")
      })
    })]
  })
}