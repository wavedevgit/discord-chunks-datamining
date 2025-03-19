/** Chunk was on 31649 **/
n.d(t, {
  A: () => o
});
var r = n(818083),
  i = n(355820);
let a = (0, r.B)({
  kind: "user",
  id: "2025-02_custom_status_editing_without_status_selector",
  label: "Custom Status Editing Without Status Selector",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable custom status editing without status selector",
    config: {
      enabled: !0
    }
  }]
});

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = !0
  } = e, r = (0, i.P)({
    location: t,
    autoTrackExposure: n
  }), {
    enabled: o
  } = a.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return o
}