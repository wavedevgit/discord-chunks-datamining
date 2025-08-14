/** Chunk was on 32561 **/
/** chunk id: 453499, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var r, a, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk846519 = require("./846519.js"),
  Chunk755721 = require("./755721.js"),
  Chunk570140 = require("./570140.js"),
  Chunk578361 = require("./578361.jsx"),
  Chunk768762 = require("./768762.jsx"),
  Chunk259580 = require("./259580.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk633448 = require("./633448.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class j extends(r = Chunk73800.PureComponent) {
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
    return (0, Chunk255367.jsxs)("div", {
      className: o()(Chunk633448.controls, this.props.className),
      children: [(0, Chunk255367.jsx)(Chunk755721.zx, {
        look: Chunk755721.zx.Looks.BLANK,
        className: Chunk392711,
        onClick: this.handlePrevious,
        "aria-label": Chunk388032.intl.string(Chunk388032.t.vgfxaG),
        children: "caret" === Chunk120356 ? (0, Chunk255367.jsx)(Chunk259580.Z, {
          className: Chunk633448.arrow,
          direction: Chunk259580.Z.Directions.LEFT
        }) : (0, Chunk255367.jsx)(Chunk768762.Z, {
          className: Chunk633448.arrow,
          direction: Chunk768762.Z.Directions.LEFT
        })
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk633448.dots,
        children: d().times(exports, t => (0, i.jsx)(p.zx, {
          look: p.zx.Looks.BLANK,
          size: p.zx.Sizes.NONE,
          onClick: () => this.handleDotClick(t),
          className: t === e ? o()(v.dotSelected, l) : o()(v.dotNormal, a),
          "aria-label": x.intl.formatToPlainString(x.t["2SXOrK"], {
            pageNumber: t + 1
          })
        }, "dot-".concat(t)))
      }), (0, Chunk255367.jsx)(Chunk755721.zx, {
        look: Chunk755721.zx.Looks.BLANK,
        className: Chunk392711,
        onClick: this.handleNext,
        "aria-label": Chunk388032.intl.string(Chunk388032.t.XiOHRU),
        children: "caret" === Chunk120356 ? (0, Chunk255367.jsx)(Chunk259580.Z, {
          className: Chunk633448.arrow,
          direction: Chunk259580.Z.Directions.RIGHT
        }) : (0, Chunk255367.jsx)(Chunk768762.Z, {
          className: Chunk633448.arrow,
          direction: Chunk768762.Z.Directions.RIGHT
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
      null == n || n(r, e, "jump"), t(e)
    }), C(this, "handleNext", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: n
      } = this.props, r = n(1);
      null == e || e(t, r, "next")
    }), C(this, "handlePrevious", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: n
      } = this.props, r = n(false);
      null == e || e(t, r, "previous")
    })
  }
}
C(j, "defaultProps", {
  includeHitboxPadding: true
});
class y extends(a = Chunk73800.PureComponent) {
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
      style: f,
      aspectRatio: _,
      children: b
    } = this.props, {
      visibleIndex: x
    } = this.state;
    return (0, Chunk255367.jsxs)("div", {
      className: Chunk633448.root,
      children: [(0, Chunk255367.jsxs)("div", {
        className: o()(Chunk633448.carouselContainer, require),
        style: Chunk259580,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: [(0, Chunk255367.jsx)("div", {
          style: {
            aspectRatio: Chunk585483
          },
          children: (0, Chunk255367.jsx)(Chunk578361.Z, {
            className: o()(Chunk633448.carousel, r),
            step: Chunk388032,
            direction: this.getCurrentDirection(),
            springSettings: a,
            fadeInOut: Chunk73800,
            children: exports(module[Chunk388032], Chunk388032)
          })
        }), module.length > 1 && (0, Chunk255367.jsx)(j, {
          className: o()(Chunk120356, Chunk570140 ? Chunk633448.themedPagination : Chunk633448.pagination),
          arrowClassName: Chunk392711,
          includeHitboxPadding: Chunk768762,
          current: Chunk388032,
          count: module.length,
          onChangePage: t => this.changeItem(e, t),
          onSetItem: this.handleSetItem,
          onIntentionalChange: this.handleIntentionalChange,
          paginationArrowIconType: d,
          paginationDotClassName: Chunk846519,
          paginationDotSelectedClassName: Chunk755721
        })]
      }), null != Chunk981631 && Chunk981631({
        step: Chunk388032,
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
      this.changeItem(e, false)
    }), C(this, "handleSetItem", e => {
      let {
        visibleIndex: t
      } = this.state, {
        items: n
      } = this.props;
      this.changeItem(n, e - t)
    }), C(this, "handleMouseEnter", () => {
      this.setState({
        paused: true
      })
    }), C(this, "handleMouseLeave", () => {
      this.setState({
        paused: false
      })
    }), C(this, "handleIntentionalChange", (e, t, n) => {
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
C(y, "defaultProps", {
  aspectRatio: 16 / 9
});
let I = y