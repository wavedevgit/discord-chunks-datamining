/** Chunk was on 1272 **/
/** chunk id: 834743, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82950 = require("./82950.jsx"),
  Chunk623624 = require("./623624.jsx"),
  Chunk650774 = require("./650774.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk241626 = require("./241626.js");
class f extends Chunk647438.PureComponent {
  render() {
    let {
      guild: e,
      memberCount: t,
      markAsDismissed: n
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk82950.Z, {
      guild: module,
      onDismissed: () => require(Chunk921944.L.UNKNOWN),
      onClick: this.handleButtonClick,
      message: null == exports || exports < 30 ? Chunk388032.intl.string(Chunk388032.t.hlitVQ) : Chunk388032.intl.string(Chunk388032.t.XHtaDD),
      cta: Chunk388032.intl.string(Chunk388032.t["vqb+H1"]),
      trackingSource: Chunk981631.PsQ.GUILD_SUBSCRIPTION_NOTICE,
      type: Chunk981631.vID.GUILD_BOOSTING,
      image: Chunk241626,
      imageMarginX: 26
    })
  }
  constructor(...e) {
    super(...e),
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "handleButtonClick", () => {
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
      })
  }
}
let h = Chunk442837.ZP.connectStores([Chunk650774.Z], e => {
  let {
    guild: t
  } = e;
  return {
    memberCount: s.Z.getMemberCount(t.id)
  }
})(f)