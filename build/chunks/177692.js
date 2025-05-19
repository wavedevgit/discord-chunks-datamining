/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Mn: () => u
}), n(415506);
var r = n(259443),
  i = n(668757),
  a = n(626135),
  o = n(621590),
  s = n(981631);
let l = new r.Yd("libdiscore"),
  c = !1;

function u() {
  if (!c) {
    try {
      let e = (0, i.rs)(6, 7);
      l.info("The answer for life the universe and everything is:", e), d()
    } catch (e) {
      _(e)
    }
    c = !0
  }
}

function d() {
  let e = (0, o.j)() ? ["note_store"] : [];
  a.default.track(s.rMx.LIBDISCORE_LOADED, {
    success: !0,
    experimental_features: e
  })
}

function f(e) {
  let t = "",
    n = null;
  return (e instanceof Error ? (t = e.message, n = e.name) : t = null != e ? String(e) : "Unknown error", t.length > 1e3 && (t = t.substring(0, 997) + "..."), null != n) ? "".concat(n, ": ").concat(t) : t
}

function _(e) {
  l.error("Failed to execute smoke test:", e);
  let t = f(e);
  a.default.track(s.rMx.LIBDISCORE_LOADED, {
    success: !1,
    error: t
  })
}