/** Chunk was on 63141 **/
/** chunk id: 708383, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk114858 = require("./114858.js"),
  Chunk749210 = require("./749210.js"),
  Chunk287734 = require("./287734.js"),
  Chunk765717 = require("./765717.js"),
  Chunk893607 = require("./893607.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js");
class h extends Chunk73800.Component {
  componentDidUpdate(e) {
    let {
      location: t
    } = this.props;
    t.pathname + t.search !== e.location.pathname + e.location.search && this.checkGuildAndChannel()
  }
  checkGuildAndChannel() {
    let {
      match: e
    } = this.props;
    if (null == module) return;
    let {
      guildId: t,
      channelId: n,
      messageId: i
    } = function(e) {
      let {
        guildId: t,
        channelId: n,
        messageId: i
      } = e.params;
      return {
        guildId: null != t && "" !== t ? t : u.ME,
        channelId: n,
        messageId: i
      }
    }(module);
    (0, Chunk893607.Ss)(exports) && (0, Chunk893607.cq)(require) ? (Chunk749210.Z.selectGuild(exports), Chunk287734.default.selectChannel({
      guildId: exports,
      channelId: require,
      messageId: Chunk255367
    })) : (0, Chunk703656.dL)(Chunk981631.Z5c.ME)
  }
  render() {
    return null
  }
}
let p = () => <Chunk114858.rs>{<Chunk765717.Z path={Chunk981631.Z5c.CHANNEL(Chunk893607.Hw.guildId(), Chunk893607.Hw.channelId({
      optional: true
    }), ":messageId?")} component={h} />}{<Chunk765717.Z component={h} />}</Chunk114858.rs>