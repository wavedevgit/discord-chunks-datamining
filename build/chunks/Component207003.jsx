/** Chunk was on 83098 **/
/** chunk id: 207003, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => G
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk742746 = require("./742746.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
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
  Chunk834505 = require("./834505.js");

function A(e) {
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

function I(e, t) {
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

function U(e, t) {
  if (null == e) return {};
  var n, r, l = function(e, t) {
    if (null == e) return {};
    var n, r, l = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
  }
  return l
}

function H(e) {
  let {
    destination: t,
    icon: n,
    label: a,
    subLabel: s,
    selected: u,
    disabled: c,
    onPressDestination: d,
    "aria-setsize": p,
    "aria-posinset": h
  } = e, m = (0, o.JA)(t.id), g = l.useCallback(() => {
    c || null == d || d(t)
  }, [d, c, t]);
  return (0, r.jsxs)(b.P3F, I(A({
    className: i()(k.destinationRow, {
      [k.disabled]: c
    }),
    onClick: g,
    "aria-selected": u,
    "aria-setsize": p,
    "aria-posinset": h
  }, m), {
    children: [(0, r.jsxs)("div", {
      className: k.identity,
      children: [(0, r.jsx)("div", {
        className: k.iconWrapper,
        children: n
      }), (0, r.jsxs)("div", {
        className: k.labels,
        children: [(0, r.jsx)(b.Text, {
          tag: "strong",
          className: k.label,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: a
        }), (0, r.jsx)(b.Text, {
          className: k.subLabel,
          variant: "text-xs/normal",
          color: "text-muted",
          children: s
        })]
      })]
    }), (0, r.jsx)(f.$q, {
      type: f.M0.INVERTED,
      displayOnly: true,
      size: 24,
      value: u,
      className: k.checkbox
    })]
  }))
}

function q(e) {
  var {
    user: t,
    subLabel: n
  } = e, l = U(e, ["user", "subLabel"]);
  let a = w.ZP.useName(t),
    i = w.ZP.useUserTag(t, {
      decoration: "never"
    }),
    s = (0, c.e7)([C.Z], () => C.Z.getNickname(t.id)),
    u = (0, c.e7)([_.Z], () => _.Z.getStatus(t.id));
  return (0, r.jsx)(H, I(A({}, l), {
    icon: (0, r.jsx)(p.Z, {
      "aria-hidden": true,
      size: b.EFr.SIZE_32,
      user: t,
      status: u
    }),
    label: null != s ? s : a,
    subLabel: null != n ? n : i
  }))
}

function F(e) {
  var {
    channel: t,
    subLabel: n
  } = e, l = U(e, ["channel", "subLabel"]);
  let a = (0, g.ZP)(t),
    i = (0, v._)(t);
  return (0, r.jsx)(H, I(A({}, l), {
    icon: (0, r.jsx)(y.Z, {
      "aria-hidden": true,
      size: b.EFr.SIZE_32,
      channel: t,
      experimentLocation: "application-command-modal"
    }),
    label: a,
    subLabel: null != n ? n : i
  }))
}

function z(e) {
  var {
    channel: t,
    subLabel: n
  } = e, l = U(e, ["channel", "subLabel"]);
  let a = (0, c.e7)([Z.Z], () => Z.Z.getGuild(null == t ? true : t.guild_id)),
    i = (0, g.ZP)(t),
    s = (0, c.e7)([j.Z, L.default, C.Z], () => {
      let e = j.Z.getChannel(t.parent_id);
      return null == e ? null : (0, g.F6)(e, L.default, C.Z, false)
    }),
    o = (0, c.e7)([P.ZP], () => P.ZP.lastMessageTimestamp(t.id, R.W.CHANNEL)),
    d = null == a ? true : a.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? b.Mmi : b.VL1;
    d = (0, r.jsxs)("div", {
      className: k.threadSubLabel,
      children: [(0, r.jsx)(e, {
        color: b.TVs.colors.TEXT_SECONDARY,
        className: k.subLabelIcon
      }), (0, r.jsx)(b.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        lineClamp: 1,
        children: s
      }), null != o ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(b.Text, {
          className: k.subLabelSeparator,
          variant: "text-xs/medium",
          color: "text-secondary",
          children: "•"
        }), (0, r.jsx)(b.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: (0, T.Xf)(u()(o))
        })]
      }) : null]
    })
  }
  return (0, r.jsx)(H, I(A({}, l), {
    icon: (0, r.jsx)(x.Z, {
      size: x.E.SMALL_32,
      guild: a,
      channel: t
    }),
    label: i,
    subLabel: null != n ? n : d
  }))
}

function G(e) {
  var {
    rowData: t,
    selectedDestinations: n,
    handleToggleDestination: a,
    disableSelection: i
  } = e, s = U(e, ["rowData", "selectedDestinations", "handleToggleDestination", "disableSelection"]);
  let u = l.useMemo(() => [t.length], [t.length]),
    c = l.useCallback(() => 48, []),
    f = l.useMemo(() => {
      var e;
      return null != (e = null == n ? true : n.map(S.hC)) ? e : []
    }, [n]),
    b = l.useCallback(e => {
      let {
        section: n,
        row: l
      } = e;
      if (n > 0) return;
      let {
        type: s,
        record: u
      } = t[l];
      if (s === m.h8.HEADER) return;
      let o = s === m.h8.USER ? {
          type: "user",
          id: u.id
        } : {
          type: "channel",
          id: u.id
        },
        c = (0, S.hC)(o),
        d = function(e) {
          if (e instanceof E.Sf && (0, E.Km)(e.type) && null != e.rateLimitPerUser && e.rateLimitPerUser > 0 && !(O.Z.can(D.Plq.MANAGE_CHANNELS, e) || O.Z.can(D.Plq.MANAGE_MESSAGES, e))) return {
            label: M.intl.string(M.t.Icu3bW)
          }
        }(u),
        b = f.includes(c),
        p = {
          key: c,
          destination: o,
          subLabel: null != d ? d.label : true,
          disabled: i && !b || null != d,
          selected: b,
          onPressDestination: a,
          "aria-posinset": l + 1,
          "aria-setsize": t.length
        };
      return s === m.h8.USER ? (0, r.jsx)(q, A({
        user: u
      }, p)) : s === m.h8.GROUP_DM ? (0, r.jsx)(F, A({
        channel: u
      }, p)) : s === m.h8.TEXT_CHANNEL || s === m.h8.VOICE_CHANNEL ? (0, r.jsx)(z, A({
        channel: u
      }, p)) : void(0, N.vE)(s)
    }, [i, a, t, f]),
    p = l.useRef(null),
    g = (0, h.Z)("share-command-modal", p);
  return (0, r.jsx)(o.bG, {
    navigator: g,
    children: (0, r.jsx)(o.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = U(e, ["ref"]);
        return (0, r.jsx)(d.Tv, I(A({
          ref: e => {
            var n;
            p.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
          }
        }, n, s), {
          sections: u,
          sectionHeight: 0,
          renderRow: b,
          rowHeight: c
        }))
      }
    })
  })
}