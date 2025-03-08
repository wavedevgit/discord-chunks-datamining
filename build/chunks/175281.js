/** Chunk was on 74329 **/
n.d(t, {
  Z: () => D
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
  _ = n(442837),
  p = n(215569),
  E = n(481060),
  f = n(612226),
  m = n(951483),
  h = n(714338),
  b = n(607070),
  g = n(460181),
  O = n(585483),
  N = n(264549),
  I = n(981631),
  C = n(388032),
  T = n(312732);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let y = {
  UP: u().throttle(() => (0, g.GN)("ddr-up"), 100),
  DOWN: u().throttle(() => (0, g.GN)("ddr-down"), 100),
  LEFT: u().throttle(() => (0, g.GN)("ddr-left"), 100),
  RIGHT: u().throttle(() => (0, g.GN)("ddr-right"), 100)
};

function v(e) {
  switch (e.keyCode) {
    case I.yXg.ARROW_UP:
      return "UP";
    case I.yXg.ARROW_DOWN:
      return "DOWN";
    case I.yXg.ARROW_LEFT:
      return "LEFT";
    case I.yXg.ARROW_RIGHT:
      return "RIGHT";
    default:
      return null
  }
}
let P = [f.Q2.MESSAGE, f.Q2.NAVIGATION, f.Q2.VOICE_AND_VIDEO, f.Q2.CHAT, f.Q2.MISCELLANEOUS];

function R(e) {
  let {
    showBackdrop: t
  } = e;
  return (0, r.jsx)("div", {
    className: l()(T.backdrop, {
      [T.show]: t
    })
  })
}

function A() {
  let e = i.useMemo(() => u()((0, f.Rv)()).groupBy(e => e.group).value(), []);
  return (0, r.jsx)("div", {
    className: T.keyboardShortcutList,
    children: P.map(t => {
      let n = e[t],
        i = (0, f.UD)(t),
        o = (0, f.U6)(t);
      return (0, r.jsxs)("div", {
        className: T.keyboardShortcutSection,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(E.X6q, {
            variant: "heading-lg/semibold",
            children: i
          }), null != o && (0, r.jsx)(E.Text, {
            className: T.keybindGroupDescription,
            variant: "text-sm/normal",
            children: o
          })]
        }), (0, r.jsx)("div", {
          className: T.keyboardShortcutListGroup,
          children: n.map((e, t) => {
            var n;
            return (null === (n = e.predicate) || void 0 === n ? void 0 : n.call(e)) === !1 ? null : (0, r.jsxs)("div", {
              className: T.keybindGroup,
              children: [(0, r.jsx)(E.Text, {
                variant: "text-sm/normal",
                children: e.description
              }), (0, r.jsx)("div", {
                className: "keybind-shortcuts",
                children: e.binds.map(e => (0, r.jsx)(E.M2$, {
                  className: T.keybindKey,
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
class x extends i.PureComponent {
  componentDidMount() {
    this.lastInputedKeys = [], O.S.subscribe(I.CkL.SCROLL_PAGE_UP, this.scrollPageUp), O.S.subscribe(I.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener("keydown", this.handleKeyDown, {
      capture: !0
    }), window.addEventListener("keyup", this.handleKeyUp, {
      capture: !0
    })
  }
  componentWillUnmount() {
    O.S.unsubscribe(I.CkL.SCROLL_PAGE_UP, this.scrollPageUp), O.S.unsubscribe(I.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener("keydown", this.handleKeyDown, {
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
      className: T.keyboardShortcutsModal,
      style: this.getStyles(),
      children: [(0, r.jsxs)(E.H, {
        className: T.modalTitle,
        children: [(0, r.jsx)("div", {
          className: T.content,
          children: C.NW.string(C.t["1BdUt7"])
        }), (0, r.jsx)(E.M2$, {
          shortcut: "mod+/"
        })]
      }), (0, r.jsx)("div", {
        className: T.modalSubtitle,
        children: C.NW.string(C.t["2t19lZ"])
      }), (0, r.jsxs)("div", {
        className: T.ddrArrows,
        children: [(0, r.jsx)(j, {
          arrow: "LEFT",
          isActive: n,
          className: T.left,
          children: "left"
        }), (0, r.jsx)(j, {
          arrow: "DOWN",
          isActive: t,
          className: T.down,
          children: "down"
        }), (0, r.jsx)(j, {
          arrow: "UP",
          isActive: e,
          className: T.up,
          children: "up"
        }), (0, r.jsx)(j, {
          arrow: "RIGHT",
          isActive: i,
          className: T.right,
          children: "right"
        })]
      }), (0, r.jsx)(E.yWw, {
        ref: this.scrollerRef,
        fade: !0,
        children: (0, r.jsx)(E.y5t, {
          children: (0, r.jsx)(A, {})
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
      y[t](), this.setState({
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
      if (this.lastInputedKeys.push(e.keyCode), this.lastInputedKeys = this.lastInputedKeys.slice(-5), this.lastInputedKeys[0] === I.yXg.H && this.lastInputedKeys[1] === I.yXg.H && this.lastInputedKeys[2] === I.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === I.yXg.N && this.lastInputedKeys[4] === I.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled) return;
      let t = v(e);
      null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({
        direction: t
      }))
    }), S(this, "handleKeyUp", e => {
      if (this.props.keyboardModeEnabled) return;
      let t = v(e);
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

function j(e) {
  let {
    isActive: t,
    arrow: n,
    className: o,
    children: a
  } = e, [s, c] = i.useState(t), u = i.useCallback(() => {
    y[n](), c(!0)
  }, [n]);
  return i.useEffect(() => {
    if (s) {
      let e = setTimeout(() => c(!1), 500);
      return () => clearTimeout(e)
    }
  }, [s]), (0, r.jsx)(E.P3F, {
    onClick: u,
    className: l()(T.arrow, o, {
      [T.active]: t || s
    }),
    children: a
  })
}

function D(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, [o, a] = i.useState(!1), [s, c] = i.useState(!1), u = i.useMemo(() => __OVERLAY__ ? (0, m.Zg)() : (0, f.Rv)(), []), {
    keyboardModeEnabled: d,
    useReducedMotion: g
  } = (0, _.cj)([b.Z], () => ({
    keyboardModeEnabled: b.Z.keyboardModeEnabled,
    useReducedMotion: b.Z.useReducedMotion
  }));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(R, {
      showBackdrop: s
    }), (0, r.jsx)(E.Y0X, {
      className: l()(T.noBackground, {
        [T.noShadow]: o
      }),
      size: E.CgR.DYNAMIC,
      "aria-label": C.NW.string(C.t.T9DA2N),
      transitionState: t,
      children: (0, r.jsx)(p.W, {
        component: "div",
        children: o ? (0, r.jsx)(N.Z, {
          handleDemonClose: function() {
            c(!1), setTimeout(n, 500)
          }
        }, "raging-demo") : (0, r.jsx)(x, {
          content: u,
          keyboardModeEnabled: d,
          activateRagingDemon: function() {
            g || (h.Z.disable(), a(!0), c(!0))
          }
        }, "modal")
      })
    })]
  })
}