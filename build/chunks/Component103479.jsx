/** Chunk was on web.js **/
/** chunk id: 103479, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h,
  s: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk763472 = require("./763472.js"),
  Chunk394821 = require("./394821.js"),
  Chunk49012 = require("./49012.js"),
  Chunk591759 = require("./591759.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704543 = require("./704543.js");
async function p(e) {
  let {
    activity: t,
    user: n,
    index: r
  } = e;
  try {
    let e = await (0, a.sd)(t, n.id);
    if (e.button_urls.length <= r) return;
    let i = e.button_urls[r];
    if ("string" != typeof i) return;
    let o = l.Z.safeParseWithQuery(i);
    if ((null == o ? true : o.protocol) == null || (null == o ? true : o.hostname) == null) return;
    (0, s.q)({
      href: l.Z.format(o),
      trusted: false
    })
  } catch (e) {}
}

function h(e) {
  let {
    user: t,
    activity: n,
    onAction: a
  } = e, {
    themeType: s
  } = (0, c.z)();
  if ((null == n ? true : n.buttons) == null || n.buttons.length < 1) return null;
  let l = (0, o.Z)(n);
  return s === d.lY.MODAL_V2 ? (0, r.jsx)(r.Fragment, {
    children: n.buttons.map((e, o) => (0, r.jsx)(u.tG, {
      text: l ? f.intl.string(f.t["I6JG4+"]) : e,
      size: i.Ph.TINY,
      themeColor: "secondary",
      onClick: e => {
        e.stopPropagation(), null == a || a({
          action: l ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON"
        }), p({
          user: t,
          activity: n,
          index: o
        })
      }
    }, o))
  }) : (0, r.jsx)(r.Fragment, {
    children: n.buttons.map((e, o) => (0, r.jsx)(u.tG, {
      text: l ? f.intl.string(f.t["I6JG4+"]) : e,
      size: i.Ph.SMALL,
      className: _.customButton,
      themeColor: "secondary",
      fullWidth: true,
      onClick: e => {
        e.stopPropagation(), null == a || a({
          action: l ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON"
        }), p({
          user: t,
          activity: n,
          index: o
        })
      }
    }, o))
  })
}