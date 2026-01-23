/** Chunk was on 96811 **/
/** chunk id: 920281, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  d: () => d
}), require("./747238.js"), require("./896048.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./21862.js"), require("./801460.js"), require("./508300.js"), require("./650828.js");
var Chunk344390 = require("./344390.js"),
  Chunk141931 = require("./141931.js"),
  Chunk742459 = require("./742459.js"),
  Chunk430452 = require("./430452.js"),
  Chunk392128 = require("./392128.js"),
  Chunk985018 = require("./985018.jsx");
let c = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"];
async function d(e) {
  var t;
  let r, {
      width: d,
      height: u,
      types: f = [i.fS.CAMERA, i.fS.SCREEN, i.fS.WINDOW]
    } = e,
    h = s.A.getVideoDevices(),
    p = (0, l.A)(s.A.getMediaEngine(), f, {
      width: d,
      height: u
    }),
    x = (0, a.e)(),
    m = await x,
    j = await p,
    g = j.filter(e => e.id.startsWith(i.fS.SCREEN)).map(e => {
      var t, r;
      let n = e.name;
      return "Entire screen" === n ? n = o.intl.string(o.t.R4wpLN) : /^Screen \d+$/.test(n) && (n = o.intl.formatToPlainString(o.t["y/R7n4"], {
        index: parseInt(n.split(" ")[1])
      })), t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, e), r = r = {
        name: n
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t
    }),
    _ = (t = j.filter(e => e.id.startsWith(i.fS.WINDOW)), r = {}, m.forEach(e => {
      r[e.id] = e
    }), t.forEach(e => {
      r[e.id] = e
    }), Object.values(r)),
    v = [];
  return f.includes(i.fS.CAMERA) && (v = Object.entries(h).filter(e => {
    let [t, r] = e;
    return !r.disabled
  }).map((e, t) => {
    let [r, i] = e, l = c[t % c.length], s = Uint8Array.from(atob(l), e => e.charCodeAt(0)), a = (0, n.V1)(s);
    return {
      id: "camera:" + i.id,
      name: i.name,
      url: a
    }
  })), {
    windowSources: _,
    screenSources: g,
    cameraSources: v
  }
}