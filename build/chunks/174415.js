/** Chunk was on web.js **/
/** chunk id: 174415, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => o
});
var Chunk388032 = require("./388032.jsx");

function i(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
}

function o(e) {
  let t = new Date(Number(e)),
    n = i(t, new Date),
    o = new Date;
  o.setDate(o.getDate() + 1);
  let a = i(t, o),
    s = r.intl.data.formatTime(t, {
      format: "short"
    });
  return n ? {
    kind: "today",
    dateString: r.intl.data.formatRelativeTime(0, "day", {
      numeric: "auto"
    }),
    timeString: s
  } : a ? {
    kind: "tomorrow",
    dateString: r.intl.data.formatRelativeTime(1, "day", {
      numeric: "auto"
    }),
    timeString: s
  } : {
    kind: "date",
    dateString: r.intl.data.formatDate(t, {
      dateStyle: "short"
    }),
    timeString: s
  }
}