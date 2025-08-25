/** Chunk was on 5665 **/
/** chunk id: 753898, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk374415 = require("./374415.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk266076 = require("./266076.jsx"),
  Chunk187237 = require("./187237.jsx"),
  Chunk769409 = require("./769409.jsx"),
  Chunk518311 = require("./518311.jsx"),
  Chunk518950 = require("./518950.js"),
  Chunk967128 = require("./967128.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk963392 = require("./963392.js");

function O(e) {
  var t;
  let {
    channel: n,
    children: O,
    user: j
  } = e, E = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), S = null != (t = (0, p.ZP)(n)) ? t : "", {
    avatarDecorationSrc: I,
    eventHandlers: P,
    isAnimating: Z
  } = (0, _.Z)({
    userId: null == j ? true : j.id,
    size: s.EFr.SIZE_80,
    animateOnHover: true
  }), [T, N] = i.useState(false), A = i.useCallback(() => {
    P.onMouseEnter(), N(true)
  }, [P]), w = i.useCallback(() => {
    P.onMouseLeave(), N(false)
  }, [P]), R = !n.isMultiUserDM() && (null == j ? true : j.displayNameStyles) != null;
  return (0, r.jsxs)(C.ZP, {
    channelId: n.id,
    onMouseEnter: A,
    onMouseLeave: w,
    children: [(() => {
      let e = !E && Z;
      return n.isMultiUserDM() ? (0, r.jsx)(g.v, {
        channel: n,
        editable: true,
        location: u.Z.EMPTY_GROUP_DM,
        children: (0, r.jsx)(m.Z, {
          channel: n,
          size: s.EFr.SIZE_80,
          experimentLocation: "empty_messages",
          animated: e,
          "aria-label": S
        })
      }) : (0, r.jsx)(s.qEK, {
        "aria-label": S,
        size: s.EFr.SIZE_80,
        src: (0, d.x)(n, 80, e),
        avatarDecoration: I
      })
    })(), (0, r.jsx)(C.Ot, {
      children: R ? (0, r.jsx)(f.Z, {
        userName: S,
        displayNameStyles: null == j ? true : j.displayNameStyles,
        effectDisplayType: T ? h.F.ANIMATED : h.F.STATIC,
        loop: true
      }) : S
    }), (0, r.jsx)(C.jz, {
      children: O
    }), n.isMultiUserDM() && (0, r.jsxs)(o.h, {
      className: x.buttonContainer,
      children: [(0, r.jsx)(y.l, {
        channel: n,
        text: v.intl.string(v.t["6Qgren"]),
        icon: s.ejJ
      }), (0, r.jsx)(a.z, {
        icon: s.vdY,
        variant: "secondary",
        text: v.intl.string(v.t["5Q9+/P"]),
        "aria-label": v.intl.string(v.t["5Q9+/P"]),
        onClick: () => (0, b.B)(n.id, u.Z.EMPTY_GROUP_DM)
      })]
    })]
  })
}