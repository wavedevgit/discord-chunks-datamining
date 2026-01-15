/** Chunk was on web.js **/
/** chunk id: 685270, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => f
}), require("./539854.js"), require("./953529.js");
var Chunk55000 = require("./55000.js"),
  Chunk693824 = require("./693824.js"),
  Chunk690725 = require("./690725.js"),
  Chunk737583 = require("./737583.js"),
  Chunk169040 = require("./169040.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = (e, t, n) => c({
    AvatarImage: e
  }, null != t && {
    MediaImage: t
  }, null != n && {
    ApplicationImage: n
  }),
  d = (e, t) => {
    let n = [{
      iconPath: s.i6,
      text: e
    }];
    return null != t && n.push({
      iconPath: s.fj,
      text: t
    }), n
  },
  f = async e => {
    let {
      mediaImageSrc: t,
      entry: n,
      avatarSrc: l,
      description: c,
      timestamp: f,
      episodeDescription: p,
      colors: _,
      channelId: h
    } = e, m = n.extra.media_title, g = u(l, t), E = e => {
      let t = _.map((e, t) => ({
        color: e,
        stop: t
      }));
      e.setSize({
        w: s.nx,
        h: s.bg
      }, 4), e.drawRoundedGradientRect(t, {
        x: 0,
        y: s.bg
      }, {
        x: s.nx,
        y: 0
      }, {
        x: 0,
        y: 0,
        h: s.bg,
        w: s.nx
      }, 8), e.setColor("white");
      let n = e.drawRoundedImage("MediaImage", {
        x: s.sB,
        y: s.sB
      }, {
        w: s.Pu,
        h: s.Pu
      }, 8, {
        fillMode: i.JU.Contain
      });
      n === i.vP.Failure && (n = e.drawRoundedImage("ApplicationImage", {
        x: s.sB,
        y: s.sB
      }, {
        w: s.Pu,
        h: s.Pu
      }, 8)), n === i.vP.Failure && e.drawPath(r.C, {
        x: s.sB,
        y: s.sB
      }, true, 2 + 2 / 3), e.drawRoundedImage("AvatarImage", {
        x: s.Iq,
        y: s.sB
      }, {
        w: s.$S,
        h: s.$S
      }, 50), e.setFont({
        size: 16,
        family: s.I8,
        weight: s.Ue,
        truncate: i.GX.Wrap
      }), e.drawText(c, {
        x: s.Iq,
        y: 64,
        h: 32,
        w: s.kC
      }, true);
      let a = d(f, p);
      (0, o.J)({
        canvas: e,
        badges: a,
        startPosition: s.Iq,
        maxWidth: s.kC
      })
    };
    return await (0, a.f)({
      assetsToLoad: g,
      drawImage: E,
      exportConfigs: {
        format: i.kH.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(m, ".png").toLowerCase(),
        fileType: "png",
        channelId: h
      }
    })
  }