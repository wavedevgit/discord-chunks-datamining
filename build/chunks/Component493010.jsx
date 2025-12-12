/** Chunk was on 40184 **/
/** chunk id: 493010, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk561472 = require("./561472.jsx"),
  Chunk287746 = require("./287746.jsx"),
  Chunk325708 = require("./325708.jsx"),
  Chunk541716 = require("./541716.js"),
  Chunk266454 = require("./266454.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk703558 = require("./703558.js"),
  Chunk585483 = require("./585483.js"),
  Chunk909820 = require("./909820.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk19055 = require("./19055.js");
let O = function(e) {
  let {
    channel: t,
    guild: n,
    maxWidth: O
  } = e;
  r.useEffect(() => {
    (0, p.Q3)(l.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, {
      dismissAction: C.L.AUTO
    })
  }, []);
  let x = r.useCallback(() => {
      o.Z.updateChatOpen(t.id, false), m.S.safeDispatch(b.CkL.FOCUS_CHAT_BUTTON)
    }, [t.id]),
    E = (0, i.jsx)(f.ZP.Icon, {
      icon: a.Dio,
      tooltip: y.intl.string(y.t.cpT0Cq),
      onClick: x
    });
  return (0, i.jsxs)(u.Z, {
    sidebarType: u.y.CallChatSidebar,
    maxWidth: O,
    floatingLayer: g.ZP,
    children: [(0, i.jsx)(s.Z, {
      channel: t,
      draftType: h.d.ChannelMessage
    }), (0, i.jsxs)(f.ZP, {
      toolbar: E,
      "aria-label": y.intl.string(y.t.BIYAqa),
      children: [(0, i.jsx)(f.ZP.ChannelIcon, {
        icon: a.kBi,
        "aria-label": y.intl.string(y.t.Kx5kCN)
      }), (0, i.jsx)(f.ZP.Title, {
        children: t.name
      })]
    }), (0, i.jsx)("div", {
      className: v.chat,
      children: (0, i.jsx)(c.Z, {
        channel: t,
        guild: n,
        chatInputType: d.Ie.SIDEBAR
      }, t.id)
    })]
  })
}