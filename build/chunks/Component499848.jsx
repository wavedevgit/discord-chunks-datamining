/** Chunk was on 80960 **/
/** chunk id: 499848, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk271383 = require("./271383.js"),
  Chunk19780 = require("./19780.js"),
  Chunk226961 = require("./226961.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk481250 = require("./481250.jsx"),
  Chunk388032 = require("./388032.jsx");
class h extends Chunk647438.PureComponent {
  render() {
    let {
      streams: e,
      context: t,
      userId: r,
      mediaEngineConnectionId: a,
      videoStreams: i
    } = this.props;
    if (null == require || null == module || 0 === module.length) return (0, Chunk951288.jsx)(Chunk481060.$jN, {
      type: Chunk481060.$jN.Type.SPINNING_CIRCLE
    });
    let c = Chunk19780.Z.getGuildId(),
      h = Chunk594174.default.getUser(require),
      f = Chunk271383.ZP.getNick(Chunk226961, require),
      y = null == h ? Chunk388032.intl.string(Chunk388032.t.SJmZam) : "".concat(Chunk388032.intl.string(Chunk388032.t.SJmZam), " — ").concat(null != f ? f : Chunk51144.ZP.getName(h));
    return (0, Chunk951288.jsx)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H2,
      title: y,
      children: (0, Chunk481250.V)(module, exports, Chunk647438, require, Chunk442837)
    })
  }
}
let f = Chunk442837.ZP.connectStores([Chunk226961.ZP], e => {
  let {
    context: t,
    index: r,
    videoStreams: n
  } = e, a = c.ZP.getAllStats(t)[r], {
    section: i
  } = (0, c.fZ)(c.ZP.getSection());
  if (null == i) throw Error("Unrecognized section format");
  let l = null;
  if (null != a && null != a.rtp.inbound) {
    var o;
    l = null != (o = a.rtp.inbound[i]) ? o : []
  }
  return {
    mediaEngineConnectionId: null == a ? true : a.mediaEngineConnectionId,
    userId: i,
    streams: l,
    videoStreams: n
  }
})(h)