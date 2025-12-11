/** Chunk was on web.js **/
/** chunk id: 372769, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk297700 = require("./297700.jsx"),
  Chunk665786 = require("./665786.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk122619 = require("./122619.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  switch (e) {
    case 2:
      return f.intl.string(f.t.iCehw9);
    case 0:
      return f.intl.string(f.t.hfYfEE);
    case 3:
      return f.intl.string(f.t["TX+iFC"]);
    case 4:
      return f.intl.string(f.t.NSYGX0);
    case 5:
      return f.intl.string(f.t["jjUTL+"]);
    case 1:
      return f.intl.string(f.t.lMrv96);
    case 6:
      return null;
    default:
      (0, u.vE)(e)
  }
}
class b extends Chunk473749.PureComponent {
  renderBadge(e, t, n) {
    let {
      className: i,
      badgeStrokeColor: a,
      tooltipColor: c = s.aML.Colors.BRAND,
      tooltipPosition: u,
      tooltipDelay: d,
      size: f = 16,
      badgeColor: _,
      iconClassName: h,
      flowerStarClassName: b
    } = this.props, y = E(e);
    return (0, r.jsx)(s.aML, {
      color: c,
      position: u,
      delay: d,
      text: y,
      children: s => {
        if (5 !== e && 4 !== e) return (0, r.jsx)(l.Z, g(m({}, s), {
          className: o()(n, i),
          flowerStarClassName: b,
          color: _,
          stroke: a,
          size: f,
          children: (0, r.jsx)(t, {
            size: "xxs",
            className: o()(p.icon, h),
            color: "currentColor"
          })
        }));
        {
          let e = {
            width: f,
            height: f
          };
          return (0, r.jsx)("div", g(m({}, s), {
            className: o()(n, i),
            style: e,
            children: (0, r.jsx)(t, {
              className: o()(p.icon, h),
              color: "currentColor"
            })
          }))
        }
      }
    })
  }
  render() {
    let {
      guild: e
    } = this.props, t = new Set(module.features);
    return exports.has(Chunk981631.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) ? this.renderBadge(1, Chunk481060.Ymb, Chunk122619.staff) : exports.has(Chunk981631.GuildFeatures.VERIFIED) && exports.has(Chunk981631.GuildFeatures.HUB) ? this.renderBadge(4, Chunk481060.aVH, Chunk122619.verifiedHub) : exports.has(Chunk981631.GuildFeatures.HUB) ? this.renderBadge(5, Chunk481060.aVH, Chunk122619.hub) : exports.has(Chunk981631.GuildFeatures.VERIFIED) && exports.has(Chunk981631.GuildFeatures.PARTNERED) ? this.renderBadge(3, Chunk481060.kmB, Chunk122619.verified) : exports.has(Chunk981631.GuildFeatures.VERIFIED) ? this.renderBadge(2, Chunk481060.kmB, Chunk122619.verified) : exports.has(Chunk981631.GuildFeatures.PARTNERED) ? this.renderBadge(0, (0, Chunk481060.GSL)(Chunk665786.Z), Chunk122619.partnered) : null
  }
}
let y = b