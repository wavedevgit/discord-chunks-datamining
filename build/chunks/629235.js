/** Chunk was on 50614 **/
/** chunk id: 629235, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk480916 = require("./480916.js"),
  Chunk292263 = require("./292263.js"),
  Chunk352138 = require("./352138.js"),
  Chunk81643 = require("./81643.js"),
  Chunk469775 = require("./469775.js"),
  Chunk388032 = require("./388032.jsx");
let d = function(t) {
  let {
    onClose: e,
    onMethodClick: n,
    classificationId: d
  } = t, {
    methods: E,
    loading: _
  } = (0, l.cj)([a.Z], () => ({
    methods: a.Z.methods,
    loading: a.Z.loading
  })), {
    initiateAgeVerification: f
  } = (0, s.WD)({
    onComplete: e,
    entryPoint: r.cU.EXPRESSIVE_GET_STARTED,
    shouldShowExpressiveModal: true,
    classificationId: d
  });
  return i.useEffect(() => {
    null == E && (0, o.Jh)()
  }, [E]), {
    ageVerificationMethods: null == E ? true : E.map(t => {
      let e = c.ed[t];
      if (null == e) return null;
      let {
        title: i,
        description: l
      } = e;
      return {
        id: t,
        title: u.intl.string(i),
        description: u.intl.string(l),
        onClick: async e => {
          (0, r.x3)(e, r.d_.EXPRESSIVE_PRIMARY, r.sU.METHOD_SELECT, t), null == n || n(), await f(t)
        }
      }
    }).filter(t => null != t),
    loading: _
  }
}