/** Chunk was on 50737 **/
/** chunk id: 258871, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk554747 = require("./554747.js"),
  Chunk434479 = require("./434479.jsx"),
  Chunk593364 = require("./593364.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk944486 = require("./944486.js"),
  Chunk147754 = require("./147754.js"),
  Chunk688438 = require("./688438.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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
let O = [{
    key: "EVENTS",
    renderIcon: e => (0, r.jsx)(o.Que, {
      size: "md",
      color: "currentColor",
      className: e
    }),
    getName: e => {
      let {
        numEvents: t
      } = e;
      return t > 0 ? g.intl.formatToPlainString(g.t.IBdqSk, {
        number: t
      }) : g.intl.string(g.t.tlopTE)
    },
    handler: e => (0, o.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("22347"), n.e("56236"), n.e("25688")]).then(n.bind(n, 17671));
      return n => (0, r.jsx)(t, b(m({}, n), {
        guildId: e.id
      }))
    })
  }, {
    key: "JOIN_SERVERS",
    renderIcon: e => (0, r.jsx)(o.Jmo, {
      size: "md",
      color: "currentColor",
      className: e
    }),
    getName: () => Chunk388032.intl.string(Chunk388032.t.K50GHR),
    handler: (e, t) => (0, u.XU)(e.id, t.id)
  }, {
    key: "ADD_SERVERS",
    renderIcon: e => (0, r.jsx)(o.qJs, {
      size: "md",
      color: "currentColor",
      className: e
    }),
    getName: () => Chunk388032.intl.string(Chunk388032.t.emRpdX),
    handler: (e, t) => (0, o.ZDy)(async () => {
      let {
        default: i
      } = await n.e("79764").then(n.bind(n, 533202));
      return n => (0, r.jsx)(i, b(m({}, n), {
        directoryGuildName: e.name,
        directoryGuildId: e.id,
        directoryChannelId: t.id
      }))
    })
  }, {
    key: "INVITE_MEMBERS",
    renderIcon: e => (0, r.jsx)(o.ejJ, {
      className: e
    }),
    getName: () => Chunk388032.intl.string(Chunk388032.t.MJQOuL),
    handler: (e, t) => (0, o.ZDy)(async () => {
      let {
        default: i
      } = await Promise.all([n.e("7654"), n.e("54833")]).then(n.bind(n, 560114));
      return n => (0, r.jsx)(i, b(m({}, n), {
        guild: e,
        channel: t,
        source: h.t4x.HUB_SIDEBAR
      }))
    })
  }],
  _ = e => {
    let {
      guild: t,
      channel: n
    } = e, o = (0, a.ZP)(t.id);
    i.useEffect(() => {
      p.Z.trackExposure({
        guildId: t.id,
        location: "543af8_1"
      })
    }, [t.id]);
    let {
      showHubEventsList: u
    } = p.Z.useExperiment({
      guildId: t.id,
      location: "543af8_2"
    }, {
      autoTrackExposure: false
    }), h = (0, l.e7)([d.Z], () => null != n && d.Z.getChannelId() === n.id), g = i.useMemo(() => ({
      numEvents: o.length
    }), [o.length]), m = (0, f.t)(n);
    return (0, r.jsx)(r.Fragment, {
      children: O.map(e => {
        let {
          key: i,
          getName: l,
          handler: o,
          renderIcon: a
        } = e;
        if (!u && "EVENTS" === i) return null;
        let d = "".concat(i, "-").concat(t.id);
        return (0, r.jsx)(s.m, {
          id: d,
          renderIcon: a,
          text: l(g),
          selected: h && "JOIN_SERVERS" === i,
          onClick: null != n ? () => o(t, n) : true,
          trailing: "JOIN_SERVERS" === i && m > 0 ? (0, c.N)(m) : null
        }, d)
      })
    })
  }