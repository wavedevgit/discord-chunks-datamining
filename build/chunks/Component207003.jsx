/** Chunk was on 83098 **/
/** chunk id: 207003, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => z
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk742746 = require("./742746.js"),
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
  Chunk239966 = require("./239966.js");

function k(e) {
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

function A(e, t) {
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

function I(e, t) {
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

function U(e) {
  let {
    destination: t,
    icon: n,
    label: a,
    subLabel: s,
    selected: u,
    disabled: c,
    onPressDestination: d,
    "aria-setsize": b,
    "aria-posinset": p
  } = e, h = (0, o.JA)(t.id), m = l.useCallback(() => {
    c || null == d || d(t)
  }, [d, c, t]);
  return (0, r.jsxs)(f.P3F, A(k({
    className: i()(M.destinationRow, {
      [M.disabled]: c
    }),
    onClick: m,
    "aria-selected": u,
    "aria-setsize": b,
    "aria-posinset": p
  }, h), {
    children: [(0, r.jsxs)("div", {
      className: M.identity,
      children: [(0, r.jsx)("div", {
        className: M.iconWrapper,
        children: n
      }), (0, r.jsxs)("div", {
        className: M.labels,
        children: [(0, r.jsx)(f.Text, {
          tag: "strong",
          className: M.label,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: a
        }), (0, r.jsx)(f.Text, {
          className: M.subLabel,
          variant: "text-xs/normal",
          color: "text-muted",
          children: s
        })]
      })]
    }), (0, r.jsx)(f.XZJ, {
      type: f.XZJ.Types.INVERTED,
      displayOnly: true,
      size: 24,
      value: u,
      className: M.checkbox
    })]
  }))
}

function H(e) {
  var {
    user: t,
    subLabel: n
  } = e, l = I(e, ["user", "subLabel"]);
  let a = N.ZP.useName(t),
    i = N.ZP.useUserTag(t, {
      decoration: "never"
    }),
    s = (0, c.e7)([P.Z], () => P.Z.getNickname(t.id)),
    u = (0, c.e7)([O.Z], () => O.Z.getStatus(t.id));
  return (0, r.jsx)(U, A(k({}, l), {
    icon: (0, r.jsx)(b.Z, {
      "aria-hidden": true,
      size: f.EFr.SIZE_32,
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
  } = e, l = I(e, ["channel", "subLabel"]);
  let a = (0, m.ZP)(t),
    i = (0, x._)(t);
  return (0, r.jsx)(U, A(k({}, l), {
    icon: (0, r.jsx)(g.Z, {
      "aria-hidden": true,
      size: f.EFr.SIZE_32,
      channel: t,
      experimentLocation: "application-command-modal"
    }),
    label: a,
    subLabel: null != n ? n : i
  }))
}

function q(e) {
  var {
    channel: t,
    subLabel: n
  } = e, l = I(e, ["channel", "subLabel"]);
  let a = (0, c.e7)([j.Z], () => j.Z.getGuild(null == t ? true : t.guild_id)),
    i = (0, m.ZP)(t),
    s = (0, c.e7)([E.Z, C.default, P.Z], () => {
      let e = E.Z.getChannel(t.parent_id);
      return null == e ? null : (0, m.F6)(e, C.default, P.Z, false)
    }),
    o = (0, c.e7)([_.ZP], () => _.ZP.lastMessageTimestamp(t.id, D.W.CHANNEL)),
    d = null == a ? true : a.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? f.Mmi : f.VL1;
    d = (0, r.jsxs)("div", {
      className: M.threadSubLabel,
      children: [(0, r.jsx)(e, {
        color: f.TVs.colors.TEXT_SECONDARY,
        className: M.subLabelIcon
      }), (0, r.jsx)(f.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        lineClamp: 1,
        children: s
      }), null != o ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(f.Text, {
          className: M.subLabelSeparator,
          variant: "text-xs/medium",
          color: "text-secondary",
          children: "•"
        }), (0, r.jsx)(f.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: (0, L.Xf)(u()(o))
        })]
      }) : null]
    })
  }
  return (0, r.jsx)(U, A(k({}, l), {
    icon: (0, r.jsx)(y.Z, {
      size: y.E.SMALL_32,
      guild: a,
      channel: t
    }),
    label: i,
    subLabel: null != n ? n : d
  }))
}

function z(e) {
  var {
    rowData: t,
    selectedDestinations: n,
    handleToggleDestination: a,
    disableSelection: i
  } = e, s = I(e, ["rowData", "selectedDestinations", "handleToggleDestination", "disableSelection"]);
  let u = l.useMemo(() => [t.length], [t.length]),
    c = l.useCallback(() => 48, []),
    f = l.useMemo(() => {
      var e;
      return null != (e = null == n ? true : n.map(v.hC)) ? e : []
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
      if (s === h.h8.HEADER) return;
      let o = s === h.h8.USER ? {
          type: "user",
          id: u.id
        } : {
          type: "channel",
          id: u.id
        },
        c = (0, v.hC)(o),
        d = function(e) {
          if (e instanceof S.Sf && (0, S.Km)(e.type) && null != e.rateLimitPerUser && e.rateLimitPerUser > 0 && !(Z.Z.can(w.Plq.MANAGE_CHANNELS, e) || Z.Z.can(w.Plq.MANAGE_MESSAGES, e))) return {
            label: R.intl.string(R.t.Icu3bW)
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
      return s === h.h8.USER ? (0, r.jsx)(H, k({
        user: u
      }, p)) : s === h.h8.GROUP_DM ? (0, r.jsx)(F, k({
        channel: u
      }, p)) : s === h.h8.TEXT_CHANNEL || s === h.h8.VOICE_CHANNEL ? (0, r.jsx)(q, k({
        channel: u
      }, p)) : void(0, T.vE)(s)
    }, [i, a, t, f]),
    m = l.useRef(null),
    g = (0, p.Z)("share-command-modal", m);
  return (0, r.jsx)(o.bG, {
    navigator: g,
    children: (0, r.jsx)(o.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = I(e, ["ref"]);
        return (0, r.jsx)(d.Tv, A(k({
          ref: e => {
            var n;
            m.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
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