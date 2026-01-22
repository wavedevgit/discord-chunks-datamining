/** Chunk was on 97492 **/
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
    label: f
  } = e, p = (0, i.A)(t, "Notifications Bell"), h = (0, a.A)(t), b = (0, o.X)(t);
  return (0, r.jsxs)(l.W1t, {
    navId: d,
    onClose: n,
    "aria-label": f,
    onSelect: u,
    children: [(0, r.jsxs)(l.rXV, {
      children: [t.isForumPost() ? p : null, h]
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
          action: () => s.A.setNotificationSettings(t, {
            flags: n
          }),
          checked: n === b
        }, n)
      })
    })]
  })
}