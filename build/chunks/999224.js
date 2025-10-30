/** Chunk was on web.js **/
/** chunk id: 999224, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => z,
  x: () => W
});
var Chunk771356 = require("./771356.js"),
  Chunk640490 = require("./640490.js"),
  Chunk578895 = require("./578895.js"),
  Chunk243125 = require("./243125.js"),
  Chunk89222 = require("./89222.js"),
  Chunk51016 = require("./51016.js"),
  Chunk629928 = require("./629928.js"),
  Chunk163033 = require("./163033.js"),
  Chunk466790 = require("./466790.js"),
  Chunk166660 = require("./166660.js"),
  Chunk415345 = require("./415345.js"),
  Chunk962770 = require("./962770.js"),
  Chunk909139 = require("./909139.js"),
  Chunk815291 = require("./815291.js"),
  Chunk760427 = require("./760427.js"),
  Chunk761491 = require("./761491.js"),
  Chunk480586 = require("./480586.js"),
  Chunk957450 = require("./957450.js"),
  Chunk251315 = require("./251315.js"),
  Chunk830443 = require("./830443.js"),
  Chunk936643 = require("./936643.js"),
  Chunk357826 = require("./357826.js"),
  Chunk486527 = require("./486527.js"),
  Chunk86158 = require("./86158.js"),
  Chunk711814 = require("./711814.js"),
  Chunk149334 = require("./149334.js"),
  Chunk409863 = require("./409863.js"),
  Chunk357196 = require("./357196.js"),
  Chunk183145 = require("./183145.js"),
  Chunk691545 = require("./691545.js"),
  Chunk58587 = require("./58587.js"),
  Chunk912609 = require("./912609.js"),
  Chunk565792 = require("./565792.js"),
  Chunk583498 = require("./583498.js"),
  Chunk442866 = require("./442866.js"),
  Chunk263984 = require("./263984.js"),
  Chunk591501 = require("./591501.js"),
  Chunk595867 = require("./595867.js"),
  Chunk345272 = require("./345272.js");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      F(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let W = {
    skye: {
      name: Chunk86158.default.tzvUK3,
      iconURL: Chunk442866.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(242, 96, 195, 0.50) 0%, rgba(242, 96, 195, 0.00) 100%)",
      baseColor: "#380527",
      styleKey: "skye",
      previewSoundURLs: [Chunk815291.Z]
    },
    quinn: {
      name: Chunk86158.default["biQVN/"],
      iconURL: Chunk912609.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, #5F549D 0%, rgba(95, 84, 157, 0.00) 100%)",
      baseColor: "#1E1B32",
      styleKey: "quinn",
      previewSoundURLs: [Chunk962770.Z]
    },
    axel: {
      name: Chunk86158.default.VCZdns,
      iconURL: Chunk711814.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(40, 84, 54, 0.50) 0%, rgba(40, 84, 54, 0.00) 100%)",
      baseColor: "#14291B",
      styleKey: "axel",
      previewSoundURLs: [Chunk771356.Z]
    },
    sebastien: {
      name: Chunk86158.default["NmbfH+"],
      iconURL: Chunk583498.Z,
      splashGradient: "radial-gradient(9% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(92, 119, 31, 0.50) 0%, rgba(92, 119, 31, 0.00) 100%)",
      baseColor: "#25300D",
      styleKey: "sebastien",
      previewSoundURLs: [Chunk909139.Z]
    },
    megaphone: {
      name: Chunk86158.default.fPU01d,
      iconURL: Chunk58587.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(230, 90, 205, 0.50) 0%, rgba(230, 90, 205, 0.00) 100%)",
      baseColor: "#35082D",
      styleKey: "megaphone",
      previewSoundURLs: [Chunk415345.Z]
    },
    robot: {
      name: Chunk86158.default.anBE8T,
      iconURL: Chunk565792.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(61, 72, 79, 0.50) 0%, rgba(61, 72, 79, 0.00) 100%)",
      baseColor: "#1B1F23",
      styleKey: "robot",
      previewSoundURLs: [Chunk243125.Z]
    },
    tunes: {
      name: Chunk86158.default.sem63B,
      iconURL: Chunk595867.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(111, 134, 253, 0.50) 0%, rgba(111, 134, 253, 0.00) 100%)",
      baseColor: "#010A3C",
      styleKey: "tunes",
      previewSoundURLs: [Chunk251315.Z]
    },
    ghost: {
      name: Chunk86158.default["lFIyM/"],
      iconURL: Chunk357196.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(110, 73, 156, 0.50) 0%, rgba(110, 73, 156, 0.00) 100%)",
      baseColor: "#1D142A",
      styleKey: "ghost",
      previewSoundURLs: [Chunk163033.Z]
    },
    space_bunny: {
      name: Chunk86158.default["KN+v77"],
      iconURL: Chunk591501.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(100% 555.56% at 0% 100%, rgba(110, 60, 223, 0.40) 0%, rgba(110, 60, 223, 0.00) 100%)",
      baseColor: "#160935",
      styleKey: "spacebunny",
      previewSoundURLs: [Chunk761491.Z, Chunk480586.Z, Chunk957450.Z]
    },
    justus: {
      name: Chunk86158.default.ZVrsKC,
      iconURL: Chunk691545.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(5, 86, 248, 0.50) 0%, rgba(5, 86, 248, 0.00) 100%)",
      baseColor: "#01153C",
      styleKey: "justus",
      previewSoundURLs: [Chunk166660.Z]
    },
    harper: {
      name: Chunk86158.default.vIrxZS,
      iconURL: Chunk183145.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(125, 87, 179, 0.50) 0%, rgba(125, 87, 179, 0.00) 100%)",
      baseColor: "#1D132A",
      styleKey: "harper",
      previewSoundURLs: [Chunk466790.Z]
    },
    villain: {
      name: Chunk86158.default.kHmvdt,
      iconURL: Chunk345272.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(219, 2, 34, 0.50) 0%, rgba(219, 2, 34, 0.00) 100%)",
      baseColor: "#3D0109",
      styleKey: "villain",
      previewSoundURLs: [Chunk830443.Z, Chunk936643.Z, Chunk357826.Z, Chunk486527.Z]
    },
    solara: {
      name: Chunk86158.default.ndNi1j,
      iconURL: Chunk263984.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(214, 155, 56, 0.50) 0%, rgba(214, 155, 56, 0.00) 100%)",
      baseColor: "#33240A",
      styleKey: "solara",
      previewSoundURLs: [Chunk760427.Z]
    },
    cave: {
      name: Chunk86158.default.Xypb3z,
      iconURL: Chunk149334.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(207, 122, 124, 0.50) 0%, rgba(207, 122, 124, 0.00) 100%)",
      baseColor: "#2D1011",
      styleKey: "cave",
      previewSoundURLs: [Chunk640490.Z, Chunk578895.Z]
    },
    deepfried: {
      name: Chunk86158.default.qRFFLK,
      iconURL: Chunk409863.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(253, 177, 45, 0.50) 0%, rgba(253, 177, 45, 0.00) 100%)",
      baseColor: "#3D2701",
      styleKey: "deepfried",
      previewSoundURLs: [Chunk89222.Z, Chunk51016.Z, Chunk629928.Z]
    }
  },
  K = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    return V(Y(V({}, e), {
      previewSoundURLs: [],
      underDevelopment: true
    }), t)
  };

function z(e) {
  return "".concat(e, ".onnx")
}
W["robot-synthetic"] = K(W.robot, {
  name: Chunk86158.default["Ur/62B"]
}), W["chords-2part"] = K(W.tunes, {
  name: Chunk86158.default.TYbrfK
}), W["chords-choir"] = K(W.tunes, {
  name: Chunk86158.default.OnZ6g9
}), W["chords-dev"] = K(W.tunes, {
  name: Chunk86158.default["2XH8tr"]
}), W["robot-dev"] = K(W.robot, {
  name: Chunk86158.default.XhhSOi
}), W["ghost-dev"] = K(W.ghost, {
  name: Chunk86158.default.KmHwvD
}), W["wobble-dev"] = K(W.ghost, {
  name: Chunk86158.default["6PDpse"]
}), W["fan-dev"] = K(W.robot, {
  name: Chunk86158.default["87aX+2"]
}), W["autotune-dev"] = K(W.tunes, {
  name: Chunk86158.default.EYDrRx
})