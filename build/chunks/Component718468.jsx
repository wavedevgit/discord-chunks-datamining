/** Chunk was on web.js **/
/** chunk id: 718468, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m,
  e: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk796873 = require("./796873.js"),
  l = require.n(Chunk796873),
  Chunk397927 = require("./397927.js"),
  Chunk682718 = require("./682718.js"),
  Chunk453771 = require("./453771.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk202494 = require("./202494.js");
let _ = e => {
  let {
    filename: t
  } = e, i = (0, d.GD)(t), a = n(714694)("./icon-file-".concat(i, ".svg"));
  return (0, r.jsx)("img", {
    className: p.Kk,
    src: a,
    alt: f.intl.formatToPlainString(f.t.g6KdFv, {
      fileType: i
    }),
    title: i
  })
};

function h(e) {
  let {
    channelId: t,
    file: n
  } = e, a = i.useMemo(() => {
    let e = n.items;
    return null == e ? f.intl.string(f.t.jfKTes) : 1 === e.length && null != e[0].filename ? e[0].filename : f.intl.formatToPlainString(f.t.D0noUt, {
      count: e.length
    })
  }, [n.items]), o = i.useCallback(() => {
    u.A.cancel(t, n)
  }, [t, n]), s = 100 === n.progress, d = !s && n.currentSize > 0;
  return (0, r.jsx)("div", {
    className: p.Ig,
    children: (0, r.jsxs)("div", {
      className: p.NJ,
      children: [(0, r.jsx)(_, {
        filename: a
      }), (0, r.jsxs)("div", {
        className: p.Jg,
        children: [(0, r.jsxs)("div", {
          className: p.tP,
          children: [(0, r.jsx)("div", {
            className: p.iW,
            children: a
          }), d ? (0, r.jsx)("div", {
            className: p.Ej,
            children: "— ".concat(l().filesize(n.currentSize))
          }) : null]
        }), (0, r.jsx)("div", {
          className: p.L$,
          children: s ? f.intl.string(f.t.jfKTes) : (0, r.jsx)(c.z21, {
            percent: n.progress
          })
        })]
      }), s ? null : (0, r.jsx)(c.DUT, {
        onClick: o,
        children: (0, r.jsx)(c.PGe, {
          size: "md",
          color: "currentColor",
          className: p.x7
        })
      })]
    })
  })
}
let m = e => {
  let {
    className: t,
    url: n,
    fileName: i,
    fileSize: a,
    onClick: s,
    onContextMenu: u,
    renderAdjacentContent: d
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(p.Ig, t),
    children: [(0, r.jsxs)("div", {
      className: p.NJ,
      children: [(0, r.jsx)(_, {
        filename: i
      }), (0, r.jsxs)("div", {
        className: p.Jg,
        children: [(0, r.jsx)("div", {
          className: p.RT,
          children: (0, r.jsx)(c.MzZ, {
            className: p.AD,
            href: n,
            onClick: s,
            onContextMenu: u,
            children: i
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: l().filesize(a)
        })]
      })]
    }), null != d && d()]
  })
}