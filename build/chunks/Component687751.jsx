/** Chunk was on 1272 **/
/** chunk id: 687751, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk81643 = require("./81643.js"),
  Chunk681678 = require("./681678.js"),
  Chunk601964 = require("./601964.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk622822 = require("./622822.js"),
  Chunk165540 = require("./165540.js"),
  Chunk920644 = require("./920644.jsx"),
  Chunk723359 = require("./723359.js"),
  Chunk981631 = require("./981631.js"),
  Chunk484710 = require("./484710.js");

function _(e) {
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
class E extends Chunk317770.Z {
  _initialize() {
    l.Z.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.Z.subscribe("CHANNEL_SELECT", this.handleChannelSelect), l.Z.subscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen), l.Z.subscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose), l.Z.subscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess), l.Z.subscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure), l.Z.subscribe("GUILD_UPDATE", this.handleGuildUpdate)
  }
  _terminate() {
    l.Z.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.Z.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect), l.Z.unsubscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen), l.Z.unsubscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose), l.Z.unsubscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess), l.Z.unsubscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure), l.Z.unsubscribe("GUILD_UPDATE", this.handleGuildUpdate)
  }
  handleChannelSelect(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    (0, p.I8)(t, n)
  }
  handleConnectionOpen() {
    let e = d.Z.getGuildId(),
      t = u.Z.getChannelId();
    (0, p.I8)(e, t)
  }
  handleAgeGateModalOpen(e) {
    let {
      source: t
    } = e;
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("1716"), n.e("22611")]).then(n.bind(n, 746882));
      return n => (0, r.jsx)(e, _({
        source: t
      }, n))
    }, {
      modalKey: h.dG,
      onCloseRequest: m.dG4,
      backdropStyle: (0, o.bj)(t) ? i.fCB.LIGHTBOX : true
    })
  }
  handleAgeGateSuccess() {
    s.Z.showSuccessToast(b.wQ.EXISTING_USER_AGE_GATE_SUCCESS), (0, i.Mr3)(h.dG)
  }
  handleAgeGateFailure(e) {
    let {
      underageMessage: t
    } = e;
    (0, i.oav)(h.dG, e => (0, r.jsx)(g.default, _({
      underageMessage: t
    }, e)))
  }
  handleAgeGateModalClose() {
    (0, i.Mr3)(h.dG)
  }
  handleGuildUpdate(e) {
    let {
      guild: t
    } = e, n = d.Z.getGuildId();
    if (null != n && t.id === n && (t.owner_configured_content_level === m.V_K.AGE_RESTRICTED || (0, f.X)("age_gate_manager") && c.Ov.has(t.nsfw_level))) return void(0, p.I8)(t.id, null)
  }
}
let O = new E