/** Chunk was on web.js **/
/** chunk id: 544384, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => g,
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk358221 = require("./358221.js"),
  Chunk418469 = require("./418469.jsx"),
  Chunk786138 = require("./786138.jsx"),
  Chunk803647 = require("./803647.js"),
  Chunk199902 = require("./199902.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(e, t, n) {
  let r = (0, a.e7)([l.Z], () => null != e ? l.Z.getSelectedParticipantId(e.id) : null),
    o = (0, a.e7)([f.Z], () => null != r ? f.Z.getActiveStreamForStreamKey(r) : null, [r]),
    s = (0, a.cj)([_.default], () => n.reduce((e, t) => (e[t.ownerId] = _.default.getUser(t.ownerId), e), {}), [n]);
  return i.useMemo(() => {
    if (null == e) return [];
    let r = n.filter(e => e.ownerId !== (null == t ? true : t.id));
    return 1 === r.length && r[0].ownerId === (null == o ? true : o.ownerId) ? [] : r.map(t => ({
      stream: t,
      username: p.ZP.getName(e.getGuildId(), e.id, s[t.ownerId])
    }))
  }, [s, n, e, o, null == t ? true : t.id])
}

function E(e) {
  var t;
  let {
    channel: n,
    currentUser: i,
    activeStreams: a,
    hideSelfOptions: l = false,
    showReportOption: f = false,
    handleGoLive: _,
    onClose: p,
    onSelect: E,
    appContext: b = h.IlC.APP,
    disableChangeWindows: y = false,
    onInteraction: O
  } = e, v = null != (t = a.find(e => e.ownerId === (null == i ? true : i.id))) ? t : null, I = g(n, i, a), T = (0, c.Z)(v, b), S = (0, u.b)({
    disableChangeWindows: y,
    stream: v,
    showReportOption: f,
    handleGoLive: _,
    minimal: true,
    appContext: b
  });
  return (0, r.jsx)(s.Z, {
    section: h.jXE.CONTEXT_MENU,
    children: (0, r.jsxs)(o.v2r, {
      onSelect: E,
      navId: "manage-streams",
      onClose: p,
      onInteraction: O,
      "aria-label": null != v ? m.intl.string(m.t.S5anIc) : m.intl.string(m.t.fjBNo1),
      children: [(0, r.jsx)(o.kSQ, {
        children: I.map(e => {
          let {
            stream: t,
            username: n
          } = e;
          return (0, r.jsx)(o.sNh, {
            id: t.ownerId,
            label: m.intl.formatToPlainString(m.t["7rkg+/"], {
              username: n
            }),
            icon: o.g5r,
            action: () => (0, d.Z)(t)
          }, "manage-stream-menu".concat(t.ownerId))
        })
      }), l ? null : S, l ? null : (0, r.jsx)(o.kSQ, {
        children: (0, r.jsx)(o.sNh, {
          id: "more-options",
          label: m.intl.string(m.t.PdRCRg),
          children: T
        })
      })]
    })
  })
}