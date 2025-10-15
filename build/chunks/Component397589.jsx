/** Chunk was on web.js **/
/** chunk id: 397589, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk5192 = require("./5192.js"),
  Chunk992970 = require("./992970.js"),
  Chunk111810 = require("./111810.js"),
  Chunk287941 = require("./287941.js"),
  Chunk477931 = require("./477931.js"),
  Chunk235894 = require("./235894.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk975405 = require("./975405.js");
let y = e => {
  var t;
  let {
    message: n
  } = e, y = i.useRef(null), O = (0, _.p7)("Message Header") && n.hasPotions(), v = l.Z.getChannel(n.getChannelId()), I = null == (t = n.potions) ? true : t[0], T = i.useMemo(() => {
    var e;
    if (null == I) return null;
    let t = c.default.getUser(I.used_by);
    return null != (e = (0, d.y)(null == v ? true : v.getGuildId(), null == v ? true : v.id, t)) ? e : null == t ? true : t.globalName
  }, [I, v]), S = i.useCallback(() => {
    if (null != y.current && (0, m.Uw)(n)) {
      let {
        x: e,
        y: t,
        width: r,
        height: i
      } = y.current.getBoundingClientRect();
      (0, p.Z)(n, {
        x: e,
        y: t,
        w: r,
        h: i
      }, true, f.LL.UserTriggered)
    }
  }, [n]), A = i.useCallback(() => {
    (0, s.Z)(u.Z.getArticleURL(g.BhN.CONFETTI_POTION))
  }, []);
  return O && null != T && (null == I ? true : I.type) === h.B.CONFETTI ? (0, r.jsx)(o.P3F, {
    onFocus: S,
    onClick: A,
    "aria-label": E.intl.string(E.t.Mp5k6E),
    children: (0, r.jsx)(a.u, {
      text: E.intl.formatToPlainString(E.t["FE++aN"], {
        user: T
      }),
      children: (0, r.jsxs)("div", {
        ref: y,
        className: b.potionBadge,
        children: [(0, r.jsx)(o.l22, {
          size: "custom",
          color: "currentColor",
          width: 12,
          height: 12
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/bold",
          color: "currentColor",
          children: E.intl.string(E.t["8Rrro+"])
        })]
      })
    })
  }) : null
}