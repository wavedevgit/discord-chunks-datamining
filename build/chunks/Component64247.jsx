/** Chunk was on 63962 **/
/** chunk id: 64247, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk438536 = require("./438536.jsx"),
  Chunk71991 = require("./71991.jsx"),
  Chunk346479 = require("./346479.js"),
  Chunk723170 = require("./723170.js"),
  Chunk124368 = require("./124368.js");

function d(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: d,
    navId: u,
    label: p
  } = e, h = (0, l.Z)(t, "Notifications Bell"), f = (0, a.Z)(t), g = (0, o.B)(t);
  return (0, r.jsxs)(i.v2r, {
    navId: u,
    onClose: n,
    "aria-label": p,
    onSelect: d,
    children: [(0, r.jsxs)(i.kSQ, {
      children: [t.isForumPost() ? h : null, f]
    }), (0, r.jsx)(i.kSQ, {
      children: (0, c.zb)().map(e => {
        let {
          setting: n,
          label: l
        } = e;
        return (0, r.jsx)(i.k5B, {
          group: "thread-notifications",
          id: "".concat(n),
          label: l,
          action: () => s.Z.setNotificationSettings(t, {
            flags: n
          }),
          checked: n === g
        }, n)
      })
    })]
  })
}