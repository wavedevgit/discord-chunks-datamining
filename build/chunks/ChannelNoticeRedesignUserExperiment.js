/** Chunk was on 1272 **/
/** chunk id: 986332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2022-12_channel_notice_redesign",
  label: "Channel Notice Redesign",
  defaultConfig: {
    showRedesignedChannelNotice: false,
    showRedesignedLiveChannelNotice: false
  },
  treatments: [{
    id: 1,
    label: "Show Redesigned Channel Notices",
    config: {
      showRedesignedChannelNotice: true,
      showRedesignedLiveChannelNotice: false
    }
  }, {
    id: 2,
    label: "Show Redesigned Stage/Event Notices",
    config: {
      showRedesignedChannelNotice: false,
      showRedesignedLiveChannelNotice: true
    }
  }, {
    id: 3,
    label: "Show Redesigned Channel Notices & Stage/Event Notices",
    config: {
      showRedesignedChannelNotice: true,
      showRedesignedLiveChannelNotice: true
    }
  }]
});

function i() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    {
      showRedesignedChannelNotice: t,
      showRedesignedLiveChannelNotice: n
    } = r.useExperiment({
      location: "c0d6eb_1"
    }, {
      autoTrackExposure: e
    });
  return {
    showRedesignedChannelNotice: t,
    showRedesignedLiveChannelNotice: n
  }
}