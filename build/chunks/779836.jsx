/** Chunk was on web.js **/
/** chunk id: 779836, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk511010 = require("./511010.jsx"),
  Chunk446183 = require("./446183.jsx"),
  Chunk677281 = require("./677281.jsx"),
  Chunk765104 = require("./765104.js"),
  Chunk477291 = require("./477291.jsx"),
  Chunk531578 = require("./531578.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk613873 = require("./613873.js");

function E(e) {
  let {
    summary: t,
    channel: n
  } = e, i = null == (0, s.e7)([f.Z], () => f.Z.summaryFeedback(t)), o = (e, r) => {
    e.stopPropagation(), (0, _.Z)({
      summary: t,
      channel: n,
      rating: r
    })
  }, c = (0, l.Yzy)(i, {
    enter: {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    },
    leave: {
      opacity: 0
    },
    config: {
      mass: 1,
      tension: 500,
      friction: 18,
      clamp: true
    }
  }, "animate-always");
  return <r.Fragment>{c((e, t) => t ? (0, r.jsx)("div", {
      className: g.summaryFeedbackWrapper,
      children: (0, r.jsxs)(a.animated.div, {
        style: e,
        className: g.summaryFeedback,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: m.intl.string(m.t["5ZsiEx"])
        }), (0, r.jsx)(l.P3F, {
          onClick: e => o(e, p.aZ.GOOD),
          children: (0, r.jsx)(d.Z, {
            className: g.thumbIcon,
            width: 12,
            height: 12
          })
        }), (0, r.jsx)(l.P3F, {
          onClick: e => o(e, p.aZ.BAD),
          children: (0, r.jsx)(u.Z, {
            className: g.thumbIcon,
            width: 12,
            height: 12
          })
        })]
      })
    }) : null)}</r.Fragment>
}

function b(e) {
  var t, n;
  let i, {
      item: a,
      channel: u,
      index: d
    } = e,
    _ = (0, s.e7)([f.Z], () => f.Z.selectedSummary(u.id));
  if (null == _) return null;
  let p = null != a.unreadId,
    m = null != a.content;
  return i = m ? <r.Fragment>{<l.sVe size={"xs"} color={"currentColor"} className={g.summaryStartIcon} />}{a.content}</r.Fragment> : <r.Fragment>{<E summary={_} channel={u} />}{<l.sVe size={"xs"} color={"currentColor"} className={g.summaryEndIcon} />}</r.Fragment>, <c.Z className={o()(g.summaryDivider, m ? g.summaryDividerStart : g.summaryDividerEnd)} contentClassName={m ? g.summaryStartContent : g.summaryEndContent} isUnread={p} id={p ? h.j1 : true}>{i}</c.Z>
}