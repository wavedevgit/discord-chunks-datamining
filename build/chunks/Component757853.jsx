/** Chunk was on 47051 **/
/** chunk id: 757853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => F
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
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
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk158776 = require("./158776.js"),
  Chunk306680 = require("./306680.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk784384 = require("./784384.js"),
  Chunk490897 = require("./490897.js"),
  Chunk132358 = require("./132358.js");

function w(e) {
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

function T(e, t) {
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

function D(e, t) {
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
    subLabel: a,
    selected: u,
    disabled: o,
    onPressDestination: h,
    "aria-setsize": m,
    "aria-posinset": g,
    className: b
  } = e, p = (0, c.JA)(t.id), y = r.useCallback(() => {
    null == h || h(t)
  }, [h, t]);
  return (0, l.jsxs)(f.P3F, T(w({
    className: s()(A.destinationRow, b, {
      [A.disabled]: o
    }),
    onClick: o ? true : y,
    "aria-selected": u,
    "aria-setsize": m,
    "aria-posinset": g
  }, p), {
    children: [(0, l.jsxs)("div", {
      className: A.identity,
      children: [(0, l.jsx)("div", {
        className: A.iconWrapper,
        children: n
      }), (0, l.jsxs)("div", {
        className: A.labels,
        children: [(0, l.jsx)(f.Text, {
          tag: "strong",
          className: A.label,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: i
        }), (0, l.jsx)(f.Text, {
          className: A.subLabel,
          variant: "text-xs/normal",
          color: "text-muted",
          children: a
        })]
      })]
    }), (0, l.jsx)(d.VL, {
      checked: !!u,
      disabled: o,
      className: A.checkbox,
      isIndicator: true
    })]
  }))
}

function R(e) {
  var {
    user: t,
    subLabel: n
  } = e, r = D(e, ["user", "subLabel"]);
  let i = _.ZP.useName(t),
    s = _.ZP.useUserTag(t, {
      decoration: "never"
    }),
    a = (0, o.e7)([P.Z], () => P.Z.getNickname(t.id)),
    u = (0, o.e7)([j.Z], () => j.Z.getStatus(t.id));
  return (0, l.jsx)(I, T(w({}, r), {
    icon: (0, l.jsx)(h.Z, {
      "aria-hidden": true,
      size: f.EFr.SIZE_32,
      user: t,
      status: u
    }),
    label: null != a ? a : i,
    subLabel: null != n ? n : s
  }))
}

function k(e) {
  var {
    channel: t,
    subLabel: n
  } = e, r = D(e, ["channel", "subLabel"]);
  let i = (0, b.ZP)(t),
    s = (0, E._)(t);
  return (0, l.jsx)(I, T(w({}, r), {
    icon: (0, l.jsx)(p.Z, {
      "aria-hidden": true,
      size: f.EFr.SIZE_32,
      channel: t,
      experimentLocation: "forward-modal"
    }),
    label: i,
    subLabel: null != n ? n : s
  }))
}

function U(e) {
  var {
    channel: t,
    subLabel: n
  } = e, r = D(e, ["channel", "subLabel"]);
  let i = (0, o.e7)([Z.Z], () => Z.Z.getGuild(null == t ? true : t.guild_id)),
    s = (0, b.ZP)(t),
    a = (0, o.e7)([v.Z, O.default, P.Z], () => {
      let e = v.Z.getChannel(t.parent_id);
      return null == e ? null : (0, b.F6)(e, O.default, P.Z, false)
    }),
    c = (0, o.e7)([x.ZP], () => x.ZP.lastMessageTimestamp(t.id, M.W.CHANNEL)),
    d = null == i ? true : i.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? f.Mmi : f.VL1;
    d = (0, l.jsxs)("div", {
      className: A.threadSubLabel,
      children: [(0, l.jsx)(e, {
        color: f.TVs.colors.TEXT_SECONDARY,
        className: A.subLabelIcon
      }), (0, l.jsx)(f.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        lineClamp: 1,
        children: a
      }), null != c ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(f.Text, {
          className: A.subLabelSeparator,
          variant: "text-xs/medium",
          color: "text-secondary",
          children: "•"
        }), (0, l.jsx)(f.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: (0, L.Xf)(u()(c))
        })]
      }) : null]
    })
  }
  return (0, l.jsx)(I, T(w({}, r), {
    icon: (0, l.jsx)(y.Z, {
      size: y.E.SMALL_32,
      guild: i,
      channel: t
    }),
    label: s,
    subLabel: null != n ? n : d
  }))
}

function F(e) {
  var {
    rowData: t,
    message: n,
    originChannel: i,
    selectedDestinations: s,
    handleToggleDestination: a,
    disableSelection: u,
    rowClassName: o
  } = e, d = D(e, ["rowData", "message", "originChannel", "selectedDestinations", "handleToggleDestination", "disableSelection", "rowClassName"]);
  let h = r.useMemo(() => [t.length], [t.length]),
    b = r.useCallback(() => 48, []),
    p = r.useMemo(() => {
      var e;
      return null != (e = null == s ? true : s.map(S.hC)) ? e : []
    }, [s]),
    y = r.useCallback(e => {
      let {
        section: r,
        row: s
      } = e;
      if (r > 0) return;
      let {
        type: c,
        record: d
      } = t[s];
      if (c === g.h8.HEADER) return;
      let f = c === g.h8.USER ? {
          type: "user",
          id: d.id
        } : {
          type: "channel",
          id: d.id
        },
        h = (0, S.hC)(f),
        m = (0, C.HY)(n, i, d),
        b = p.includes(h),
        y = {
          key: h,
          message: n,
          destination: f,
          subLabel: null != m ? m.label : true,
          disabled: u && !b || null != m,
          selected: b,
          onPressDestination: a,
          "aria-posinset": s + 1,
          "aria-setsize": t.length,
          className: o
        };
      return c === g.h8.USER ? (0, l.jsx)(R, w({
        user: d
      }, y)) : c === g.h8.GROUP_DM ? (0, l.jsx)(k, w({
        channel: d
      }, y)) : c === g.h8.TEXT_CHANNEL || c === g.h8.VOICE_CHANNEL ? (0, l.jsx)(U, w({
        channel: d
      }, y)) : void(0, N.vE)(c)
    }, [u, a, n, i, t, p, o]),
    E = r.useRef(null),
    v = (0, m.Z)("forward-modal", E);
  return (0, l.jsx)(c.bG, {
    navigator: v,
    children: (0, l.jsx)(c.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = D(e, ["ref"]);
        return (0, l.jsx)(f.Tvr, T(w({
          ref: e => {
            var n;
            E.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
          }
        }, n, d), {
          sections: h,
          sectionHeight: 0,
          renderRow: y,
          rowHeight: b
        }))
      }
    })
  })
}