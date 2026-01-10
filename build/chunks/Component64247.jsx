/** Chunk was on 81985 **/
/** chunk id: 64247, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk438536 = require("./438536.jsx"),
  Chunk214906 = require("./214906.jsx"),
  Chunk346479 = require("./346479.js"),
  Chunk723170 = require("./723170.js"),
  Chunk124368 = require("./124368.js");

function u(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: u,
    navId: d,
    label: p
  } = e, f = (0, l.Z)(t, "Notifications Bell"), h = (0, a.Z)(t), g = (0, s.B)(t);
  return (0, r.jsxs)(i.v2r, {
    navId: d,
    onClose: n,
    "aria-label": p,
    onSelect: u,
    children: [(0, r.jsxs)(i.kSQ, {
      children: [t.isForumPost() ? f : null, h]
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
          action: () => o.Z.setNotificationSettings(t, {
            flags: n
          }),
          checked: n === g
        }, n)
      })
    })]
  })
}