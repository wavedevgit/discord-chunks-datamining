/** Chunk was on 21863 **/
i.d(t, {
  Yn: () => o,
  ZP: () => s
}), i(415506);
var r = i(255367);
i(73800);
var n = i(481060),
  l = i(981631);

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = i[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function a(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      i.push.apply(i, r)
    }
    return i
  })(Object(t)).forEach(function(i) {
    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
  }), e
}

function o() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return new Promise(t => {
    (0, n.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([i.e("76540"), i.e("35305")]).then(i.bind(i, 628908));
      return i => (0, r.jsx)(t, a(c({}, i), {
        isTotp: e
      }))
    }, {
      onCloseCallback: t,
      onCloseRequest: l.VqG
    })
  })
}
let s = {
  enableMFA: async function() {
    await new Promise(e => {
      (0, n.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([i.e("25820"), i.e("23746")]).then(i.bind(i, 837651));
        return i => (0, r.jsx)(t, a(c({}, i), {
          handleEnableMFASuccess: e
        }))
      })
    }), await o()
  }
}