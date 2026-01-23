/** Chunk was on 22477 **/
/** chunk id: 807734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./228524.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk847599 = require("./847599.js"),
  Chunk787301 = require("./787301.js"),
  Chunk295972 = require("./295972.js"),
  Chunk36149 = require("./36149.js"),
  Chunk40449 = require("./40449.js"),
  Chunk985018 = require("./985018.jsx");
let u = function(e) {
  let {
    onClose: t,
    onMethodClick: n,
    classificationId: u
  } = e, {
    methods: m,
    loading: p
  } = (0, l.cf)([i.A], () => ({
    methods: i.A.methods,
    loading: i.A.loading
  })), {
    initiateAgeVerification: h
  } = (0, o.nn)({
    onComplete: t,
    entryPoint: r.q1.EXPRESSIVE_GET_STARTED,
    shouldShowExpressiveModal: true,
    classificationId: u
  });
  return a.useEffect(() => {
    null == m && (0, s.DJ)()
  }, [m]), {
    ageVerificationMethods: null == m ? true : m.map(e => {
      let t = c.uv[e];
      if (null == t) return null;
      let {
        title: a,
        description: l
      } = t;
      return {
        id: e,
        title: d.intl.string(a),
        description: d.intl.string(l),
        onClick: async t => {
          (0, r.St)(t, r.WU.EXPRESSIVE_PRIMARY, r._7.METHOD_SELECT, e), null == n || n(), await h(e)
        }
      }
    }).filter(e => null != e),
    loading: p
  }
}