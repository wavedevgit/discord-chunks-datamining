/** Chunk was on 29679 **/
/** chunk id: 974513, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O4: () => b,
  OA: () => h,
  Wu: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk983135 = require("./983135.js"),
  Chunk208665 = require("./208665.js"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
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

function f(e, t) {
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

function h(e, t) {
  let n = (0, l.Wu)([u.Z], () => (0, c.kl)(e, t, u.Z.editedOnboardingPrompts));
  return [(0, l.Wu)([u.Z], () => (0, c.kl)(e, t, u.Z.editedOnboardingPrompts, c.V7)), n]
}

function b(e) {
  let t = (0, l.e7)([o.Z], () => o.Z.isAdvancedMode(e)),
    [n, r] = function(e) {
      let t = (0, l.Wu)([o.Z], () => (0, c.kl)(e, o.Z.getDefaultChannelIds(e), o.Z.getOnboardingPrompts(e)));
      return [(0, l.Wu)([o.Z], () => (0, c.kl)(e, o.Z.getDefaultChannelIds(e), o.Z.getOnboardingPrompts(e), c.V7)), t]
    }(e);
  return !!t && r.length >= g.md && n.length >= g.X
}

function x(e) {
  let {
    guildId: t,
    className: n
  } = e, c = (0, l.e7)([o.Z], () => o.Z.isAdvancedMode(t)), u = i.useCallback(() => {
    let e = c ? g.Un.ONBOARDING_DEFAULT : g.Un.ONBOARDING_ADVANCED;
    c ? (0, s.h7j)(n => (0, r.jsx)(s.ConfirmModal, f(p({
      header: m.intl.string(m.t["49+ONj"]),
      confirmText: m.intl.string(m.t.R9GHya),
      cancelText: m.intl.string(m.t["ETE/oC"]),
      confirmButtonColor: a.zx.Colors.BRAND,
      onConfirm: () => (0, d.Ts)(t, e)
    }, n), {
      children: (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        children: m.intl.string(m.t.TLkoOt)
      })
    }))) : (0, s.h7j)(n => (0, r.jsx)(s.ConfirmModal, f(p({
      header: m.intl.string(m.t.YB9xUF),
      confirmText: m.intl.string(m.t.ts6u6r),
      cancelText: m.intl.string(m.t["ETE/oC"]),
      confirmButtonColor: a.zx.Colors.BRAND,
      onConfirm: () => (0, d.Ts)(t, e)
    }, n), {
      children: (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        children: m.intl.string(m.t.BcGGVn)
      })
    })))
  }, [t, c]);
  return (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)(s.Anchor, {
      onClick: u,
      children: (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-link",
        children: c ? m.intl.string(m.t.OmpxWy) : m.intl.string(m.t.ozsQBC)
      })
    })
  })
}