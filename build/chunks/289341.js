/** Chunk was on 1272 **/
/** chunk id: 289341, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./35282.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668781 = require("./668781.js"),
  Chunk493683 = require("./493683.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk703656 = require("./703656.js"),
  Chunk594174 = require("./594174.js"),
  Chunk122613 = require("./122613.js"),
  Chunk649256 = require("./649256.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  var t, n;
  let {
    match: m
  } = e, g = null != (n = (0, u.DR)()) ? n : [], {
    analyticsLocations: _
  } = (0, o.ZP)([...g, s.Z.ACTIVITY_DETAIL_PAGE]), {
    applicationId: b
  } = m.params, [E] = (0, c.Z)([b]), O = null == E || null == (t = E.bot) ? true : t.id, I = (0, i.e7)([d.default], () => d.default.getCurrentUser());
  return r.useEffect(() => {
    null != O && null != I && (async () => {
      try {
        var e;
        let t = new URL(location.href),
          n = await a.Z.openPrivateChannel({
            recipientIds: O
          }),
          r = null != (e = t.searchParams.get("referrer_id")) ? e : true,
          {
            customId: i
          } = await (0, f.ur)(b, t.searchParams.get("link_id"), t.searchParams.get("custom_id"));
        await (0, p.Z)({
          targetApplicationId: b,
          channelId: n,
          analyticsLocations: _,
          customId: i,
          referrerId: r
        })
      } catch (e) {}
    })()
  }, [_, b, O, I]), r.useEffect(() => {
    let e = setTimeout(() => {
      null == O && l.Z.show({
        title: h.intl.string(h.t.PtobXW),
        body: h.intl.string(h.t["IOy+I5"])
      })
    }, 5e3);
    return () => {
      clearTimeout(e)
    }
  }, [O]), null
}