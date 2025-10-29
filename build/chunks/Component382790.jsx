/** Chunk was on 63141 **/
/** chunk id: 382790, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk585816 = require("./585816.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  let {
    closePopout: t
  } = e;
  return (0, r.jsx)(f.Z, {
    onClose: t
  })
}
class v extends(i = Chunk647438.PureComponent) {
  render() {
    let {
      selectedGuildId: e,
      locked: t,
      contained: n,
      className: i
    } = this.props, s = null != module ? (0, Chunk951288.jsx)(Chunk178528.Z, {
      guildId: module,
      onDragStart: this.onDragStart
    }, module) : (0, Chunk951288.jsx)(Chunk711553.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.YUU0RF),
      renderSettings: b,
      onDragStart: this.onDragStart,
      children: (0, Chunk951288.jsx)(Chunk483962.Z, {})
    }), o = require ? "div" : Chunk518084.ZP;
    return (0, Chunk951288.jsxs)(Chunk120356, {
      className: l()(Chunk585816.base, {
        [Chunk585816.widget]: !require
      }, i),
      children: [(0, Chunk951288.jsx)(Chunk416568.Z, {
        isOverlay: true,
        disableAppDownload: true,
        isVisible: !exports
      }), Chunk647438]
    })
  }
  constructor(...e) {
    super(...e), O(this, "onDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(c.B.MOVE, e.clientX, e.clientY)
    })
  }
}
O(v, "defaultProps", {
  contained: false
});
let E = Chunk442837.ZP.connectStores([Chunk914010.Z], () => ({
  selectedGuildId: Chunk914010.Z.getGuildId()
}))(v)