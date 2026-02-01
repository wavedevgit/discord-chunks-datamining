/** Chunk was on web.js **/
/** chunk id: 729551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => U
}), require("./321073.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk672979 = require("./672979.js"),
  Chunk87664 = require("./87664.js"),
  Chunk47167 = require("./47167.js"),
  Chunk834757 = require("./834757.js"),
  Chunk242919 = require("./242919.js"),
  Chunk890330 = require("./890330.js"),
  Chunk961350 = require("./961350.js"),
  Chunk994500 = require("./994500.js"),
  Chunk412242 = require("./412242.js"),
  Chunk566903 = require("./566903.js"),
  Chunk109989 = require("./109989.jsx"),
  Chunk143239 = require("./143239.jsx"),
  Chunk684448 = require("./684448.jsx"),
  Chunk835072 = require("./835072.jsx"),
  Chunk194187 = require("./194187.jsx");
require("./851883.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk123511 = require("./123511.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e) {
  let t = (null == e ? true : e.name) === "" ? null : null == e ? true : e.name;
  return null != t ? t : C.intl.string(C.t.eXan7B)
}

function x(e, t) {
  return (e.isDM() || e.isGroupDM() ? C.intl.string(C.t["9FaEzi"]) : e.isGuildStageVoice() ? C.intl.string(C.t.QygGCN) : C.intl.string(C.t.msxteM)) + (null != t ? " (".concat(t, ")") : "")
}

function M(e) {
  let {
    streamActivity: t,
    otherActivities: n,
    voiceActivityChannel: r
  } = e, i = [], {
    descriptiveTextEnabled: a
  } = (0, y.n)({
    location: "StackedActivityStatus"
  }), o = (0, p.Ay)(r), s = a;
  return null != t && i.push(L(t)), n.forEach(e => {
    let {
      tooltip: t
    } = (0, b.A)(e, s);
    null != t && i.push(t)
  }), null == t && null != r && i.push(x(r, o)), i.length > 0 ? i.join(", ") : ""
}

function j(e) {
  let {
    textVariant: t,
    className: n,
    hasCustomStatusText: i,
    totalActivityCount: a
  } = e, s = a - 1;
  return (0, r.jsxs)(l.EYj, {
    variant: t,
    className: o()(n, N.qi),
    color: i ? "status-positive" : "none",
    children: ["+", s]
  })
}

function k(e) {
  let {
    textVariant: t,
    className: n
  } = e;
  return (0, r.jsx)(l.EYj, {
    variant: t,
    className: o()(N.Om, n),
    children: "•"
  })
}

function U(e) {
  let {
    user: t,
    activities: n,
    applicationStream: a,
    voiceChannel: l,
    textClassName: p,
    iconClassName: y,
    textSize: b = "xs",
    animateEmoji: C = true,
    hasQuest: w = false,
    hideEmoji: P = false,
    hideTooltip: L = false
  } = e;
  (0, f.A)(null == t ? true : t.id);
  let x = (null == a ? true : a.discoverable) !== false ? a : null,
    U = (0, _.AO)(x),
    G = (0, m.v)("ActivityStatus", l),
    V = i.useMemo(() => {
      var e, t;
      let r = null == n ? true : n.find(e => {
        let {
          type: t
        } = e;
        return t === T.$pd.CUSTOM_STATUS
      });
      if (null == r) return null;
      let i = null != (e = null == (t = r.state) ? true : t.trim()) ? e : null;
      return null == ("" === i ? null : i) && null == r.emoji ? null : r
    }, [n]),
    F = (0, c.bG)([g.default], () => g.default.getId() === (null == t ? true : t.id)),
    B = (0, c.bG)([h.A], () => G ? F ? h.A.getHangStatusActivity() : null != n ? n.find(e => e.type === T.$pd.HANG_STATUS) : null : null),
    H = i.useMemo(() => {
      var e;
      return (0, s.uniqWith)(null != (e = null == n ? true : n.filter(e => {
        let {
          type: t,
          name: n
        } = e;
        return t !== T.$pd.CUSTOM_STATUS && t !== T.$pd.HANG_STATUS && n !== (null == U ? true : U.name)
      })) ? e : [], (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id || null != e.name && null != t.name && e.name === t.name)
    }, [n, null == U ? true : U.name]),
    Y = null == n ? true : n.find(e => e.name === (null == U ? true : U.name)),
    W = (null == t ? true : t.bot) === true,
    K = (0, c.bG)([E.A], () => E.A.isBlockedOrIgnored(null == t ? true : t.id)),
    z = (null == V ? true : V.state) != null,
    q = null != x,
    Z = !q && null != l,
    Q = H.length + (q || Z ? 1 : 0),
    X = Q > 1,
    J = ((null == V ? true : V.state) != null || null != B) && "xs" === b,
    $ = M({
      streamActivity: Y,
      otherActivities: H,
      voiceActivityChannel: Z ? l : null
    });
  if (K) return null;
  let ee = function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        t = true === e || L;
      if (null != x) return (0, r.jsx)(v.A, {
        stream: x,
        game: Y,
        textVariant: "text-".concat(b, "/medium"),
        textClassName: p,
        iconClassName: y,
        hideText: J,
        hideIcon: W,
        hideTooltip: t
      });
      let n = null == H ? true : H[0];
      return null != n ? (0, r.jsx)(I.A, {
        activity: n,
        textVariant: "text-".concat(b, "/medium"),
        textClassName: p,
        iconClassName: y,
        hideText: J,
        hideIcon: W,
        hideTooltip: t
      }) : null != l ? (0, r.jsx)(S.A, {
        channel: l,
        textVariant: "text-".concat(b, "/medium"),
        textClassName: p,
        iconClassName: y,
        hideText: J,
        hideTooltip: t
      }) : null
    },
    et = () => {
      let e = [],
        t = {
          textVariant: "text-sm/medium",
          hideTooltip: true,
          hideIcon: false,
          hideText: false,
          canTruncate: false
        };
      return null != x && e.push((0, r.jsx)(v.A, D(R({
        stream: x,
        game: null == n ? true : n.find(d.A)
      }, t), {
        showChannelName: true
      }), "stream")), H.forEach((n, i) => {
        e.push((0, r.jsx)(I.A, R({
          activity: n
        }, t), "activity-".concat(i)))
      }), Z && e.push((0, r.jsx)(S.A, D(R({
        channel: l
      }, t), {
        showChannelName: true
      }), "voice")), e
    },
    en = () => (0, r.jsx)(j, {
      textVariant: "text-".concat(b, "/medium"),
      className: p,
      hasCustomStatusText: z,
      totalActivityCount: Q
    }),
    er = () => 0 === Q ? null : X && !W ? L ? (0, r.jsxs)("div", {
      className: o()(N.ht, J && N.e7),
      children: [ee(), en()]
    }) : (0, r.jsx)(u.m, {
      delay: 150,
      __unsupportedReactNodeAsText: et(),
      children: (0, r.jsxs)("div", {
        className: o()(N.ht, J && N.e7),
        "aria-label": $,
        children: [ee(true), en()]
      })
    }) : ee(),
    ei = o()(N.kL, {
      [N.Dk]: "xs" === b,
      [N.WV]: "sm" === b
    }),
    ea = () => null == V && null == B ? null : (0, r.jsx)(A.A, {
      customStatusActivity: V,
      textSize: b,
      animateEmoji: C,
      hideEmoji: P,
      hideTooltip: L,
      textClassName: p,
      iconClassName: y,
      tooltipClassName: ei,
      voiceChannel: l,
      hangStatus: B,
      userId: null == t ? true : t.id
    });
  return (0, r.jsxs)("div", {
    className: ei,
    children: [er(), (null != V || null != B) && Q > 0 && (0, r.jsx)(k, {
      textVariant: "text-".concat(b, "/normal"),
      className: p
    }), ea(), w && (0, r.jsx)(O.A, {})]
  })
}