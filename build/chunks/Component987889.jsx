/** Chunk was on 10023 **/
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
  Chunk66449 = require("./66449.js");

function j(e) {
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

function C(e, t) {
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
let x = {
  [Chunk982183.ln.MENTION]: [Chunk982183.r0.SETTINGS],
  [Chunk982183.ln.REPLY]: [Chunk982183.r0.SETTINGS],
  [Chunk982183.ln.REACTION]: [Chunk982183.r0.SETTINGS],
  [Chunk982183.ln.ANNOUNCEMENT]: [Chunk982183.r0.SETTINGS],
  [Chunk982183.ln.MESSAGE]: [Chunk982183.r0.SETTINGS]
};

function E(e) {
  let {
    label: t,
    onClick: n,
    message: l,
    Icon: s,
    interactionType: c
  } = e, [u, d] = (0, i.useState)(false), p = (0, g.fJ)();
  return (0, r.jsx)(o.u, {
    text: t,
    position: "top",
    spacing: 4,
    asContainer: true,
    onTooltipShow: () => d(true),
    onTooltipHide: () => d(false),
    children: (0, r.jsx)(a.P3F, {
      className: v.action,
      onClick: e => {
        (0, g.Qz)({
          message: l,
          interactionType: c,
          viewId: p
        }), e.stopPropagation(), n(l)
      },
      children: (0, r.jsx)(s, {
        size: u ? "sm" : "xs",
        className: v.actionIcon
      })
    })
  })
}

function S(e) {
  let {
    channel: t,
    message: n,
    label: l,
    Icon: s,
    Menu: c,
    interactionType: u,
    actionType: d
  } = e, p = (0, g.fJ)(), [h, f] = (0, i.useState)(false), [m, _] = (0, i.useState)(false), y = (0, i.useRef)(null), {
    openMenu: O,
    closeMenu: x
  } = (0, b.z)();
  return (0, r.jsx)(a.yRy, {
    shouldShow: m,
    animation: a.yRy.Animation.NONE,
    position: "right",
    align: "top",
    autoInvert: false,
    targetElementRef: y,
    onRequestClose: () => {
      _(false), x(n.id, d)
    },
    renderPopout: e => (0, r.jsx)(a.VqE, {
      onClick: e => e.stopPropagation(),
      returnRef: y,
      children: (0, r.jsx)(c, {
        renderPopoutProps: e,
        channel: t,
        message: n
      })
    }),
    children: e => (0, r.jsx)(o.u, {
      text: l,
      position: "top",
      spacing: 4,
      asContainer: true,
      onTooltipShow: () => f(true),
      onTooltipHide: () => f(false),
      children: (0, r.jsx)(a.P3F, {
        innerRef: y,
        className: v.action,
        onClick: e => {
          (0, g.Qz)({
            message: n,
            interactionType: u,
            viewId: p
          }), e.stopPropagation();
          let t = !m;
          _(t), t ? O(n.id, d) : x(n.id, d)
        },
        children: (0, r.jsx)(s, C(j({}, e), {
          message: n,
          "aria-label": l,
          className: v.actionIcon,
          size: h ? "sm" : "xs"
        }))
      })
    })
  })
}
let I = {
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
        object: y.qAy.MARK_MESSAGE_AS_READ_BUTTON,
        objectType: y.AnalyticsObjectTypes.ACK_MANUAL
      }, true, true, e.id)
    },
    interactionType: Chunk804932.s_.ACK
  },
  [Chunk982183.r0.BOOKMARK]: {
    type: "menu",
    label: Chunk388032.intl.string(Chunk388032.t["9p3D9p"]),
    Icon: e => null != h.Z.getSavedMessage(e.message.channel_id, e.message.id) ? (0, r.jsx)(a.plf, j({}, e)) : (0, r.jsx)(a.gt9, j({}, e)),
    interactionType: Chunk804932.s_.BOOKMARK,
    Menu: e => {
      let {
        message: t,
        renderPopoutProps: n
      } = e, i = (0, l.e7)([h.Z], () => h.Z.getSavedMessage(t.channel_id, t.id)), o = (0, d.x)({
        message: t,
        savedMessage: i
      });
      return (0, r.jsxs)(a.v2r, C(j({}, n), {
        navId: "message-reminder-create",
        "aria-label": O.intl.string(O.t.mJ3P0N),
        onClose: n.closePopout,
        onSelect: () => null,
        children: [null != i ? (0, r.jsx)(a.sNh, {
          id: "remove-from-for-later",
          label: O.intl.string(O.t.SvXS1Z),
          icon: a.plf,
          action: () => (0, p.x)({
            channelId: t.channel_id,
            messageId: t.id,
            dueAt: i.saveData.dueAt,
            displayToast: true
          })
        }) : (0, r.jsx)(a.sNh, {
          id: "create-bookmark",
          label: O.intl.string(O.t["9p3D9p"]),
          icon: a.gt9,
          action: () => (0, p.z)({
            channelId: t.channel_id,
            messageId: t.id,
            displayToast: true
          })
        }), (0, r.jsx)(a.Clw, {}), o]
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
      return t.isThread() ? (0, r.jsx)(f.Z, C(j({}, n), {
        channel: t,
        navId: "thread-context",
        label: O.intl.string(O.t["1NBjqb"])
      })) : (0, r.jsx)(u.Z, C(j({}, n), {
        channel: t,
        navId: "channel-context",
        label: O.intl.string(O.t.Xm41aV)
      }))
    }
  }
};

function P(e) {
  let {
    message: t,
    channel: n,
    isUnread: l
  } = e, o = ((e, t) => {
    let n = (0, m.ux)();
    return (0, i.useMemo)(() => {
      let e = _.ln.MENTION,
        r = new Set;
      return t && r.add(_.r0.ACK), n && r.add(_.r0.BOOKMARK), x[e].forEach(e => r.add(e)), Array.from(r)
    }, [e, t, n])
  })(t, l);
  return (0, r.jsx)(a.Kqy, {
    direction: "horizontal",
    gap: 4,
    align: "center",
    justify: "center",
    className: v.actions,
    children: o.map(e => {
      let i = I[e];
      switch (i.type) {
        case "standard":
          return (0, r.jsx)(E, C(j({}, i), {
            actionType: e,
            message: t
          }), e);
        case "menu":
          return (0, r.jsx)(S, C(j({}, i), {
            actionType: e,
            channel: n,
            message: t
          }), e)
      }
    })
  })
}