/** Chunk was on web.js **/
/** chunk id: 157813, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk321575 = require("./321575.js");

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
      className: a()(n ? d.upCaret : d.leftCaret, t)
    }), (0, r.jsx)(s.BFJ, {
      size: "md",
      color: "currentColor",
      className: a()(d.members, t)
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
      className: a()(n ? d.downCaret : d.rightCaret, t)
    }), n && (0, r.jsx)(s.BFJ, {
      size: "md",
      color: "currentColor",
      className: a()(d.members, t)
    })]
  })
}

function p(e) {
  let {
    channelId: t,
    className: n,
    isParticipantsOpen: o,
    isVertical: s = false,
    hideTooltip: p = false
  } = e;

  function h() {
    l.Z.toggleParticipants(t, !o)
  }
  let m = i.useCallback(e => {
    let {
      className: t
    } = e;
    return o ? (0, r.jsx)(_, {
      className: t,
      isVertical: s
    }) : (0, r.jsx)(f, {
      className: t,
      isVertical: s
    })
  }, [o, s]);
  return (0, r.jsx)(c.Z, {
    label: o ? u.intl.string(u.t.QJMRUF) : u.intl.string(u.t.vZiwmJ),
    className: a()(d.participantsButton, n),
    onClick: h,
    iconComponent: m,
    shouldShowTooltip: !p
  })
}