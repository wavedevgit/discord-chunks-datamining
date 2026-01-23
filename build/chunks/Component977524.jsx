/** Chunk was on 21738 **/
/** chunk id: 977524, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk138298 = require("./138298.js"),
  Chunk761640 = require("./761640.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk822082 = require("./822082.jsx"),
  Chunk384184 = require("./384184.jsx"),
  Chunk652215 = require("./652215.js");

function d(e) {
  let {
    index: t,
    className: n,
    channel: d,
    user: p,
    hasSingleMessageRequest: h
  } = e;
  return (0, r.jsx)(o.A, {
    index: t,
    className: n,
    isFocused: false,
    channel: d,
    user: p,
    onClick: e => {
      e.stopPropagation(), i.A.openPrivateChannelAsSidebar({
        channelId: d.id,
        baseChannelId: l.fe,
        hasSingleMessageRequest: h
      }), a.default.track(u.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
        is_spam: true,
        channel_id: d.id,
        other_user_id: p.id
      }), setTimeout(() => {
        s._.dispatch(u.jej.FOCUS_CHANNEL_TEXT_AREA, {
          channelId: d.id
        })
      }, 0)
    },
    children: e => (0, r.jsx)(c.A, {
      active: e,
      user: p,
      channel: d
    })
  })
}