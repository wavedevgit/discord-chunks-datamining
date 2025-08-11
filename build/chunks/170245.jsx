/** Chunk was on 1272 **/
/** chunk id: 170245, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk700582 = require("./700582.js"),
  Chunk699516 = require("./699516.js");
require("./51144.js");
var Chunk535317 = require("./535317.js");
let d = function(e) {
  let {
    user: t,
    hovered: n,
    subText: i,
    showAccountIdentifier: d,
    status: p,
    isMobile: f,
    className: h
  } = e, g = (0, a.e7)([c.Z], () => c.Z.getNickname(t.id));
  return <div className={l()(u.userInfo, h, {
      [u.hovered]: n
    })}>{<s.Z user={t} className={u.avatar} animate={n} status={p} isMobile={f} />}{<div className={u.text}>{<o.Z user={t} nick={g} botClass={u.botTag} className={l()(u.discordTag, {
          [u.alignPomelo]: t.hasUniqueUsername()
        })} usernameClass={u.username} discriminatorClass={u.discriminator} showAccountIdentifier={d} />}{<div className={u.subtext}>{i}</div>}</div>}</div>
}