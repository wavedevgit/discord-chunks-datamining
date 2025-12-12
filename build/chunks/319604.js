/** Chunk was on web.js **/
/** chunk id: 319604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CR: () => h,
  UU: () => _,
  jE: () => p
}), require("./953529.js"), require("./804061.js"), require("./704826.js"), require("./35282.js");
var Chunk884439 = require("./884439.js"),
  Chunk55000 = require("./55000.js"),
  Chunk693824 = require("./693824.js"),
  Chunk690725 = require("./690725.js"),
  Chunk561308 = require("./561308.js"),
  Chunk737583 = require("./737583.js"),
  Chunk169040 = require("./169040.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
let p = e => {
    let {
      timestamp: t
    } = e;
    return [{
      iconPath: c.mb,
      text: t
    }]
  },
  _ = e => {
    var t;
    let n = null == (t = (0, s.PJ)(e, r.N.AGGREGATE_COUNT)) ? true : t.count;
    return null == n ? [] : [{
      iconPath: c.eF,
      text: u.intl.formatToPlainString(u.t.HtifnG, {
        count: n
      })
    }]
  },
  m = e => {
    let {
      avatarSrc: t,
      mediaImageSrc: n
    } = e;
    return f({
      AvatarImage: t
    }, null != n && {
      MediaImage: n
    })
  },
  h = async e => {
    let {
      user: t,
      channel: n,
      mediaImageSrc: r,
      artist: i,
      description: s,
      colors: u,
      badges: d
    } = e, f = m({
      avatarSrc: t.getAvatarURL(n.guild_id, 128),
      mediaImageSrc: r
    }), p = i.replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "-");
    return await (0, a.f)({
      assetsToLoad: f,
      drawImage: e => {
        y(e, u), b(e), E(e), g(e, s), (0, l.J)({
          canvas: e,
          badges: d,
          startPosition: c.Iq,
          maxWidth: c.kC
        })
      },
      exportConfigs: {
        format: o.kH.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(p, ".png").toLowerCase(),
        fileType: "png",
        channelId: n.id
      }
    })
  };

function g(e, t) {
  e.setColor("white"), e.setFont({
    size: 16,
    family: c.I8,
    weight: c.Ue,
    truncate: o.GX.Wrap
  }), e.drawText(t, {
    x: c.Iq,
    y: 64,
    h: 32,
    w: c.kC
  }, true)
}

function E(e) {
  e.drawRoundedImage("AvatarImage", {
    x: c.Iq,
    y: c.sB
  }, {
    w: c.$S,
    h: c.$S
  }, 50)
}

function b(e) {
  e.drawRoundedImage("MediaImage", {
    x: c.sB,
    y: c.sB
  }, {
    w: c.Pu,
    h: c.Pu
  }, 8, {
    fillMode: o.JU.Contain
  }) === o.vP.Failure && e.drawPath(i.C, {
    x: c.sB,
    y: c.sB
  }, true, 2 + 2 / 3)
}

function y(e, t) {
  let n = t.map((e, t) => ({
    color: e,
    stop: t
  }));
  e.setSize({
    w: c.nx,
    h: c.bg
  }, 4), e.drawRoundedGradientRect(n, {
    x: 0,
    y: c.bg
  }, {
    x: c.nx,
    y: 0
  }, {
    x: 0,
    y: 0,
    h: c.bg,
    w: c.nx
  }, 8)
}