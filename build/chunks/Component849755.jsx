/** Chunk was on web.js **/
/** chunk id: 849755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk362721 = require("./362721.js"),
  Chunk117358 = require("./117358.jsx"),
  Chunk12498 = require("./12498.js"),
  Chunk454585 = require("./454585.js"),
  Chunk869768 = require("./869768.js"),
  Chunk626135 = require("./626135.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk373826 = require("./373826.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk636235 = require("./636235.js");

function v(e) {
  let {
    voiceChannel: t,
    onAction: n,
    onClose: a
  } = e, {
    themeType: v
  } = (0, m.z)(), {
    analyticsLocations: I
  } = (0, c.ZP)(), S = (0, p.W)(t), T = (0, u.ZP)(t, true), A = (0, s.e7)([f.Z], () => f.Z.getChannelStatus(t)), C = i.useMemo(() => null == A || "" === A ? null : _.Z.parseVoiceChannelStatus(A, true, {
    channelId: t.id
  }), [A, t.id]);
  i.useEffect(() => {
    null != C && h.default.track(E.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
      channel_id: t.id,
      guild_id: t.guild_id,
      location_stack: I
    })
  }, [C, t.id, t.guild_id, I]);
  let N = e => {
    e.stopPropagation(), n({
      action: "PRESS_VOICE_CHANNEL_STATUS"
    }), v === b.l.POPOUT && (null == a || a()), (0, d.Z)({
      channel: t,
      sourceAnalyticsLocations: I
    })
  };
  return T && S ? (0, r.jsxs)(l.P3F, {
    className: O.clickable,
    onClick: N,
    children: [(0, r.jsx)(g.Z, {
      text: null != C ? C : y.intl.string(y.t.Mgpxiw),
      variant: "text-xs/normal",
      color: "text-secondary",
      className: O.text
    }), (0, r.jsx)(l.vdY, {
      color: "currentColor",
      size: "xxs",
      className: o()(O.pencilIcon, null != C ? O.hidden : true),
      "aria-label": y.intl.string(y.t.bt75uw)
    })]
  }) : null != C ? (0, r.jsx)(g.Z, {
    text: C,
    variant: "text-xs/normal",
    color: "text-secondary",
    className: O.text
  }) : null
}