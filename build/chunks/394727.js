/** Chunk was on 21738 **/
/** chunk id: 394727, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./747238.js"), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk157559 = require("./157559.js"),
  Chunk308528 = require("./308528.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk976860 = require("./976860.js"),
  Chunk287809 = require("./287809.js"),
  Chunk956549 = require("./956549.js"),
  Chunk257269 = require("./257269.js"),
  Chunk985018 = require("./985018.jsx");

function A(e) {
  var t, n;
  let {
    match: A
  } = e, g = null != (t = (0, u.UC)()) ? t : [], {
    analyticsLocations: m
  } = (0, o.Ay)([...g, s.A.ACTIVITY_DETAIL_PAGE]), {
    applicationId: b
  } = A.params, [_] = (0, c.A)([b]), E = null == _ || null == (n = _.bot) ? true : n.id, O = (0, i.bG)([d.default], () => d.default.getCurrentUser());
  return r.useEffect(() => {
    null != E && null != O && (async () => {
      try {
        var e;
        let t = new URL(location.href),
          n = await a.A.openPrivateChannel({
            recipientIds: E
          }),
          r = null != (e = t.searchParams.get("referrer_id")) ? e : true,
          {
            customId: i
          } = await (0, f.d9)(b, t.searchParams.get("link_id"), t.searchParams.get("custom_id"));
        await (0, p.A)({
          targetApplicationId: b,
          channelId: n,
          analyticsLocations: m,
          customId: i,
          referrerId: r
        })
      } catch (e) {}
    })()
  }, [m, b, E, O]), r.useEffect(() => {
    let e = setTimeout(() => {
      null == E && l.A.show({
        title: h.intl.string(h.t.PtobXW),
        body: h.intl.string(h.t["IOy+I5"])
      })
    }, 5e3);
    return () => {
      clearTimeout(e)
    }
  }, [E]), null
}