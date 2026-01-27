/** Chunk was on 28936 **/
/** chunk id: 207963, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  At: () => L,
  bO: () => D,
  f5: () => P,
  jc: () => w
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
let A = e => {
    switch (e.type) {
      case u.I5.BUTTON:
        return e.style !== u.in.LINK;
      case u.I5.STRING_SELECT:
      case u.I5.USER_SELECT:
      case u.I5.ROLE_SELECT:
      case u.I5.MENTIONABLE_SELECT:
      case u.I5.CHANNEL_SELECT:
        returntrue;
      case u.I5.ACTION_ROW:
      case u.I5.TEXT_INPUT:
      default:
        returnfalse
    }
  },
  h = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      l = S.BB.NORMAL;
    return null != e && e.state !== d.m.FAILED && (e.data.interactionType === u.G4.MESSAGE_COMPONENT && e.data.componentId === t.id ? l = S.BB.LOADING : A(t) && (l = S.BB.DISABLED)), n && A(t) && (l = S.BB.DISABLED), l
  };

function _(e, t) {
  var n, l;
  let i = r.useContext(y),
    a = r.useCallback(t => {
      var n;
      let l = (0, C.A)(e, t, null != i.modal ? "modal" : "message");
      return null == (n = i.setValidationErrors) || n.call(i, t => {
        var n, r;
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
        }({}, t), r = r = {
          [e.id]: l
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n
      }), null == l
    }, [e, i]);
  return r.useEffect(() => {
    var e;
    let n = () => a(t);
    return null == (e = i.validators) || e.add(n), () => {
      var e;
      null == (e = i.validators) || e.delete(n)
    }
  }, [i.validators, a, t, e.id]), {
    error: null != (n = null == (l = i.validationErrors) ? true : l[e.id]) ? n : null,
    validate: a
  }
}

function b(e, t, n, l) {
  var a;
  let u = (0, i.bG)([O.A], () => O.A.getInteractionComponentState(e.id, n.id)),
    o = (0, i.bG)([s.Ay], () => s.Ay.getInteraction(e), [e]),
    d = (e => {
      let t = g.A.getChannel(e),
        n = (0, i.bG)([T.A], () => (null == t ? true : t.guild_id) == null || T.A.canChatInGuild(t.guild_id), [t]),
        l = (0, i.bG)([E.A], () => (null == t ? true : t.guild_id) != null && E.A.isLurking(t.guild_id), [t]),
        r = (0, i.bG)([f.Ay, m.default], () => {
          var e, n;
          let l = m.default.getCurrentUser();
          return null != (e = (null == t ? true : t.guild_id) != null && null != l ? null == (n = f.Ay.getMember(null == t ? true : t.guild_id, l.id)) ? true : n.isPending : null) && e
        }),
        [, a] = (0, c.c)(null == t ? true : t.guild_id),
        u = (0, I.H_)(t),
        o = (0, I.lK)(t);
      return !!(!n || l || r || (null == t ? true : t.isLockedThread()) && !u || (null == t ? true : t.isArchivedThread()) && !o) || !!a
    })(e.channel_id) || t,
    {
      error: S,
      validate: v
    } = _(n, u),
    C = null != (a = e.applicationId) ? a : e.author.id;
  return {
    state: u,
    executeStateUpdate: r.useCallback(t => {
      if (!v(t)) returnfalse;
      let l = g.A.getChannel(e.channel_id);
      return null != l && null != n.customId && (0, p.Gv)({
        componentType: n.type,
        messageId: e.id,
        messageFlags: e.flags,
        customId: n.customId,
        componentId: n.id,
        applicationId: C,
        channelId: l.id,
        guildId: l.guild_id,
        localState: t
      }), true
    }, [e.channel_id, e.flags, e.id, n.customId, n.type, n.id, C, v]),
    isDisabled: d && A(n),
    visualState: h(o, n, d),
    error: S
  }
}

function N(e, t, n) {
  let l = (0, i.bG)([O.A], () => O.A.getInteractionComponentState(e.customId, t.id)),
    {
      error: u,
      validate: c
    } = _(t, l),
    s = r.useCallback(n => null == n || (a.h.dispatch({
      type: "SET_INTERACTION_COMPONENT_STATE",
      rootContainerId: e.customId,
      componentId: t.id,
      state: n
    }), !!c(n)), [e.customId, t.id, c]);
  return (0, o.Ay)(() => {
    s(n)
  }), {
    state: l,
    executeStateUpdate: s,
    isDisabled: false,
    visualState: S.BB.NORMAL,
    error: u
  }
}
let y = Chunk64700.createContext(null);

function P(e) {
  let {
    children: t,
    message: n,
    modal: i,
    applicationWidget: a,
    validators: u,
    validationErrors: o,
    setValidationErrors: c,
    shouldDisableInteractiveComponents: s = false
  } = e, d = r.useMemo(() => {
    if (null != n) return {
      useComponentState: b.bind(null, n, s),
      channelId: n.channel_id,
      containerId: n.id,
      message: n,
      validators: u,
      getParents: e => (0, v.wT)(n.components, e)
    };
    if (null != i) return {
      useComponentState: N.bind(null, i),
      channelId: i.channelId,
      containerId: i.customId,
      modal: i,
      validators: u,
      validationErrors: o,
      setValidationErrors: c,
      getParents: e => (0, v.wT)(i.components, e)
    };
    if (null != a) return {
      useComponentState: () => {
        throw Error("".concat("ApplicationWidget", " does not support state"))
      },
      containerId: "app-widget-".concat(a.applicationId),
      applicationWidget: a,
      validators: u,
      validationErrors: o,
      setValidationErrors: c,
      getParents: () => {
        throw Error("".concat("ApplicationWidget", " does not support parents"))
      }
    };
    throw Error("ComponentStateContextProvider requires at least one of message, modal, or applicationWidget")
  }, [n, i, a, s, u, o, c]);
  return (0, l.jsx)(y.Provider, {
    value: d,
    children: t
  })
}

function L(e, t) {
  return r.useContext(y).useComponentState(e, t)
}

function w() {
  return r.useContext(y)
}

function D(e) {
  var t, n;
  return null != (t = null == (n = r.useContext(y).validationErrors) ? true : n[e.id]) ? t : null
}