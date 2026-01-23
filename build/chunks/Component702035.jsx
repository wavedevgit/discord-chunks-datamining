/** Chunk was on 33957 **/
/** chunk id: 702035, original params: e,n,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk686956 = require("./686956.js"),
  Chunk456412 = require("./456412.jsx"),
  Chunk377045 = require("./377045.jsx"),
  Chunk49463 = require("./49463.js"),
  Chunk473529 = require("./473529.js"),
  Chunk117733 = require("./117733.jsx"),
  Chunk71393 = require("./71393.js");
let h = (0, Chunk456412.A)(Chunk117733.A),
  f = function(e) {
    let {
      guildId: n
    } = e, l = (0, a.bG)([m.A], () => m.A.getGuild(n), [n]), s = (0, a.bG)([o.A], () => o.A.hasLoadedExperiments), u = (0, d.d)(n);
    return (r.useEffect(() => {
      if (s && !u) return void i.A.escapeToDefaultChannel(n)
    }, [n, s, u]), null != l && u) ? (0, t.jsx)(h, {
      guild: l
    }) : (0, t.jsx)(c.A, {
      channelId: true
    })
  }