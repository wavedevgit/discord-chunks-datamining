/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  O4: () => h,
  OA: () => p,
  Wu: () => C
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(399606),
  a = n(481060),
  l = n(312913),
  o = n(45966),
  A = n(637853),
  c = n(983135),
  d = n(208665),
  u = n(290511),
  g = n(388032);

function f(e) {
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

function m(e, t) {
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

function p(e, t) {
  let n = (0, s.Wu)([d.Z], () => (0, A.kl)(e, t, d.Z.editedOnboardingPrompts));
  return [(0, s.Wu)([d.Z], () => (0, A.kl)(e, t, d.Z.editedOnboardingPrompts, A.V7)), n]
}

function h(e) {
  let t = (0, s.e7)([o.Z], () => o.Z.isAdvancedMode(e)),
    [n, r] = function(e) {
      let t = (0, s.Wu)([o.Z], () => (0, A.kl)(e, o.Z.getDefaultChannelIds(e), o.Z.getOnboardingPrompts(e)));
      return [(0, s.Wu)([o.Z], () => (0, A.kl)(e, o.Z.getDefaultChannelIds(e), o.Z.getOnboardingPrompts(e), A.V7)), t]
    }(e);
  return !!t && r.length >= u.md && n.length >= u.X
}

function C(e) {
  let {
    guildId: t,
    className: n
  } = e, A = (0, l.UQ)(t).advancedModeAllowed, d = (0, s.e7)([o.Z], () => o.Z.isAdvancedMode(t)), p = i.useCallback(() => {
    let e = d ? u.Un.ONBOARDING_DEFAULT : u.Un.ONBOARDING_ADVANCED;
    d ? (0, a.h7j)(n => (0, r.jsx)(a.ConfirmModal, m(f({
      header: g.NW.string(g.t["49+ONj"]),
      confirmText: g.NW.string(g.t.R9GHyc),
      cancelText: g.NW.string(g.t["ETE/oK"]),
      confirmButtonColor: a.zxk.Colors.BRAND,
      onConfirm: () => (0, c.Ts)(t, e)
    }, n), {
      children: (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        children: g.NW.string(g.t.TLkoOj)
      })
    }))) : (0, a.h7j)(n => (0, r.jsx)(a.ConfirmModal, m(f({
      header: g.NW.string(g.t.YB9xUF),
      confirmText: g.NW.string(g.t.ts6u6u),
      cancelText: g.NW.string(g.t["ETE/oK"]),
      confirmButtonColor: a.zxk.Colors.BRAND,
      onConfirm: () => (0, c.Ts)(t, e)
    }, n), {
      children: (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        children: g.NW.string(g.t.BcGGVl)
      })
    })))
  }, [t, d]);
  return A ? (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)(a.eee, {
      onClick: p,
      children: (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-link",
        children: d ? g.NW.string(g.t.OmpxW1) : g.NW.string(g.t.ozsQBA)
      })
    })
  }) : null
}