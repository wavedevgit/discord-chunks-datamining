/** Chunk was on 53682 **/
/** chunk id: 617266, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => z
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk724757 = require("./724757.js"),
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

function I(e, t) {
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

function R(e, t) {
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

function F(e) {
  let {
    destination: t,
    icon: n,
    label: i,
    subLabel: s,
    selected: o,
    disabled: c,
    onPressDestination: f,
    "aria-setsize": b,
    "aria-posinset": h
  } = e, m = (0, u.JA)(t.id), g = r.useRef(false), y = r.useCallback(() => {
    c || null == f || f(t)
  }, [f, c, t]);
  return (0, p.zq)(() => () => {
    g.current && (g.current = false, null == f || f(t, {
      transitionToDestination: false,
      closeAfterSend: false
    }))
  }), (0, l.jsxs)(d.P3F, I(k({
    className: a()(A.destinationRow, {
      [A.disabled]: c
    }),
    onClick: y,
    "aria-selected": o,
    "aria-setsize": b,
    "aria-posinset": h
  }, m), {
    children: [(0, l.jsxs)("div", {
      className: A.identity,
      children: [(0, l.jsx)("div", {
        className: A.iconWrapper,
        children: n
      }), (0, l.jsxs)("div", {
        className: A.labels,
        children: [(0, l.jsx)(d.Text, {
          tag: "strong",
          className: A.label,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: i
        }), (0, l.jsx)(d.Text, {
          className: A.subLabel,
          variant: "text-xs/normal",
          color: "text-muted",
          children: s
        })]
      })]
    }), (0, l.jsx)(d.XZJ, {
      type: d.XZJ.Types.INVERTED,
      displayOnly: true,
      size: 24,
      value: o,
      className: A.checkbox
    })]
  }))
}

function U(e) {
  var {
    user: t,
    subLabel: n
  } = e, r = R(e, ["user", "subLabel"]);
  let i = N.ZP.useName(t),
    a = N.ZP.useUserTag(t, {
      decoration: "never"
    }),
    s = (0, c.e7)([P.Z], () => P.Z.getNickname(t.id)),
    o = (0, c.e7)([O.Z], () => O.Z.getStatus(t.id));
  return (0, l.jsx)(F, I(k({}, r), {
    icon: (0, l.jsx)(f.Z, {
      "aria-hidden": true,
      size: d.EFr.SIZE_32,
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
  } = e, r = R(e, ["channel", "subLabel"]);
  let i = (0, m.ZP)(t),
    a = (0, v._)(t);
  return (0, l.jsx)(F, I(k({}, r), {
    icon: (0, l.jsx)(g.Z, {
      "aria-hidden": true,
      size: d.EFr.SIZE_32,
      channel: t,
      experimentLocation: "application-command-modal"
    }),
    label: i,
    subLabel: null != n ? n : a
  }))
}

function H(e) {
  var {
    channel: t,
    subLabel: n
  } = e, r = R(e, ["channel", "subLabel"]);
  let i = (0, c.e7)([C.Z], () => C.Z.getGuild(null == t ? true : t.guild_id)),
    a = (0, m.ZP)(t),
    s = (0, c.e7)([S.Z, w.default, P.Z], () => {
      let e = S.Z.getChannel(t.parent_id);
      return null == e ? null : (0, m.F6)(e, w.default, P.Z, false)
    }),
    u = (0, c.e7)([E.ZP], () => E.ZP.lastMessageTimestamp(t.id, D.W.CHANNEL)),
    f = null == i ? true : i.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? d.Mmi : d.VL1;
    f = (0, l.jsxs)("div", {
      className: A.threadSubLabel,
      children: [(0, l.jsx)(e, {
        color: d.TVs.colors.TEXT_SECONDARY,
        className: A.subLabelIcon
      }), (0, l.jsx)(d.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        lineClamp: 1,
        children: s
      }), null != u ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(d.Text, {
          className: A.subLabelSeparator,
          variant: "text-xs/medium",
          color: "text-secondary",
          children: "•"
        }), (0, l.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: (0, Z.Xf)(o()(u))
        })]
      }) : null]
    })
  }
  return (0, l.jsx)(F, I(k({}, r), {
    icon: (0, l.jsx)(y.Z, {
      size: y.E.SMALL_32,
      guild: i,
      channel: t
    }),
    label: a,
    subLabel: null != n ? n : f
  }))
}

function z(e) {
  var {
    rowData: t,
    selectedDestinations: n,
    handleToggleDestination: i,
    disableSelection: a,
    originDestination: s
  } = e, o = R(e, ["rowData", "selectedDestinations", "handleToggleDestination", "disableSelection", "originDestination"]);
  let c = r.useMemo(() => [t.length], [t.length]),
    f = r.useCallback(() => 48, []),
    p = r.useMemo(() => {
      var e;
      return null != (e = null == n ? true : n.map(x.hC)) ? e : []
    }, [n]),
    m = r.useCallback(e => {
      let {
        section: n,
        row: r
      } = e;
      if (n > 0) return;
      let {
        type: o,
        record: u
      } = t[r];
      if (o === h.h8.HEADER) return;
      let c = o === h.h8.USER ? {
          type: "user",
          id: u.id
        } : {
          type: "channel",
          id: u.id
        },
        d = (0, x.hC)(c),
        f = null != s ? function(e, t) {
          if (t instanceof j.Sf && (0, j.Km)(t.type)) {
            if (null != t.rateLimitPerUser && t.rateLimitPerUser > 0 && !(_.Z.can(T.Plq.MANAGE_CHANNELS, t) || _.Z.can(T.Plq.MANAGE_MESSAGES, t))) return {
              label: M.intl.string(M.t.Icu3bW)
            };
            if (t.isThread() || t.isForumPost() || !_.Z.can(T.Plq.USE_APPLICATION_COMMANDS, t)) return {
              label: M.intl.string(M.t.v8MLq6)
            };
            let n = (0, x.dL)(t.id);
            if (e.id === n.id) return {
              label: M.intl.string(M.t.mD4gqa)
            }
          }
        }(s, u) : null,
        b = p.includes(d),
        m = {
          key: d,
          destination: c,
          subLabel: null != f ? f.label : true,
          disabled: a && !b || null != f,
          selected: b,
          onPressDestination: i,
          "aria-posinset": r + 1,
          "aria-setsize": t.length
        };
      return o === h.h8.USER ? (0, l.jsx)(U, k({
        user: u
      }, m)) : o === h.h8.GROUP_DM ? (0, l.jsx)(q, k({
        channel: u
      }, m)) : o === h.h8.TEXT_CHANNEL || o === h.h8.VOICE_CHANNEL ? (0, l.jsx)(H, k({
        channel: u
      }, m)) : void(0, L.vE)(o)
    }, [a, i, s, t, p]),
    g = r.useRef(null),
    y = (0, b.Z)("share-command-modal", g);
  return (0, l.jsx)(u.bG, {
    navigator: y,
    children: (0, l.jsx)(u.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = R(e, ["ref"]);
        return (0, l.jsx)(d.YAO, I(k({
          scrollerRef: e => {
            var n;
            g.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
          }
        }, n, o), {
          sections: c,
          sectionHeight: 0,
          renderRow: m,
          rowHeight: f
        }))
      }
    })
  })
}