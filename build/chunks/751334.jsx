/** Chunk was on web.js **/
/** chunk id: 751334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk186325 = require("./186325.js"),
  Chunk226690 = require("./226690.jsx"),
  Chunk198168 = require("./198168.jsx"),
  Chunk587272 = require("./587272.js"),
  Chunk556591 = require("./556591.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
  let {
    src: t
  } = e;
  return <img className={d.image} src={t} alt={""} draggable={false} />
}

function g(e) {
  let {
    lottie: t,
    props: n
  } = e, {
    reducedMotion: o
  } = i.useContext(s.S);
  return <l.F{..._({
    className: d.lottie,
    importData: t,
    autoplay: true,
    shouldAnimate: !o.enabled
  }, n)} />
}

function E(e) {
  let {
    rive: t,
    props: n
  } = e;
  return <t{..._({
    className: d.rive,
    withReducedMotion: "short-loop",
    autoplay: true,
    fit: "contain",
    alignment: "center"
  }, n)} />
}

function b(e) {
  let {
    src: t,
    fallbackImageSrc: n,
    loop: o,
    loopAt: a = 0,
    playbackRate: l
  } = e, {
    reducedMotion: c
  } = i.useContext(s.S), u = i.useRef(null);
  return (i.useEffect(() => {
    let e = u.current;
    if (null != e) return null != l && (e.playbackRate = l), null != o && (e.loop = 0 === a && o), e.addEventListener("ended", t), () => {
      e.removeEventListener("ended", t)
    };

    function t() {
      null != e && true === o && 0 !== a && (e.currentTime = a, e.play())
    }
  }, [o, a, l]), c.enabled && null != n) ? <m type={"image"} src={n} /> : <video className={d.video} ref={u} src={t} autoPlay={!c.enabled} muted={true} playsInline={true} />
}

function y(e) {
  var {
    aspectRatio: t = "16/9"
  } = e, n = p(e, ["aspectRatio"]);

  function i() {
    if ((0, u.Or)(n)) return <m{..._({}, n)} />;
    if ((0, u.Am)(n)) return <g{..._({}, n)} />;
    if ((0, u.ko)(n)) return <E{..._({}, n)} />;
    if ((0, u.Wv)(n)) return <b{..._({}, n)} />;
    if ((0, u.Mf)(n)) return <c.gM data={n} />;
    return null
  }
  return null == n ? null : <div className={a()(d.container, d["aspect-ratio-".concat(t)])}>{i()}</div>
}