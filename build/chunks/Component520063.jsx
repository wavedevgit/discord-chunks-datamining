/** Chunk was on 70675 **/
/** chunk id: 520063, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk616780 = require("./616780.js"),
  Chunk438536 = require("./438536.jsx"),
  Chunk946273 = require("./946273.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
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
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e, t, P) {
  let m = r.useMemo(() => ({
    [t]: [e.id]
  }), [t, e.id]);
  (0, a.$)(m, "useThreadAdminActionItems"), (0, i.e7)([f.Z], () => f.Z.getGuildVersion(t), [t]);
  let j = (0, i.e7)([Z.Z], () => Z.Z.getChannel(P)),
    y = (0, i.e7)([g.Z], () => g.Z.getGuild(t), [t]),
    E = (0, i.e7)([b.default], () => b.default.getCurrentUser()),
    N = (0, s.Z)(j, "Context Menu"),
    v = (0, c.yw)(null == j ? true : j.id);
  return (null == E ? true : E.id) === e.id ? [N] : null == y || null == j || null == E ? [] : [v ? (0, l.jsx)(o.sNh, {
    id: "remove",
    label: j.isForumPost() ? O.intl.formatToPlainString(O.t.v2KNNx, {
      user: e.username
    }) : O.intl.formatToPlainString(O.t["27xWaT"], {
      user: e.username
    }),
    color: "danger",
    action: () => d.Z.removeMember(j.id, e.id, "Context Menu")
  }) : null, (0, u.BK)(e, y) ? (0, l.jsx)(o.sNh, {
    id: "kick",
    label: v ? O.intl.formatToPlainString(O.t["1Ie87p"], {
      user: e.username
    }) : O.intl.formatToPlainString(O.t["9l/iTS"], {
      user: e.username
    }),
    color: "danger",
    action: () => (0, o.ZDy)(async () => {
      let {
        default: t
      } = await n.e("76826").then(n.bind(n, 495494));
      return n => (0, l.jsx)(t, p(h({}, n), {
        guildId: y.id,
        user: e
      }))
    })
  }) : null, (0, u.mm)(e, y) ? (0, l.jsx)(o.sNh, {
    id: "ban",
    label: v ? O.intl.formatToPlainString(O.t.i62APf, {
      user: e.username
    }) : O.intl.formatToPlainString(O.t.WnpUBi, {
      user: e.username
    }),
    color: "danger",
    action: () => (0, o.ZDy)(async () => {
      let {
        default: t
      } = await n.e("10533").then(n.bind(n, 497880));
      return n => (0, l.jsx)(t, p(h({}, n), {
        guildId: y.id,
        user: e
      }))
    })
  }) : null]
}