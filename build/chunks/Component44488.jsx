/** Chunk was on 84802 **/
/** chunk id: 44488, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Pz: () => _,
  ZP: () => C,
  am: () => g
}), require("./388685.js");
var l, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk768762 = require("./768762.jsx"),
  Chunk584917 = require("./584917.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = {
  CENTER: Chunk584917.alignCenter,
  LEFT: Chunk584917.alignLeft
};
class p extends(l = Chunk473749.PureComponent) {
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
      paginationContainerClass: l,
      align: o
    } = this.props, c = require ? Chunk584917.verticalPaginationItemContainer : Chunk584917.horizontalPaginationItemContainer;
    return (0, Chunk54381.jsx)(Chunk481060.yWw, {
      orientation: require ? "vertical" : "horizontal",
      className: i()(Chunk768762, l, Chunk120356),
      ref: this.handleSetScrollerRef,
      children: exports.map((t, n) => r.cloneElement(e(t, n), {
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
class g extends Chunk473749.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk481060.P3F, {
      className: i()(Chunk584917.prevButtonContainer, module),
      onClick: this.handlePrevClick,
      children: (0, Chunk54381.jsx)(Chunk768762.Z, {
        className: Chunk584917.arrow,
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
class _ extends Chunk473749.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk481060.P3F, {
      className: i()(Chunk584917.nextButtonContainer, module),
      onClick: this.handleNextClick,
      children: (0, Chunk54381.jsx)(Chunk768762.Z, {
        className: Chunk584917.arrow,
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