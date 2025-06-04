/** Chunk was on 40694 **/
n.d(r, {
  X$: () => l,
  _f: () => o
}), n(906732);
let t = (0, n(818083).B)({
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

function l() {
  return t.useExperiment({
    location: "canSeeRemixBadge"
  }, {
    autoTrackExposure: !0
  }).canSeeRemixBadge
}

function o() {
  return !!t.useExperiment({
    location: "isRemixANitroPerkHook"
  }, {
    autoTrackExposure: !0
  }).isNitroPerk
}