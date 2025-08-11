/** Chunk was on web.js **/
/** chunk id: 993397, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./314940.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk481060 = require("./481060.js"),
  Chunk492593 = require("./492593.jsx"),
  Chunk534469 = require("./534469.jsx"),
  Chunk511010 = require("./511010.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk758010 = require("./758010.js"),
  Chunk30804 = require("./30804.js");

function g(e) {
  let {
    expanded: t,
    onClick: n,
    count: i,
    compact: o,
    collapsedReason: a
  } = e, u = (0, s.EQ)({
    collapsedReason: a
  }).with({
    collapsedReason: p.t.VFWjc3
  }, () => <l.kZF size={"md"} color={"currentColor"} className={h.blockedIcon} />).with({
    collapsedReason: p.t["+FcYMz"]
  }, () => <l.t6m size={"md"} color={"currentColor"} className={h.blockedIcon} />).otherwise(() => <l.Dio size={"md"} color={"currentColor"} className={h.blockedIcon} />);
  return <c.Z compact={o} role={"group"} childrenMessageContent={(0, r.jsx)(f.Z, {
      compact: o,
      className: h.blockedSystemMessage,
      iconNode: u,
      children: (0, r.jsxs)("div", {
        className: h.blockedMessageText,
        children: [p.intl.format(a, {
          count: i
        }), " —", " ", (0, r.jsx)(l.P3F, {
          tag: "span",
          onClick: n,
          className: h.blockedAction,
          children: t ? p.intl.string(p.t.fgq1go) : p.intl.string(p.t.XJuakJ)
        })]
      })
    })} />
}

function E(e) {
  var t;
  let {
    messages: n,
    channel: o,
    compact: s = false,
    unreadId: l,
    collapsedReason: c
  } = e, {
    hasJumpTarget: f = false
  } = n, [p, E] = i.useState(f), b = i.useCallback(() => E(e => !e), []), y = n.hasUnread ? n.content.length - 1 : n.content.length;
  return <div className={a()({
      [m.groupStart]: true,
      [h.expanded]: p
    })}>{n.hasUnread && (!p || (null == (t = n.content[0]) ? true : t.type) === _.ys_.DIVIDER) ? <d.Z isUnread={true} id={l} /> : null}{<g count={y} compact={s} expanded={p} onClick={b} collapsedReason={c} />}{p ? n.content.map((e, t) => {
      if (e.type === _.ys_.DIVIDER && t > 0) {
        var i, a;
        let e = null != (a = null == (i = n.content[t + 1]) ? true : i.isGroupStart) && a;
        return <d.Z isUnread={true} isBeforeGroup={e} id={l} />
      }
      if (e.type === _.ys_.MESSAGE || e.type === _.ys_.THREAD_STARTER_MESSAGE) {
        let t = e.type === _.ys_.THREAD_STARTER_MESSAGE ? u.Ru : u.ZP;
        return <t className={h.__invalid_blocked} compact={s} channel={o} message={e.content} groupId={e.groupId} flashKey={e.flashKey} isLastItem={false} renderContentOnly={false} />
      }
    }) : null}</div>
}
let b = Chunk73800.memo(E)