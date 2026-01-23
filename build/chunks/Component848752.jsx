/** Chunk was on 85426 **/
/** chunk id: 848752, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Ay: () => f,
  Oj: () => p,
  Q8: () => h
}), require("./896048.js");
var n, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk532197 = require("./532197.jsx"),
  Chunk331026 = require("./331026.js");

function d(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = l, e
}
let m = {
  CENTER: Chunk331026.Hu,
  LEFT: Chunk331026.Vl
};
class _ extends(n = Chunk64700.PureComponent) {
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
      vertical: l,
      paginationContainerClass: n,
      align: s
    } = this.props, c = l ? u.XA : u.BU;
    return (0, r.jsx)(o.GtU, {
      orientation: l ? "vertical" : "horizontal",
      className: i()(c, n, s),
      ref: this.handleSetScrollerRef,
      children: t.map((t, l) => a.cloneElement(e(t, l), {
        onClick: () => this.handlePageClick(l),
        key: l,
        ref: e => {
          this._paginationItemRefs[l] = e
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
      let l = this._paginationItemRefs[e];
      null != l && t.scrollIntoViewNode({
        node: l,
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
d(_, "Align", m), d(_, "defaultProps", {
  scrollToPadding: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  align: m.CENTER
});
class h extends Chunk64700.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, r.jsx)(o.DUT, {
      className: i()(u.t1, e),
      onClick: this.handlePrevClick,
      children: (0, r.jsx)(c.A, {
        className: u.UE,
        direction: c.A.Directions.LEFT
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
class p extends Chunk64700.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, r.jsx)(o.DUT, {
      className: i()(u.XS, e),
      onClick: this.handleNextClick,
      children: (0, r.jsx)(c.A, {
        className: u.UE,
        direction: c.A.Directions.RIGHT
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
let f = _