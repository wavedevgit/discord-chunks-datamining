/** Chunk was on 44384 **/
/** chunk id: 619029, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk206835 = require("./206835.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk229527 = require("./229527.js"),
  Chunk81400 = require("./81400.js"),
  Chunk340837 = require("./340837.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx");

function I(e) {
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
}

function O(e, t) {
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

function N(e) {
  let {
    guildId: t,
    analyticsLocations: n
  } = e, [i, o] = (0, d.j8)({
    guildId: t,
    analyticsLocations: n
  }), a = o ? T.intl.string(T.t["6ndMcq"]) : T.intl.string(T.t["0eiu6J"]), s = o ? T.intl.string(T.t.S09nw4) : T.intl.string(T.t.tEttXd);
  return (0, r.jsxs)(l.$Td, {
    color: l.Hv$.DANGER,
    children: [a, (0, r.jsx)(l.zr9, {
      onClick: i,
      children: s
    })]
  })
}

function p() {
  let e = (0, s.A)({
    scrollPosition: A._F.GUILD_TAG
  });
  return (0, r.jsxs)(l.$Td, {
    color: l.Hv$.DANGER,
    children: [T.intl.string(T.t.Zqlecb), (0, r.jsx)(l.zr9, {
      onClick: e,
      children: T.intl.string(T.t.SJehVW)
    })]
  })
}

function R(e) {
  let {
    analyticsLocations: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["analyticsLocations"]), {
    analyticsLocations: l
  } = (0, a.Ay)(t, o.A.AUTOMOD_NAGBAR_NOTICE), s = (0, i.bG)([c.default, u.Ay], () => {
    if (null == n.guildId) return new Set;
    let e = c.default.getId();
    return (0, E.wj)(u.Ay.getMember(n.guildId, e))
  }, [n.guildId]);
  return s.has(_.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || s.has(_.D.AUTOMOD_QUARANTINED_BIO) ? (0, r.jsx)(N, O(I({}, n), {
    analyticsLocations: l
  })) : s.has(_.D.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, r.jsx)(p, {}) : (0, r.jsx)(N, O(I({}, n), {
    analyticsLocations: l
  }))
}