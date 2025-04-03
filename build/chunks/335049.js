/** Chunk was on 62940 **/
n.d(t, {
  Z: () => P
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(512722),
  s = n.n(a),
  c = n(866442),
  d = n(442837),
  u = n(481060),
  p = n(239091),
  m = n(895924),
  b = n(581364),
  g = n(471445),
  f = n(91218),
  h = n(518738),
  x = n(592125),
  j = n(271383),
  v = n(430824),
  N = n(246946),
  O = n(594174),
  y = n(51144),
  _ = n(981631),
  C = n(388032),
  I = n(697747);

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function E(e, t) {
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

function P(e) {
  let {
    guild: t,
    id: o,
    type: l,
    isLocked: a,
    lockTooltipText: c
  } = e, d = !a || null != c;
  s()(d, "No lockTooltipText provided while isLocked=true");
  let u = i.useCallback(e => {
    (0, p.jW)(e, async () => {
      let {
        default: e
      } = await n.e("5396").then(n.bind(n, 731646));
      return t => (0, r.jsx)(e, E(S({}, t), {
        id: o,
        label: C.NW.string(C.t.oJ1Mu7)
      }))
    })
  }, [o]);
  switch (l) {
    case m.Kw.CHANNEL:
      return (0, r.jsx)(w, {
        guild: t,
        id: o,
        isLocked: a,
        lockTooltipText: c,
        openEntryContextMenu: u
      });
    case m.Kw.ROLE:
      return (0, r.jsx)(T, {
        guild: t,
        id: o,
        isLocked: a,
        lockTooltipText: c,
        openEntryContextMenu: u
      });
    case m.Kw.USER:
      return (0, r.jsx)(Z, {
        guild: t,
        id: o,
        isLocked: a,
        lockTooltipText: c,
        openEntryContextMenu: u
      })
  }
}

function w(e) {
  let {
    guild: t,
    id: n,
    isLocked: o,
    lockTooltipText: a,
    openEntryContextMenu: s
  } = e, c = (0, b.bD)(t.id), {
    icon: p,
    name: m,
    categoryName: f
  } = (0, d.cj)([x.Z], () => {
    if (c === n) return {
      name: C.NW.string(C.t["7YqSGx"]),
      icon: u.VL1
    };
    let e = x.Z.getChannel(n),
      r = (null == e ? void 0 : e.parent_id) != null ? x.Z.getChannel(e.parent_id) : null;
    return {
      icon: null != e ? (0, g.KS)(e, t) : null,
      name: null == e ? void 0 : e.name,
      categoryName: null == r ? void 0 : r.name
    }
  }, [c, t, n]), h = i.useCallback(e => {
    n !== c && s(e)
  }, [c, n, s]);
  return null == p || null == m ? null : (0, r.jsxs)("div", {
    onContextMenu: h,
    className: I.identifier,
    children: [(0, r.jsx)(p, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: l()(I.channelIcon, I.image)
    }), (0, r.jsx)(u.Text, {
      className: I.roleName,
      color: "header-primary",
      variant: "text-md/normal",
      children: m
    }), null != f ? (0, r.jsxs)(u.Text, {
      className: I.tag,
      variant: "text-sm/normal",
      children: ["(", f, ")"]
    }) : null, o ? (0, r.jsx)(W, {
      tooltipText: a
    }) : null]
  })
}

function T(e) {
  var t;
  let {
    guild: o,
    id: a,
    isLocked: s,
    lockTooltipText: m
  } = e, b = (0, d.e7)([v.Z], () => v.Z.getRole(o.id, a)), g = (0, h.p9)({
    guildId: o.id,
    roleId: a,
    size: 24
  }), x = i.useCallback(e => {
    null != o && null != b && (0, p.jW)(e, async () => {
      let {
        default: e
      } = await n.e("14486").then(n.bind(n, 786746));
      return t => (0, r.jsx)(e, E(S({}, t), {
        guild: o,
        role: b
      }))
    })
  }, [o, b]);
  return (null == b ? void 0 : b.name) == null ? null : (0, r.jsxs)("div", {
    onContextMenu: x,
    className: I.identifier,
    children: [null != g ? (0, r.jsx)(f.Z, S({
      className: l()(I.__invalid_icon, I.image)
    }, g)) : (0, r.jsx)(u.lZ8, {
      size: "custom",
      width: 23,
      height: 23,
      className: l()(I.shield, I.image),
      color: null !== (t = b.colorString) && void 0 !== t ? t : (0, c.Rf)(_.p6O)
    }), (0, r.jsx)(u.Text, {
      className: I.roleName,
      color: "header-primary",
      variant: "text-md/normal",
      children: b.name
    }), s ? (0, r.jsx)(W, {
      tooltipText: m
    }) : null]
  })
}

function Z(e) {
  let {
    guild: t,
    id: n,
    isLocked: i,
    lockTooltipText: o,
    openEntryContextMenu: l
  } = e, a = (0, d.e7)([O.default], () => O.default.getUser(n)), s = (0, d.e7)([j.ZP], () => {
    var e;
    return null === (e = j.ZP.getMember(t.id, n)) || void 0 === e ? void 0 : e.nick
  }, [t.id, n]), c = (0, d.e7)([N.Z], () => N.Z.hidePersonalInformation);
  return null == a ? null : (0, r.jsxs)("div", {
    onContextMenu: l,
    className: I.identifier,
    children: [(0, r.jsx)(u.qEK, {
      className: I.image,
      src: a.getAvatarURL(t.id, 24),
      "aria-label": a.username,
      size: u.EFr.SIZE_24
    }), (0, r.jsx)(u.Text, {
      className: I.roleName,
      color: "header-primary",
      variant: "text-md/normal",
      children: null != s ? s : a.username
    }), c ? null : (0, r.jsx)(u.Text, {
      className: I.tag,
      variant: "text-sm/normal",
      children: y.ZP.getUserTag(a)
    }), i ? (0, r.jsx)(W, {
      tooltipText: o
    }) : null]
  })
}

function W(e) {
  let {
    tooltipText: t
  } = e;
  return (0, r.jsx)(u.ua7, {
    text: t,
    children: e => (0, r.jsx)("div", E(S({
      className: I.lockIcon
    }, e), {
      children: (0, r.jsx)(u.mBM, {
        size: "xs",
        color: "currentColor"
      })
    }))
  })
}