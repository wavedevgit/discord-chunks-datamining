/** Chunk was on 84283 **/
/** chunk id: 44488, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Pz: () => g,
  ZP: () => _,
  am: () => h
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk768762 = require("./768762.jsx"),
  Chunk661458 = require("./661458.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = {
  CENTER: Chunk661458.alignCenter,
  LEFT: Chunk661458.alignLeft
};
class m extends(r = Chunk647438.PureComponent) {
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
      paginationContainerClass: r,
      align: l
    } = this.props, c = require ? Chunk661458.verticalPaginationItemContainer : Chunk661458.horizontalPaginationItemContainer;
    return (0, Chunk951288.jsx)(Chunk481060.yWw, {
      orientation: require ? "vertical" : "horizontal",
      className: s()(Chunk768762, r, Chunk120356),
      ref: this.handleSetScrollerRef,
      children: exports.map((t, n) => i.cloneElement(e(t, n), {
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
class h extends Chunk647438.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk481060.P3F, {
      className: s()(Chunk661458.prevButtonContainer, module),
      onClick: this.handlePrevClick,
      children: (0, Chunk951288.jsx)(Chunk768762.Z, {
        className: Chunk661458.arrow,
        direction: Chunk768762.Z.Directions.LEFT
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
class g extends Chunk647438.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk481060.P3F, {
      className: s()(Chunk661458.nextButtonContainer, module),
      onClick: this.handleNextClick,
      children: (0, Chunk951288.jsx)(Chunk768762.Z, {
        className: Chunk661458.arrow,
        direction: Chunk768762.Z.Directions.RIGHT
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
let _ = m