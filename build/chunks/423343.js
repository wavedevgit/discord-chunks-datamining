/** Chunk was on web.js **/
/** chunk id: 423343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => c
}), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk379649 = require("./379649.js"),
  Chunk126168 = require("./126168.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c {
  reset(e) {
    this.current = null, this.history = [], null != e && this.update(e)
  }
  update(e) {
    this.current !== e && (this.current = e, this.history.push({
      state: e,
      startTime: (0, a.zO)()
    }))
  }
  getVoiceConnectionSuccessStats() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : (0, a.zO)(),
      t = this.getStateDurations(e),
      n = e => i().sumBy(t, t => t.state === e ? t.durationMs : 0);
    return {
      state_awaiting_endpoint_ms: n(s.hes.AWAITING_ENDPOINT),
      state_authenticating_ms: n(s.hes.AUTHENTICATING),
      state_connecting_ms: n(s.hes.CONNECTING),
      state_disconnected_ms: n(s.hes.DISCONNECTED),
      state_ice_checking_ms: n(s.hes.ICE_CHECKING),
      state_no_route_ms: n(s.hes.NO_ROUTE),
      state_rtc_connecting_ms: n(s.hes.RTC_CONNECTING),
      state_rtc_disconnected_ms: n(s.hes.RTC_DISCONNECTED)
    }
  }
  getStateDurations(e) {
    if (0 === this.history.length) return [];
    let t = (0, o.Z)(this.history, (e, t) => ({
        state: e.state,
        durationMs: t.startTime - e.startTime
      })),
      n = () => {
        let t = i().last(this.history);
        return {
          state: t.state,
          durationMs: e - t.startTime
        }
      };
    return t.push(n()), t
  }
  constructor(e) {
    l(this, "current", null), l(this, "history", []), null != e && this.update(e)
  }
}