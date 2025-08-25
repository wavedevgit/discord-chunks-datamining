/** Chunk was on web.js **/
/** chunk id: 907995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk711703 = require("./711703.js"),
  Chunk484710 = require("./484710.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk449081 = require("./449081.js");

function f(e) {
  let {
    label: t,
    labelHook: n,
    dismissNotice: o,
    className: f,
    noticeType: _
  } = e, p = null != o;
  i.useEffect(() => {
    (0, l.l)(_, c.up.VIEWED)
  }, [_]);
  let h = i.useCallback(() => {
      null != o && (o(), (0, l.l)(_, c.up.DISMISS))
    }, [_, o]),
    m = i.useCallback(() => {
      n(), (0, l.l)(_, c.up.LEARN_MORE)
    }, [_, n]);
  return (0, r.jsxs)("div", {
    className: a()(d.safetySettingsNotice, f),
    children: [(0, r.jsx)(s.d3s, {
      size: "md"
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "interactive-active",
      children: u.intl.format(t, {
        hook: (e, t) => (0, r.jsx)(s.eee, {
          onClick: m,
          children: e
        }, t)
      })
    }), p && (0, r.jsx)(s.P3F, {
      className: d.closeButton,
      onClick: h,
      children: (0, r.jsx)(s.Dio, {})
    })]
  })
}