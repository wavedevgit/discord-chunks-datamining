/** Chunk was on 1272 **/
/** chunk id: 96479, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk6025 = require("./6025.js"),
  Chunk433355 = require("./433355.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk488634 = require("./488634.js"),
  Chunk545724 = require("./545724.jsx"),
  Chunk749405 = require("./749405.jsx"),
  Chunk981631 = require("./981631.js");

function p(e) {
  let {
    index: t,
    className: n,
    channel: p,
    user: f,
    hasSingleMessageRequest: h
  } = e, {
    channelId: g
  } = (0, o._)();
  return (0, r.jsx)(c.Z, {
    index: t,
    className: n,
    isFocused: g === p.id,
    channel: p,
    user: f,
    onClick: e => {
      e.stopPropagation(), i.Z.openPrivateChannelAsSidebar({
        channelId: p.id,
        baseChannelId: l.uZ,
        hasSingleMessageRequest: h
      }), a.default.track(d.rMx.MESSAGE_REQUEST_PREVIEW_VIEWED, {
        is_spam: false,
        channel_id: p.id,
        other_user_id: f.id
      }), setTimeout(() => {
        s.S.dispatch(d.CkL.FOCUS_CHANNEL_TEXT_AREA, {
          channelId: p.id
        })
      }, 0)
    },
    children: e => (0, r.jsx)(u.C, {
      active: e,
      user: f,
      channel: p
    })
  })
}