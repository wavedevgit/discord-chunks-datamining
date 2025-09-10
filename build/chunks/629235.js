/** Chunk was on 50614 **/
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
  } = (0, i.cj)([o.Z], () => ({
    methods: o.Z.methods,
    loading: o.Z.loading
  })), {
    initiateAgeVerification: x
  } = (0, c.WD)(e);
  return r.useEffect(() => {
    null == n && (0, a.J)()
  }, [n]), {
    ageVerificationMethods: null == n ? true : n.map(e => {
      let n = s.ed[e];
      if (null == n) return null;
      let {
        title: r,
        description: i
      } = n;
      return {
        id: e,
        title: d.intl.string(r),
        description: d.intl.string(i),
        onClick: async n => {
          (0, l.x3)(n, l.d_.EXPRESSIVE_PRIMARY, l.sU.METHOD_SELECT, e), null == t || t(), await x(l.cU.EXPRESSIVE_GET_STARTED, e)
        }
      }
    }).filter(e => null != e),
    loading: u
  }
}