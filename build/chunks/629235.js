/** Chunk was on 91394 **/
/** chunk id: 629235, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk480916 = require("./480916.js"),
  Chunk292263 = require("./292263.js"),
  Chunk352138 = require("./352138.js"),
  Chunk81643 = require("./81643.js"),
  Chunk469775 = require("./469775.js"),
  Chunk388032 = require("./388032.jsx");
let u = function(e) {
  let {
    onClose: t,
    onMethodClick: n,
    classificationId: u
  } = e, {
    methods: m,
    loading: p
  } = (0, l.cj)([r.Z], () => ({
    methods: r.Z.methods,
    loading: r.Z.loading
  })), {
    initiateAgeVerification: h
  } = (0, o.WD)({
    onComplete: t,
    entryPoint: i.cU.EXPRESSIVE_GET_STARTED,
    shouldShowExpressiveModal: true,
    classificationId: u
  });
  return a.useEffect(() => {
    null == m && (0, s.Jh)()
  }, [m]), {
    ageVerificationMethods: null == m ? true : m.map(e => {
      let t = c.ed[e];
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
          (0, i.x3)(t, i.d_.EXPRESSIVE_PRIMARY, i.sU.METHOD_SELECT, e), null == n || n(), await h(e)
        }
      }
    }).filter(e => null != e),
    loading: p
  }
}