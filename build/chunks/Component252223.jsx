/** Chunk was on web.js **/
/** chunk id: 252223, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./539854.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk833664 = require("./833664.js"),
  Chunk545957 = require("./545957.js"),
  Chunk933557 = require("./933557.js"),
  Chunk359588 = require("./359588.js"),
  Chunk74340 = require("./74340.js"),
  Chunk482798 = require("./482798.js"),
  Chunk687516 = require("./687516.js"),
  Chunk106301 = require("./106301.js"),
  Chunk314897 = require("./314897.js"),
  Chunk699516 = require("./699516.js"),
  Chunk802529 = require("./802529.js"),
  Chunk11133 = require("./11133.js"),
  Chunk303524 = require("./303524.jsx"),
  Chunk329520 = require("./329520.jsx"),
  Chunk233023 = require("./233023.jsx"),
  Chunk868781 = require("./868781.jsx"),
  Chunk122943 = require("./122943.jsx"),
  Chunk556638 = require("./556638.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk80568 = require("./80568.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
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

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k(e) {
  let t = (null == e ? true : e.name) === "" ? null : null == e ? true : e.name;
  return null != t ? P.intl.formatToPlainString(P.t["0wJXSk"], {
    name: t
  }) : P.intl.string(P.t.eXan7O)
}

function M(e, t) {
  return (e.isDM() || e.isGroupDM() ? P.intl.string(P.t["9FaEzs"]) : e.isGuildStageVoice() ? P.intl.string(P.t.QygGCA) : P.intl.string(P.t.msxteH)) + (null != t ? " (".concat(t, ")") : "")
}

function U(e) {
  let {
    streamActivity: t,
    otherActivities: n,
    voiceActivityChannel: r
  } = e, i = [], {
    descriptiveTextEnabled: o
  } = (0, O.f)({
    location: "StackedActivityStatus"
  }), {
    enableTopNavButton: a
  } = (0, m.Cq)({
    location: "StackedActivityStatus"
  }), s = (0, _.ZP)(r), l = o || a;
  return null != t && i.push(k(t)), n.forEach(e => {
    let {
      tooltip: t
    } = (0, v.Z)(e, l);
    null != t && i.push(t)
  }), null == t && null != r && i.push(M(r, s)), i.length > 0 ? i.join(", ") : ""
}

function G(e) {
  let {
    textVariant: t,
    className: n,
    hasCustomStatusText: i,
    totalActivityCount: o
  } = e, s = o - 1;
  return (0, r.jsxs)(l.xv, {
    variant: t,
    className: a()(n, w.activityCounter),
    color: i ? "status-positive" : "none",
    children: ["+", s]
  })
}

function B(e) {
  let {
    textVariant: t,
    className: n
  } = e;
  return (0, r.jsx)(l.xv, {
    variant: t,
    className: a()(w.dot, n),
    children: N.l
  })
}

function Z(e) {
  let {
    user: t,
    activities: n,
    applicationStream: o,
    voiceChannel: l,
    textClassName: _,
    iconClassName: m,
    textSize: O = "xs",
    animateEmoji: v = true,
    hasQuest: P = false,
    hideEmoji: D = false,
    hideTooltip: L = false
  } = e;
  (0, f.Z)(null == t ? true : t.id);
  let k = (null == o ? true : o.discoverable) !== false ? o : null,
    M = (0, g.Cf)(k),
    Z = i.useMemo(() => {
      var e, t;
      let r = null == n ? true : n.find(e => {
        let {
          type: t
        } = e;
        return t === R.IIU.CUSTOM_STATUS
      });
      if (null == r) return null;
      let i = null != (t = null == (e = r.state) ? true : e.trim()) ? t : null;
      return null == ("" === i ? null : i) && null == r.emoji ? null : r
    }, [n]),
    F = (0, c.e7)([b.default], () => b.default.getId() === (null == t ? true : t.id)),
    V = (0, c.e7)([E.Z], () => F ? E.Z.getHangStatusActivity() : null != n ? n.find(e => e.type === R.IIU.HANG_STATUS) : null),
    H = i.useMemo(() => {
      var e;
      return (0, s.uniqWith)(null != (e = null == n ? true : n.filter(e => {
        let {
          type: t,
          name: n
        } = e;
        return t !== R.IIU.CUSTOM_STATUS && t !== R.IIU.HANG_STATUS && n !== (null == M ? true : M.name)
      })) ? e : [], (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id || null != e.name && null != t.name && e.name === t.name)
    }, [n, null == M ? true : M.name]),
    Y = null == n ? true : n.find(e => e.name === (null == M ? true : M.name)),
    W = (null == t ? true : t.bot) === true,
    K = (0, c.e7)([y.Z], () => y.Z.isBlockedOrIgnored(null == t ? true : t.id)),
    z = (0, p.Z)({
      location: "ActivityStatus"
    }) && null != Z ? (0, h.Z)(Z) : null,
    q = (null == Z ? true : Z.state) != null || null != z,
    X = null != k,
    Q = !X && null != l,
    J = H.length + (X || Q ? 1 : 0),
    $ = J > 1,
    ee = (null == Z ? true : Z.state) != null && "xs" === O,
    et = U({
      streamActivity: Y,
      otherActivities: H,
      voiceActivityChannel: Q ? l : null
    });
  if (K) return null;
  let en = function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        t = true === e || L;
      if (null != k) return (0, r.jsx)(T.Z, {
        stream: k,
        game: Y,
        textVariant: "text-".concat(O, "/medium"),
        textClassName: _,
        iconClassName: m,
        hideText: ee,
        hideIcon: W,
        hideTooltip: t
      });
      let n = null == H ? true : H[0];
      return null != n ? (0, r.jsx)(A.Z, {
        activity: n,
        textVariant: "text-".concat(O, "/medium"),
        textClassName: _,
        iconClassName: m,
        hideText: ee,
        hideIcon: W,
        hideTooltip: t
      }) : null != l ? (0, r.jsx)(C.Z, {
        channel: l,
        textVariant: "text-".concat(O, "/medium"),
        textClassName: _,
        iconClassName: m,
        hideText: ee,
        hideTooltip: t
      }) : null
    },
    er = () => {
      let e = [],
        t = {
          textVariant: "text-sm/medium",
          hideTooltip: true,
          hideIcon: false,
          hideText: false,
          canTruncate: false
        };
      return null != k && e.push((0, r.jsx)(T.Z, j(x({
        stream: k,
        game: null == n ? true : n.find(d.Z)
      }, t), {
        showChannelName: true
      }), "stream")), H.forEach((n, i) => {
        e.push((0, r.jsx)(A.Z, x({
          activity: n
        }, t), "activity-".concat(i)))
      }), Q && e.push((0, r.jsx)(C.Z, j(x({
        channel: l
      }, t), {
        showChannelName: true
      }), "voice")), e
    },
    ei = () => (0, r.jsx)(G, {
      textVariant: "text-".concat(O, "/medium"),
      className: _,
      hasCustomStatusText: q,
      totalActivityCount: J
    }),
    eo = () => 0 === J ? null : $ && !W ? L ? (0, r.jsxs)("div", {
      className: a()(w.activityContainer, ee && w.iconOnly),
      children: [en(), ei()]
    }) : (0, r.jsx)(u.ua7, {
      tooltipContentClassName: a()(w.container, w.activitiesTooltip, w.hasMultipleActivities),
      delay: N.X,
      text: er(),
      "aria-label": et,
      children: e => (0, r.jsxs)("div", j(x({
        className: a()(w.activityContainer, ee && w.iconOnly)
      }, e), {
        children: [en(true), ei()]
      }))
    }) : en(),
    ea = a()(w.container, {
      [w.textXs]: "xs" === O,
      [w.textSm]: "sm" === O
    }),
    es = () => null == Z && null == V ? null : (0, r.jsx)(S.Z, {
      customStatusActivity: Z,
      textSize: O,
      animateEmoji: v,
      hideEmoji: D,
      hideTooltip: L,
      textClassName: _,
      iconClassName: m,
      tooltipClassName: ea,
      voiceChannel: l,
      hangStatus: V
    });
  return (0, r.jsxs)("div", {
    className: ea,
    children: [eo(), null != Z && J > 0 && (0, r.jsx)(B, {
      textVariant: "text-".concat(O, "/normal"),
      className: _
    }), es(), P && (0, r.jsx)(I.Z, {})]
  })
}