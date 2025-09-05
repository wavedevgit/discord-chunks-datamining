/** Chunk was on 53682 **/
/** chunk id: 617266, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => G
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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

function I(e) {
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

function R(e, t) {
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

function F(e, t) {
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

function q(e) {
  let {
    destination: t,
    icon: n,
    label: i,
    subLabel: s,
    selected: o,
    disabled: c,
    onPressDestination: p,
    "aria-setsize": h,
    "aria-posinset": m
  } = e, g = (0, u.JA)(t.id), y = r.useRef(false), v = r.useCallback(() => {
    c || null == p || p(t)
  }, [p, c, t]);
  return (0, b.zq)(() => () => {
    y.current && (y.current = false, null == p || p(t, {
      transitionToDestination: false,
      closeAfterSend: false
    }))
  }), (0, l.jsxs)(f.P3F, R(I({
    className: a()(k.destinationRow, {
      [k.disabled]: c
    }),
    onClick: v,
    "aria-selected": o,
    "aria-setsize": h,
    "aria-posinset": m
  }, g), {
    children: [(0, l.jsxs)("div", {
      className: k.identity,
      children: [(0, l.jsx)("div", {
        className: k.iconWrapper,
        children: n
      }), (0, l.jsxs)("div", {
        className: k.labels,
        children: [(0, l.jsx)(f.Text, {
          tag: "strong",
          className: k.label,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: i
        }), (0, l.jsx)(f.Text, {
          className: k.subLabel,
          variant: "text-xs/normal",
          color: "text-muted",
          children: s
        })]
      })]
    }), (0, l.jsx)(d.$q, {
      type: d.M0.INVERTED,
      displayOnly: true,
      size: 24,
      value: o,
      className: k.checkbox
    })]
  }))
}

function U(e) {
  var {
    user: t,
    subLabel: n
  } = e, r = F(e, ["user", "subLabel"]);
  let i = M.ZP.useName(t),
    a = M.ZP.useUserTag(t, {
      decoration: "never"
    }),
    s = (0, c.e7)([w.Z], () => w.Z.getNickname(t.id)),
    o = (0, c.e7)([E.Z], () => E.Z.getStatus(t.id));
  return (0, l.jsx)(q, R(I({}, r), {
    icon: (0, l.jsx)(p.Z, {
      "aria-hidden": true,
      size: f.EFr.SIZE_32,
      user: t,
      status: o
    }),
    label: null != s ? s : i,
    subLabel: null != n ? n : a
  }))
}

function H(e) {
  var {
    channel: t,
    subLabel: n
  } = e, r = F(e, ["channel", "subLabel"]);
  let i = (0, g.ZP)(t),
    a = (0, x._)(t);
  return (0, l.jsx)(q, R(I({}, r), {
    icon: (0, l.jsx)(y.Z, {
      "aria-hidden": true,
      size: f.EFr.SIZE_32,
      channel: t,
      experimentLocation: "application-command-modal"
    }),
    label: i,
    subLabel: null != n ? n : a
  }))
}

function z(e) {
  var {
    channel: t,
    subLabel: n
  } = e, r = F(e, ["channel", "subLabel"]);
  let i = (0, c.e7)([_.Z], () => _.Z.getGuild(null == t ? true : t.guild_id)),
    a = (0, g.ZP)(t),
    s = (0, c.e7)([C.Z, Z.default, w.Z], () => {
      let e = C.Z.getChannel(t.parent_id);
      return null == e ? null : (0, g.F6)(e, Z.default, w.Z, false)
    }),
    u = (0, c.e7)([P.ZP], () => P.ZP.lastMessageTimestamp(t.id, D.W.CHANNEL)),
    d = null == i ? true : i.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? f.Mmi : f.VL1;
    d = (0, l.jsxs)("div", {
      className: k.threadSubLabel,
      children: [(0, l.jsx)(e, {
        color: f.TVs.colors.TEXT_SECONDARY,
        className: k.subLabelIcon
      }), (0, l.jsx)(f.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        lineClamp: 1,
        children: s
      }), null != u ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(f.Text, {
          className: k.subLabelSeparator,
          variant: "text-xs/medium",
          color: "text-secondary",
          children: "•"
        }), (0, l.jsx)(f.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: (0, L.Xf)(o()(u))
        })]
      }) : null]
    })
  }
  return (0, l.jsx)(q, R(I({}, r), {
    icon: (0, l.jsx)(v.Z, {
      size: v.E.SMALL_32,
      guild: i,
      channel: t
    }),
    label: a,
    subLabel: null != n ? n : d
  }))
}

function G(e) {
  var {
    rowData: t,
    selectedDestinations: n,
    handleToggleDestination: i,
    disableSelection: a,
    originDestination: s
  } = e, o = F(e, ["rowData", "selectedDestinations", "handleToggleDestination", "disableSelection", "originDestination"]);
  let c = r.useMemo(() => [t.length], [t.length]),
    d = r.useCallback(() => 48, []),
    p = r.useMemo(() => {
      var e;
      return null != (e = null == n ? true : n.map(j.hC)) ? e : []
    }, [n]),
    b = r.useCallback(e => {
      let {
        section: n,
        row: r
      } = e;
      if (n > 0) return;
      let {
        type: o,
        record: u
      } = t[r];
      if (o === m.h8.HEADER) return;
      let c = o === m.h8.USER ? {
          type: "user",
          id: u.id
        } : {
          type: "channel",
          id: u.id
        },
        d = (0, j.hC)(c),
        f = null != s ? function(e, t) {
          if (t instanceof S.Sf && (0, S.Km)(t.type)) {
            if (null != t.rateLimitPerUser && t.rateLimitPerUser > 0 && !(O.Z.can(T.Plq.MANAGE_CHANNELS, t) || O.Z.can(T.Plq.MANAGE_MESSAGES, t))) return {
              label: A.intl.string(A.t.Icu3bW)
            };
            if (t.isThread() || t.isForumPost() || !O.Z.can(T.Plq.USE_APPLICATION_COMMANDS, t)) return {
              label: A.intl.string(A.t.v8MLq6)
            };
            let n = (0, j.dL)(t.id);
            if (e.id === n.id) return {
              label: A.intl.string(A.t.mD4gqa)
            }
          }
        }(s, u) : null,
        b = p.includes(d),
        h = {
          key: d,
          destination: c,
          subLabel: null != f ? f.label : true,
          disabled: a && !b || null != f,
          selected: b,
          onPressDestination: i,
          "aria-posinset": r + 1,
          "aria-setsize": t.length
        };
      return o === m.h8.USER ? (0, l.jsx)(U, I({
        user: u
      }, h)) : o === m.h8.GROUP_DM ? (0, l.jsx)(H, I({
        channel: u
      }, h)) : o === m.h8.TEXT_CHANNEL || o === m.h8.VOICE_CHANNEL ? (0, l.jsx)(z, I({
        channel: u
      }, h)) : void(0, N.vE)(o)
    }, [a, i, s, t, p]),
    g = r.useRef(null),
    y = (0, h.Z)("share-command-modal", g);
  return (0, l.jsx)(u.bG, {
    navigator: y,
    children: (0, l.jsx)(u.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = F(e, ["ref"]);
        return (0, l.jsx)(f.YAO, R(I({
          scrollerRef: e => {
            var n;
            g.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
          }
        }, n, o), {
          sections: c,
          sectionHeight: 0,
          renderRow: b,
          rowHeight: d
        }))
      }
    })
  })
}