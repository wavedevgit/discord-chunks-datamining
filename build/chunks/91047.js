/** Chunk was on 94495 **/
n.d(t, {
  Pv: () => c,
  _j: () => l,
  nm: () => s,
  xS: () => d
}), n(415506);
var a = n(255367);
n(73800);
var i = n(239091);

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a
    })
  }
  return e
}

function r(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function c(e, t, c) {
  c.isGroupDM() ? (0, i.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("14006"), n.e("79695"), n.e("13351"), n.e("98783"), n.e("29331")]).then(n.bind(n, 354589));
    return n => (0, a.jsx)(e, r(o({}, n), {
      user: t,
      channel: c
    }))
  }) : c.isDM() ? (0, i.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("14006"), n.e("79695"), n.e("25292"), n.e("90508"), n.e("13351"), n.e("70205"), n.e("98783"), n.e("53912"), n.e("36084"), n.e("56826"), n.e("41829")]).then(n.bind(n, 131404));
    return n => (0, a.jsx)(e, r(o({}, n), {
      user: t,
      channel: c,
      showMute: !1,
      targetIsUser: !0
    }))
  }) : null != c.guild_id ? (0, i.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("14006"), n.e("79695"), n.e("13351"), n.e("98783"), n.e("97589"), n.e("7717"), n.e("32152")]).then(n.bind(n, 757387));
    return n => (0, a.jsx)(e, r(o({}, n), {
      user: t,
      channel: c,
      guildId: c.guild_id
    }))
  }) : (0, i.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("79695"), n.e("69220"), n.e("70686")]).then(n.bind(n, 881351));
    return n => (0, a.jsx)(e, r(o({}, n), {
      user: t
    }))
  })
}

function l(e, t) {
  var {
    user: c,
    channel: l,
    moderationAlertId: s,
    guildId: d
  } = t, u = function(e, t) {
    if (null == e) return {};
    var n, a, i = function(e, t) {
      if (null == e) return {};
      var n, a, i = {},
        o = Object.keys(e);
      for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (a = 0; a < o.length; a++) n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(t, ["user", "channel", "moderationAlertId", "guildId"]);
  if ((null == l ? void 0 : l.isGroupDM()) || (null == l ? void 0 : l.isDM())) throw Error("Cannot moderate user in DM or group DM");
  let m = null != d ? d : null == l ? void 0 : l.getGuildId();
  null != m && (0, i.jW)(e, async () => {
    let {
      default: e
    } = await n.e("16120").then(n.bind(n, 833737));
    return t => (0, a.jsx)(e, o(r(o({}, t), {
      user: c,
      channelId: null == l ? void 0 : l.id,
      guildId: m,
      moderationAlertId: s
    }), u))
  })
}

function s(e, t) {
  let {
    user: c,
    guildId: l,
    analyticsLocations: s,
    onCloseContextMenu: d,
    isViewOnly: u
  } = t;
  (0, i.jW)(e, async () => {
    let {
      default: e
    } = await n.e("45130").then(n.bind(n, 246389));
    return t => (0, a.jsx)(e, r(o({}, t), {
      user: c,
      guildId: l,
      analyticsLocations: s,
      onCloseContextMenu: d,
      isViewOnly: u
    }))
  })
}

function d(e, t, c) {
  null != c && (0, i.jW)(e, async () => {
    let {
      default: e
    } = await n.e("50331").then(n.bind(n, 158195));
    return t => (0, a.jsx)(e, r(o({}, t), {
      guildId: c
    }))
  })
}