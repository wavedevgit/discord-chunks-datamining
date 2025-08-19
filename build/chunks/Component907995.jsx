/** Chunk was on 66181 **/
/** chunk id: 907995, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => m
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

function m(e) {
  let {
    label: t,
    labelHook: n,
    dismissNotice: s,
    className: m,
    noticeType: p
  } = e, g = null != s;
  r.useEffect(() => {
    (0, o.l)(p, c.up.VIEWED)
  }, [p]);
  let h = r.useCallback(() => {
      null != s && (s(), (0, o.l)(p, c.up.DISMISS))
    }, [p, s]),
    f = r.useCallback(() => {
      n(), (0, o.l)(p, c.up.LEARN_MORE)
    }, [p, n]);
  return (0, i.jsxs)("div", {
    className: a()(u.safetySettingsNotice, m),
    children: [(0, i.jsx)(l.d3s, {
      size: "md"
    }), (0, i.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "interactive-active",
      children: d.intl.format(t, {
        hook: (e, t) => (0, i.jsx)(l.eee, {
          onClick: f,
          children: e
        }, t)
      })
    }), g && (0, i.jsx)(l.P3F, {
      className: u.closeButton,
      onClick: h,
      children: (0, i.jsx)(l.Dio, {})
    })]
  })
}