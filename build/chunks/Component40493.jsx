/** Chunk was on web.js **/
/** chunk id: 40493, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342494 = require("./342494.js"),
  Chunk807098 = require("./807098.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  var t, n;
  let {
    onComplete: c,
    onCheckItOutClick: u,
    markAsDismissed: d,
    coachmarkConfig: f,
    children: p
  } = e, _ = (0, s.T)(null == f ? true : f.asset), h = i.useRef(null), m = i.useRef(null), [g, E] = i.useState(0);
  i.useEffect(() => {
    let e = () => {
        let e = h.current,
          t = m.current;
        if (null == e || null == t) return;
        let n = e.getBoundingClientRect(),
          r = t.getBoundingClientRect();
        E(n.left + n.width / 2 - (r.left + r.width / 2))
      },
      t = new ResizeObserver(e),
      n = h.current,
      r = m.current;
    return null != n && t.observe(n), null != r && (t.observe(r), e()), () => t.disconnect()
  }, []);
  let b = {
      text: l.intl.string(l.t.RzWDqY),
      onClick: () => {
        u(), c(), d(o.i.TAKE_ACTION)
      }
    },
    y = () => {
      c(), d(o.i.USER_DISMISS)
    };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: h,
      children: p
    }), (0, r.jsx)(a.HZ, {
      targetElementRef: h,
      shouldShow: true,
      position: "top",
      align: "center",
      title: null != (t = null == f ? true : f.header) ? t : "",
      body: null != (n = null == f ? true : f.body) ? n : "",
      assetUrl: null != _ ? _ : "",
      action: b,
      caretConfig: {
        align: "custom",
        customOffset: g
      },
      onRequestClose: y,
      popoverRef: m
    })]
  })
}