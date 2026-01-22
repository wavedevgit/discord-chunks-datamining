/** Chunk was on 47841 **/
/** chunk id: 308072, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk311907 = require("./311907.js"),
  Chunk585958 = require("./585958.js"),
  Chunk760751 = require("./760751.js"),
  Chunk677230 = require("./677230.js");

function f(e) {
  let {
    applicationId: t,
    selected: n,
    onClick: l,
    disabled: f
  } = e, {
    isFetching: g,
    coverImageUrl: b
  } = (0, o.n)(t, {
    coverImageSize: 256
  }), m = (0, c.bG)([d.A], () => {
    var e, n;
    return null != (e = null == (n = d.A.getDetectableGame(t)) ? true : n.name) ? e : ""
  }), p = i.useCallback(() => {
    null == l || l(t)
  }, [t, l]), x = i.useMemo(() => g ? null : null == b ? (0, r.jsx)("div", {
    className: u.gP,
    children: (0, r.jsx)(a._7Z, {
      size: "lg"
    })
  }) : (0, r.jsx)("img", {
    className: u.Su,
    alt: m,
    src: b
  }), [b, g, m]);
  return (0, r.jsxs)("div", {
    className: s()(u.id, {
      [u.rX]: !n,
      [u.r9]: f
    }),
    children: [(0, r.jsxs)(a.DUT, {
      "aria-disabled": f,
      tabIndex: f ? false : 0,
      onClick: f ? true : p,
      className: s()(u.a8, {
        [u.AL]: g,
        [u.r9]: f
      }),
      children: [n && (0, r.jsx)("div", {
        className: u.jK,
        children: (0, r.jsx)(a.P7L, {
          checked: n
        })
      }), x]
    }), (0, r.jsx)(a.Text, {
      className: u.mO,
      variant: "text-xs/medium",
      color: "text-strong",
      children: m
    })]
  })
}