/** Chunk was on web.js **/
/** chunk id: 252223, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./539854.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk833664 = require("./833664.js"),
  Chunk545957 = require("./545957.js"),
  Chunk933557 = require("./933557.js"),
  Chunk482798 = require("./482798.js"),
  Chunk687516 = require("./687516.js"),
  Chunk106301 = require("./106301.js"),
  Chunk741570 = require("./741570.js"),
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

function w(e) {
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

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e) {
  let t = (null == e ? true : e.name) === "" ? null : null == e ? true : e.name;
  return null != t ? t : R.intl.string(R.t.eXan7B)
}

function k(e, t) {
  return (e.isDM() || e.isGroupDM() ? R.intl.string(R.t["9FaEzi"]) : e.isGuildStageVoice() ? R.intl.string(R.t.QygGCN) : R.intl.string(R.t.msxteM)) + (null != t ? " (".concat(t, ")") : "")
}

function j(e) {
  let {
    streamActivity: t,
    otherActivities: n,
    voiceActivityChannel: r
  } = e, i = [], {
    descriptiveTextEnabled: a
  } = (0, y.f)({
    location: "StackedActivityStatus"
  }), {
    enableTopNavButton: o
  } = (0, p.Cq)({
    location: "StackedActivityStatus"
  }), s = (0, _.ZP)(r), l = a || o;
  return null != t && i.push(M(t)), n.forEach(e => {
    let {
      tooltip: t
    } = (0, O.Z)(e, l);
    null != t && i.push(t)
  }), null == t && null != r && i.push(k(r, s)), i.length > 0 ? i.join(", ") : ""
}

function U(e) {
  let {
    textVariant: t,
    className: n,
    hasCustomStatusText: i,
    totalActivityCount: a
  } = e, s = a - 1;
  return (0, r.jsxs)(l.xvT, {
    variant: t,
    className: o()(n, P.activityCounter),
    color: i ? "status-positive" : "none",
    children: ["+", s]
  })
}

function G(e) {
  let {
    textVariant: t,
    className: n
  } = e;
  return (0, r.jsx)(l.xvT, {
    variant: t,
    className: o()(P.dot, n),
    children: C.l
  })
}

function B(e) {
  let {
    user: t,
    activities: n,
    applicationStream: a,
    voiceChannel: l,
    textClassName: _,
    iconClassName: p,
    textSize: y = "xs",
    animateEmoji: O = true,
    hasQuest: R = false,
    hideEmoji: D = false,
    hideTooltip: x = false
  } = e;
  (0, f.Z)(null == t ? true : t.id);
  let M = (null == a ? true : a.discoverable) !== false ? a : null,
    k = (0, h.Cf)(M),
    B = (0, g.E)("ActivityStatus", l),
    Z = i.useMemo(() => {
      var e, t;
      let r = null == n ? true : n.find(e => {
        let {
          type: t
        } = e;
        return t === N.IIU.CUSTOM_STATUS
      });
      if (null == r) return null;
      let i = null != (t = null == (e = r.state) ? true : e.trim()) ? t : null;
      return null == ("" === i ? null : i) && null == r.emoji ? null : r
    }, [n]),
    F = (0, c.e7)([E.default], () => E.default.getId() === (null == t ? true : t.id)),
    V = (0, c.e7)([m.Z], () => B ? F ? m.Z.getHangStatusActivity() : null != n ? n.find(e => e.type === N.IIU.HANG_STATUS) : null : null),
    H = i.useMemo(() => {
      var e;
      return (0, s.uniqWith)(null != (e = null == n ? true : n.filter(e => {
        let {
          type: t,
          name: n
        } = e;
        return t !== N.IIU.CUSTOM_STATUS && t !== N.IIU.HANG_STATUS && n !== (null == k ? true : k.name)
      })) ? e : [], (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id || null != e.name && null != t.name && e.name === t.name)
    }, [n, null == k ? true : k.name]),
    Y = null == n ? true : n.find(e => e.name === (null == k ? true : k.name)),
    W = (null == t ? true : t.bot) === true,
    K = (0, c.e7)([b.Z], () => b.Z.isBlockedOrIgnored(null == t ? true : t.id)),
    z = (null == Z ? true : Z.state) != null,
    q = null != M,
    X = !q && null != l,
    Q = H.length + (q || X ? 1 : 0),
    J = Q > 1,
    $ = ((null == Z ? true : Z.state) != null || null != V) && "xs" === y,
    ee = j({
      streamActivity: Y,
      otherActivities: H,
      voiceActivityChannel: X ? l : null
    });
  if (K) return null;
  let et = function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        t = true === e || x;
      if (null != M) return (0, r.jsx)(I.Z, {
        stream: M,
        game: Y,
        textVariant: "text-".concat(y, "/medium"),
        textClassName: _,
        iconClassName: p,
        hideText: $,
        hideIcon: W,
        hideTooltip: t
      });
      let n = null == H ? true : H[0];
      return null != n ? (0, r.jsx)(S.Z, {
        activity: n,
        textVariant: "text-".concat(y, "/medium"),
        textClassName: _,
        iconClassName: p,
        hideText: $,
        hideIcon: W,
        hideTooltip: t
      }) : null != l ? (0, r.jsx)(A.Z, {
        channel: l,
        textVariant: "text-".concat(y, "/medium"),
        textClassName: _,
        iconClassName: p,
        hideText: $,
        hideTooltip: t
      }) : null
    },
    en = () => {
      let e = [],
        t = {
          textVariant: "text-sm/medium",
          hideTooltip: true,
          hideIcon: false,
          hideText: false,
          canTruncate: false
        };
      return null != M && e.push((0, r.jsx)(I.Z, L(w({
        stream: M,
        game: null == n ? true : n.find(d.Z)
      }, t), {
        showChannelName: true
      }), "stream")), H.forEach((n, i) => {
        e.push((0, r.jsx)(S.Z, w({
          activity: n
        }, t), "activity-".concat(i)))
      }), X && e.push((0, r.jsx)(A.Z, L(w({
        channel: l
      }, t), {
        showChannelName: true
      }), "voice")), e
    },
    er = () => (0, r.jsx)(U, {
      textVariant: "text-".concat(y, "/medium"),
      className: _,
      hasCustomStatusText: z,
      totalActivityCount: Q
    }),
    ei = () => 0 === Q ? null : J && !W ? x ? (0, r.jsxs)("div", {
      className: o()(P.activityContainer, $ && P.iconOnly),
      children: [et(), er()]
    }) : (0, r.jsx)(u.aML, {
      "data-migration-pending": true,
      tooltipContentClassName: o()(P.container, P.activitiesTooltip, P.hasMultipleActivities),
      delay: C.X,
      text: en(),
      "aria-label": ee,
      children: e => (0, r.jsxs)("div", L(w({
        className: o()(P.activityContainer, $ && P.iconOnly)
      }, e), {
        children: [et(true), er()]
      }))
    }) : et(),
    ea = o()(P.container, {
      [P.textXs]: "xs" === y,
      [P.textSm]: "sm" === y
    }),
    eo = () => null == Z && null == V ? null : (0, r.jsx)(T.Z, {
      customStatusActivity: Z,
      textSize: y,
      animateEmoji: O,
      hideEmoji: D,
      hideTooltip: x,
      textClassName: _,
      iconClassName: p,
      tooltipClassName: ea,
      voiceChannel: l,
      hangStatus: V,
      userId: null == t ? true : t.id
    });
  return (0, r.jsxs)("div", {
    className: ea,
    children: [ei(), (null != Z || null != V) && Q > 0 && (0, r.jsx)(G, {
      textVariant: "text-".concat(y, "/normal"),
      className: _
    }), eo(), R && (0, r.jsx)(v.Z, {})]
  })
}