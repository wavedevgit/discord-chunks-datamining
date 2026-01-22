/** Chunk was on 97492 **/
/** chunk id: 530484, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk826673 = require("./826673.js"),
  Chunk508654 = require("./508654.js"),
  Chunk222823 = require("./222823.js"),
  Chunk543465 = require("./543465.js"),
  Chunk652793 = require("./652793.jsx"),
  Chunk790782 = require("./790782.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk811094 = require("./811094.js");

function g(e) {
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

function m(e, t) {
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

function A(e) {
  let {
    guild: t,
    selected: A
  } = e, {
    hasUnread: y,
    mentionCount: O
  } = (0, l.cf)([u.Ay], () => ({
    hasUnread: u.Ay.hasUnread(t.id, p.P.GUILD_EVENT),
    mentionCount: u.Ay.getMentionCount(t.id, p.P.GUILD_EVENT)
  }), [t.id]), j = (0, l.bG)([d.Ay], () => d.Ay.isMuteScheduledEventsEnabled(t.id));
  async function v() {
    await (0, a.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("26589"), n.e("7453"), n.e("90041")]).then(n.bind(n, 926956));
      return n => (0, r.jsx)(e, m(g({}, n), {
        guildId: t.id
      }))
    }), (0, o.Dr)(i.M.GUILD_HEADER_EVENT_UPSELL)
  }
  let x = (0, c.Ay)(t.id),
    E = x.length > 0 ? h.intl.formatToPlainString(h.t.IBdqSu, {
      number: x.length
    }) : h.intl.string(h.t.tlopTM);
  return (0, r.jsx)(f.G, {
    id: "upcoming-events-".concat(t.id),
    renderIcon: e => (0, r.jsx)(a.CTc, {
      size: "md",
      color: "currentColor",
      className: e
    }),
    text: E,
    selected: A,
    onClick: v,
    onContextMenu: e => {
      (0, s.L3)(e, async () => {
        let {
          default: e
        } = await n.e("71742").then(n.bind(n, 502029));
        return n => (0, r.jsx)(e, m(g({}, n), {
          guildId: t.id
        }))
      })
    },
    showUnread: y && !j,
    trailing: !j && O > 0 ? (0, r.jsx)(a.hVq, {
      className: b.Do,
      disableColor: true,
      count: O
    }) : null
  })
}