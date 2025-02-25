/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(481060),
  a = n(569545),
  s = n(687516),
  l = n(314897),
  c = n(959457),
  u = n(682901),
  d = n(388032);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t, f) {
  var p;
  let {
    enabled: h
  } = (0, u.Z)({
    location: "ReportProblemItem"
  }), g = (0, s.Cf)(e), m = (0, i.e7)([l.default], () => l.default.getId()), E = null != e ? (0, a.V9)(e) : c.Z.getActiveStreamKey(), v = null !== (p = c.Z.getVideoStats(E)) && void 0 !== p ? p : {}, b = _({
    media_session_id: c.Z.getMediaSessionId(E),
    rtc_connection_id: c.Z.getRtcConnectionId(E),
    stream_region: c.Z.getRegion(E),
    max_viewers: c.Z.getMaxViewers(E)
  }, v), y = () => {
    null == f || f(), null != e && (0, o.ZDy)(async () => {
      let {
        default: t
      } = await n.e("18912").then(n.bind(n, 340140));
      return n => (0, r.jsx)(t, _({
        stream: e,
        streamApplication: g,
        isStreamer: m === (null == e ? void 0 : e.ownerId),
        analyticsData: b
      }, n))
    })
  };
  return null == e ? null : h ? (0, r.jsx)(o.sNh, {
    id: "report-stream-problem",
    color: "danger",
    label: d.NW.string(d.t.sdnCxc),
    action: y,
    icon: o.P4T
  }) : (0, r.jsx)(o.sNh, {
    id: "report-stream-problem",
    label: d.NW.string(d.t.sdnCxc),
    action: y
  })
}