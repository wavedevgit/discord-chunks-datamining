/** Chunk was on web.js **/
/** chunk id: 699582, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk863714 = require("./863714.js"),
  Chunk635535 = require("./635535.js"),
  o = {},
  s = function() {
    var e = {};
    try {
      return Object.defineProperty(module, "a", {}), "a" in module
    } catch (e) {
      returnfalse
    }
  }(),
  l = !s && !Object.prototype.__defineGetter__,
  c = Object.prototype.hasOwnProperty,
  u = s ? Object.defineProperty : function(e, t, n) {
    "get" in n && e.__defineGetter__ ? e.__defineGetter__(t, n.get) : (!c.call(e, t) || "value" in n) && (e[t] = n.value)
  },
  d = Array.prototype.indexOf || function(e) {
    var t = this;
    if (!t.length) return false;
    for (var n = arguments[1] || 0, r = t.length; n < r; n++)
      if (t[n] === e) return n;
    return false
  },
  f = Object.create || function(e, t) {
    var n;

    function r() {}
    for (var i in r.prototype = e, n = new r, t) c.call(t, i) && u(n, i, t[i]);
    return n
  },
  p = Array.prototype.slice,
  _ = Array.prototype.concat,
  m = Array.prototype.push,
  h = Array.prototype.join,
  g = Array.prototype.shift,
  E = (Array.prototype.unshift, Function.prototype.bind || function(e) {
    var t = this,
      n = p.call(arguments, 1);
    return 1 === t.length ? function(r) {
      return t.apply(e, _.call(n, p.call(arguments)))
    } : function() {
      return t.apply(e, _.call(n, p.call(arguments)))
    }
  }),
  b = f(null),
  y = Math.random(),
  O = f(null, {
    narrow: {},
    short: {},
    long: {}
  }),
  v = false,
  S = false,
  I = /^[A-Z]{3}$/,
  T = /-u(?:-[0-9a-z]{2,8})+/gi,
  C = {
    "art-lojban": "jbo",
    "i-ami": "ami",
    "i-bnn": "bnn",
    "i-hak": "hak",
    "i-klingon": "tlh",
    "i-lux": "lb",
    "i-navajo": "nv",
    "i-pwn": "pwn",
    "i-tao": "tao",
    "i-tay": "tay",
    "i-tsu": "tsu",
    "no-bok": "nb",
    "no-nyn": "nn",
    "sgn-BE-FR": "sfb",
    "sgn-BE-NL": "vgt",
    "sgn-CH-DE": "sgg",
    "zh-guoyu": "cmn",
    "zh-hakka": "hak",
    "zh-min-nan": "nan",
    "zh-xiang": "hsn",
    "sgn-BR": "bzs",
    "sgn-CO": "csn",
    "sgn-DE": "gsg",
    "sgn-DK": "dsl",
    "sgn-ES": "ssp",
    "sgn-FR": "fsl",
    "sgn-GB": "bfi",
    "sgn-GR": "gss",
    "sgn-IE": "isg",
    "sgn-IT": "ise",
    "sgn-JP": "jsl",
    "sgn-MX": "mfs",
    "sgn-NI": "ncs",
    "sgn-NL": "dse",
    "sgn-NO": "nsl",
    "sgn-PT": "psr",
    "sgn-SE": "swl",
    "sgn-US": "ase",
    "sgn-ZA": "sfs",
    "zh-cmn": "cmn",
    "zh-cmn-Hans": "cmn-Hans",
    "zh-cmn-Hant": "cmn-Hant",
    "zh-gan": "gan",
    "zh-wuu": "wuu",
    "zh-yue": "yue"
  },
  A = {
    BU: "MM",
    DD: "DE",
    FX: "FR",
    TP: "TL",
    YD: "YE",
    ZR: "CD",
    heploc: "alalc97",
    in: "id",
    iw: "he",
    ji: "yi",
    jw: "jv",
    mo: "ro",
    ayx: "nun",
    bjd: "drl",
    ccq: "rki",
    cjr: "mom",
    cka: "cmr",
    cmk: "xch",
    drh: "khk",
    drw: "prs",
    gav: "dev",
    hrr: "jal",
    ibi: "opa",
    kgh: "kml",
    lcq: "ppr",
    mst: "mry",
    myt: "mry",
    sca: "hle",
    tie: "ras",
    tkk: "twm",
    tlw: "weo",
    tnf: "prs",
    ybd: "rki",
    yma: "lrr"
  },
  N = {
    aao: ["aao", "ar"],
    abh: ["abh", "ar"],
    abv: ["abv", "ar"],
    acm: ["acm", "ar"],
    acq: ["acq", "ar"],
    acw: ["acw", "ar"],
    acx: ["acx", "ar"],
    acy: ["acy", "ar"],
    adf: ["adf", "ar"],
    ads: ["ads", "sgn"],
    aeb: ["aeb", "ar"],
    aec: ["aec", "ar"],
    aed: ["aed", "sgn"],
    aen: ["aen", "sgn"],
    afb: ["afb", "ar"],
    afg: ["afg", "sgn"],
    ajp: ["ajp", "ar"],
    apc: ["apc", "ar"],
    apd: ["apd", "ar"],
    arb: ["arb", "ar"],
    arq: ["arq", "ar"],
    ars: ["ars", "ar"],
    ary: ["ary", "ar"],
    arz: ["arz", "ar"],
    ase: ["ase", "sgn"],
    asf: ["asf", "sgn"],
    asp: ["asp", "sgn"],
    asq: ["asq", "sgn"],
    asw: ["asw", "sgn"],
    auz: ["auz", "ar"],
    avl: ["avl", "ar"],
    ayh: ["ayh", "ar"],
    ayl: ["ayl", "ar"],
    ayn: ["ayn", "ar"],
    ayp: ["ayp", "ar"],
    bbz: ["bbz", "ar"],
    bfi: ["bfi", "sgn"],
    bfk: ["bfk", "sgn"],
    bjn: ["bjn", "ms"],
    bog: ["bog", "sgn"],
    bqn: ["bqn", "sgn"],
    bqy: ["bqy", "sgn"],
    btj: ["btj", "ms"],
    bve: ["bve", "ms"],
    bvl: ["bvl", "sgn"],
    bvu: ["bvu", "ms"],
    bzs: ["bzs", "sgn"],
    cdo: ["cdo", "zh"],
    cds: ["cds", "sgn"],
    cjy: ["cjy", "zh"],
    cmn: ["cmn", "zh"],
    coa: ["coa", "ms"],
    cpx: ["cpx", "zh"],
    csc: ["csc", "sgn"],
    csd: ["csd", "sgn"],
    cse: ["cse", "sgn"],
    csf: ["csf", "sgn"],
    csg: ["csg", "sgn"],
    csl: ["csl", "sgn"],
    csn: ["csn", "sgn"],
    csq: ["csq", "sgn"],
    csr: ["csr", "sgn"],
    czh: ["czh", "zh"],
    czo: ["czo", "zh"],
    doq: ["doq", "sgn"],
    dse: ["dse", "sgn"],
    dsl: ["dsl", "sgn"],
    dup: ["dup", "ms"],
    ecs: ["ecs", "sgn"],
    esl: ["esl", "sgn"],
    esn: ["esn", "sgn"],
    eso: ["eso", "sgn"],
    eth: ["eth", "sgn"],
    fcs: ["fcs", "sgn"],
    fse: ["fse", "sgn"],
    fsl: ["fsl", "sgn"],
    fss: ["fss", "sgn"],
    gan: ["gan", "zh"],
    gds: ["gds", "sgn"],
    gom: ["gom", "kok"],
    gse: ["gse", "sgn"],
    gsg: ["gsg", "sgn"],
    gsm: ["gsm", "sgn"],
    gss: ["gss", "sgn"],
    gus: ["gus", "sgn"],
    hab: ["hab", "sgn"],
    haf: ["haf", "sgn"],
    hak: ["hak", "zh"],
    hds: ["hds", "sgn"],
    hji: ["hji", "ms"],
    hks: ["hks", "sgn"],
    hos: ["hos", "sgn"],
    hps: ["hps", "sgn"],
    hsh: ["hsh", "sgn"],
    hsl: ["hsl", "sgn"],
    hsn: ["hsn", "zh"],
    icl: ["icl", "sgn"],
    ils: ["ils", "sgn"],
    inl: ["inl", "sgn"],
    ins: ["ins", "sgn"],
    ise: ["ise", "sgn"],
    isg: ["isg", "sgn"],
    isr: ["isr", "sgn"],
    jak: ["jak", "ms"],
    jax: ["jax", "ms"],
    jcs: ["jcs", "sgn"],
    jhs: ["jhs", "sgn"],
    jls: ["jls", "sgn"],
    jos: ["jos", "sgn"],
    jsl: ["jsl", "sgn"],
    jus: ["jus", "sgn"],
    kgi: ["kgi", "sgn"],
    knn: ["knn", "kok"],
    kvb: ["kvb", "ms"],
    kvk: ["kvk", "sgn"],
    kvr: ["kvr", "ms"],
    kxd: ["kxd", "ms"],
    lbs: ["lbs", "sgn"],
    lce: ["lce", "ms"],
    lcf: ["lcf", "ms"],
    liw: ["liw", "ms"],
    lls: ["lls", "sgn"],
    lsg: ["lsg", "sgn"],
    lsl: ["lsl", "sgn"],
    lso: ["lso", "sgn"],
    lsp: ["lsp", "sgn"],
    lst: ["lst", "sgn"],
    lsy: ["lsy", "sgn"],
    ltg: ["ltg", "lv"],
    lvs: ["lvs", "lv"],
    lzh: ["lzh", "zh"],
    max: ["max", "ms"],
    mdl: ["mdl", "sgn"],
    meo: ["meo", "ms"],
    mfa: ["mfa", "ms"],
    mfb: ["mfb", "ms"],
    mfs: ["mfs", "sgn"],
    min: ["min", "ms"],
    mnp: ["mnp", "zh"],
    mqg: ["mqg", "ms"],
    mre: ["mre", "sgn"],
    msd: ["msd", "sgn"],
    msi: ["msi", "ms"],
    msr: ["msr", "sgn"],
    mui: ["mui", "ms"],
    mzc: ["mzc", "sgn"],
    mzg: ["mzg", "sgn"],
    mzy: ["mzy", "sgn"],
    nan: ["nan", "zh"],
    nbs: ["nbs", "sgn"],
    ncs: ["ncs", "sgn"],
    nsi: ["nsi", "sgn"],
    nsl: ["nsl", "sgn"],
    nsp: ["nsp", "sgn"],
    nsr: ["nsr", "sgn"],
    nzs: ["nzs", "sgn"],
    okl: ["okl", "sgn"],
    orn: ["orn", "ms"],
    ors: ["ors", "ms"],
    pel: ["pel", "ms"],
    pga: ["pga", "ar"],
    pks: ["pks", "sgn"],
    prl: ["prl", "sgn"],
    prz: ["prz", "sgn"],
    psc: ["psc", "sgn"],
    psd: ["psd", "sgn"],
    pse: ["pse", "ms"],
    psg: ["psg", "sgn"],
    psl: ["psl", "sgn"],
    pso: ["pso", "sgn"],
    psp: ["psp", "sgn"],
    psr: ["psr", "sgn"],
    pys: ["pys", "sgn"],
    rms: ["rms", "sgn"],
    rsi: ["rsi", "sgn"],
    rsl: ["rsl", "sgn"],
    sdl: ["sdl", "sgn"],
    sfb: ["sfb", "sgn"],
    sfs: ["sfs", "sgn"],
    sgg: ["sgg", "sgn"],
    sgx: ["sgx", "sgn"],
    shu: ["shu", "ar"],
    slf: ["slf", "sgn"],
    sls: ["sls", "sgn"],
    sqk: ["sqk", "sgn"],
    sqs: ["sqs", "sgn"],
    ssh: ["ssh", "ar"],
    ssp: ["ssp", "sgn"],
    ssr: ["ssr", "sgn"],
    svk: ["svk", "sgn"],
    swc: ["swc", "sw"],
    swh: ["swh", "sw"],
    swl: ["swl", "sgn"],
    syy: ["syy", "sgn"],
    tmw: ["tmw", "ms"],
    tse: ["tse", "sgn"],
    tsm: ["tsm", "sgn"],
    tsq: ["tsq", "sgn"],
    tss: ["tss", "sgn"],
    tsy: ["tsy", "sgn"],
    tza: ["tza", "sgn"],
    ugn: ["ugn", "sgn"],
    ugy: ["ugy", "sgn"],
    ukl: ["ukl", "sgn"],
    uks: ["uks", "sgn"],
    urk: ["urk", "ms"],
    uzn: ["uzn", "uz"],
    uzs: ["uzs", "uz"],
    vgt: ["vgt", "sgn"],
    vkk: ["vkk", "ms"],
    vkt: ["vkt", "ms"],
    vsi: ["vsi", "sgn"],
    vsl: ["vsl", "sgn"],
    vsv: ["vsv", "sgn"],
    wuu: ["wuu", "zh"],
    xki: ["xki", "sgn"],
    xml: ["xml", "sgn"],
    xmm: ["xmm", "ms"],
    xms: ["xms", "sgn"],
    yds: ["yds", "sgn"],
    ysl: ["ysl", "sgn"],
    yue: ["yue", "zh"],
    zib: ["zib", "sgn"],
    zlm: ["zlm", "ms"],
    zmi: ["zmi", "ms"],
    zsl: ["zsl", "sgn"],
    zsm: ["zsm", "ms"]
  },
  P = {
    BHD: 3,
    BYR: 0,
    XOF: 0,
    BIF: 0,
    XAF: 0,
    CLF: 4,
    CLP: 0,
    KMF: 0,
    DJF: 0,
    XPF: 0,
    GNF: 0,
    ISK: 0,
    IQD: 3,
    JPY: 0,
    JOD: 3,
    KRW: 0,
    KWD: 3,
    LYD: 3,
    OMR: 3,
    PYG: 0,
    RWF: 0,
    TND: 3,
    UGX: 0,
    UYI: 0,
    VUV: 0,
    VND: 0
  };

function R(e) {
  return !(!i.expBCP47Syntax.test(e) || i.expVariantDupes.test(e) || i.expSingletonDupes.test(e))
}

function w(e) {
  var t, n;
  n = (e = e.toLowerCase()).split("-");
  for (var r = 1, a = n.length; r < a; r++)
    if (2 === n[r].length) n[r] = n[r].toUpperCase();
    else if (4 === n[r].length) n[r] = n[r].charAt(0).toUpperCase() + n[r].slice(1);
  else if (1 === n[r].length && "x" !== n[r]) break;
  (t = (e = h.call(n, "-")).match(i.expExtSequences)) && t.length > 1 && (t.sort(), e = e.replace(RegExp("(?:" + i.expExtSequences.source + ")+", "i"), h.call(t, ""))), c.call(C, e) && (e = C[e]), n = e.split("-");
  for (var r = 1, a = n.length; r < a; r++) c.call(A, n[r]) ? n[r] = A[n[r]] : c.call(N, n[r]) && (n[r] = N[n[r]][0], 1 === r && N[n[1]][1] === n[0] && (n = p.call(n, r++), a -= 1));
  return h.call(n, "-")
}

function D() {
  return r
}

function x(e) {
  var t = eg(String(e));
  returnfalse !== I.test(t)
}

function L(e) {
  if (true === e) return new em;
  for (var t = new em, e = "string" == typeof e ? [e] : e, n = eE(e), r = n.length, i = 0; i < r;) {
    var a = String(i);
    if (a in n) {
      var o = n[a];
      if (null == o || "string" != typeof o && "object" != typeof o) throw TypeError("String or Object type expected");
      var s = String(o);
      if (!R(s)) throw RangeError("'" + s + "' is not a structurally valid language tag");
      s = w(s), false === d.call(t, s) && m.call(t, s)
    }
    i++
  }
  return t
}

function j(e, t) {
  for (var n = t;;) {
    if (d.call(e, n) > false) return n;
    var r = n.lastIndexOf("-");
    if (r < 0) return;
    r >= 2 && "-" === n.charAt(r - 2) && (r -= 2), n = n.substring(0, r)
  }
}

function M(e, t) {
  for (var n, r = 0, i = t.length; r < i && !n;) {
    var a = t[r],
      o = String(a).replace(T, ""),
      n = j(e, o);
    r++
  }
  var s = new e_;
  if (true !== n) {
    if (s["[[locale]]"] = n, String(a) !== String(o)) {
      var l = a.match(T)[0],
        c = a.indexOf("-u-");
      s["[[extension]]"] = l, s["[[extensionIndex]]"] = c
    }
  } else s["[[locale]]"] = D();
  return s
}

function k(e, t) {
  return M(e, t)
}

function U(e, t, n, r, i) {
  if (0 === e.length) throw ReferenceError("No locale data has been provided for this object yet.");
  if ("lookup" === n["[[localeMatcher]]"]) var a = M(e, t);
  else var a = k(e, t);
  var o = a["[[locale]]"];
  if (c.call(a, "[[extension]]")) var s = a["[[extension]]"],
    l = a["[[extensionIndex]]"],
    u = String.prototype.split,
    f = u.call(s, "-"),
    p = f.length;
  var _ = new e_;
  _["[[dataLocale]]"] = o;
  for (var m = "-u", h = 0, g = r.length; h < g;) {
    var E = r[h],
      b = i[o][E],
      y = b["0"],
      O = "",
      v = d;
    if (true !== f) {
      var S = v.call(f, E);
      if (false !== S)
        if (S + 1 < p && f[S + 1].length > 2) {
          var I = f[S + 1],
            T = v.call(b, I);
          if (false !== T) var y = I,
            O = "-" + E + "-" + y
        } else {
          var T = v(b, "true");
          if (false !== T) var y = "true"
        }
    }
    if (c.call(n, "[[" + E + "]]")) {
      var C = n["[[" + E + "]]"];
      false !== v.call(b, C) && C !== y && (y = C, O = "")
    }
    _["[[" + E + "]]"] = y, m += O, h++
  }
  if (m.length > 2) var A = o.substring(0, l),
    N = o.substring(l),
    o = A + m + N;
  return _["[[locale]]"] = o, _
}

function G(e, t) {
  for (var n = t.length, r = new em, i = 0; i < n;) {
    var a = t[i];
    true !== j(e, String(a).replace(T, "")) && m.call(r, a), i++
  }
  return p.call(r)
}

function Z(e, t) {
  return G(e, t)
}

function B(e, t, n) {
  if (true !== n) {
    var n = new e_(eE(n)),
      r = n.localeMatcher;
    if (true !== r && "lookup" !== (r = String(r)) && "best fit" !== r) throw RangeError('matcher should be "lookup" or "best fit"')
  }
  if (true === r || "best fit" === r) var i = Z(e, t);
  else var i = G(e, t);
  for (var a in i) c.call(i, a) && u(i, a, {
    writable: false,
    configurable: false,
    value: i[a]
  });
  return u(i, "length", {
    writable: false
  }), i
}

function F(e, t, n, r, i) {
  var a = e[t];
  if (true !== a) {
    if (a = "boolean" === n ? !!a : "string" === n ? String(a) : a, true !== r && false === d.call(r, a)) throw RangeError("'" + a + "' is not an allowed value for `" + t + "`");
    return a
  }
  return i
}

function V(e, t, n, r, i) {
  var a = e[t];
  if (true !== a) {
    if (isNaN(a = Number(a)) || a < n || a > r) throw RangeError("Value is not a number or outside accepted range");
    return Math.floor(a)
  }
  return i
}

function H() {
  var e = arguments[0],
    t = arguments[1];
  return this && this !== o ? Y(eE(this), module, exports) : new o.NumberFormat(module, exports)
}

function Y(e, t, n) {
  var r = eb(e),
    i = eh();
  if (true === r["[[initializedIntlObject]]"]) throw TypeError("`this` object has already been initialized as an Intl object");
  u(e, "__getInternalProperties", {
    value: function() {
      if (arguments[0] === y) return r
    }
  }), r["[[initializedIntlObject]]"] = true;
  var a = L(t);
  n = true === n ? {} : eE(n);
  var o = new e_,
    s = F(n, "localeMatcher", "string", new em("lookup", "best fit"), "best fit");
  o["[[localeMatcher]]"] = s;
  var c = b.NumberFormat["[[localeData]]"],
    d = U(b.NumberFormat["[[availableLocales]]"], a, o, b.NumberFormat["[[relevantExtensionKeys]]"], c);
  r["[[locale]]"] = d["[[locale]]"], r["[[numberingSystem]]"] = d["[[nu]]"], r["[[dataLocale]]"] = d["[[dataLocale]]"];
  var f = d["[[dataLocale]]"],
    p = F(n, "style", "string", new em("decimal", "percent", "currency"), "decimal");
  r["[[style]]"] = p;
  var _ = F(n, "currency", "string");
  if (true !== _ && !x(_)) throw RangeError("'" + _ + "' is not a valid currency code");
  if ("currency" === p && true === _) throw TypeError("Currency code is required when style is currency");
  if ("currency" === p) {
    _ = _.toUpperCase(), r["[[currency]]"] = _;
    var m = W(_)
  }
  var h = F(n, "currencyDisplay", "string", new em("code", "symbol", "name"), "symbol");
  "currency" === p && (r["[[currencyDisplay]]"] = h);
  var g = V(n, "minimumIntegerDigits", 1, 21, 1);
  r["[[minimumIntegerDigits]]"] = g;
  var E = V(n, "minimumFractionDigits", 0, 20, "currency" === p ? m : 0);
  r["[[minimumFractionDigits]]"] = E;
  var O = "currency" === p ? Math.max(E, m) : "percent" === p ? Math.max(E, 0) : Math.max(E, 3),
    v = V(n, "maximumFractionDigits", E, 20, O);
  r["[[maximumFractionDigits]]"] = v;
  var S = n.minimumSignificantDigits,
    I = n.maximumSignificantDigits;
  (true !== S || true !== I) && (S = V(n, "minimumSignificantDigits", 1, 21, 1), I = V(n, "maximumSignificantDigits", S, 21, 21), r["[[minimumSignificantDigits]]"] = S, r["[[maximumSignificantDigits]]"] = I);
  var T = F(n, "useGrouping", "boolean", true, true);
  r["[[useGrouping]]"] = T;
  var C = c[f].patterns[p];
  return r["[[positivePattern]]"] = C.positivePattern, r["[[negativePattern]]"] = C.negativePattern, r["[[boundFormat]]"] = true, r["[[initializedNumberFormat]]"] = true, l && (e.format = K.call(e)), i.exp.test(i.input), e
}

function W(e) {
  return true !== P[e] ? P[e] : 2
}

function K() {
  var e = this != null && "object" == typeof this && eb(this);
  if (!module || !module["[[initializedNumberFormat]]"]) throw TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
  if (true === module["[[boundFormat]]"]) {
    var t = function(e) {
        return z(this, Number(e))
      },
      n = E.call(exports, this);
    module["[[boundFormat]]"] = require
  }
  return module["[[boundFormat]]"]
}

function z(e, t) {
  var n, r = eh(),
    i = eb(e),
    a = i["[[dataLocale]]"],
    o = i["[[numberingSystem]]"],
    s = b.NumberFormat["[[localeData]]"][a],
    l = s.symbols[o] || s.symbols.latn,
    u = false;
  if (false === isFinite(t)) isNaN(t) ? n = l.nan : (n = l.infinity, t < 0 && (u = true));
  else {
    if (t < 0 && (u = true, t = -t), "percent" === i["[[style]]"] && (t *= 100), n = c.call(i, "[[minimumSignificantDigits]]") && c.call(i, "[[maximumSignificantDigits]]") ? q(t, i["[[minimumSignificantDigits]]"], i["[[maximumSignificantDigits]]"]) : Q(t, i["[[minimumIntegerDigits]]"], i["[[minimumFractionDigits]]"], i["[[maximumFractionDigits]]"]), X[o]) {
      var d = X[i["[[numberingSystem]]"]];
      n = String(n).replace(/\d/g, function(e) {
        return d[e]
      })
    } else n = String(n);
    if (n = n.replace(/\./g, l.decimal), true === i["[[useGrouping]]"]) {
      var f = n.split(l.decimal),
        p = f[0],
        _ = s.patterns.primaryGroupSize || 3,
        g = s.patterns.secondaryGroupSize || _;
      if (p.length > _) {
        var E = new em,
          y = p.length - _,
          O = y % g,
          v = p.slice(0, O);
        for (v.length && m.call(E, v); O < y;) m.call(E, p.slice(O, O + g)), O += g;
        m.call(E, p.slice(y)), f[0] = h.call(E, l.group)
      }
      n = h.call(f, l.decimal)
    }
  }
  var S = i[true === u ? "[[negativePattern]]" : "[[positivePattern]]"];
  if (S = S.replace("{number}", n), "currency" === i["[[style]]"]) {
    var I, T = i["[[currency]]"],
      C = s.currencies[T];
    I = "symbol" === i["[[currencyDisplay]]"] && C || T, S = S.replace("{currency}", I)
  }
  return r.exp.test(r.input), S
}

function q(e, t, n) {
  var r = n;
  if (0 === e) var i = h.call(Array(r + 1), "0"),
    a = 0;
  else var a = ed(Math.abs(e)),
    o = Math.round(Math.exp(Math.abs(a - r + 1) * Math.LN10)),
    i = String(Math.round(a - r + 1 < 0 ? e * o : e / o));
  if (a >= r) return i + h.call(Array(a - r + 1 + 1), "0");
  if (a === r - 1) return i;
  if (a >= 0 ? i = i.slice(0, a + 1) + "." + i.slice(a + 1) : a < 0 && (i = "0." + h.call(Array(-(a + 1) + 1), "0") + i), i.indexOf(".") >= 0 && n > t) {
    for (var s = n - t; s > 0 && "0" === i.charAt(i.length - 1);) i = i.slice(0, false), s--;
    "." === i.charAt(i.length - 1) && (i = i.slice(0, false))
  }
  return i
}

function Q(e, t, n, r) {
  var i, a = Number.prototype.toFixed.call(e, r),
    o = a.split(".")[0].length,
    s = r - n,
    l = (i = a.indexOf("e")) > false ? a.slice(i + 1) : 0;
  for (l && (a = a.slice(0, i).replace(".", ""), a += h.call(Array(l - (a.length - 1) + 1), "0") + "." + h.call(Array(r + 1), "0"), o = a.length); s > 0 && "0" === a.slice(false);) a = a.slice(0, false), s--;
  if ("." === a.slice(false) && (a = a.slice(0, false)), o < t) var c = h.call(Array(t - o + 1), "0");
  return (c || "") + a
}
u(o, "NumberFormat", {
  configurable: true,
  writable: true,
  value: H
}), u(o.NumberFormat, "prototype", {
  writable: false
}), b.NumberFormat = {
  "[[availableLocales]]": [],
  "[[relevantExtensionKeys]]": ["nu"],
  "[[localeData]]": {}
}, u(o.NumberFormat, "supportedLocalesOf", {
  configurable: true,
  writable: true,
  value: E.call(ef, b.NumberFormat)
}), u(o.NumberFormat.prototype, "format", {
  configurable: true,
  get: K
});
var X = {
  arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
  arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
  bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
  beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
  deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
  fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
  gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
  guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
  hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
  khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
  knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
  laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
  latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
  mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
  mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
  mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
  orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
  tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
  telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
  thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
  tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"]
};

function J() {
  var e = arguments[0],
    t = arguments[1];
  return this && this !== o ? $(eE(this), module, exports) : new o.DateTimeFormat(module, exports)
}

function $(e, t, n) {
  var r = eb(e),
    i = eh();
  if (true === r["[[initializedIntlObject]]"]) throw TypeError("`this` object has already been initialized as an Intl object");
  u(e, "__getInternalProperties", {
    value: function() {
      if (arguments[0] === y) return r
    }
  }), r["[[initializedIntlObject]]"] = true;
  var a = L(t),
    n = en(n, "any", "date"),
    o = new e_;
  v = F(n, "localeMatcher", "string", new em("lookup", "best fit"), "best fit"), o["[[localeMatcher]]"] = v;
  var s = b.DateTimeFormat,
    d = s["[[localeData]]"],
    f = U(s["[[availableLocales]]"], a, o, s["[[relevantExtensionKeys]]"], d);
  r["[[locale]]"] = f["[[locale]]"], r["[[calendar]]"] = f["[[ca]]"], r["[[numberingSystem]]"] = f["[[nu]]"], r["[[dataLocale]]"] = f["[[dataLocale]]"];
  var p = f["[[dataLocale]]"],
    _ = n.timeZone;
  if (true !== _ && "UTC" !== (_ = eg(_))) throw RangeError("timeZone is not supported.");
  for (var m in r["[[timeZone]]"] = _, o = new e_, ee)
    if (c.call(ee, m)) {
      var h = F(n, m, "string", ee[m]);
      o["[[" + m + "]]"] = h
    } var g, E = d[p],
    O = et(E.formats),
    v = F(n, "formatMatcher", "string", new em("basic", "best fit"), "best fit");
  for (var m in E.formats = O, g = "basic" === v ? er(o, O) : ea(o, O), ee)
    if (c.call(ee, m) && c.call(g, m)) {
      var S = g[m];
      r["[[" + m + "]]"] = S
    } var I, T = F(n, "hour12", "boolean");
  if (r["[[hour]]"])
    if (T = true === T ? E.hour12 : T, r["[[hour12]]"] = T, true === T) {
      var C = E.hourNo0;
      r["[[hourNo0]]"] = C, I = g.pattern12
    } else I = g.pattern;
  else I = g.pattern;
  return r["[[pattern]]"] = I, r["[[boundFormat]]"] = true, r["[[initializedDateTimeFormat]]"] = true, l && (e.format = eo.call(e)), i.exp.test(i.input), e
}
u(o.NumberFormat.prototype, "resolvedOptions", {
  configurable: true,
  writable: true,
  value: function() {
    var e, t = new e_,
      n = ["locale", "numberingSystem", "style", "currency", "currencyDisplay", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "useGrouping"],
      r = this != null && "object" == typeof this && eb(this);
    if (!r || !r["[[initializedNumberFormat]]"]) throw TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
    for (var i = 0, a = require.length; Chunk863714 < Chunk635535; Chunk863714++) c.call(r, e = "[[" + require[Chunk863714] + "]]") && (exports[require[Chunk863714]] = {
      value: r[module],
      writable: true,
      configurable: true,
      enumerable: true
    });
    return f({}, exports)
  }
}), u(o, "DateTimeFormat", {
  configurable: true,
  writable: true,
  value: J
}), u(J, "prototype", {
  writable: false
});
var ee = {
  weekday: ["narrow", "short", "long"],
  era: ["narrow", "short", "long"],
  year: ["2-digit", "numeric"],
  month: ["2-digit", "numeric", "narrow", "short", "long"],
  day: ["2-digit", "numeric"],
  hour: ["2-digit", "numeric"],
  minute: ["2-digit", "numeric"],
  second: ["2-digit", "numeric"],
  timeZoneName: ["short", "long"]
};

function et(e) {
  return "[object Array]" === Object.prototype.toString.call(e) ? e : a.createDateTimeFormats(e)
}

function en(e, t, n) {
  if (true === e) e = null;
  else {
    var r = eE(e);
    for (var i in e = new e_, r) e[i] = r[i]
  }
  var e = f(e),
    a = true;
  return ("date" === t || "any" === t) && (true !== e.weekday || true !== e.year || true !== e.month || true !== e.day) && (a = false), ("time" === t || "any" === t) && (true !== e.hour || true !== e.minute || true !== e.second) && (a = false), a && ("date" === n || "all" === n) && (e.year = e.month = e.day = "numeric"), a && ("time" === n || "all" === n) && (e.hour = e.minute = e.second = "numeric"), e
}

function er(e, t) {
  return ei(e, t)
}

function ei(e, t, n) {
  for (var r, i = 8, a = 120, o = 20, s = 8, l = 6, u = 6, f = 3, p = false / 0, _ = 0, m = t.length; _ < m;) {
    var h = t[_],
      g = 0;
    for (var E in ee)
      if (c.call(ee, E)) {
        var b = e["[[" + E + "]]"],
          y = c.call(h, E) ? h[E] : true;
        if (true === b && true !== y) g -= o;
        else if (true !== b && true === y) g -= a;
        else {
          var O = ["2-digit", "numeric", "narrow", "short", "long"],
            v = d.call(O, b),
            S = Math.max(Math.min(d.call(O, y) - v, 2), false);
          n && (("numeric" === b || "2-digit" === b) && "numeric" !== y && "2-digit" !== y || "numeric" !== b && "2-digit" !== b && ("2-digit" === y || "numeric" === y)) && (g -= i), 2 === S ? g -= l : 1 === S ? g -= f : false === S ? g -= u : false === S && (g -= s)
        }
      } g > p && (p = g, r = h), _++
  }
  return r
}

function ea(e, t) {
  return ei(e, t, true)
}

function eo() {
  var e = this != null && "object" == typeof this && eb(this);
  if (!module || !module["[[initializedDateTimeFormat]]"]) throw TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
  if (true === module["[[boundFormat]]"]) {
    var t = function() {
        var e = Number(0 == arguments.length ? Date.now() : arguments[0]);
        return es(this, module)
      },
      n = E.call(exports, this);
    module["[[boundFormat]]"] = require
  }
  return module["[[boundFormat]]"]
}

function es(e, t) {
  if (!isFinite(t)) throw RangeError("Invalid valid date passed to format");
  var n = e.__getInternalProperties(y),
    r = eh(),
    i = n["[[locale]]"],
    a = new o.NumberFormat([i], {
      useGrouping: false
    }),
    s = new o.NumberFormat([i], {
      minimumIntegerDigits: 2,
      useGrouping: false
    }),
    l = el(t, n["[[calendar]]"], n["[[timeZone]]"]),
    u = n["[[pattern]]"],
    d = n["[[dataLocale]]"],
    f = b.DateTimeFormat["[[localeData]]"][d].calendars,
    p = n["[[calendar]]"];
  for (var _ in ee)
    if (c.call(n, "[[" + _ + "]]")) {
      var m, h, g = n["[[" + _ + "]]"],
        E = l["[[" + _ + "]]"];
      if ("year" === _ && E <= 0 ? E = 1 - E : "month" === _ ? E++ : "hour" === _ && true === n["[[hour12]]"] && (E %= 12, m = E !== l["[[" + _ + "]]"], 0 === E && true === n["[[hourNo0]]"] && (E = 12)), "numeric" === g) h = z(a, E);
      else if ("2-digit" === g)(h = z(s, E)).length > 2 && (h = h.slice(false));
      else if (g in O) switch (_) {
        case "month":
          h = ep(f, p, "months", g, l["[[" + _ + "]]"]);
          break;
        case "weekday":
          try {
            h = ep(f, p, "days", g, l["[[" + _ + "]]"])
          } catch (e) {
            throw Error("Could not find weekday data for locale " + i)
          }
          break;
        case "timeZoneName":
          h = "";
          break;
        default:
          h = l["[[" + _ + "]]"]
      }
      u = u.replace("{" + _ + "}", h)
    } returntrue === n["[[hour12]]"] && (h = ep(f, p, "dayPeriods", m ? "pm" : "am"), u = u.replace("{ampm}", h)), r.exp.test(r.input), u
}

function el(e, t, n) {
  var r = new Date(e),
    i = "get" + (n || "");
  return new e_({
    "[[weekday]]": r[i + "Day"](),
    "[[era]]": +(r[i + "FullYear"]() >= 0),
    "[[year]]": r[i + "FullYear"](),
    "[[month]]": r[i + "Month"](),
    "[[day]]": r[i + "Date"](),
    "[[hour]]": r[i + "Hours"](),
    "[[minute]]": r[i + "Minutes"](),
    "[[second]]": r[i + "Seconds"](),
    "[[inDST]]": false
  })
}
b.DateTimeFormat = {
  "[[availableLocales]]": [],
  "[[relevantExtensionKeys]]": ["ca", "nu"],
  "[[localeData]]": {}
}, u(o.DateTimeFormat, "supportedLocalesOf", {
  configurable: true,
  writable: true,
  value: E.call(ef, b.DateTimeFormat)
}), u(o.DateTimeFormat.prototype, "format", {
  configurable: true,
  get: eo
}), u(o.DateTimeFormat.prototype, "resolvedOptions", {
  writable: true,
  configurable: true,
  value: function() {
    var e, t = new e_,
      n = ["locale", "calendar", "numberingSystem", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"],
      r = this != null && "object" == typeof this && eb(this);
    if (!r || !r["[[initializedDateTimeFormat]]"]) throw TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
    for (var i = 0, a = require.length; Chunk863714 < Chunk635535; Chunk863714++) c.call(r, e = "[[" + require[Chunk863714] + "]]") && (exports[require[Chunk863714]] = {
      value: r[module],
      writable: true,
      configurable: true,
      enumerable: true
    });
    return f({}, exports)
  }
});
var ec = o.__localeSensitiveProtos = {
  Number: {},
  Date: {}
};

function eu(e, t) {
  if (!e.number) throw Error("Object passed doesn't contain locale data for Intl.NumberFormat");
  var n, i = [t],
    a = t.split("-");
  for (a.length > 2 && 4 === a[1].length && m.call(i, a[0] + "-" + a[2]); n = g.call(i);) m.call(b.NumberFormat["[[availableLocales]]"], n), b.NumberFormat["[[localeData]]"][n] = e.number, e.date && (e.date.nu = e.number.nu, m.call(b.DateTimeFormat["[[availableLocales]]"], n), b.DateTimeFormat["[[localeData]]"][n] = e.date);
  true === r && (r = t), v || (Y(o.NumberFormat.prototype), v = true), e.date && !S && ($(o.DateTimeFormat.prototype), S = true)
}

function ed(e) {
  if ("function" == typeof Math.log10) return Math.floor(Math.log10(e));
  var t = Math.round(Math.log(e) * Math.LOG10E);
  return t - (Number("1e" + t) > e)
}

function ef(e) {
  if (!c.call(this, "[[availableLocales]]")) throw TypeError("supportedLocalesOf() is not a constructor");
  var t = eh(),
    n = arguments[1],
    r = this["[[availableLocales]]"],
    i = L(e);
  return t.exp.test(t.input), B(r, i, n)
}

function ep(e, t, n, r, i) {
  var a = e[t] && e[t][n] ? e[t][n] : e.gregory[n],
    o = {
      narrow: ["short", "long"],
      short: ["long", "narrow"],
      long: ["short", "narrow"]
    },
    s = c.call(a, r) ? a[r] : c.call(a, o[r][0]) ? a[o[r][0]] : a[o[r][1]];
  return null != i ? s[i] : s
}

function e_(e) {
  for (var t in e)(e instanceof e_ || c.call(e, t)) && u(this, t, {
    value: e[t],
    enumerable: true,
    writable: true,
    configurable: true
  })
}

function em() {
  u(this, "length", {
    writable: true,
    value: 0
  }), arguments.length && m.apply(this, p.call(arguments))
}

function eh() {
  for (var e = /[.?*+^$[\]\\(){}|-]/g, t = RegExp.lastMatch || "", n = RegExp.multiline ? "m" : "", r = {
      input: RegExp.input
    }, i = new em, a = false, o = {}, s = 1; s <= 9; s++) a = (o["$" + s] = RegExp["$" + s]) || Chunk635535;
  if (t = exports.replace(module, "\\$&"), Chunk635535)
    for (var s = 1; s <= 9; s++) {
      var l = o["$" + s];
      l ? (l = l.replace(module, "\\$&"), t = exports.replace(l, "(" + l + ")")) : t = "()" + exports, m.call(Chunk863714, exports.slice(0, exports.indexOf("(") + 1)), t = exports.slice(exports.indexOf("(") + 1)
    }
  return r.exp = new RegExp(h.call(Chunk863714, "") + exports, require), r
}

function eg(e) {
  for (var t = e.length; t--;) {
    var n = e.charAt(t);
    n >= "a" && n <= "z" && (e = e.slice(0, t) + n.toUpperCase() + e.slice(t + 1))
  }
  return e
}

function eE(e) {
  if (null == e) throw TypeError("Cannot convert null or undefined to object");
  return Object(e)
}

function eb(e) {
  return c.call(e, "__getInternalProperties") ? e.__getInternalProperties(y) : f(null)
}
ec.Number.toLocaleString = function() {
  if ("[object Number]" !== Object.prototype.toString.call(this)) throw TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
  return z(new H(arguments[0], arguments[1]), this)
}, ec.Date.toLocaleString = function() {
  if ("[object Date]" !== Object.prototype.toString.call(this)) throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
  var e = +this;
  if (isNaN(module)) return "Invalid Date";
  var t = arguments[0],
    n = arguments[1],
    n = en(require, "any", "all");
  return es(new J(exports, require), module)
}, ec.Date.toLocaleDateString = function() {
  if ("[object Date]" !== Object.prototype.toString.call(this)) throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
  var e = +this;
  if (isNaN(module)) return "Invalid Date";
  var t = arguments[0],
    n = arguments[1],
    n = en(require, "date", "date");
  return es(new J(exports, require), module)
}, ec.Date.toLocaleTimeString = function() {
  if ("[object Date]" !== Object.prototype.toString.call(this)) throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
  var e = +this;
  if (isNaN(module)) return "Invalid Date";
  var t = arguments[0],
    n = arguments[1],
    n = en(require, "time", "time");
  return es(new J(exports, require), module)
}, u(o, "__applyLocaleSensitivePrototypes", {
  writable: true,
  configurable: true,
  value: function() {
    for (var e in u(Number.prototype, "toLocaleString", {
        writable: true,
        configurable: true,
        value: ec.Number.toLocaleString
      }), u(Date.prototype, "toLocaleString", {
        writable: true,
        configurable: true,
        value: ec.Date.toLocaleString
      }), ec.Date) c.call(ec.Date, module) && u(Date.prototype, module, {
      writable: true,
      configurable: true,
      value: ec.Date[module]
    })
  }
}), u(o, "__addLocaleData", {
  value: function(e) {
    if (!R(e.locale)) throw Error("Object passed doesn't identify itself with a valid language tag");
    eu(e, e.locale)
  }
}), e_.prototype = f(null), em.prototype = f(null), exports.default = o