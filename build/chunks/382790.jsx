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
  Chunk552062 = require("./552062.js"),
  Chunk416568 = require("./416568.js"),
  Chunk914010 = require("./914010.js"),
  Chunk518084 = require("./518084.js"),
  Chunk178528 = require("./178528.jsx"),
  Chunk669083 = require("./669083.js"),
  Chunk483962 = require("./483962.js"),
  Chunk711553 = require("./711553.js"),
  Chunk388032 = require("./388032.js"),
  Chunk708132 = require("./708132.js");

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
  return <f.Z onClose={t} />
}
class b extends(i = Chunk73800.PureComponent) {
  render() {
    let {
      selectedGuildId: e,
      locked: t,
      contained: n,
      className: i
    } = this.props, o = null != module ? <Chunk178528.Z guildId={module} onDragStart={this.onDragStart} /> : <Chunk711553.Z title={Chunk388032.intl.string(Chunk388032.t.YUU0RE)} renderSettings={_} onDragStart={this.onDragStart}><Chunk483962.Z /></Chunk711553.Z>, l = require ? "div" : Chunk518084.ZP;
    return <Chunk120356 className={s()(Chunk708132.base, {
        [Chunk708132.widget]: !require
      }, i)}>{<Chunk416568.Z isOverlay={true} disableAppDownload={true} isVisible={!exports} />}{Chunk73800}</Chunk120356>
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