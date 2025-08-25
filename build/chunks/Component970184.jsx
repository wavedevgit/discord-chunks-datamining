/** Chunk was on web.js **/
/** chunk id: 970184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CJ: () => M,
  Ee: () => k,
  Il: () => j,
  h4: () => U
}), require("./388685.js"), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js"),
  Chunk493773 = require("./493773.js"),
  Chunk71619 = require("./71619.js"),
  Chunk282397 = require("./282397.js"),
  Chunk622449 = require("./622449.js"),
  Chunk188597 = require("./188597.js"),
  Chunk41776 = require("./41776.js"),
  Chunk665906 = require("./665906.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk607744 = require("./607744.js"),
  Chunk594174 = require("./594174.js"),
  Chunk280501 = require("./280501.js"),
  Chunk892902 = require("./892902.js"),
  Chunk359232 = require("./359232.js");

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
let N = e => {
    switch (e.type) {
      case c.re.BUTTON:
        return e.style !== c.ZJ.LINK;
      case c.re.STRING_SELECT:
      case c.re.USER_SELECT:
      case c.re.ROLE_SELECT:
      case c.re.MENTIONABLE_SELECT:
      case c.re.CHANNEL_SELECT:
        returntrue;
      case c.re.ACTION_ROW:
      case c.re.TEXT_INPUT:
      default:
        returnfalse
    }
  },
  R = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = O.gH.NORMAL;
    return null != e && e.state !== _.F.FAILED && (e.data.interactionType === c.B8.MESSAGE_COMPONENT && e.data.componentId === t.id ? r = O.gH.LOADING : N(t) && (r = O.gH.DISABLED)), n && N(t) && (r = O.gH.DISABLED), r
  },
  P = e => {
    let t = g.Z.getChannel(e),
      n = (0, s.e7)([b.Z], () => (null == t ? true : t.guild_id) == null || b.Z.canChatInGuild(t.guild_id), [t]),
      r = (0, s.e7)([h.Z], () => (null == t ? true : t.guild_id) != null && h.Z.isLurking(t.guild_id), [t]),
      i = (0, s.e7)([E.ZP, y.default], () => {
        var e, n;
        let r = y.default.getCurrentUser();
        return null != (n = (null == t ? true : t.guild_id) != null && null != r ? null == (e = E.ZP.getMember(null == t ? true : t.guild_id, r.id)) ? true : e.isPending : null) && n
      }),
      [, a] = (0, d.AB)(null == t ? true : t.guild_id),
      o = (0, m.tc)(t);
    return !!(!n || r || i || (null == t ? true : t.isLockedThread()) || (null == t ? true : t.isArchivedThread()) && !o) || !!a
  };

function w(e, t) {
  var n, r;
  let a = i.useContext(L),
    o = i.useCallback(t => {
      var n;
      let r = (0, I.Z)(e, t, null != a.modal ? "modal" : "message");
      return null == (n = a.setValidationErrors) || n.call(a, t => C(S({}, t), {
        [e.id]: r
      })), null == r
    }, [e, a]);
  return i.useEffect(() => {
    var e;
    let n = () => o(t);
    return null == (e = a.validators) || e.add(n), () => {
      var e;
      null == (e = a.validators) || e.delete(n)
    }
  }, [a.validators, o, t, e.id]), {
    error: null != (r = null == (n = a.validationErrors) ? true : n[e.id]) ? r : null,
    validate: o
  }
}

function D(e, t, n, r) {
  var a;
  let o = (0, s.e7)([v.Z], () => v.Z.getInteractionComponentState(e.id, n.id)),
    l = (0, s.e7)([f.ZP], () => f.ZP.getInteraction(e), [e]),
    c = P(e.channel_id) || t,
    {
      error: u,
      validate: d
    } = w(n, o),
    _ = null != (a = e.applicationId) ? a : e.author.id;
  return {
    state: o,
    executeStateUpdate: i.useCallback(t => {
      if (!d(t)) returnfalse;
      let r = g.Z.getChannel(e.channel_id);
      return null != r && null != n.customId && (0, p.tM)({
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
    }, [e.channel_id, e.flags, e.id, n.customId, n.type, n.id, _, d]),
    isDisabled: c && N(n),
    visualState: R(l, n, c),
    error: u
  }
}

function x(e, t, n) {
  let r = (0, s.e7)([v.Z], () => v.Z.getInteractionComponentState(e.customId, t.id)),
    {
      error: a,
      validate: o
    } = w(t, r),
    c = i.useCallback(n => null == n || (l.Z.dispatch({
      type: "SET_INTERACTION_COMPONENT_STATE",
      rootContainerId: e.customId,
      componentId: t.id,
      state: n
    }), !!o(n)), [e.customId, t.id, o]);
  return (0, u.ZP)(() => {
    c(n)
  }), {
    state: r,
    executeStateUpdate: c,
    isDisabled: false,
    visualState: O.gH.NORMAL,
    error: a
  }
}
let L = Chunk647438.createContext(null);

function j(e) {
  let {
    children: t,
    message: n,
    modal: a,
    validators: s,
    validationErrors: l,
    setValidationErrors: c,
    shouldDisableInteractiveComponents: u = false
  } = e, d = i.useMemo(() => null != n ? {
    useComponentState: D.bind(null, n, u),
    channelId: n.channel_id,
    message: n,
    validators: s
  } : (o()(null != a, "modal is present if message is not"), {
    useComponentState: x.bind(null, a),
    channelId: a.channelId,
    modal: a,
    validators: s,
    validationErrors: l,
    setValidationErrors: c
  }), [n, a, s, l, c, u]);
  return (0, r.jsx)(L.Provider, {
    value: d,
    children: t
  })
}

function k(e, t) {
  return i.useContext(L).useComponentState(e, t)
}

function M() {
  return Chunk647438.useContext(L)
}

function U(e) {
  var t, n;
  return null != (n = null == (t = i.useContext(L).validationErrors) ? true : t[e.id]) ? n : null
}