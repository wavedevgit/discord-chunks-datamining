/** Chunk was on 21738 **/
/** chunk id: 828430, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk36149 = require("./36149.js"),
  Chunk662502 = require("./662502.js"),
  Chunk260509 = require("./260509.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk323073 = require("./323073.js"),
  Chunk329972 = require("./329972.js"),
  Chunk784578 = require("./784578.jsx"),
  Chunk204925 = require("./204925.js"),
  Chunk652215 = require("./652215.js"),
  Chunk835002 = require("./835002.js");

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
class _ extends Chunk272355.A {
  _initialize() {
    l.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.h.subscribe("CHANNEL_SELECT", this.handleChannelSelect), l.h.subscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen), l.h.subscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose), l.h.subscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess), l.h.subscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure), l.h.subscribe("GUILD_UPDATE", this.handleGuildUpdate)
  }
  _terminate() {
    l.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.h.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect), l.h.unsubscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen), l.h.unsubscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose), l.h.unsubscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess), l.h.unsubscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure), l.h.unsubscribe("GUILD_UPDATE", this.handleGuildUpdate)
  }
  handleChannelSelect(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    (0, p.kK)(t, n)
  }
  handleConnectionOpen() {
    let e = d.A.getGuildId(),
      t = u.A.getChannelId();
    (0, p.kK)(e, t)
  }
  handleAgeGateModalOpen(e) {
    let {
      source: t
    } = e;
    (0, i.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("10136"), n.e("40709")]).then(n.bind(n, 776971));
      return n => (0, r.jsx)(e, b({
        source: t
      }, n))
    }, {
      modalKey: A.Uy,
      onCloseRequest: g.tEg,
      backdropStyle: (0, s.lU)(t) ? i.F2Z.LIGHTBOX : true
    })
  }
  handleAgeGateSuccess() {
    o.A.showSuccessToast(m.OB.EXISTING_USER_AGE_GATE_SUCCESS), (0, i.OoC)(A.Uy)
  }
  handleAgeGateFailure(e) {
    let {
      underageMessage: t
    } = e;
    (0, i.zbz)(A.Uy, e => (0, r.jsx)(h.default, b({
      underageMessage: t
    }, e)))
  }
  handleAgeGateModalClose() {
    (0, i.OoC)(A.Uy)
  }
  handleGuildUpdate(e) {
    let {
      guild: t
    } = e, n = d.A.getGuildId();
    if (null != n && t.id === n && (t.owner_configured_content_level === g.ftr.AGE_RESTRICTED || (0, f.v)("age_gate_manager") && c.uA.has(t.nsfw_level))) return void(0, p.kK)(t.id, null)
  }
}
let E = new _