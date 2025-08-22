/** Chunk was on 91488 **/
/** chunk id: 987889, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk361584 = require("./361584.js");

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

function v(e, t) {
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

function C(e) {
  let {
    label: t,
    onClick: n,
    message: l,
    Icon: a,
    interactionType: s
  } = e, [c, u] = (0, i.useState)(false), d = (0, f.fJ)();
  return (0, r.jsx)(o.ua7, {
    text: t,
    position: "top",
    spacing: 4,
    onTooltipShow: () => u(true),
    onTooltipHide: () => u(false),
    children: e => (0, r.jsx)(o.P3F, v(j({}, e), {
      className: _.action,
      onClick: e => {
        (0, f.Qz)({
          message: l,
          interactionType: s,
          viewId: d
        }), e.stopPropagation(), n(l)
      },
      children: (0, r.jsx)(a, {
        size: c ? "sm" : "xs",
        className: _.actionIcon
      })
    }))
  })
}

function E(e) {
  let {
    channel: t,
    message: n,
    label: l,
    Icon: a,
    Menu: s,
    interactionType: c,
    actionType: u
  } = e, d = (0, f.fJ)(), [p, h] = (0, i.useState)(false), [g, b] = (0, i.useState)(false), O = (0, i.useRef)(null), {
    openMenu: y,
    closeMenu: x
  } = (0, m.z)();
  return (0, r.jsx)(o.yRy, {
    shouldShow: g,
    animation: o.yRy.Animation.NONE,
    position: "right",
    align: "top",
    autoInvert: false,
    targetElementRef: O,
    onRequestClose: () => {
      b(false), x(n.id, u)
    },
    renderPopout: e => (0, r.jsx)(o.VqE, {
      onClick: e => e.stopPropagation(),
      returnRef: O,
      children: (0, r.jsx)(s, {
        renderPopoutProps: e,
        channel: t,
        message: n
      })
    }),
    children: e => (0, r.jsx)(o.ua7, {
      text: l,
      position: "top",
      spacing: 4,
      onTooltipShow: () => h(true),
      onTooltipHide: () => h(false),
      children: t => (0, r.jsx)(o.P3F, v(j({}, t), {
        innerRef: O,
        className: _.action,
        onClick: e => {
          (0, f.Qz)({
            message: n,
            interactionType: c,
            viewId: d
          }), e.stopPropagation();
          let t = !g;
          b(t), t ? y(n.id, u) : x(n.id, u)
        },
        children: (0, r.jsx)(a, v(j({}, e), {
          message: n,
          "aria-label": l,
          className: _.actionIcon,
          size: p ? "sm" : "xs"
        }))
      }))
    })
  })
}
let S = {
  [Chunk982183.r0.ACK]: {
    type: "standard",
    Icon: Chunk481060.dz2,
    label: Chunk388032.intl.string(Chunk388032.t.e6RscX),
    onClick: e => {
      a.Z.dispatch({
        type: "NOTIFICATIONS_INBOX_ITEM_ACK",
        messageId: e.id,
        channelId: e.channel_id
      }), s.In(e.channel_id, {
        object: O.qAy.MARK_MESSAGE_AS_READ_BUTTON,
        objectType: O.Qqv.ACK_MANUAL
      }, true, true, e.id)
    },
    interactionType: Chunk804932.s_.ACK
  },
  [Chunk982183.r0.BOOKMARK]: {
    type: "menu",
    label: Chunk388032.intl.string(Chunk388032.t["9p3D9v"]),
    Icon: e => null != p.Z.getSavedMessage(e.message.channel_id, e.message.id) ? (0, r.jsx)(o.plf, j({}, e)) : (0, r.jsx)(o.gt9, j({}, e)),
    interactionType: Chunk804932.s_.BOOKMARK,
    Menu: e => {
      let {
        message: t,
        renderPopoutProps: n
      } = e, i = (0, l.e7)([p.Z], () => p.Z.getSavedMessage(t.channel_id, t.id)), a = (0, u.x)({
        message: t,
        savedMessage: i
      });
      return (0, r.jsxs)(o.v2r, v(j({}, n), {
        navId: "message-reminder-create",
        "aria-label": y.intl.string(y.t.mJ3P0N),
        onClose: n.closePopout,
        onSelect: () => null,
        children: [null != i ? (0, r.jsx)(o.sNh, {
          id: "remove-from-for-later",
          label: y.intl.string(y.t.SvXS1d),
          icon: o.plf,
          action: () => (0, d.x)({
            channelId: t.channel_id,
            messageId: t.id,
            dueAt: i.saveData.dueAt,
            displayToast: true
          })
        }) : (0, r.jsx)(o.sNh, {
          id: "create-bookmark",
          label: y.intl.string(y.t["9p3D9v"]),
          icon: o.gt9,
          action: () => (0, d.z)({
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
    label: Chunk388032.intl.string(Chunk388032.t.h850Sk),
    interactionType: Chunk804932.s_.SETTINGS,
    Menu: e => {
      let {
        channel: t,
        renderPopoutProps: n
      } = e;
      return t.isThread() ? (0, r.jsx)(h.Z, v(j({}, n), {
        channel: t,
        navId: "thread-context",
        label: y.intl.string(y.t["1NBjqa"])
      })) : (0, r.jsx)(c.Z, v(j({}, n), {
        channel: t,
        navId: "channel-context",
        label: y.intl.string(y.t.Xm41aW)
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
    let n = (0, g.ux)();
    return (0, i.useMemo)(() => {
      let e = b.ln.MENTION,
        r = new Set;
      return t && r.add(b.r0.ACK), n && r.add(b.r0.BOOKMARK), x[e].forEach(e => r.add(e)), Array.from(r)
    }, [e, t, n])
  })(t, l);
  return (0, r.jsx)(o.Kqy, {
    direction: "horizontal",
    gap: 4,
    align: "center",
    justify: "center",
    className: _.actions,
    children: a.map(e => {
      let i = S[e];
      switch (i.type) {
        case "standard":
          return (0, r.jsx)(C, v(j({}, i), {
            actionType: e,
            message: t
          }), e);
        case "menu":
          return (0, r.jsx)(E, v(j({}, i), {
            actionType: e,
            channel: n,
            message: t
          }), e)
      }
    })
  })
}