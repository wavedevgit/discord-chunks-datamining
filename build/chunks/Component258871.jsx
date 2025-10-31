/** Chunk was on 56710 **/
/** chunk id: 258871, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434479 = require("./434479.jsx"),
  Chunk593364 = require("./593364.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk944486 = require("./944486.js"),
  Chunk688438 = require("./688438.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
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

function f(e, t) {
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
let g = [{
    key: "JOIN_SERVERS",
    renderIcon: e => (0, r.jsx)(l.Jmo, {
      size: "md",
      color: "currentColor",
      className: e
    }),
    getName: () => Chunk388032.intl.string(Chunk388032.t.K50GHd),
    handler: (e, t) => (0, s.XU)(e.id, t.id)
  }, {
    key: "ADD_SERVERS",
    renderIcon: e => (0, r.jsx)(l.qJs, {
      size: "md",
      color: "currentColor",
      className: e
    }),
    getName: () => Chunk388032.intl.string(Chunk388032.t.emRpdS),
    handler: (e, t) => (0, l.ZDy)(async () => {
      let {
        default: i
      } = await n.e("79764").then(n.bind(n, 533202));
      return n => (0, r.jsx)(i, f(h({}, n), {
        directoryGuildName: e.name,
        directoryGuildId: e.id,
        directoryChannelId: t.id
      }))
    })
  }, {
    key: "INVITE_MEMBERS",
    renderIcon: e => (0, r.jsx)(l.ejJ, {
      className: e
    }),
    getName: () => Chunk388032.intl.string(Chunk388032.t.MJQOuJ),
    handler: (e, t) => (0, l.ZDy)(async () => {
      let {
        default: i
      } = await Promise.all([n.e("7654"), n.e("89772")]).then(n.bind(n, 560114));
      return n => (0, r.jsx)(i, f(h({}, n), {
        guild: e,
        channel: t,
        source: d.t4x.HUB_SIDEBAR
      }))
    })
  }],
  m = e => {
    let {
      guild: t,
      channel: n
    } = e, l = (0, i.e7)([c.Z], () => null != n && c.Z.getChannelId() === n.id), s = (0, u.t)(n);
    return (0, r.jsx)(r.Fragment, {
      children: g.map(e => {
        let {
          key: i,
          getName: c,
          handler: u,
          renderIcon: d
        } = e, p = "".concat(i, "-").concat(t.id);
        return (0, r.jsx)(o.m, {
          id: p,
          renderIcon: d,
          text: c(),
          selected: l && "JOIN_SERVERS" === i,
          onClick: null != n ? () => u(t, n) : true,
          trailing: "JOIN_SERVERS" === i && s > 0 ? (0, a.N)(s) : null
        }, p)
      })
    })
  }