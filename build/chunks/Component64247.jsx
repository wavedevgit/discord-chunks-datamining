/** Chunk was on 21087 **/
/** chunk id: 64247, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
    label: h
  } = e, p = (0, l.Z)(t, "Notifications Bell"), f = (0, a.Z)(t), g = (0, o.B)(t);
  return (0, r.jsxs)(i.v2r, {
    navId: d,
    onClose: n,
    "aria-label": h,
    onSelect: u,
    children: [(0, r.jsxs)(i.kSQ, {
      children: [t.isForumPost() ? p : null, f]
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