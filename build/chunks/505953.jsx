/** Chunk was on web.js **/
/** chunk id: 505953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk79712 = require("./79712.jsx"),
  Chunk276952 = require("./276952.jsx"),
  Chunk91159 = require("./91159.js"),
  Chunk496675 = require("./496675.js"),
  Chunk306680 = require("./306680.js"),
  Chunk446183 = require("./446183.jsx"),
  Chunk677281 = require("./677281.js"),
  Chunk709054 = require("./709054.js"),
  Chunk765104 = require("./765104.js"),
  Chunk477291 = require("./477291.jsx"),
  Chunk478758 = require("./478758.jsx"),
  Chunk789707 = require("./789707.js"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk778699 = require("./778699.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e) {
  let {
    summary: t,
    channel: f,
    members: b,
    guildId: I,
    unread: S,
    onClick: N
  } = e, [C, R] = i.useState(false), P = (0, u.Ye)(h.default.extractTimestamp(t.startId)), w = (0, o.e7)([m.Z], () => m.Z.summaryFeedback(t)), D = (e, n) => {
    e.stopPropagation(), (0, g.Z)({
      summary: t,
      channel: f,
      rating: n
    })
  }, L = d.Z.can(y.Plq.MANAGE_MESSAGES, f), x = e => {
    L && (0, s.jW)(e, async () => {
      let {
        default: e
      } = await n.e("12891").then(n.bind(n, 519620));
      return n => <e{...A(T({}, n), {
        summary: t
      })} />
    })
  };
  return <a.P3F className={v.container} onClick={N} onContextMenu={x} onMouseEnter={() => R(true)} onMouseLeave={() => R(false)}>{<c.Z hovered={C} unread={S} className={v.unreadPill} />}{<div className={v.rowHeader}><div className={v.rowHeaderLeft}>{<a.Text className={v.timestamp} color={"interactive-normal"} variant={"text-xs/normal"}>{P}</a.Text>}{<l.Z height={4} width={4} aria-hidden={"true"} className={v.dot} />}{<a.kBi size={"xxs"} color={"currentColor"} className={v.icon} />}{<a.Text className={v.count} color={"interactive-normal"} variant={"text-xs/normal"}>{t.count}</a.Text>}{b.length > 0 && <r.Fragment>{<l.Z height={4} width={4} aria-hidden={"true"} className={v.dot} />}{<E.Z partySize={{
              knownSize: b.length,
              totalSize: b.length
            }} maxAvatarsShown={3} members={b} guildId={I} />}</r.Fragment>}</div></div>}{C && !w && <div className={v.feedbackContainer}>{<a.P3F onClick={e => D(e, O.aZ.GOOD)}><p.Z className={v.thumbIcon} width={12} height={12} /></a.P3F>}{<a.P3F onClick={e => D(e, O.aZ.BAD)}><_.Z className={v.thumbIcon} width={12} height={12} /></a.P3F>}</div>}{<a.Text color={"header-primary"} variant={"text-sm/semibold"} className={v.title}>{t.topic}</a.Text>}{<a.Text color={"header-secondary"} variant={"text-sm/normal"} className={v.subtitle}>{t.summShort}</a.Text>}</a.P3F>
}

function C(e) {
  let {
    summaries: t,
    summariesMembers: n,
    channel: a,
    selectTopic: s,
    setOpen: l
  } = e, c = (0, o.e7)([f.ZP], () => f.ZP.getOldestUnreadMessageId(a.id)), u = i.useCallback(e => {
    s(e), l(false)
  }, [s, l]);
  return t.length < 1 ? <b.Z /> : <r.Fragment>{t.map((e, t) => {
      var i;
      let o = null != (i = n[t]) ? i : [];
      return (0, r.jsx)(N, {
        summary: e,
        channel: a,
        members: o,
        guildId: a.guild_id,
        unread: null != c && h.default.compare(e.endId, c) > 0,
        onClick: () => u(t)
      }, t)
    })}</r.Fragment>
}