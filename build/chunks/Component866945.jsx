/** Chunk was on 32502 **/
/** chunk id: 866945, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk558001 = require("./558001.js"),
  Chunk835002 = require("./835002.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk486529 = require("./486529.js");

function h(e) {
  let {
    label: t,
    labelHook: n,
    count: s,
    dismissNotice: h,
    className: g,
    noticeType: x
  } = e, p = null != h;
  l.useEffect(() => {
    (0, o.N)(x, c.YX.VIEWED)
  }, [x]);
  let m = l.useCallback(() => {
      null != h && (h(), (0, o.N)(x, c.YX.DISMISS))
    }, [x, h]),
    A = l.useCallback(() => {
      n(), (0, o.N)(x, c.YX.LEARN_MORE)
    }, [x, n]);
  return (0, i.jsxs)("div", {
    className: r()(u.I, g),
    children: [(0, i.jsx)(a.mir, {
      size: "md"
    }), (0, i.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "interactive-text-active",
      children: null != s ? d.intl.format(t, {
        hook: (e, t) => (0, i.jsx)(a.MzZ, {
          onClick: A,
          children: e
        }, t),
        count: s
      }) : d.intl.format(t, {
        hook: (e, t) => (0, i.jsx)(a.MzZ, {
          onClick: A,
          children: e
        }, t)
      })
    }), p && (0, i.jsx)(a.DUT, {
      className: u.b,
      onClick: m,
      children: (0, i.jsx)(a.PGe, {})
    })]
  })
}