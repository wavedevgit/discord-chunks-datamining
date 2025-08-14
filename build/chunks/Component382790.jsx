/** Chunk was on 63141 **/
/** chunk id: 382790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk552062 = require("./552062.jsx"),
  Chunk416568 = require("./416568.jsx"),
  Chunk914010 = require("./914010.js"),
  Chunk518084 = require("./518084.jsx"),
  Chunk178528 = require("./178528.jsx"),
  Chunk669083 = require("./669083.jsx"),
  Chunk483962 = require("./483962.jsx"),
  Chunk711553 = require("./711553.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk585816 = require("./585816.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  let {
    closePopout: t
  } = e;
  return (0, r.jsx)(f.Z, {
    onClose: t
  })
}
class b extends(i = Chunk73800.PureComponent) {
  render() {
    let {
      selectedGuildId: e,
      locked: t,
      contained: n,
      className: i
    } = this.props, o = null != module ? (0, Chunk255367.jsx)(Chunk178528.Z, {
      guildId: module,
      onDragStart: this.onDragStart
    }, module) : (0, Chunk255367.jsx)(Chunk711553.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.YUU0RE),
      renderSettings: _,
      onDragStart: this.onDragStart,
      children: (0, Chunk255367.jsx)(Chunk483962.Z, {})
    }), l = require ? "div" : Chunk518084.ZP;
    return (0, Chunk255367.jsxs)(Chunk120356, {
      className: s()(Chunk585816.base, {
        [Chunk585816.widget]: !require
      }, i),
      children: [(0, Chunk255367.jsx)(Chunk416568.Z, {
        isOverlay: true,
        disableAppDownload: true,
        isVisible: !exports
      }), Chunk73800]
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
v(b, "defaultProps", {
  contained: false
});
let E = Chunk442837.ZP.connectStores([Chunk914010.Z], () => ({
  selectedGuildId: Chunk914010.Z.getGuildId()
}))(b)