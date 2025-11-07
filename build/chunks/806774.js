/** Chunk was on web.js **/
/** chunk id: 806774, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ku: () => l,
  MK: () => u,
  ml: () => c
});
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  let {
    guildId: t,
    autoOpenFileInput: n,
    analyticsLocation: i
  } = e;
  c({
    autoOpen: n
  }), o.Z.open(t, s.pNK.EMOJI, i);
  let l = (0, a.Su)();
  null != l && l.windowDispatch.dispatch(s.CkL.POPOUT_CLOSE), (0, r.pTH)()
}

function c(e) {
  let {
    autoOpen: t
  } = e;
  i.Z.dispatch({
    type: "EMOJI_FILE_INPUT_AUTO_OPEN",
    autoOpen: t
  })
}

function u(e) {
  let {
    emojiId: t,
    userImage: n
  } = e;
  i.Z.dispatch({
    type: "EMOJI_CACHE_RAW_EMOJI_ASSET",
    emojiId: t,
    userImage: n
  })
}