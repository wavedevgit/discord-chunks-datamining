/** Chunk was on 1272 **/
/** chunk id: 687751, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk622822 = require("./622822.js"),
  Chunk920644 = require("./920644.jsx"),
  Chunk208381 = require("./208381.jsx"),
  Chunk723359 = require("./723359.js"),
  Chunk981631 = require("./981631.js");

function h(e) {
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
class g extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), Chunk570140.Z.subscribe("CHANNEL_SELECT", this.handleChannelSelect), Chunk570140.Z.subscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen), Chunk570140.Z.subscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose), Chunk570140.Z.subscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess), Chunk570140.Z.subscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure), Chunk570140.Z.subscribe("GUILD_UPDATE", this.handleGuildUpdate)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), Chunk570140.Z.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect), Chunk570140.Z.unsubscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen), Chunk570140.Z.unsubscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose), Chunk570140.Z.unsubscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess), Chunk570140.Z.unsubscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure), Chunk570140.Z.unsubscribe("GUILD_UPDATE", this.handleGuildUpdate)
  }
  handleChannelSelect(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    (0, c.T5)() && (0, c.I8)(t, n, p.L0.NSFW_CHANNEL)
  }
  handleConnectionOpen() {
    let e = Chunk914010.Z.getGuildId(),
      t = Chunk944486.Z.getChannelId();
    (0, Chunk622822.T5)() && (0, Chunk622822.I8)(module, exports)
  }
  handleAgeGateModalOpen(e) {
    let {
      source: t
    } = e;
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("1716"), n.e("48175")]).then(n.bind(n, 746882));
      return n => (0, r.jsx)(e, h({
        source: t
      }, n))
    }, {
      modalKey: p.dG,
      onCloseRequest: f.dG4,
      backdropStyle: t === p.L0.NSFW_SERVER ? i.fCB.LIGHTBOX : true
    })
  }
  handleAgeGateSuccess() {
    (0, Chunk481060.oav)(Chunk723359.dG, e => (0, r.jsx)(d.Z, h({}, e)))
  }
  handleAgeGateFailure(e) {
    let {
      underageMessage: t
    } = e;
    (0, i.oav)(p.dG, e => (0, r.jsx)(u.Z, h({
      underageMessage: t
    }, e)))
  }
  handleAgeGateModalClose() {
    (0, Chunk481060.Mr3)(Chunk723359.dG)
  }
  handleGuildUpdate(e) {
    let {
      guild: t
    } = e, n = s.Z.getGuildId();
    if (null != n && t.id === n && t.nsfw_level === f.V_K.AGE_RESTRICTED) return void(0, c.I8)(t.id, null)
  }
}
let m = new g