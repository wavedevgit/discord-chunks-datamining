/** Chunk was on 71447 **/
/** chunk id: 876891, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Pe: () => m,
  Qi: () => f,
  l2: () => h,
  lC: () => p,
  mM: () => d,
  sZ: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk442433 = require("./442433.js"),
  Chunk810412 = require("./810412.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e) {
  let {
    groupId: t,
    groupName: a
  } = e;
  return r.useCallback(e => {
    (0, l.L3)(e, async () => {
      let {
        default: e
      } = await n.e("43562").then(n.bind(n, 602321));
      return n => (0, i.jsx)(e, c(u({}, n), {
        groupId: t,
        groupName: a
      }))
    })
  }, [t, a])
}

function h(e) {
  let {
    user: t,
    appContext: a,
    friendGroupId: o,
    onUserContextMenuOpened: d,
    onMessageUser: h
  } = e;
  return r.useCallback(e => {
    null == d || d(), (0, l.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("77687")]).then(n.bind(n, 341354));
      return n => (0, i.jsx)(e, c(u({}, n), {
        user: t,
        appContext: a,
        widgetType: s.uss.FRIENDS,
        friendGroupId: o,
        showManageFriendGroupsItems: true,
        onMessageUser: h
      }))
    }, {
      context: a
    })
  }, [a, o, h, d, t])
}

function p(e) {
  let {
    channel: t,
    user: o
  } = e;
  return r.useCallback(e => {
    ((0, a.YX)(s.uss.FRIENDS, {
      type: a.Z5.TEXT_CHAT,
      value: a.IP.SETTINGS_OPENED,
      secondaryValue: "dm"
    }), t.isMultiUserDM()) ? (0, l.L3)(e, async () => {
      let {
        default: e
      } = await n.e("77927").then(n.bind(n, 320442));
      return n => (0, i.jsx)(e, c(u({}, n), {
        channel: t,
        selected: false,
        widgetType: s.uss.FRIENDS
      }))
    }) : t.isDM() && null != o && (0, l.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("29534"), n.e("93169"), n.e("25339")]).then(n.bind(n, 92016));
      return n => (0, i.jsx)(e, c(u({}, n), {
        user: o,
        channel: t,
        showModalItems: false,
        widgetType: s.uss.FRIENDS
      }))
    })
  }, [t, o])
}

function f(e) {
  let {
    channel: t,
    guild: o
  } = e;
  return r.useCallback(e => {
    ((0, a.YX)(s.uss.FRIENDS, {
      type: a.Z5.TEXT_CHAT,
      value: a.IP.SETTINGS_OPENED,
      secondaryValue: "guild"
    }), t.isModeratorReportChannel()) ? (0, l.L3)(e, async () => {
      let {
        default: e
      } = await n.e("56985").then(n.bind(n, 95616));
      return n => (0, i.jsx)(e, c(u({}, n), {
        channel: t,
        widgetType: s.uss.FRIENDS
      }))
    }) : null != o && (0, l.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("54036")]).then(n.bind(n, 813407));
      return n => (0, i.jsx)(e, c(u({}, n), {
        channel: t,
        guild: o,
        widgetType: s.uss.FRIENDS
      }))
    })
  }, [t, o])
}

function g(e) {
  let {
    channel: t,
    guild: o
  } = e;
  return r.useCallback(e => {
    null != o && null != t && ((0, a.YX)(s.uss.FRIENDS, {
      type: a.Z5.VOICE,
      value: a.IP.SETTINGS_OPENED,
      secondaryValue: "voice"
    }), (0, l.L3)(e, async () => {
      let {
        default: e
      } = await n.e("21905").then(n.bind(n, 769192));
      return n => (0, i.jsx)(e, c(u({}, n), {
        channel: t,
        guild: o,
        widgetType: s.uss.FRIENDS
      }))
    }))
  }, [t, o])
}

function m(e) {
  let {
    user: t,
    guildId: a,
    channelId: d
  } = e;
  return r.useCallback(e => {
    null != t && (e.preventDefault(), e.stopPropagation(), (0, l.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("87997"), n.e("99871")]).then(n.bind(n, 180812));
      return n => (0, i.jsx)(e, c(u({}, n), {
        user: t,
        guildId: null != a ? a : true,
        channelId: d,
        mediaEngineContext: o.x.DEFAULT,
        appContext: s.BRT.OVERLAY
      }))
    }))
  }, [d, a, t])
}