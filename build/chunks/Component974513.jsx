/** Chunk was on 9536 **/
/** chunk id: 974513, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  O4: () => b,
  OA: () => m,
  Wu: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk983135 = require("./983135.js"),
  Chunk208665 = require("./208665.js"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx");

function m(e, t) {
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

function p(e) {
  let {
    guildId: t,
    className: n
  } = e, c = (0, l.e7)([o.Z], () => o.Z.isAdvancedMode(t)), u = i.useCallback(() => {
    let e = c ? g.Un.ONBOARDING_DEFAULT : g.Un.ONBOARDING_ADVANCED;
    c ? (0, a.Z)({
      title: f.intl.string(f.t["49+ONj"]),
      subtitle: f.intl.string(f.t.TLkoOt),
      variant: "primary",
      confirmText: f.intl.string(f.t.R9GHya),
      onConfirm: () => (0, d.Ts)(t, e)
    }) : (0, a.Z)({
      title: f.intl.string(f.t.YB9xUF),
      subtitle: f.intl.string(f.t.BcGGVn),
      variant: "primary",
      confirmText: f.intl.string(f.t.ts6u6r),
      onConfirm: () => (0, d.Ts)(t, e)
    })
  }, [t, c]);
  return (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)(s.Anchor, {
      onClick: u,
      children: (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-link",
        children: c ? f.intl.string(f.t.OmpxWy) : f.intl.string(f.t.ozsQBC)
      })
    })
  })
}