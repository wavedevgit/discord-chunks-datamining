/** Chunk was on 1272 **/
/** chunk id: 895991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk150063 = require("./150063.js"),
  Chunk274616 = require("./274616.js"),
  Chunk827837 = require("./827837.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk3570 = require("./3570.js"),
  Chunk237919 = require("./237919.jsx"),
  Chunk957657 = require("./957657.jsx"),
  Chunk665307 = require("./665307.jsx"),
  Chunk530151 = require("./530151.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk186901 = require("./186901.js"),
  Chunk575959 = require("./575959.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class I extends Chunk473749.PureComponent {
  componentDidMount() {
    c.Y(E.Z5c.APPLICATION_LIBRARY), (0, f.T)(_.jE.LIBRARY), s.Z.wait(() => (0, u.o)()), (0, d.N)(), null != this._scrollToOnMount && null != this._scrollerRef.current && this.scrollToRow(this._scrollToOnMount, this._scrollToPadding)
  }
  renderToolbar() {
    return (0, r.jsx)(g.Z, {})
  }
  render() {
    let {
      includeUpdatesInScroller: e
    } = this.state, t = (0, r.jsx)("div", {
      children: (0, r.jsx)(p.Z, {
        section: E.jXE.LIBRARY_INSTALL_MODULE,
        children: (0, r.jsx)(b.Z, {
          onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange
        })
      })
    });
    return (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(h.Z, {
        currentRoute: E.Z5c.APPLICATION_LIBRARY,
        renderToolbar: this.renderToolbar
      }), e ? null : t, (0, r.jsxs)(o.yWw, {
        className: a()(O.container, O.scroller),
        ref: this._scrollerRef,
        children: [e ? t : null, (0, r.jsx)(p.Z, {
          section: E.jXE.LIBRARY_APPLICATION_LIST,
          children: (0, r.jsx)(m.Z, {
            stickyHeader: !e,
            scrollToRow: this.scrollToRow
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), v(this, "_scrollerRef", i.createRef()), v(this, "_scrollToOnMount", true), v(this, "_scrollToPadding", 0), v(this, "state", {
      includeUpdatesInScroller: false
    }), v(this, "handleHeightTallerThanHalfViewportChange", e => {
      this.setState({
        includeUpdatesInScroller: e
      })
    }), v(this, "scrollToRow", (e, t) => {
      let n = this._scrollerRef.current;
      null != n ? (e.focus(), n.scrollIntoViewRect({
        start: t,
        end: t
      }), this._scrollToOnMount = null) : (this._scrollToOnMount = e, this._scrollToPadding = t)
    })
  }
}