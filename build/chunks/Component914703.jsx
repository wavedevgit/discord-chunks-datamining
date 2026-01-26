/** Chunk was on 67564 **/
/** chunk id: 914703, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk660273 = require("./660273.jsx"),
  Chunk57907 = require("./57907.jsx"),
  Chunk867455 = require("./867455.js"),
  Chunk607508 = require("./607508.js"),
  Chunk37411 = require("./37411.js");

function u(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: u,
    navId: d,
    label: p
  } = e, h = (0, i.A)(t, "Notifications Bell"), f = (0, s.A)(t), g = (0, o.X)(t);
  return (0, r.jsxs)(l.W1t, {
    "data-menu-migrated-auto": true,
    navId: d,
    onClose: n,
    "aria-label": p,
    onSelect: u,
    children: [(0, r.jsxs)(l.rXV, {
      children: [t.isForumPost() ? h : null, f]
    }), (0, r.jsx)(l.rXV, {
      children: (0, c.EU)().map(e => {
        let {
          setting: n,
          label: i
        } = e;
        return (0, r.jsx)(l.iDA, {
          group: "thread-notifications",
          id: "".concat(n),
          label: i,
          action: () => a.A.setNotificationSettings(t, {
            flags: n
          }),
          checked: n === g
        }, n)
      })
    })]
  })
}