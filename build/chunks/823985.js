/** Chunk was on 54934 **/
n.d(e, {
  j: () => s,
  r: () => i
}), n(301563);
var o = n(981631);

function s(t, e) {
  return e === o.ABu.MASTODON && /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i.test(t), /^.+\.[^.@]{2,}$/.test(t)
}

function i(t) {
  return t === o.ABu.MASTODON ? "@example@mastodon.social" : t === o.ABu.BLUESKY ? "example.bsky.social" : "clyde@example.com"
}