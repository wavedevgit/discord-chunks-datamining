/** Chunk was on 94682 **/
/** chunk id: 685049, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => f,
  o: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk562153 = require("./562153.js"),
  Chunk415043 = require("./415043.jsx"),
  Chunk617086 = require("./617086.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk418061 = require("./418061.js");

function d(e) {
  let {
    applicationId: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["applicationId"]), l = (0, s.A)(t);
  return l.length > 0 ? (0, r.jsx)(o.A, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    label: c.intl.formatToPlainString(c.t.ujhJdG, {
      numFriends: l.length
    }),
    users: l,
    maxUsers: 4
  }, n)) : null
}

function f(e) {
  var t, n, d;
  let f, {
      userId: p,
      applicationId: g,
      guildId: m,
      channelId: b,
      className: y
    } = e,
    O = (0, s.A)(g),
    j = O.length > 0,
    x = (t = O, n = m, d = b, f = t.slice(0, 3).map(e => a.Ay.getName(n, d, e)), 1 === t.length ? c.intl.formatToPlainString(c.t.FURqTU, {
      name: f[0]
    }) : 2 === t.length ? c.intl.formatToPlainString(c.t["08Usu/"], {
      name1: f[0],
      name2: f[1]
    }) : 3 === t.length ? c.intl.formatToPlainString(c.t.NTYHag, {
      name1: f[0],
      name2: f[1],
      name3: f[2]
    }) : c.intl.formatToPlainString(c.t["i/5oAn"], {
      name1: f[0],
      name2: f[1],
      name3: f[2],
      numPeople: t.length - 3
    })),
    h = (0, i.A)({
      location: "SocialProofButton",
      applicationId: g,
      source: l.Ob.UserProfile,
      sourceUserId: p,
      trackEntryPointImpression: true
    });
  return j && null != h ? (0, r.jsx)(o.H, {
    users: O,
    label: x,
    className: y,
    onClick: h,
    guildId: m,
    channelId: b,
    "aria-label": x,
    overflowCountColor: "text-strong",
    overflowCountClassName: u.L
  }) : null
}