/** Chunk was on 69844 **/
/** chunk id: 44488, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Pz: () => _,
  ZP: () => f,
  am: () => g
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk768762 = require("./768762.jsx"),
  Chunk584917 = require("./584917.js");

function p(e, t, n) {
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
class h extends(r = Chunk647438.PureComponent) {
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
    } = this.props, o = require ? Chunk584917.verticalPaginationItemContainer : Chunk584917.horizontalPaginationItemContainer;
    return (0, Chunk951288.jsx)(Chunk481060.yWw, {
      orientation: require ? "vertical" : "horizontal",
      className: s()(Chunk755721, r, Chunk120356),
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
    super(...e), p(this, "_scrollerRef", null), p(this, "_paginationItemRefs", []), p(this, "handleSetScrollerRef", e => {
      this._scrollerRef = e
    }), p(this, "handleSelectedIndexChange", e => {
      let t = this._scrollerRef;
      if (null == t) return;
      let n = this._paginationItemRefs[e];
      null != n && t.scrollIntoViewNode({
        node: n,
        animate: true,
        padding: this.props.scrollToPadding
      })
    }), p(this, "handlePageClick", e => {
      let {
        onSetItem: t
      } = this.props;
      t(e)
    })
  }
}
p(h, "Align", m), p(h, "defaultProps", {
  scrollToPadding: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  align: m.CENTER
});
class g extends Chunk647438.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk755721.zx, {
      look: Chunk755721.zx.Looks.BLANK,
      size: Chunk755721.zx.Sizes.NONE,
      className: s()(Chunk584917.prevButtonContainer, module),
      onClick: this.handlePrevClick,
      children: (0, Chunk951288.jsx)(Chunk768762.Z, {
        className: Chunk584917.arrow,
        direction: Chunk768762.Z.Directions.LEFT
      })
    })
  }
  constructor(...e) {
    super(...e), p(this, "handlePrevClick", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onClick: t
      } = this.props;
      null == t || t(e)
    })
  }
}
class _ extends Chunk647438.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk755721.zx, {
      look: Chunk755721.zx.Looks.BLANK,
      size: Chunk755721.zx.Sizes.NONE,
      className: s()(Chunk584917.nextButtonContainer, module),
      onClick: this.handleNextClick,
      children: (0, Chunk951288.jsx)(Chunk768762.Z, {
        className: Chunk584917.arrow,
        direction: Chunk768762.Z.Directions.RIGHT
      })
    })
  }
  constructor(...e) {
    super(...e), p(this, "handleNextClick", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onClick: t
      } = this.props;
      null == t || t(e)
    })
  }
}
let f = h