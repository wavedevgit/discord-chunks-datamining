/** Chunk was on 1113 **/
/** chunk id: 518530, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk738876 = require("./738876.jsx"),
  Chunk698718 = require("./698718.jsx"),
  Chunk812771 = require("./812771.jsx"),
  Chunk355622 = require("./355622.js"),
  Chunk826673 = require("./826673.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk31717 = require("./31717.js"),
  Chunk203982 = require("./203982.js"),
  Chunk43189 = require("./43189.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk266920 = require("./266920.js");
let _ = function(e) {
  let {
    channel: t,
    guild: n,
    maxWidth: _
  } = e;
  l.useEffect(() => {
    (0, h.Dr)(i.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, {
      dismissAction: A.i.AUTO
    })
  }, []);
  let j = l.useCallback(() => {
      a.A.updateChatOpen(t.id, false, "close button"), f._.safeDispatch(b.jej.FOCUS_CHAT_BUTTON)
    }, [t.id]),
    x = (0, r.jsx)(p.Ay.Icon, {
      icon: s.PGe,
      tooltip: y.intl.string(y.t.cpT0Cq),
      onClick: j
    });
  return (0, r.jsxs)(u.A, {
    sidebarType: u.X.CallChatSidebar,
    maxWidth: _,
    floatingLayer: m.Ay,
    children: [(0, r.jsx)(o.A, {
      channel: t,
      draftType: g.C.ChannelMessage
    }), (0, r.jsxs)(p.Ay, {
      toolbar: x,
      "aria-label": y.intl.string(y.t.BIYAqa),
      children: [(0, r.jsx)(p.Ay.ChannelIcon, {
        icon: s.oyn,
        "aria-label": y.intl.string(y.t.Kx5kCN)
      }), (0, r.jsx)(p.Ay.Title, {
        children: t.name
      })]
    }), (0, r.jsx)("div", {
      className: O.T,
      children: (0, r.jsx)(c.A, {
        channel: t,
        guild: n,
        chatInputType: d.oU.SIDEBAR
      }, t.id)
    })]
  })
}