/** Chunk was on web.js **/
/** chunk id: 484286, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk609261 = require("./609261.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}
class d extends(r = Chunk647438.PureComponent) {
  static getDerivedStateFromProps(e, t) {
    let {
      streamId: n
    } = e;
    if (t.aReady) {
      if (n !== t.aStreamId)
        if (null == n) return {
          bStreamId: n,
          bReady: true,
          aStreamId: null,
          aReady: false
        };
        else return {
          bStreamId: n,
          bReady: false
        }
    } else if (n !== t.bStreamId)
      if (null == n) return {
        aStreamId: n,
        aReady: true,
        bStreamId: null,
        bReady: false
      };
      else return {
        aStreamId: n,
        aReady: false
      };
    return null
  }
  renderVideo(e, t) {
    let {
      children: n,
      mirror: r,
      paused: o,
      component: s
    } = this.props;
    if (null == e) {
      if (null == n) return null;
      let e = a.Children.only(n);
      return a.cloneElement(e, u({
        style: {
          display: t && !r ? true : "none"
        }
      }, e.props))
    }
    return (0, i.jsx)(s, {
      paused: o,
      className: l.media,
      streamId: e,
      onReady: t ? null : this.handleReady
    })
  }
  render() {
    let {
      mirror: e,
      className: t
    } = this.props;
    return (0, Chunk951288.jsxs)("div", {
      className: s()(Chunk609261.video, exports, {
        [Chunk609261.mirror]: module
      }),
      onDoubleClick: this.handleDoubleClick,
      onContextMenu: this.handleContextMenu,
      children: [this.renderVideo(this.state.aStreamId, this.state.aReady), this.renderVideo(this.state.bStreamId, this.state.bReady)]
    })
  }
  constructor(...e) {
    super(...e), c(this, "state", {
      aStreamId: null,
      aReady: false,
      bStreamId: this.props.streamId,
      bReady: true
    }), c(this, "handleReady", () => {
      this.state.aReady ? this.setState({
        bReady: true,
        aStreamId: null,
        aReady: false
      }) : this.setState({
        aReady: true,
        bStreamId: null,
        bReady: false
      })
    }), c(this, "handleDoubleClick", e => {
      let {
        onDoubleClick: t,
        id: n
      } = this.props;
      null == t || t(e, n)
    }), c(this, "handleContextMenu", e => {
      let {
        onContextMenu: t,
        id: n
      } = this.props;
      null == t || t(e, n)
    })
  }
}
c(d, "defaultProps", {
  paused: true
});
let f = d