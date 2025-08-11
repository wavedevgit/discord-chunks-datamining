/** Chunk was on web.js **/
/** chunk id: 993766, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk499254 = require("./499254.js"),
  Chunk213459 = require("./213459.js"),
  Chunk592125 = require("./592125.js");

function l(e) {
  let {
    isProfileFetching: t,
    wasProfileFetching: n,
    applicationId: l,
    channelId: c,
    commands: u
  } = e;
  r.useEffect(() => {
    !t && n && null == l && (0, o.Tv)(c)
  }, [t, n, l, c]), r.useEffect(() => {
    (0, o.Hm)(c)
  }, [c]);
  let d = (0, i.e7)([a.ZP], () => {
      var e, t;
      return null != (t = null == (e = a.ZP.getApplicationState(l)) ? true : e.fetchState.fetching) && t
    }),
    f = (0, i.e7)([a.ZP, s.Z], () => {
      var e, t;
      let n = s.Z.getChannel(c),
        r = null != n ? {
          channel: n,
          type: "channel"
        } : {
          type: "contextless"
        };
      return null != (t = null == (e = a.ZP.getContextState(r)) ? true : e.fetchState.fetching) && t
    }),
    _ = r.useRef(false),
    p = r.useRef(false);
  r.useEffect(() => {
    _.current = false, p.current = false
  }, [c]), r.useEffect(() => {
    d && (_.current = true)
  }, [d]), r.useEffect(() => {
    f && (p.current = true)
  }, [f]), r.useEffect(() => {
    !d && !f && _.current && p.current && 0 === u.length && (0, o.Tv)(c)
  }, [d, f, u, c])
}