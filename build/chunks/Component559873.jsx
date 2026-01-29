/** Chunk was on 1113 **/
/** chunk id: 559873, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk334738 = require("./334738.js"),
  Chunk461678 = require("./461678.jsx"),
  Chunk880457 = require("./880457.jsx"),
  Chunk164684 = require("./164684.jsx"),
  Chunk85109 = require("./85109.js"),
  Chunk914703 = require("./914703.jsx"),
  Chunk932883 = require("./932883.jsx"),
  Chunk394953 = require("./394953.js"),
  Chunk654795 = require("./654795.js"),
  Chunk849077 = require("./849077.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk471135 = require("./471135.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = {
  [Chunk849077.Th.MENTION]: [Chunk849077.kR.SETTINGS],
  [Chunk849077.Th.REPLY]: [Chunk849077.kR.SETTINGS],
  [Chunk849077.Th.REACTION]: [Chunk849077.kR.SETTINGS],
  [Chunk849077.Th.ANNOUNCEMENT]: [Chunk849077.kR.SETTINGS],
  [Chunk849077.Th.MESSAGE]: [Chunk849077.kR.SETTINGS]
};

function E(e) {
  let {
    label: t,
    onClick: n,
    message: i,
    Icon: o,
    interactionType: c
  } = e, [u, d] = (0, l.useState)(false), h = (0, f.op)();
  return (0, r.jsx)(s.m, {
    text: t,
    position: "top",
    spacing: 4,
    asContainer: true,
    onTooltipShow: () => d(true),
    onTooltipHide: () => d(false),
    children: (0, r.jsx)(a.DUT, {
      className: _.XI,
      onClick: e => {
        (0, f.Ml)({
          message: i,
          interactionType: c,
          viewId: h
        }), e.stopPropagation(), n(i)
      },
      children: (0, r.jsx)(o, {
        size: u ? "sm" : "xs",
        className: _.gE
      })
    })
  })
}

function C(e) {
  let {
    channel: t,
    message: n,
    label: i,
    Icon: o,
    Menu: c,
    interactionType: u,
    actionType: d
  } = e, h = (0, f.op)(), [p, g] = (0, l.useState)(false), [m, A] = (0, l.useState)(false), y = (0, l.useRef)(null), {
    openMenu: O,
    closeMenu: v
  } = (0, b.s)();
  return (0, r.jsx)(a.YNO, {
    shouldShow: m,
    animation: a.YNO.Animation.NONE,
    position: "right",
    align: "top",
    autoInvert: false,
    targetElementRef: y,
    onRequestClose: () => {
      A(false), v(n.id, d)
    },
    renderPopout: e => (0, r.jsx)(a.lGe, {
      onClick: e => e.stopPropagation(),
      returnRef: y,
      children: (0, r.jsx)(c, {
        renderPopoutProps: e,
        channel: t,
        message: n
      })
    }),
    children: e => (0, r.jsx)(s.m, {
      text: i,
      position: "top",
      spacing: 4,
      asContainer: true,
      onTooltipShow: () => g(true),
      onTooltipHide: () => g(false),
      children: (0, r.jsx)(a.DUT, {
        innerRef: y,
        className: _.XI,
        onClick: e => {
          let t;
          (0, f.Ml)({
            message: n,
            interactionType: u,
            viewId: h
          }), e.stopPropagation(), A(t = !m), t ? O(n.id, d) : v(n.id, d)
        },
        children: (0, r.jsx)(o, j(x({}, e), {
          message: n,
          "aria-label": i,
          className: _.gE,
          size: p ? "sm" : "xs"
        }))
      })
    })
  })
}
let S = {
  [Chunk849077.kR.ACK]: {
    type: "standard",
    Icon: Chunk397927.A9s,
    label: Chunk985018.intl.string(Chunk985018.t.e6RscS),
    onClick: e => {
      o.h.dispatch({
        type: "NOTIFICATIONS_INBOX_ITEM_ACK",
        messageId: e.id,
        channelId: e.channel_id
      }), c.ack(e.channel_id, {
        object: y.ZSU.MARK_MESSAGE_AS_READ_BUTTON,
        objectType: y.AnalyticsObjectTypes.ACK_MANUAL
      }, true, true, e.id)
    },
    interactionType: Chunk932883.X8.ACK
  },
  [Chunk849077.kR.BOOKMARK]: {
    type: "menu",
    label: Chunk985018.intl.string(Chunk985018.t["9p3D9p"]),
    Icon: e => null != p.A.getSavedMessage(e.message.channel_id, e.message.id) ? (0, r.jsx)(a.cFy, x({}, e)) : (0, r.jsx)(a.c$8, x({}, e)),
    interactionType: Chunk932883.X8.BOOKMARK,
    Menu: e => {
      let {
        message: t,
        renderPopoutProps: n
      } = e, l = (0, i.bG)([p.A], () => p.A.getSavedMessage(t.channel_id, t.id)), s = (0, d.P)({
        message: t,
        savedMessage: l
      });
      return (0, r.jsxs)(a.W1t, j(x({
        "data-menu-migrated-auto": true
      }, n), {
        navId: "message-reminder-create",
        "aria-label": O.intl.string(O.t.mJ3P0N),
        onClose: n.closePopout,
        onSelect: () => null,
        children: [null != l ? (0, r.jsx)(a.Drp, {
          id: "remove-from-for-later",
          label: O.intl.string(O.t.SvXS1Z),
          icon: a.cFy,
          leadingAccessory: {
            type: "icon",
            icon: a.cFy
          },
          action: () => (0, h.x)({
            channelId: t.channel_id,
            messageId: t.id,
            dueAt: l.saveData.dueAt,
            displayToast: true
          })
        }) : (0, r.jsx)(a.Drp, {
          id: "create-bookmark",
          label: O.intl.string(O.t["9p3D9p"]),
          icon: a.c$8,
          leadingAccessory: {
            type: "icon",
            icon: a.c$8
          },
          action: () => (0, h.Y)({
            channelId: t.channel_id,
            messageId: t.id,
            displayToast: true
          })
        }), (0, r.jsx)(a.bXX, {}), s]
      }))
    }
  },
  [Chunk849077.kR.SETTINGS]: {
    type: "menu",
    Icon: Chunk397927.XFE,
    label: Chunk985018.intl.string(Chunk985018.t.h850Ss),
    interactionType: Chunk932883.X8.SETTINGS,
    Menu: e => {
      let {
        channel: t,
        renderPopoutProps: n
      } = e;
      return t.isThread() ? (0, r.jsx)(g.A, j(x({}, n), {
        channel: t,
        navId: "thread-context",
        label: O.intl.string(O.t["1NBjqb"])
      })) : (0, r.jsx)(u.A, j(x({}, n), {
        channel: t,
        navId: "channel-context",
        label: O.intl.string(O.t.Xm41aV)
      }))
    }
  }
};

function I(e) {
  let t, {
      message: n,
      channel: i,
      isUnread: s
    } = e,
    o = (t = (0, m.i3)(), (0, l.useMemo)(() => {
      let e = A.Th.MENTION,
        n = new Set;
      return s && n.add(A.kR.ACK), t && n.add(A.kR.BOOKMARK), v[e].forEach(e => n.add(e)), Array.from(n)
    }, [n, s, t]));
  return (0, r.jsx)(a.BJc, {
    direction: "horizontal",
    gap: 4,
    align: "center",
    justify: "center",
    className: _.o1,
    children: o.map(e => {
      let t = S[e];
      switch (t.type) {
        case "standard":
          return (0, r.jsx)(E, j(x({}, t), {
            actionType: e,
            message: n
          }), e);
        case "menu":
          return (0, r.jsx)(C, j(x({}, t), {
            actionType: e,
            channel: i,
            message: n
          }), e)
      }
    })
  })
}