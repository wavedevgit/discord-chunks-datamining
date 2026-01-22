/** Chunk was on web.js **/
/** chunk id: 934173, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _,
  y: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk729937 = require("./729937.js"),
  Chunk541806 = require("./541806.js"),
  Chunk307600 = require("./307600.js"),
  Chunk998218 = require("./998218.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk993401 = require("./993401.jsx"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk380297 = require("./380297.js");
async function p(e) {
  let {
    activity: t,
    user: n,
    index: r
  } = e;
  try {
    let e = await (0, i.yb)(t, n.id);
    if (e.button_urls.length <= r) return;
    let a = e.button_urls[r];
    if ("string" != typeof a) return;
    let l = o.A.safeParseWithQuery(a);
    if ((null == l ? true : l.protocol) == null || (null == l ? true : l.hostname) == null) return;
    (0, s.h)({
      href: o.A.format(l),
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
    themeType: s
  } = (0, l.E)();
  if ((null == n ? true : n.buttons) == null || n.buttons.length < 1) return null;
  let o = (0, a.A)(n);
  return s === u.d.MODAL_V2 ? (0, r.jsx)("div", {
    className: f.fO,
    children: n.buttons.map((e, a) => (0, r.jsx)(c.FD, {
      text: o ? d.intl.string(d.t.I6JG46) : e,
      onClick: e => {
        e.stopPropagation(), null == i || i({
          action: o ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON"
        }), p({
          user: t,
          activity: n,
          index: a
        })
      }
    }, a))
  }) : (0, r.jsx)("div", {
    className: f.fO,
    children: n.buttons.map((e, a) => (0, r.jsx)(c.FD, {
      text: o ? d.intl.string(d.t.I6JG46) : e,
      fullWidth: true,
      onClick: e => {
        e.stopPropagation(), null == i || i({
          action: o ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON"
        }), p({
          user: t,
          activity: n,
          index: a
        })
      }
    }, a))
  })
}