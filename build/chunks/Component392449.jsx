/** Chunk was on 33885 **/
/** chunk id: 392449, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => q
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk964486 = require("./964486.js"),
  Chunk629357 = require("./629357.js"),
  Chunk47167 = require("./47167.js"),
  Chunk598104 = require("./598104.jsx"),
  Chunk255266 = require("./255266.jsx"),
  Chunk72563 = require("./72563.js"),
  Chunk223863 = require("./223863.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk222823 = require("./222823.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk405269 = require("./405269.js"),
  Chunk403362 = require("./403362.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk116106 = require("./116106.js");

function k(e) {
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

function M(e, t) {
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

function I(e, t) {
  if (null == e) return {};
  var n, l, r, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var n, l, r = {},
        i = Object.getOwnPropertyNames(e);
      for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
      return r
    }(e, t), Object.getOwnPropertySymbols)
    for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
  return i
}

function R(e) {
  let {
    destination: t,
    icon: n,
    label: i,
    subLabel: s,
    selected: o,
    disabled: u,
    onPressDestination: d,
    "aria-setsize": f,
    "aria-posinset": p
  } = e, m = r.useRef(false), h = r.useCallback(() => {
    u || null == d || d(t)
  }, [d, u, t]);
  return (0, b.l0)(() => () => {
    m.current && (m.current = false, null == d || d(t, {
      transitionToDestination: false,
      closeAfterSend: false
    }))
  }), (0, l.jsxs)(c.DUT, {
    className: a()(D.HP, {
      [D.r9]: u
    }),
    onClick: h,
    "aria-selected": o,
    "aria-setsize": f,
    "aria-posinset": p,
    children: [(0, l.jsxs)("div", {
      className: D.D_,
      children: [(0, l.jsx)("div", {
        className: D.P0,
        children: n
      }), (0, l.jsxs)("div", {
        className: D.WD,
        children: [(0, l.jsx)(c.Text, {
          tag: "strong",
          className: D.Pf,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: i
        }), (0, l.jsx)(c.Text, {
          className: D.J2,
          variant: "text-xs/normal",
          color: "text-muted",
          children: s
        })]
      })]
    }), (0, l.jsx)("div", {
      className: D.kv,
      children: (0, l.jsx)(c.P7L, {
        checked: o
      })
    })]
  })
}

function F(e) {
  let {
    user: t,
    subLabel: n
  } = e, r = I(e, ["user", "subLabel"]), i = N.Ay.useName(t), a = N.Ay.useUserTag(t, {
    decoration: "never"
  }), s = (0, u.bG)([_.A], () => _.A.getNickname(t.id)), o = (0, u.bG)([O.A], () => O.A.getStatus(t.id));
  return (0, l.jsx)(R, M(k({}, r), {
    icon: (0, l.jsx)(d.A, {
      "aria-hidden": true,
      size: c._3J.SIZE_32,
      user: t,
      status: o
    }),
    label: null != s ? s : i,
    subLabel: null != n ? n : a
  }))
}

function z(e) {
  let {
    channel: t,
    subLabel: n
  } = e, r = I(e, ["channel", "subLabel"]), i = (0, p.Ay)(t), a = (0, g.i)(t);
  return (0, l.jsx)(R, M(k({}, r), {
    icon: (0, l.jsx)(m.A, {
      "aria-hidden": true,
      size: c._3J.SIZE_32,
      channel: t
    }),
    label: i,
    subLabel: null != n ? n : a
  }))
}

function G(e) {
  let {
    channel: t,
    subLabel: n
  } = e, r = I(e, ["channel", "subLabel"]), i = (0, u.bG)([j.A], () => j.A.getGuild(null == t ? true : t.guild_id)), a = (0, p.Ay)(t), s = (0, u.bG)([v.A, w.default, _.A], () => {
    let e = v.A.getChannel(t.parent_id);
    return null == e ? null : (0, p.m1)(e, w.default, _.A, false)
  }), d = (0, u.bG)([S.Ay], () => S.Ay.lastMessageTimestamp(t.id, E.P.CHANNEL)), b = null == i ? true : i.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? c.bSJ : c.N$i;
    b = (0, l.jsxs)("div", {
      className: D.vr,
      children: [(0, l.jsx)(e, {
        color: c.LU0.colors.TEXT_SUBTLE,
        className: D.Q9
      }), (0, l.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children: s
      }), null != d ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(c.Text, {
          className: D.Ql,
          variant: "text-xs/medium",
          color: "text-subtle",
          children: "•"
        }), (0, l.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-subtle",
          children: (0, P.Fe)(o()(d))
        })]
      }) : null]
    })
  }
  return (0, l.jsx)(R, M(k({}, r), {
    icon: (0, l.jsx)(h.A, {
      size: h.q.SMALL_32,
      guild: i,
      channel: t
    }),
    label: a,
    subLabel: null != n ? n : b
  }))
}

function q(e) {
  let {
    rowData: t,
    selectedDestinations: n,
    handleToggleDestination: i,
    disableSelection: a,
    originDestination: s
  } = e, o = r.useMemo(() => {
    var e;
    return null != (e = null == n ? true : n.map(y.I)) ? e : []
  }, [n]);
  return r.useMemo(() => {
    let e = t.filter(e => e.type !== f.rD.HEADER);
    return e.map((t, n) => {
      let {
        type: r,
        record: u
      } = t, c = r === f.rD.USER ? {
        type: "user",
        id: u.id
      } : {
        type: "channel",
        id: u.id
      }, d = (0, y.I)(c), b = null != s ? function(e, t) {
        if (t instanceof x.YB && (0, x.zy)(t.type)) {
          if (null != t.rateLimitPerUser && t.rateLimitPerUser > 0 && !(A.A.can(T.xBc.MANAGE_CHANNELS, t) || A.A.can(T.xBc.MANAGE_MESSAGES, t))) return {
            label: L.intl.string(L.t.Icu3bf)
          };
          if (t.isThread() || t.isForumPost() || !A.A.can(T.xBc.USE_APPLICATION_COMMANDS, t)) return {
            label: L.intl.string(L.t.v8MLqz)
          };
          let n = (0, y._5)(t.id);
          if (e.id === n.id) return {
            label: L.intl.string(L.t.mD4gqe)
          }
        }
      }(s, u) : null, p = o.includes(d), m = {
        destination: c,
        subLabel: null != b ? b.label : true,
        disabled: a && !p || null != b,
        selected: p,
        onPressDestination: i,
        "aria-posinset": n + 1,
        "aria-setsize": e.length
      };
      return r === f.rD.USER ? (0, l.jsx)(F, k({
        user: u
      }, m), d) : r === f.rD.GROUP_DM ? (0, l.jsx)(z, k({
        channel: u
      }, m), d) : r === f.rD.TEXT_CHANNEL || r === f.rD.VOICE_CHANNEL ? (0, l.jsx)(G, k({
        channel: u
      }, m), d) : void(0, C.xb)(r)
    })
  }, [a, i, s, t, o])
}