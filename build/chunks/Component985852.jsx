/** Chunk was on 67544 **/
/** chunk id: 985852, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk359013 = require("./359013.js"),
  Chunk120421 = require("./120421.js"),
  Chunk401258 = require("./401258.js"),
  Chunk477839 = require("./477839.js"),
  Chunk224669 = require("./224669.js"),
  Chunk18856 = require("./18856.js");

function p(e) {
  let {
    isPaused: t
  } = e, n = (0, s.useRef)(null), p = (0, o.e7)([c.Z], () => c.Z.getPurchasedUpgradesForItem(u.yN.AT_SOMEONE)), m = (0, o.e7)([c.Z], () => c.Z.hasPurchasedUpgrade(u.yN.AT_SOMEONE, u.uv.FULLSCREEN_AT_SOMEONE)), g = i.Mq[u.yN.AT_SOMEONE].getPoints(p);
  return (0, s.useEffect)(() => {
    var e, r;
    t ? null == (e = n.current) || e.pause() : null == (r = n.current) || r.play()
  }, [t]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Z, {
      ref: n,
      className: m ? d.videoFullscreen : d.video,
      src: f.Z,
      loop: true,
      muted: true,
      playsInline: true,
      autoPlay: true
    }), (0, r.jsx)(l.Z, {
      itemId: u.yN.AT_SOMEONE,
      pointsPerInterval: g,
      interval: 1e3,
      isPaused: t
    })]
  })
}