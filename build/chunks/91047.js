/** Chunk was on 79887 **/
"use strict";
r.d(t, {
  Pv: () => u,
  _j: () => c,
  nm: () => a,
  xS: () => s
}), r(415506);
var n = r(200651);
r(192379);
var l = r(239091);

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function i(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function u(e, t, u) {
  u.isGroupDM() ? (0, l.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([r.e("94342"), r.e("26881"), r.e("13351"), r.e("4040"), r.e("60677"), r.e("58450")]).then(r.bind(r, 354589));
    return r => (0, n.jsx)(e, i(o({}, r), {
      user: t,
      channel: u
    }))
  }) : u.isDM() ? (0, l.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([r.e("94342"), r.e("26881"), r.e("25292"), r.e("90508"), r.e("13351"), r.e("20875"), r.e("70205"), r.e("4040"), r.e("53912"), r.e("98254"), r.e("56826"), r.e("74295")]).then(r.bind(r, 131404));
    return r => (0, n.jsx)(e, i(o({}, r), {
      user: t,
      channel: u,
      showMute: !1,
      targetIsUser: !0
    }))
  }) : null != u.guild_id ? (0, l.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([r.e("94342"), r.e("26881"), r.e("13351"), r.e("4040"), r.e("98693"), r.e("7717"), r.e("87918")]).then(r.bind(r, 757387));
    return r => (0, n.jsx)(e, i(o({}, r), {
      user: t,
      channel: u,
      guildId: u.guild_id
    }))
  }) : (0, l.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([r.e("26881"), r.e("69220"), r.e("79075")]).then(r.bind(r, 881351));
    return r => (0, n.jsx)(e, i(o({}, r), {
      user: t
    }))
  })
}

function c(e, t) {
  var {
    user: u,
    channel: c,
    moderationAlertId: a,
    guildId: s
  } = t, d = function(e, t) {
    if (null == e) return {};
    var r, n, l = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
    }
    return l
  }(t, ["user", "channel", "moderationAlertId", "guildId"]);
  if ((null == c ? void 0 : c.isGroupDM()) || (null == c ? void 0 : c.isDM())) throw Error("Cannot moderate user in DM or group DM");
  let f = null != s ? s : null == c ? void 0 : c.getGuildId();
  null != f && (0, l.jW)(e, async () => {
    let {
      default: e
    } = await r.e("16120").then(r.bind(r, 833737));
    return t => (0, n.jsx)(e, o(i(o({}, t), {
      user: u,
      channelId: null == c ? void 0 : c.id,
      guildId: f,
      moderationAlertId: a
    }), d))
  })
}

function a(e, t) {
  let {
    user: u,
    guildId: c,
    analyticsLocations: a,
    onCloseContextMenu: s,
    isViewOnly: d
  } = t;
  (0, l.jW)(e, async () => {
    let {
      default: e
    } = await r.e("45130").then(r.bind(r, 246389));
    return t => (0, n.jsx)(e, i(o({}, t), {
      user: u,
      guildId: c,
      analyticsLocations: a,
      onCloseContextMenu: s,
      isViewOnly: d
    }))
  })
}

function s(e, t, u) {
  null != u && (0, l.jW)(e, async () => {
    let {
      default: e
    } = await r.e("50331").then(r.bind(r, 158195));
    return t => (0, n.jsx)(e, i(o({}, t), {
      guildId: u
    }))
  })
}