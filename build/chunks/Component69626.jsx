/** Chunk was on web.js **/
/** chunk id: 69626, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Wf: () => T,
  ZP: () => A,
  wz: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk28664 = require("./28664.jsx"),
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

function I(e, t, n, r, i) {
  if (null == e) return;
  let o = () => {
    let o = m.Z.getChannel(e);
    if (null == o) return;
    let {
      command: a,
      application: s
    } = u.Xq({
      channel: o,
      type: "channel"
    }, n, i);
    if (null != a && a.untranslatedName === t) {
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
        command: a,
        section: t,
        location: r
      })
    }
  };
  "" !== h.Z.getDraft(e, h.d.ChannelMessage) ? (0, a.Z)({
    title: S.intl.string(S.t.pe26Cj),
    subtitle: S.intl.string(S.t["+awCIy"]),
    confirmText: S.intl.string(S.t.VkKicb),
    onConfirm: () => o(),
    onCloseCallback: () => {
      b.S.dispatch(y.CkL.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: e
      })
    }
  }) : o()
}

function T(e) {
  var t;
  let {
    node: n,
    stateKey: a,
    children: s
  } = e, l = (0, o.e7)([m.Z, E.Z], () => {
    var e;
    return m.Z.getChannel(null != (e = n.channelId) ? e : E.Z.getChannelId())
  }, [n.channelId]), {
    hasSendMessagePerm: c,
    hasUseAppCommandsPerm: h
  } = (0, o.cj)([g.Z], () => ({
    hasSendMessagePerm: g.Z.can(y.Plq.SEND_MESSAGES, l),
    hasUseAppCommandsPerm: g.Z.can(y.Plq.USE_APPLICATION_COMMANDS, l)
  })), b = true !== l ? {
    type: "channel",
    channel: l
  } : {
    type: "contextless"
  }, {
    command: S
  } = u.YZ(b, null != (t = n.commandKey) ? t : ""), T = _.dN.useSetting(), C = i.useMemo(() => {
    if (null == S || null == l || S.untranslatedName !== n.commandName || T) returnfalse;
    let e = l.isPrivate();
    if ((0, p.xl)(l) || !e && !c) returnfalse;
    let t = (null == S ? true : S.applicationId) === O.bi.BUILT_IN;
    return !!e || !!t || !!h
  }, [l, S, c, h, n.commandName, T]), A = i.useCallback(e => {
    null == e || e.stopPropagation(), null != l && null != n.commandName && null != n.commandKey && I(l.id, n.commandName, n.commandKey, d.Vh.MENTION)
  }, [l, n.commandKey, n.commandName]);
  return C ? (0, r.jsxs)(f.Z, {
    role: "link",
    onClick: A,
    children: [v.GI, s]
  }, a) : (0, r.jsxs)("span", {
    children: [v.GI, s]
  })
}

function C(e) {
  let {
    commandId: t,
    commandName: n,
    commandDescription: i,
    applicationId: a,
    onClick: c
  } = e, u = (0, o.e7)([E.Z], () => E.Z.getChannelId()), f = e => {
    null == e || e.stopPropagation(), I(u, n, t, d.Vh.POPULAR_COMMANDS, a), null == c || c(t)
  };
  return (0, r.jsx)(s.u, {
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

function A(e) {
  return {
    react: (e, t, n) => (0, r.jsx)(T, {
      node: e,
      stateKey: n.key,
      children: t(e.content, n)
    })
  }
}