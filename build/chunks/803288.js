/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  T: () => x,
  Z: () => j
}), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(497321),
  o = n(852860),
  A = n(100527),
  c = n(906732),
  d = n(246946),
  u = n(63063),
  g = n(999382),
  f = n(621319),
  m = n(44550),
  p = n(586382),
  h = n(859481),
  C = n(981631),
  b = n(388032),
  v = n(696964);
let x = s.ZP.connectStores([g.Z, m.Z], () => {
  let e = m.Z.vanityURLCode,
    t = g.Z.getGuildId();
  return {
    vanityURLCode: e,
    guildId: t,
    onReset() {
      (0, f.H7)()
    },
    onSave() {
      null != t && (0, f.en)(t, e)
    }
  }
})(o.Z);
class N extends i.PureComponent {
  render() {
    let {
      hide: e,
      guild: t,
      vanityURLCode: n,
      vanityURLUses: i,
      originalVanityURLCode: s,
      errorDetails: o
    } = this.props, A = u.Z.getArticleURL(C.BhN.GUILD_VANITY_URL);
    return null == t ? null : e ? (0, r.jsx)(l.Z, {}) : (0, r.jsxs)(a.hjN, {
      children: [(0, r.jsxs)(a.vwX, {
        tag: a.RB0.H1,
        className: v.flexFormTitle,
        children: [(0, r.jsx)("div", {
          children: b.NW.string(b.t["5XZKy8"])
        }), (0, r.jsx)(p.xl, {
          guild: t
        })]
      }), (0, r.jsx)(a.R94, {
        type: a.geA.DESCRIPTION,
        className: v.description,
        children: b.NW.format(b.t.koklFB, {
          helpCenterArticle: A
        })
      }), (0, r.jsx)(h.z, {
        guild: t,
        vanityURLCode: n,
        vanityURLUses: i,
        originalVanityURLCode: s,
        errorDetails: o
      })]
    })
  }
}

function j() {
  var e, t;
  let n = (0, s.e7)([g.Z], () => g.Z.getGuild()),
    i = (0, s.cj)([m.Z], () => ({
      vanityURLCode: m.Z.vanityURLCode,
      vanityURLUses: m.Z.vanityURLUses,
      originalVanityURLCode: m.Z.originalVanityURLCode,
      errorDetails: m.Z.errorDetails
    })),
    a = (0, s.e7)([d.Z], () => d.Z.hideInstantInvites),
    {
      analyticsLocations: l
    } = (0, c.ZP)(A.Z.VANITY_URL);
  return (0, r.jsx)(c.Gt, {
    value: l,
    children: (0, r.jsx)(N, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        })
      }
      return e
    }({
      guild: n
    }, i), t = t = {
      hide: a,
      analyticsLocations: l
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e))
  })
}