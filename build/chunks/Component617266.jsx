/** Chunk was on 53682 **/
/** chunk id: 617266, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => z
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk212819 = require("./212819.js"),
  Chunk933557 = require("./933557.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk810123 = require("./810123.jsx"),
  Chunk448486 = require("./448486.js"),
  Chunk987509 = require("./987509.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk306680 = require("./306680.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk963354 = require("./963354.js");

function M(e) {
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

function F(e, t) {
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

function A(e, t) {
  if (null == e) return {};
  var n, l, r = function(e, t) {
    if (null == e) return {};
    var n, l, r = {},
      i = Object.keys(e);
    for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}

function I(e) {
  let {
    destination: t,
    icon: n,
    label: i,
    subLabel: s,
    selected: o,
    disabled: u,
    onPressDestination: d,
    "aria-setsize": f,
    "aria-posinset": m
  } = e, p = r.useRef(false), h = r.useCallback(() => {
    u || null == d || d(t)
  }, [d, u, t]);
  return (0, b.zq)(() => () => {
    p.current && (p.current = false, null == d || d(t, {
      transitionToDestination: false,
      closeAfterSend: false
    }))
  }), (0, l.jsxs)(c.P3F, {
    className: a()(k.destinationRow, {
      [k.disabled]: u
    }),
    onClick: h,
    "aria-selected": o,
    "aria-setsize": f,
    "aria-posinset": m,
    children: [(0, l.jsxs)("div", {
      className: k.identity,
      children: [(0, l.jsx)("div", {
        className: k.iconWrapper,
        children: n
      }), (0, l.jsxs)("div", {
        className: k.labels,
        children: [(0, l.jsx)(c.Text, {
          tag: "strong",
          className: k.label,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: i
        }), (0, l.jsx)(c.Text, {
          className: k.subLabel,
          variant: "text-xs/normal",
          color: "text-muted",
          children: s
        })]
      })]
    }), (0, l.jsx)("div", {
      className: k.checkbox,
      children: (0, l.jsx)(c.FZ5, {
        checked: o
      })
    })]
  })
}

function D(e) {
  var {
    user: t,
    subLabel: n
  } = e, r = A(e, ["user", "subLabel"]);
  let i = L.ZP.useName(t),
    a = L.ZP.useUserTag(t, {
      decoration: "never"
    }),
    s = (0, u.e7)([_.Z], () => _.Z.getNickname(t.id)),
    o = (0, u.e7)([O.Z], () => O.Z.getStatus(t.id));
  return (0, l.jsx)(I, F(M({}, r), {
    icon: (0, l.jsx)(d.Z, {
      "aria-hidden": true,
      size: c.EFr.SIZE_32,
      user: t,
      status: o
    }),
    label: null != s ? s : i,
    subLabel: null != n ? n : a
  }))
}

function q(e) {
  var {
    channel: t,
    subLabel: n
  } = e, r = A(e, ["channel", "subLabel"]);
  let i = (0, m.ZP)(t),
    a = (0, g._)(t);
  return (0, l.jsx)(I, F(M({}, r), {
    icon: (0, l.jsx)(p.Z, {
      "aria-hidden": true,
      size: c.EFr.SIZE_32,
      channel: t
    }),
    label: i,
    subLabel: null != n ? n : a
  }))
}

function R(e) {
  var {
    channel: t,
    subLabel: n
  } = e, r = A(e, ["channel", "subLabel"]);
  let i = (0, u.e7)([j.Z], () => j.Z.getGuild(null == t ? true : t.guild_id)),
    a = (0, m.ZP)(t),
    s = (0, u.e7)([y.Z, w.default, _.Z], () => {
      let e = y.Z.getChannel(t.parent_id);
      return null == e ? null : (0, m.F6)(e, w.default, _.Z, false)
    }),
    d = (0, u.e7)([P.ZP], () => P.ZP.lastMessageTimestamp(t.id, N.W.CHANNEL)),
    b = null == i ? true : i.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? c.Mmi : c.VL1;
    b = (0, l.jsxs)("div", {
      className: k.threadSubLabel,
      children: [(0, l.jsx)(e, {
        color: c.TVs.colors.TEXT_SUBTLE,
        className: k.subLabelIcon
      }), (0, l.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children: s
      }), null != d ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(c.Text, {
          className: k.subLabelSeparator,
          variant: "text-xs/medium",
          color: "text-subtle",
          children: "•"
        }), (0, l.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-subtle",
          children: (0, C.Xf)(o()(d))
        })]
      }) : null]
    })
  }
  return (0, l.jsx)(I, F(M({}, r), {
    icon: (0, l.jsx)(h.Z, {
      size: h.E.SMALL_32,
      guild: i,
      channel: t
    }),
    label: a,
    subLabel: null != n ? n : b
  }))
}

function z(e) {
  let {
    rowData: t,
    selectedDestinations: n,
    handleToggleDestination: i,
    disableSelection: a,
    originDestination: s
  } = e, o = r.useMemo(() => {
    var e;
    return null != (e = null == n ? true : n.map(v.hC)) ? e : []
  }, [n]);
  return r.useMemo(() => {
    let e = t.filter(e => e.type !== f.h8.HEADER);
    return e.map((t, n) => {
      let {
        type: r,
        record: u
      } = t, c = r === f.h8.USER ? {
        type: "user",
        id: u.id
      } : {
        type: "channel",
        id: u.id
      }, d = (0, v.hC)(c), b = null != s ? function(e, t) {
        if (t instanceof x.Sf && (0, x.Km)(t.type)) {
          if (null != t.rateLimitPerUser && t.rateLimitPerUser > 0 && !(S.Z.can(E.Plq.MANAGE_CHANNELS, t) || S.Z.can(E.Plq.MANAGE_MESSAGES, t))) return {
            label: T.intl.string(T.t.Icu3bf)
          };
          if (t.isThread() || t.isForumPost() || !S.Z.can(E.Plq.USE_APPLICATION_COMMANDS, t)) return {
            label: T.intl.string(T.t.v8MLqz)
          };
          let n = (0, v.dL)(t.id);
          if (e.id === n.id) return {
            label: T.intl.string(T.t.mD4gqe)
          }
        }
      }(s, u) : null, m = o.includes(d), p = {
        destination: c,
        subLabel: null != b ? b.label : true,
        disabled: a && !m || null != b,
        selected: m,
        onPressDestination: i,
        "aria-posinset": n + 1,
        "aria-setsize": e.length
      };
      return r === f.h8.USER ? (0, l.jsx)(D, M({
        user: u
      }, p), d) : r === f.h8.GROUP_DM ? (0, l.jsx)(q, M({
        channel: u
      }, p), d) : r === f.h8.TEXT_CHANNEL || r === f.h8.VOICE_CHANNEL ? (0, l.jsx)(R, M({
        channel: u
      }, p), d) : void(0, Z.vE)(r)
    })
  }, [a, i, s, t, o])
}