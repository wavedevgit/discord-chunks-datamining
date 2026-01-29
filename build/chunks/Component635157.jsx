/** Chunk was on 1113 **/
/** chunk id: 635157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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

function x(e) {
  var t;
  let n, {
      channel: x,
      children: j,
      user: v
    } = e,
    E = (0, i.bG)([o.A], () => o.A.useReducedMotion),
    C = null != (t = (0, d.Ay)(x)) ? t : "",
    {
      avatarDecorationSrc: S,
      eventHandlers: I,
      isAnimating: N
    } = (0, A.A)({
      userId: null == v ? true : v.id,
      size: a._3J.SIZE_80,
      animateOnHover: true
    }),
    [T, P] = l.useState(false),
    w = l.useCallback(() => {
      I.onMouseEnter(), P(true)
    }, [I]),
    R = l.useCallback(() => {
      I.onMouseLeave(), P(false)
    }, [I]),
    D = !x.isMultiUserDM() && (null == v ? true : v.displayNameStyles) != null;
  return (0, r.jsxs)(y.Ay, {
    channelId: x.id,
    onMouseEnter: w,
    onMouseLeave: R,
    children: [(n = !E && N, x.isMultiUserDM() ? (0, r.jsx)(f.Q, {
      channel: x,
      editable: true,
      location: c.A.EMPTY_GROUP_DM,
      children: (0, r.jsx)(g.A, {
        channel: x,
        size: a._3J.SIZE_80,
        animated: n,
        "aria-label": C
      })
    }) : (0, r.jsx)(a.euF, {
      "aria-label": C,
      size: a._3J.SIZE_80,
      src: (0, u.Y)(x, 80, n),
      avatarDecoration: S
    })), (0, r.jsx)(y.cr, {
      children: D ? (0, r.jsx)(p.A, {
        userName: C,
        displayNameStyles: null == v ? true : v.displayNameStyles,
        effectDisplayType: T ? h.G.ANIMATED : h.G.STATIC,
        loop: true
      }) : C
    }), (0, r.jsx)(y.j1, {
      children: j
    }), x.isMultiUserDM() && (0, r.jsxs)(s.e2v, {
      className: _.U,
      children: [(0, r.jsx)(b.N, {
        channel: x,
        text: O.intl.string(O.t["6Qgrev"]),
        icon: a.DpX
      }), (0, r.jsx)(s.$nd, {
        icon: a.R2l,
        variant: "secondary",
        text: O.intl.string(O.t["5Q9+/L"]),
        "aria-label": O.intl.string(O.t["5Q9+/L"]),
        onClick: () => (0, m.U)(x.id, c.A.EMPTY_GROUP_DM)
      })]
    })]
  })
}