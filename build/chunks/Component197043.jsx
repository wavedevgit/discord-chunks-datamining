/** Chunk was on 71447 **/
/** chunk id: 197043, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk698718 = require("./698718.jsx"),
  Chunk355622 = require("./355622.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk203982 = require("./203982.js"),
  Chunk545807 = require("./545807.js"),
  Chunk652215 = require("./652215.js"),
  Chunk128727 = require("./128727.js");

function f(e) {
  let {
    selectedChannelId: t
  } = e, n = (0, l.bG)([o.A], () => o.A.getChannel(t), [t]), f = (0, d.A)(), g = (0, l.bG)([u.A], () => (function(e, t) {
    var n;
    if (null == e) return null;
    let i = e.getGuildId();
    return null == i ? null : null != (n = t.getGuild(i)) ? n : null
  })(n, u.A), [n]);
  return (r.useEffect(() => {
    if (null == t) return;
    let e = f.requestAnimationFrame(() => {
      c._.dispatchToLastSubscribed(h.jej.TEXTAREA_FOCUS, {
        channelId: t
      })
    });
    return () => f.cancelAnimationFrame(e)
  }, [t, f]), null != n) ? (0, i.jsx)("div", {
    className: p.Q,
    children: (0, i.jsx)("div", {
      className: p.T,
      children: (0, i.jsx)(a.A, {
        channel: n,
        guild: g,
        chatInputType: s.oU.OVERLAY
      }, n.id)
    })
  }) : null
}