/** Chunk was on 1272 **/
/** chunk id: 834743, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82950 = require("./82950.jsx"),
  Chunk623624 = require("./623624.jsx"),
  Chunk650774 = require("./650774.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk241626 = require("./241626.js");
class h extends Chunk73800.PureComponent {
  render() {
    let {
      guild: e,
      memberCount: t,
      markAsDismissed: n
    } = this.props;
    return (0, Chunk255367.jsx)(Chunk82950.Z, {
      guild: module,
      onDismissed: () => require(Chunk921944.L.UNKNOWN),
      onClick: this.handleButtonClick,
      message: null == exports || exports < 30 ? Chunk388032.intl.string(Chunk388032.t.hlitVV) : Chunk388032.intl.string(Chunk388032.t.XHtaDA),
      cta: Chunk388032.intl.string(Chunk388032.t["vqb+Hx"]),
      trackingSource: Chunk981631.PsQ.GUILD_SUBSCRIPTION_NOTICE,
      type: Chunk981631.vID.GUILD_BOOSTING,
      image: Chunk241626,
      imageMarginX: 26
    })
  }
  constructor(...e) {
    var t, n;
    super(...e), t = "handleButtonClick", n = () => {
      let {
        guild: e
      } = this.props;
      (0, o.f)({
        guildId: e.id,
        location: {
          section: c.jXE.CHANNEL_NOTICE,
          object: c.qAy.SERVER_STATUS_CTA
        }
      })
    }, t in this ? Object.defineProperty(this, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : this[t] = n
  }
}
let f = Chunk442837.ZP.connectStores([Chunk650774.Z], e => {
  let {
    guild: t
  } = e;
  return {
    memberCount: s.Z.getMemberCount(t.id)
  }
})(h)