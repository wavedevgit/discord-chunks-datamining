/** Chunk was on 97492 **/
/** chunk id: 296838, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => R
}), require("./228524.js"), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  u = require.n(Chunk735438),
  Chunk615300 = require("./615300.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73939 = require("./73939.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915967 = require("./915967.js"),
  Chunk34968 = require("./34968.js"),
  Chunk775121 = require("./775121.js"),
  Chunk775602 = require("./775602.js"),
  Chunk400492 = require("./400492.js"),
  Chunk203982 = require("./203982.js"),
  Chunk635914 = require("./635914.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk353108 = require("./353108.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let C = {
  UP: u().throttle(() => (0, y.Ak)("ddr-up"), 100),
  DOWN: u().throttle(() => (0, y.Ak)("ddr-down"), 100),
  LEFT: u().throttle(() => (0, y.Ak)("ddr-left"), 100),
  RIGHT: u().throttle(() => (0, y.Ak)("ddr-right"), 100)
};

function S(e) {
  switch (e.keyCode) {
    case v.Ks6.ARROW_UP:
      return "UP";
    case v.Ks6.ARROW_DOWN:
      return "DOWN";
    case v.Ks6.ARROW_LEFT:
      return "LEFT";
    case v.Ks6.ARROW_RIGHT:
      return "RIGHT";
    default:
      return null
  }
}
let I = [Chunk915967.Q_.MESSAGE, Chunk915967.Q_.NAVIGATION, Chunk915967.Q_.VOICE_AND_VIDEO, Chunk915967.Q_.CHAT, Chunk915967.Q_.MISCELLANEOUS];

function N(e) {
  let {
    showBackdrop: t
  } = e;
  return (0, r.jsx)("div", {
    className: a()(E.tB, {
      [E.WU]: t
    })
  })
}

function T() {
  let e = l.useMemo(() => u()((0, b.Bx)()).groupBy(e => e.group).value(), []);
  return (0, r.jsx)("div", {
    className: E.Io,
    children: I.map(t => {
      let n = e[t],
        l = (0, b.Gm)(t),
        i = (0, b.zF)(t);
      return (0, r.jsxs)("div", {
        className: E.ZK,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(h.Heading, {
            variant: "heading-lg/semibold",
            children: l
          }), null != i && (0, r.jsx)(h.Text, {
            className: E.UX,
            variant: "text-sm/normal",
            children: i
          })]
        }), (0, r.jsx)("div", {
          className: E.tI,
          children: n.map((e, t) => {
            var n;
            return (null == (n = e.predicate) ? true : n.call(e)) === false ? null : (0, r.jsxs)("div", {
              className: E.YI,
              children: [(0, r.jsx)(h.Text, {
                variant: "text-sm/normal",
                children: e.description
              }), (0, r.jsx)("div", {
                className: "keybind-shortcuts",
                children: e.binds.map(e => (0, r.jsx)(h.e7I, {
                  className: E.Me,
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
class P extends Chunk64700.PureComponent {
  componentDidMount() {
    this.lastInputedKeys = [], O._.subscribe(v.jej.SCROLL_PAGE_UP, this.scrollPageUp), O._.subscribe(v.jej.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener("keydown", this.handleKeyDown, {
      capture: true
    }), window.addEventListener("keyup", this.handleKeyUp, {
      capture: true
    })
  }
  componentWillUnmount() {
    O._.unsubscribe(v.jej.SCROLL_PAGE_UP, this.scrollPageUp), O._.unsubscribe(v.jej.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener("keydown", this.handleKeyDown, {
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
      RIGHT: l
    } = this.state;
    return (0, r.jsxs)(d.A.div, {
      className: E.UV,
      style: this.getStyles(),
      children: [(0, r.jsxs)(h.H, {
        className: E.GK,
        children: [(0, r.jsx)("div", {
          className: E.Qs,
          children: x.intl.string(x.t["1BdUtx"])
        }), (0, r.jsx)(h.e7I, {
          shortcut: "mod+/"
        })]
      }), (0, r.jsx)("div", {
        className: E.KV,
        children: x.intl.string(x.t["2t19lU"])
      }), (0, r.jsxs)("div", {
        className: E.Pg,
        children: [(0, r.jsx)(w, {
          arrow: "LEFT",
          isActive: n,
          className: E.kb,
          children: "left"
        }), (0, r.jsx)(w, {
          arrow: "DOWN",
          isActive: t,
          className: E.TR,
          children: "down"
        }), (0, r.jsx)(w, {
          arrow: "UP",
          isActive: e,
          className: E.up,
          children: "up"
        }), (0, r.jsx)(w, {
          arrow: "RIGHT",
          isActive: l,
          className: E.pG,
          children: "right"
        })]
      }), (0, r.jsx)(h.GtU, {
        ref: this.scrollerRef,
        fade: true,
        children: (0, r.jsx)(h.Fmo, {
          children: (0, r.jsx)(T, {})
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      UP: false,
      DOWN: false,
      LEFT: false,
      RIGHT: false,
      opacity: new d.A.Value(1),
      scaleX: new d.A.Value(1),
      scaleY: new d.A.Value(0),
      animating: false
    }), _(this, "scrollerRef", l.createRef()), _(this, "lastInputedKeys", []), _(this, "scrollPageUp", () => {
      let e = this.scrollerRef.current;
      o()(null != e, "Scroller is pagedUp when not mounted"), e.scrollPageUp({
        animate: true
      })
    }), _(this, "scrollPageDown", () => {
      let e = this.scrollerRef.current;
      o()(null != e, "Scroller is pagedDown when not mounted"), e.scrollPageDown({
        animate: true
      })
    }), _(this, "arrowUp", e => {
      let {
        direction: t
      } = e;
      this.setState({
        [t]: false
      })
    }), _(this, "arrowDown", e => {
      let {
        direction: t
      } = e;
      C[t](), this.setState({
        [t]: true
      })
    }), _(this, "componentWillLeave", e => {
      this.setState({
        animating: true
      }), this.state.opacity.setValue(1), this.state.scaleX.setValue(.5), this.state.scaleY.setValue(1), d.A.sequence([d.A.timing(this.state.opacity, {
        toValue: 0,
        duration: 800,
        easing: d.A.Easing.cubic
      })]).start(e)
    }), _(this, "toggleOpacity", () => {
      1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1)
    }), _(this, "getStyles", () => ({
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
    })), _(this, "handleKeyDown", e => {
      if (this.lastInputedKeys.push(e.keyCode), this.lastInputedKeys = this.lastInputedKeys.slice(false), this.lastInputedKeys[0] === v.Ks6.H && this.lastInputedKeys[1] === v.Ks6.H && this.lastInputedKeys[2] === v.Ks6.ARROW_RIGHT && this.lastInputedKeys[3] === v.Ks6.N && this.lastInputedKeys[4] === v.Ks6.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled) return;
      let t = S(e);
      null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({
        direction: t
      }))
    }), _(this, "handleKeyUp", e => {
      if (this.props.keyboardModeEnabled) return;
      let t = S(e);
      null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({
        direction: t
      }))
    }), _(this, "onArrowClick", e => {
      this.arrowDown({
        direction: e
      })
    })
  }
}

function w(e) {
  let {
    isActive: t,
    arrow: n,
    className: i,
    children: s
  } = e, [o, c] = l.useState(t), u = l.useCallback(() => {
    C[n](), c(true)
  }, [n]);
  return l.useEffect(() => {
    if (o) {
      let e = setTimeout(() => c(false), 500);
      return () => clearTimeout(e)
    }
  }, [o]), (0, r.jsx)(h.DUT, {
    onClick: u,
    className: a()(E.UE, i, {
      [E.vu]: t || o
    }),
    children: s
  })
}

function R(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, [i, s] = l.useState(false), [o, c] = l.useState(false), u = l.useMemo(() => __OVERLAY__ ? (0, g.y8)() : (0, b.Bx)(), []), {
    keyboardModeEnabled: d,
    useReducedMotion: y
  } = (0, f.cf)([A.A], () => ({
    keyboardModeEnabled: A.A.keyboardModeEnabled,
    useReducedMotion: A.A.useReducedMotion
  }));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N, {
      showBackdrop: o
    }), (0, r.jsx)(h.EOs, {
      className: a()(E._$, {
        [E.O9]: i
      }),
      size: h.rIJ.DYNAMIC,
      "aria-label": x.intl.string(x.t.T9DA2K),
      transitionState: t,
      parentComponent: "KeyboardShortcutsModal",
      children: (0, r.jsx)(p.F, {
        component: "div",
        children: i ? (0, r.jsx)(j.A, {
          handleDemonClose: function() {
            c(false), setTimeout(n, 500)
          }
        }, "raging-demo") : (0, r.jsx)(P, {
          content: u,
          keyboardModeEnabled: d,
          activateRagingDemon: function() {
            y || (m.A.disable(), s(true), c(true))
          }
        }, "modal")
      })
    })]
  })
}