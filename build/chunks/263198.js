/** Chunk was on web.js **/
/** chunk id: 263198, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => u
});
var Chunk688619 = require("./688619.js"),
  i = require.n(Chunk688619),
  Chunk803038 = require("./803038.js");
let a = ["#94E0CF", "#9AF0B1", "#9A90FF", "#9A53FF", "#FDA6E4", "#FFE6C0", "#EFB4AA", "#56B69F", "#29C566", "#5348CA", "#6D24D4", "#CA48C8", "#F0AE29", "#DF4232"],
  s = [0, 45, 90, 135, 180, 225, 270, 315],
  l = [20, 40, 60, 80],
  c = ["analogous", "complementary", "split-complementary", "triadic"];

function u() {
  let e = Chunk803038.Mc.getCurrentConfig({
      location: "generateRandomColorOptions"
    }).v2EditorEnabled,
    t = l[Math.floor(Math.random() * l.length)];
  if (!(module || .8 > Math.random())) return {
    type: "solid",
    colors: [a[Math.floor(Math.random() * a.length)]],
    intensity: exports
  };
  let n = s[Math.floor(Math.random() * s.length)];
  if ("path1" == (.2 > Math.random() ? "path1" : "path2")) {
    let e = Math.floor(Math.random() * a.length),
      r = Math.floor(Math.random() * a.length);
    for (; Chunk688619 === module;) r = Math.floor(Math.random() * a.length);
    return {
      type: "gradient",
      colors: [a[module], a[Chunk688619]],
      angle: require,
      intensity: exports,
      gradientType: "two-color"
    }
  } {
    let e = a[Math.floor(Math.random() * a.length)],
      r = c[Math.floor(Math.random() * c.length)];
    return {
      type: "gradient",
      colors: m(module, Chunk688619),
      angle: require,
      intensity: exports,
      gradientType: Chunk688619
    }
  }
}

function d(e, t, n, r) {
  return [i().hsl(r - 30, t, n).hex(), e, i().hsl(r + 30, t, n).hex()]
}

function f(e, t, n, r) {
  let o = (r + 180) % 360,
    a = i().hsl(o, t, n).hex();
  return [e, i().mix(e, a, .5).hex(), a]
}

function p(e, t, n, r) {
  let o = (r + 150) % 360,
    a = (r + 210) % 360;
  return [e, i().hsl(o, t, n).hex(), i().hsl(a, t, n).hex()]
}

function _(e, t, n, r) {
  let o = (r + 120) % 360,
    a = (r + 240) % 360;
  return [e, i().hsl(o, t, n).hex(), i().hsl(a, t, n).hex()]
}

function m(e, t) {
  try {
    let n = i()(e),
      r = n.get("hsl.h"),
      o = n.get("hsl.s"),
      a = n.get("hsl.l");
    switch (t) {
      case "analogous":
        return d(e, o, a, r);
      case "complementary":
        return f(e, o, a, r);
      case "split-complementary":
        return p(e, o, a, r);
      case "triadic":
        return _(e, o, a, r);
      default:
        return [e]
    }
  } catch (t) {
    return [e]
  }
}