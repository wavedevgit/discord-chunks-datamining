/** Chunk was on 6043 **/
/** chunk id: 789086, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk346486 = require("./346486.jsx"),
  Chunk146282 = require("./146282.js"),
  Chunk371991 = require("./371991.jsx"),
  Chunk206583 = require("./206583.js");

function d() {
  let e = (0, r.e7)([s.Z], () => {
      var e;
      return (null == (e = s.Z.getFeed(c.YN.GLOBAL_FEED)) ? true : e.refresh_stale_inbox_after_ms) != null
    }),
    {
      loading: t,
      nextFetchDate: n
    } = (0, r.cj)([s.Z], () => {
      var e;
      return null != (e = s.Z.getFeedState(c.YN.GLOBAL_FEED)) ? e : {
        loading: false
      }
    }),
    d = (0, r.e7)([s.Z], () => s.Z.getLastFeedFetchDate(c.YN.GLOBAL_FEED));
  return (0, a.jsxs)("div", {
    children: [t ? (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      children: "(fetching)"
    }) : (0, a.jsxs)(i.Text, {
      variant: "text-md/normal",
      children: ["Next fetch: ", null != n ? (0, a.jsx)(l.Z, {
        deadline: n
      }) : e ? "(awaiting push)" : "(unscheduled)"]
    }), (0, a.jsxs)(i.Text, {
      variant: "text-md/normal",
      children: ["Last fetch:", " ", null != d ? (0, a.jsx)(o.x, {
        inline: true,
        entry: {
          start: d.getTime()
        }
      }) : "(never)"]
    })]
  })
}