/** Chunk was on 23919 (0a3f5146aab554d2.js) **/
n.d(t, {
  D: () => r
});
var i = n(192379),
  l = n(430824);

function r(e) {
  return i.useMemo(() => "contextless" === e.type ? {
    channel: void 0,
    guild: void 0
  } : {
    channel: e.channel,
    guild: l.Z.getGuild(e.channel.guild_id)
  }, [e])
}