/** Chunk was on web.js **/
/** chunk id: 570908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk462991 = require("./462991.js");
let l = Chunk73800.forwardRef((e, t) => {
  let {
    muted: n = false,
    highlighted: i = false,
    avatar: o,
    decorators: l,
    name: c,
    subText: u,
    avatarClassName: d,
    innerClassName: f,
    withDisplayNameStyles: _ = false
  } = e;
  return <div ref={t} className={a()(s.layout, f, {
      [s.muted]: n,
      [s.highlighted]: i
    })}>{<div className={a()(s.avatar, d)}>{o}</div>}{<div className={a()(s.content, {
        [s.withDisplayNameStyles]: _
      })}>{<div className={s.nameAndDecorators}>{<div className={s.name}>{c}</div>}{l}</div>}{null != u ? <div className={s.subText}>{u}</div> : null}</div>}</div>
});
l.displayName = "AvatarWithText";
let c = l