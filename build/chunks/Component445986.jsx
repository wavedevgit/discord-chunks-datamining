/** Chunk was on 84283 **/
/** chunk id: 445986, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => _,
  Z: () => x
}), require("./35282.js"), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk33122 = require("./33122.jsx"),
  Chunk761705 = require("./761705.jsx"),
  Chunk9807 = require("./9807.jsx"),
  Chunk843445 = require("./843445.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, a = function(e, t) {
    if (null == e) return {};
    var n, r, a = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
    return a
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
  }
  return a
}

function _(e) {
  return "".concat(e.split("?")[0], "?size=").concat(2048)
}
let f = e => {
  var {
    index: t,
    items: n
  } = e, a = g(e, ["index", "items"]);
  let i = n[t],
    l = 0,
    o = [];
  for (let e of n)
    if (e.type === d.s9s.IMG) {
      let {
        width: t,
        height: n,
        src: r
      } = e;
      e === i && (l = o.length), o.push({
        src: _(r),
        width: t,
        height: n
      })
    } return (0, r.jsx)(s.Z, h(m({}, a), {
    items: o,
    startWith: l
  }))
};
class b extends Chunk473749.Component {
  render() {
    let e = this.props,
      {
        pageSize: t
      } = module,
      n = g(module, ["pageSize"]),
      a = exports === Chunk843445.b.SMALL ? Chunk9807.Z : Chunk33122.Z;
    return (0, Chunk54381.jsx)(Chunk473749, h(m({}, require), {
      onCurrentItemClick: this.handleCurrentItemClick
    }))
  }
  constructor(...e) {
    super(...e), p(this, "handleCurrentItemClick", (e, t) => {
      e.type !== d.s9s.IMG || (0, i.$sL)() || (0, i.h7j)(e => (0, r.jsx)(i.Y0X, h(m({
        size: i.CgR.DYNAMIC,
        "aria-label": u.intl.string(u.t.X4IxWL)
      }, e), {
        parentComponent: "ApplicationStoreListingCarousel",
        children: (0, r.jsx)(f, h(m({}, e), {
          index: t,
          items: this.props.items
        }))
      })))
    })
  }
}
let x = b