/** Chunk was on 46746 **/
n.d(t, {
  t: () => c
}), n(301563), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(610885), n(126298), n(863942), n(866573), n(642549), n(787622);
var r = n(788900),
  l = n(268146),
  i = n(141038),
  s = n(131951),
  o = n(830461),
  a = n(388032);
async function c(e) {
  let {
    width: t,
    height: n
  } = e, c = s.Z.getVideoDevices(), d = (0, i.Z)(s.Z.getMediaEngine(), [l.vA.WINDOW, l.vA.SCREEN], {
    width: t,
    height: n
  }), u = (0, o._)(), f = await u, h = await d, m = h.filter(e => e.id.startsWith(l.vA.SCREEN)).map(e => {
    var t, n;
    let r = e.name;
    return "Entire screen" === r ? r = a.NW.string(a.t.R4wpLC) : /^Screen \d+$/.test(r) && (r = a.NW.formatToPlainString(a.t["y/R7n5"], {
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
            enumerable: !0,
            configurable: !0,
            writable: !0
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
  }), p = function(e, t) {
    let n = {};
    return t.forEach(e => {
      n[e.id] = e
    }), e.forEach(e => {
      n[e.id] = e
    }), Object.values(n)
  }(h.filter(e => e.id.startsWith(l.vA.WINDOW)), f), x = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"];
  return {
    windowSources: p,
    screenSources: m,
    cameraSources: Object.entries(c).filter(e => {
      let [t, n] = e;
      return !n.disabled
    }).map((e, t) => {
      let [n, l] = e, i = x[t % x.length], s = Uint8Array.from(atob(i), e => e.charCodeAt(0)), o = (0, r.xS)(s);
      return {
        id: "camera:" + l.id,
        name: l.name,
        url: o
      }
    })
  }
}