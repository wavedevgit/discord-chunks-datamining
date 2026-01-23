/** Chunk was on web.js **/
/** chunk id: 729551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => G
}), require("./321073.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk672979 = require("./672979.js"),
  Chunk87664 = require("./87664.js"),
  Chunk47167 = require("./47167.js"),
  Chunk126904 = require("./126904.js"),
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

function P(e) {
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

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e) {
  let t = (null == e ? true : e.name) === "" ? null : null == e ? true : e.name;
  return null != t ? t : N.intl.string(N.t.eXan7B)
}

function j(e, t) {
  return (e.isDM() || e.isGroupDM() ? N.intl.string(N.t["9FaEzi"]) : e.isGuildStageVoice() ? N.intl.string(N.t.QygGCN) : N.intl.string(N.t.msxteM)) + (null != t ? " (".concat(t, ")") : "")
}

function M(e) {
  let {
    streamActivity: t,
    otherActivities: n,
    voiceActivityChannel: r
  } = e, i = [], {
    descriptiveTextEnabled: a
  } = (0, b.n)({
    location: "StackedActivityStatus"
  }), {
    enableTopNavButton: s
  } = (0, _.tR)({
    location: "StackedActivityStatus"
  }), o = (0, p.Ay)(r), l = a || s;
  return null != t && i.push(L(t)), n.forEach(e => {
    let {
      tooltip: t
    } = (0, O.A)(e, l);
    null != t && i.push(t)
  }), null == t && null != r && i.push(j(r, o)), i.length > 0 ? i.join(", ") : ""
}

function k(e) {
  let {
    textVariant: t,
    className: n,
    hasCustomStatusText: i,
    totalActivityCount: a
  } = e, o = a - 1;
  return (0, r.jsxs)(l.EYj, {
    variant: t,
    className: s()(n, R.qi),
    color: i ? "status-positive" : "none",
    children: ["+", o]
  })
}

function U(e) {
  let {
    textVariant: t,
    className: n
  } = e;
  return (0, r.jsx)(l.EYj, {
    variant: t,
    className: s()(R.Om, n),
    children: "•"
  })
}

function G(e) {
  let {
    user: t,
    activities: n,
    applicationStream: a,
    voiceChannel: l,
    textClassName: p,
    iconClassName: _,
    textSize: b = "xs",
    animateEmoji: O = true,
    hasQuest: N = false,
    hideEmoji: w = false,
    hideTooltip: D = false
  } = e;
  (0, f.A)(null == t ? true : t.id);
  let L = (null == a ? true : a.discoverable) !== false ? a : null,
    j = (0, h.AO)(L),
    G = (0, g.v)("ActivityStatus", l),
    V = i.useMemo(() => {
      var e, t;
      let r = null == n ? true : n.find(e => {
        let {
          type: t
        } = e;
        return t === C.$pd.CUSTOM_STATUS
      });
      if (null == r) return null;
      let i = null != (e = null == (t = r.state) ? true : t.trim()) ? e : null;
      return null == ("" === i ? null : i) && null == r.emoji ? null : r
    }, [n]),
    F = (0, c.bG)([E.default], () => E.default.getId() === (null == t ? true : t.id)),
    B = (0, c.bG)([m.A], () => G ? F ? m.A.getHangStatusActivity() : null != n ? n.find(e => e.type === C.$pd.HANG_STATUS) : null : null),
    H = i.useMemo(() => {
      var e;
      return (0, o.uniqWith)(null != (e = null == n ? true : n.filter(e => {
        let {
          type: t,
          name: n
        } = e;
        return t !== C.$pd.CUSTOM_STATUS && t !== C.$pd.HANG_STATUS && n !== (null == j ? true : j.name)
      })) ? e : [], (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id || null != e.name && null != t.name && e.name === t.name)
    }, [n, null == j ? true : j.name]),
    Y = null == n ? true : n.find(e => e.name === (null == j ? true : j.name)),
    W = (null == t ? true : t.bot) === true,
    K = (0, c.bG)([y.A], () => y.A.isBlockedOrIgnored(null == t ? true : t.id)),
    z = (null == V ? true : V.state) != null,
    q = null != L,
    X = !q && null != l,
    Z = H.length + (q || X ? 1 : 0),
    Q = Z > 1,
    $ = ((null == V ? true : V.state) != null || null != B) && "xs" === b,
    J = M({
      streamActivity: Y,
      otherActivities: H,
      voiceActivityChannel: X ? l : null
    });
  if (K) return null;
  let ee = function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        t = true === e || D;
      if (null != L) return (0, r.jsx)(A.A, {
        stream: L,
        game: Y,
        textVariant: "text-".concat(b, "/medium"),
        textClassName: p,
        iconClassName: _,
        hideText: $,
        hideIcon: W,
        hideTooltip: t
      });
      let n = null == H ? true : H[0];
      return null != n ? (0, r.jsx)(S.A, {
        activity: n,
        textVariant: "text-".concat(b, "/medium"),
        textClassName: p,
        iconClassName: _,
        hideText: $,
        hideIcon: W,
        hideTooltip: t
      }) : null != l ? (0, r.jsx)(T.A, {
        channel: l,
        textVariant: "text-".concat(b, "/medium"),
        textClassName: p,
        iconClassName: _,
        hideText: $,
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
      return null != L && e.push((0, r.jsx)(A.A, x(P({
        stream: L,
        game: null == n ? true : n.find(d.A)
      }, t), {
        showChannelName: true
      }), "stream")), H.forEach((n, i) => {
        e.push((0, r.jsx)(S.A, P({
          activity: n
        }, t), "activity-".concat(i)))
      }), X && e.push((0, r.jsx)(T.A, x(P({
        channel: l
      }, t), {
        showChannelName: true
      }), "voice")), e
    },
    en = () => (0, r.jsx)(k, {
      textVariant: "text-".concat(b, "/medium"),
      className: p,
      hasCustomStatusText: z,
      totalActivityCount: Z
    }),
    er = () => 0 === Z ? null : Q && !W ? D ? (0, r.jsxs)("div", {
      className: s()(R.ht, $ && R.e7),
      children: [ee(), en()]
    }) : (0, r.jsx)(u.m, {
      delay: 150,
      __unsupportedReactNodeAsText: et(),
      children: (0, r.jsxs)("div", {
        className: s()(R.ht, $ && R.e7),
        "aria-label": J,
        children: [ee(true), en()]
      })
    }) : ee(),
    ei = s()(R.kL, {
      [R.Dk]: "xs" === b,
      [R.WV]: "sm" === b
    }),
    ea = () => null == V && null == B ? null : (0, r.jsx)(I.A, {
      customStatusActivity: V,
      textSize: b,
      animateEmoji: O,
      hideEmoji: w,
      hideTooltip: D,
      textClassName: p,
      iconClassName: _,
      tooltipClassName: ei,
      voiceChannel: l,
      hangStatus: B,
      userId: null == t ? true : t.id
    });
  return (0, r.jsxs)("div", {
    className: ei,
    children: [er(), (null != V || null != B) && Z > 0 && (0, r.jsx)(U, {
      textVariant: "text-".concat(b, "/normal"),
      className: p
    }), ea(), N && (0, r.jsx)(v.A, {})]
  })
}