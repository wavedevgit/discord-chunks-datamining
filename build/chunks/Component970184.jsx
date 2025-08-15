/** Chunk was on 8739 **/
/** chunk id: 970184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CJ: () => M,
  Ee: () => R,
  Il: () => Z,
  h4: () => P
}), require("./388685.js"), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
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
  v = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      l = _.gH.NORMAL;
    return null != e && e.state !== p.F.FAILED && (e.data.interactionType === c.B8.MESSAGE_COMPONENT && e.data.componentId === t.id ? l = _.gH.LOADING : N(t) && (l = _.gH.DISABLED)), n && N(t) && (l = _.gH.DISABLED), l
  };

function b(e, t) {
  var n, l;
  let r = i.useContext(L),
    u = i.useCallback(t => {
      var n;
      let l = (0, h.Z)(e, t, null != r.modal ? "modal" : "message");
      return null == (n = r.setValidationErrors) || n.call(r, t => {
        var n, i;
        return n = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({}, t), i = i = {
          [e.id]: l
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n
      }), null == l
    }, [e, r]);
  return i.useEffect(() => {
    var e;
    let n = () => u(t);
    return null == (e = r.validators) || e.add(n), () => {
      var e;
      null == (e = r.validators) || e.delete(n)
    }
  }, [r.validators, u, t, e.id]), {
    error: null != (l = null == (n = r.validationErrors) ? true : n[e.id]) ? l : null,
    validate: u
  }
}

function y(e, t, n, l) {
  var r;
  let u = (0, a.e7)([O.Z], () => O.Z.getInteractionComponentState(e.id, n.id)),
    o = (0, a.e7)([E.ZP], () => E.ZP.getInteraction(e), [e]),
    c = (e => {
      let t = m.Z.getChannel(e),
        n = (0, a.e7)([g.Z], () => (null == t ? true : t.guild_id) == null || g.Z.canChatInGuild(t.guild_id), [t]),
        l = (0, a.e7)([T.Z], () => (null == t ? true : t.guild_id) != null && T.Z.isLurking(t.guild_id), [t]),
        i = (0, a.e7)([S.ZP, C.default], () => {
          var e, n;
          let l = C.default.getCurrentUser();
          return null != (n = (null == t ? true : t.guild_id) != null && null != l ? null == (e = S.ZP.getMember(null == t ? true : t.guild_id, l.id)) ? true : e.isPending : null) && n
        }),
        [, r] = (0, s.AB)(null == t ? true : t.guild_id),
        u = (0, f.tc)(t);
      return !!(!n || l || i || (null == t ? true : t.isLockedThread()) || (null == t ? true : t.isArchivedThread()) && !u) || !!r
    })(e.channel_id) || t,
    {
      error: d,
      validate: p
    } = b(n, u),
    _ = null != (r = e.applicationId) ? r : e.author.id;
  return {
    state: u,
    executeStateUpdate: i.useCallback(t => {
      if (!p(t)) returnfalse;
      let l = m.Z.getChannel(e.channel_id);
      return null != l && null != n.customId && (0, I.tM)({
        componentType: n.type,
        messageId: e.id,
        messageFlags: e.flags,
        customId: n.customId,
        componentId: n.id,
        applicationId: _,
        channelId: l.id,
        guildId: l.guild_id,
        localState: t
      }), true
    }, [e.channel_id, e.flags, e.id, n.customId, n.type, n.id, _, p]),
    isDisabled: c && N(n),
    visualState: v(o, n, c),
    error: d
  }
}

function A(e, t, n) {
  let l = (0, a.e7)([O.Z], () => O.Z.getInteractionComponentState(e.customId, t.id)),
    {
      error: r,
      validate: u
    } = b(t, l),
    c = i.useCallback(n => null == n || (o.Z.dispatch({
      type: "SET_INTERACTION_COMPONENT_STATE",
      rootContainerId: e.customId,
      componentId: t.id,
      state: n
    }), !!u(n)), [e.customId, t.id, u]);
  return (0, d.ZP)(() => {
    c(n)
  }), {
    state: l,
    executeStateUpdate: c,
    isDisabled: false,
    visualState: _.gH.NORMAL,
    error: r
  }
}
let L = Chunk647438.createContext(null);

function Z(e) {
  let {
    children: t,
    message: n,
    modal: r,
    validators: a,
    validationErrors: o,
    setValidationErrors: c,
    shouldDisableInteractiveComponents: d = false
  } = e, s = i.useMemo(() => null != n ? {
    useComponentState: y.bind(null, n, d),
    channelId: n.channel_id,
    message: n,
    validators: a
  } : (u()(null != r, "modal is present if message is not"), {
    useComponentState: A.bind(null, r),
    channelId: r.channelId,
    modal: r,
    validators: a,
    validationErrors: o,
    setValidationErrors: c
  }), [n, r, a, o, c, d]);
  return (0, l.jsx)(L.Provider, {
    value: s,
    children: t
  })
}

function R(e, t) {
  return i.useContext(L).useComponentState(e, t)
}

function M() {
  return Chunk647438.useContext(L)
}

function P(e) {
  var t, n;
  return null != (n = null == (t = i.useContext(L).validationErrors) ? true : t[e.id]) ? n : null
}