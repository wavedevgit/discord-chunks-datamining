/** Chunk was on web.js **/
/** chunk id: 22363, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk646574 = require("./646574.js"),
  Chunk543241 = require("./543241.js"),
  Chunk912648 = require("./912648.js"),
  Chunk747613 = require("./747613.js"),
  Chunk533432 = require("./533432.js"),
  Chunk149203 = require("./149203.js"),
  Chunk185923 = require("./185923.js"),
  Chunk539490 = require("./539490.js");
let p = e => {
  let {
    channel: t,
    accessory: n,
    pickerIntention: i,
    headerClassName: p,
    emojiListRef: h,
    onKeyDown: m,
    onFocus: g,
    autoFocus: E,
    searchBarRef: b,
    diversitySurrogate: y,
    isBurstReaction: O,
    onBurstReactionToggle: v,
    renderHeader: I,
    showAddEmojiButton: T = false
  } = e, S = <r.Fragment>{<u.Z emojiListRef={h} gridNavigatorId={d.Vr} onKeyDown={m} className={_.searchBar} ref={b} isFullRow={false} onFocus={g} autoFocus={E} defaultSearchPlaceholder={(0, s.nV)(i, O)} />}{T && <l.Z channel={t} />}{i === f.Hz.REACTION ? <a.Z checked={O} onClick={v} /> : null}{null != n ? n : <c.Z searchBarRef={b} className={_.diversitySelector} selectedSurrogate={y} />}</r.Fragment>;
  return <div className={o()(_.header, p)}>{null != I ? I(S) : S}</div>
}