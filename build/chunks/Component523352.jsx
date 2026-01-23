/** Chunk was on 21968 **/
/** chunk id: 523352, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk514810 = require("./514810.js"),
  Chunk486020 = require("./486020.js"),
  Chunk517765 = require("./517765.jsx");

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function d(e) {
  var t;
  let {
    channel: d,
    application: u,
    showApplicationImage: p
  } = e, m = function(e, t) {
    if (null == e) return {};
    var n, i, r, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          l = Object.getOwnPropertyNames(e);
        for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l
  }(e, ["channel", "application", "showApplicationImage"]), g = (0, a.N)(d), b = r.useCallback(() => (0, l.mMO)(async () => {
    let {
      default: e
    } = await n.e("73380").then(n.bind(n, 106895));
    return t => {
      var n, r;
      return (0, i.jsx)(e, (n = c({}, t), r = r = {
        channel: d,
        application: u
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    }
  }), [u, d]), f = p ? null != (t = u.getIconURL(48)) ? t : s.vI["0"] : true;
  return (0, i.jsx)(o.A, c({
    imageSrc: f,
    onButtonClick: b,
    details: null != g ? [{
      text: g
    }] : true
  }, m))
}