/** Chunk was on 59256 **/
/** chunk id: 845602, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => O,
  Z: () => y
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk957537 = require("./957537.js"),
  Chunk839008 = require("./839008.js"),
  Chunk797967 = require("./797967.jsx"),
  Chunk755641 = require("./755641.jsx"),
  Chunk742409 = require("./742409.jsx"),
  Chunk369509 = require("./369509.jsx"),
  Chunk101017 = require("./101017.js"),
  Chunk606318 = require("./606318.js"),
  Chunk141006 = require("./141006.js"),
  Chunk981631 = require("./981631.js"),
  Chunk131085 = require("./131085.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk606217 = require("./606217.js"),
  Chunk183375 = require("./183375.js");

function y() {
  var e;
  let [t, n] = Chunk73800.useState(() => {
    let e = Math.floor(Math.random() * Chunk141006.tl.length);
    return {
      primary_color: Chunk141006.tl[module].start,
      secondary_color: Chunk141006.tl[module].end,
      tertiary_color: null
    }
  }), {
    gradientStyle: l,
    gradientClassname: c
  } = (0, Chunk481060.Icv)({
    colorStrings: (0, Chunk606318.DX)(exports),
    roleStyle: "username",
    includeConvenienceGlow: true,
    animateGradient: true
  });
  return <div className={Chunk606217.container}>{<div className={Chunk606217.messageContainer}><Chunk742409.l avatar={Chunk957537.Z} username={"Cherry"} usernameStyle={Chunk120356} usernameClassName={a()(Chunk839008, Chunk183375.animateGradient)} message={Chunk388032.intl.string(Chunk388032.t["6OSasb"])} /></div>}{<Chunk797967.default defaultColor={Chunk981631.p6O} colors={Chunk141006.tl} value={exports.primary_color} secondaryValue={null != (e = exports.secondary_color) ? module : true} onChange={e => {
        var r, o;
        return n((r = function(e) {
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
        }({}, t), o = o = {
          primary_color: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
        }), r))
      }} onChangeGradientColors={e => n({
        primary_color: e[0],
        secondary_color: e[1],
        tertiary_color: null
      })} isGradient={true} />}</div>
}

function O(e) {
  let {
    guildId: t
  } = e, [n, l] = o.useState(_.x_.HEART), a = (0, m.Z)(), s = o.useMemo(() => ({
    unlockedBadges: a.unlockedBadges.slice(0, 10),
    lockedBadges: []
  }), [a]);
  return <div className={x.container}>{<div className={x.messageContainer}><p.l avatar={c.Z} username={"Roka"} usernameStyle={{
          color: "var(--brand-400)"
        }} message={j.intl.string(j.t["6OSasb"])} decorations={(0, r.jsx)(f.S, {
          guildId: t,
          tag: "GGEZ",
          badge: n
        })} /></div>}{<d.g selectedBadge={n} onBadgeClicked={l} badgeCollection={s} />}</div>
}