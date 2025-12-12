/** Chunk was on web.js **/
/** chunk id: 999224, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => z,
  x: () => W
});
var Chunk484357 = require("./484357.js"),
  Chunk323537 = require("./323537.js"),
  Chunk780847 = require("./780847.js"),
  Chunk740069 = require("./740069.js"),
  Chunk407152 = require("./407152.js"),
  Chunk106158 = require("./106158.js"),
  Chunk400211 = require("./400211.js"),
  Chunk137237 = require("./137237.js"),
  Chunk598347 = require("./598347.js"),
  Chunk67112 = require("./67112.js"),
  Chunk417896 = require("./417896.js"),
  Chunk645586 = require("./645586.js"),
  Chunk779870 = require("./779870.js"),
  Chunk982225 = require("./982225.js"),
  Chunk206395 = require("./206395.js"),
  Chunk681066 = require("./681066.js"),
  Chunk489644 = require("./489644.js"),
  Chunk335106 = require("./335106.js"),
  Chunk773031 = require("./773031.js"),
  Chunk418892 = require("./418892.js"),
  Chunk122023 = require("./122023.js"),
  Chunk854852 = require("./854852.js"),
  Chunk274678 = require("./274678.js"),
  Chunk713314 = require("./713314.js"),
  Chunk199411 = require("./199411.js"),
  Chunk444410 = require("./444410.js"),
  Chunk50273 = require("./50273.js"),
  Chunk627203 = require("./627203.js"),
  Chunk672906 = require("./672906.js"),
  Chunk721407 = require("./721407.js"),
  Chunk218191 = require("./218191.js"),
  Chunk892756 = require("./892756.js"),
  Chunk201622 = require("./201622.js"),
  Chunk733967 = require("./733967.js"),
  Chunk402747 = require("./402747.js"),
  Chunk290687 = require("./290687.js"),
  Chunk396752 = require("./396752.js"),
  Chunk216932 = require("./216932.js"),
  Chunk915579 = require("./915579.js");

function B(e, t, n) {
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
      B(e, t, n[t])
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
      name: Chunk713314.default.tzvUK3,
      iconURL: Chunk402747.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(242, 96, 195, 0.50) 0%, rgba(242, 96, 195, 0.00) 100%)",
      baseColor: "#380527",
      styleKey: "skye",
      previewSoundURLs: [Chunk982225.Z]
    },
    quinn: {
      name: Chunk713314.default["biQVN/"],
      iconURL: Chunk892756.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, #5F549D 0%, rgba(95, 84, 157, 0.00) 100%)",
      baseColor: "#1E1B32",
      styleKey: "quinn",
      previewSoundURLs: [Chunk645586.Z]
    },
    axel: {
      name: Chunk713314.default.VCZdns,
      iconURL: Chunk199411.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(40, 84, 54, 0.50) 0%, rgba(40, 84, 54, 0.00) 100%)",
      baseColor: "#14291B",
      styleKey: "axel",
      previewSoundURLs: [Chunk484357.Z]
    },
    sebastien: {
      name: Chunk713314.default["NmbfH+"],
      iconURL: Chunk733967.Z,
      splashGradient: "radial-gradient(9% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(92, 119, 31, 0.50) 0%, rgba(92, 119, 31, 0.00) 100%)",
      baseColor: "#25300D",
      styleKey: "sebastien",
      previewSoundURLs: [Chunk779870.Z]
    },
    megaphone: {
      name: Chunk713314.default.fPU01d,
      iconURL: Chunk218191.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(230, 90, 205, 0.50) 0%, rgba(230, 90, 205, 0.00) 100%)",
      baseColor: "#35082D",
      styleKey: "megaphone",
      previewSoundURLs: [Chunk417896.Z]
    },
    robot: {
      name: Chunk713314.default.anBE8T,
      iconURL: Chunk201622.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(61, 72, 79, 0.50) 0%, rgba(61, 72, 79, 0.00) 100%)",
      baseColor: "#1B1F23",
      styleKey: "robot",
      previewSoundURLs: [Chunk740069.Z]
    },
    tunes: {
      name: Chunk713314.default.sem63B,
      iconURL: Chunk216932.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(111, 134, 253, 0.50) 0%, rgba(111, 134, 253, 0.00) 100%)",
      baseColor: "#010A3C",
      styleKey: "tunes",
      previewSoundURLs: [Chunk773031.Z]
    },
    ghost: {
      name: Chunk713314.default["lFIyM/"],
      iconURL: Chunk627203.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(110, 73, 156, 0.50) 0%, rgba(110, 73, 156, 0.00) 100%)",
      baseColor: "#1D142A",
      styleKey: "ghost",
      previewSoundURLs: [Chunk137237.Z]
    },
    space_bunny: {
      name: Chunk713314.default["KN+v77"],
      iconURL: Chunk396752.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(100% 555.56% at 0% 100%, rgba(110, 60, 223, 0.40) 0%, rgba(110, 60, 223, 0.00) 100%)",
      baseColor: "#160935",
      styleKey: "spacebunny",
      previewSoundURLs: [Chunk681066.Z, Chunk489644.Z, Chunk335106.Z]
    },
    justus: {
      name: Chunk713314.default.ZVrsKC,
      iconURL: Chunk721407.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(5, 86, 248, 0.50) 0%, rgba(5, 86, 248, 0.00) 100%)",
      baseColor: "#01153C",
      styleKey: "justus",
      previewSoundURLs: [Chunk67112.Z]
    },
    harper: {
      name: Chunk713314.default.vIrxZS,
      iconURL: Chunk672906.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(125, 87, 179, 0.50) 0%, rgba(125, 87, 179, 0.00) 100%)",
      baseColor: "#1D132A",
      styleKey: "harper",
      previewSoundURLs: [Chunk598347.Z]
    },
    villain: {
      name: Chunk713314.default.kHmvdt,
      iconURL: Chunk915579.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(219, 2, 34, 0.50) 0%, rgba(219, 2, 34, 0.00) 100%)",
      baseColor: "#3D0109",
      styleKey: "villain",
      previewSoundURLs: [Chunk418892.Z, Chunk122023.Z, Chunk854852.Z, Chunk274678.Z]
    },
    solara: {
      name: Chunk713314.default.ndNi1j,
      iconURL: Chunk290687.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(214, 155, 56, 0.50) 0%, rgba(214, 155, 56, 0.00) 100%)",
      baseColor: "#33240A",
      styleKey: "solara",
      previewSoundURLs: [Chunk206395.Z]
    },
    cave: {
      name: Chunk713314.default.Xypb3z,
      iconURL: Chunk444410.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(207, 122, 124, 0.50) 0%, rgba(207, 122, 124, 0.00) 100%)",
      baseColor: "#2D1011",
      styleKey: "cave",
      previewSoundURLs: [Chunk323537.Z, Chunk780847.Z]
    },
    deepfried: {
      name: Chunk713314.default.qRFFLK,
      iconURL: Chunk50273.Z,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(253, 177, 45, 0.50) 0%, rgba(253, 177, 45, 0.00) 100%)",
      baseColor: "#3D2701",
      styleKey: "deepfried",
      previewSoundURLs: [Chunk407152.Z, Chunk106158.Z, Chunk400211.Z]
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
  name: Chunk713314.default["Ur/62B"]
}), W["chords-2part"] = K(W.tunes, {
  name: Chunk713314.default.TYbrfK
}), W["chords-choir"] = K(W.tunes, {
  name: Chunk713314.default.OnZ6g9
}), W["chords-dev"] = K(W.tunes, {
  name: Chunk713314.default["2XH8tr"]
}), W["robot-dev"] = K(W.robot, {
  name: Chunk713314.default.XhhSOi
}), W["ghost-dev"] = K(W.ghost, {
  name: Chunk713314.default.KmHwvD
}), W["wobble-dev"] = K(W.ghost, {
  name: Chunk713314.default["6PDpse"]
}), W["fan-dev"] = K(W.robot, {
  name: Chunk713314.default["87aX+2"]
}), W["autotune-dev"] = K(W.tunes, {
  name: Chunk713314.default.EYDrRx
})