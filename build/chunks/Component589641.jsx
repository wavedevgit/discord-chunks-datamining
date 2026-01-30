/** Chunk was on 78376 **/
/** chunk id: 589641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A,
  I: () => f
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

function A() {
  let e = (0, o.vx)();
  return (0, r.jsx)(d.e, {
    label: g.default.i284fU,
    labelHook: () => {
      (0, _.default)(), s.A.openPrivateChannel({
        recipientIds: e
      })
    },
    noticeType: p.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
    count: e.length
  })
}

function f() {
  let e = (0, a.uM)(),
    t = (0, o.vx)(),
    n = i.useCallback(() => {
      (0, _.default)(), s.A.openPrivateChannel({
        recipientIds: t
      }), (0, c.N)(p.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, p.YX.LEARN_MORE)
    }, [t]),
    d = i.useCallback(() => {
      (0, c.N)(p.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, p.YX.VIEWED)
    }, []);
  return i.useMemo(() => {
    if (e) return {
      type: u.W.INLINE_NOTICE,
      noticeType: "info",
      trackView: d,
      useText: () => m.intl.format(g.default.i284fU, {
        hook: (e, t) => (0, r.jsx)(l.MzZ, {
          onClick: n,
          children: e
        }, t),
        count: t.length
      })
    }
  }, [n, e, t.length, d])
}