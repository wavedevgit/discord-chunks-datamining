/** Chunk was on web.js **/
/** chunk id: 23568, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk937773 = require("./937773.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk403362 = require("./403362.js"),
  Chunk427262 = require("./427262.js"),
  Chunk448613 = require("./448613.js"),
  Chunk679492 = require("./679492.jsx"),
  Chunk8925 = require("./8925.jsx"),
  Chunk939496 = require("./939496.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk307731 = require("./307731.js"),
  Chunk818348 = require("./818348.js"),
  Chunk650583 = require("./650583.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk433366 = require("./433366.js");
let O = e => {
  let {
    emoji: t,
    username: n,
    sourceType: r,
    sourceDetails: i
  } = e, a = ":".concat(t.name, ":");
  switch (r) {
    case h.dS.ACTIVITY:
      let o = y.intl.formatToPlainString(y.t.EUFEJt, {
          username: n
        }),
        s = "\n> ".concat(i);
      return null != i ? "".concat(p.c5).concat(o, "*").concat(s, "\n").concat(a) : "".concat(p.c5).concat(o, "*\n").concat(a);
    case h.dS.AVATAR:
      let l = y.intl.formatToPlainString(y.t.E6H15q, {
        username: n
      });
      return "".concat(p.c5).concat(l, "*\n").concat(a);
    case h.dS.STATUS:
      let u = y.intl.formatToPlainString(y.t.XPQgL2, {
          username: n
        }),
        d = "\n> ".concat(i);
      return null != i ? "".concat(p.c5).concat(u, "*").concat(d, "\n").concat(a) : "".concat(p.c5).concat(u, "*\n").concat(a);
    default:
      (0, c.xb)(r)
  }
};

function v(e) {
  let {
    user: t,
    guildId: n,
    entry: c,
    sourceType: p,
    sourceDetails: y,
    setPopoutRef: v,
    onAction: A,
    onClose: I
  } = e, {
    resetInteraction: S,
    setInteractionToast: T
  } = (0, f.Pq)(), {
    theme: C
  } = (0, _.E)(), N = (0, a.bG)([l.A], () => l.A.theme), w = (0, o.Mw)(N) ? !(0, o.Mw)(C) : (0, o.Mw)(C), R = i.useRef(null);
  i.useEffect(() => {
    null == v || v(null == R ? true : R.current)
  }, [R, v]), i.useEffect(() => {
    let e = e => {
      e.key === E.dh.ESCAPE && (e.stopPropagation(), S())
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e)
    }
  }, [I, S]);
  let P = async e => {
    if (null == e) return;
    p === h.dS.AVATAR ? A({
      action: "SEND_REACT_AVATAR"
    }) : p === h.dS.STATUS ? A({
      action: "SEND_REACT_CUSTOM_STATUS"
    }) : A({
      action: "SEND_REACT_ACTIVITY"
    });
    let n = O({
      emoji: e,
      username: u.Ay.getName(t),
      sourceType: p,
      sourceDetails: y
    });
    T(null);
    try {
      await (0, d.p)({
        userId: t.id,
        content: n,
        location: "UserProfileReactPopout",
        openChannel: false,
        whenReady: false,
        entry: c
      })
    } catch (e) {}
    T(h.AQ.REACT)
  };
  return (0, r.jsx)(s.A, {
    headerClassName: w ? b.X : true,
    guildId: null != n ? n : true,
    closePopout: g.tE,
    onSelectEmoji: async e => {
      let {
        emoji: t,
        willClose: n
      } = e;
      await P(t), n && (S(), null == I || I())
    },
    pickerIntention: m.b_.PROFILE
  })
}