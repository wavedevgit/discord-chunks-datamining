/** Chunk was on 93886 **/
/** chunk id: 206878, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  g: () => O
}), require("./388685.js"), require("./35282.js");
var Chunk73800 = require("./73800.js"),
  Chunk281598 = require("./281598.js");

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = a[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function i(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      a.push.apply(a, n)
    }
    return a
  })(Object(t)).forEach(function(a) {
    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
  }), e
}
let s = new Set([Chunk281598.jE.SHOP_ALL_BANNER_STATIC, Chunk281598.jE.HERO_BANNER_STATIC, Chunk281598.jE.HERO_LOGO, Chunk281598.jE.PDP_BACKGROUND, Chunk281598.jE.PDP_LOGO, Chunk281598.jE.MOBILE_BANNER, Chunk281598.jE.MOBILE_BACKGROUND]),
  o = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
  c = {
    max: 5e6,
    warn: 2e6
  },
  d = {
    max: 3e6,
    warn: 1e6
  },
  u = {
    max: 2e6,
    warn: 1e6
  },
  m = {
    max: 1e6,
    warn: 5e5
  },
  x = {
    max: 25e4,
    warn: 5e4
  },
  h = {
    [Chunk281598.aB.PROFILE_EFFECT]: c,
    [Chunk281598.aB.AVATAR_DECORATION]: d,
    [Chunk281598.jE.HERO_BANNER_ANIMATED]: c,
    [Chunk281598.jE.SHOP_ALL_BANNER_ANIMATED]: c,
    [Chunk281598.jE.SHOP_BUTTON_BG_HOVER]: d,
    [Chunk281598.jE.SHOP_BUTTON_BG_HOVER_DARK]: d,
    [Chunk281598.jE.SHOP_BUTTON_BG_HOVER_LIGHT]: d,
    [Chunk281598.jE.SHOP_BUTTON_BG_RESTING]: d,
    [Chunk281598.jE.SHOP_BUTTON_BG_RESTING_DARK]: d,
    [Chunk281598.jE.SHOP_BUTTON_BG_RESTING_LIGHT]: d,
    [Chunk281598.jE.HERO_BANNER_STATIC]: u,
    [Chunk281598.jE.SHOP_ALL_BANNER_STATIC]: u,
    [Chunk281598.jE.UPSELL_BANNER]: m,
    [Chunk281598.jE.UPSELL_BANNER_POPOUT]: x,
    [Chunk281598.jE.MOBILE_BANNER]: m,
    [Chunk281598.jE.MOBILE_BACKGROUND]: x,
    [Chunk281598.jE.PDP_BACKGROUND]: x,
    [Chunk281598.jE.PDP_LOGO]: x,
    [Chunk281598.jE.COACHTIP_AVATAR]: x
  },
  p = async e => {
    let t = Object.values(r.CM),
      a = new Set,
      n = e.createReader();
    for (let e of (await new Promise(e => n.readEntries(e)))) e.isDirectory && t.includes(e.name) && a.add(e.name);
    return t.filter(e => !a.has(e))
  }, b = e => {
    let {
      files: t,
      addWarning: a
    } = e;
    t.ignoredFilenames.length > 0 && a("Contains unrecognized files", t.ignoredFilenames)
  }, f = e => {
    let {
      names: t,
      addError: a
    } = e, n = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/, r = t.filter(e => !n.test(e));
    r.length > 0 && a("File names must be in lowercase snake case", r)
  }, v = (e, t, a, n) => {
    let r = t.size,
      l = r > 1e6 ? "".concat((r / 1e6).toFixed(2), "MB") : "".concat((r / 1e3).toFixed(2), "KB"),
      i = "".concat(t.name, " - ").concat(l);
    if (r > e.max) {
      let t = e.max > 1e6 ? "".concat(Math.round(e.max / 1e6), "MB") : "".concat(Math.round(e.max / 1e3), "KB");
      a("Files exceed the recommended size limit - make sure they are optimized!", ["".concat(i, " (max: ").concat(t, ")")])
    } else r > e.warn && n("Files are a tad chonky - are you sure they're optimized?", ["".concat(i)])
  }, j = (e, t, a, n) => {
    let r = h[e];
    if (null != r)
      for (let e of t) e.name.endsWith(".txt") || v(r, e, a, n)
  }, g = (e, t, a) => {
    for (let n of e) {
      let e = (0, r.BU)(n),
        l = null != e ? h[e] : null;
      null != l && v(l, n, t, a)
    }
  }, _ = e => {
    let {
      files: t,
      addError: a,
      addWarning: n
    } = e;
    g(t.collectionFiles, a, n), f({
      names: t.collectionFiles.map(e => e.name),
      addError: a
    });
    let l = new Set(t.collectionFiles.map(e => e.name)),
      i = Array.from(s).filter(e => !l.has(e));
    i.length > 0 && a("Missing required files", i);
    let o = Object.values(r.jE).filter(e => !s.has(e)).filter(e => !l.has(e));
    o.length > 0 && n("Missing optional assets", o)
  }, y = e => {
    let {
      files: t,
      addError: a,
      addWarning: n
    } = e;
    f({
      names: Object.keys(t.profileEffectFilesMap),
      addError: a
    }), Object.entries(t.profileEffectFilesMap).forEach(e => {
      let [t, l] = e, i = l.map(e => e.name);
      f({
        names: i.map(e => {
          let t = e.indexOf("-");
          return e.substring(0, t > 0 ? t : e.length)
        }),
        addError: a
      }), j(r.aB.PROFILE_EFFECT, l, a, n);
      let s = o.filter(e => !i.some(t => t.startsWith(e) && t.endsWith(".png"))).map(e => "".concat(t, "/").concat(e));
      s.length > 0 && a("Missing required PFX files with prefix", s), i.some(e => e.endsWith(".txt")) || a("PFX configs required - please include both exports! (exception: duplicate variant configs are optional)", [t]);
      let c = i.filter(e => !o.some(t => e.startsWith(t)) && !e.endsWith(".txt")).map(e => "".concat(t, "/").concat(e));
      c.length > 0 && n("Contains unrecognized files", c)
    })
  }, C = e => {
    let {
      files: t,
      addError: a,
      addWarning: n
    } = e;
    f({
      names: t.avatarDecorationFiles.map(e => e.name),
      addError: a
    }), j(r.aB.AVATAR_DECORATION, t.avatarDecorationFiles, a, n)
  }, N = (e, t, a) => {
    _({
      files: e,
      addError: a,
      addWarning: t
    }), y({
      files: e,
      addError: a,
      addWarning: t
    }), C({
      files: e,
      addError: a,
      addWarning: t
    }), b({
      files: e,
      addError: a,
      addWarning: t
    })
  }, O = () => {
    let [e, t] = Chunk73800.useState(false), [a, s] = Chunk73800.useState({}), [o, c] = Chunk73800.useState({}), d = Chunk73800.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
      c(a => {
        var n;
        let r = null != (n = a[e]) ? n : [];
        return i(l({}, a), {
          [e]: [...r, ...t]
        })
      })
    }, []), u = Chunk73800.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
      s(a => {
        var n;
        let r = null != (n = a[e]) ? n : [];
        return i(l({}, a), {
          [e]: [...r, ...t]
        })
      })
    }, []), m = Chunk73800.useCallback(() => {
      exports(false), c({}), s({})
    }, []);
    return {
      validationComplete: module,
      errors: o,
      warnings: require,
      validateShopAssetPackage: Chunk73800.useCallback(async e => {
        try {
          if (0 === e.length) return void d("No files found");
          if (e.length > 1) return void d("Uploaded multiple files. Expected 1 directory.");
          let t = e[0];
          if (!t.isDirectory) return void d("Uploaded a file. Expected a directory.");
          let a = await p(t);
          if (a.length > 0) return void d("Missing required directories", a);
          let n = await (0, r.LY)([t]);
          N(n, u, d)
        } finally {
          t(true)
        }
      }, [d, u]),
      reset: m
    }
  }