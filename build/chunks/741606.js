/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => s
});
var r = n(192379),
  i = n(442837),
  o = n(693546),
  a = n(937111);

function s(e) {
  let t = (0, i.e7)([a.Z], () => null == e ? null : a.Z.getRequest(e)),
    n = (0, i.e7)([a.Z], () => a.Z.hasFetchedRequestToJoinGuilds);
  return r.useEffect(() => {
    n || o.Z.fetchRequestToJoinGuilds()
  }, [n]), t
}