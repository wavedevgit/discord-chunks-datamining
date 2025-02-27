/** Chunk was on 87668 **/
"use strict";
n.d(t, {
  Pv: () => a,
  _j: () => l,
  nm: () => d,
  xS: () => s
}), n(411104);
var r = n(200651);
n(192379);
var o = n(239091);

function c(e) {
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

function i(e, t) {
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

function a(e, t, a) {
  a.isGroupDM() ? (0, o.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("50506"), n.e("79695"), n.e("13351"), n.e("98783"), n.e("1846")]).then(n.bind(n, 354589));
    return n => (0, r.jsx)(e, i(c({}, n), {
      user: t,
      channel: a
    }))
  }) : a.isDM() ? (0, o.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("50506"), n.e("79695"), n.e("25292"), n.e("90508"), n.e("13351"), n.e("70205"), n.e("98783"), n.e("98254"), n.e("56826"), n.e("17409")]).then(n.bind(n, 131404));
    return n => (0, r.jsx)(e, i(c({}, n), {
      user: t,
      channel: a,
      showMute: !1,
      targetIsUser: !0
    }))
  }) : null != a.guild_id ? (0, o.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("50506"), n.e("79695"), n.e("13351"), n.e("98783"), n.e("97589"), n.e("7717"), n.e("12612")]).then(n.bind(n, 757387));
    return n => (0, r.jsx)(e, i(c({}, n), {
      user: t,
      channel: a,
      guildId: a.guild_id
    }))
  }) : (0, o.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("79695"), n.e("69220"), n.e("65593")]).then(n.bind(n, 881351));
    return n => (0, r.jsx)(e, i(c({}, n), {
      user: t
    }))
  })
}

function l(e, t) {
  var {
    user: a,
    channel: l,
    moderationAlertId: d,
    guildId: s
  } = t, u = function(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        c = Object.keys(e);
      for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(e);
      for (r = 0; r < c.length; r++) n = c[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }(t, ["user", "channel", "moderationAlertId", "guildId"]);
  if ((null == l ? void 0 : l.isGroupDM()) || (null == l ? void 0 : l.isDM())) throw Error("Cannot moderate user in DM or group DM");
  let _ = null != s ? s : null == l ? void 0 : l.getGuildId();
  null != _ && (0, o.jW)(e, async () => {
    let {
      default: e
    } = await n.e("16120").then(n.bind(n, 833737));
    return t => (0, r.jsx)(e, c(i(c({}, t), {
      user: a,
      channelId: null == l ? void 0 : l.id,
      guildId: _,
      moderationAlertId: d
    }), u))
  })
}

function d(e, t) {
  let {
    user: a,
    guildId: l,
    analyticsLocations: d,
    onCloseContextMenu: s,
    isViewOnly: u
  } = t;
  (0, o.jW)(e, async () => {
    let {
      default: e
    } = await n.e("45130").then(n.bind(n, 246389));
    return t => (0, r.jsx)(e, i(c({}, t), {
      user: a,
      guildId: l,
      analyticsLocations: d,
      onCloseContextMenu: s,
      isViewOnly: u
    }))
  })
}

function s(e, t, a) {
  null != a && (0, o.jW)(e, async () => {
    let {
      default: e
    } = await n.e("50331").then(n.bind(n, 158195));
    return t => (0, r.jsx)(e, i(c({}, t), {
      guildId: a
    }))
  })
}