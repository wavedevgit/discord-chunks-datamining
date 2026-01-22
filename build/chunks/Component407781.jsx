/** Chunk was on web.js **/
/** chunk id: 407781, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./457529.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk883885 = require("./883885.js"),
  o = require.n(Chunk883885),
  Chunk667050 = require("./667050.js"),
  Chunk194486 = require("./194486.js"),
  Chunk196305 = require("./196305.js");
let d = async e => {
  var t;
  let {
    animationType: n,
    animationId: r,
    url: i,
    shouldResize: s
  } = e, o = null != (t = l.Bf[n]) ? t : l.Bf[c.B.BASIC], u = JSON.parse(JSON.stringify(null != r && r < o.length ? o[r] : (0, a.sample)(o)));
  return u.assets[0].p = s ? await (0, l.tm)(i) : i, u
};

function f(e) {
  let {
    containerDimensions: t,
    effect: n,
    onComplete: a
  } = e, s = i.useRef(null);
  return i.useEffect(() => {
    let e;
    return !async function() {
      if (null != s.current) {
        let t = await d(n);
        e = o().loadAnimation({
          container: s.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: t,
          rendererSettings: {
            preserveAspectRatio: "xMidYMax slice"
          }
        }), n.animationType === c.B.PREMIUM && e.setSpeed(.8), e.addEventListener("complete", () => null == a ? true : a(n.id))
      }
    }(), () => {
      null == e || e.destroy()
    }
  }, [a, n]), (0, r.jsx)("div", {
    className: u.Q,
    style: {
      height: t.height,
      width: t.width
    },
    ref: s
  })
}