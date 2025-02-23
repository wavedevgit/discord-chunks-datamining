/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = n(192379),
  i = n(570140);

function o(e) {
  let {
    userActivity: t
  } = e, n = null == t ? void 0 : t.applicationId;
  r.useEffect(() => {
    null != t && null != n && i.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_OPEN",
      location: t.location,
      applicationId: n
    })
  }, [n, t])
}