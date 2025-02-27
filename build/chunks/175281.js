/** Chunk was on 12379 **/
n.d(t, {
  Z: () => L
}), n(266796), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  s = n(512722),
  a = n.n(s),
  c = n(392711),
  u = n.n(c),
  d = n(748780),
  _ = n(442837),
  E = n(215569),
  p = n(481060),
  m = n(612226),
  h = n(951483),
  f = n(714338),
  g = n(607070),
  N = n(460181),
  O = n(585483),
  I = n(264549),
  b = n(981631),
  T = n(388032),
  C = n(184681);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let y = {
  UP: u().throttle(() => (0, N.GN)("ddr-up"), 100),
  DOWN: u().throttle(() => (0, N.GN)("ddr-down"), 100),
  LEFT: u().throttle(() => (0, N.GN)("ddr-left"), 100),
  RIGHT: u().throttle(() => (0, N.GN)("ddr-right"), 100)
};

function P(e) {
  switch (e.keyCode) {
    case b.yXg.ARROW_UP:
      return "UP";
    case b.yXg.ARROW_DOWN:
      return "DOWN";
    case b.yXg.ARROW_LEFT:
      return "LEFT";
    case b.yXg.ARROW_RIGHT:
      return "RIGHT";
    default:
      return null
  }
}
let R = [m.Q2.MESSAGE, m.Q2.NAVIGATION, m.Q2.VOICE_AND_VIDEO, m.Q2.CHAT, m.Q2.MISCELLANEOUS];

function A(e) {
  let {
    showBackdrop: t
  } = e;
  return (0, r.jsx)("div", {
    className: o()(C.backdrop, {
      [C.show]: t
    })
  })
}

function v() {
  let e = i.useMemo(() => u()((0, m.Rv)()).groupBy(e => e.group).value(), []);
  return (0, r.jsx)("div", {
    className: C.keyboardShortcutList,
    children: R.map(t => {
      let n = e[t],
        i = (0, m.UD)(t),
        l = (0, m.U6)(t);
      return (0, r.jsxs)("div", {
        className: C.keyboardShortcutSection,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(p.X6q, {
            variant: "heading-lg/semibold",
            children: i
          }), null != l && (0, r.jsx)(p.Text, {
            className: C.keybindGroupDescription,
            variant: "text-sm/normal",
            children: l
          })]
        }), (0, r.jsx)("div", {
          className: C.keyboardShortcutListGroup,
          children: n.map((e, t) => {
            var n;
            return (null === (n = e.predicate) || void 0 === n ? void 0 : n.call(e)) === !1 ? null : (0, r.jsxs)("div", {
              className: o()(C.keybindGroup),
              children: [(0, r.jsx)(p.Text, {
                variant: "text-sm/normal",
                children: e.description
              }), (0, r.jsx)("div", {
                className: "keybind-shortcuts",
                children: e.binds.map(e => (0, r.jsx)(p.M2$, {
                  className: C.keybindKey,
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
    this.lastInputedKeys = [], O.S.subscribe(b.CkL.SCROLL_PAGE_UP, this.scrollPageUp), O.S.subscribe(b.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener("keydown", this.handleKeyDown, {
      capture: !0
    }), window.addEventListener("keyup", this.handleKeyUp, {
      capture: !0
    })
  }
  componentWillUnmount() {
    O.S.unsubscribe(b.CkL.SCROLL_PAGE_UP, this.scrollPageUp), O.S.unsubscribe(b.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener("keydown", this.handleKeyDown, {
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
      className: C.keyboardShortcutsModal,
      style: this.getStyles(),
      children: [(0, r.jsxs)(p.H, {
        className: C.modalTitle,
        children: [(0, r.jsx)("div", {
          className: C.content,
          children: T.NW.string(T.t["1BdUt7"])
        }), (0, r.jsx)(p.M2$, {
          shortcut: "mod+/"
        })]
      }), (0, r.jsx)("div", {
        className: C.modalSubtitle,
        children: T.NW.string(T.t["2t19lZ"])
      }), (0, r.jsxs)("div", {
        className: C.ddrArrows,
        children: [(0, r.jsx)(D, {
          arrow: "LEFT",
          isActive: n,
          className: C.left,
          children: "left"
        }), (0, r.jsx)(D, {
          arrow: "DOWN",
          isActive: t,
          className: C.down,
          children: "down"
        }), (0, r.jsx)(D, {
          arrow: "UP",
          isActive: e,
          className: C.up,
          children: "up"
        }), (0, r.jsx)(D, {
          arrow: "RIGHT",
          isActive: i,
          className: C.right,
          children: "right"
        })]
      }), (0, r.jsx)(p.yWw, {
        ref: this.scrollerRef,
        fade: !0,
        children: (0, r.jsx)(p.y5t, {
          children: (0, r.jsx)(v, {})
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
      a()(null != e, "Scroller is pagedUp when not mounted"), e.scrollPageUp({
        animate: !0
      })
    }), S(this, "scrollPageDown", () => {
      let e = this.scrollerRef.current;
      a()(null != e, "Scroller is pagedDown when not mounted"), e.scrollPageDown({
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
      if (this.lastInputedKeys.push(e.keyCode), this.lastInputedKeys = this.lastInputedKeys.slice(-5), this.lastInputedKeys[0] === b.yXg.H && this.lastInputedKeys[1] === b.yXg.H && this.lastInputedKeys[2] === b.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === b.yXg.N && this.lastInputedKeys[4] === b.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled) return;
      let t = P(e);
      null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({
        direction: t
      }))
    }), S(this, "handleKeyUp", e => {
      if (this.props.keyboardModeEnabled) return;
      let t = P(e);
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

function D(e) {
  let {
    isActive: t,
    arrow: n,
    className: l,
    children: s
  } = e, [a, c] = i.useState(t), u = i.useCallback(() => {
    y[n](), c(!0)
  }, [n]);
  return i.useEffect(() => {
    if (a) {
      let e = setTimeout(() => c(!1), 500);
      return () => clearTimeout(e)
    }
  }, [a]), (0, r.jsx)(p.P3F, {
    onClick: u,
    className: o()(C.arrow, l, {
      [C.active]: t || a
    }),
    children: s
  })
}

function L(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, [l, s] = i.useState(!1), [a, c] = i.useState(!1), u = i.useMemo(() => __OVERLAY__ ? (0, h.Zg)() : (0, m.Rv)(), []), {
    keyboardModeEnabled: d,
    useReducedMotion: N
  } = (0, _.cj)([g.Z], () => ({
    keyboardModeEnabled: g.Z.keyboardModeEnabled,
    useReducedMotion: g.Z.useReducedMotion
  }));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(A, {
      showBackdrop: a
    }), (0, r.jsx)(p.Y0X, {
      className: o()(C.noBackground, {
        [C.noShadow]: l
      }),
      size: p.CgR.DYNAMIC,
      "aria-label": T.NW.string(T.t.T9DA2N),
      transitionState: t,
      children: (0, r.jsx)(E.W, {
        component: "div",
        children: l ? (0, r.jsx)(I.Z, {
          handleDemonClose: function() {
            c(!1), setTimeout(n, 500)
          }
        }, "raging-demo") : (0, r.jsx)(x, {
          content: u,
          keyboardModeEnabled: d,
          activateRagingDemon: function() {
            N || (f.Z.disable(), s(!0), c(!0))
          }
        }, "modal")
      })
    })]
  })
}