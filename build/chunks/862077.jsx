/** Chunk was on web.js **/
/** chunk id: 862077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk699516 = require("./699516.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk687158 = require("./687158.js"),
  Chunk316027 = require("./316027.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk848780 = require("./848780.jsx"),
  Chunk907179 = require("./907179.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk70964 = require("./70964.js"),
  Chunk609440 = require("./609440.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e) {
  let {
    user: t,
    guildId: n,
    setPopoutRef: v,
    channelId: T,
    messageId: S,
    roleId: A,
    openedAt: N,
    onHide: C,
    newAnalyticsLocations: R = [],
    disableAutoFocus: P = false
  } = e, w = (0, o.e7)([c.Z], () => c.Z.isBlocked(t.id)), {
    analyticsLocations: D
  } = (0, l.ZP)([...R, w ? s.Z.BLOCKED_PROFILE_POPOUT : s.Z.IGNORED_PROFILE_POPOUT]), L = (0, d.ZB)({
    layout: "POPOUT",
    userId: t.id,
    guildId: n,
    channelId: T,
    messageId: S,
    roleId: A
  }), x = i.useRef(null), M = (0, _.ZP)(t.id, n);
  i.useEffect(() => {
    null == v || v(null == x ? true : x.current)
  }, [x, v]);
  let k = w ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
    j = P ? "div" : a.VqE;
  return <l.Gt value={D}><d.Mt value={L} openedAt={N} fetchStartedAt={null == M ? true : M.fetchStartedAt} fetchEndedAt={null == M ? true : M.fetchEndedAt} isLoaded={null == M ? true : M.isLoaded}><j ref={x} aria-label={t.username}><h.Z user={t} displayProfile={M} themeType={E.lY.POPOUT}><div className={y.container}>{<img alt={""} src={O} className={y.preview} aria-hidden={true} />}{<div className={y.body}>{<div className={y.headerContainer}>{<p.Z user={t} guildId={n} />}{<a.X6q variant={"heading-lg/bold"}>{b.intl.string(b.t.b33pLC)}</a.X6q>}{<a.Text variant={"text-sm/medium"}>{b.intl.format(w ? b.t["8F+WNz"] : b.t["/cZp5u"], {
                    username: u.ZP.getName(n, T, t)
                  })}</a.Text>}</div>}{<a.Kqy align={"center"}>{<g.Z isBlocked={w} onClick={() => {
                    C(), (0, f.pQ)(I({
                      action: k,
                      analyticsLocations: D
                    }, L))
                  }} />}{<m.Z userId={t.id} onClick={() => {
                    C(), (0, f.pQ)(I({
                      action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                      analyticsLocations: D
                    }, L))
                  }} />}</a.Kqy>}</div>}</div></h.Z></j></d.Mt></l.Gt>
}