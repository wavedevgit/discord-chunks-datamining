/** Chunk was on 1272 **/
/** chunk id: 555927, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./539854.js"), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    sourceAnalyticsLocations: f
  } = e, g = [];
  for (let {
      user: e,
      status: n
    }
    of t) g.push((0, r.jsx)(l.sNh, {
    id: e.id,
    keepItemStyles: true,
    render: t => (0, r.jsx)(o.Z, d(u({}, t), {
      user: e,
      status: n,
      guildId: p
    })),
    action: () => (0, s.openUserProfileModal)({
      userId: e.id,
      guildId: p,
      sourceAnalyticsLocations: f
    })
  }));
  for (let e of n) g.push((0, r.jsx)(l.sNh, {
    id: e.id,
    keepItemStyles: true,
    render: t => (0, r.jsx)(o.Z, d(u({}, t), {
      user: e,
      guildId: p
    })),
    action: () => (0, s.openUserProfileModal)({
      userId: e.id,
      guildId: p,
      sourceAnalyticsLocations: f
    })
  }));
  let h = i - g.length;
  return h > 0 && g.push((0, r.jsx)(l.sNh, {
    id: "unknown-members-".concat(null == a ? true : a.session_id),
    render: e => (0, r.jsx)(o.Y, d(u({}, e), {
      label: c.intl.formatToPlainString(c.t["6Kqn9M"], {
        count: h
      })
    }))
  })), g
}

function f(e) {
  let {
    priorityMembers: t,
    partiedMembers: n,
    currentActivities: s,
    guildContext: o
  } = e, u = new Set(t.map(e => {
    let {
      user: t
    } = e;
    return t.id
  })), d = n.filter(e => !u.has(e.id)), {
    analyticsLocations: f
  } = (0, a.ZP)(), g = i.useMemo(() => {
    let e = s.flatMap(e => {
      let {
        playingMembers: t
      } = e;
      return t
    }).map(e => e.id);
    return n.filter(t => !e.includes(t.id))
  }, [n, s]);
  if (s.length <= 1 && 0 === g.length) {
    var h, m;
    return (0, r.jsx)(l.kSQ, {
      label: n.length > 1 ? c.intl.formatToPlainString(c.t.C4WXvc, {
        memberCount: n.length
      }) : true,
      children: p({
        priorityMembers: t,
        otherMembers: d,
        totalMembers: n.length,
        activity: null != (m = null == (h = s[0]) ? true : h.activity) ? m : true,
        guildId: null == o ? true : o.id,
        sourceAnalyticsLocations: f
      })
    })
  }
  let b = s.map((e, n) => {
      let {
        playingMembers: i,
        game: a,
        activity: s
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
          activity: null != s ? s : true,
          guildId: null == o ? true : o.id,
          sourceAnalyticsLocations: f
        })
      }, n)
    }),
    E = g.map(e => e.id);
  return [...b, (0, r.jsx)(l.kSQ, {
    label: "".concat(c.intl.string(c.t["mIx+gG"]), " - ").concat(g.length),
    children: p({
      priorityMembers: t.filter(e => {
        let {
          user: t
        } = e;
        return E.includes(t.id)
      }),
      otherMembers: g.filter(e => !u.has(e.id)),
      totalMembers: g.length,
      guildId: null == o ? true : o.id,
      sourceAnalyticsLocations: f
    })
  })]
}