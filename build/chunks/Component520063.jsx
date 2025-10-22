/** Chunk was on 70675 **/
/** chunk id: 520063, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function m(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function p(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function h(e, n, h) {
  let j = i.useMemo(() => ({
    [n]: [e.id]
  }), [n, e.id]);
  (0, u.$)(j, "useThreadAdminActionItems"), (0, r.e7)([f.Z], () => f.Z.getGuildVersion(n), [n]);
  let P = (0, r.e7)([g.Z], () => g.Z.getChannel(h)),
    v = (0, r.e7)([Z.Z], () => Z.Z.getGuild(n), [n]),
    x = (0, r.e7)([b.default], () => b.default.getCurrentUser()),
    y = (0, o.Z)(P, "Context Menu"),
    N = (0, c.yw)(null == P ? true : P.id);
  return (null == x ? true : x.id) === e.id ? [y] : null == v || null == P || null == x ? [] : [N ? (0, l.jsx)(a.sNh, {
    id: "remove",
    label: P.isForumPost() ? O.intl.formatToPlainString(O.t.v2KNNx, {
      user: e.username
    }) : O.intl.formatToPlainString(O.t["27xWaT"], {
      user: e.username
    }),
    color: "danger",
    action: () => d.Z.removeMember(P.id, e.id, "Context Menu")
  }) : null, (0, s.BK)(e, v) ? (0, l.jsx)(a.sNh, {
    id: "kick",
    label: N ? O.intl.formatToPlainString(O.t["1Ie87p"], {
      user: e.username
    }) : O.intl.formatToPlainString(O.t["9l/iTS"], {
      user: e.username
    }),
    color: "danger",
    action: () => (0, a.ZDy)(async () => {
      let {
        default: n
      } = await t.e("36760").then(t.bind(t, 854360));
      return t => (0, l.jsx)(n, p(m({}, t), {
        guildId: v.id,
        user: e
      }))
    })
  }) : null, (0, s.mm)(e, v) ? (0, l.jsx)(a.sNh, {
    id: "ban",
    label: N ? O.intl.formatToPlainString(O.t.i62APf, {
      user: e.username
    }) : O.intl.formatToPlainString(O.t.WnpUBi, {
      user: e.username
    }),
    color: "danger",
    action: () => (0, a.ZDy)(async () => {
      let {
        default: n
      } = await t.e("43350").then(t.bind(t, 98746));
      return t => (0, l.jsx)(n, p(m({}, t), {
        guildId: v.id,
        user: e
      }))
    })
  }) : null]
}