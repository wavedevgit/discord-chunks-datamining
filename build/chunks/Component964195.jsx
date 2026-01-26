/** Chunk was on web.js **/
/** chunk id: 964195, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b,
  F: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975460 = require("./975460.js"),
  Chunk850046 = require("./850046.js"),
  Chunk619517 = require("./619517.jsx"),
  Chunk633075 = require("./633075.js"),
  Chunk622543 = require("./622543.js"),
  Chunk576622 = require("./576622.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk480463 = require("./480463.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  let n = (0, u.A)(e, i.useMemo(() => null != t ? [t.id] : [], [t])),
    r = (0, o.bG)([p.A], () => p.A.getUserProfile(e));
  i.useEffect(() => {
    let t = new AbortController;
    return (0, _.A)(e, true, {
      abortSignal: t.signal
    }), () => t.abort()
  }, [e]);
  let a = i.useMemo(() => null != r && null != r.widgets && r.widgets.some(e => e instanceof f.R && e.applicationId === (null == t ? true : t.id)), [r, t]);
  return null == t || null == n[t.id] || null == r ? null : {
    previewData: n[t.id],
    hasWidget: a
  }
}

function b(e) {
  let t = (0, c.g)(e.activityApplication),
    n = y(e.userId, t);
  return null == n ? null : (0, r.jsx)(O, E({}, e, n))
}

function O(e) {
  let {
    previewData: {
      previewIcon: t,
      previewText: n
    },
    hasWidget: i
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(m.kL, e.className),
    children: [(0, r.jsx)("div", {
      className: m.Qs,
      children: (0, r.jsxs)(l.Text, {
        variant: "text-xs/semibold",
        lineClamp: 1,
        children: [null != t && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: m.Kk,
            children: (0, r.jsx)(d.Ay, {
              src: t.proxyUrl,
              width: t.width,
              height: t.height,
              responsive: true
            })
          }), " "]
        }), n]
      })
    }), i && (0, r.jsx)(l.DUT, {
      "aria-label": h.intl.string(h.t["OBCR+p"]),
      className: m.NO,
      onClick: t => {
        e.onClickViewMore(t)
      },
      children: (0, r.jsx)(l.KS6, {
        size: "xxs"
      })
    })]
  })
}