/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => u
});
var r = n(525654),
  i = n.n(r),
  o = n(444675);

function a(e, t) {
  if (!e.startsWith("discord:")) return location.href = e, o.nextTick(() => t(!0));
  let {
    body: n
  } = document;
  if (null == n) return o.nextTick(() => t(!1));
  let r = document.createElement("iframe");
  n.appendChild(r);
  try {
    null != r.contentWindow && (r.contentWindow.location.href = e), o.nextTick(() => t(!0))
  } catch (e) {
    "NS_ERROR_UNKNOWN_PROTOCOL" === e.name && o.nextTick(() => t(!1))
  }
  window.setTimeout(() => {
    var e;
    (null !== (e = null == r ? void 0 : r.parentElement) && void 0 !== e ? e : null) !== null && n.removeChild(r)
  }, 1e3)
}

function s(e, t) {
  let n = !1;

  function r() {
    n = !0
  }
  window.addEventListener("blur", r), location.href = e, setTimeout(() => {
    window.removeEventListener("blur", r), t(n)
  }, 1e3)
}

function l(e, t) {
  t(!1)
}

function c(e, t) {
  location.href = e, o.nextTick(() => t(!0))
}
let u = {
  launch: function() {
    var e, t;
    return (null === (e = i().os) || void 0 === e ? void 0 : e.family) === "Android" || (null === (t = i().os) || void 0 === t ? void 0 : t.family) === "iOS" ? c : "Gecko" === i().layout ? a : null != i().ua && -1 !== i().ua.indexOf("Valve Steam GameOverlay") ? l : s
  }()
}