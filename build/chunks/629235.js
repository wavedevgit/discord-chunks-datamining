/** Chunk was on 52461 **/
/** chunk id: 629235, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk480916 = require("./480916.js"),
  Chunk292263 = require("./292263.js"),
  Chunk352138 = require("./352138.js"),
  Chunk81643 = require("./81643.js"),
  Chunk469775 = require("./469775.js"),
  Chunk388032 = require("./388032.jsx");
let u = function(e, t) {
  let {
    methods: n,
    loading: u
  } = (0, r.cj)([l.Z], () => ({
    methods: l.Z.methods,
    loading: l.Z.loading
  })), {
    initiateAgeVerification: m
  } = (0, o.WD)(e, false, null, true);
  return a.useEffect(() => {
    null == n && (0, s.J)()
  }, [n]), {
    ageVerificationMethods: null == n ? true : n.map(e => {
      let n = c.ed[e];
      if (null == n) return null;
      let {
        title: a,
        description: r
      } = n;
      return {
        id: e,
        title: d.intl.string(a),
        description: d.intl.string(r),
        onClick: async n => {
          (0, i.x3)(n, i.d_.EXPRESSIVE_PRIMARY, i.sU.METHOD_SELECT, e), null == t || t(), await m(i.cU.EXPRESSIVE_GET_STARTED, e)
        }
      }
    }).filter(e => null != e),
    loading: u
  }
}