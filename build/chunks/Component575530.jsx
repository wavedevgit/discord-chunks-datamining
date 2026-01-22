/** Chunk was on 71447 **/
/** chunk id: 575530, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk528772 = require("./528772.js"),
  Chunk944775 = require("./944775.js"),
  Chunk927421 = require("./927421.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk427603 = require("./427603.js"),
  Chunk302614 = require("./302614.jsx"),
  Chunk980504 = require("./980504.js"),
  Chunk32160 = require("./32160.js");

function f() {
  let [e, t] = (0, r.yK)([l.A], () => [l.A.enabled, l.A.keepOpen]), n = (0, r.bG)([c.A], () => c.A.getVoiceChannelId()), f = (0, r.bG)([s.A], () => s.A.getChannel(n), [n]), m = null == f ? true : f.getGuildId();
  return e && null != f ? (0, i.jsx)(d.A, {
    className: h.k,
    children: (0, i.jsx)(o.A, {
      width: p.ed.width,
      height: p.ed.height,
      guildId: m,
      channel: f,
      keepOpen: t,
      onClose: function() {
        let e = (0, u.A)();
        null != e && (0, a.Lk)(e)
      },
      analyticsSource: "overlay"
    })
  }) : null
}