/** Chunk was on web.js **/
/** chunk id: 39127, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk500923 = require("./500923.js"),
  s = require.n(Chunk500923),
  Chunk963838 = require("./963838.js"),
  Chunk353368 = require("./353368.js"),
  Chunk356761 = require("./356761.js");
let d = async e => {
  var t;
  let {
    animationType: n,
    animationId: r,
    url: i,
    shouldResize: o
  } = e, s = null != (t = l.Jw[n]) ? t : l.Jw[c.q.BASIC], u = JSON.parse(JSON.stringify(null != r && r < s.length ? s[r] : (0, a.sample)(s)));
  return u.assets[0].p = o ? await (0, l.lv)(i) : i, u
};

function f(e) {
  let {
    containerDimensions: t,
    effect: n,
    onComplete: a
  } = e, o = i.useRef(null);
  return i.useEffect(() => {
    let e;
    return !async function() {
      if (null != o.current) {
        let t = await d(n);
        e = s().loadAnimation({
          container: o.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: t,
          rendererSettings: {
            preserveAspectRatio: "xMidYMax slice"
          }
        }), n.animationType === c.q.PREMIUM && e.setSpeed(.8), e.addEventListener("complete", () => null == a ? true : a(n.id))
      }
    }(), () => {
      null == e || e.destroy()
    }
  }, [a, n]), (0, r.jsx)("div", {
    className: u.effect,
    style: {
      height: t.height,
      width: t.width
    },
    ref: o
  })
}