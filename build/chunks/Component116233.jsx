/** Chunk was on web.js **/
/** chunk id: 116233, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m,
  a: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk915009 = require("./915009.js"),
  Chunk631885 = require("./631885.js"),
  Chunk711703 = require("./711703.js"),
  Chunk907995 = require("./907995.jsx"),
  Chunk970013 = require("./970013.js"),
  Chunk342386 = require("./342386.js"),
  Chunk484710 = require("./484710.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk517319 = require("./517319.js");

function m() {
  let e = (0, l.ZM)(),
    t = () => {
      (0, f.default)(), o.Z.openPrivateChannel({
        recipientIds: e
      })
    };
  return (0, r.jsx)(u.f, {
    label: h.default.i284fU,
    labelHook: t,
    noticeType: p.nq.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
    count: e.length
  })
}

function g() {
  let e = (0, s.LN)(),
    t = (0, l.ZM)(),
    n = i.useCallback(() => {
      (0, f.default)(), o.Z.openPrivateChannel({
        recipientIds: t
      }), (0, c.l)(p.nq.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, p.up.LEARN_MORE)
    }, [t]),
    u = i.useCallback(() => {
      (0, c.l)(p.nq.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, p.up.VIEWED)
    }, []);
  return i.useMemo(() => {
    if (e) return {
      type: d.v.INLINE_NOTICE,
      noticeType: "info",
      trackView: u,
      useText: () => _.intl.format(h.default.i284fU, {
        hook: (e, t) => (0, r.jsx)(a.eee, {
          onClick: n,
          children: e
        }, t),
        count: t.length
      })
    }
  }, [n, e, t.length, u])
}