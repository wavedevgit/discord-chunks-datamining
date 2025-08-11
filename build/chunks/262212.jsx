/** Chunk was on 59256 **/
/** chunk id: 262212, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => y,
  ms: () => j
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk10765 = require("./10765.js"),
  Chunk639777 = require("./639777.js"),
  Chunk973772 = require("./973772.js"),
  Chunk880419 = require("./880419.js"),
  Chunk827397 = require("./827397.js"),
  Chunk279604 = require("./279604.js"),
  Chunk535396 = require("./535396.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.js"),
  Chunk503945 = require("./503945.js");

function h() {
  return (h = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function _(e) {
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
}

function j(e) {
  var t, n, {
      guildId: o,
      powerup: l,
      onClick: s
    } = e,
    i = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["guildId", "powerup", "onClick"]);
  let c = (0, d.Z)(o, l),
    {
      onShowMore: u
    } = (0, p.ZP)(o, l),
    h = f.uc.has(l.skuId);
  return <a.zx{...t = _({
    className: g.primaryButton,
    innerClassName: g.buttonInner,
    wrapperClassName: g.buttonWrapper,
    grow: true,
    onClick: e => {
      null == s || s(e), h ? null == c || c(e) : null == u || u()
    }
  }, i), n = n = {
    children: h ? b.intl.string(m.default["g5Ds6+"]) : b.intl.string(b.t["0Q61kJ"])
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t} />
}

function x(e) {
  let {
    className: t,
    guildId: n,
    powerup: o
  } = e, {
    onShowMore: s
  } = (0, p.ZP)(n, o);
  return <div className={l()(g.container, t)}><a.zx className={g.primaryButton} innerClassName={g.buttonInner} wrapperClassName={g.buttonWrapper} grow={true} onClick={s}>{o.type === f.Us.LEVEL ? b.intl.string(b.t["0Q61kJ"]) : b.intl.string(b.t.Xa11Eh)}</a.zx></div>
}

function v(e) {
  let {
    className: t,
    guildId: n,
    powerup: o,
    onError: a
  } = e, i = (0, c.ZP)(n, o).type !== f.A3.INACTIVE, d = (0, s.Z)(n, o, "GuildPowerupCardFooterAdmin"), p = i || !d, m = !i;
  return <div className={l()(g.container, t)}>{p && <u.Z guildId={n} powerup={o} onError={a} grow={m} compact={!m} />}{i && <j guildId={n} powerup={o} />}</div>
}

function y(e) {
  var t = h({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  return (0, i.Z)(t.guildId) ? <v{..._({}, t)} /> : <x{..._({}, t)} />
}