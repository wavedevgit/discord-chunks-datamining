/** Chunk was on 78528 **/
/** chunk id: 286498, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = e => {
  let {
    user: t
  } = e, n = (0, o.bG)([_.A], () => _.A.getRelationshipType(t.id)), [i, s] = l.useState(false), a = (0, m.A)({
    user: t,
    location: f.A.NEW_GROUP_DM_INVITE_MODAL,
    setLoading: s
  }), p = l.useRef(null), h = l.useCallback(async () => {
    s(true), await d.A.addRelationship({
      userId: t.id,
      context: {
        location: f.A.NEW_GROUP_DM_INVITE_MODAL
      }
    }), s(false)
  }, [t.id]);
  if (t.bot) return null;
  switch (n) {
    case j.eA$.FRIEND:
      return null;
    case j.eA$.PENDING_INCOMING:
      return (0, r.jsx)(b.A, {
        targetElementRef: p,
        menuItems: [a],
        children: e => (0, r.jsx)(c.m_, {
          asContainer: true,
          text: v.intl.string(v.t["6QQCQ+"]),
          ariaHidden: true,
          children: (0, r.jsx)(u.K0, C(E({}, e), {
            buttonRef: p,
            size: "sm",
            variant: "icon-only",
            "aria-label": v.intl.string(v.t["6QQCQ+"]),
            icon: u.lI8,
            loading: i
          }))
        })
      });
    case j.eA$.PENDING_OUTGOING:
      return (0, r.jsx)(c.m_, {
        asContainer: true,
        text: v.intl.string(v.t["s/+byI"]),
        ariaHidden: true,
        children: (0, r.jsx)(u.K0, {
          size: "sm",
          variant: "icon-only",
          "aria-label": v.intl.string(v.t["s/+byI"]),
          icon: u.lI8,
          disabled: true
        })
      });
    default:
      return (0, r.jsx)(c.m_, {
        asContainer: true,
        text: v.intl.string(v.t.w5uwoI),
        ariaHidden: true,
        children: (0, r.jsx)(u.K0, {
          size: "sm",
          onClick: h,
          variant: "icon-only",
          "aria-label": v.intl.string(v.t.w5uwoI),
          icon: u.Rvf,
          loading: i
        })
      })
  }
};

function I(e) {
  let t, {
      user: n,
      section: l,
      row: i,
      hideDiscriminator: d,
      comparator: f,
      selected: m,
      checked: b,
      disabled: _ = false,
      onClick: j,
      onMouseEnter: I,
      onMessageClick: N,
      "aria-setsize": T,
      "aria-posinset": P,
      numSelected: w,
      staffOverride: R,
      showFriendButton: D = false
    } = e,
    M = (0, o.bG)([A.A], () => A.A.getStatus(n.id)),
    L = (0, a.rm)(String(n.id));
  return t = R ? (0, r.jsx)(u.P7L, {
    checked: b,
    disabled: _
  }) : 0 === w ? (0, r.jsx)(u.Button, {
    variant: "secondary",
    text: v.intl.string(v.t["g33r/P"]),
    size: "sm",
    onClick: () => {
      null != N && N(n.id)
    }
  }) : (0, r.jsx)(c.m_, {
    asContainer: true,
    text: v.intl.string(v.t.z9qAt9),
    children: (0, r.jsx)(u.P7L, {
      checked: b,
      disabled: true
    })
  }), (0, r.jsx)(u.DUT, C(E({
    id: "user-row-".concat(i),
    className: s()(x.Se, {
      [x.r9]: _
    }),
    onClick: l === y.A.FRIENDS || R ? () => {
      null != j && j(n.id)
    } : true,
    onMouseEnter: () => {
      null != I && I(l, i)
    }
  }, L), {
    role: "option",
    "aria-selected": b,
    "aria-disabled": _,
    "aria-setsize": T,
    "aria-posinset": P,
    children: (0, r.jsxs)(g.A, {
      align: g.A.Align.CENTER,
      className: s()(x.Bc, {
        [x.oz]: m
      }),
      children: [(0, r.jsx)(h.A, {
        user: n,
        status: M,
        className: x.my
      }), (0, r.jsxs)("div", {
        className: x.YW,
        children: [(0, r.jsx)(u.Text, {
          tag: "strong",
          className: x.$R,
          "aria-hidden": true,
          variant: "text-md/medium",
          children: null != f && f === n.tag ? O.Ay.getName(n) : null != f && "" !== f ? f : O.Ay.getName(n)
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: (0, r.jsx)(p.A, {
            user: n,
            hideDiscriminator: d,
            className: x.xK,
            usernameClass: x.__invalid_weightMedium,
            discriminatorClass: x.__invalid_weightMedium,
            forceUsername: true
          })
        })]
      }), l !== y.A.FRIENDS && D ? (0, r.jsx)(S, {
        user: n
      }) : null, l === y.A.FRIENDS ? (0, r.jsx)(u.P7L, {
        checked: b,
        disabled: _
      }) : t]
    })
  }))
}