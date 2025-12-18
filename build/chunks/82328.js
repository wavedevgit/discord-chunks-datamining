/** Chunk was on 75909 **/
/** chunk id: 82328, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => r
});
class r {
  static mapDiscordToMuxMetadata(e, t) {
    var n, r, o, l;
    return {
      env_key: "1qd16mdmdjasipqg3irobln4u",
      session_id: t,
      player_name: "discord",
      player_version: "1.0.0",
      video_id: e.contentMetadata.contentId,
      video_title: e.contentMetadata.title,
      video_duration: null != (o = e.contentMetadata.durationMs) ? o : 1e3 * e.contentMetadata.durationSec,
      video_content_type: e.contentMetadata.contentType,
      video_series: e.contentMetadata.questId,
      video_producer: e.contentMetadata.gameId,
      video_brand: null != (l = e.contentMetadata.gameName) ? l : "Discord",
      video_cdn: "Cloudflare",
      video_stream_type: e.contentMetadata.videoStreamType,
      view_client_application_name: this.getBuildChannel(),
      view_client_application_version: this.getAppVersion(),
      viewer_user_id: null == (n = e.userContext) ? true : n.userId,
      viewer_plan: null == (r = e.userContext) ? true : r.userTier
    }
  }
  static getAppVersion() {
    try {
      var e;
      return (e = "481426", true !== module) ? module : "unknown"
    } catch (e) {
      return "unknown"
    }
  }
  static getBuildChannel() {
    try {
      var e, t;
      return null != (t = null == (e = window.GLOBAL_ENV) ? true : module.RELEASE_CHANNEL) ? exports : "stable"
    } catch (e) {
      return "stable"
    }
  }
}