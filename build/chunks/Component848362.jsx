/** Chunk was on web.js **/
/** chunk id: 848362, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E,
  T: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk313961 = require("./313961.js"),
  Chunk74329 = require("./74329.jsx"),
  Chunk845885 = require("./845885.jsx"),
  Chunk338771 = require("./338771.js"),
  Chunk616356 = require("./616356.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function g(e, t, n) {
  let r = (0, a.bG)([l.A], () => null != e ? l.A.getSelectedParticipantId(e.id) : null),
    s = (0, a.bG)([f.A], () => null != r ? f.A.getActiveStreamForStreamKey(r) : null, [r]),
    o = (0, a.cf)([p.default], () => n.reduce((e, t) => (e[t.ownerId] = p.default.getUser(t.ownerId), e), {}), [n]);
  return i.useMemo(() => {
    if (null == e) return [];
    let r = n.filter(e => e.ownerId !== (null == t ? true : t.id));
    return 1 === r.length && r[0].ownerId === (null == s ? true : s.ownerId) ? [] : r.map(t => ({
      stream: t,
      username: _.Ay.getName(e.getGuildId(), e.id, o[t.ownerId])
    }))
  }, [o, n, e, s, null == t ? true : t.id])
}

function E(e) {
  var t;
  let {
    channel: n,
    currentUser: i,
    activeStreams: a,
    hideSelfOptions: l = false,
    showReportOption: f = false,
    handleGoLive: p,
    onClose: _,
    onSelect: E,
    appContext: b = h.BRT.APP,
    disableChangeWindows: y = false,
    onInteraction: O
  } = e, A = null != (t = a.find(e => e.ownerId === (null == i ? true : i.id))) ? t : null, v = g(n, i, a), S = (0, c.A)(A, b), I = (0, u.E)({
    disableChangeWindows: y,
    stream: A,
    showReportOption: f,
    handleGoLive: p,
    minimal: true,
    appContext: b
  });
  return (0, r.jsx)(o.A, {
    section: h.JJy.CONTEXT_MENU,
    children: (0, r.jsxs)(s.W1t, {
      onSelect: E,
      navId: "manage-streams",
      onClose: _,
      onInteraction: O,
      "aria-label": null != A ? m.intl.string(m.t.S5anIc) : m.intl.string(m.t.fjBNo1),
      children: [(0, r.jsx)(s.rXV, {
        children: v.map(e => {
          let {
            stream: t,
            username: n
          } = e;
          return (0, r.jsx)(s.Drp, {
            id: t.ownerId,
            label: m.intl.formatToPlainString(m.t["7rkg+/"], {
              username: n
            }),
            icon: s.GT3,
            action: () => (0, d.A)(t)
          }, "manage-stream-menu".concat(t.ownerId))
        })
      }), l ? null : I, l ? null : (0, r.jsx)(s.rXV, {
        children: (0, r.jsx)(s.Drp, {
          id: "more-options",
          label: m.intl.string(m.t.PdRCRg),
          children: S
        })
      })]
    })
  })
}