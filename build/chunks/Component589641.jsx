/** Chunk was on web.js **/
/** chunk id: 589641, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m,
  I: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk171316 = require("./171316.js"),
  Chunk834981 = require("./834981.js"),
  Chunk558001 = require("./558001.js"),
  Chunk866945 = require("./866945.jsx"),
  Chunk933297 = require("./933297.js"),
  Chunk12901 = require("./12901.js"),
  Chunk835002 = require("./835002.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk842130 = require("./842130.js");

function m() {
  let e = (0, l.vx)(),
    t = () => {
      (0, f.default)(), s.A.openPrivateChannel({
        recipientIds: e
      })
    };
  return (0, r.jsx)(u.e, {
    label: h.default.i284fU,
    labelHook: t,
    noticeType: p.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
    count: e.length
  })
}

function g() {
  let e = (0, o.uM)(),
    t = (0, l.vx)(),
    n = i.useCallback(() => {
      (0, f.default)(), s.A.openPrivateChannel({
        recipientIds: t
      }), (0, c.N)(p.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, p.YX.LEARN_MORE)
    }, [t]),
    u = i.useCallback(() => {
      (0, c.N)(p.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, p.YX.VIEWED)
    }, []);
  return i.useMemo(() => {
    if (e) return {
      type: d.W.INLINE_NOTICE,
      noticeType: "info",
      trackView: u,
      useText: () => _.intl.format(h.default.i284fU, {
        hook: (e, t) => (0, r.jsx)(a.MzZ, {
          onClick: n,
          children: e
        }, t),
        count: t.length
      })
    }
  }, [n, e, t.length, u])
}