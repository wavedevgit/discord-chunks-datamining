/** Chunk was on 37220 **/
/** chunk id: 268623, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O,
  x: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk2818 = require("./2818.js"),
  Chunk324701 = require("./324701.jsx"),
  Chunk575016 = require("./575016.js"),
  Chunk768943 = require("./768943.js"),
  Chunk175006 = require("./175006.js"),
  Chunk898150 = require("./898150.jsx"),
  Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx");

function O(e) {
  let {
    enabled: t
  } = s.Z.useExperiment({
    location: "LongPressMessageActionSheet"
  }), n = (0, l.e7)([d.Z], () => d.Z.getSavedMessage(e.channel_id, e.id)), i = y({
    message: e,
    savedMessage: n
  });
  return t ? null != n || (0, f.Z)() ? (0, r.jsxs)(a.sNh, {
    id: "save-for-later",
    label: p.intl.string(p.t.tpxJtr),
    action: () => null == n ? (0, c.z)({
      channelId: e.channel_id,
      messageId: e.id,
      displayToast: true
    }) : (0, c.x)({
      channelId: e.channel_id,
      messageId: e.id,
      dueAt: n.saveData.dueAt,
      displayToast: true
    }),
    children: [null != n ? (0, r.jsx)(a.sNh, {
      id: "remove-from-for-later",
      label: p.intl.string(p.t.SvXS1d),
      icon: a.plf,
      action: () => (0, c.x)({
        channelId: e.channel_id,
        messageId: e.id,
        dueAt: n.saveData.dueAt,
        displayToast: true
      })
    }) : (0, r.jsx)(a.sNh, {
      id: "create-bookmark",
      label: p.intl.string(p.t["9p3D9v"]),
      icon: a.gt9,
      action: () => (0, c.z)({
        channelId: e.channel_id,
        messageId: e.id,
        displayToast: true
      })
    }), (0, r.jsx)(a.Clw, {}), i]
  }) : (0, r.jsx)(a.sNh, {
    id: "save-for-later-upsell",
    label: p.intl.string(p.t.tpxJtr),
    icon: a.SrA,
    iconProps: {
      color: o.JX.PREMIUM_TIER_2
    },
    action: () => (0, c.z)({
      channelId: e.channel_id,
      messageId: e.id,
      displayToast: true
    })
  }) : null
}

function y(e) {
  let {
    message: t,
    savedMessage: n
  } = e, [l, o] = i.useState(new Date);
  i.useEffect(() => {
    let e = setInterval(() => o(new Date), b.Z.Millis.MINUTE);
    return () => {
      clearInterval(e)
    }
  }, []);
  let s = i.useCallback(e => (0, c.z)({
      channelId: t.channel_id,
      messageId: t.id,
      dueAt: e,
      displayToast: true
    }), [t.channel_id, t.id]),
    d = (0, g.r)({
      createReminder: s
    }),
    {
      dueInText: f
    } = (0, u.AT)({
      dueAt: null == n ? true : n.saveData.dueAt,
      now: l,
      type: u.hQ.LONG
    });
  return (null == n ? true : n.saveData.dueAt) == null ? (0, r.jsx)(a.kSQ, {
    label: p.intl.string(p.t.roMu1N),
    children: d
  }) : (0, r.jsxs)(a.kSQ, {
    label: f,
    children: [(0, r.jsx)(a.sNh, {
      id: "mark-complete",
      label: p.intl.string(p.t.yjGtdH),
      icon: a.kmB,
      action: () => (0, c.z)({
        channelId: t.channel_id,
        messageId: t.id,
        dueAt: true
      })
    }), (0, r.jsx)(a.sNh, {
      id: "edit-reminder",
      label: p.intl.string(p.t.vrbqs7),
      children: d
    })]
  })
}