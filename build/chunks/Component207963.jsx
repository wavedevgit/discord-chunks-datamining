/** Chunk was on web.js **/
/** chunk id: 207963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  At: () => U,
  bO: () => V,
  f5: () => k,
  jc: () => G
}), require("./896048.js"), require("./938796.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk155718 = require("./155718.js"),
  Chunk964486 = require("./964486.js"),
  Chunk870136 = require("./870136.js"),
  Chunk436283 = require("./436283.js"),
  Chunk337591 = require("./337591.js"),
  Chunk296043 = require("./296043.js"),
  Chunk857071 = require("./857071.js"),
  Chunk406704 = require("./406704.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk834942 = require("./834942.js"),
  Chunk287809 = require("./287809.js"),
  Chunk489414 = require("./489414.js"),
  Chunk814890 = require("./814890.js"),
  Chunk322980 = require("./322980.js"),
  Chunk270761 = require("./270761.js");

function v(e, t, n) {
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
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = e => {
    switch (e.type) {
      case o.I5.BUTTON:
        return e.style !== o.in.LINK;
      case o.I5.STRING_SELECT:
      case o.I5.USER_SELECT:
      case o.I5.ROLE_SELECT:
      case o.I5.MENTIONABLE_SELECT:
      case o.I5.CHANNEL_SELECT:
        returntrue;
      case o.I5.ACTION_ROW:
      case o.I5.TEXT_INPUT:
      default:
        returnfalse
    }
  },
  N = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = b.BB.NORMAL;
    return null != e && e.state !== d.m.FAILED && (e.data.interactionType === o.G4.MESSAGE_COMPONENT && e.data.componentId === t.id ? r = b.BB.LOADING : C(t) && (r = b.BB.DISABLED)), n && C(t) && (r = b.BB.DISABLED), r
  };

function R(e) {
  return "app-widget-".concat(e.applicationId)
}
let w = e => {
  let t = h.A.getChannel(e),
    n = (0, a.bG)([g.A], () => (null == t ? true : t.guild_id) == null || g.A.canChatInGuild(t.guild_id), [t]),
    r = (0, a.bG)([p.A], () => (null == t ? true : t.guild_id) != null && p.A.isLurking(t.guild_id), [t]),
    i = (0, a.bG)([m.Ay, E.default], () => {
      var e, n;
      let r = E.default.getCurrentUser();
      return null != (e = (null == t ? true : t.guild_id) != null && null != r ? null == (n = m.Ay.getMember(null == t ? true : t.guild_id, r.id)) ? true : n.isPending : null) && e
    }),
    [, s] = (0, c.c)(null == t ? true : t.guild_id),
    o = (0, _.H_)(t),
    l = (0, _.lK)(t);
  return !!(!n || r || i || (null == t ? true : t.isLockedThread()) && !o || (null == t ? true : t.isArchivedThread()) && !l) || !!s
};

function P(e, t) {
  var n, r;
  let a = i.useContext(M),
    s = i.useCallback(t => {
      var n;
      let r = (0, A.A)(e, t, null != a.modal ? "modal" : "message");
      return null == (n = a.setValidationErrors) || n.call(a, t => T(S({}, t), {
        [e.id]: r
      })), null == r
    }, [e, a]);
  return i.useEffect(() => {
    var e;
    let n = () => s(t);
    return null == (e = a.validators) || e.add(n), () => {
      var e;
      null == (e = a.validators) || e.delete(n)
    }
  }, [a.validators, s, t, e.id]), {
    error: null != (n = null == (r = a.validationErrors) ? true : r[e.id]) ? n : null,
    validate: s
  }
}

function D(e, t, n, r) {
  var s;
  let o = (0, a.bG)([O.A], () => O.A.getInteractionComponentState(e.id, n.id)),
    l = (0, a.bG)([u.Ay], () => u.Ay.getInteraction(e), [e]),
    c = w(e.channel_id) || t,
    {
      error: d,
      validate: p
    } = P(n, o),
    _ = null != (s = e.applicationId) ? s : e.author.id;
  return {
    state: o,
    executeStateUpdate: i.useCallback(t => {
      if (!p(t)) returnfalse;
      let r = h.A.getChannel(e.channel_id);
      return null != r && null != n.customId && (0, f.Gv)({
        componentType: n.type,
        messageId: e.id,
        messageFlags: e.flags,
        customId: n.customId,
        componentId: n.id,
        applicationId: _,
        channelId: r.id,
        guildId: r.guild_id,
        localState: t
      }), true
    }, [e.channel_id, e.flags, e.id, n.customId, n.type, n.id, _, p]),
    isDisabled: c && C(n),
    visualState: N(l, n, c),
    error: d
  }
}

function x(e, t, n) {
  let r = (0, a.bG)([O.A], () => O.A.getInteractionComponentState(e.customId, t.id)),
    {
      error: o,
      validate: c
    } = P(t, r),
    u = i.useCallback(n => null == n || (s.h.dispatch({
      type: "SET_INTERACTION_COMPONENT_STATE",
      rootContainerId: e.customId,
      componentId: t.id,
      state: n
    }), !!c(n)), [e.customId, t.id, c]);
  return (0, l.Ay)(() => {
    u(n)
  }), {
    state: r,
    executeStateUpdate: u,
    isDisabled: false,
    visualState: b.BB.NORMAL,
    error: o
  }
}

function L(e) {
  return () => {
    throw Error("".concat(e, " does not support state"))
  }
}

function j(e) {
  return () => {
    throw Error("".concat(e, " does not support parents"))
  }
}
let M = Chunk64700.createContext(null);

function k(e) {
  let {
    children: t,
    message: n,
    modal: a,
    applicationWidget: s,
    validators: o,
    validationErrors: l,
    setValidationErrors: c,
    shouldDisableInteractiveComponents: u = false
  } = e, d = i.useMemo(() => {
    if (null != n) return {
      useComponentState: D.bind(null, n, u),
      channelId: n.channel_id,
      containerId: n.id,
      message: n,
      validators: o,
      getParents: e => (0, y.wT)(n.components, e)
    };
    if (null != a) return {
      useComponentState: x.bind(null, a),
      channelId: a.channelId,
      containerId: a.customId,
      modal: a,
      validators: o,
      validationErrors: l,
      setValidationErrors: c,
      getParents: e => (0, y.wT)(a.components, e)
    };
    if (null != s) return {
      useComponentState: L("ApplicationWidget"),
      containerId: R(s),
      applicationWidget: s,
      validators: o,
      validationErrors: l,
      setValidationErrors: c,
      getParents: j("ApplicationWidget")
    };
    throw Error("ComponentStateContextProvider requires at least one of message, modal, or applicationWidget")
  }, [n, a, s, u, o, l, c]);
  return (0, r.jsx)(M.Provider, {
    value: d,
    children: t
  })
}

function U(e, t) {
  return i.useContext(M).useComponentState(e, t)
}

function G() {
  return i.useContext(M)
}

function V(e) {
  var t, n;
  return null != (t = null == (n = i.useContext(M).validationErrors) ? true : n[e.id]) ? t : null
}