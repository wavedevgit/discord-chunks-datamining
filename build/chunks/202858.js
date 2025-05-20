/** Chunk was on 21863 **/
i.d(t, {
  Yn: () => a,
  ZP: () => s
}), i(415506);
var n = i(255367);
i(73800);
var r = i(481060),
  l = i(981631);

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = i[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function o(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      i.push.apply(i, n)
    }
    return i
  })(Object(t)).forEach(function(i) {
    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
  }), e
}

function a() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return new Promise(t => {
    (0, r.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([i.e("76540"), i.e("69422")]).then(i.bind(i, 628908));
      return i => (0, n.jsx)(t, o(c({}, i), {
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
      (0, r.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([i.e("75584"), i.e("23746")]).then(i.bind(i, 837651));
        return i => (0, n.jsx)(t, o(c({}, i), {
          handleEnableMFASuccess: e
        }))
      })
    }), await a()
  }
}