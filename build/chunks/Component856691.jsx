/** Chunk was on 14953 **/
/** chunk id: 856691, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk881824 = require("./881824.jsx"),
  Chunk430104 = require("./430104.js"),
  Chunk688641 = require("./688641.jsx"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    className: t,
    channel: n,
    highlight: h
  } = e, f = (0, o.bp)();
  return (0, d.sP)() ? null : (0, r.jsx)(u.Z, {
    highlight: null != h && h,
    className: t,
    icon: (0, r.jsx)(l.ewx, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20
    }),
    color: i.Z.unsafe_rawColors.GREEN_360.css,
    title: p.intl.string(p.t.OYbHfv),
    description: p.intl.string(p.t.yXwLMQ),
    onClick: function() {
      if ((0, d.u1)()) return void a.Z.showAgeVerificationGetStartedModal({
        entryPoint: s.cU.START_STAGE_PROMPT
      });
      (0, c.T)(n, f)
    }
  })
}