/** Chunk was on web.js **/
/** chunk id: 397589, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk377311 = require("./377311.js");
let y = e => {
  var t;
  let {
    message: n
  } = e, y = i.useRef(null), O = (0, p.p7)("Message Header") && n.hasPotions(), v = l.Z.getChannel(n.getChannelId()), S = null == (t = n.potions) ? true : t[0], I = i.useMemo(() => {
    var e;
    if (null == S) return null;
    let t = c.default.getUser(S.used_by);
    return null != (e = (0, d.y)(null == v ? true : v.getGuildId(), null == v ? true : v.id, t)) ? e : null == t ? true : t.globalName
  }, [S, v]), T = i.useCallback(() => {
    if (null != y.current && (0, h.Uw)(n)) {
      let {
        x: e,
        y: t,
        width: r,
        height: i
      } = y.current.getBoundingClientRect();
      (0, _.Z)(n, {
        x: e,
        y: t,
        w: r,
        h: i
      }, true, f.LL.UserTriggered)
    }
  }, [n]), C = i.useCallback(() => {
    (0, s.Z)(u.Z.getArticleURL(g.BhN.CONFETTI_POTION))
  }, []);
  return O && null != I && (null == S ? true : S.type) === m.B.CONFETTI ? (0, r.jsx)(o.P3F, {
    onFocus: T,
    onClick: C,
    "aria-label": E.intl.string(E.t.Mp5k6E),
    children: (0, r.jsx)(a.u, {
      text: E.intl.formatToPlainString(E.t["FE++aN"], {
        user: I
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