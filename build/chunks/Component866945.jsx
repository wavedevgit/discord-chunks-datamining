/** Chunk was on 42402 **/
/** chunk id: 866945, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk558001 = require("./558001.js"),
  Chunk835002 = require("./835002.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk486529 = require("./486529.js");

function p(e) {
  let {
    label: t,
    labelHook: n,
    count: i,
    dismissNotice: p,
    className: h,
    noticeType: g
  } = e, f = null != p;
  l.useEffect(() => {
    (0, o.N)(g, c.YX.VIEWED)
  }, [g]);
  let m = l.useCallback(() => {
      null != p && (p(), (0, o.N)(g, c.YX.DISMISS))
    }, [g, p]),
    b = l.useCallback(() => {
      n(), (0, o.N)(g, c.YX.LEARN_MORE)
    }, [g, n]);
  return (0, r.jsxs)("div", {
    className: s()(d.I, h),
    children: [(0, r.jsx)(a.mir, {
      size: "md"
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "interactive-text-active",
      children: null != i ? u.intl.format(t, {
        hook: (e, t) => (0, r.jsx)(a.MzZ, {
          onClick: b,
          children: e
        }, t),
        count: i
      }) : u.intl.format(t, {
        hook: (e, t) => (0, r.jsx)(a.MzZ, {
          onClick: b,
          children: e
        }, t)
      })
    }), f && (0, r.jsx)(a.DUT, {
      className: d.b,
      onClick: m,
      children: (0, r.jsx)(a.PGe, {})
    })]
  })
}