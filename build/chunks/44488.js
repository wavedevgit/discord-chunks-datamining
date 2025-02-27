/** Chunk was on 87267 **/
n.d(t, {
  Pz: () => h,
  ZP: () => O,
  am: () => _
}), n(47120);
var r, i = n(200651),
  o = n(192379),
  a = n(120356),
  l = n.n(a),
  s = n(481060),
  c = n(768762),
  u = n(480533);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = {
  CENTER: u.alignCenter,
  LEFT: u.alignLeft
};
class p extends(r = o.PureComponent) {
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
      align: a
    } = this.props, c = n ? u.verticalPaginationItemContainer : u.horizontalPaginationItemContainer;
    return (0, i.jsx)(s.yWw, {
      orientation: n ? "vertical" : "horizontal",
      className: l()(c, r, a),
      ref: this.handleSetScrollerRef,
      children: t.map((t, n) => o.cloneElement(e(t, n), {
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
        animate: !0,
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
d(p, "Align", f), d(p, "defaultProps", {
  scrollToPadding: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  align: f.CENTER
});
class _ extends o.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, i.jsx)(s.zxk, {
      look: s.zxk.Looks.BLANK,
      size: s.zxk.Sizes.NONE,
      className: l()(u.prevButtonContainer, e),
      onClick: this.handlePrevClick,
      children: (0, i.jsx)(c.Z, {
        className: u.arrow,
        direction: c.Z.Directions.LEFT
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
class h extends o.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, i.jsx)(s.zxk, {
      look: s.zxk.Looks.BLANK,
      size: s.zxk.Sizes.NONE,
      className: l()(u.nextButtonContainer, e),
      onClick: this.handleNextClick,
      children: (0, i.jsx)(c.Z, {
        className: u.arrow,
        direction: c.Z.Directions.RIGHT
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
let O = 12633 == n.j ? p : null