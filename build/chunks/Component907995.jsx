/** Chunk was on web.js **/
/** chunk id: 907995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk711703 = require("./711703.js"),
  Chunk484710 = require("./484710.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk449081 = require("./449081.js");

function f(e) {
  let {
    label: t,
    labelHook: n,
    count: a,
    dismissNotice: f,
    className: p,
    noticeType: _
  } = e, m = null != f;
  i.useEffect(() => {
    (0, l.l)(_, c.up.VIEWED)
  }, [_]);
  let h = i.useCallback(() => {
      null != f && (f(), (0, l.l)(_, c.up.DISMISS))
    }, [_, f]),
    g = i.useCallback(() => {
      n(), (0, l.l)(_, c.up.LEARN_MORE)
    }, [_, n]);
  return (0, r.jsxs)("div", {
    className: o()(d.safetySettingsNotice, p),
    children: [(0, r.jsx)(s.d3s, {
      size: "md"
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "interactive-text-active",
      children: null != a ? u.intl.format(t, {
        hook: (e, t) => (0, r.jsx)(s.Anchor, {
          onClick: g,
          children: e
        }, t),
        count: a
      }) : u.intl.format(t, {
        hook: (e, t) => (0, r.jsx)(s.Anchor, {
          onClick: g,
          children: e
        }, t)
      })
    }), m && (0, r.jsx)(s.P3F, {
      className: d.closeButton,
      onClick: h,
      children: (0, r.jsx)(s.Dio, {})
    })]
  })
}