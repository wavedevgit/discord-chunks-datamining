/** Chunk was on 96758 **/
/** chunk id: 61916, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  s: () => k
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  u = require.n(Chunk989349),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk629357 = require("./629357.js"),
  Chunk47167 = require("./47167.js"),
  Chunk598104 = require("./598104.jsx"),
  Chunk255266 = require("./255266.jsx"),
  Chunk72563 = require("./72563.js"),
  Chunk223863 = require("./223863.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk290863 = require("./290863.js"),
  Chunk222823 = require("./222823.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk405269 = require("./405269.js"),
  Chunk403362 = require("./403362.js"),
  Chunk427262 = require("./427262.js"),
  Chunk513480 = require("./513480.js"),
  Chunk790782 = require("./790782.js"),
  Chunk967789 = require("./967789.js");

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function G(e, t) {
  if (null == e) return {};
  var r, n, l, s = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
    return s
  }
  if (s = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        s = Object.getOwnPropertyNames(e);
      for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
  return s
}

function T(e) {
  let {
    destination: t,
    icon: r,
    label: s,
    subLabel: a,
    selected: u,
    disabled: c,
    onPressDestination: f,
    "aria-setsize": h,
    "aria-posinset": b,
    className: d
  } = e, _ = (0, o.rm)(t.id), p = l.useCallback(() => {
    null == f || f(t)
  }, [f, t]);
  return (0, n.jsxs)(A.DUT, D(v({
    className: i()(S.HP, d, {
      [S.r9]: c
    }),
    onClick: c ? true : p,
    "aria-selected": u,
    "aria-setsize": h,
    "aria-posinset": b
  }, _), {
    children: [(0, n.jsxs)("div", {
      className: S.D_,
      children: [(0, n.jsx)("div", {
        className: S.P0,
        children: r
      }), (0, n.jsxs)("div", {
        className: S.WD,
        children: [(0, n.jsx)(A.Text, {
          tag: "strong",
          color: c ? "text-muted" : true,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: s
        }), (0, n.jsx)(A.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: a
        })]
      })]
    }), (0, n.jsx)("div", {
      className: S.kv,
      children: (0, n.jsx)(A.P7L, {
        checked: !!u,
        disabled: c
      })
    })]
  }))
}

function F(e) {
  let {
    user: t,
    subLabel: r
  } = e, l = G(e, ["user", "subLabel"]), s = j.Ay.useName(t), i = j.Ay.useUserTag(t, {
    decoration: "never"
  }), a = (0, c.bG)([g.A], () => g.A.getNickname(t.id)), u = (0, c.bG)([I.A], () => I.A.getStatus(t.id));
  return (0, n.jsx)(T, D(v({}, l), {
    icon: (0, n.jsx)(f.A, {
      "aria-hidden": true,
      size: A._3J.SIZE_32,
      user: t,
      status: u
    }),
    label: null != a ? a : s,
    subLabel: null != r ? r : i
  }))
}

function w(e) {
  let {
    channel: t,
    subLabel: r
  } = e, l = G(e, ["channel", "subLabel"]), s = (0, b.Ay)(t), i = (0, p.i)(t);
  return (0, n.jsx)(T, D(v({}, l), {
    icon: (0, n.jsx)(d.A, {
      "aria-hidden": true,
      size: A._3J.SIZE_32,
      channel: t
    }),
    label: s,
    subLabel: null != r ? r : i
  }))
}

function W(e) {
  let {
    channel: t,
    subLabel: r
  } = e, l = G(e, ["channel", "subLabel"]), s = (0, c.bG)([E.A], () => E.A.getGuild(null == t ? true : t.guild_id)), i = (0, b.Ay)(t), a = (0, c.bG)([O.A, m.default, g.A], () => {
    let e = O.A.getChannel(t.parent_id);
    return null == e ? null : (0, b.m1)(e, m.default, g.A, false)
  }), o = (0, c.bG)([L.Ay], () => L.Ay.lastMessageTimestamp(t.id, x.P.CHANNEL)), f = null == s ? true : s.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? A.bSJ : A.N$i;
    f = (0, n.jsxs)("div", {
      className: S.vr,
      children: [(0, n.jsx)(e, {
        color: A.LU0.colors.TEXT_SUBTLE,
        className: S.Q9
      }), (0, n.jsx)(A.Text, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children: a
      }), null != o ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(A.Text, {
          className: S.Ql,
          variant: "text-xs/medium",
          color: "text-subtle",
          children: "•"
        }), (0, n.jsx)(A.Text, {
          variant: "text-xs/medium",
          color: "text-subtle",
          children: (0, P.Fe)(u()(o))
        })]
      }) : null]
    })
  }
  return (0, n.jsx)(T, D(v({}, l), {
    icon: (0, n.jsx)(_.A, {
      size: _.q.SMALL_32,
      guild: s,
      channel: t
    }),
    label: i,
    subLabel: null != r ? r : f
  }))
}

function k(e) {
  let {
    rowData: t,
    message: r,
    originChannel: s,
    selectedDestinations: i,
    handleToggleDestination: a,
    disableSelection: u,
    rowClassName: o,
    validateDestination: c
  } = e, A = l.useMemo(() => {
    var e;
    return null != (e = null == i ? true : i.map(y.I)) ? e : []
  }, [i]), f = l.useCallback(e => {
    let {
      section: l,
      row: i
    } = e;
    if (l > 0) return;
    let {
      type: f,
      record: b
    } = t[i];
    if (f === h.rD.HEADER) return;
    let d = f === h.rD.USER ? {
        type: "user",
        id: b.id
      } : {
        type: "channel",
        id: b.id
      },
      _ = (0, y.I)(d),
      p = (0, C.pE)(r, s, b, c),
      O = A.includes(_),
      E = {
        key: _,
        message: r,
        destination: d,
        subLabel: null != p ? p.label : true,
        disabled: u && !O || null != p,
        selected: O,
        onPressDestination: a,
        "aria-posinset": i + 1,
        "aria-setsize": t.length,
        className: o
      };
    return f === h.rD.USER ? (0, n.jsx)(F, v({
      user: b
    }, E)) : f === h.rD.GROUP_DM ? (0, n.jsx)(w, v({
      channel: b
    }, E)) : f === h.rD.TEXT_CHANNEL || f === h.rD.VOICE_CHANNEL ? (0, n.jsx)(W, v({
      channel: b
    }, E)) : void(0, N.xb)(f)
  }, [u, a, r, s, t, A, o, c]);
  return {
    sections: [t.length],
    sectionHeight: 0,
    rowHeight: 48,
    renderRow: f
  }
}