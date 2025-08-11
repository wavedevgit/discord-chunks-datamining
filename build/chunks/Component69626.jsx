/** Chunk was on web.js **/
/** chunk id: 69626, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Wf: () => R,
  ZP: () => w,
  wz: () => P
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk885406 = require("./885406.js");

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

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t, n, i, o) {
  if (null == e) return;
  let d = () => {
    let r = p.Z.getChannel(e);
    if (null == r) return;
    let {
      command: a,
      application: s
    } = c.Xq({
      channel: r,
      type: "channel"
    }, n, o);
    if (null != a && a.untranslatedName === t) {
      var d, f;
      E.S.dispatch(b.CkL.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: e
      });
      let t = null != s ? {
        type: u.Qi.APPLICATION,
        id: s.id,
        icon: s.icon,
        name: null != (f = null == s || null == (d = s.bot) ? true : d.username) ? f : s.name,
        application: s
      } : null;
      l.Po({
        channelId: e,
        command: null,
        section: null
      }), l.Po({
        channelId: e,
        command: a,
        section: t,
        location: i
      })
    }
  };
  "" !== h.Z.getDraft(e, h.d.ChannelMessage) ? (0, s.h7j)(t => (0, r.jsx)(s.ConfirmModal, N(S({
    header: v.intl.string(v.t.pe26Cg),
    confirmText: v.intl.string(v.t.VkKicX),
    cancelText: v.intl.string(v.t["ETE/oK"]),
    onConfirm: () => d(),
    confirmButtonColor: a.zx.Colors.BRAND,
    onCloseCallback: () => {
      E.S.dispatch(b.CkL.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: e
      })
    }
  }, t), {
    children: (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      children: v.intl.string(v.t["+awCIy"])
    })
  }))) : d()
}

function R(e) {
  var t;
  let {
    node: n,
    stateKey: a,
    children: s
  } = e, l = (0, o.e7)([p.Z, g.Z], () => {
    var e;
    return p.Z.getChannel(null != (e = n.channelId) ? e : g.Z.getChannelId())
  }, [n.channelId]), {
    hasSendMessagePerm: h,
    hasUseAppCommandsPerm: E
  } = (0, o.cj)([m.Z], () => ({
    hasSendMessagePerm: m.Z.can(b.Plq.SEND_MESSAGES, l),
    hasUseAppCommandsPerm: m.Z.can(b.Plq.USE_APPLICATION_COMMANDS, l)
  })), v = true !== l ? {
    type: "channel",
    channel: l
  } : {
    type: "contextless"
  }, {
    command: I
  } = c.YZ(v, null != (t = n.commandKey) ? t : ""), T = _.dN.useSetting(), S = i.useMemo(() => {
    if (null == I || null == l || I.untranslatedName !== n.commandName || T) returnfalse;
    let e = l.isPrivate();
    if ((0, f.xl)(l) || !e && !h) returnfalse;
    let t = (null == I ? true : I.applicationId) === y.bi.BUILT_IN;
    return !!e || !!t || !!E
  }, [l, I, h, E, n.commandName, T]), A = i.useCallback(e => {
    null == e || e.stopPropagation(), null != l && null != n.commandName && null != n.commandKey && C(l.id, n.commandName, n.commandKey, u.Vh.MENTION)
  }, [l, n.commandKey, n.commandName]);
  return S ? (0, r.jsxs)(d.Z, {
    role: "link",
    onClick: A,
    children: [O.GI, s]
  }, a) : (0, r.jsxs)("span", {
    children: [O.GI, s]
  })
}

function P(e) {
  let {
    commandId: t,
    commandName: n,
    commandDescription: i,
    applicationId: l,
    onClick: c
  } = e, d = (0, o.e7)([g.Z], () => g.Z.getChannelId()), f = e => {
    null == e || e.stopPropagation(), C(d, n, t, u.Vh.POPULAR_COMMANDS, l), null == c || c(t)
  };
  return (0, r.jsx)(s.ua7, {
    text: i,
    position: "top",
    tooltipContentClassName: I.tooltip,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: i
      } = e;
      return (0, r.jsxs)(a.zx, {
        color: a.Tt.PRIMARY,
        size: a.Ph.ICON,
        onClick: f,
        onMouseEnter: t,
        onMouseLeave: i,
        children: [O.GI, n]
      })
    }
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