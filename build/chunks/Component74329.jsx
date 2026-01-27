/** Chunk was on web.js **/
/** chunk id: 74329, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk652896 = require("./652896.js"),
  Chunk834757 = require("./834757.js"),
  Chunk961350 = require("./961350.js"),
  Chunk162605 = require("./162605.js"),
  Chunk985018 = require("./985018.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t, d) {
  var p;
  let _ = (0, s.AO)(e),
    h = (0, i.bG)([l.default], () => l.default.getId());
  if (null == e) return null;
  let m = (0, o._z)(e),
    g = null != (p = c.A.getVideoStats(m)) ? p : {},
    E = f({
      media_session_id: c.A.getMediaSessionId(m),
      rtc_connection_id: c.A.getRtcConnectionId(m),
      stream_region: c.A.getRegion(m),
      max_viewers: c.A.getMaxViewers(m)
    }, g),
    y = () => {
      null == d || d(), null != e && (0, a.mMO)(async () => {
        let {
          default: t
        } = await n.e("53377").then(n.bind(n, 629304));
        return n => (0, r.jsx)(t, f({
          stream: e,
          streamApplication: _,
          isStreamer: h === (null == e ? true : e.ownerId),
          analyticsData: E
        }, n))
      })
    };
  return (0, r.jsx)(a.Drp, {
    id: "report-stream-problem",
    color: "danger",
    label: u.intl.string(u.t.sdnCxV),
    action: y,
    icon: a.EpV,
    leadingAccessory: {
      type: "icon",
      icon: a.EpV
    }
  })
}