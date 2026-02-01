/** Chunk was on 61344 **/
/** chunk id: 635157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk571694 = require("./571694.js"),
  Chunk47167 = require("./47167.js"),
  Chunk922301 = require("./922301.js"),
  Chunk750112 = require("./750112.jsx"),
  Chunk598104 = require("./598104.jsx"),
  Chunk697122 = require("./697122.jsx"),
  Chunk73028 = require("./73028.jsx"),
  Chunk95550 = require("./95550.jsx"),
  Chunk854627 = require("./854627.js"),
  Chunk314307 = require("./314307.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk82842 = require("./82842.js");

function E(e) {
  var t;
  let n, {
      channel: E,
      children: O,
      user: C
    } = e,
    x = (0, i.bG)([o.A], () => o.A.useReducedMotion),
    S = null != (t = (0, d.Ay)(E)) ? t : "",
    {
      avatarDecorationSrc: j,
      eventHandlers: I,
      isAnimating: T
    } = (0, b.A)({
      userId: null == C ? true : C.id,
      size: s._3J.SIZE_80,
      animateOnHover: true
    }),
    [N, P] = r.useState(false),
    w = r.useCallback(() => {
      I.onMouseEnter(), P(true)
    }, [I]),
    R = r.useCallback(() => {
      I.onMouseLeave(), P(false)
    }, [I]),
    D = !E.isMultiUserDM() && (null == C ? true : C.displayNameStyles) != null;
  return (0, l.jsxs)(_.Ay, {
    channelId: E.id,
    onMouseEnter: w,
    onMouseLeave: R,
    children: [(n = !x && T, E.isMultiUserDM() ? (0, l.jsx)(m.Q, {
      channel: E,
      editable: true,
      location: c.A.EMPTY_GROUP_DM,
      children: (0, l.jsx)(f.A, {
        channel: E,
        size: s._3J.SIZE_80,
        animated: n,
        "aria-label": S
      })
    }) : (0, l.jsx)(s.euF, {
      "aria-label": S,
      size: s._3J.SIZE_80,
      src: (0, u.Y)(E, 80, n),
      avatarDecoration: j
    })), (0, l.jsx)(_.cr, {
      children: D ? (0, l.jsx)(p.A, {
        userName: S,
        displayNameStyles: null == C ? true : C.displayNameStyles,
        effectDisplayType: N ? h.G.ANIMATED : h.G.STATIC,
        loop: true
      }) : S
    }), (0, l.jsx)(_.j1, {
      children: O
    }), E.isMultiUserDM() && (0, l.jsxs)(a.e2v, {
      className: v.U,
      children: [(0, l.jsx)(A.NE, {
        channel: E,
        text: y.intl.string(y.t["6Qgrev"]),
        icon: s.DpX
      }), (0, l.jsx)(a.$nd, {
        icon: s.R2l,
        variant: "secondary",
        text: y.intl.string(y.t["5Q9+/L"]),
        "aria-label": y.intl.string(y.t["5Q9+/L"]),
        onClick: () => (0, g.U)(E.id, c.A.EMPTY_GROUP_DM)
      })]
    })]
  })
}