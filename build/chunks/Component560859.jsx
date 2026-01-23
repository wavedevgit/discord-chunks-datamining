/** Chunk was on web.js **/
/** chunk id: 560859, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk532622 = require("./532622.js"),
  Chunk271683 = require("./271683.jsx"),
  Chunk309698 = require("./309698.js"),
  Chunk46054 = require("./46054.js"),
  Chunk345640 = require("./345640.js"),
  Chunk954571 = require("./954571.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk531648 = require("./531648.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk413535 = require("./413535.js");

function v(e) {
  let {
    voiceChannel: t,
    onAction: n,
    onClose: a
  } = e, {
    themeType: v
  } = (0, m.E)(), {
    analyticsLocations: A
  } = (0, c.Ay)(), I = (0, _.b)(t), S = (0, u.Ay)(t, true), T = (0, o.bG)([f.A], () => f.A.getChannelStatus(t)), C = i.useMemo(() => null == T || "" === T ? null : p.A.parseVoiceChannelStatus(T, true, {
    channelId: t.id
  }), [T, t.id]);
  i.useEffect(() => {
    null != C && h.default.track(E.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
      channel_id: t.id,
      guild_id: t.guild_id,
      location_stack: A
    })
  }, [C, t.id, t.guild_id, A]);
  let N = e => {
    e.stopPropagation(), n({
      action: "PRESS_VOICE_CHANNEL_STATUS"
    }), v === y.d.POPOUT && (null == a || a()), (0, d.A)({
      channel: t,
      sourceAnalyticsLocations: A
    })
  };
  return S && I ? (0, r.jsxs)(l.DUT, {
    className: O.vk,
    onClick: N,
    children: [(0, r.jsx)(g.A, {
      text: null != C ? C : b.intl.string(b.t.Mgpxiw),
      variant: "text-xs/normal",
      color: "text-subtle",
      className: O.Qq
    }), (0, r.jsx)(l.R2l, {
      color: "currentColor",
      size: "xxs",
      className: s()(O.rD, null != C ? O.R : true),
      "aria-label": b.intl.string(b.t.bt75uw)
    })]
  }) : null != C ? (0, r.jsx)(g.A, {
    text: C,
    variant: "text-xs/normal",
    color: "text-subtle",
    className: O.Qq
  }) : null
}