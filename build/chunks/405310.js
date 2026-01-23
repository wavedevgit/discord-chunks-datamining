/** Chunk was on web.js **/
/** chunk id: 405310, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KR: () => _,
  Lu: () => m,
  N: () => p
}), require("./228524.js"), require("./747238.js"), require("./812715.js"), require("./866193.js");
var Chunk974690 = require("./974690.js"),
  Chunk491533 = require("./491533.js"),
  Chunk583954 = require("./583954.js"),
  Chunk816334 = require("./816334.js"),
  Chunk583846 = require("./583846.js"),
  Chunk365170 = require("./365170.js"),
  Chunk241678 = require("./241678.js"),
  Chunk985018 = require("./985018.jsx");

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
      iconPath: c.uZ,
      text: t
    }]
  },
  _ = e => {
    var t;
    let n = null == (t = (0, o.Pv)(e, r.K.AGGREGATE_COUNT)) ? true : t.count;
    return null == n ? [] : [{
      iconPath: c.pc,
      text: u.intl.formatToPlainString(u.t.HtifnG, {
        count: n
      })
    }]
  },
  h = e => {
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
  m = async e => {
    let {
      user: t,
      channel: n,
      mediaImageSrc: r,
      artist: i,
      description: o,
      colors: c,
      badges: u
    } = e, d = h({
      avatarSrc: t.getAvatarURL(n.guild_id, 128),
      mediaImageSrc: r
    }), f = i.replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "-");
    return await (0, s.r)({
      assetsToLoad: d,
      drawImage: e => {
        b(e, c), y(e), E(e), g(e, o), (0, l.$)({
          canvas: e,
          badges: u,
          startPosition: 120,
          maxWidth: 260
        })
      },
      exportConfigs: {
        format: a.z5.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(f, ".png").toLowerCase(),
        fileType: "png",
        channelId: n.id
      }
    })
  };

function g(e, t) {
  e.setColor("white"), e.setFont({
    size: 16,
    family: c.mw,
    weight: 500,
    truncate: a.Kq.Wrap
  }), e.drawText(t, {
    x: 120,
    y: 64,
    h: 32,
    w: 260
  }, true)
}

function E(e) {
  e.drawRoundedImage("AvatarImage", {
    x: 120,
    y: 12
  }, {
    w: 32,
    h: 32
  }, 50)
}

function y(e) {
  e.drawRoundedImage("MediaImage", {
    x: 12,
    y: 12
  }, {
    w: 96,
    h: 96
  }, 8, {
    fillMode: a.VZ.Contain
  }) === a.uS.Failure && e.drawPath(i.f, {
    x: 12,
    y: 12
  }, true, 2 + 2 / 3)
}

function b(e, t) {
  let n = t.map((e, t) => ({
    color: e,
    stop: t
  }));
  e.setSize({
    w: 400,
    h: 120
  }, 4), e.drawRoundedGradientRect(n, {
    x: 0,
    y: 120
  }, {
    x: 400,
    y: 0
  }, {
    x: 0,
    y: 0,
    h: 120,
    w: 400
  }, 8)
}