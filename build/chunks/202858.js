/** Chunk was on 21863 **/
t.d(i, {
  Yn: () => a,
  ZP: () => s
}), t(415506);
var n = t(255367);
t(73800);
var r = t(481060),
  l = t(981631);

function c(e) {
  for (var i = 1; i < arguments.length; i++) {
    var t = null != arguments[i] ? arguments[i] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(i) {
      var n;
      n = t[i], i in e ? Object.defineProperty(e, i, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[i] = n
    })
  }
  return e
}

function o(e, i) {
  return i = null != i ? i : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : (function(e, i) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t.push.apply(t, n)
    }
    return t
  })(Object(i)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
  }), e
}

function a() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return new Promise(i => {
    (0, r.ZDy)(async () => {
      let {
        default: i
      } = await Promise.all([t.e("76540"), t.e("35305")]).then(t.bind(t, 628908));
      return t => (0, n.jsx)(i, o(c({}, t), {
        isTotp: e
      }))
    }, {
      onCloseCallback: i,
      onCloseRequest: l.VqG
    })
  })
}
let s = {
  enableMFA: async function() {
    await new Promise(e => {
      (0, r.ZDy)(async () => {
        let {
          default: i
        } = await Promise.all([t.e("58740"), t.e("23746")]).then(t.bind(t, 837651));
        return t => (0, n.jsx)(i, o(c({}, t), {
          handleEnableMFASuccess: e
        }))
      })
    }), await a()
  }
}