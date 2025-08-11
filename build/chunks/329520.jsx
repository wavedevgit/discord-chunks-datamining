/** Chunk was on web.js **/
/** chunk id: 329520, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.js"),
  Chunk201895 = require("./201895.js"),
  Chunk933557 = require("./933557.js"),
  Chunk209698 = require("./209698.js"),
  Chunk592125 = require("./592125.js"),
  Chunk814454 = require("./814454.js"),
  Chunk473919 = require("./473919.js"),
  Chunk170187 = require("./170187.jsx"),
  Chunk532657 = require("./532657.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e) {
  let {
    stream: t,
    game: n,
    textVariant: u,
    textClassName: h,
    iconClassName: E,
    hideIcon: b = false,
    hideText: y = false,
    hideTooltip: O = false,
    canTruncate: v = true
  } = e, I = (0, o.e7)([d.Z], () => d.Z.getChannel(t.channelId)), T = (0, c.ZP)(I), {
    analyticsLocations: S
  } = (0, s.ZP)(), A = i.useCallback(() => {
    (0, f.A)({
      analyticsLocations: S,
      activityType: m.IIU.STREAMING,
      voiceChannelId: t.channelId
    })
  }, [S, t.channelId]);
  if (b && y) return null;
  let N = (null == n ? true : n.name) === "" ? null : null == n ? true : n.name,
    C = null != N ? g.intl.format(g.t["0wJXSk"], {
      name: N
    }) : g.intl.string(g.t.eXan7O),
    R = !O && null != I && null != T;
  return <r.Fragment>{!b && <_.Z icon={a.ARS} tooltipText={R ? T : true} tooltipAriaLabel={R ? (0, l.ZP)({
        channel: I
      }) : true} className={E} onTooltipShow={R ? A : true} />}{!y && <p.Z variant={u} className={h} canTruncate={v} hideTooltip={O}>{C}</p.Z>}</r.Fragment>
}

function O(e) {
  let {
    stream: t,
    game: n,
    textVariant: i,
    textClassName: s,
    iconClassName: l,
    hideIcon: u = false,
    hideText: f = false,
    hideTooltip: p = false,
    canTruncate: m = true,
    showChannelName: E = false
  } = e, b = (0, o.e7)([d.Z], () => d.Z.getChannel(t.channelId)), y = (0, c.ZP)(b), O = (null == n ? true : n.name) === "" ? null : null == n ? true : n.name, v = null != O ? g.intl.format(g.t["0wJXSk"], {
    name: O
  }) : g.intl.string(g.t.eXan7O), I = null != O ? g.intl.formatToPlainString(g.t["0wJXSk"], {
    name: O
  }) : g.intl.string(g.t.eXan7O), T = null != y ? <r.Fragment>{v}{" ("}{y}{")"}</r.Fragment> : v, S = E ? T : v, A = null != y ? "".concat(I, " (").concat(y, ")") : I;
  return <h.Z icon={u ? true : (0, r.jsx)(_.Z, {
      icon: a.ARS,
      className: l
    })} text={S} tooltipText={p ? true : T} textVariant={i} className={s} canTruncate={m} hideTooltip={p} aria-label={A} hideText={f} />
}

function v(e) {
  return (0, u.b)({
    location: "VoiceActivityStatusExperimentWrapper"
  }) ? <O{...b({}, e)} /> : <y{...b({}, e)} />
}