/** Chunk was on web.js **/
/** chunk id: 729551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => V
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
  Chunk430363 = require("./430363.js"),
  Chunk4149 = require("./4149.js"),
  Chunk43284 = require("./43284.jsx"),
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

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  let t = (null == e ? true : e.name) === "" ? null : null == e ? true : e.name;
  return null != t ? t : R.intl.string(R.t.eXan7B)
}

function k(e, t) {
  return (e.isDM() || e.isGroupDM() ? R.intl.string(R.t["9FaEzi"]) : e.isGuildStageVoice() ? R.intl.string(R.t.QygGCN) : R.intl.string(R.t.msxteM)) + (null != t ? " (".concat(t, ")") : "")
}

function U(e) {
  let {
    streamActivity: t,
    otherActivities: n,
    voiceActivityChannel: r
  } = e, i = [], {
    descriptiveTextEnabled: a
  } = (0, v.n)({
    location: "StackedActivityStatus"
  }), o = (0, p.Ay)(r), s = a;
  return null != t && i.push(j(t)), n.forEach(e => {
    let {
      tooltip: t
    } = (0, A.A)(e, s);
    null != t && i.push(t)
  }), null == t && null != r && i.push(k(r, o)), i.length > 0 ? i.join(", ") : ""
}

function G(e) {
  let {
    textVariant: t,
    className: n,
    hasCustomStatusText: i,
    totalActivityCount: a
  } = e, s = a - 1;
  return (0, r.jsxs)(l.EYj, {
    variant: t,
    className: o()(n, P.qi),
    color: i ? "status-positive" : "none",
    children: ["+", s]
  })
}

function F(e) {
  let {
    textVariant: t,
    className: n
  } = e;
  return (0, r.jsx)(l.EYj, {
    variant: t,
    className: o()(P.Om, n),
    children: "•"
  })
}

function V(e) {
  let {
    user: t,
    activities: n,
    applicationStream: a,
    voiceChannel: l,
    textClassName: p,
    iconClassName: v,
    textSize: A = "xs",
    animateEmoji: R = true,
    hasQuest: D = false,
    hideEmoji: x = false,
    hideTooltip: j = false
  } = e;
  (0, f.A)(null == t ? true : t.id);
  let k = (null == a ? true : a.discoverable) !== false ? a : null,
    V = (0, _.AO)(k),
    B = (0, m.v)("ActivityStatus", l),
    H = i.useMemo(() => {
      var e, t;
      let r = null == n ? true : n.find(e => {
        let {
          type: t
        } = e;
        return t === w.$pd.CUSTOM_STATUS
      });
      if (null == r) return null;
      let i = null != (e = null == (t = r.state) ? true : t.trim()) ? e : null;
      return null == ("" === i ? null : i) && null == r.emoji ? null : r
    }, [n]),
    Y = (0, g.Uk)("ActivityStatus"),
    W = i.useMemo(() => null != H && Y ? (0, E.a)(H) : null, [H, Y]),
    K = (0, c.bG)([b.default], () => b.default.getId() === (null == t ? true : t.id)),
    z = (0, c.bG)([h.A], () => B ? K ? h.A.getHangStatusActivity() : null != n ? n.find(e => e.type === w.$pd.HANG_STATUS) : null : null),
    q = i.useMemo(() => {
      var e;
      return (0, s.uniqWith)(null != (e = null == n ? true : n.filter(e => {
        let {
          type: t,
          name: n
        } = e;
        return t !== w.$pd.CUSTOM_STATUS && t !== w.$pd.HANG_STATUS && n !== (null == V ? true : V.name)
      })) ? e : [], (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id || null != e.name && null != t.name && e.name === t.name)
    }, [n, null == V ? true : V.name]),
    Z = null == n ? true : n.find(e => e.name === (null == V ? true : V.name)),
    Q = (null == t ? true : t.bot) === true,
    X = (0, c.bG)([O.A], () => O.A.isBlockedOrIgnored(null == t ? true : t.id)),
    J = (null == H ? true : H.state) != null,
    $ = null != k,
    ee = !$ && null != l,
    et = q.length + ($ || ee ? 1 : 0),
    en = et > 1,
    er = ((null == H ? true : H.state) != null || null != z) && "xs" === A,
    ei = U({
      streamActivity: Z,
      otherActivities: q,
      voiceActivityChannel: ee ? l : null
    });
  if (X) return null;
  let ea = function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        t = true === e || j;
      if (null != k) return (0, r.jsx)(S.A, {
        stream: k,
        game: Z,
        textVariant: "text-".concat(A, "/medium"),
        textClassName: p,
        iconClassName: v,
        hideText: er,
        hideIcon: Q,
        hideTooltip: t
      });
      let n = null == q ? true : q[0];
      return null != n ? (0, r.jsx)(C.A, {
        activity: n,
        textVariant: "text-".concat(A, "/medium"),
        textClassName: p,
        iconClassName: v,
        hideText: er,
        hideIcon: Q,
        hideTooltip: t
      }) : null != l ? (0, r.jsx)(N.A, {
        channel: l,
        textVariant: "text-".concat(A, "/medium"),
        textClassName: p,
        iconClassName: v,
        hideText: er,
        hideTooltip: t
      }) : null
    },
    eo = () => {
      let e = [],
        t = {
          textVariant: "text-sm/medium",
          hideTooltip: true,
          hideIcon: false,
          hideText: false,
          canTruncate: false
        };
      return null != k && e.push((0, r.jsx)(S.A, M(L({
        stream: k,
        game: null == n ? true : n.find(d.A)
      }, t), {
        showChannelName: true
      }), "stream")), q.forEach((n, i) => {
        e.push((0, r.jsx)(C.A, L({
          activity: n
        }, t), "activity-".concat(i)))
      }), ee && e.push((0, r.jsx)(N.A, M(L({
        channel: l
      }, t), {
        showChannelName: true
      }), "voice")), e
    },
    es = () => (0, r.jsx)(G, {
      textVariant: "text-".concat(A, "/medium"),
      className: p,
      hasCustomStatusText: J,
      totalActivityCount: et
    }),
    el = () => 0 === et ? null : en && !Q ? j ? (0, r.jsxs)("div", {
      className: o()(P.ht, er && P.e7),
      children: [ea(), es()]
    }) : (0, r.jsx)(u.m, {
      delay: 150,
      __unsupportedReactNodeAsText: eo(),
      children: (0, r.jsxs)("div", {
        className: o()(P.ht, er && P.e7),
        "aria-label": ei,
        children: [ea(true), es()]
      })
    }) : ea(),
    ec = o()(P.kL, {
      [P.Dk]: "xs" === A,
      [P.WV]: "sm" === A
    }),
    eu = () => null == H && null == z ? null : (0, r.jsx)(T.A, {
      customStatusActivity: H,
      textSize: A,
      animateEmoji: R,
      hideEmoji: x,
      hideTooltip: j,
      textClassName: p,
      iconClassName: v,
      tooltipClassName: ec,
      voiceChannel: l,
      hangStatus: z,
      userId: null == t ? true : t.id
    }),
    ed = () => null == W ? null : (0, r.jsx)(y.A, {
      customStatusActivity: H,
      textSize: A,
      animateEmoji: R,
      hideEmoji: x,
      hideTooltip: j,
      textClassName: p,
      iconClassName: v,
      tooltipClassName: ec,
      voiceChannel: l,
      hangStatus: z,
      userId: null == t ? true : t.id
    });
  return null != W ? (0, r.jsxs)("div", {
    className: ec,
    children: [ed(), et > 0 && (0, r.jsx)(F, {
      textVariant: "text-".concat(A, "/normal"),
      className: p
    }), el(), D && (0, r.jsx)(I.A, {})]
  }) : (0, r.jsxs)("div", {
    className: ec,
    children: [el(), (null != H || null != z) && et > 0 && (0, r.jsx)(F, {
      textVariant: "text-".concat(A, "/normal"),
      className: p
    }), eu(), D && (0, r.jsx)(I.A, {})]
  })
}