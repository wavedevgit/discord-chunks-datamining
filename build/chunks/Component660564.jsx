/** Chunk was on 21738 **/
/** chunk id: 660564, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk138298 = require("./138298.js"),
  Chunk761640 = require("./761640.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk957283 = require("./957283.js"),
  Chunk822082 = require("./822082.jsx"),
  Chunk825869 = require("./825869.jsx"),
  Chunk652215 = require("./652215.js");

function p(e) {
  let {
    index: t,
    className: n,
    channel: p,
    user: f,
    hasSingleMessageRequest: h
  } = e, {
    channelId: A
  } = (0, o.N)();
  return (0, r.jsx)(c.A, {
    index: t,
    className: n,
    isFocused: A === p.id,
    channel: p,
    user: f,
    onClick: e => {
      e.stopPropagation(), i.A.openPrivateChannelAsSidebar({
        channelId: p.id,
        baseChannelId: l.fe,
        hasSingleMessageRequest: h
      }), a.default.track(d.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
        is_spam: false,
        channel_id: p.id,
        other_user_id: f.id
      }), setTimeout(() => {
        s._.dispatch(d.jej.FOCUS_CHANNEL_TEXT_AREA, {
          channelId: p.id
        })
      }, 0)
    },
    children: e => (0, r.jsx)(u.v, {
      active: e,
      user: f,
      channel: p
    })
  })
}