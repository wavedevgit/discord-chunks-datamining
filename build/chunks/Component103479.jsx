/** Chunk was on web.js **/
/** chunk id: 103479, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _,
  s: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk763472 = require("./763472.js"),
  Chunk394821 = require("./394821.js"),
  Chunk49012 = require("./49012.js"),
  Chunk591759 = require("./591759.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk732380 = require("./732380.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704543 = require("./704543.js");
async function p(e) {
  let {
    activity: t,
    user: n,
    index: r
  } = e;
  try {
    let e = await (0, i.sd)(t, n.id);
    if (e.button_urls.length <= r) return;
    let o = e.button_urls[r];
    if ("string" != typeof o) return;
    let l = s.Z.safeParseWithQuery(o);
    if ((null == l ? true : l.protocol) == null || (null == l ? true : l.hostname) == null) return;
    (0, a.q)({
      href: s.Z.format(l),
      trusted: false
    })
  } catch (e) {}
}

function _(e) {
  let {
    user: t,
    activity: n,
    onAction: i
  } = e, {
    themeType: a
  } = (0, l.z)();
  if ((null == n ? true : n.buttons) == null || n.buttons.length < 1) return null;
  let s = (0, o.Z)(n);
  return a === u.l.MODAL_V2 ? (0, r.jsx)("div", {
    className: f.customButtons,
    children: n.buttons.map((e, o) => (0, r.jsx)(c.O1, {
      text: s ? d.intl.string(d.t.I6JG46) : e,
      onClick: e => {
        e.stopPropagation(), null == i || i({
          action: s ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON"
        }), p({
          user: t,
          activity: n,
          index: o
        })
      }
    }, o))
  }) : (0, r.jsx)("div", {
    className: f.customButtons,
    children: n.buttons.map((e, o) => (0, r.jsx)(c.O1, {
      text: s ? d.intl.string(d.t.I6JG46) : e,
      fullWidth: true,
      onClick: e => {
        e.stopPropagation(), null == i || i({
          action: s ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON"
        }), p({
          user: t,
          activity: n,
          index: o
        })
      }
    }, o))
  })
}