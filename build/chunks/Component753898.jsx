/** Chunk was on 81985 **/
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
  Chunk701766 = require("./701766.js");

function x(e) {
  var t;
  let {
    channel: n,
    children: x,
    user: C
  } = e, E = (0, l.e7)([s.Z], () => s.Z.useReducedMotion), S = null != (t = (0, d.ZP)(n)) ? t : "", {
    avatarDecorationSrc: _,
    eventHandlers: I,
    isAnimating: P
  } = (0, y.Z)({
    userId: null == C ? true : C.id,
    size: o.EFr.SIZE_80,
    animateOnHover: true
  }), [Z, N] = i.useState(false), T = i.useCallback(() => {
    I.onMouseEnter(), N(true)
  }, [I]), A = i.useCallback(() => {
    I.onMouseLeave(), N(false)
  }, [I]), w = !n.isMultiUserDM() && (null == C ? true : C.displayNameStyles) != null;
  return (0, r.jsxs)(v.ZP, {
    channelId: n.id,
    onMouseEnter: T,
    onMouseLeave: A,
    children: [(() => {
      let e = !E && P;
      return n.isMultiUserDM() ? (0, r.jsx)(g.v, {
        channel: n,
        editable: true,
        location: c.Z.EMPTY_GROUP_DM,
        children: (0, r.jsx)(h.Z, {
          channel: n,
          size: o.EFr.SIZE_80,
          animated: e,
          "aria-label": S
        })
      }) : (0, r.jsx)(o.qEK, {
        "aria-label": S,
        size: o.EFr.SIZE_80,
        src: (0, u.x)(n, 80, e),
        avatarDecoration: _
      })
    })(), (0, r.jsx)(v.Ot, {
      children: w ? (0, r.jsx)(f.Z, {
        userName: S,
        displayNameStyles: null == C ? true : C.displayNameStyles,
        effectDisplayType: Z ? p.F.ANIMATED : p.F.STATIC,
        loop: true
      }) : S
    }), (0, r.jsx)(v.jz, {
      children: x
    }), n.isMultiUserDM() && (0, r.jsxs)(a.hE2, {
      className: j.buttonContainer,
      children: [(0, r.jsx)(b.l, {
        channel: n,
        text: O.intl.string(O.t["6Qgrev"]),
        icon: o.ejJ
      }), (0, r.jsx)(a.zxk, {
        icon: o.vdY,
        variant: "secondary",
        text: O.intl.string(O.t["5Q9+/L"]),
        "aria-label": O.intl.string(O.t["5Q9+/L"]),
        onClick: () => (0, m.B)(n.id, c.Z.EMPTY_GROUP_DM)
      })]
    })]
  })
}