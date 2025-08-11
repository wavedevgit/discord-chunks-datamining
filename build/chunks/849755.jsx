/** Chunk was on web.js **/
/** chunk id: 849755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.js"),
  Chunk362721 = require("./362721.js"),
  Chunk117358 = require("./117358.jsx"),
  Chunk12498 = require("./12498.js"),
  Chunk454585 = require("./454585.js"),
  Chunk869768 = require("./869768.js"),
  Chunk626135 = require("./626135.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk373826 = require("./373826.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk588015 = require("./588015.js");

function v(e) {
  let {
    voiceChannel: t,
    onAction: n,
    onClose: o
  } = e, {
    themeType: v
  } = (0, m.z)(), {
    analyticsLocations: I
  } = (0, c.ZP)(), T = (0, p.W)(t), S = (0, u.ZP)(t, true), A = (0, s.e7)([f.Z], () => f.Z.getChannelStatus(t)), N = i.useMemo(() => null == A || "" === A ? null : _.Z.parseVoiceChannelStatus(A, true, {
    channelId: t.id
  }), [A, t.id]);
  i.useEffect(() => {
    null != N && h.default.track(b.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
      channel_id: t.id,
      guild_id: t.guild_id,
      location_stack: I
    })
  }, [N, t.id, t.guild_id, I]);
  let C = e => {
    e.stopPropagation(), n({
      action: "PRESS_VOICE_CHANNEL_STATUS"
    }), v === E.lY.POPOUT && (null == o || o()), (0, d.Z)({
      channel: t,
      sourceAnalyticsLocations: I
    })
  };
  return S && T ? <l.P3F className={O.clickable} onClick={C}>{<g.Z text={null != N ? N : y.intl.string(y.t.Mgpxi4)} variant={"text-xs/normal"} color={"text-secondary"} className={O.text} />}{<l.vdY color={"currentColor"} size={"xxs"} className={a()(O.pencilIcon, null != N ? O.hidden : true)} aria-label={y.intl.string(y.t.bt75u7)} />}</l.P3F> : null != N ? <g.Z text={N} variant={"text-xs/normal"} color={"text-secondary"} className={O.text} /> : null
}