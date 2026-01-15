/** Chunk was on web.js **/
/** chunk id: 919394, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SO: () => y
}), require("./539854.js"), require("./953529.js"), require("./512722.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk705512 = require("./705512.js");
require("./812206.js");
var Chunk55000 = require("./55000.js");
require("./220082.js");
var Chunk693824 = require("./693824.js"),
  Chunk690725 = require("./690725.js");
require("./706454.js"), require("./594174.js");
var Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk561308 = require("./561308.js");
require("./206295.js");
var Chunk737583 = require("./737583.js");
require("./438226.js");
var Chunk169040 = require("./169040.js"),
  Chunk388032 = require("./388032.jsx");

function h(e, t, n) {
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
      h(e, t, n[t])
    })
  }
  return e
}
let g = (e, t) => m({
    AvatarImage1: e[0]
  }, null != e[1] && {
    AvatarImage2: e[1]
  }, null != e[2] && {
    AvatarImage3: e[2]
  }, null != t && {
    ApplicationImage: t
  }),
  E = (e, t) => {
    let n = [{
        iconPath: p.NM,
        text: t
      }],
      r = u.default.extractTimestamp(e.extra.application_id);
    if (7 >= i()().diff(i()(r), "days") && n.push({
        iconPath: p.As,
        text: _.intl.string(_.t.vYuyWf)
      }), (0, d.Ol)(e) && n.push({
        iconPath: p.fO,
        text: _.intl.string(_.t.keY6mW)
      }), (0, d.q_)(e)) {
      let t = (0, d.vU)(e);
      n.push({
        iconPath: p.t1,
        text: _.intl.formatToPlainString(_.t["Klie/P"], {
          days: t
        })
      })
    }(0, d.ig)(e) === a.o.GLOBAL && n.push({
      iconPath: p.Op,
      text: _.intl.string(_.t.kAlUsy)
    });
    let o = (0, d.dw)(e);
    if (null != o && n.push({
        iconPath: p.Z,
        text: (0, d.GE)(o)
      }), (0, d.V5)(e)) {
      let {
        text: t
      } = (0, d.zo)(e);
      null != t && n.push({
        iconPath: p.Md,
        text: t
      })
    }
    if ((0, d.Jd)(e)) {
      let t = (0, d.yA)(e);
      if (null != t) {
        let e = _.intl.formatToPlainString(_.t.C0AxoR, {
          hours: Math.round(t / c.Z.Seconds.HOUR)
        });
        return [{
          iconPath: p.eF,
          text: "".concat(_.intl.string(_.t["/50eHi"]), " — ").concat(e)
        }]
      }
    }
    return n
  },
  b = (e, t) => {
    let {
      timestamp: n,
      colors: r,
      description: i,
      entry: a,
      numAvatars: l
    } = t, c = r.map((e, t) => ({
      color: e,
      stop: t
    }));
    e.setSize({
      w: p.nx,
      h: p.bg
    }, 4), e.drawRoundedGradientRect(c, {
      x: 0,
      y: p.bg
    }, {
      x: p.nx,
      y: 0
    }, {
      x: 0,
      y: 0,
      h: p.bg,
      w: p.nx
    }, 8), e.setColor("white"), e.drawRoundedImage("ApplicationImage", {
      x: p.sB,
      y: p.sB
    }, {
      w: p.Pu,
      h: p.Pu
    }, 8) === s.vP.Failure && e.drawPath(o.C, {
      x: p.sB,
      y: p.sB
    }, true, 2 + 2 / 3);
    let u = ["AvatarImage1", "AvatarImage2", "AvatarImage3"];
    (0, f.l)({
      canvas: e,
      avatarSrcs: u.slice(0, l),
      position: {
        x: p.Iq,
        y: p.sB
      },
      avatarImageSize: p.$S
    }), e.setColor("white"), e.setFont({
      size: 16,
      family: p.I8,
      weight: p.Ue,
      truncate: s.GX.Wrap
    }), e.drawText(i, {
      x: p.Iq,
      y: 64,
      h: 32,
      w: p.kC
    }, true);
    let d = E(a, n);
    (0, f.J)({
      canvas: e,
      badges: d,
      startPosition: p.Iq,
      maxWidth: p.kC
    })
  },
  y = async e => {
    let {
      applicationImageSrc: t,
      entry: n,
      avatarSrcs: r,
      description: i,
      timestamp: a,
      colors: o,
      channelId: c
    } = e, u = n.extra.game_name, d = g(r, t);
    return await (0, l.f)({
      assetsToLoad: d,
      drawImage: e => b(e, {
        timestamp: a,
        colors: o,
        description: i,
        entry: n,
        numAvatars: r.length
      }),
      exportConfigs: {
        format: s.kH.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(u, ".png").toLowerCase(),
        fileType: "png",
        channelId: c
      }
    })
  }