/** Chunk was on 47841 **/
/** chunk id: 259866, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Mj: () => f,
  mU: () => b,
  tB: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk591552 = require("./591552.js"),
  Chunk961973 = require("./961973.js"),
  Chunk527678 = require("./527678.js"),
  Chunk655943 = require("./655943.js"),
  Chunk539916 = require("./539916.js"),
  Chunk985018 = require("./985018.jsx");

function p(e, t) {
  let n = (0, l.yK)([u.A], () => (0, c.G4)(e, t, u.A.editedOnboardingPrompts));
  return [(0, l.yK)([u.A], () => (0, c.G4)(e, t, u.A.editedOnboardingPrompts, c.VU)), n]
}

function f(e) {
  let t = (0, l.bG)([o.A], () => o.A.isAdvancedMode(e)),
    [n] = [(0, l.yK)([o.A], () => (0, c.G4)(e, o.A.getDefaultChannelIds(e), o.A.getOnboardingPrompts(e), c.VU))];
  return !!t && n.length >= g.Kd
}

function b(e) {
  let {
    guildId: t,
    className: n
  } = e, c = (0, l.bG)([o.A], () => o.A.isAdvancedMode(t)), u = i.useCallback(() => {
    let e = c ? g.SD.ONBOARDING_DEFAULT : g.SD.ONBOARDING_ADVANCED;
    c ? (0, s.A)({
      title: m.intl.string(m.t["49+ONj"]),
      subtitle: m.intl.string(m.t.TLkoOt),
      variant: "primary",
      confirmText: m.intl.string(m.t.R9GHya),
      onConfirm: () => (0, d.CP)(t, e)
    }) : (0, s.A)({
      title: m.intl.string(m.t.YB9xUF),
      subtitle: m.intl.string(m.t.BcGGVn),
      variant: "primary",
      confirmText: m.intl.string(m.t.ts6u6r),
      onConfirm: () => (0, d.CP)(t, e)
    })
  }, [t, c]);
  return (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)(a.MzZ, {
      onClick: u,
      children: (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-link",
        children: c ? m.intl.string(m.t.OmpxWy) : m.intl.string(m.t.ozsQBC)
      })
    })
  })
}