/** Chunk was on web.js **/
/** chunk id: 747017, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk833664 = require("./833664.js"),
  Chunk545957 = require("./545957.js"),
  Chunk106301 = require("./106301.js"),
  Chunk741570 = require("./741570.js"),
  Chunk314897 = require("./314897.js"),
  Chunk699516 = require("./699516.js"),
  Chunk303524 = require("./303524.jsx"),
  Chunk329520 = require("./329520.jsx"),
  Chunk233023 = require("./233023.jsx"),
  Chunk868781 = require("./868781.jsx"),
  Chunk122943 = require("./122943.jsx"),
  Chunk556638 = require("./556638.js"),
  Chunk981631 = require("./981631.js"),
  Chunk80568 = require("./80568.js");

function I(e) {
  let {
    user: t,
    activities: n,
    applicationStream: a,
    voiceChannel: I,
    textClassName: T,
    iconClassName: S,
    textSize: A = "xs",
    animateEmoji: C = true,
    hasQuest: N = false,
    hideEmoji: R = false,
    hideTooltip: P = false
  } = e;
  (0, u.Z)(null == t ? true : t.id);
  let w = (null == a ? true : a.discoverable) !== false ? a : null,
    D = (0, f.E)("ActivityStatus", I),
    x = (0, l.e7)([_.default], () => _.default.getId() === (null == t ? true : t.id)),
    L = (0, l.e7)([d.Z], () => D ? x ? d.Z.getHangStatusActivity() : null != n ? n.find(e => e.type === O.IIU.HANG_STATUS) : null : null),
    M = i.useMemo(() => {
      var e, t;
      let r = null == n ? true : n.find(e => {
        let {
          type: t
        } = e;
        return t === O.IIU.CUSTOM_STATUS
      });
      if (null == r) return null;
      let i = null != (t = null == (e = r.state) ? true : e.trim()) ? t : null;
      return null == ("" === i ? null : i) && null == r.emoji ? null : r
    }, [n]);
  if ((0, l.e7)([p.Z], () => p.Z.isBlockedOrIgnored(null == t ? true : t.id))) return null;
  let j = (null == t ? true : t.bot) === true,
    k = ((null == M ? true : M.state) != null || null != L) && "xs" === A,
    U = () => {
      if (null != w) return (0, r.jsx)(m.Z, {
        stream: w,
        game: null == n ? true : n.find(c.Z),
        textVariant: "text-".concat(A, "/medium"),
        textClassName: T,
        iconClassName: S,
        hideText: k,
        hideIcon: j,
        hideTooltip: P
      });
      let e = null == n ? true : n.find(e => {
        let {
          type: t
        } = e;
        return t !== O.IIU.CUSTOM_STATUS && t !== O.IIU.HANG_STATUS
      });
      return null != e ? (0, r.jsx)(E.Z, {
        activity: e,
        textVariant: "text-".concat(A, "/medium"),
        textClassName: T,
        iconClassName: S,
        hideText: k,
        hideIcon: j,
        hideTooltip: P
      }) : null != I ? (0, r.jsx)(b.Z, {
        channel: I,
        textVariant: "text-".concat(A, "/medium"),
        textClassName: T,
        iconClassName: S,
        hideText: k,
        hideTooltip: P
      }) : null
    },
    G = o()(v.container, {
      [v.textXs]: "xs" === A,
      [v.textSm]: "sm" === A
    }),
    B = () => null == M && null == L ? null : (0, r.jsx)(g.Z, {
      customStatusActivity: M,
      textSize: A,
      animateEmoji: C,
      hideEmoji: R,
      hideTooltip: P,
      textClassName: T,
      iconClassName: S,
      tooltipClassName: G,
      voiceChannel: I,
      hangStatus: L,
      userId: null == t ? true : t.id
    });
  return (0, r.jsxs)("div", {
    className: G,
    children: [U(), (0, r.jsx)(s.xvT, {
      variant: "text-".concat(A, "/normal"),
      className: o()(v.truncated, v.dot, T),
      children: y.l
    }), B(), N && (0, r.jsx)(h.Z, {})]
  })
}