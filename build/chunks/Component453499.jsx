/** Chunk was on 69844 **/
/** chunk id: 453499, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var r, a, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk578361 = require("./578361.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk633448 = require("./633448.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class v extends(r = Chunk647438.PureComponent) {
  componentDidMount() {
    Chunk585483.S.subscribe(Chunk981631.CkL.CAROUSEL_PREV, this.handlePrevious), Chunk585483.S.subscribe(Chunk981631.CkL.CAROUSEL_NEXT, this.handleNext)
  }
  componentWillUnmount() {
    Chunk585483.S.unsubscribe(Chunk981631.CkL.CAROUSEL_PREV, this.handlePrevious), Chunk585483.S.unsubscribe(Chunk981631.CkL.CAROUSEL_NEXT, this.handleNext)
  }
  render() {
    let {
      current: e,
      count: t,
      includeHitboxPadding: n,
      arrowClassName: r,
      paginationDotClassName: a,
      paginationDotSelectedClassName: l,
      paginationArrowIconType: s = "arrow"
    } = this.props, c = o()(Chunk633448.arrowHitbox, {
      [Chunk633448.arrowHitboxPadding]: require
    }, r);
    return (0, Chunk951288.jsxs)("div", {
      className: o()(Chunk633448.controls, this.props.className),
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk392711,
        children: (0, Chunk951288.jsx)(Chunk481060.hU, {
          variant: "icon-only",
          icon: "caret" === Chunk120356 ? Chunk481060.V7D : Chunk481060.whL,
          "aria-label": Chunk388032.intl.string(Chunk388032.t.vgfxaA),
          onClick: this.handlePrevious
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk633448.dots,
        children: d().times(exports, t => (0, i.jsx)(p.P3F, {
          onClick: () => this.handleDotClick(t),
          className: t === e ? o()(b.dotSelected, l) : o()(b.dotNormal, a),
          "aria-label": f.intl.formatToPlainString(f.t["2SXOrM"], {
            pageNumber: t + 1
          })
        }, "dot-".concat(t)))
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk392711,
        children: (0, Chunk951288.jsx)(Chunk481060.hU, {
          variant: "icon-only",
          icon: "caret" === Chunk120356 ? Chunk481060.Fbu : Chunk481060.ZSh,
          "aria-label": Chunk388032.intl.string(Chunk388032.t.XiOHRX),
          onClick: this.handleNext
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), x(this, "handleDotClick", e => {
      let {
        onSetItem: t,
        onIntentionalChange: n,
        current: r
      } = this.props;
      null == n || n(r, e, "jump"), t(e)
    }), x(this, "handleNext", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: n
      } = this.props, r = n(1);
      null == e || e(t, r, "next")
    }), x(this, "handlePrevious", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: n
      } = this.props, r = n(false);
      null == e || e(t, r, "previous")
    })
  }
}
x(v, "defaultProps", {
  includeHitboxPadding: true
});
class C extends(a = Chunk647438.PureComponent) {
  componentDidMount() {
    Chunk570140.Z.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange), this.props.initialPaused || this.state.paused || this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer(), Chunk570140.Z.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange)
  }
  componentDidUpdate(e, t) {
    let n = (e, t) => !e.initialPaused && !t.paused,
      r = n(this.props, this.state),
      a = n(e, t);
    r && !a ? this.startTimer() : !r && a && this.stopTimer();
    let {
      items: i
    } = this.props, {
      visibleIndex: l
    } = this.state;
    null == i[l] && this.changeItem(i, 1)
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
    let a = t > 0 ? h.n.LEFT : h.n.RIGHT;
    return this.setState({
      visibleIndex: n,
      direction: a
    }), n
  }
  render() {
    let {
      items: e,
      renderItem: t,
      className: n,
      slideAnimatorClassName: r,
      slideAnimatorSpringSettings: a,
      slideAnimatorFadeInOut: l,
      paginationClassName: s,
      paginationArrowClassName: c,
      paginationArrowIconType: d,
      paginationDotClassName: u,
      paginationDotSelectedClassName: p,
      themedPagination: m,
      includeHitboxPadding: g,
      style: _,
      aspectRatio: f,
      children: x
    } = this.props, {
      visibleIndex: C
    } = this.state;
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk633448.root,
      children: [(0, Chunk951288.jsxs)("div", {
        className: o()(Chunk633448.carouselContainer, require),
        style: Chunk981631,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: [(0, Chunk951288.jsx)("div", {
          style: {
            aspectRatio: Chunk388032
          },
          children: (0, Chunk951288.jsx)(Chunk578361.Z, {
            className: o()(Chunk633448.carousel, r),
            step: C,
            direction: this.getCurrentDirection(),
            springSettings: a,
            fadeInOut: Chunk647438,
            children: exports(module[C], C)
          })
        }), module.length > 1 && (0, Chunk951288.jsx)(v, {
          className: o()(Chunk120356, Chunk570140 ? Chunk633448.themedPagination : Chunk633448.pagination),
          arrowClassName: Chunk392711,
          includeHitboxPadding: Chunk585483,
          current: C,
          count: module.length,
          onChangePage: t => this.changeItem(e, t),
          onSetItem: this.handleSetItem,
          onIntentionalChange: this.handleIntentionalChange,
          paginationArrowIconType: d,
          paginationDotClassName: Chunk846519,
          paginationDotSelectedClassName: Chunk481060
        })]
      }), null != x && x({
        step: C,
        direction: this.getCurrentDirection()
      })]
    })
  }
  constructor(e) {
    super(e), x(this, "timer", new u.Xp), x(this, "handleWindowFocusChange", e => {
      let {
        focused: t
      } = e;
      this.setState({
        paused: !t
      })
    }), x(this, "getCurrentDirection", () => this.state.direction), x(this, "nextItem", () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, 1)
    }), x(this, "previousItem", () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, false)
    }), x(this, "handleSetItem", e => {
      let {
        visibleIndex: t
      } = this.state, {
        items: n
      } = this.props;
      this.changeItem(n, e - t)
    }), x(this, "handleMouseEnter", () => {
      this.setState({
        paused: true
      })
    }), x(this, "handleMouseLeave", () => {
      this.setState({
        paused: false
      })
    }), x(this, "handleIntentionalChange", (e, t, n) => {
      let {
        items: r,
        onIntentionalChange: a
      } = this.props;
      return null == a ? true : a(r[t], e, t, n)
    }), this.state = {
      visibleIndex: true === e.randomize ? d().random(0, e.items.length - 1) : 0,
      direction: h.n.LEFT,
      paused: false
    }
  }
}
x(C, "defaultProps", {
  aspectRatio: 16 / 9
});
let j = C