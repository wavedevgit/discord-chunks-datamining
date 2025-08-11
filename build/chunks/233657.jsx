/** Chunk was on 34779 **/
/** chunk id: 233657, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk266454 = require("./266454.js"),
  Chunk554747 = require("./554747.js"),
  Chunk306680 = require("./306680.js"),
  Chunk9156 = require("./9156.js"),
  Chunk434479 = require("./434479.js"),
  Chunk490897 = require("./490897.js"),
  Chunk388032 = require("./388032.js"),
  Chunk768107 = require("./768107.js");

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

function O(e) {
  let {
    guild: t,
    selected: O
  } = e, {
    hasUnread: _,
    mentionCount: y
  } = (0, i.cj)([u.ZP], () => ({
    hasUnread: u.ZP.hasUnread(t.id, p.W.GUILD_EVENT),
    mentionCount: u.ZP.getMentionCount(t.id, p.W.GUILD_EVENT)
  }), [t.id]), C = (0, i.e7)([d.ZP], () => d.ZP.isMuteScheduledEventsEnabled(t.id));
  async function v() {
    await (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("22347"), n.e("56236"), n.e("80650")]).then(n.bind(n, 17671));
      return n => <e{...b(m({}, n), {
        guildId: t.id
      })} />
    }), (0, a.Q3)(l.z.GUILD_HEADER_EVENT_UPSELL)
  }
  let j = (0, c.ZP)(t.id),
    E = j.length > 0 ? f.intl.formatToPlainString(f.t.IBdqSk, {
      number: j.length
    }) : f.intl.string(f.t.tlopTE);
  return <h.m id={"upcoming-events-".concat(t.id)} renderIcon={e => (0, r.jsx)(o.Que, {
      size: "md",
      color: "currentColor",
      className: e
    })} text={E} selected={O} onClick={v} onContextMenu={e => {
      (0, s.jW)(e, async () => {
        let {
          default: e
        } = await n.e("95307").then(n.bind(n, 867757));
        return n => (0, r.jsx)(e, b(m({}, n), {
          guildId: t.id
        }))
      })
    }} showUnread={_ && !C} trailing={!C && y > 0 ? (0, r.jsx)(o.mAB, {
      className: g.numberBadge,
      disableColor: true,
      count: y
    }) : null} />
}