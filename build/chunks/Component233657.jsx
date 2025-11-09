/** Chunk was on 94709 **/
/** chunk id: 233657, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk266454 = require("./266454.js"),
  Chunk554747 = require("./554747.js"),
  Chunk306680 = require("./306680.js"),
  Chunk9156 = require("./9156.js"),
  Chunk434479 = require("./434479.jsx"),
  Chunk490897 = require("./490897.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk516966 = require("./516966.js");

function m(e) {
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

function b(e, t) {
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

function _(e) {
  let {
    guild: t,
    selected: _
  } = e, {
    hasUnread: y,
    mentionCount: O
  } = (0, i.cj)([u.ZP], () => ({
    hasUnread: u.ZP.hasUnread(t.id, h.W.GUILD_EVENT),
    mentionCount: u.ZP.getMentionCount(t.id, h.W.GUILD_EVENT)
  }), [t.id]), v = (0, i.e7)([d.ZP], () => d.ZP.isMuteScheduledEventsEnabled(t.id));
  async function j() {
    await (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("4096"), n.e("56236"), n.e("5836")]).then(n.bind(n, 17671));
      return n => (0, r.jsx)(e, b(m({}, n), {
        guildId: t.id
      }))
    }), (0, s.Q3)(l.z.GUILD_HEADER_EVENT_UPSELL)
  }
  let x = (0, c.ZP)(t.id),
    C = x.length > 0 ? f.intl.formatToPlainString(f.t.IBdqSu, {
      number: x.length
    }) : f.intl.string(f.t.tlopTM);
  return (0, r.jsx)(p.m, {
    id: "upcoming-events-".concat(t.id),
    renderIcon: e => (0, r.jsx)(o.Que, {
      size: "md",
      color: "currentColor",
      className: e
    }),
    text: C,
    selected: _,
    onClick: j,
    onContextMenu: e => {
      (0, a.jW)(e, async () => {
        let {
          default: e
        } = await n.e("95307").then(n.bind(n, 867757));
        return n => (0, r.jsx)(e, b(m({}, n), {
          guildId: t.id
        }))
      })
    },
    showUnread: y && !v,
    trailing: !v && O > 0 ? (0, r.jsx)(o.mAB, {
      className: g.numberBadge,
      disableColor: true,
      count: O
    }) : null
  })
}