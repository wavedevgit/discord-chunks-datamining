/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  A: () => s
}), n(47120);
var r = n(192379),
  i = n(524437),
  o = n(695346);

function a() {
  let [e, t] = r.useState("cozy");
  return r.useEffect(() => {
    let e = window.matchMedia("(min-width: 1024px) and (min-height: 820px)"),
      n = e => {
        t(e.matches ? "cozy" : "compact")
      };
    return e.addEventListener("change", n), () => {
      e.removeEventListener("change", n)
    }
  }, []), e
}

function s() {
  let e = o.YC.useSetting(),
    t = a();
  switch (e) {
    case i.Pi.RESPONSIVE:
      return t;
    case i.Pi.COZY:
      return "cozy";
    case i.Pi.COMPACT:
    default:
      return "compact"
  }
}