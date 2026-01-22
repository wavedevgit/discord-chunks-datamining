/** Chunk was on 84018 **/
/** chunk id: 328913, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./896048.js");
var i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk685603 = require("./685603.jsx"),
  Chunk467627 = require("./467627.jsx"),
  Chunk967198 = require("./967198.js"),
  Chunk855790 = require("./855790.jsx"),
  Chunk335022 = require("./335022.jsx"),
  Chunk714977 = require("./714977.jsx"),
  Chunk266244 = require("./266244.jsx"),
  Chunk439817 = require("./439817.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk90901 = require("./90901.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  let {
    closePopout: t
  } = e;
  return (0, r.jsx)(f.A, {
    onClose: t
  })
}
class v extends(i = Chunk64700.PureComponent) {
  render() {
    let {
      selectedGuildId: e,
      locked: t,
      contained: n,
      className: i
    } = this.props, s = null != e ? (0, r.jsx)(p.A, {
      guildId: e,
      onDragStart: this.onDragStart
    }, e) : (0, r.jsx)(g.A, {
      title: y.intl.string(y.t.YUU0RF),
      renderSettings: O,
      onDragStart: this.onDragStart,
      children: (0, r.jsx)(b.A, {})
    }), l = n ? "div" : h.Ay;
    return (0, r.jsxs)(l, {
      className: o()(A.E, {
        [A.H]: !n
      }, i),
      children: [(0, r.jsx)(d.A, {
        isOverlay: true,
        disableAppDownload: true,
        isVisible: !t
      }), s]
    })
  }
  constructor(...e) {
    super(...e), m(this, "onDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(c.P.MOVE, e.clientX, e.clientY)
    })
  }
}
m(v, "defaultProps", {
  contained: false
});
let E = Chunk311907.Ay.connectStores([Chunk967198.A], () => ({
  selectedGuildId: u.A.getGuildId()
}))(v)