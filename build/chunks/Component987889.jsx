/** Chunk was on 82477 **/
/** chunk id: 987889, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45114 = require("./45114.js"),
  Chunk110255 = require("./110255.jsx"),
  Chunk268623 = require("./268623.jsx"),
  Chunk324701 = require("./324701.jsx"),
  Chunk768943 = require("./768943.js"),
  Chunk64247 = require("./64247.jsx"),
  Chunk804932 = require("./804932.jsx"),
  Chunk370774 = require("./370774.js"),
  Chunk993609 = require("./993609.js"),
  Chunk982183 = require("./982183.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk834401 = require("./834401.js");

function C(e) {
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

function x(e, t) {
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
let E = {
  [Chunk982183.ln.MENTION]: [Chunk982183.r0.SETTINGS],
  [Chunk982183.ln.REPLY]: [Chunk982183.r0.SETTINGS],
  [Chunk982183.ln.REACTION]: [Chunk982183.r0.SETTINGS],
  [Chunk982183.ln.ANNOUNCEMENT]: [Chunk982183.r0.SETTINGS],
  [Chunk982183.ln.MESSAGE]: [Chunk982183.r0.SETTINGS]
};

function S(e) {
  let {
    label: t,
    onClick: n,
    message: l,
    Icon: s,
    interactionType: c
  } = e, [u, d] = (0, i.useState)(false), f = (0, g.fJ)();
  return (0, r.jsx)(a.u, {
    text: t,
    position: "top",
    spacing: 4,
    asContainer: true,
    onTooltipShow: () => d(true),
    onTooltipHide: () => d(false),
    children: (0, r.jsx)(o.P3F, {
      className: j.action,
      onClick: e => {
        (0, g.Qz)({
          message: l,
          interactionType: c,
          viewId: f
        }), e.stopPropagation(), n(l)
      },
      children: (0, r.jsx)(s, {
        size: u ? "sm" : "xs",
        className: j.actionIcon
      })
    })
  })
}

function I(e) {
  let {
    channel: t,
    message: n,
    label: l,
    Icon: s,
    Menu: c,
    interactionType: u,
    actionType: d
  } = e, f = (0, g.fJ)(), [h, p] = (0, i.useState)(false), [b, y] = (0, i.useState)(false), O = (0, i.useRef)(null), {
    openMenu: v,
    closeMenu: E
  } = (0, m.z)();
  return (0, r.jsx)(o.yRy, {
    shouldShow: b,
    animation: o.yRy.Animation.NONE,
    position: "right",
    align: "top",
    autoInvert: false,
    targetElementRef: O,
    onRequestClose: () => {
      y(false), E(n.id, d)
    },
    renderPopout: e => (0, r.jsx)(o.VqE, {
      onClick: e => e.stopPropagation(),
      returnRef: O,
      children: (0, r.jsx)(c, {
        renderPopoutProps: e,
        channel: t,
        message: n
      })
    }),
    children: e => (0, r.jsx)(a.u, {
      text: l,
      position: "top",
      spacing: 4,
      asContainer: true,
      onTooltipShow: () => p(true),
      onTooltipHide: () => p(false),
      children: (0, r.jsx)(o.P3F, {
        innerRef: O,
        className: j.action,
        onClick: e => {
          (0, g.Qz)({
            message: n,
            interactionType: u,
            viewId: f
          }), e.stopPropagation();
          let t = !b;
          y(t), t ? v(n.id, d) : E(n.id, d)
        },
        children: (0, r.jsx)(s, x(C({}, e), {
          message: n,
          "aria-label": l,
          className: j.actionIcon,
          size: h ? "sm" : "xs"
        }))
      })
    })
  })
}
let _ = {
  [Chunk982183.r0.ACK]: {
    type: "standard",
    Icon: Chunk481060.dz2,
    label: Chunk388032.intl.string(Chunk388032.t.e6RscS),
    onClick: e => {
      s.Z.dispatch({
        type: "NOTIFICATIONS_INBOX_ITEM_ACK",
        messageId: e.id,
        channelId: e.channel_id
      }), c.ack(e.channel_id, {
        object: O.qAy.MARK_MESSAGE_AS_READ_BUTTON,
        objectType: O.AnalyticsObjectTypes.ACK_MANUAL
      }, true, true, e.id)
    },
    interactionType: Chunk804932.s_.ACK
  },
  [Chunk982183.r0.BOOKMARK]: {
    type: "menu",
    label: Chunk388032.intl.string(Chunk388032.t["9p3D9p"]),
    Icon: e => null != h.Z.getSavedMessage(e.message.channel_id, e.message.id) ? (0, r.jsx)(o.plf, C({}, e)) : (0, r.jsx)(o.gt9, C({}, e)),
    interactionType: Chunk804932.s_.BOOKMARK,
    Menu: e => {
      let {
        message: t,
        renderPopoutProps: n
      } = e, i = (0, l.e7)([h.Z], () => h.Z.getSavedMessage(t.channel_id, t.id)), a = (0, d.x)({
        message: t,
        savedMessage: i
      });
      return (0, r.jsxs)(o.v2r, x(C({}, n), {
        navId: "message-reminder-create",
        "aria-label": v.intl.string(v.t.mJ3P0N),
        onClose: n.closePopout,
        onSelect: () => null,
        children: [null != i ? (0, r.jsx)(o.sNh, {
          id: "remove-from-for-later",
          label: v.intl.string(v.t.SvXS1Z),
          icon: o.plf,
          action: () => (0, f.x)({
            channelId: t.channel_id,
            messageId: t.id,
            dueAt: i.saveData.dueAt,
            displayToast: true
          })
        }) : (0, r.jsx)(o.sNh, {
          id: "create-bookmark",
          label: v.intl.string(v.t["9p3D9p"]),
          icon: o.gt9,
          action: () => (0, f.z)({
            channelId: t.channel_id,
            messageId: t.id,
            displayToast: true
          })
        }), (0, r.jsx)(o.Clw, {}), a]
      }))
    }
  },
  [Chunk982183.r0.SETTINGS]: {
    type: "menu",
    Icon: Chunk481060.Dkj,
    label: Chunk388032.intl.string(Chunk388032.t.h850Ss),
    interactionType: Chunk804932.s_.SETTINGS,
    Menu: e => {
      let {
        channel: t,
        renderPopoutProps: n
      } = e;
      return t.isThread() ? (0, r.jsx)(p.Z, x(C({}, n), {
        channel: t,
        navId: "thread-context",
        label: v.intl.string(v.t["1NBjqb"])
      })) : (0, r.jsx)(u.Z, x(C({}, n), {
        channel: t,
        navId: "channel-context",
        label: v.intl.string(v.t.Xm41aV)
      }))
    }
  }
};

function P(e) {
  let {
    message: t,
    channel: n,
    isUnread: l
  } = e, a = ((e, t) => {
    let n = (0, b.ux)();
    return (0, i.useMemo)(() => {
      let e = y.ln.MENTION,
        r = new Set;
      return t && r.add(y.r0.ACK), n && r.add(y.r0.BOOKMARK), E[e].forEach(e => r.add(e)), Array.from(r)
    }, [e, t, n])
  })(t, l);
  return (0, r.jsx)(o.Kqy, {
    direction: "horizontal",
    gap: 4,
    align: "center",
    justify: "center",
    className: j.actions,
    children: a.map(e => {
      let i = _[e];
      switch (i.type) {
        case "standard":
          return (0, r.jsx)(S, x(C({}, i), {
            actionType: e,
            message: t
          }), e);
        case "menu":
          return (0, r.jsx)(I, x(C({}, i), {
            actionType: e,
            channel: n,
            message: t
          }), e)
      }
    })
  })
}