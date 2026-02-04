/** Chunk was on 71447 **/
/** chunk id: 197043, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk843472 = require("./843472.js"),
  Chunk698718 = require("./698718.jsx"),
  Chunk355622 = require("./355622.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk203982 = require("./203982.js"),
  Chunk545807 = require("./545807.js"),
  Chunk652215 = require("./652215.js"),
  Chunk128727 = require("./128727.js");

function A(e) {
  var t, n;
  let A, y, O, v, b, E, {
      selectedChannelId: _
    } = e,
    S = (0, l.bG)([u.A], () => u.A.getChannel(_), [_]),
    x = (0, f.A)(),
    I = (0, l.bG)([c.A], () => (function(e, t) {
      var n;
      if (null == e) return null;
      let i = e.getGuildId();
      return null == i ? null : null != (n = t.getGuild(i)) ? n : null
    })(S, c.A), [S]);
  return (A = null != (t = null == S ? true : S.id) ? t : null, y = r.useRef(new Set), O = (0, l.bG)([d.A], () => null != A ? d.A.getMessages(A) : null, [A]), v = (0, l.bG)([h.A], () => h.A.can(g.xBc.READ_MESSAGE_HISTORY, S), [S]), b = null != (n = null == O ? true : O.first()) ? n : null, E = null != S && null == b && null != O && !O.loadingMore && !O.ready && !O.hasFetched && v, r.useEffect(() => {
    null == A || !y.current.has(A) && E && (y.current.add(A), a.A.fetchMessages({
      channelId: A,
      limit: 50
    }))
  }, [A, E]), r.useEffect(() => {
    if (null == _) return;
    let e = x.requestAnimationFrame(() => {
      p._.dispatchToLastSubscribed(g.jej.TEXTAREA_FOCUS, {
        channelId: _
      })
    });
    return () => x.cancelAnimationFrame(e)
  }, [_, x]), null != S) ? (0, i.jsx)("div", {
    className: m.Q,
    children: (0, i.jsx)("div", {
      className: m.T,
      children: (0, i.jsx)(o.A, {
        channel: S,
        guild: I,
        chatInputType: s.oU.OVERLAY
      }, S.id)
    })
  }) : null
}