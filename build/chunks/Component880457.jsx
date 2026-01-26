/** Chunk was on 1636 **/
/** chunk id: 880457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b,
  P: () => A
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

function b(e) {
  let {
    enabled: t
  } = c.A.useExperiment({
    location: "LongPressMessageActionSheet"
  }), n = (0, l.bG)([u.A], () => u.A.getSavedMessage(e.channel_id, e.id)), i = A({
    message: e,
    savedMessage: n
  });
  return t ? null != n || (0, g.A)() ? (0, r.jsxs)(a.Drp, {
    id: "save-for-later",
    label: y.intl.string(y.t.tpxJto),
    leadingAccessory: {
      type: "icon",
      icon: null != n ? a.cFy : a.c$8
    },
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
    children: [null != n ? (0, r.jsx)(a.Drp, {
      id: "remove-from-for-later",
      label: y.intl.string(y.t.SvXS1Z),
      leadingAccessory: {
        type: "icon",
        icon: a.cFy
      },
      icon: a.cFy,
      action: () => (0, s.x)({
        channelId: e.channel_id,
        messageId: e.id,
        dueAt: n.saveData.dueAt,
        displayToast: true
      })
    }) : (0, r.jsx)(a.Drp, {
      id: "create-bookmark",
      label: y.intl.string(y.t["9p3D9p"]),
      leadingAccessory: {
        type: "icon",
        icon: a.c$8
      },
      icon: a.c$8,
      action: () => (0, s.Y)({
        channelId: e.channel_id,
        messageId: e.id,
        displayToast: true
      })
    }), (0, r.jsx)(a.bXX, {}), i]
  }) : (0, r.jsx)(a.Drp, {
    id: "save-for-later-upsell",
    label: y.intl.string(y.t.tpxJto),
    leadingAccessory: {
      type: "icon",
      icon: a.tvc,
      color: o.k0.PREMIUM_TIER_2
    },
    icon: a.tvc,
    iconProps: {
      color: o.k0.PREMIUM_TIER_2
    },
    action: () => (0, s.Y)({
      channelId: e.channel_id,
      messageId: e.id,
      displayToast: true
    })
  }) : null
}

function A(e) {
  let {
    message: t,
    savedMessage: n
  } = e, [l, o] = i.useState(new Date);
  i.useEffect(() => {
    let e = setInterval(() => o(new Date), f.A.Millis.MINUTE);
    return () => {
      clearInterval(e)
    }
  }, []);
  let c = i.useCallback(e => (0, s.Y)({
      channelId: t.channel_id,
      messageId: t.id,
      dueAt: e,
      displayToast: true
    }), [t.channel_id, t.id]),
    u = (0, p.S)({
      createReminder: c
    }),
    {
      dueInText: g
    } = (0, d.Ce)({
      dueAt: null == n ? true : n.saveData.dueAt,
      now: l,
      type: d.kh.LONG
    });
  return (null == n ? true : n.saveData.dueAt) == null ? (0, r.jsx)(a.rXV, {
    label: y.intl.string(y.t.roMu1H),
    children: u
  }) : (0, r.jsxs)(a.rXV, {
    label: g,
    children: [(0, r.jsx)(a.Drp, {
      id: "mark-complete",
      label: y.intl.string(y.t.yjGtdJ),
      leadingAccessory: {
        type: "icon",
        icon: a.Uzd
      },
      icon: a.Uzd,
      action: () => (0, s.Y)({
        channelId: t.channel_id,
        messageId: t.id,
        dueAt: true
      })
    }), (0, r.jsx)(a.Drp, {
      id: "edit-reminder",
      label: y.intl.string(y.t.vrbqs1),
      children: u
    })]
  })
}