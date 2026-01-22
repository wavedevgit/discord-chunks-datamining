/** Chunk was on 47841 **/
/** chunk id: 259866, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Mj: () => m,
  mU: () => p,
  tB: () => b
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

function b(e, t) {
  let n = (0, l.yK)([u.A], () => (0, o.G4)(e, t, u.A.editedOnboardingPrompts));
  return [(0, l.yK)([u.A], () => (0, o.G4)(e, t, u.A.editedOnboardingPrompts, o.VU)), n]
}

function m(e) {
  let t = (0, l.bG)([c.A], () => c.A.isAdvancedMode(e)),
    [n] = [(0, l.yK)([c.A], () => (0, o.G4)(e, c.A.getDefaultChannelIds(e), c.A.getOnboardingPrompts(e), o.VU))];
  return !!t && n.length >= f.Kd
}

function p(e) {
  let {
    guildId: t,
    className: n
  } = e, o = (0, l.bG)([c.A], () => c.A.isAdvancedMode(t)), u = i.useCallback(() => {
    let e = o ? f.SD.ONBOARDING_DEFAULT : f.SD.ONBOARDING_ADVANCED;
    o ? (0, s.A)({
      title: g.intl.string(g.t["49+ONj"]),
      subtitle: g.intl.string(g.t.TLkoOt),
      variant: "primary",
      confirmText: g.intl.string(g.t.R9GHya),
      onConfirm: () => (0, d.CP)(t, e)
    }) : (0, s.A)({
      title: g.intl.string(g.t.YB9xUF),
      subtitle: g.intl.string(g.t.BcGGVn),
      variant: "primary",
      confirmText: g.intl.string(g.t.ts6u6r),
      onConfirm: () => (0, d.CP)(t, e)
    })
  }, [t, o]);
  return (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)(a.MzZ, {
      onClick: u,
      children: (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-link",
        children: o ? g.intl.string(g.t.OmpxWy) : g.intl.string(g.t.ozsQBC)
      })
    })
  })
}