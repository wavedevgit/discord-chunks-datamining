/** Chunk was on 28636 **/
/** chunk id: 852860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v,
  o: () => f
}), require("./747238.js"), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk503879 = require("./503879.jsx"),
  Chunk710016 = require("./710016.jsx"),
  Chunk644576 = require("./644576.jsx"),
  Chunk590858 = require("./590858.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, l, a, r = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (a = 0, n = Reflect.ownKeys(e); a < n.length; a++) l = n[a], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
    return r
  }
  if (r = function(e, t) {
      if (null == e) return {};
      var n, l, a = {},
        r = Object.getOwnPropertyNames(e);
      for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      return a
    }(e, t), Object.getOwnPropertySymbols)
    for (a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) l = n[a], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
  return r
}

function f(e) {
  return "".concat(e.split("?")[0], "?size=").concat(2048)
}
let g = e => {
  let {
    index: t,
    items: n
  } = e, a = b(e, ["index", "items"]), r = n[t], i = 0, c = [];
  for (let e of n)
    if (e.type === d.geh.IMG) {
      let {
        width: t,
        height: n,
        src: l
      } = e;
      e === r && (i = c.length), c.push({
        src: f(l),
        width: t,
        height: n
      })
    } return (0, l.jsx)(s.A, m(h({}, a), {
    items: c,
    startWith: i
  }))
};
class x extends Chunk64700.Component {
  render() {
    let e = this.props,
      {
        pageSize: t
      } = e,
      n = b(e, ["pageSize"]),
      a = t === o.q.SMALL ? c.A : i.A;
    return (0, l.jsx)(a, m(h({}, n), {
      onCurrentItemClick: this.handleCurrentItemClick
    }))
  }
  constructor(...e) {
    super(...e), p(this, "handleCurrentItemClick", (e, t) => {
      e.type !== d.geh.IMG || (0, r.ueM)() || (0, r.qfG)(e => (0, l.jsx)(r.EOs, m(h({
        size: r.rIJ.DYNAMIC,
        "aria-label": u.intl.string(u.t.X4IxWL)
      }, e), {
        parentComponent: "ApplicationStoreListingCarousel",
        children: (0, l.jsx)(g, m(h({}, e), {
          index: t,
          items: this.props.items
        }))
      })))
    })
  }
}
let v = x