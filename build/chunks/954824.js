/** Chunk was on web.js **/
/** chunk id: 954824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk525654 = require("./525654.js"),
  i = require.n(Chunk525654),
  Chunk444675 = require("./444675.js");

function o(e, t) {
  if (!e.startsWith("discord:")) return location.href = e, a.nextTick(() => t(true));
  let {
    body: n
  } = document;
  if (null == n) return a.nextTick(() => t(false));
  let r = document.createElement("iframe");
  n.appendChild(r);
  try {
    null != r.contentWindow && (r.contentWindow.location.href = e), a.nextTick(() => t(true))
  } catch (e) {
    "NS_ERROR_UNKNOWN_PROTOCOL" === e.name && a.nextTick(() => t(false))
  }
  window.setTimeout(() => {
    var e;
    (null != (e = null == r ? true : r.parentElement) ? e : null) !== null && n.removeChild(r)
  }, 1e3)
}

function s(e, t) {
  let n = false;

  function r() {
    n = true
  }
  window.addEventListener("blur", r), location.href = e, setTimeout(() => {
    window.removeEventListener("blur", r), t(n)
  }, 1e3)
}

function l(e, t) {
  t(false)
}

function c(e, t) {
  location.href = e, a.nextTick(() => t(true))
}
let u = {
  launch: function() {
    var e, t;
    return (null == (e = i().os) ? true : e.family) === "Android" || (null == (t = i().os) ? true : t.family) === "iOS" ? c : "Gecko" === i().layout ? o : null != i().ua && false !== i().ua.indexOf("Valve Steam GameOverlay") ? l : s
  }()
}