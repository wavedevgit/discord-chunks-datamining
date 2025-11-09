/** Chunk was on web.js **/
/** chunk id: 157813, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk303659 = require("./303659.js");

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

function _(e) {
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

function p(e) {
  let {
    channelId: t,
    className: n,
    isParticipantsOpen: a,
    isVertical: s = false,
    hideTooltip: p = false
  } = e;

  function h() {
    l.Z.toggleParticipants(t, !a)
  }
  let m = i.useCallback(e => {
    let {
      className: t
    } = e;
    return a ? (0, r.jsx)(_, {
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
    onClick: h,
    iconComponent: m,
    shouldShowTooltip: !p
  })
}