/** Chunk was on 88974 **/
/** chunk id: 375500, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk152007 = require("./152007.js"),
  Chunk867455 = require("./867455.js"),
  Chunk607508 = require("./607508.js"),
  Chunk37411 = require("./37411.js"),
  Chunk985018 = require("./985018.jsx");

function c(t) {
  let n = (0, s.X)(t);
  return (0, r.bG)([a.A], () => a.A.hasJoined(t.id)) ? (0, e.jsx)(l.Drp, {
    id: "thread-notifications",
    label: u.intl.string(u.t.h850Ss),
    children: (0, o.EU)().map(i => {
      let {
        setting: r,
        label: a
      } = i;
      return (0, e.jsx)(l.iDA, {
        group: "thread-notifications",
        id: "".concat(r),
        label: a,
        action: () => d.A.setNotificationSettings(t, {
          flags: r
        }),
        checked: r === n
      }, r)
    })
  }) : (0, e.jsx)(l.Drp, {
    id: "notifications-disabled",
    label: u.intl.string(u.t.h850Ss),
    disabled: true
  })
}