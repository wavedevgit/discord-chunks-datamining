/** Chunk was on web.js **/
/** chunk id: 648052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk485341 = require("./485341.js"),
  Chunk819325 = require("./819325.js"),
  Chunk184325 = require("./184325.jsx"),
  Chunk228168 = require("./228168.js");
let u = {
  [Chunk228168.lY.POPOUT]: 12,
  [Chunk228168.lY.MODAL]: 26,
  [Chunk228168.lY.MODAL_V2]: 16,
  [Chunk228168.lY.SIDEBAR]: 13
};

function d(e) {
  let {
    displayProfile: t,
    themeType: n,
    pendingLegacyUsernameDisabled: c,
    pendingBadges: d,
    onClose: f,
    shouldOpenBadgeTooltip: _,
    shouldGlowTenureBadge: p
  } = e, h = (0, o.Z)(t, c), m = i.useMemo(() => {
    if (null == d) return (0, s.w)(h);
    let e = new Set(h.map(e => e.id)),
      t = [...h, ...d.filter(t => !e.has(t.id))];
    return (0, s.w)(t)
  }, [h, d]);
  return 0 === m.length ? null : (0, r.jsx)(r.Fragment, {
    children: (0, a.chunk)(m, u[n]).map(e => (0, r.jsx)(l.Z, {
      badges: e,
      displayProfile: t,
      onClose: f,
      shouldOpenBadgeTooltip: _,
      shouldGlowTenureBadge: p
    }, e[0].id))
  })
}