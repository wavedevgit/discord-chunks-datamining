/** Chunk was on 34740 **/
/** chunk id: 753898, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function x(e) {
  var t;
  let {
    channel: n,
    children: x,
    user: O
  } = e, j = (0, l.e7)([s.Z], () => s.Z.useReducedMotion), E = null != (t = (0, d.ZP)(n)) ? t : "", {
    avatarDecorationSrc: S,
    eventHandlers: P,
    isAnimating: I
  } = (0, y.Z)({
    userId: null == O ? true : O.id,
    size: o.EFr.SIZE_80,
    animateOnHover: true
  }), [Z, T] = r.useState(false), N = r.useCallback(() => {
    P.onMouseEnter(), T(true)
  }, [P]), A = r.useCallback(() => {
    P.onMouseLeave(), T(false)
  }, [P]), w = !n.isMultiUserDM() && (null == O ? true : O.displayNameStyles) != null;
  return (0, i.jsxs)(C.ZP, {
    channelId: n.id,
    onMouseEnter: N,
    onMouseLeave: A,
    children: [(() => {
      let e = !j && I;
      return n.isMultiUserDM() ? (0, i.jsx)(m.v, {
        channel: n,
        editable: true,
        location: c.Z.EMPTY_GROUP_DM,
        children: (0, i.jsx)(f.Z, {
          channel: n,
          size: o.EFr.SIZE_80,
          animated: e,
          "aria-label": E
        })
      }) : (0, i.jsx)(o.qEK, {
        "aria-label": E,
        size: o.EFr.SIZE_80,
        src: (0, u.x)(n, 80, e),
        avatarDecoration: S
      })
    })(), (0, i.jsx)(C.Ot, {
      children: w ? (0, i.jsx)(h.Z, {
        userName: E,
        displayNameStyles: null == O ? true : O.displayNameStyles,
        effectDisplayType: Z ? p.F.ANIMATED : p.F.STATIC,
        loop: true
      }) : E
    }), (0, i.jsx)(C.jz, {
      children: x
    }), n.isMultiUserDM() && (0, i.jsxs)(a.hE2, {
      className: _.buttonContainer,
      children: [(0, i.jsx)(b.l, {
        channel: n,
        text: v.intl.string(v.t["6Qgrev"]),
        icon: o.ejJ
      }), (0, i.jsx)(a.zxk, {
        icon: o.vdY,
        variant: "secondary",
        text: v.intl.string(v.t["5Q9+/L"]),
        "aria-label": v.intl.string(v.t["5Q9+/L"]),
        onClick: () => (0, g.B)(n.id, c.Z.EMPTY_GROUP_DM)
      })]
    })]
  })
}