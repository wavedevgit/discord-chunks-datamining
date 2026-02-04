/** Chunk was on 21738 **/
/** chunk id: 802999, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk944791 = require("./944791.js"),
  Chunk781763 = require("./781763.js"),
  Chunk661439 = require("./661439.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk970672 = require("./970672.js"),
  Chunk468691 = require("./468691.jsx"),
  Chunk765258 = require("./765258.jsx"),
  Chunk767852 = require("./767852.jsx"),
  Chunk906320 = require("./906320.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk613057 = require("./613057.js"),
  Chunk384435 = require("./384435.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class y extends Chunk64700.PureComponent {
  componentDidMount() {
    c.I(_.BVt.APPLICATION_LIBRARY), (0, h.h)(b.XK.LIBRARY), o.h.wait(() => (0, u.r)()), (0, d.X)(), null != this._scrollToOnMount && null != this._scrollerRef.current && this.scrollToRow(this._scrollToOnMount, this._scrollToPadding)
  }
  renderToolbar() {
    return (0, r.jsx)(f.A, {})
  }
  render() {
    let {
      includeUpdatesInScroller: e
    } = this.state, t = (0, r.jsx)("div", {
      children: (0, r.jsx)(p.A, {
        section: _.JJy.LIBRARY_INSTALL_MODULE,
        children: (0, r.jsx)(A.A, {
          onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange
        })
      })
    });
    return (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(g.A, {
        currentRoute: _.BVt.APPLICATION_LIBRARY,
        renderToolbar: this.renderToolbar
      }), e ? null : t, (0, r.jsxs)(s.GtU, {
        className: a()(E.k, E.X),
        ref: this._scrollerRef,
        children: [e ? t : null, (0, r.jsx)(p.A, {
          section: _.JJy.LIBRARY_APPLICATION_LIST,
          children: (0, r.jsx)(m.A, {
            stickyHeader: !e,
            scrollToRow: this.scrollToRow
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), O(this, "_scrollerRef", i.createRef()), O(this, "_scrollToOnMount", true), O(this, "_scrollToPadding", 0), O(this, "state", {
      includeUpdatesInScroller: false
    }), O(this, "handleHeightTallerThanHalfViewportChange", e => {
      this.setState({
        includeUpdatesInScroller: e
      })
    }), O(this, "scrollToRow", (e, t) => {
      let n = this._scrollerRef.current;
      null != n ? (e.focus(), n.scrollIntoViewRect({
        start: t,
        end: t
      }), this._scrollToOnMount = null) : (this._scrollToOnMount = e, this._scrollToPadding = t)
    })
  }
}