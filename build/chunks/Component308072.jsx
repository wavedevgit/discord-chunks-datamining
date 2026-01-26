/** Chunk was on 39048 **/
/** chunk id: 308072, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    applicationId: t,
    selected: n,
    onClick: l,
    disabled: g
  } = e, {
    isFetching: m,
    coverImageUrl: p
  } = (0, c.n)(t, {
    coverImageSize: 256
  }), f = (0, o.bG)([d.A], () => {
    var e, n;
    return null != (e = null == (n = d.A.getDetectableGame(t)) ? true : n.name) ? e : ""
  }), h = i.useCallback(() => {
    null == l || l(t)
  }, [t, l]), b = i.useMemo(() => m ? null : null == p ? (0, r.jsx)("div", {
    className: u.gP,
    children: (0, r.jsx)(a._7Z, {
      size: "lg"
    })
  }) : (0, r.jsx)("img", {
    className: u.Su,
    alt: f,
    src: p
  }), [p, m, f]);
  return (0, r.jsxs)("div", {
    className: s()(u.id, {
      [u.rX]: !n,
      [u.r9]: g
    }),
    children: [(0, r.jsxs)(a.DUT, {
      "aria-disabled": g,
      tabIndex: g ? false : 0,
      onClick: g ? true : h,
      className: s()(u.a8, {
        [u.AL]: m,
        [u.r9]: g
      }),
      children: [n && (0, r.jsx)("div", {
        className: u.jK,
        children: (0, r.jsx)(a.P7L, {
          checked: n
        })
      }), b]
    }), (0, r.jsx)(a.Text, {
      className: u.mO,
      variant: "text-xs/medium",
      color: "text-strong",
      children: f
    })]
  })
}