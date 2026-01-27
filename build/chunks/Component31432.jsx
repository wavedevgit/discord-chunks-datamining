/** Chunk was on web.js **/
/** chunk id: 31432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk262 = require("./262.js"),
  Chunk916858 = require("./916858.js"),
  Chunk542535 = require("./542535.jsx"),
  Chunk996988 = require("./996988.js");
let u = {
  [Chunk996988.d.POPOUT]: 12,
  [Chunk996988.d.MODAL]: 26,
  [Chunk996988.d.MODAL_V2]: 16,
  [Chunk996988.d.SIDEBAR]: 13,
  [Chunk996988.d.VIDEO_TILE_BACKGROUND]: 12
};

function d(e) {
  let {
    displayProfile: t,
    themeType: n,
    pendingLegacyUsernameDisabled: c,
    pendingBadges: d,
    onClose: f,
    shouldOpenBadgeTooltip: p,
    shouldGlowTenureBadge: _
  } = e, h = (0, o.A)(t, c), m = i.useMemo(() => {
    if (null == d) return (0, s.b)(h);
    let e = new Set(h.map(e => e.id)),
      t = [...h, ...d.filter(t => !e.has(t.id))];
    return (0, s.b)(t)
  }, [h, d]);
  return 0 === m.length ? null : (0, r.jsx)(r.Fragment, {
    children: (0, a.chunk)(m, u[n]).map(e => (0, r.jsx)(l.A, {
      badges: e,
      displayProfile: t,
      onClose: f,
      shouldOpenBadgeTooltip: p,
      shouldGlowTenureBadge: _
    }, e[0].id))
  })
}