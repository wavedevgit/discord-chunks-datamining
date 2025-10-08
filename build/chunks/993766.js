/** Chunk was on 42300 **/
/** chunk id: 993766, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk499254 = require("./499254.js"),
  Chunk213459 = require("./213459.js"),
  Chunk592125 = require("./592125.js");

function s(e) {
  let {
    isProfileFetching: t,
    wasProfileFetching: n,
    applicationId: s,
    channelId: c,
    commands: u
  } = e;
  i.useEffect(() => {
    !t && n && null == s && (0, l.Tv)(c)
  }, [t, n, s, c]), i.useEffect(() => {
    (0, l.Hm)(c)
  }, [c]);
  let d = (0, r.e7)([a.ZP], () => {
      var e, t;
      return null != (t = null == (e = a.ZP.getApplicationState(s)) ? true : e.fetchState.fetching) && t
    }),
    p = (0, r.e7)([a.ZP, o.Z], () => {
      var e, t;
      let n = o.Z.getChannel(c);
      return null != (t = null == (e = a.ZP.getContextState(null != n ? {
        channel: n,
        type: "channel"
      } : {
        type: "contextless"
      })) ? true : e.fetchState.fetching) && t
    }),
    h = i.useRef(false),
    f = i.useRef(false);
  i.useEffect(() => {
    h.current = false, f.current = false
  }, [c]), i.useEffect(() => {
    d && (h.current = true)
  }, [d]), i.useEffect(() => {
    p && (f.current = true)
  }, [p]), i.useEffect(() => {
    !d && !p && h.current && f.current && 0 === u.length && (0, l.Tv)(c)
  }, [d, p, u, c])
}