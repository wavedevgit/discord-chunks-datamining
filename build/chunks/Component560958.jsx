/** Chunk was on 41031 **/
/** chunk id: 560958, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk134402 = require("./134402.js");

function n(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}
class i extends Chunk64700.Component {
  componentDidUpdate(e) {
    let {
      props: {
        location: t,
        shouldScrollToTop: a
      },
      scrollRef: {
        current: s
      }
    } = this;
    null != s && t !== e.location && (null != a ? a(this.props) && (s.scrollTop = 0) : s.scrollTop = 0)
  }
  render() {
    let {
      className: e,
      render: t
    } = this.props;
    return (0, s.jsx)("div", {
      ref: this.scrollRef,
      className: e,
      children: t(this.scrollTo, this.getScrollTop)
    })
  }
  constructor(...e) {
    super(...e), n(this, "scrollRef", l.createRef()), n(this, "scrollTo", e => {
      null != this.scrollRef.current && (this.scrollRef.current.scrollTop = e)
    }), n(this, "getScrollTop", () => null == this.scrollRef.current ? 0 : this.scrollRef.current.scrollTop)
  }
}
let o = (0, Chunk134402.y)(i)