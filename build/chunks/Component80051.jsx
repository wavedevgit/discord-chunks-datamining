/** Chunk was on web.js **/
/** chunk id: 80051, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk709562 = require("./709562.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk232163 = require("./232163.js");

function f(e) {
  let {
    className: t,
    isVertical: n
  } = e;
  return (0, r.jsxs)("div", {
    className: d.zc,
    children: [(0, r.jsx)(s.abt, {
      size: "md",
      color: "currentColor",
      className: o()(n ? d.pL : d.RJ, t)
    }), (0, r.jsx)(s.nFg, {
      size: "md",
      color: "currentColor",
      className: o()(d.ol, t)
    })]
  })
}

function p(e) {
  let {
    className: t,
    isVertical: n
  } = e;
  return (0, r.jsxs)("div", {
    className: d.zc,
    children: [(0, r.jsx)(s.abt, {
      size: "md",
      color: "currentColor",
      className: o()(n ? d.iy : d.Yr, t)
    }), n && (0, r.jsx)(s.nFg, {
      size: "md",
      color: "currentColor",
      className: o()(d.ol, t)
    })]
  })
}

function _(e) {
  let {
    channelId: t,
    className: n,
    isParticipantsOpen: a,
    isVertical: s = false,
    hideTooltip: _ = false
  } = e;

  function h() {
    l.A.toggleParticipants(t, !a)
  }
  let m = i.useCallback(e => {
    let {
      className: t
    } = e;
    return a ? (0, r.jsx)(p, {
      className: t,
      isVertical: s
    }) : (0, r.jsx)(f, {
      className: t,
      isVertical: s
    })
  }, [a, s]);
  return (0, r.jsx)(c.A, {
    label: a ? u.intl.string(u.t.QJMRUB) : u.intl.string(u.t.vZiwmG),
    className: o()(d.N9, n),
    onClick: h,
    iconComponent: m,
    shouldShowTooltip: !_
  })
}