/** Chunk was on 46746 **/
/** chunk id: 59468, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  t: () => d
}), require("./35282.js"), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./608445.js"), require("./853839.js"), require("./570086.js"), require("./479048.js");
var Chunk788900 = require("./788900.js"),
  Chunk268146 = require("./268146.js"),
  Chunk141038 = require("./141038.js"),
  Chunk131951 = require("./131951.js"),
  Chunk830461 = require("./830461.js"),
  Chunk388032 = require("./388032.jsx");
let a = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"];
async function d(e) {
  let {
    width: t,
    height: r,
    types: d = [i.vA.CAMERA, i.vA.SCREEN, i.vA.WINDOW]
  } = e, u = l.Z.getVideoDevices(), f = (0, s.Z)(l.Z.getMediaEngine(), d, {
    width: t,
    height: r
  }), h = (0, o._)(), p = await h, x = await f, m = x.filter(e => e.id.startsWith(i.vA.SCREEN)).map(e => {
    var t, r;
    let n = e.name;
    return "Entire screen" === n ? n = c.intl.string(c.t.R4wpLN) : /^Screen \d+$/.test(n) && (n = c.intl.formatToPlainString(c.t["y/R7n4"], {
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
  }), g = function(e, t) {
    let r = {};
    return t.forEach(e => {
      r[e.id] = e
    }), e.forEach(e => {
      r[e.id] = e
    }), Object.values(r)
  }(x.filter(e => e.id.startsWith(i.vA.WINDOW)), p), v = [];
  return d.includes(i.vA.CAMERA) && (v = Object.entries(u).filter(e => {
    let [t, r] = e;
    return !r.disabled
  }).map((e, t) => {
    let [r, i] = e, s = a[t % a.length], l = Uint8Array.from(atob(s), e => e.charCodeAt(0)), o = (0, n.xS)(l);
    return {
      id: "camera:" + i.id,
      name: i.name,
      url: o
    }
  })), {
    windowSources: g,
    screenSources: m,
    cameraSources: v
  }
}