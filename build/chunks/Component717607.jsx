/** Chunk was on 97492 **/
/** chunk id: 717607, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk607272 = require("./607272.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk993169 = require("./993169.js");

function c(e) {
  let {
    userId: t,
    applicationId: n
  } = e, [c, u] = l.useState(false), [d, f] = l.useState(false), p = l.useCallback(async e => {
    e.stopPropagation(), f(true);
    try {
      await a.A.cancelFriendRequest({
        userId: t,
        applicationId: n,
        location: "ActionButtonFriendRequest"
      })
    } finally {
      f(false)
    }
  }, [n, t]), h = l.useCallback(async e => {
    e.stopPropagation(), u(true);
    try {
      await a.A.maybeConfirmFriendRequestAccept({
        userId: t,
        applicationId: n,
        location: "ActionButtonFriendRequest"
      })
    } finally {
      u(false)
    }
  }, [n, t]);
  return (0, r.jsx)("div", {
    className: o.Ze,
    children: (0, r.jsxs)(i.e2v, {
      size: "sm",
      children: [(0, r.jsx)(i.$nd, {
        variant: "active",
        onClick: h,
        text: s.intl.string(s.t.Zcibdf),
        loading: c,
        disabled: d
      }), (0, r.jsx)(i.$nd, {
        variant: "secondary",
        onClick: p,
        text: s.intl.string(s.t.xuio0C),
        loading: d,
        disabled: c
      })]
    })
  })
}