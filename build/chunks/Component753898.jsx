/** Chunk was on 88647 **/
/** chunk id: 753898, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
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
    user: x
  } = e, E = (0, l.e7)([s.Z], () => s.Z.useReducedMotion), j = null != (t = (0, d.ZP)(n)) ? t : "", {
    avatarDecorationSrc: S,
    eventHandlers: P,
    isAnimating: I
  } = (0, _.Z)({
    userId: null == x ? true : x.id,
    size: o.EFr.SIZE_80,
    animateOnHover: true
  }), [Z, T] = i.useState(false), N = i.useCallback(() => {
    P.onMouseEnter(), T(true)
  }, [P]), A = i.useCallback(() => {
    P.onMouseLeave(), T(false)
  }, [P]), w = !n.isMultiUserDM() && (null == x ? true : x.displayNameStyles) != null;
  return (0, r.jsxs)(y.ZP, {
    channelId: n.id,
    onMouseEnter: N,
    onMouseLeave: A,
    children: [(() => {
      let e = !E && I;
      return n.isMultiUserDM() ? (0, r.jsx)(m.v, {
        channel: n,
        editable: true,
        location: c.Z.EMPTY_GROUP_DM,
        children: (0, r.jsx)(h.Z, {
          channel: n,
          size: o.EFr.SIZE_80,
          experimentLocation: "empty_messages",
          animated: e,
          "aria-label": j
        })
      }) : (0, r.jsx)(o.qEK, {
        "aria-label": j,
        size: o.EFr.SIZE_80,
        src: (0, u.x)(n, 80, e),
        avatarDecoration: S
      })
    })(), (0, r.jsx)(y.Ot, {
      children: w ? (0, r.jsx)(f.Z, {
        userName: j,
        displayNameStyles: null == x ? true : x.displayNameStyles,
        effectDisplayType: Z ? p.F.ANIMATED : p.F.STATIC,
        loop: true
      }) : j
    }), (0, r.jsx)(y.jz, {
      children: O
    }), n.isMultiUserDM() && (0, r.jsxs)(a.hE2, {
      className: v.buttonContainer,
      children: [(0, r.jsx)(b.l, {
        channel: n,
        text: C.intl.string(C.t["6Qgrev"]),
        icon: o.ejJ
      }), (0, r.jsx)(a.zxk, {
        icon: o.vdY,
        variant: "secondary",
        text: C.intl.string(C.t["5Q9+/L"]),
        "aria-label": C.intl.string(C.t["5Q9+/L"]),
        onClick: () => (0, g.B)(n.id, c.Z.EMPTY_GROUP_DM)
      })]
    })]
  })
}