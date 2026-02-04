/** Chunk was on 21738 **/
/** chunk id: 926441, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk498419 = require("./498419.js"),
  l = require.n(Chunk498419),
  Chunk481613 = require("./481613.js"),
  s = require.n(Chunk481613),
  Chunk311907 = require("./311907.js"),
  Chunk800828 = require("./800828.js"),
  Chunk912309 = require("./912309.js"),
  Chunk458294 = require("./458294.js"),
  Chunk803224 = require("./803224.js"),
  Chunk994500 = require("./994500.js"),
  Chunk503509 = require("./503509.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk726249 = require("./726249.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let E = new Set(["Blink", "Gecko", "WebKit"]),
  O = Chunk652215.tEg;
if (Chunk723702.isPlatformEmbedded) O = e => m.Ay.setBadge(e);
else if (E.has(s().layout)) {
  let e = new(l())({
    animation: "none"
  });
  O = t => {
    try {
      (0, A.sF)(t), e.badge(false === t ? "•" : t)
    } catch (e) {}
  }
}

function y() {
  let e = (0, o.bG)([f.A], () => f.A.hasIncomingCalls()),
    t = (0, o.bG)([d.default, h.A, p.A, c.A], () => {
      let e = d.default.getTotalMentionCount(),
        t = (0, u.dH)([h.A, c.A]),
        n = d.default.hasAnyUnread(),
        r = p.A.getDisableUnreadBadge(),
        i = e + t;
      return 0 === i && n && !r && (i = false), i
    });
  r.useEffect(() => {
    if (!e) return;
    let t = m.Ay.bounceDock("critical"),
      n = (0, A.iA)({
        messages: [b.intl.string(b.t["fk1/bX"])],
        count: 50
      });
    return () => {
      null == t || t(), n()
    }
  }, [e]), r.useEffect(() => {
    O(t)
  }, [t]), r.useEffect(() => () => O(0), [])
}