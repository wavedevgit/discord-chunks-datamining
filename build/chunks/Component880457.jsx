/** Chunk was on 1636 **/
/** chunk id: 880457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m,
  P: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk404374 = require("./404374.jsx"),
  Chunk966597 = require("./966597.js"),
  Chunk164684 = require("./164684.jsx"),
  Chunk704456 = require("./704456.js"),
  Chunk85109 = require("./85109.js"),
  Chunk226017 = require("./226017.js"),
  Chunk49678 = require("./49678.jsx"),
  Chunk927813 = require("./927813.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  let {
    enabled: t
  } = c.A.useExperiment({
    location: "LongPressMessageActionSheet"
  }), n = (0, i.bG)([u.A], () => u.A.getSavedMessage(e.channel_id, e.id)), l = y({
    message: e,
    savedMessage: n
  });
  return t ? null != n || (0, f.A)() ? (0, r.jsxs)(o.Drp, {
    id: "save-for-later",
    label: b.intl.string(b.t.tpxJto),
    action: () => null == n ? (0, s.Y)({
      channelId: e.channel_id,
      messageId: e.id,
      displayToast: true
    }) : (0, s.x)({
      channelId: e.channel_id,
      messageId: e.id,
      dueAt: n.saveData.dueAt,
      displayToast: true
    }),
    children: [null != n ? (0, r.jsx)(o.Drp, {
      id: "remove-from-for-later",
      label: b.intl.string(b.t.SvXS1Z),
      icon: o.cFy,
      action: () => (0, s.x)({
        channelId: e.channel_id,
        messageId: e.id,
        dueAt: n.saveData.dueAt,
        displayToast: true
      })
    }) : (0, r.jsx)(o.Drp, {
      id: "create-bookmark",
      label: b.intl.string(b.t["9p3D9p"]),
      icon: o.c$8,
      action: () => (0, s.Y)({
        channelId: e.channel_id,
        messageId: e.id,
        displayToast: true
      })
    }), (0, r.jsx)(o.bXX, {}), l]
  }) : (0, r.jsx)(o.Drp, {
    id: "save-for-later-upsell",
    label: b.intl.string(b.t.tpxJto),
    icon: o.tvc,
    iconProps: {
      color: a.k0.PREMIUM_TIER_2
    },
    action: () => (0, s.Y)({
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
  } = e, [i, a] = l.useState(new Date);
  l.useEffect(() => {
    let e = setInterval(() => a(new Date), p.A.Millis.MINUTE);
    return () => {
      clearInterval(e)
    }
  }, []);
  let c = l.useCallback(e => (0, s.Y)({
      channelId: t.channel_id,
      messageId: t.id,
      dueAt: e,
      displayToast: true
    }), [t.channel_id, t.id]),
    u = (0, g.S)({
      createReminder: c
    }),
    {
      dueInText: f
    } = (0, d.Ce)({
      dueAt: null == n ? true : n.saveData.dueAt,
      now: i,
      type: d.kh.LONG
    });
  return (null == n ? true : n.saveData.dueAt) == null ? (0, r.jsx)(o.rXV, {
    label: b.intl.string(b.t.roMu1H),
    children: u
  }) : (0, r.jsxs)(o.rXV, {
    label: f,
    children: [(0, r.jsx)(o.Drp, {
      id: "mark-complete",
      label: b.intl.string(b.t.yjGtdJ),
      icon: o.Uzd,
      action: () => (0, s.Y)({
        channelId: t.channel_id,
        messageId: t.id,
        dueAt: true
      })
    }), (0, r.jsx)(o.Drp, {
      id: "edit-reminder",
      label: b.intl.string(b.t.vrbqs1),
      children: u
    })]
  })
}