/** Chunk was on web.js **/
/** chunk id: 69626, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Wf: () => R,
  ZP: () => w,
  wz: () => P
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk555573 = require("./555573.js"),
  Chunk10718 = require("./10718.js"),
  Chunk895924 = require("./895924.js"),
  Chunk124072 = require("./124072.jsx"),
  Chunk665906 = require("./665906.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk689079 = require("./689079.js"),
  Chunk761652 = require("./761652.js"),
  Chunk388032 = require("./388032.jsx");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t, n, i, a) {
  if (null == e) return;
  let o = () => {
    let r = h.Z.getChannel(e);
    if (null == r) return;
    let {
      command: o,
      application: s
    } = u.Xq({
      channel: r,
      type: "channel"
    }, n, a);
    if (null != o && o.untranslatedName === t) {
      var l, f;
      b.S.dispatch(y.CkL.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: e
      });
      let t = null != s ? {
        type: d.Qi.APPLICATION,
        id: s.id,
        icon: s.icon,
        name: null != (f = null == s || null == (l = s.bot) ? true : l.username) ? f : s.name,
        application: s
      } : null;
      c.Po({
        channelId: e,
        command: null,
        section: null
      }), c.Po({
        channelId: e,
        command: o,
        section: t,
        location: i
      })
    }
  };
  "" !== m.Z.getDraft(e, m.d.ChannelMessage) ? (0, l.h7j)(t => (0, r.jsx)(l.ConfirmModal, C(S({
    header: I.intl.string(I.t.pe26Cj),
    confirmText: I.intl.string(I.t.VkKicb),
    cancelText: I.intl.string(I.t["ETE/oC"]),
    onConfirm: () => o(),
    confirmButtonColor: s.zx.Colors.BRAND,
    onCloseCallback: () => {
      b.S.dispatch(y.CkL.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: e
      })
    }
  }, t), {
    children: (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      children: I.intl.string(I.t["+awCIy"])
    })
  }))) : o()
}

function R(e) {
  var t;
  let {
    node: n,
    stateKey: o,
    children: s
  } = e, l = (0, a.e7)([h.Z, E.Z], () => {
    var e;
    return h.Z.getChannel(null != (e = n.channelId) ? e : E.Z.getChannelId())
  }, [n.channelId]), {
    hasSendMessagePerm: c,
    hasUseAppCommandsPerm: m
  } = (0, a.cj)([g.Z], () => ({
    hasSendMessagePerm: g.Z.can(y.Plq.SEND_MESSAGES, l),
    hasUseAppCommandsPerm: g.Z.can(y.Plq.USE_APPLICATION_COMMANDS, l)
  })), b = true !== l ? {
    type: "channel",
    channel: l
  } : {
    type: "contextless"
  }, {
    command: I
  } = u.YZ(b, null != (t = n.commandKey) ? t : ""), T = p.dN.useSetting(), S = i.useMemo(() => {
    if (null == I || null == l || I.untranslatedName !== n.commandName || T) returnfalse;
    let e = l.isPrivate();
    if ((0, _.xl)(l) || !e && !c) returnfalse;
    let t = (null == I ? true : I.applicationId) === O.bi.BUILT_IN;
    return !!e || !!t || !!m
  }, [l, I, c, m, n.commandName, T]), A = i.useCallback(e => {
    null == e || e.stopPropagation(), null != l && null != n.commandName && null != n.commandKey && N(l.id, n.commandName, n.commandKey, d.Vh.MENTION)
  }, [l, n.commandKey, n.commandName]);
  return S ? (0, r.jsxs)(f.Z, {
    role: "link",
    onClick: A,
    children: [v.GI, s]
  }, o) : (0, r.jsxs)("span", {
    children: [v.GI, s]
  })
}

function P(e) {
  let {
    commandId: t,
    commandName: n,
    commandDescription: i,
    applicationId: s,
    onClick: c
  } = e, u = (0, a.e7)([E.Z], () => E.Z.getChannelId()), f = e => {
    null == e || e.stopPropagation(), N(u, n, t, d.Vh.POPULAR_COMMANDS, s), null == c || c(t)
  };
  return (0, r.jsx)(o.u, {
    text: i,
    position: "top",
    children: (0, r.jsx)(l.Button, {
      size: "sm",
      variant: "secondary",
      onClick: f,
      text: "".concat(v.GI).concat(n)
    })
  })
}

function w(e) {
  return {
    react: (e, t, n) => (0, r.jsx)(R, {
      node: e,
      stateKey: n.key,
      children: t(e.content, n)
    })
  }
}