/** Chunk was on 1272 **/
/** chunk id: 125855, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk6025 = require("./6025.js"),
  Chunk433355 = require("./433355.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk545724 = require("./545724.js"),
  Chunk426051 = require("./426051.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let {
    index: t,
    className: n,
    channel: d,
    user: p,
    hasSingleMessageRequest: f
  } = e;
  return <s.Z index={t} className={n} isFocused={false} channel={d} user={p} onClick={e => {
      e.stopPropagation(), i.Z.openPrivateChannelAsSidebar({
        channelId: d.id,
        baseChannelId: l.uZ,
        hasSingleMessageRequest: f
      }), a.default.track(u.rMx.MESSAGE_REQUEST_PREVIEW_VIEWED, {
        is_spam: true,
        channel_id: d.id,
        other_user_id: p.id
      }), setTimeout(() => {
        o.S.dispatch(u.CkL.FOCUS_CHANNEL_TEXT_AREA, {
          channelId: d.id
        })
      }, 0)
    }}>{e => (0, r.jsx)(c.Z, {
      active: e,
      user: p,
      channel: d
    })}</s.Z>
}