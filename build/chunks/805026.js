/** Chunk was on web.js **/
/** chunk id: 805026, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => q,
  y: () => K
});
var Chunk961358 = require("./961358.js"),
  Chunk520615 = require("./520615.js"),
  Chunk259546 = require("./259546.js"),
  Chunk608985 = require("./608985.js"),
  Chunk284186 = require("./284186.js"),
  Chunk954547 = require("./954547.js"),
  Chunk290096 = require("./290096.js"),
  Chunk872829 = require("./872829.js"),
  Chunk158140 = require("./158140.js"),
  Chunk268232 = require("./268232.js"),
  Chunk643952 = require("./643952.js"),
  Chunk270139 = require("./270139.js"),
  Chunk383148 = require("./383148.js"),
  Chunk650718 = require("./650718.js"),
  Chunk492678 = require("./492678.js"),
  Chunk501632 = require("./501632.js"),
  Chunk427201 = require("./427201.js"),
  Chunk721686 = require("./721686.js"),
  Chunk385615 = require("./385615.js"),
  Chunk712693 = require("./712693.js"),
  Chunk456424 = require("./456424.js"),
  Chunk676363 = require("./676363.js"),
  Chunk438970 = require("./438970.js"),
  Chunk734317 = require("./734317.js"),
  Chunk382967 = require("./382967.js"),
  Chunk45094 = require("./45094.js"),
  Chunk975803 = require("./975803.js"),
  Chunk864628 = require("./864628.js"),
  Chunk361349 = require("./361349.js"),
  Chunk86409 = require("./86409.js"),
  Chunk323681 = require("./323681.js"),
  Chunk913058 = require("./913058.js"),
  Chunk730191 = require("./730191.js"),
  Chunk126389 = require("./126389.js"),
  Chunk956743 = require("./956743.js"),
  Chunk339167 = require("./339167.js"),
  Chunk689969 = require("./689969.js"),
  Chunk11358 = require("./11358.js"),
  Chunk812892 = require("./812892.js");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
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

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let K = {
    skye: {
      name: Chunk734317.default.tzvUK3,
      iconURL: Chunk956743.A,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(242, 96, 195, 0.50) 0%, rgba(242, 96, 195, 0.00) 100%)",
      baseColor: "#380527",
      styleKey: "skye",
      previewSoundURLs: [Chunk650718.A]
    },
    quinn: {
      name: Chunk734317.default["biQVN/"],
      iconURL: Chunk913058.A,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, #5F549D 0%, rgba(95, 84, 157, 0.00) 100%)",
      baseColor: "#1E1B32",
      styleKey: "quinn",
      previewSoundURLs: [Chunk270139.A]
    },
    axel: {
      name: Chunk734317.default.VCZdns,
      iconURL: Chunk382967.A,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(40, 84, 54, 0.50) 0%, rgba(40, 84, 54, 0.00) 100%)",
      baseColor: "#14291B",
      styleKey: "axel",
      previewSoundURLs: [Chunk961358.A]
    },
    sebastien: {
      name: Chunk734317.default["NmbfH+"],
      iconURL: Chunk126389.A,
      splashGradient: "radial-gradient(9% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(92, 119, 31, 0.50) 0%, rgba(92, 119, 31, 0.00) 100%)",
      baseColor: "#25300D",
      styleKey: "sebastien",
      previewSoundURLs: [Chunk383148.A]
    },
    megaphone: {
      name: Chunk734317.default.fPU01d,
      iconURL: Chunk323681.A,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(230, 90, 205, 0.50) 0%, rgba(230, 90, 205, 0.00) 100%)",
      baseColor: "#35082D",
      styleKey: "megaphone",
      previewSoundURLs: [Chunk643952.A]
    },
    robot: {
      name: Chunk734317.default.anBE8T,
      iconURL: Chunk730191.A,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(61, 72, 79, 0.50) 0%, rgba(61, 72, 79, 0.00) 100%)",
      baseColor: "#1B1F23",
      styleKey: "robot",
      previewSoundURLs: [Chunk608985.A]
    },
    tunes: {
      name: Chunk734317.default.sem63B,
      iconURL: Chunk11358.A,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(111, 134, 253, 0.50) 0%, rgba(111, 134, 253, 0.00) 100%)",
      baseColor: "#010A3C",
      styleKey: "tunes",
      previewSoundURLs: [Chunk385615.A]
    },
    ghost: {
      name: Chunk734317.default["lFIyM/"],
      iconURL: Chunk864628.A,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(110, 73, 156, 0.50) 0%, rgba(110, 73, 156, 0.00) 100%)",
      baseColor: "#1D142A",
      styleKey: "ghost",
      previewSoundURLs: [Chunk872829.A]
    },
    space_bunny: {
      name: Chunk734317.default["KN+v77"],
      iconURL: Chunk689969.A,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(100% 555.56% at 0% 100%, rgba(110, 60, 223, 0.40) 0%, rgba(110, 60, 223, 0.00) 100%)",
      baseColor: "#160935",
      styleKey: "spacebunny",
      previewSoundURLs: [Chunk501632.A, Chunk427201.A, Chunk721686.A]
    },
    justus: {
      name: Chunk734317.default.ZVrsKC,
      iconURL: Chunk86409.A,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(5, 86, 248, 0.50) 0%, rgba(5, 86, 248, 0.00) 100%)",
      baseColor: "#01153C",
      styleKey: "justus",
      previewSoundURLs: [Chunk268232.A]
    },
    harper: {
      name: Chunk734317.default.vIrxZS,
      iconURL: Chunk361349.A,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(125, 87, 179, 0.50) 0%, rgba(125, 87, 179, 0.00) 100%)",
      baseColor: "#1D132A",
      styleKey: "harper",
      previewSoundURLs: [Chunk158140.A]
    },
    villain: {
      name: Chunk734317.default.kHmvdt,
      iconURL: Chunk812892.A,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(100% 555.56% at 0% 100%, rgba(219, 2, 34, 0.50) 0%, rgba(219, 2, 34, 0.00) 100%)",
      baseColor: "#3D0109",
      styleKey: "villain",
      previewSoundURLs: [Chunk712693.A, Chunk456424.A, Chunk676363.A, Chunk438970.A]
    },
    solara: {
      name: Chunk734317.default.ndNi1j,
      iconURL: Chunk339167.A,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(214, 155, 56, 0.50) 0%, rgba(214, 155, 56, 0.00) 100%)",
      baseColor: "#33240A",
      styleKey: "solara",
      previewSoundURLs: [Chunk492678.A]
    },
    cave: {
      name: Chunk734317.default.Xypb3z,
      iconURL: Chunk45094.A,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(207, 122, 124, 0.50) 0%, rgba(207, 122, 124, 0.00) 100%)",
      baseColor: "#2D1011",
      styleKey: "cave",
      previewSoundURLs: [Chunk520615.A, Chunk259546.A]
    },
    deepfried: {
      name: Chunk734317.default.qRFFLK,
      iconURL: Chunk975803.A,
      splashGradient: "radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 25%), radial-gradient(89% 494.44% at 11% 100%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.10) 15%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.01) 60%, rgba(255, 255, 255, 0.00) 75%), radial-gradient(84.38% 468.75% at 15.63% 100%, rgba(253, 177, 45, 0.50) 0%, rgba(253, 177, 45, 0.00) 100%)",
      baseColor: "#3D2701",
      styleKey: "deepfried",
      previewSoundURLs: [Chunk284186.A, Chunk954547.A, Chunk290096.A]
    }
  },
  z = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    return H(W(H({}, e), {
      previewSoundURLs: [],
      underDevelopment: true
    }), t)
  };

function q(e) {
  return "".concat(e, ".onnx")
}
K["robot-synthetic"] = z(K.robot, {
  name: Chunk734317.default["Ur/62B"]
}), K["chords-2part"] = z(K.tunes, {
  name: Chunk734317.default.TYbrfK
}), K["chords-choir"] = z(K.tunes, {
  name: Chunk734317.default.OnZ6g9
}), K["chords-dev"] = z(K.tunes, {
  name: Chunk734317.default["2XH8tr"]
}), K["robot-dev"] = z(K.robot, {
  name: Chunk734317.default.XhhSOi
}), K["ghost-dev"] = z(K.ghost, {
  name: Chunk734317.default.KmHwvD
}), K["wobble-dev"] = z(K.ghost, {
  name: Chunk734317.default["6PDpse"]
}), K["fan-dev"] = z(K.robot, {
  name: Chunk734317.default["87aX+2"]
}), K["autotune-dev"] = z(K.tunes, {
  name: Chunk734317.default.EYDrRx
})