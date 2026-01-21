/** Chunk was on 82124 **/
/** chunk id: 175281, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk107388 = require("./107388.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = {
  UP: u().throttle(() => (0, v.GN)("ddr-up"), 100),
  DOWN: u().throttle(() => (0, v.GN)("ddr-down"), 100),
  LEFT: u().throttle(() => (0, v.GN)("ddr-left"), 100),
  RIGHT: u().throttle(() => (0, v.GN)("ddr-right"), 100)
};

function I(e) {
  switch (e.keyCode) {
    case x.yXg.ARROW_UP:
      return "UP";
    case x.yXg.ARROW_DOWN:
      return "DOWN";
    case x.yXg.ARROW_LEFT:
      return "LEFT";
    case x.yXg.ARROW_RIGHT:
      return "RIGHT";
    default:
      return null
  }
}
let P = [Chunk612226.Q2.MESSAGE, Chunk612226.Q2.NAVIGATION, Chunk612226.Q2.VOICE_AND_VIDEO, Chunk612226.Q2.CHAT, Chunk612226.Q2.MISCELLANEOUS];

function Z(e) {
  let {
    showBackdrop: t
  } = e;
  return (0, r.jsx)("div", {
    className: a()(E.backdrop, {
      [E.show]: t
    })
  })
}

function N() {
  let e = i.useMemo(() => u()((0, g.Rv)()).groupBy(e => e.group).value(), []);
  return (0, r.jsx)("div", {
    className: E.keyboardShortcutList,
    children: P.map(t => {
      let n = e[t],
        i = (0, g.UD)(t),
        l = (0, g.U6)(t);
      return (0, r.jsxs)("div", {
        className: E.keyboardShortcutSection,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(h.Heading, {
            variant: "heading-lg/semibold",
            children: i
          }), null != l && (0, r.jsx)(h.Text, {
            className: E.keybindGroupDescription,
            variant: "text-sm/normal",
            children: l
          })]
        }), (0, r.jsx)("div", {
          className: E.keyboardShortcutListGroup,
          children: n.map((e, t) => {
            var n;
            return (null == (n = e.predicate) ? true : n.call(e)) === false ? null : (0, r.jsxs)("div", {
              className: E.keybindGroup,
              children: [(0, r.jsx)(h.Text, {
                variant: "text-sm/normal",
                children: e.description
              }), (0, r.jsx)("div", {
                className: "keybind-shortcuts",
                children: e.binds.map(e => (0, r.jsx)(h.M2$, {
                  className: E.keybindKey,
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
class T extends Chunk473749.PureComponent {
  componentDidMount() {
    this.lastInputedKeys = [], O.S.subscribe(x.CkL.SCROLL_PAGE_UP, this.scrollPageUp), O.S.subscribe(x.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener("keydown", this.handleKeyDown, {
      capture: true
    }), window.addEventListener("keyup", this.handleKeyUp, {
      capture: true
    })
  }
  componentWillUnmount() {
    O.S.unsubscribe(x.CkL.SCROLL_PAGE_UP, this.scrollPageUp), O.S.unsubscribe(x.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener("keydown", this.handleKeyDown, {
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
    return (0, r.jsxs)(d.Z.div, {
      className: E.keyboardShortcutsModal,
      style: this.getStyles(),
      children: [(0, r.jsxs)(h.H, {
        className: E.modalTitle,
        children: [(0, r.jsx)("div", {
          className: E.content,
          children: C.intl.string(C.t["1BdUtx"])
        }), (0, r.jsx)(h.M2$, {
          shortcut: "mod+/"
        })]
      }), (0, r.jsx)("div", {
        className: E.modalSubtitle,
        children: C.intl.string(C.t["2t19lU"])
      }), (0, r.jsxs)("div", {
        className: E.ddrArrows,
        children: [(0, r.jsx)(A, {
          arrow: "LEFT",
          isActive: n,
          className: E.left,
          children: "left"
        }), (0, r.jsx)(A, {
          arrow: "DOWN",
          isActive: t,
          className: E.down,
          children: "down"
        }), (0, r.jsx)(A, {
          arrow: "UP",
          isActive: e,
          className: E.up,
          children: "up"
        }), (0, r.jsx)(A, {
          arrow: "RIGHT",
          isActive: i,
          className: E.right,
          children: "right"
        })]
      }), (0, r.jsx)(h.yWw, {
        ref: this.scrollerRef,
        fade: true,
        children: (0, r.jsx)(h.y5t, {
          children: (0, r.jsx)(N, {})
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      UP: false,
      DOWN: false,
      LEFT: false,
      RIGHT: false,
      opacity: new d.Z.Value(1),
      scaleX: new d.Z.Value(1),
      scaleY: new d.Z.Value(0),
      animating: false
    }), S(this, "scrollerRef", i.createRef()), S(this, "lastInputedKeys", []), S(this, "scrollPageUp", () => {
      let e = this.scrollerRef.current;
      s()(null != e, "Scroller is pagedUp when not mounted"), e.scrollPageUp({
        animate: true
      })
    }), S(this, "scrollPageDown", () => {
      let e = this.scrollerRef.current;
      s()(null != e, "Scroller is pagedDown when not mounted"), e.scrollPageDown({
        animate: true
      })
    }), S(this, "arrowUp", e => {
      let {
        direction: t
      } = e;
      this.setState({
        [t]: false
      })
    }), S(this, "arrowDown", e => {
      let {
        direction: t
      } = e;
      _[t](), this.setState({
        [t]: true
      })
    }), S(this, "componentWillLeave", e => {
      this.setState({
        animating: true
      }), this.state.opacity.setValue(1), this.state.scaleX.setValue(.5), this.state.scaleY.setValue(1), d.Z.sequence([d.Z.timing(this.state.opacity, {
        toValue: 0,
        duration: 800,
        easing: d.Z.Easing.cubic
      })]).start(e)
    }), S(this, "toggleOpacity", () => {
      1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1)
    }), S(this, "getStyles", () => ({
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
    })), S(this, "handleKeyDown", e => {
      if (this.lastInputedKeys.push(e.keyCode), this.lastInputedKeys = this.lastInputedKeys.slice(false), this.lastInputedKeys[0] === x.yXg.H && this.lastInputedKeys[1] === x.yXg.H && this.lastInputedKeys[2] === x.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === x.yXg.N && this.lastInputedKeys[4] === x.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled) return;
      let t = I(e);
      null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({
        direction: t
      }))
    }), S(this, "handleKeyUp", e => {
      if (this.props.keyboardModeEnabled) return;
      let t = I(e);
      null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({
        direction: t
      }))
    }), S(this, "onArrowClick", e => {
      this.arrowDown({
        direction: e
      })
    })
  }
}

function A(e) {
  let {
    isActive: t,
    arrow: n,
    className: l,
    children: o
  } = e, [s, c] = i.useState(t), u = i.useCallback(() => {
    _[n](), c(true)
  }, [n]);
  return i.useEffect(() => {
    if (s) {
      let e = setTimeout(() => c(false), 500);
      return () => clearTimeout(e)
    }
  }, [s]), (0, r.jsx)(h.P3F, {
    onClick: u,
    className: a()(E.arrow, l, {
      [E.active]: t || s
    }),
    children: o
  })
}

function w(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, [l, o] = i.useState(false), [s, c] = i.useState(false), u = i.useMemo(() => __OVERLAY__ ? (0, m.Zg)() : (0, g.Rv)(), []), {
    keyboardModeEnabled: d,
    useReducedMotion: v
  } = (0, p.cj)([y.Z], () => ({
    keyboardModeEnabled: y.Z.keyboardModeEnabled,
    useReducedMotion: y.Z.useReducedMotion
  }));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(Z, {
      showBackdrop: s
    }), (0, r.jsx)(h.Y0X, {
      className: a()(E.noBackground, {
        [E.noShadow]: l
      }),
      size: h.CgR.DYNAMIC,
      "aria-label": C.intl.string(C.t.T9DA2K),
      transitionState: t,
      parentComponent: "KeyboardShortcutsModal",
      children: (0, r.jsx)(f.W, {
        component: "div",
        children: l ? (0, r.jsx)(j.Z, {
          handleDemonClose: function() {
            c(false), setTimeout(n, 500)
          }
        }, "raging-demo") : (0, r.jsx)(T, {
          content: u,
          keyboardModeEnabled: d,
          activateRagingDemon: function() {
            v || (b.Z.disable(), o(true), c(true))
          }
        }, "modal")
      })
    })]
  })
}