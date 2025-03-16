/** Chunk was on 37697 **/
n.d(t, {
  Z: () => O
}), n(47120);
var r, i, a = n(200651),
  l = n(192379),
  o = n(120356),
  s = n.n(o),
  c = n(392711),
  d = n.n(c),
  u = n(846519),
  p = n(481060),
  m = n(570140),
  h = n(578361),
  g = n(768762),
  _ = n(259580),
  f = n(585483),
  b = n(981631),
  v = n(388032),
  x = n(22314);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let j = {
  JUMP: "jump",
  NEXT: "next",
  PREVIOUS: "previous"
};
class y extends(r = l.PureComponent) {
  componentDidMount() {
    f.S.subscribe(b.CkL.CAROUSEL_PREV, this.handlePrevious), f.S.subscribe(b.CkL.CAROUSEL_NEXT, this.handleNext)
  }
  componentWillUnmount() {
    f.S.unsubscribe(b.CkL.CAROUSEL_PREV, this.handlePrevious), f.S.unsubscribe(b.CkL.CAROUSEL_NEXT, this.handleNext)
  }
  render() {
    let {
      current: e,
      count: t,
      includeHitboxPadding: n,
      arrowClassName: r,
      paginationDotClassName: i,
      paginationDotSelectedClassName: l,
      paginationArrowIconType: o = "arrow"
    } = this.props, c = s()(x.arrowHitbox, {
      [x.arrowHitboxPadding]: n
    }, r);
    return (0, a.jsxs)("div", {
      className: s()(x.controls, this.props.className),
      children: [(0, a.jsx)(p.zxk, {
        look: p.zxk.Looks.BLANK,
        className: c,
        onClick: this.handlePrevious,
        "aria-label": v.NW.string(v.t.vgfxaG),
        children: "caret" === o ? (0, a.jsx)(_.Z, {
          className: x.arrow,
          direction: _.Z.Directions.LEFT
        }) : (0, a.jsx)(g.Z, {
          className: x.arrow,
          direction: g.Z.Directions.LEFT
        })
      }), (0, a.jsx)("div", {
        className: x.dots,
        children: d().times(t, t => (0, a.jsx)(p.zxk, {
          look: p.zxk.Looks.BLANK,
          size: p.zxk.Sizes.NONE,
          onClick: () => this.handleDotClick(t),
          className: t === e ? s()(x.dotSelected, l) : s()(x.dotNormal, i),
          "aria-label": v.NW.formatToPlainString(v.t["2SXOrK"], {
            pageNumber: t + 1
          })
        }, "dot-".concat(t)))
      }), (0, a.jsx)(p.zxk, {
        look: p.zxk.Looks.BLANK,
        className: c,
        onClick: this.handleNext,
        "aria-label": v.NW.string(v.t.XiOHRU),
        children: "caret" === o ? (0, a.jsx)(_.Z, {
          className: x.arrow,
          direction: _.Z.Directions.RIGHT
        }) : (0, a.jsx)(g.Z, {
          className: x.arrow,
          direction: g.Z.Directions.RIGHT
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), C(this, "handleDotClick", e => {
      let {
        onSetItem: t,
        onIntentionalChange: n,
        current: r
      } = this.props;
      null == n || n(r, e, j.JUMP), t(e)
    }), C(this, "handleNext", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: n
      } = this.props, r = n(1);
      null == e || e(t, r, j.NEXT)
    }), C(this, "handlePrevious", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: n
      } = this.props, r = n(-1);
      null == e || e(t, r, j.PREVIOUS)
    })
  }
}
C(y, "defaultProps", {
  includeHitboxPadding: !0
});
class I extends(i = l.PureComponent) {
  componentDidMount() {
    m.Z.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange), this.props.initialPaused || this.state.paused || this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer(), m.Z.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange)
  }
  componentDidUpdate(e, t) {
    let n, r;
    let i = (n = this.props, r = this.state, !n.initialPaused && !r.paused),
      a = !e.initialPaused && !t.paused;
    i && !a ? this.startTimer() : !i && a && this.stopTimer();
    let {
      items: l
    } = this.props, {
      visibleIndex: o
    } = this.state;
    null == l[o] && this.changeItem(l, 1)
  }
  startTimer() {
    null != this.props.delay && this.timer.start(this.props.delay, this.nextItem)
  }
  stopTimer() {
    null != this.props.delay && this.timer.stop()
  }
  changeItem(e, t) {
    let n = this.state.visibleIndex + t;
    n < 0 ? n = e.length - 1 : n > e.length - 1 && (n = 0);
    let {
      onChangeItem: r
    } = this.props;
    null == r || r(e[n], this.state.visibleIndex, n);
    let i = t > 0 ? h.n.LEFT : h.n.RIGHT;
    return this.setState({
      visibleIndex: n,
      direction: i
    }), n
  }
  render() {
    let {
      items: e,
      renderItem: t,
      className: n,
      slideAnimatorClassName: r,
      slideAnimatorSpringSettings: i,
      slideAnimatorFadeInOut: l,
      paginationClassName: o,
      paginationArrowClassName: c,
      paginationArrowIconType: d,
      paginationDotClassName: u,
      paginationDotSelectedClassName: p,
      themedPagination: m,
      includeHitboxPadding: g,
      style: _,
      aspectRatio: f,
      children: b
    } = this.props, {
      visibleIndex: v
    } = this.state;
    return (0, a.jsxs)("div", {
      className: x.root,
      children: [(0, a.jsxs)("div", {
        className: s()(x.carouselContainer, n),
        style: _,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: [(0, a.jsx)("div", {
          style: {
            aspectRatio: f
          },
          children: (0, a.jsx)(h.Z, {
            className: s()(x.carousel, r),
            step: v,
            direction: this.getCurrentDirection(),
            springSettings: i,
            fadeInOut: l,
            children: t(e[v], v)
          })
        }), e.length > 1 && (0, a.jsx)(y, {
          className: s()(o, m ? x.themedPagination : x.pagination),
          arrowClassName: c,
          includeHitboxPadding: g,
          current: v,
          count: e.length,
          onChangePage: t => this.changeItem(e, t),
          onSetItem: this.handleSetItem,
          onIntentionalChange: this.handleIntentionalChange,
          paginationArrowIconType: d,
          paginationDotClassName: u,
          paginationDotSelectedClassName: p
        })]
      }), null != b && b({
        step: v,
        direction: this.getCurrentDirection()
      })]
    })
  }
  constructor(e) {
    super(e), C(this, "timer", new u.Xp), C(this, "handleWindowFocusChange", e => {
      let {
        focused: t
      } = e;
      this.setState({
        paused: !t
      })
    }), C(this, "getCurrentDirection", () => this.state.direction), C(this, "nextItem", () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, 1)
    }), C(this, "previousItem", () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, -1)
    }), C(this, "handleSetItem", e => {
      let {
        visibleIndex: t
      } = this.state, {
        items: n
      } = this.props;
      this.changeItem(n, e - t)
    }), C(this, "handleMouseEnter", () => {
      this.setState({
        paused: !0
      })
    }), C(this, "handleMouseLeave", () => {
      this.setState({
        paused: !1
      })
    }), C(this, "handleIntentionalChange", (e, t, n) => {
      let {
        items: r,
        onIntentionalChange: i
      } = this.props;
      return null == i ? void 0 : i(r[t], e, t, n)
    }), this.state = {
      visibleIndex: !0 === e.randomize ? d().random(0, e.items.length - 1) : 0,
      direction: h.n.LEFT,
      paused: !1
    }
  }
}
C(I, "defaultProps", {
  aspectRatio: 16 / 9
});
let O = I