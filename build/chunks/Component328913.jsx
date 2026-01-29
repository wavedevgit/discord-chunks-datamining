/** Chunk was on 84018 **/
/** chunk id: 328913, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => v
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

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  let {
    closePopout: t
  } = e;
  return (0, r.jsx)(f.A, {
    onClose: t
  })
}
class O extends(i = Chunk64700.PureComponent) {
  render() {
    let {
      selectedGuildId: e,
      locked: t,
      contained: n,
      className: i
    } = this.props, s = null != e ? (0, r.jsx)(h.A, {
      guildId: e,
      onDragStart: this.onDragStart
    }, e) : (0, r.jsx)(y.A, {
      title: m.intl.string(m.t.YUU0RF),
      renderSettings: A,
      onDragStart: this.onDragStart,
      children: (0, r.jsx)(g.A, {})
    }), l = n ? "div" : p.Ay;
    return (0, r.jsxs)(l, {
      className: o()(_.E, {
        [_.H]: !n
      }, i),
      children: [(0, r.jsx)(d.A, {
        isOverlay: true,
        disableAppDownload: true,
        isVisible: !t
      }), s]
    })
  }
  constructor(...e) {
    super(...e), b(this, "onDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(c.P.MOVE, e.clientX, e.clientY)
    })
  }
}
b(O, "defaultProps", {
  contained: false
});
let v = Chunk311907.Ay.connectStores([Chunk967198.A], () => ({
  selectedGuildId: u.A.getGuildId()
}))(O)