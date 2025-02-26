/** Chunk was on 12416 **/
n.d(t, {
  TD: () => c,
  lL: () => u
});
var r = n(818083),
  i = n(594174),
  l = n(74538),
  o = n(474936);
let a = (0, r.B)({
  kind: "user",
  id: "2024-08_hd_streaming_viewer",
  label: "HD Streaming Viewer Upsell",
  defaultConfig: {
    enabled: !1,
    sendNitroMessage: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0,
      sendNitroMessage: !0
    }
  }]
});

function s(e, t) {
  return (0, l.I5)(e, o.p9.TIER_2) || t
}

function c(e) {
  let t = i.default.getCurrentUser();
  return a.getCurrentConfig({
    location: "get_hd_streaming_viewer_config"
  }, {
    autoTrackExposure: !1,
    disable: s(t, e)
  })
}

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0,
    r = arguments.length > 3 ? arguments[3] : void 0;
  return a.useExperiment({
    location: e
  }, {
    autoTrackExposure: t,
    disable: s(n, r)
  })
}