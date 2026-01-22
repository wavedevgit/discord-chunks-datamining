/** Chunk was on web.js **/
/** chunk id: 712577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk907961 = require("./907961.js");

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
class d extends(r = Chunk64700.PureComponent) {
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
      paused: s,
      component: o
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
    return (0, i.jsx)(o, {
      paused: s,
      className: l.$_,
      streamId: e,
      onReady: t ? null : this.handleReady
    })
  }
  render() {
    let {
      mirror: e,
      className: t
    } = this.props;
    return (0, i.jsxs)("div", {
      className: o()(l.Ki, t, {
        [l.e7]: e
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