/** Chunk was on 90228 **/
/** chunk id: 405311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk576470 = require("./576470.jsx"),
  Chunk99753 = require("./99753.js"),
  Chunk693879 = require("./693879.jsx"),
  Chunk424994 = require("./424994.js");

function d() {
  let e = (0, l.bG)([s.A], () => {
      var e;
      return (null == (e = s.A.getFeed(c.X1.GLOBAL_FEED)) ? true : e.refresh_stale_inbox_after_ms) != null
    }),
    {
      loading: t,
      nextFetchDate: n
    } = (0, l.cf)([s.A], () => {
      var e;
      return null != (e = s.A.getFeedState(c.X1.GLOBAL_FEED)) ? e : {
        loading: false
      }
    }),
    d = (0, l.bG)([s.A], () => s.A.getLastFeedFetchDate(c.X1.GLOBAL_FEED));
  return (0, a.jsxs)("div", {
    children: [t ? (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      children: "(fetching)"
    }) : (0, a.jsxs)(r.Text, {
      variant: "text-md/normal",
      children: ["Next fetch: ", null != n ? (0, a.jsx)(i.A, {
        deadline: n
      }) : e ? "(awaiting push)" : "(unscheduled)"]
    }), (0, a.jsxs)(r.Text, {
      variant: "text-md/normal",
      children: ["Last fetch:", " ", null != d ? (0, a.jsx)(o.z, {
        inline: true,
        entry: {
          start: d.getTime()
        }
      }) : "(never)"]
    })]
  })
}