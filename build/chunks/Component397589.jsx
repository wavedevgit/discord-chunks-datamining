/** Chunk was on web.js **/
/** chunk id: 397589, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk739124 = require("./739124.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = e => {
  var t;
  let {
    message: n
  } = e, b = i.useRef(null), O = (0, f.p7)("Message Header") && n.hasPotions(), I = s.Z.getChannel(n.getChannelId()), T = null == (t = n.potions) ? true : t[0], S = i.useMemo(() => {
    var e;
    if (null == T) return null;
    let t = l.default.getUser(T.used_by);
    return null != (e = (0, u.y)(null == I ? true : I.getGuildId(), null == I ? true : I.id, t)) ? e : null == t ? true : t.globalName
  }, [T, I]), A = i.useCallback(() => {
    if (null != b.current && (0, h.Uw)(n)) {
      let {
        x: e,
        y: t,
        width: r,
        height: i
      } = b.current.getBoundingClientRect();
      (0, _.Z)(n, {
        x: e,
        y: t,
        w: r,
        h: i
      }, true, d.LL.UserTriggered)
    }
  }, [n]), N = i.useCallback(() => {
    (0, a.Z)(c.Z.getArticleURL(m.BhN.CONFETTI_POTION))
  }, []);
  return O && null != S && (null == T ? true : T.type) === p.B.CONFETTI ? (0, r.jsx)(o.P3F, {
    onFocus: A,
    onClick: N,
    "aria-label": g.intl.string(g.t.Mp5k6O),
    children: (0, r.jsx)(o.ua7, {
      text: g.intl.formatToPlainString(g.t["FE++aG"], {
        user: S
      }),
      children: e => (0, r.jsxs)("div", v(y({
        ref: b,
        className: E.potionBadge
      }, e), {
        children: [(0, r.jsx)(o.l22, {
          size: "custom",
          color: "currentColor",
          width: 12,
          height: 12
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/bold",
          color: "currentColor",
          children: g.intl.string(g.t["8Rrro6"])
        })]
      }))
    })
  }) : null
}