/** Chunk was on 80448 **/
/** chunk id: 515970, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  p: () => l
});
var Chunk570140 = require("./570140.js"),
  Chunk752048 = require("./752048.js"),
  Chunk165630 = require("./165630.js");

function l() {
  Chunk570140.Z.dispatch({
    type: "CHECKPOINT_FETCH_START"
  });
  try {
    let {
      sidekicks: e,
      guilds: i
    } = {
      sidekicks: Chunk752048.Z.getUserAffinities().slice(0, 3).map(e => ({
        userId: e.otherUserId,
        numMessagesSent: 39240,
        numMinutesInVoice: 324
      })),
      guilds: Chunk165630.Z.affinities.slice(0, 3).map(e => ({
        guildId: e.guildId,
        numMessagesSent: 3284,
        numMinutesListening: 42324,
        numMinutesSpeaking: 424
      }))
    };
    Chunk570140.Z.dispatch({
      type: "CHECKPOINT_FETCH_SUCCESS",
      data: {
        messages: {
          numMessagesSent: 420,
          numMessagesSentPercentile: 69
        },
        voice: {
          numMinutesInVoice: 42069,
          numMinutesInVoicePercentile: 69.42
        },
        guilds: {
          guilds: exports,
          numGuildsJoined: 342
        },
        sidekicks: module
      }
    })
  } catch (e) {
    Chunk570140.Z.dispatch({
      type: "CHECKPOINT_FETCH_FAILED"
    })
  }
}