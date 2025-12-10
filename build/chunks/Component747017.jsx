/** Chunk was on web.js **/
/** chunk id: 747017, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function S(e) {
  let {
    user: t,
    activities: n,
    applicationStream: a,
    voiceChannel: S,
    textClassName: I,
    iconClassName: T,
    textSize: C = "xs",
    animateEmoji: A = true,
    hasQuest: N = false,
    hideEmoji: P = false,
    hideTooltip: R = false
  } = e;
  (0, u.Z)(null == t ? true : t.id);
  let D = (null == a ? true : a.discoverable) !== false ? a : null,
    w = (0, f.E)("ActivityStatus", S),
    x = (0, l.e7)([p.default], () => p.default.getId() === (null == t ? true : t.id)),
    L = (0, l.e7)([d.Z], () => w ? x ? d.Z.getHangStatusActivity() : null != n ? n.find(e => e.type === O.IIU.HANG_STATUS) : null : null),
    j = i.useMemo(() => {
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
  if ((0, l.e7)([_.Z], () => _.Z.isBlockedOrIgnored(null == t ? true : t.id))) return null;
  let M = (null == t ? true : t.bot) === true,
    k = ((null == j ? true : j.state) != null || null != L) && "xs" === C,
    U = () => {
      if (null != D) return (0, r.jsx)(h.Z, {
        stream: D,
        game: null == n ? true : n.find(c.Z),
        textVariant: "text-".concat(C, "/medium"),
        textClassName: I,
        iconClassName: T,
        hideText: k,
        hideIcon: M,
        hideTooltip: R
      });
      let e = null == n ? true : n.find(e => {
        let {
          type: t
        } = e;
        return t !== O.IIU.CUSTOM_STATUS && t !== O.IIU.HANG_STATUS
      });
      return null != e ? (0, r.jsx)(E.Z, {
        activity: e,
        textVariant: "text-".concat(C, "/medium"),
        textClassName: I,
        iconClassName: T,
        hideText: k,
        hideIcon: M,
        hideTooltip: R
      }) : null != S ? (0, r.jsx)(b.Z, {
        channel: S,
        textVariant: "text-".concat(C, "/medium"),
        textClassName: I,
        iconClassName: T,
        hideText: k,
        hideTooltip: R
      }) : null
    },
    G = o()(v.container, {
      [v.textXs]: "xs" === C,
      [v.textSm]: "sm" === C
    }),
    Z = () => null == j && null == L ? null : (0, r.jsx)(g.Z, {
      customStatusActivity: j,
      textSize: C,
      animateEmoji: A,
      hideEmoji: P,
      hideTooltip: R,
      textClassName: I,
      iconClassName: T,
      tooltipClassName: G,
      voiceChannel: S,
      hangStatus: L,
      userId: null == t ? true : t.id
    });
  return (0, r.jsxs)("div", {
    className: G,
    children: [U(), (0, r.jsx)(s.xvT, {
      variant: "text-".concat(C, "/normal"),
      className: o()(v.truncated, v.dot, I),
      children: y.l
    }), Z(), N && (0, r.jsx)(m.Z, {})]
  })
}