/** Chunk was on web.js **/
/** chunk id: 157813, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk71425 = require("./71425.js");

function f(e) {
  let {
    className: t,
    isVertical: n
  } = e;
  return (0, r.jsxs)("div", {
    className: d.iconContainer,
    children: [(0, r.jsx)(s.CJ0, {
      size: "md",
      color: "currentColor",
      className: o()(n ? d.upCaret : d.leftCaret, t)
    }), (0, r.jsx)(s.BFJ, {
      size: "md",
      color: "currentColor",
      className: o()(d.members, t)
    })]
  })
}

function p(e) {
  let {
    className: t,
    isVertical: n
  } = e;
  return (0, r.jsxs)("div", {
    className: d.iconContainer,
    children: [(0, r.jsx)(s.CJ0, {
      size: "md",
      color: "currentColor",
      className: o()(n ? d.downCaret : d.rightCaret, t)
    }), n && (0, r.jsx)(s.BFJ, {
      size: "md",
      color: "currentColor",
      className: o()(d.members, t)
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

  function m() {
    l.Z.toggleParticipants(t, !a)
  }
  let h = i.useCallback(e => {
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
  return (0, r.jsx)(c.Z, {
    label: a ? u.intl.string(u.t.QJMRUB) : u.intl.string(u.t.vZiwmG),
    className: o()(d.participantsButton, n),
    onClick: m,
    iconComponent: h,
    shouldShowTooltip: !_
  })
}