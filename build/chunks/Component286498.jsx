/** Chunk was on 61344 **/
/** chunk id: 286498, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk49229 = require("./49229.js"),
  Chunk297413 = require("./297413.jsx"),
  Chunk966327 = require("./966327.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk803664 = require("./803664.jsx"),
  Chunk583311 = require("./583311.jsx"),
  Chunk290863 = require("./290863.js"),
  Chunk584777 = require("./584777.js"),
  Chunk994500 = require("./994500.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk318880 = require("./318880.js");

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = e => {
  let {
    user: t,
    handleTrackAction: n
  } = e, i = (0, o.bG)([y.A], () => y.A.getRelationshipType(t.id)), [a, s] = r.useState(false), h = (0, g.A)({
    user: t,
    location: f.A.NEW_GROUP_DM_INVITE_MODAL,
    setLoading: s
  }), p = r.useRef(null), m = r.useCallback(async () => {
    n(), s(true), await d.A.addRelationship({
      userId: t.id,
      context: {
        location: f.A.NEW_GROUP_DM_INVITE_MODAL
      }
    }), s(false)
  }, [n, t.id]);
  if (t.bot) return null;
  switch (i) {
    case E.eA$.FRIEND:
      return null;
    case E.eA$.PENDING_INCOMING:
      return (0, l.jsx)(A.A, {
        targetElementRef: p,
        menuItems: [h],
        children: e => (0, l.jsx)(c.m_, {
          asContainer: true,
          text: O.intl.string(O.t["6QQCQ+"]),
          ariaHidden: true,
          children: (0, l.jsx)(u.K0, x(S({}, e), {
            buttonRef: p,
            size: "sm",
            variant: "icon-only",
            "aria-label": O.intl.string(O.t["6QQCQ+"]),
            icon: u.lI8,
            loading: a
          }))
        })
      });
    case E.eA$.PENDING_OUTGOING:
      return (0, l.jsx)(c.m_, {
        asContainer: true,
        text: O.intl.string(O.t["s/+byI"]),
        ariaHidden: true,
        children: (0, l.jsx)(u.K0, {
          size: "sm",
          variant: "icon-only",
          "aria-label": O.intl.string(O.t["s/+byI"]),
          icon: u.lI8,
          disabled: true
        })
      });
    default:
      return (0, l.jsx)(c.m_, {
        asContainer: true,
        text: O.intl.string(O.t.w5uwoI),
        ariaHidden: true,
        children: (0, l.jsx)(u.K0, {
          size: "sm",
          onClick: m,
          variant: "icon-only",
          "aria-label": O.intl.string(O.t.w5uwoI),
          icon: u.Rvf,
          loading: a
        })
      })
  }
};

function I(e) {
  let t, {
      user: n,
      section: r,
      row: i,
      hideDiscriminator: d,
      comparator: f,
      selected: g,
      checked: A,
      disabled: y = false,
      onClick: E,
      onMouseEnter: I,
      onMessageClick: T,
      "aria-setsize": N,
      "aria-posinset": P,
      numSelected: w,
      staffOverride: R,
      handleTrackAction: D,
      showFriendButton: M = false
    } = e,
    L = (0, o.bG)([b.A], () => b.A.getStatus(n.id)),
    k = (0, s.rm)(String(n.id));
  return t = R ? (0, l.jsx)(u.P7L, {
    checked: A,
    disabled: y
  }) : 0 === w ? (0, l.jsx)(u.Button, {
    variant: "secondary",
    text: O.intl.string(O.t["g33r/P"]),
    size: "sm",
    onClick: () => {
      D(r, i, "message"), null != T && T(n.id)
    }
  }) : (0, l.jsx)(c.m_, {
    asContainer: true,
    text: O.intl.string(O.t.z9qAt9),
    children: (0, l.jsx)(u.P7L, {
      checked: A,
      disabled: true
    })
  }), (0, l.jsx)(u.DUT, x(S({
    id: "user-row-".concat(i),
    className: a()(C.Se, {
      [C.r9]: y
    }),
    onClick: r === _.A.FRIENDS || R ? () => {
      D(r, i, "select"), null != E && E(n.id)
    } : true,
    onMouseEnter: () => {
      null != I && I(r, i)
    }
  }, k), {
    role: "option",
    "aria-selected": A,
    "aria-disabled": y,
    "aria-setsize": N,
    "aria-posinset": P,
    children: (0, l.jsxs)(m.A, {
      align: m.A.Align.CENTER,
      className: a()(C.Bc, {
        [C.oz]: g
      }),
      children: [(0, l.jsx)(p.A, {
        user: n,
        status: L,
        className: C.my
      }), (0, l.jsxs)("div", {
        className: C.YW,
        children: [(0, l.jsx)(u.Text, {
          tag: "strong",
          className: C.$R,
          "aria-hidden": true,
          variant: "text-md/medium",
          children: null != f && f === n.tag ? v.Ay.getName(n) : null != f && "" !== f ? f : v.Ay.getName(n)
        }), (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: (0, l.jsx)(h.A, {
            user: n,
            hideDiscriminator: d,
            className: C.xK,
            usernameClass: C.__invalid_weightMedium,
            discriminatorClass: C.__invalid_weightMedium,
            forceUsername: true
          })
        })]
      }), r !== _.A.FRIENDS && M ? (0, l.jsx)(j, {
        user: n,
        handleTrackAction: () => D(r, i, "friend")
      }) : null, r === _.A.FRIENDS ? (0, l.jsx)(u.P7L, {
        checked: A,
        disabled: y
      }) : t]
    })
  }))
}