/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  z: () => d
});
var r = n(200651),
  i = n(192379),
  o = n(709014);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = {
    click: {
      name: "click",
      start: 0,
      duration: 66
    },
    hover: {
      name: "hover",
      start: 90,
      duration: 40
    }
  },
  d = () => {
    let e = i.useRef(null),
      t = i.useCallback(() => {
        null != e.current && e.current.play("click")
      }, []),
      a = i.useCallback(() => {
        null != e.current && e.current.play("hover")
      }, []);
    return {
      events: {
        onMouseEnter: a,
        onMouseLeave: i.useCallback(() => {
          null != e.current && e.current.stopIfPlaying("hover")
        }, [])
      },
      play: t,
      Component: i.useCallback(t => (0, r.jsx)(o.L, c(s({}, t), {
        src: () => n.e("36995").then(n.t.bind(n, 737962, 19)),
        ref: e,
        markers: u
      })), [])
    }
  }