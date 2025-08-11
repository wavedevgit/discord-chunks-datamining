/** Chunk was on 87626 **/
/** chunk id: 501522, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk764110 = require("./764110.js");

function l(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}
class i extends Chunk73800.Component {
  componentDidUpdate(e) {
    let {
      props: {
        location: t,
        shouldScrollToTop: a
      },
      scrollRef: {
        current: n
      }
    } = this;
    null != n && t !== e.location && (null != a ? a(this.props) && (n.scrollTop = 0) : n.scrollTop = 0)
  }
  render() {
    let {
      className: e,
      render: t
    } = this.props;
    return (0, Chunk255367.jsx)("div", {
      ref: this.scrollRef,
      className: module,
      children: exports(this.scrollTo, this.getScrollTop)
    })
  }
  constructor(...e) {
    super(...e), l(this, "scrollRef", r.createRef()), l(this, "scrollTo", e => {
      null != this.scrollRef.current && (this.scrollRef.current.scrollTop = e)
    }), l(this, "getScrollTop", () => null == this.scrollRef.current ? 0 : this.scrollRef.current.scrollTop)
  }
}
let o = (0, Chunk764110.EN)(i)