/** Chunk was on 95477 (d8d7a493e54d58de.js) **/
r.d(t, {
  X$: () => i,
  _f: () => a
}), r(906732);
let n = (0, r(818083).B)({
  kind: "user",
  id: "2023-08_remix_ga",
  label: "Remix General Available",
  defaultConfig: {
    canSeeRemixBadge: !1,
    canRemix: !1,
    isNitroPerk: !1
  },
  treatments: [{
    id: 1,
    label: "Remix for Nitro Subscribers",
    config: {
      canSeeRemixBadge: !0,
      canRemix: !0,
      isNitroPerk: !0
    }
  }, {
    id: 3,
    label: "Upsell Remix for Non-Nitro Users",
    config: {
      canSeeRemixBadge: !0,
      canRemix: !1,
      isNitroPerk: !0
    }
  }, {
    id: 5,
    label: "Remix GA for everyone",
    config: {
      canSeeRemixBadge: !0,
      canRemix: !0,
      isNitroPerk: !1
    }
  }]
});

function i() {
  return n.useExperiment({
    location: "canSeeRemixBadge"
  }, {
    autoTrackExposure: !0
  }).canSeeRemixBadge
}

function a() {
  return !!n.useExperiment({
    location: "isRemixANitroPerkHook"
  }, {
    autoTrackExposure: !0
  }).isNitroPerk
}