/** Chunk was on web.js **/
/** chunk id: 252223, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./539854.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk303524 = require("./303524.js"),
  Chunk329520 = require("./329520.js"),
  Chunk233023 = require("./233023.jsx"),
  Chunk868781 = require("./868781.js"),
  Chunk122943 = require("./122943.jsx"),
  Chunk556638 = require("./556638.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk843280 = require("./843280.js");

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

function k(e) {
  let t = (null == e ? true : e.name) === "" ? null : null == e ? true : e.name;
  return null != t ? P.intl.formatToPlainString(P.t["0wJXSk"], {
    name: t
  }) : P.intl.string(P.t.eXan7O)
}

function j(e, t) {
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
  }), null == t && null != r && i.push(j(r, s)), i.length > 0 ? i.join(", ") : ""
}

function G(e) {
  let {
    textVariant: t,
    className: n,
    hasCustomStatusText: i,
    totalActivityCount: o
  } = e, s = o - 1;
  return <l.xv variant={t} className={a()(n, w.activityCounter)} color={i ? "status-positive" : "none"}>{"+"}{s}</l.xv>
}

function B(e) {
  let {
    textVariant: t,
    className: n
  } = e;
  return <l.xv variant={t} className={a()(w.dot, n)}>{C.l}</l.xv>
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
    hideTooltip: x = false
  } = e;
  (0, f.Z)(null == t ? true : t.id);
  let k = (null == o ? true : o.discoverable) !== false ? o : null,
    j = (0, g.Cf)(k),
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
        return t !== R.IIU.CUSTOM_STATUS && t !== R.IIU.HANG_STATUS && n !== (null == j ? true : j.name)
      })) ? e : [], (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id || null != e.name && null != t.name && e.name === t.name)
    }, [n, null == j ? true : j.name]),
    Y = null == n ? true : n.find(e => e.name === (null == j ? true : j.name)),
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
        t = true === e || x;
      if (null != k) return <T.Z stream={k} game={Y} textVariant={"text-".concat(O, "/medium")} textClassName={_} iconClassName={m} hideText={ee} hideIcon={W} hideTooltip={t} />;
      let n = null == H ? true : H[0];
      return null != n ? <A.Z activity={n} textVariant={"text-".concat(O, "/medium")} textClassName={_} iconClassName={m} hideText={ee} hideIcon={W} hideTooltip={t} /> : null != l ? <N.Z channel={l} textVariant={"text-".concat(O, "/medium")} textClassName={_} iconClassName={m} hideText={ee} hideTooltip={t} /> : null
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
      return null != k && e.push(<T.Z{...M(L({
        stream: k,
        game: null == n ? true : n.find(d.Z)
      }, t), {
        showChannelName: true
      })} />), H.forEach((n, i) => {
        e.push(<A.Z{...L({
          activity: n
        }, t)} />)
      }), Q && e.push(<N.Z{...M(L({
        channel: l
      }, t), {
        showChannelName: true
      })} />), e
    },
    ei = () => <G textVariant={"text-".concat(O, "/medium")} className={_} hasCustomStatusText={q} totalActivityCount={J} />,
    eo = () => 0 === J ? null : $ && !W ? x ? <div className={a()(w.activityContainer, ee && w.iconOnly)}>{en()}{ei()}</div> : <u.ua7 tooltipContentClassName={a()(w.container, w.activitiesTooltip, w.hasMultipleActivities)} delay={C.X} text={er()} aria-label={et}>{e => (0, r.jsxs)("div", M(L({
        className: a()(w.activityContainer, ee && w.iconOnly)
      }, e), {
        children: [en(true), ei()]
      }))}</u.ua7> : en(),
    ea = a()(w.container, {
      [w.textXs]: "xs" === O,
      [w.textSm]: "sm" === O
    }),
    es = () => null == Z && null == V ? null : <S.Z customStatusActivity={Z} textSize={O} animateEmoji={v} hideEmoji={D} hideTooltip={x} textClassName={_} iconClassName={m} tooltipClassName={ea} voiceChannel={l} hangStatus={V} />;
  return <div className={ea}>{eo()}{null != Z && J > 0 && <B textVariant={"text-".concat(O, "/normal")} className={_} />}{es()}{P && <I.Z />}</div>
}