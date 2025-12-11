/** Chunk was on 92504 **/
/** chunk id: 453499, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var a, r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk79698 = require("./79698.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class C extends(a = Chunk473749.PureComponent) {
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
      arrowClassName: a,
      paginationDotClassName: r,
      paginationDotSelectedClassName: l,
      paginationArrowIconType: s = "arrow"
    } = this.props, c = o()(Chunk79698.arrowHitbox, {
      [Chunk79698.arrowHitboxPadding]: require
    }, a);
    return (0, Chunk54381.jsxs)("div", {
      className: o()(Chunk79698.controls, this.props.className),
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk392711,
        children: (0, Chunk54381.jsx)(Chunk481060.hU, {
          variant: "icon-only",
          icon: "caret" === Chunk120356 ? Chunk481060.V7D : Chunk481060.whL,
          "aria-label": Chunk388032.intl.string(Chunk388032.t.vgfxaA),
          onClick: this.handlePrevious
        })
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk79698.dots,
        children: d().times(exports, t => (0, i.jsx)(p.P3F, {
          onClick: () => this.handleDotClick(t),
          className: t === e ? o()(x.dotSelected, l) : o()(x.dotNormal, r),
          "aria-label": g.intl.formatToPlainString(g.t["2SXOrM"], {
            pageNumber: t + 1
          })
        }, "dot-".concat(t)))
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk392711,
        children: (0, Chunk54381.jsx)(Chunk481060.hU, {
          variant: "icon-only",
          icon: "caret" === Chunk120356 ? Chunk481060.Fbu : Chunk481060.ZSh,
          "aria-label": Chunk388032.intl.string(Chunk388032.t.XiOHRX),
          onClick: this.handleNext
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), v(this, "handleDotClick", e => {
      let {
        onSetItem: t,
        onIntentionalChange: n,
        current: a
      } = this.props;
      null == n || n(a, e, "jump"), t(e)
    }), v(this, "handleNext", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: n
      } = this.props, a = n(1);
      null == e || e(t, a, "next")
    }), v(this, "handlePrevious", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: n
      } = this.props, a = n(false);
      null == e || e(t, a, "previous")
    })
  }
}
v(C, "defaultProps", {
  includeHitboxPadding: true
});
class j extends(r = Chunk473749.PureComponent) {
  componentDidMount() {
    Chunk570140.Z.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange), this.props.initialPaused || this.state.paused || this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer(), Chunk570140.Z.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange)
  }
  componentDidUpdate(e, t) {
    let n = (e, t) => !e.initialPaused && !t.paused,
      a = n(this.props, this.state),
      r = n(e, t);
    a && !r ? this.startTimer() : !a && r && this.stopTimer();
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
      onChangeItem: a
    } = this.props;
    null == a || a(e[n], this.state.visibleIndex, n);
    let r = t > 0 ? h.n.LEFT : h.n.RIGHT;
    return this.setState({
      visibleIndex: n,
      direction: r
    }), n
  }
  render() {
    let {
      items: e,
      renderItem: t,
      className: n,
      slideAnimatorClassName: a,
      slideAnimatorSpringSettings: r,
      slideAnimatorFadeInOut: l,
      paginationClassName: s,
      paginationArrowClassName: c,
      paginationArrowIconType: d,
      paginationDotClassName: u,
      paginationDotSelectedClassName: p,
      themedPagination: m,
      includeHitboxPadding: f,
      style: b,
      aspectRatio: g,
      children: v
    } = this.props, {
      visibleIndex: j
    } = this.state;
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk79698.root,
      children: [(0, Chunk54381.jsxs)("div", {
        className: o()(Chunk79698.carouselContainer, require),
        style: Chunk981631,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: [(0, Chunk54381.jsx)("div", {
          style: {
            aspectRatio: Chunk388032
          },
          children: (0, Chunk54381.jsx)(Chunk578361.Z, {
            className: o()(Chunk79698.carousel, a),
            step: j,
            direction: this.getCurrentDirection(),
            springSettings: r,
            fadeInOut: Chunk473749,
            children: exports(module[j], j)
          })
        }), module.length > 1 && (0, Chunk54381.jsx)(C, {
          className: o()(Chunk120356, Chunk570140 ? Chunk79698.themedPagination : Chunk79698.pagination),
          arrowClassName: Chunk392711,
          includeHitboxPadding: Chunk585483,
          current: j,
          count: module.length,
          onChangePage: t => this.changeItem(e, t),
          onSetItem: this.handleSetItem,
          onIntentionalChange: this.handleIntentionalChange,
          paginationArrowIconType: d,
          paginationDotClassName: Chunk846519,
          paginationDotSelectedClassName: Chunk481060
        })]
      }), null != v && v({
        step: j,
        direction: this.getCurrentDirection()
      })]
    })
  }
  constructor(e) {
    super(e), v(this, "timer", new u.Xp), v(this, "handleWindowFocusChange", e => {
      let {
        focused: t
      } = e;
      this.setState({
        paused: !t
      })
    }), v(this, "getCurrentDirection", () => this.state.direction), v(this, "nextItem", () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, 1)
    }), v(this, "previousItem", () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, false)
    }), v(this, "handleSetItem", e => {
      let {
        visibleIndex: t
      } = this.state, {
        items: n
      } = this.props;
      this.changeItem(n, e - t)
    }), v(this, "handleMouseEnter", () => {
      this.setState({
        paused: true
      })
    }), v(this, "handleMouseLeave", () => {
      this.setState({
        paused: false
      })
    }), v(this, "handleIntentionalChange", (e, t, n) => {
      let {
        items: a,
        onIntentionalChange: r
      } = this.props;
      return null == r ? true : r(a[t], e, t, n)
    }), this.state = {
      visibleIndex: true === e.randomize ? d().random(0, e.items.length - 1) : 0,
      direction: h.n.LEFT,
      paused: false
    }
  }
}
v(j, "defaultProps", {
  aspectRatio: 16 / 9
});
let _ = j