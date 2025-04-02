/** Chunk was on 53937 **/
l.d(t, {
  Z: () => d
}), l(866573), l(642549), l(787622);
var n = l(200651),
  r = l(192379),
  i = l(70097),
  s = l(947849),
  a = l(981631),
  o = l(388032);

function u(e) {
  let {
    poster: t,
    src: l,
    width: s,
    height: o,
    naturalWidth: u,
    naturalHeight: d,
    play: c = !0,
    className: h,
    alt: m,
    responsive: p
  } = e, g = r.useRef(null);
  return (r.useEffect(() => {
    let {
      current: e
    } = g;
    null != e && (c ? e.play().catch(e => {
      if (!(e instanceof DOMException) || "NotAllowedError" !== e.name) throw e
    }) : e.pause())
  }, [c]), u <= a.N_j && d <= a.XKF || u <= a.XKF && d <= a.N_j) ? (0, n.jsx)(i.Z, {
    ref: g,
    className: h,
    poster: t,
    src: l,
    width: s,
    height: o,
    responsive: p,
    muted: !0,
    loop: !0,
    autoPlay: c,
    playsInline: !0,
    preload: "none",
    "aria-label": m
  }) : (0, n.jsx)("img", {
    alt: "",
    src: t,
    width: s,
    height: o
  })
}

function d(e) {
  var {
    src: t,
    poster: l,
    naturalWidth: r,
    naturalHeight: i,
    responsive: a,
    autoPlay: d,
    className: c,
    playable: h = !0,
    renderImageComponent: m,
    alt: p = o.NW.string(o.t.I5gL2N),
    sourceMetadata: g
  } = e, b = function(e, t) {
    if (null == e) return {};
    var l, n, r = function(e, t) {
      if (null == e) return {};
      var l, n, r = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) l = i[n], t.indexOf(l) >= 0 || (r[l] = e[l]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) l = i[n], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l])
    }
    return r
  }(e, ["src", "poster", "naturalWidth", "naturalHeight", "responsive", "autoPlay", "className", "playable", "renderImageComponent", "alt", "sourceMetadata"]);
  return (0, n.jsx)(s.h.Consumer, {
    children: e => {
      var s, o;
      return m((s = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
            return Object.getOwnPropertyDescriptor(l, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = l[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n
          })
        }
        return e
      }({}, b), o = o = {
        alt: p,
        src: l,
        containerClassName: c,
        autoPlay: d,
        animated: h,
        responsive: a,
        renderAccessory: e,
        tabIndex: h ? 0 : -1,
        dataSafeSrc: t,
        children(e) {
          let {
            src: l,
            size: s,
            animating: o,
            alt: d
          } = e;
          return (0, n.jsx)(u, {
            alt: d,
            className: c,
            poster: l,
            src: t,
            width: s.width,
            height: s.height,
            naturalWidth: r,
            naturalHeight: i,
            responsive: a,
            play: h && o
          })
        },
        sourceMetadata: g,
        analyticsSource: "LazyGIFV"
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var l = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          l.push.apply(l, n)
        }
        return l
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(o, e))
      }), s))
    }
  })
}