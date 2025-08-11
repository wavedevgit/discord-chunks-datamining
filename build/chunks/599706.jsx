/** Chunk was on 1272 **/
/** chunk id: 599706, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk670188 = require("./670188.js"),
  Chunk463618 = require("./463618.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk88729 = require("./88729.js");
let f = e => {
    let {
      member: t,
      empty: n,
      guildId: l
    } = e, a = i.useRef(null);
    return n ? <div className={p.partyMemberEmpty} /> : null == t ? <div className={p.partyMemberUnknown}><u.Z className={p.partyMemberUnknownIcon} /></div> : <div className={p.partyMemberKnown}><c.Z targetElementRef={a} userId={t.id} guildId={l} newAnalyticsLocations={[s.Z.AVATAR]} position={"left"} clickTrap={true}>{e => {
          var n, i;
          return (0, r.jsx)(o.qEK, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, e), i = i = {
            ref: a,
            src: t.getAvatarURL(l, 24),
            "aria-label": t.username,
            size: o.EFr.SIZE_24,
            className: p.partyMember
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
          }), n))
        }}</c.Z></div>
  },
  h = e => {
    let {
      partySize: t,
      members: n,
      minAvatarsShown: i = 1,
      maxAvatarsShown: l = 2,
      guildId: o
    } = e, {
      unknownSize: s,
      totalSize: c,
      knownSize: u
    } = t;
    if (c < i) return null;
    let h = a()(n).filter(d.lm).take(l).map(e => <f member={e} guildId={o} />).value();
    for (let e = 0; e < s && h.length < l; e++) h.push(<f guildId={o} />);
    let g = c - u - s;
    for (let e = 0; e < g && h.length < l; e++) h.push(<f empty={true} guildId={o} />);
    let m = Math.max(Math.min(c - h.length, 99), 0);
    if (1 === m) {
      let e = n[l];
      h.push(<f member={e} guildId={o} />)
    }
    return <div className={p.wrapper}><div className={p.partyMembers}>{h}{m > 1 ? <div className={p.partyMemberOverflow}>{"+"}{m}</div> : null}</div></div>
  }