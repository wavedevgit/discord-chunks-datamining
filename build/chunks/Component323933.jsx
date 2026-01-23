/** Chunk was on 28636 **/
/** chunk id: 323933, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var r, l, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  d = require.n(Chunk735438),
  Chunk451988 = require("./451988.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk725951 = require("./725951.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk881425 = require("./881425.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class v extends(r = Chunk64700.PureComponent) {
  componentDidMount() {
    g._.subscribe(_.jej.CAROUSEL_PREV, this.handlePrevious), g._.subscribe(_.jej.CAROUSEL_NEXT, this.handleNext)
  }
  componentWillUnmount() {
    g._.unsubscribe(_.jej.CAROUSEL_PREV, this.handlePrevious), g._.unsubscribe(_.jej.CAROUSEL_NEXT, this.handleNext)
  }
  render() {
    let {
      current: e,
      count: t,
      includeHitboxPadding: n,
      arrowClassName: r,
      paginationDotClassName: l,
      paginationDotSelectedClassName: a,
      paginationArrowIconType: s = "arrow"
    } = this.props, c = o()(f.sb, {
      [f.JU]: n
    }, r);
    return (0, i.jsxs)("div", {
      className: o()(f.ne, this.props.className),
      children: [(0, i.jsx)("div", {
        className: c,
        children: (0, i.jsx)(p.K0, {
          variant: "icon-only",
          icon: "caret" === s ? p.n2b : p.rJJ,
          "aria-label": b.intl.string(b.t.vgfxaA),
          onClick: this.handlePrevious
        })
      }), (0, i.jsx)("div", {
        className: f.r$,
        children: d().times(t, t => (0, i.jsx)(p.DUT, {
          onClick: () => this.handleDotClick(t),
          className: t === e ? o()(f.NU, a) : o()(f.Lw, l),
          "aria-label": b.intl.formatToPlainString(b.t["2SXOrM"], {
            pageNumber: t + 1
          })
        }, "dot-".concat(t)))
      }), (0, i.jsx)("div", {
        className: c,
        children: (0, i.jsx)(p.K0, {
          variant: "icon-only",
          icon: "caret" === s ? p._BQ : p.EdP,
          "aria-label": b.intl.string(b.t.XiOHRX),
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
class j extends(l = Chunk64700.PureComponent) {
  componentDidMount() {
    h.h.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange), this.props.initialPaused || this.state.paused || this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer(), h.h.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange)
  }
  componentDidUpdate(e, t) {
    let n = (e, t) => !e.initialPaused && !t.paused,
      r = n(this.props, this.state),
      l = n(e, t);
    r && !l ? this.startTimer() : !r && l && this.stopTimer();
    let {
      items: i
    } = this.props, {
      visibleIndex: a
    } = this.state;
    null == i[a] && this.changeItem(i, 1)
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
    let l = t > 0 ? m.f.LEFT : m.f.RIGHT;
    return this.setState({
      visibleIndex: n,
      direction: l
    }), n
  }
  render() {
    let {
      items: e,
      renderItem: t,
      className: n,
      slideAnimatorClassName: r,
      slideAnimatorSpringSettings: l,
      slideAnimatorFadeInOut: a,
      paginationClassName: s,
      paginationArrowClassName: c,
      paginationArrowIconType: d,
      paginationDotClassName: u,
      paginationDotSelectedClassName: p,
      themedPagination: h,
      includeHitboxPadding: g,
      style: _,
      aspectRatio: b,
      children: x
    } = this.props, {
      visibleIndex: j
    } = this.state;
    return (0, i.jsxs)("div", {
      className: f.zr,
      children: [(0, i.jsxs)("div", {
        className: o()(f.Cf, n),
        style: _,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: [(0, i.jsx)("div", {
          style: {
            aspectRatio: b
          },
          children: (0, i.jsx)(m.A, {
            className: o()(f.Dk, r),
            step: j,
            direction: this.getCurrentDirection(),
            springSettings: l,
            fadeInOut: a,
            children: t(e[j], j)
          })
        }), e.length > 1 && (0, i.jsx)(v, {
          className: o()(s, h ? f.S$ : f.X$),
          arrowClassName: c,
          includeHitboxPadding: g,
          current: j,
          count: e.length,
          onChangePage: t => this.changeItem(e, t),
          onSetItem: this.handleSetItem,
          onIntentionalChange: this.handleIntentionalChange,
          paginationArrowIconType: d,
          paginationDotClassName: u,
          paginationDotSelectedClassName: p
        })]
      }), null != x && x({
        step: j,
        direction: this.getCurrentDirection()
      })]
    })
  }
  constructor(e) {
    super(e), x(this, "timer", new u.IX), x(this, "handleWindowFocusChange", e => {
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
        onIntentionalChange: l
      } = this.props;
      return null == l ? true : l(r[t], e, t, n)
    }), this.state = {
      visibleIndex: true === e.randomize ? d().random(0, e.items.length - 1) : 0,
      direction: m.f.LEFT,
      paused: false
    }
  }
}
x(j, "defaultProps", {
  aspectRatio: 16 / 9
});
let A = j