/** Chunk was on 1272 **/
/** chunk id: 895991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk115654 = require("./115654.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class y extends Chunk647438.PureComponent {
  componentDidMount() {
    Chunk150063.Y(Chunk981631.Z5c.APPLICATION_LIBRARY), (0, Chunk3570.T)(Chunk186901.jE.LIBRARY), Chunk570140.Z.wait(() => (0, Chunk274616.o)()), (0, Chunk827837.N)(), null != this._scrollToOnMount && null != this._scrollerRef.current && this.scrollToRow(this._scrollToOnMount, this._scrollToPadding)
  }
  renderToolbar() {
    return (0, Chunk951288.jsx)(Chunk237919.Z, {})
  }
  render() {
    let {
      includeUpdatesInScroller: e
    } = this.state, t = (0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsx)(Chunk410575.Z, {
        section: Chunk981631.jXE.LIBRARY_INSTALL_MODULE,
        children: (0, Chunk951288.jsx)(Chunk530151.Z, {
          onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange
        })
      })
    });
    return (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk957657.Z, {
        currentRoute: Chunk981631.Z5c.APPLICATION_LIBRARY,
        renderToolbar: this.renderToolbar
      }), module ? null : exports, (0, Chunk951288.jsxs)(Chunk481060.yWw, {
        className: a()(Chunk115654.container, Chunk115654.scroller),
        ref: this._scrollerRef,
        children: [module ? exports : null, (0, Chunk951288.jsx)(Chunk410575.Z, {
          section: Chunk981631.jXE.LIBRARY_APPLICATION_LIST,
          children: (0, Chunk951288.jsx)(Chunk665307.Z, {
            stickyHeader: !module,
            scrollToRow: this.scrollToRow
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), I(this, "_scrollerRef", i.createRef()), I(this, "_scrollToOnMount", true), I(this, "_scrollToPadding", 0), I(this, "state", {
      includeUpdatesInScroller: false
    }), I(this, "handleHeightTallerThanHalfViewportChange", e => {
      this.setState({
        includeUpdatesInScroller: e
      })
    }), I(this, "scrollToRow", (e, t) => {
      let n = this._scrollerRef.current;
      null != n ? (e.focus(), n.scrollIntoViewRect({
        start: t,
        end: t
      }), this._scrollToOnMount = null) : (this._scrollToOnMount = e, this._scrollToPadding = t)
    })
  }
}