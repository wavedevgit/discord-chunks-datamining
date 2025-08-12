/** Chunk was on 1272 **/
/** chunk id: 555927, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./539854.js"), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk841710 = require("./841710.jsx"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
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

function d(e, t) {
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

function p(e) {
  let {
    priorityMembers: t,
    otherMembers: n,
    totalMembers: i,
    activity: a,
    guildId: p,
    sourceAnalyticsLocations: h
  } = e, f = [];
  for (let {
      user: e,
      status: n
    }
    of t) f.push((0, r.jsx)(l.sNh, {
    id: e.id,
    keepItemStyles: true,
    render: t => (0, r.jsx)(s.Z, d(u({}, t), {
      user: e,
      status: n,
      guildId: p
    })),
    action: () => (0, o.openUserProfileModal)({
      userId: e.id,
      guildId: p,
      sourceAnalyticsLocations: h
    })
  }));
  for (let e of n) f.push((0, r.jsx)(l.sNh, {
    id: e.id,
    keepItemStyles: true,
    render: t => (0, r.jsx)(s.Z, d(u({}, t), {
      user: e,
      guildId: p
    })),
    action: () => (0, o.openUserProfileModal)({
      userId: e.id,
      guildId: p,
      sourceAnalyticsLocations: h
    })
  }));
  let g = i - f.length;
  return g > 0 && f.push((0, r.jsx)(l.sNh, {
    id: "unknown-members-".concat(null == a ? true : a.session_id),
    render: e => (0, r.jsx)(s.Y, d(u({}, e), {
      label: c.intl.formatToPlainString(c.t["6Kqn9P"], {
        count: g
      })
    }))
  })), f
}

function h(e) {
  let {
    priorityMembers: t,
    partiedMembers: n,
    currentActivities: o,
    guildContext: s
  } = e, u = new Set(t.map(e => {
    let {
      user: t
    } = e;
    return t.id
  })), d = n.filter(e => !u.has(e.id)), {
    analyticsLocations: h
  } = (0, a.ZP)(), f = i.useMemo(() => {
    let e = o.flatMap(e => {
      let {
        playingMembers: t
      } = e;
      return t
    }).map(e => e.id);
    return n.filter(t => !e.includes(t.id))
  }, [n, o]);
  if (o.length <= 1 && 0 === f.length) {
    var g, m;
    return (0, r.jsx)(l.kSQ, {
      label: n.length > 1 ? c.intl.formatToPlainString(c.t.C4WXvb, {
        memberCount: n.length
      }) : true,
      children: p({
        priorityMembers: t,
        otherMembers: d,
        totalMembers: n.length,
        activity: null != (m = null == (g = o[0]) ? true : g.activity) ? m : true,
        guildId: null == s ? true : s.id,
        sourceAnalyticsLocations: h
      })
    })
  }
  let b = o.map((e, n) => {
      let {
        playingMembers: i,
        game: a,
        activity: o
      } = e, c = new Set(i.map(e => e.id));
      return (0, r.jsx)(l.kSQ, {
        label: "".concat(a.name, " - ").concat(i.length),
        children: p({
          priorityMembers: t.filter(e => {
            let {
              user: t
            } = e;
            return c.has(t.id)
          }),
          otherMembers: i.filter(e => !u.has(e.id)),
          totalMembers: i.length,
          activity: null != o ? o : true,
          guildId: null == s ? true : s.id,
          sourceAnalyticsLocations: h
        })
      }, n)
    }),
    _ = f.map(e => e.id);
  return [...b, (0, r.jsx)(l.kSQ, {
    label: "".concat(c.intl.string(c.t["mIx+gI"]), " - ").concat(f.length),
    children: p({
      priorityMembers: t.filter(e => {
        let {
          user: t
        } = e;
        return _.includes(t.id)
      }),
      otherMembers: f.filter(e => !u.has(e.id)),
      totalMembers: f.length,
      guildId: null == s ? true : s.id,
      sourceAnalyticsLocations: h
    })
  })]
}