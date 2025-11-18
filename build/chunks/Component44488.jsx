/** Chunk was on 84802 **/
/** chunk id: 44488, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Pz: () => g,
  ZP: () => C,
  am: () => h
}), require("./388685.js");
var a, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk768762 = require("./768762.jsx"),
  Chunk661458 = require("./661458.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = {
  CENTER: Chunk661458.alignCenter,
  LEFT: Chunk661458.alignLeft
};
class p extends(a = Chunk473749.PureComponent) {
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
      align: i
    } = this.props, c = require ? Chunk661458.verticalPaginationItemContainer : Chunk661458.horizontalPaginationItemContainer;
    return (0, Chunk54381.jsx)(Chunk481060.yWw, {
      orientation: require ? "vertical" : "horizontal",
      className: o()(Chunk768762, a, Chunk120356),
      ref: this.handleSetScrollerRef,
      children: exports.map((t, n) => l.cloneElement(e(t, n), {
        onClick: () => this.handlePageClick(n),
        key: n,
        ref: e => {
          this._paginationItemRefs[n] = e
        }
      }))
    })
  }
  constructor(...e) {
    super(...e), d(this, "_scrollerRef", null), d(this, "_paginationItemRefs", []), d(this, "handleSetScrollerRef", e => {
      this._scrollerRef = e
    }), d(this, "handleSelectedIndexChange", e => {
      let t = this._scrollerRef;
      if (null == t) return;
      let n = this._paginationItemRefs[e];
      null != n && t.scrollIntoViewNode({
        node: n,
        animate: true,
        padding: this.props.scrollToPadding
      })
    }), d(this, "handlePageClick", e => {
      let {
        onSetItem: t
      } = this.props;
      t(e)
    })
  }
}
d(p, "Align", m), d(p, "defaultProps", {
  scrollToPadding: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  align: m.CENTER
});
class h extends Chunk473749.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk481060.P3F, {
      className: o()(Chunk661458.prevButtonContainer, module),
      onClick: this.handlePrevClick,
      children: (0, Chunk54381.jsx)(Chunk768762.Z, {
        className: Chunk661458.arrow,
        direction: Chunk768762.Z.Directions.LEFT
      })
    })
  }
  constructor(...e) {
    super(...e), d(this, "handlePrevClick", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onClick: t
      } = this.props;
      null == t || t(e)
    })
  }
}
class g extends Chunk473749.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk481060.P3F, {
      className: o()(Chunk661458.nextButtonContainer, module),
      onClick: this.handleNextClick,
      children: (0, Chunk54381.jsx)(Chunk768762.Z, {
        className: Chunk661458.arrow,
        direction: Chunk768762.Z.Directions.RIGHT
      })
    })
  }
  constructor(...e) {
    super(...e), d(this, "handleNextClick", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onClick: t
      } = this.props;
      null == t || t(e)
    })
  }
}
let C = p