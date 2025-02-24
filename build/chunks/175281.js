/** Chunk was on 11663 (8c1c93f177bd9f10.js) **/
n.d(t, {
  Z: () => k
}), n(266796), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(512722),
  s = n.n(a),
  c = n(392711),
  u = n.n(c),
  d = n(748780),
  _ = n(442837),
  E = n(215569),
  p = n(481060),
  h = n(612226),
  m = n(951483),
  f = n(714338),
  O = n(607070),
  g = n(460181),
  N = n(585483),
  I = n(264549),
  b = n(981631),
  C = n(388032),
  T = n(184681);

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

function R(e) {
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
let A = [h.Q2.MESSAGE, h.Q2.NAVIGATION, h.Q2.VOICE_AND_VIDEO, h.Q2.CHAT, h.Q2.MISCELLANEOUS];

function P(e) {
  let {
    showBackdrop: t
  } = e;
  return (0, r.jsx)("div", {
    className: o()(T.backdrop, {
      [T.show]: t
    })
  })
}

function v() {
  let e = i.useMemo(() => u()((0, h.Rv)()).groupBy(e => e.group).value(), []);
  return (0, r.jsx)("div", {
    className: T.keyboardShortcutList,
    children: A.map(t => {
      let n = e[t],
        i = (0, h.UD)(t),
        l = (0, h.U6)(t);
      return (0, r.jsxs)("div", {
        className: T.keyboardShortcutSection,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(p.X6q, {
            variant: "heading-lg/semibold",
            children: i
          }), null != l && (0, r.jsx)(p.Text, {
            className: T.keybindGroupDescription,
            variant: "text-sm/normal",
            children: l
          })]
        }), (0, r.jsx)("div", {
          className: T.keyboardShortcutListGroup,
          children: n.map((e, t) => {
            var n;
            return (null === (n = e.predicate) || void 0 === n ? void 0 : n.call(e)) === !1 ? null : (0, r.jsxs)("div", {
              className: o()(T.keybindGroup),
              children: [(0, r.jsx)(p.Text, {
                variant: "text-sm/normal",
                children: e.description
              }), (0, r.jsx)("div", {
                className: "keybind-shortcuts",
                children: e.binds.map(e => (0, r.jsx)(p.M2$, {
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
class L extends i.PureComponent {
  componentDidMount() {
    this.lastInputedKeys = [], N.S.subscribe(b.CkL.SCROLL_PAGE_UP, this.scrollPageUp), N.S.subscribe(b.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener("keydown", this.handleKeyDown, {
      capture: !0
    }), window.addEventListener("keyup", this.handleKeyUp, {
      capture: !0
    })
  }
  componentWillUnmount() {
    N.S.unsubscribe(b.CkL.SCROLL_PAGE_UP, this.scrollPageUp), N.S.unsubscribe(b.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener("keydown", this.handleKeyDown, {
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
      children: [(0, r.jsxs)(p.H, {
        className: T.modalTitle,
        children: [(0, r.jsx)("div", {
          className: T.content,
          children: C.NW.string(C.t["1BdUt7"])
        }), (0, r.jsx)(p.M2$, {
          shortcut: "mod+/"
        })]
      }), (0, r.jsx)("div", {
        className: T.modalSubtitle,
        children: C.NW.string(C.t["2t19lZ"])
      }), (0, r.jsxs)("div", {
        className: T.ddrArrows,
        children: [(0, r.jsx)(D, {
          arrow: "LEFT",
          isActive: n,
          className: T.left,
          children: "left"
        }), (0, r.jsx)(D, {
          arrow: "DOWN",
          isActive: t,
          className: T.down,
          children: "down"
        }), (0, r.jsx)(D, {
          arrow: "UP",
          isActive: e,
          className: T.up,
          children: "up"
        }), (0, r.jsx)(D, {
          arrow: "RIGHT",
          isActive: i,
          className: T.right,
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
      if (this.lastInputedKeys.push(e.keyCode), this.lastInputedKeys = this.lastInputedKeys.slice(-5), this.lastInputedKeys[0] === b.yXg.H && this.lastInputedKeys[1] === b.yXg.H && this.lastInputedKeys[2] === b.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === b.yXg.N && this.lastInputedKeys[4] === b.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled) return;
      let t = R(e);
      null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({
        direction: t
      }))
    }), S(this, "handleKeyUp", e => {
      if (this.props.keyboardModeEnabled) return;
      let t = R(e);
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
    children: a
  } = e, [s, c] = i.useState(t), u = i.useCallback(() => {
    y[n](), c(!0)
  }, [n]);
  return i.useEffect(() => {
    if (s) {
      let e = setTimeout(() => c(!1), 500);
      return () => clearTimeout(e)
    }
  }, [s]), (0, r.jsx)(p.P3F, {
    onClick: u,
    className: o()(T.arrow, l, {
      [T.active]: t || s
    }),
    children: a
  })
}

function k(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, [l, a] = i.useState(!1), [s, c] = i.useState(!1), u = i.useMemo(() => __OVERLAY__ ? (0, m.Zg)() : (0, h.Rv)(), []), {
    keyboardModeEnabled: d,
    useReducedMotion: g
  } = (0, _.cj)([O.Z], () => ({
    keyboardModeEnabled: O.Z.keyboardModeEnabled,
    useReducedMotion: O.Z.useReducedMotion
  }));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(P, {
      showBackdrop: s
    }), (0, r.jsx)(p.Y0X, {
      className: o()(T.noBackground, {
        [T.noShadow]: l
      }),
      size: p.CgR.DYNAMIC,
      "aria-label": C.NW.string(C.t.T9DA2N),
      transitionState: t,
      children: (0, r.jsx)(E.W, {
        component: "div",
        children: l ? (0, r.jsx)(I.Z, {
          handleDemonClose: function() {
            c(!1), setTimeout(n, 500)
          }
        }, "raging-demo") : (0, r.jsx)(L, {
          content: u,
          keyboardModeEnabled: d,
          activateRagingDemon: function() {
            g || (f.Z.disable(), a(!0), c(!0))
          }
        }, "modal")
      })
    })]
  })
}