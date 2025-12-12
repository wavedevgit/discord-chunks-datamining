/** Chunk was on web.js **/
/** chunk id: 418469, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk569545 = require("./569545.js"),
  Chunk687516 = require("./687516.js"),
  Chunk314897 = require("./314897.js"),
  Chunk959457 = require("./959457.js"),
  Chunk388032 = require("./388032.jsx");

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
  let _ = (0, s.Cf)(e),
    m = (0, i.e7)([l.default], () => l.default.getId());
  if (null == e) return null;
  let h = (0, a.V9)(e),
    g = null != (p = c.Z.getVideoStats(h)) ? p : {},
    E = f({
      media_session_id: c.Z.getMediaSessionId(h),
      rtc_connection_id: c.Z.getRtcConnectionId(h),
      stream_region: c.Z.getRegion(h),
      max_viewers: c.Z.getMaxViewers(h)
    }, g),
    b = () => {
      null == d || d(), null != e && (0, o.ZDy)(async () => {
        let {
          default: t
        } = await n.e("18912").then(n.bind(n, 340140));
        return n => (0, r.jsx)(t, f({
          stream: e,
          streamApplication: _,
          isStreamer: m === (null == e ? true : e.ownerId),
          analyticsData: E
        }, n))
      })
    };
  return (0, r.jsx)(o.sNh, {
    id: "report-stream-problem",
    color: "danger",
    label: u.intl.string(u.t.sdnCxV),
    action: b,
    icon: o.Mgn
  })
}