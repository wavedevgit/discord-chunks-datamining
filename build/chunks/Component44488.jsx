/** Chunk was on 92504 **/
/** chunk id: 44488, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Pz: () => f,
  ZP: () => g,
  am: () => h
}), require("./388685.js");
var a, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk768762 = require("./768762.jsx"),
  Chunk836569 = require("./836569.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = {
  CENTER: Chunk836569.alignCenter,
  LEFT: Chunk836569.alignLeft
};
class m extends(a = Chunk473749.PureComponent) {
  componentDidUpdate(e) {
    let {
      selectedIndex: t
    } = this.props;
    e.selectedIndex !== t && this.handleSelectedIndexChange(t)
  }
  render() {
    let {
      renderItem: e,
      items: t,
      vertical: n,
      paginationContainerClass: a,
      align: l
    } = this.props, c = n ? d.verticalPaginationItemContainer : d.horizontalPaginationItemContainer;
    return (0, r.jsx)(o.yWw, {
      orientation: n ? "vertical" : "horizontal",
      className: s()(c, a, l),
      ref: this.handleSetScrollerRef,
      children: t.map((t, n) => i.cloneElement(e(t, n), {
        onClick: () => this.handlePageClick(n),
        key: n,
        ref: e => {
          this._paginationItemRefs[n] = e
        }
      }))
    })
  }
  constructor(...e) {
    super(...e), u(this, "_scrollerRef", null), u(this, "_paginationItemRefs", []), u(this, "handleSetScrollerRef", e => {
      this._scrollerRef = e
    }), u(this, "handleSelectedIndexChange", e => {
      let t = this._scrollerRef;
      if (null == t) return;
      let n = this._paginationItemRefs[e];
      null != n && t.scrollIntoViewNode({
        node: n,
        animate: true,
        padding: this.props.scrollToPadding
      })
    }), u(this, "handlePageClick", e => {
      let {
        onSetItem: t
      } = this.props;
      t(e)
    })
  }
}
u(m, "Align", p), u(m, "defaultProps", {
  scrollToPadding: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  align: p.CENTER
});
class h extends Chunk473749.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, r.jsx)(o.P3F, {
      className: s()(d.prevButtonContainer, e),
      onClick: this.handlePrevClick,
      children: (0, r.jsx)(c.Z, {
        className: d.arrow,
        direction: c.Z.Directions.LEFT
      })
    })
  }
  constructor(...e) {
    super(...e), u(this, "handlePrevClick", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onClick: t
      } = this.props;
      null == t || t(e)
    })
  }
}
class f extends Chunk473749.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, r.jsx)(o.P3F, {
      className: s()(d.nextButtonContainer, e),
      onClick: this.handleNextClick,
      children: (0, r.jsx)(c.Z, {
        className: d.arrow,
        direction: c.Z.Directions.RIGHT
      })
    })
  }
  constructor(...e) {
    super(...e), u(this, "handleNextClick", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onClick: t
      } = this.props;
      null == t || t(e)
    })
  }
}
let g = m