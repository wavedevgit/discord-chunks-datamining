/** Chunk was on web.js **/
/** chunk id: 990474, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => T,
  Oh: () => S,
  gn: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk721768 = require("./721768.js"),
  Chunk842209 = require("./842209.js"),
  Chunk392054 = require("./392054.js"),
  Chunk332173 = require("./332173.jsx"),
  Chunk406704 = require("./406704.js"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js"),
  Chunk73510 = require("./73510.js");
require("./827669.js");
var Chunk985018 = require("./985018.jsx");

function A(e, t, n, r, i) {
  if (null == e) return;
  let a = () => {
    let a = h.A.getChannel(e);
    if (null == a) return;
    let {
      command: o,
      application: s
    } = u.EW({
      channel: a,
      type: "channel"
    }, n, i);
    if (null != o && o.untranslatedName === t) {
      var l, f;
      y._.dispatch(b.jej.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: e
      });
      let t = null != s ? {
        type: d.Hf.APPLICATION,
        id: s.id,
        icon: s.icon,
        name: null != (l = null == s || null == (f = s.bot) ? true : f.username) ? l : s.name,
        application: s
      } : null;
      c.Gf({
        channelId: e,
        command: null,
        section: null
      }), c.Gf({
        channelId: e,
        command: o,
        section: t,
        location: r
      })
    }
  };
  "" !== m.A.getDraft(e, m.C.ChannelMessage) ? (0, o.A)({
    title: v.intl.string(v.t.pe26Cj),
    subtitle: v.intl.string(v.t["+awCIy"]),
    confirmText: v.intl.string(v.t.VkKicb),
    onConfirm: () => a(),
    onCloseCallback: () => {
      y._.dispatch(b.jej.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: e
      })
    }
  }) : a()
}

function I(e) {
  var t;
  let {
    node: n,
    stateKey: o,
    children: s
  } = e, l = (0, a.bG)([h.A, E.A], () => {
    var e;
    return h.A.getChannel(null != (e = n.channelId) ? e : E.A.getChannelId())
  }, [n.channelId]), {
    hasSendMessagePerm: c,
    hasUseAppCommandsPerm: m
  } = (0, a.cf)([g.A], () => ({
    hasSendMessagePerm: g.A.can(b.xBc.SEND_MESSAGES, l),
    hasUseAppCommandsPerm: g.A.can(b.xBc.USE_APPLICATION_COMMANDS, l)
  })), y = true !== l ? {
    type: "channel",
    channel: l
  } : {
    type: "contextless"
  }, {
    command: v
  } = u.D3(y, null != (t = n.commandKey) ? t : ""), I = _.D_.useSetting(), S = i.useMemo(() => {
    if (null == v || null == l || v.untranslatedName !== n.commandName || I) returnfalse;
    let e = l.isPrivate();
    if ((0, p.UJ)(l) || !e && !c) returnfalse;
    let t = (null == v ? true : v.applicationId) === O.Ik.BUILT_IN;
    return !!e || !!t || !!m
  }, [l, v, c, m, n.commandName, I]), T = i.useCallback(e => {
    null == e || e.stopPropagation(), null != l && null != n.commandName && null != n.commandKey && A(l.id, n.commandName, n.commandKey, d.Oh.MENTION)
  }, [l, n.commandKey, n.commandName]);
  return S ? (0, r.jsxs)(f.A, {
    role: "link",
    onClick: T,
    children: ["/", s]
  }, o) : (0, r.jsxs)("span", {
    children: ["/", s]
  })
}

function S(e) {
  let {
    commandId: t,
    commandName: n,
    commandDescription: i,
    applicationId: o,
    onClick: c
  } = e, u = (0, a.bG)([E.A], () => E.A.getChannelId()), f = e => {
    null == e || e.stopPropagation(), A(u, n, t, d.Oh.POPULAR_COMMANDS, o), null == c || c(t)
  };
  return (0, r.jsx)(s.m, {
    text: i,
    position: "top",
    children: (0, r.jsx)(l.Button, {
      size: "sm",
      variant: "secondary",
      onClick: f,
      text: "".concat("/").concat(n)
    })
  })
}

function T(e) {
  return {
    react: (e, t, n) => (0, r.jsx)(I, {
      node: e,
      stateKey: n.key,
      children: t(e.content, n)
    })
  }
}