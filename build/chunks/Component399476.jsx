/** Chunk was on web.js **/
/** chunk id: 399476, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk49229 = require("./49229.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    user: t,
    guildId: d,
    channelId: p,
    onBlock: h,
    onIgnore: m,
    onUnignore: g,
    location: E = "ContextMenu",
    appContext: y = c.BRT.APP
  } = e, {
    id: b
  } = t, O = (0, i.bG)([l.default], () => {
    var e;
    return (null == (e = l.default.getCurrentUser()) ? true : e.id) === b
  }, [b]), {
    isIgnored: v,
    isBlocked: A
  } = (0, i.cf)([o.A], () => ({
    isIgnored: o.A.isIgnored(b),
    isBlocked: o.A.isBlocked(b)
  }), [b]);
  return O || A ? null : (0, r.jsx)(a.Drp, {
    id: "ignore",
    color: "default",
    label: v ? u.intl.string(u.t["8wXU9B"]) : u.intl.string(u.t.ytCpKs),
    action: v ? () => {
      null == g || g(), s.A.unignoreUser(b, null != E ? E : "use-ignore-user-item-web", null != p ? p : true)
    } : () => {
      (0, a.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("28969"), n.e("45714")]).then(n.bind(n, 143547));
        return n => (0, r.jsx)(e, _(f({}, n), {
          guildId: d,
          channelId: p,
          user: t,
          onIgnore: m,
          onBlock: h,
          location: E
        }))
      }, {
        contextKey: (0, a.TId)(y)
      })
    }
  })
}