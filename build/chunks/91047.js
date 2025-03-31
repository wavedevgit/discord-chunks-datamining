/** Chunk was on 28965 **/
"use strict";
n.d(t, {
  Pv: () => u,
  _j: () => a,
  nm: () => c,
  xS: () => s
}), n(411104);
var r = n(200651);
n(192379);
var l = n(239091);

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function o(e, t) {
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

function u(e, t, u) {
  u.isGroupDM() ? (0, l.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("50506"), n.e("79695"), n.e("13351"), n.e("98783"), n.e("91344")]).then(n.bind(n, 354589));
    return n => (0, r.jsx)(e, o(i({}, n), {
      user: t,
      channel: u
    }))
  }) : u.isDM() ? (0, l.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("50506"), n.e("79695"), n.e("25292"), n.e("90508"), n.e("13351"), n.e("20875"), n.e("70205"), n.e("98783"), n.e("53912"), n.e("98254"), n.e("56826"), n.e("79912")]).then(n.bind(n, 131404));
    return n => (0, r.jsx)(e, o(i({}, n), {
      user: t,
      channel: u,
      showMute: !1,
      targetIsUser: !0
    }))
  }) : null != u.guild_id ? (0, l.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("50506"), n.e("79695"), n.e("13351"), n.e("98783"), n.e("97589"), n.e("7717"), n.e("49076")]).then(n.bind(n, 757387));
    return n => (0, r.jsx)(e, o(i({}, n), {
      user: t,
      channel: u,
      guildId: u.guild_id
    }))
  }) : (0, l.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("79695"), n.e("69220"), n.e("57673")]).then(n.bind(n, 881351));
    return n => (0, r.jsx)(e, o(i({}, n), {
      user: t
    }))
  })
}

function a(e, t) {
  var {
    user: u,
    channel: a,
    moderationAlertId: c,
    guildId: s
  } = t, d = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(t, ["user", "channel", "moderationAlertId", "guildId"]);
  if ((null == a ? void 0 : a.isGroupDM()) || (null == a ? void 0 : a.isDM())) throw Error("Cannot moderate user in DM or group DM");
  let f = null != s ? s : null == a ? void 0 : a.getGuildId();
  null != f && (0, l.jW)(e, async () => {
    let {
      default: e
    } = await n.e("16120").then(n.bind(n, 833737));
    return t => (0, r.jsx)(e, i(o(i({}, t), {
      user: u,
      channelId: null == a ? void 0 : a.id,
      guildId: f,
      moderationAlertId: c
    }), d))
  })
}

function c(e, t) {
  let {
    user: u,
    guildId: a,
    analyticsLocations: c,
    onCloseContextMenu: s,
    isViewOnly: d
  } = t;
  (0, l.jW)(e, async () => {
    let {
      default: e
    } = await n.e("45130").then(n.bind(n, 246389));
    return t => (0, r.jsx)(e, o(i({}, t), {
      user: u,
      guildId: a,
      analyticsLocations: c,
      onCloseContextMenu: s,
      isViewOnly: d
    }))
  })
}

function s(e, t, u) {
  null != u && (0, l.jW)(e, async () => {
    let {
      default: e
    } = await n.e("50331").then(n.bind(n, 158195));
    return t => (0, r.jsx)(e, o(i({}, t), {
      guildId: u
    }))
  })
}