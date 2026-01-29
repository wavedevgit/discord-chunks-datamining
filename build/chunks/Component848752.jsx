/** Chunk was on 67851 **/
/** chunk id: 848752, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => h,
  Oj: () => p,
  Q8: () => b
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk532197 = require("./532197.jsx"),
  Chunk331026 = require("./331026.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = {
  CENTER: Chunk331026.Hu,
  LEFT: Chunk331026.Vl
};
class m extends(r = Chunk64700.PureComponent) {
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
      align: i
    } = this.props, c = n ? d.XA : d.BU;
    return (0, l.jsx)(s.GtU, {
      orientation: n ? "vertical" : "horizontal",
      className: o()(c, r, i),
      ref: this.handleSetScrollerRef,
      children: t.map((t, n) => a.cloneElement(e(t, n), {
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
u(m, "Align", _), u(m, "defaultProps", {
  scrollToPadding: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  align: _.CENTER
});
class b extends Chunk64700.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, l.jsx)(s.DUT, {
      className: o()(d.t1, e),
      onClick: this.handlePrevClick,
      children: (0, l.jsx)(c.A, {
        className: d.UE,
        direction: c.A.Directions.LEFT
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
class p extends Chunk64700.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, l.jsx)(s.DUT, {
      className: o()(d.XS, e),
      onClick: this.handleNextClick,
      children: (0, l.jsx)(c.A, {
        className: d.UE,
        direction: c.A.Directions.RIGHT
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
let h = m