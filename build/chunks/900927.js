/** Chunk was on 82670 **/
r.d(t, {
  Z: () => j
});
var n = r(200651);
r(192379);
var i = r(399606),
  l = r(481060),
  s = r(275759),
  a = r(565138),
  o = r(706454),
  c = r(271383),
  u = r(430824),
  d = r(709054),
  m = r(388032),
  p = r(209643);

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function f(e, t) {
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

function j(e) {
  let {
    userId: t,
    guildId: r,
    textClassName: j,
    tooltipDelay: v
  } = e, x = (0, i.e7)([o.default], () => o.default.locale), g = (0, i.e7)([u.Z], () => null != r ? u.Z.getGuild(r) : null), h = (0, i.e7)([c.ZP], () => null != r ? c.ZP.getMember(r, t) : null), y = (0, s.FI)(d.default.extractTimestamp(t), x), O = (0, s.FI)(null == h ? void 0 : h.joinedAt, x);
  return null == g || null == h ? (0, n.jsx)(l.Text, {
    variant: "text-sm/normal",
    className: j,
    children: y
  }) : (0, n.jsxs)("div", {
    className: p.memberSinceWrapper,
    children: [(0, n.jsxs)("div", {
      className: p.memberSince,
      children: [(0, n.jsx)(l.ua7, {
        text: m.intl.string(m.t.uvGmCw),
        delay: v,
        children: e => (0, n.jsx)(l.gw7, f(b({
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor"
        }, e), {
          className: p.discordIcon
        }))
      }), (0, n.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: j,
        children: y
      })]
    }), (0, n.jsx)("div", {
      className: p.divider
    }), (0, n.jsxs)("div", {
      className: p.memberSince,
      children: [(0, n.jsx)(l.ua7, {
        text: g.name,
        delay: v,
        children: e => (0, n.jsx)(a.Z, f(b({}, e), {
          guild: g,
          size: a.Z.Sizes.SMOL
        }))
      }), (0, n.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: j,
        children: O
      })]
    })]
  })
}