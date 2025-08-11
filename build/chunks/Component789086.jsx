/** Chunk was on 93886 **/
/** chunk id: 789086, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk346486 = require("./346486.jsx"),
  Chunk146282 = require("./146282.js"),
  Chunk371991 = require("./371991.jsx"),
  Chunk206583 = require("./206583.js");

function d() {
  let e = (0, Chunk442837.e7)([Chunk146282.Z], () => {
      var e;
      return (null == (e = Chunk146282.Z.getFeed(Chunk206583.YN.GLOBAL_FEED)) ? true : module.refresh_stale_inbox_after_ms) != null
    }),
    {
      loading: t,
      nextFetchDate: a
    } = (0, Chunk442837.cj)([Chunk146282.Z], () => {
      var e;
      return null != (e = Chunk146282.Z.getFeedState(Chunk206583.YN.GLOBAL_FEED)) ? module : {
        loading: false
      }
    }),
    d = (0, Chunk442837.e7)([Chunk146282.Z], () => Chunk146282.Z.getLastFeedFetchDate(Chunk206583.YN.GLOBAL_FEED));
  return (0, Chunk255367.jsxs)("div", {
    children: [exports ? (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: "(fetching)"
    }) : (0, Chunk255367.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: ["Next fetch: ", null != require ? (0, Chunk255367.jsx)(Chunk346486.Z, {
        deadline: require
      }) : module ? "(awaiting push)" : "(unscheduled)"]
    }), (0, Chunk255367.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: ["Last fetch:", " ", null != d ? (0, Chunk255367.jsx)(Chunk371991.x3, {
        inline: true,
        entry: {
          start: d.getTime()
        }
      }) : "(never)"]
    })]
  })
}