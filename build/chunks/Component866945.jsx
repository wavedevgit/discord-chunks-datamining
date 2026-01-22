/** Chunk was on web.js **/
/** chunk id: 866945, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => f
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

function f(e) {
  let {
    label: t,
    labelHook: n,
    count: a,
    dismissNotice: f,
    className: p,
    noticeType: _
  } = e, h = null != f;
  i.useEffect(() => {
    (0, l.N)(_, c.YX.VIEWED)
  }, [_]);
  let m = i.useCallback(() => {
      null != f && (f(), (0, l.N)(_, c.YX.DISMISS))
    }, [_, f]),
    g = i.useCallback(() => {
      n(), (0, l.N)(_, c.YX.LEARN_MORE)
    }, [_, n]);
  return (0, r.jsxs)("div", {
    className: s()(d.I, p),
    children: [(0, r.jsx)(o.mir, {
      size: "md"
    }), (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "interactive-text-active",
      children: null != a ? u.intl.format(t, {
        hook: (e, t) => (0, r.jsx)(o.MzZ, {
          onClick: g,
          children: e
        }, t),
        count: a
      }) : u.intl.format(t, {
        hook: (e, t) => (0, r.jsx)(o.MzZ, {
          onClick: g,
          children: e
        }, t)
      })
    }), h && (0, r.jsx)(o.DUT, {
      className: d.b,
      onClick: m,
      children: (0, r.jsx)(o.PGe, {})
    })]
  })
}