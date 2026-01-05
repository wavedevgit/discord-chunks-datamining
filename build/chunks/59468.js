/** Chunk was on 46746 **/
/** chunk id: 59468, original params: e,t,n (module,exports,require) **/
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
    height: n,
    types: d = [i.vA.CAMERA, i.vA.SCREEN, i.vA.WINDOW]
  } = e, u = l.Z.getVideoDevices(), f = (0, s.Z)(l.Z.getMediaEngine(), d, {
    width: t,
    height: n
  }), h = (0, o._)(), p = await h, x = await f, m = x.filter(e => e.id.startsWith(i.vA.SCREEN)).map(e => {
    var t, n;
    let r = e.name;
    return "Entire screen" === r ? r = c.intl.string(c.t.R4wpLN) : /^Screen \d+$/.test(r) && (r = c.intl.formatToPlainString(c.t["y/R7n4"], {
      index: parseInt(r.split(" ")[1])
    })), t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, e), n = n = {
      name: r
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t
  }), g = function(e, t) {
    let n = {};
    return t.forEach(e => {
      n[e.id] = e
    }), e.forEach(e => {
      n[e.id] = e
    }), Object.values(n)
  }(x.filter(e => e.id.startsWith(i.vA.WINDOW)), p), v = [];
  return d.includes(i.vA.CAMERA) && (v = Object.entries(u).filter(e => {
    let [t, n] = e;
    return !n.disabled
  }).map((e, t) => {
    let [n, i] = e, s = a[t % a.length], l = Uint8Array.from(atob(s), e => e.charCodeAt(0)), o = (0, r.xS)(l);
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