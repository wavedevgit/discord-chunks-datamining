/** Chunk was on 63141 **/
/** chunk id: 382790, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  let {
    closePopout: t
  } = e;
  return (0, r.jsx)(f.Z, {
    onClose: t
  })
}
class O extends(i = Chunk473749.PureComponent) {
  render() {
    let {
      selectedGuildId: e,
      locked: t,
      contained: n,
      className: i
    } = this.props, s = null != module ? (0, Chunk54381.jsx)(Chunk178528.Z, {
      guildId: module,
      onDragStart: this.onDragStart
    }, module) : (0, Chunk54381.jsx)(Chunk711553.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.YUU0RF),
      renderSettings: v,
      onDragStart: this.onDragStart,
      children: (0, Chunk54381.jsx)(Chunk483962.Z, {})
    }), o = require ? "div" : Chunk518084.ZP;
    return (0, Chunk54381.jsxs)(Chunk120356, {
      className: l()(Chunk585816.base, {
        [Chunk585816.widget]: !require
      }, i),
      children: [(0, Chunk54381.jsx)(Chunk416568.Z, {
        isOverlay: true,
        disableAppDownload: true,
        isVisible: !exports
      }), Chunk473749]
    })
  }
  constructor(...e) {
    super(...e), b(this, "onDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(c.B.MOVE, e.clientX, e.clientY)
    })
  }
}
b(O, "defaultProps", {
  contained: false
});
let E = Chunk442837.ZP.connectStores([Chunk914010.Z], () => ({
  selectedGuildId: Chunk914010.Z.getGuildId()
}))(O)