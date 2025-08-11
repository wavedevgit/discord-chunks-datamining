/** Chunk was on web.js **/
/** chunk id: 268623, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m,
  x: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.js"),
  Chunk2818 = require("./2818.js"),
  Chunk324701 = require("./324701.js"),
  Chunk575016 = require("./575016.js"),
  Chunk768943 = require("./768943.js"),
  Chunk175006 = require("./175006.js"),
  Chunk898150 = require("./898150.js"),
  Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.js");

function m(e) {
  let {
    enabled: t
  } = l.Z.useExperiment({
    location: "LongPressMessageActionSheet"
  }), n = (0, o.e7)([d.Z], () => d.Z.getSavedMessage(e.channel_id, e.id)), i = g({
    message: e,
    savedMessage: n
  });
  return t ? null != n || (0, f.Z)() ? <a.sNh id={"save-for-later"} label={h.intl.string(h.t.tpxJtr)} action={() => null == n ? (0, c.z)({
      channelId: e.channel_id,
      messageId: e.id,
      displayToast: true
    }) : (0, c.x)({
      channelId: e.channel_id,
      messageId: e.id,
      dueAt: n.saveData.dueAt,
      displayToast: true
    })}>{null != n ? <a.sNh id={"remove-from-for-later"} label={h.intl.string(h.t.SvXS1d)} icon={a.plf} action={() => (0, c.x)({
        channelId: e.channel_id,
        messageId: e.id,
        dueAt: n.saveData.dueAt,
        displayToast: true
      })} /> : <a.sNh id={"create-bookmark"} label={h.intl.string(h.t["9p3D9v"])} icon={a.gt9} action={() => (0, c.z)({
        channelId: e.channel_id,
        messageId: e.id,
        displayToast: true
      })} />}{<a.Clw />}{i}</a.sNh> : <a.sNh id={"save-for-later-upsell"} label={h.intl.string(h.t.tpxJtr)} icon={a.SrA} iconProps={{
      color: s.JX.PREMIUM_TIER_2
    }} action={() => (0, c.z)({
      channelId: e.channel_id,
      messageId: e.id,
      displayToast: true
    })} /> : null
}

function g(e) {
  let {
    message: t,
    savedMessage: n
  } = e, [o, s] = i.useState(new Date);
  i.useEffect(() => {
    let e = setInterval(() => s(new Date), p.Z.Millis.MINUTE);
    return () => {
      clearInterval(e)
    }
  }, []);
  let l = i.useCallback(e => (0, c.z)({
      channelId: t.channel_id,
      messageId: t.id,
      dueAt: e,
      displayToast: true
    }), [t.channel_id, t.id]),
    d = (0, _.r)({
      createReminder: l
    }),
    {
      dueInText: f
    } = (0, u.AT)({
      dueAt: null == n ? true : n.saveData.dueAt,
      now: o,
      type: u.hQ.LONG
    });
  return (null == n ? true : n.saveData.dueAt) == null ? <a.kSQ label={h.intl.string(h.t.roMu1N)}>{d}</a.kSQ> : <a.kSQ label={f}>{<a.sNh id={"mark-complete"} label={h.intl.string(h.t.yjGtdH)} icon={a.kmB} action={() => (0, c.z)({
        channelId: t.channel_id,
        messageId: t.id,
        dueAt: true
      })} />}{<a.sNh id={"edit-reminder"} label={h.intl.string(h.t.vrbqs7)}>{d}</a.sNh>}</a.kSQ>
}