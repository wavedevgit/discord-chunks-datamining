/** Chunk was on 63141 **/
/** chunk id: 382790, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk552062 = require("./552062.jsx"),
  Chunk416568 = require("./416568.jsx"),
  Chunk914010 = require("./914010.js"),
  Chunk518084 = require("./518084.jsx"),
  Chunk178528 = require("./178528.jsx"),
  Chunk312186 = require("./312186.jsx"),
  Chunk483962 = require("./483962.jsx"),
  Chunk711553 = require("./711553.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk546753 = require("./546753.js");

function v(e, t, n) {
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
  return (0, r.jsx)(p.Z, {
    onClose: t
  })
}
class E extends(i = Chunk473749.PureComponent) {
  render() {
    let {
      selectedGuildId: e,
      locked: t,
      contained: n,
      className: i
    } = this.props, s = null != e ? (0, r.jsx)(f.Z, {
      guildId: e,
      onDragStart: this.onDragStart
    }, e) : (0, r.jsx)(m.Z, {
      title: b.intl.string(b.t.YUU0RF),
      renderSettings: O,
      onDragStart: this.onDragStart,
      children: (0, r.jsx)(g.Z, {})
    }), o = n ? "div" : h.ZP;
    return (0, r.jsxs)(o, {
      className: a()(y.base, {
        [y.widget]: !n
      }, i),
      children: [(0, r.jsx)(d.Z, {
        isOverlay: true,
        disableAppDownload: true,
        isVisible: !t
      }), s]
    })
  }
  constructor(...e) {
    super(...e), v(this, "onDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(c.B.MOVE, e.clientX, e.clientY)
    })
  }
}
v(E, "defaultProps", {
  contained: false
});
let x = Chunk442837.ZP.connectStores([Chunk914010.Z], () => ({
  selectedGuildId: u.Z.getGuildId()
}))(E)