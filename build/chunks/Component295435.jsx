/** Chunk was on 30243 **/
/** chunk id: 295435, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  S: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk916616 = require("./916616.jsx"),
  Chunk981729 = require("./981729.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk558522 = require("./558522.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk22643 = require("./22643.js");

function b(e) {
  let t = l.useRef(null),
    r = e.media;
  if (r.loadingState === s.f.LOADED_NOT_FOUND) return (0, n.jsx)(c.u, {
    text: p.intl.string(p.t.UvDfMz),
    position: "bottom",
    align: "center",
    targetElementRef: t,
    children: r => {
      var l, i;
      return (0, n.jsx)("div", (l = function(e) {
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
      }({}, r), i = i = {
        className: o()(e.className, f.notFoundPlaceholder, {
          [f.hiddenSpoilers]: e.hiddenSpoilers
        }),
        style: {
          width: e.placeholderWidth,
          height: e.placeholderHeight
        },
        role: "img",
        children: (0, n.jsx)(u.Z, {
          ref: t,
          className: f.brokenImageIcon
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
      }), l))
    }
  });
  let i = r.loadingState === s.f.LOADING ? d.zo9.LOADING : d.zo9.ERROR;
  return (0, n.jsx)(a.E, {
    className: o()(e.className, {
      [f.hiddenSpoilers]: e.hiddenSpoilers
    }),
    readyState: i,
    src: "",
    width: e.placeholderWidth,
    height: e.placeholderHeight,
    maxWidth: e.maxWidth,
    maxHeight: e.maxHeight,
    mediaLayoutType: e.mediaLayoutType,
    useFullWidth: e.useFullWidth,
    zoomable: false
  })
}