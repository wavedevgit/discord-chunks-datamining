/** Chunk was on 21738 **/
/** chunk id: 70856, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./321073.js"), require("./896048.js"), require("./114821.js"), require("./339614.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk129831 = require("./129831.jsx"),
  Chunk985018 = require("./985018.jsx");

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
    of t) f.push((0, r.jsx)(l.Drp, {
    id: e.id,
    keepItemStyles: true,
    render: t => (0, r.jsx)(o.A, d(u({}, t), {
      user: e,
      status: n,
      guildId: p
    })),
    action: () => (0, s.openUserProfileModal)({
      userId: e.id,
      guildId: p,
      sourceAnalyticsLocations: h
    })
  }));
  for (let e of n) f.push((0, r.jsx)(l.Drp, {
    id: e.id,
    keepItemStyles: true,
    render: t => (0, r.jsx)(o.A, d(u({}, t), {
      user: e,
      guildId: p
    })),
    action: () => (0, s.openUserProfileModal)({
      userId: e.id,
      guildId: p,
      sourceAnalyticsLocations: h
    })
  }));
  let g = i - f.length;
  return g > 0 && f.push((0, r.jsx)(l.Drp, {
    id: "unknown-members-".concat(null == a ? true : a.session_id),
    render: e => (0, r.jsx)(o.x, d(u({}, e), {
      label: c.intl.formatToPlainString(c.t["6Kqn9M"], {
        count: g
      })
    }))
  })), f
}

function h(e) {
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
    analyticsLocations: h
  } = (0, a.Ay)(), f = i.useMemo(() => {
    let e = s.flatMap(e => {
      let {
        playingMembers: t
      } = e;
      return t
    }).map(e => e.id);
    return n.filter(t => !e.includes(t.id))
  }, [n, s]);
  if (s.length <= 1 && 0 === f.length) {
    var g, m;
    return (0, r.jsx)(l.rXV, {
      label: n.length > 1 ? c.intl.formatToPlainString(c.t.C4WXvc, {
        memberCount: n.length
      }) : true,
      children: p({
        priorityMembers: t,
        otherMembers: d,
        totalMembers: n.length,
        activity: null != (g = null == (m = s[0]) ? true : m.activity) ? g : true,
        guildId: null == o ? true : o.id,
        sourceAnalyticsLocations: h
      })
    })
  }
  let A = s.map((e, n) => {
      let {
        playingMembers: i,
        game: a,
        activity: s
      } = e, c = new Set(i.map(e => e.id));
      return (0, r.jsx)(l.rXV, {
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
          sourceAnalyticsLocations: h
        })
      }, n)
    }),
    _ = f.map(e => e.id);
  return [...A, (0, r.jsx)(l.rXV, {
    label: "".concat(c.intl.string(c.t["mIx+gG"]), " - ").concat(f.length),
    children: p({
      priorityMembers: t.filter(e => {
        let {
          user: t
        } = e;
        return _.includes(t.id)
      }),
      otherMembers: f.filter(e => !u.has(e.id)),
      totalMembers: f.length,
      guildId: null == o ? true : o.id,
      sourceAnalyticsLocations: h
    })
  })]
}