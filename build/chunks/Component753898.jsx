/** Chunk was on 40184 **/
/** chunk id: 753898, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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
  Chunk701766 = require("./701766.js");

function O(e) {
  var t;
  let {
    channel: n,
    children: O,
    user: E
  } = e, j = (0, l.e7)([s.Z], () => s.Z.useReducedMotion), S = null != (t = (0, d.ZP)(n)) ? t : "", {
    avatarDecorationSrc: _,
    eventHandlers: P,
    isAnimating: I
  } = (0, y.Z)({
    userId: null == E ? true : E.id,
    size: o.EFr.SIZE_80,
    animateOnHover: true
  }), [Z, T] = r.useState(false), N = r.useCallback(() => {
    P.onMouseEnter(), T(true)
  }, [P]), A = r.useCallback(() => {
    P.onMouseLeave(), T(false)
  }, [P]), w = !n.isMultiUserDM() && (null == E ? true : E.displayNameStyles) != null;
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
        children: (0, i.jsx)(h.Z, {
          channel: n,
          size: o.EFr.SIZE_80,
          animated: e,
          "aria-label": S
        })
      }) : (0, i.jsx)(o.qEK, {
        "aria-label": S,
        size: o.EFr.SIZE_80,
        src: (0, u.x)(n, 80, e),
        avatarDecoration: _
      })
    })(), (0, i.jsx)(C.Ot, {
      children: w ? (0, i.jsx)(f.Z, {
        userName: S,
        displayNameStyles: null == E ? true : E.displayNameStyles,
        effectDisplayType: Z ? p.F.ANIMATED : p.F.STATIC,
        loop: true
      }) : S
    }), (0, i.jsx)(C.jz, {
      children: O
    }), n.isMultiUserDM() && (0, i.jsxs)(a.hE2, {
      className: x.buttonContainer,
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