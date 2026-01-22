/** Chunk was on web.js **/
/** chunk id: 531184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => c
}), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk499979 = require("./499979.js"),
  Chunk156482 = require("./156482.js"),
  Chunk652215 = require("./652215.js");

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
      startTime: (0, a.tB)()
    }))
  }
  getVoiceConnectionSuccessStats() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : (0, a.tB)(),
      t = this.getStateDurations(e),
      n = e => i().sumBy(t, t => t.state === e ? t.durationMs : 0);
    return {
      state_awaiting_endpoint_ms: n(o.S7L.AWAITING_ENDPOINT),
      state_authenticating_ms: n(o.S7L.AUTHENTICATING),
      state_connecting_ms: n(o.S7L.CONNECTING),
      state_disconnected_ms: n(o.S7L.DISCONNECTED),
      state_ice_checking_ms: n(o.S7L.ICE_CHECKING),
      state_no_route_ms: n(o.S7L.NO_ROUTE),
      state_rtc_connecting_ms: n(o.S7L.RTC_CONNECTING),
      state_rtc_disconnected_ms: n(o.S7L.RTC_DISCONNECTED)
    }
  }
  getStateDurations(e) {
    if (0 === this.history.length) return [];
    let t = (0, s.A)(this.history, (e, t) => ({
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