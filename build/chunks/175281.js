/** Chunk was on 39340 **/
n.d(t, {
  Z: () => A
}), n(266796), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(512722),
  s = n.n(a),
  c = n(392711),
  u = n.n(c),
  d = n(748780),
  p = n(442837),
  f = n(215569),
  h = n(481060),
  _ = n(612226),
  m = n(951483),
  b = n(714338),
  g = n(607070),
  E = n(460181),
  v = n(585483),
  O = n(264549),
  y = n(981631),
  C = n(388032),
  x = n(312732);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = {
  UP: u().throttle(() => (0, E.GN)("ddr-up"), 100),
  DOWN: u().throttle(() => (0, E.GN)("ddr-down"), 100),
  LEFT: u().throttle(() => (0, E.GN)("ddr-left"), 100),
  RIGHT: u().throttle(() => (0, E.GN)("ddr-right"), 100)
};

function I(e) {
  switch (e.keyCode) {
    case y.yXg.ARROW_UP:
      return "UP";
    case y.yXg.ARROW_DOWN:
      return "DOWN";
    case y.yXg.ARROW_LEFT:
      return "LEFT";
    case y.yXg.ARROW_RIGHT:
      return "RIGHT";
    default:
      return null
  }
}
let P = [_.Q2.MESSAGE, _.Q2.NAVIGATION, _.Q2.VOICE_AND_VIDEO, _.Q2.CHAT, _.Q2.MISCELLANEOUS];

function j(e) {
  let {
    showBackdrop: t
  } = e;
  return (0, r.jsx)("div", {
    className: l()(x.backdrop, {
      [x.show]: t
    })
  })
}

function T() {
  let e = i.useMemo(() => u()((0, _.Rv)()).groupBy(e => e.group).value(), []);
  return (0, r.jsx)("div", {
    className: x.keyboardShortcutList,
    children: P.map(t => {
      let n = e[t],
        i = (0, _.UD)(t),
        o = (0, _.U6)(t);
      return (0, r.jsxs)("div", {
        className: x.keyboardShortcutSection,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(h.X6q, {
            variant: "heading-lg/semibold",
            children: i
          }), null != o && (0, r.jsx)(h.Text, {
            className: x.keybindGroupDescription,
            variant: "text-sm/normal",
            children: o
          })]
        }), (0, r.jsx)("div", {
          className: x.keyboardShortcutListGroup,
          children: n.map((e, t) => {
            var n;
            return (null === (n = e.predicate) || void 0 === n ? void 0 : n.call(e)) === !1 ? null : (0, r.jsxs)("div", {
              className: x.keybindGroup,
              children: [(0, r.jsx)(h.Text, {
                variant: "text-sm/normal",
                children: e.description
              }), (0, r.jsx)("div", {
                className: "keybind-shortcuts",
                children: e.binds.map(e => (0, r.jsx)(h.M2$, {
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
class L extends i.PureComponent {
  componentDidMount() {
    this.lastInputedKeys = [], v.S.subscribe(y.CkL.SCROLL_PAGE_UP, this.scrollPageUp), v.S.subscribe(y.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener("keydown", this.handleKeyDown, {
      capture: !0
    }), window.addEventListener("keyup", this.handleKeyUp, {
      capture: !0
    })
  }
  componentWillUnmount() {
    v.S.unsubscribe(y.CkL.SCROLL_PAGE_UP, this.scrollPageUp), v.S.unsubscribe(y.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener("keydown", this.handleKeyDown, {
      capture: !0
    }), window.removeEventListener("keyup", this.handleKeyUp, {
      capture: !0
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
      className: x.keyboardShortcutsModal,
      style: this.getStyles(),
      children: [(0, r.jsxs)(h.H, {
        className: x.modalTitle,
        children: [(0, r.jsx)("div", {
          className: x.content,
          children: C.NW.string(C.t["1BdUt7"])
        }), (0, r.jsx)(h.M2$, {
          shortcut: "mod+/"
        })]
      }), (0, r.jsx)("div", {
        className: x.modalSubtitle,
        children: C.NW.string(C.t["2t19lZ"])
      }), (0, r.jsxs)("div", {
        className: x.ddrArrows,
        children: [(0, r.jsx)(w, {
          arrow: "LEFT",
          isActive: n,
          className: x.left,
          children: "left"
        }), (0, r.jsx)(w, {
          arrow: "DOWN",
          isActive: t,
          className: x.down,
          children: "down"
        }), (0, r.jsx)(w, {
          arrow: "UP",
          isActive: e,
          className: x.up,
          children: "up"
        }), (0, r.jsx)(w, {
          arrow: "RIGHT",
          isActive: i,
          className: x.right,
          children: "right"
        })]
      }), (0, r.jsx)(h.yWw, {
        ref: this.scrollerRef,
        fade: !0,
        children: (0, r.jsx)(h.y5t, {
          children: (0, r.jsx)(T, {})
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      UP: !1,
      DOWN: !1,
      LEFT: !1,
      RIGHT: !1,
      opacity: new d.Z.Value(1),
      scaleX: new d.Z.Value(1),
      scaleY: new d.Z.Value(0),
      animating: !1
    }), S(this, "scrollerRef", i.createRef()), S(this, "lastInputedKeys", []), S(this, "scrollPageUp", () => {
      let e = this.scrollerRef.current;
      s()(null != e, "Scroller is pagedUp when not mounted"), e.scrollPageUp({
        animate: !0
      })
    }), S(this, "scrollPageDown", () => {
      let e = this.scrollerRef.current;
      s()(null != e, "Scroller is pagedDown when not mounted"), e.scrollPageDown({
        animate: !0
      })
    }), S(this, "arrowUp", e => {
      let {
        direction: t
      } = e;
      this.setState({
        [t]: !1
      })
    }), S(this, "arrowDown", e => {
      let {
        direction: t
      } = e;
      N[t](), this.setState({
        [t]: !0
      })
    }), S(this, "componentWillLeave", e => {
      this.setState({
        animating: !0
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
      if (this.lastInputedKeys.push(e.keyCode), this.lastInputedKeys = this.lastInputedKeys.slice(-5), this.lastInputedKeys[0] === y.yXg.H && this.lastInputedKeys[1] === y.yXg.H && this.lastInputedKeys[2] === y.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === y.yXg.N && this.lastInputedKeys[4] === y.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled) return;
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

function w(e) {
  let {
    isActive: t,
    arrow: n,
    className: o,
    children: a
  } = e, [s, c] = i.useState(t), u = i.useCallback(() => {
    N[n](), c(!0)
  }, [n]);
  return i.useEffect(() => {
    if (s) {
      let e = setTimeout(() => c(!1), 500);
      return () => clearTimeout(e)
    }
  }, [s]), (0, r.jsx)(h.P3F, {
    onClick: u,
    className: l()(x.arrow, o, {
      [x.active]: t || s
    }),
    children: a
  })
}

function A(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, [o, a] = i.useState(!1), [s, c] = i.useState(!1), u = i.useMemo(() => __OVERLAY__ ? (0, m.Zg)() : (0, _.Rv)(), []), {
    keyboardModeEnabled: d,
    useReducedMotion: E
  } = (0, p.cj)([g.Z], () => ({
    keyboardModeEnabled: g.Z.keyboardModeEnabled,
    useReducedMotion: g.Z.useReducedMotion
  }));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(j, {
      showBackdrop: s
    }), (0, r.jsx)(h.Y0X, {
      className: l()(x.noBackground, {
        [x.noShadow]: o
      }),
      size: h.CgR.DYNAMIC,
      "aria-label": C.NW.string(C.t.T9DA2N),
      transitionState: t,
      children: (0, r.jsx)(f.W, {
        component: "div",
        children: o ? (0, r.jsx)(O.Z, {
          handleDemonClose: function() {
            c(!1), setTimeout(n, 500)
          }
        }, "raging-demo") : (0, r.jsx)(L, {
          content: u,
          keyboardModeEnabled: d,
          activateRagingDemon: function() {
            E || (b.Z.disable(), a(!0), c(!0))
          }
        }, "modal")
      })
    })]
  })
}