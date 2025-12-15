/** Chunk was on 35770 **/
/** chunk id: 152989, original params: n,r,e (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => t
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./415506.js"), require("./66299.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./189980.js"), require("./410992.js"), require("./82823.js"), require("./491343.js"), require("./259475.js"), require("./17294.js"), require("./733314.js"), require("./539854.js"), require("./980754.js");
let t = async function() {
  let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  var r, t, i, a, o, u, c, s, f, l, h, b, d, m, p, g, v, w, A, y = "";
  try {
    y = new URL(".", "file:///ci/build/discord/discord/discord_app/modules/image_cropping/web/webp/libwebp/webp_wasm.js").href
  } catch (n) {}
  r = async n => {
    var r = await fetch(n, {
      credentials: "same-origin"
    });
    if (r.ok) return r.arrayBuffer();
    throw Error(r.status + " : " + r.url)
  };
  var P = console.log.bind(console),
    _ = console.error.bind(console),
    I = false,
    W = false;

  function E() {
    var r = w.buffer;
    module.HEAP8 = u = new Int8Array(exports), module.HEAP16 = s = new Int16Array(exports), module.HEAPU8 = c = new Uint8Array(exports), module.HEAPU16 = new Uint16Array(exports), module.HEAP32 = f = new Int32Array(exports), module.HEAPU32 = l = new Uint32Array(exports), module.HEAPF32 = h = new Float32Array(exports), module.HEAPF64 = b = new Float64Array(exports), d = new BigInt64Array(exports), new BigUint64Array(exports)
  }

  function R(r) {
    null == (e = n.onAbort) || e.call(n, r), _(r = "Aborted(" + r + ")"), I = true, r += ". Build with -sASSERTIONS for more info.";
    var e, t = new WebAssembly.RuntimeError(r);
    throw null == o || o(t), t
  }
  async function k(n) {
    if (!i) try {
      var e = await r(n);
      return new Uint8Array(e)
    } catch (n) {}
    if (n == m && i) return new Uint8Array(i);
    if (t) return t(n);
    throw "both async and sync fetching of the wasm failed"
  }
  async function U(n, r) {
    try {
      var e = await k(n);
      return await WebAssembly.instantiate(e, r)
    } catch (n) {
      _("failed to asynchronously prepare wasm: ".concat(n)), R(n)
    }
  }
  async function C(n, r, e) {
    if (!n) try {
      var t = fetch(r, {
        credentials: "same-origin"
      });
      return await WebAssembly.instantiateStreaming(t, e)
    } catch (n) {
      _("wasm streaming compile failed: ".concat(n)), _("falling back to ArrayBuffer instantiation")
    }
    return U(r, e)
  }
  async function F() {
    function r(r, e) {
      var t;
      return n._WebPConfigInitInternal = (t = A = r.exports).f, n._WebPPictureInitInternal = t.g, n._WebPPictureAlloc = t.h, n._WebPPictureFree = t.i, n._WebPPictureImportRGBA = t.j, n._WebPEncode = t.k, n._WebPFree = t.l, n._WebPAnimDecoderOptionsInitInternal = t.m, n._WebPAnimDecoderNewInternal = t.n, n._WebPAnimDecoderDelete = t.o, n._WebPAnimDecoderGetInfo = t.p, n._WebPAnimDecoderGetNext = t.q, n._WebPAnimDecoderHasMoreFrames = t.r, n._WebPAnimEncoderOptionsInitInternal = t.s, n._WebPAnimEncoderNewInternal = t.t, n._WebPAnimEncoderDelete = t.u, n._WebPAnimEncoderAdd = t.v, n._WebPAnimEncoderAssemble = t.w, n._WebPAnimEncoderGetError = t.x, n._malloc = t.y, n._free = t.z, p = t.A, g = t.B, v = t.C, w = t.d, t.__indirect_function_table, E(), A
    }
    var t = {
      a: K
    };
    return module.instantiateWasm ? new Promise((e, i) => {
      n.instantiateWasm(t, (n, t) => {
        e(r(n, t))
      })
    }) : (null != m || (m = function() {
      if (module.locateFile) {
        var r;
        return r = "webp_wasm.wasm", module.locateFile ? module.locateFile(exports, y) : y + exports
      }
      return new URL(require("./432362.js"), require.b).href
    }()), exports((await C(i, m, t)).instance))
  }
  var S = r => {
      for (; r.length > 0;) r.shift()(n)
    },
    x = [],
    B = n => x.push(n),
    D = [],
    T = n => D.push(n),
    H = () => v(),
    M = (n, r) => Math.ceil(n / r) * r,
    G = n => {
      var r = w.buffer.byteLength;
      try {
        return w.grow((n - r + 65535) / 65536 | 0), E(), 1
      } catch (n) {}
    },
    N = [null, [],
      []
    ],
    V = globalThis.TextDecoder && new TextDecoder,
    L = function(n) {
      let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
        e = arguments.length > 2 ? arguments[2] : true,
        t = arguments.length > 3 ? arguments[3] : true;
      var i = ((n, r, e, t) => {
        var i = r + e;
        if (t) return i;
        for (; n[r] && !(r >= i);) ++r;
        return r
      })(n, r, e, t);
      if (i - r > 16 && n.buffer && V) return V.decode(n.subarray(r, i));
      for (var a = ""; r < i;) {
        var o = n[r++];
        if (!(128 & o)) {
          a += String.fromCharCode(o);
          continue
        }
        var u = 63 & n[r++];
        if ((224 & o) == 192) {
          a += String.fromCharCode((31 & o) << 6 | u);
          continue
        }
        var c = 63 & n[r++];
        if ((o = (240 & o) == 224 ? (15 & o) << 12 | u << 6 | c : (7 & o) << 18 | u << 12 | c << 6 | 63 & n[r++]) < 65536) a += String.fromCharCode(o);
        else {
          var s = o - 65536;
          a += String.fromCharCode(55296 | s >> 10, 56320 | 1023 & s)
        }
      }
      return a
    },
    O = (n, r) => {
      var e = N[n];
      0 === r || 10 === r ? ((1 === n ? P : _)(L(e)), e.length = 0) : e.push(r)
    },
    j = (n, r, e) => n ? L(c, n, r, e) : "",
    z = r => n["_" + r],
    q = n => g(n),
    J = (n, r, e, t, i) => {
      var a = {
          string: n => {
            var r, e, t, i = 0;
            return null != n && 0 !== n && (t = q(e = (n => {
              for (var r = 0, e = 0; e < n.length; ++e) {
                var t = n.charCodeAt(e);
                t <= 127 ? r++ : t <= 2047 ? r += 2 : t >= 55296 && t <= 57343 ? (r += 4, ++e) : r += 3
              }
              return r
            })(r = n) + 1), ((n, r, e, t) => {
              if (t > 0) {
                for (var i = e + t - 1, a = 0; a < n.length; ++a) {
                  var o = n.codePointAt(a);
                  if (o <= 127) {
                    if (e >= i) break;
                    r[e++] = o
                  } else if (o <= 2047) {
                    if (e + 1 >= i) break;
                    r[e++] = 192 | o >> 6, r[e++] = 128 | 63 & o
                  } else if (o <= 65535) {
                    if (e + 2 >= i) break;
                    r[e++] = 224 | o >> 12, r[e++] = 128 | o >> 6 & 63, r[e++] = 128 | 63 & o
                  } else {
                    if (e + 3 >= i) break;
                    r[e++] = 240 | o >> 18, r[e++] = 128 | o >> 12 & 63, r[e++] = 128 | o >> 6 & 63, r[e++] = 128 | 63 & o, a++
                  }
                }
                return r[e] = 0
              }
            })(r, c, t, e), i = t), i
          },
          array: n => {
            var r = q(n.length);
            return u.set(n, r), r
          }
        },
        o = z(n),
        s = [],
        f = 0;
      if (t)
        for (var l = 0; l < t.length; l++) {
          var h = a[e[l]];
          h ? (0 === f && (f = H()), s[l] = h(t[l])) : s[l] = t[l]
        }
      var b = o(...s);
      return function(n) {
        return 0 !== f && p(f), "string" === r ? j(n) : "boolean" === r ? !!n : n
      }(b)
    };
  if (module.noExitRuntime && module.noExitRuntime, module.print && (P = module.print), module.printErr && (_ = module.printErr), module.wasmBinary && (i = module.wasmBinary), module.arguments && module.arguments, module.thisProgram && module.thisProgram, module.preInit)
    for ("function" == typeof module.preInit && (module.preInit = [module.preInit]); module.preInit.length > 0;) module.preInit.shift()();
  module.ccall = J, module.cwrap = (n, r, e, t) => {
    var i = !e || e.every(n => "number" === n || "boolean" === n);
    return "string" !== r && i && !t ? z(n) : function() {
      for (var i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return J(n, r, e, a, t)
    }
  }, module.setValue = function(n, r) {
    let e = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "i8";
    switch (e.endsWith("*") && (e = "*"), e) {
      case "i1":
      case "i8":
        u[n] = r;
        break;
      case "i16":
        s[n >> 1] = r;
        break;
      case "i32":
        f[n >> 2] = r;
        break;
      case "i64":
        d[n >> 3] = BigInt(r);
        break;
      case "float":
        h[n >> 2] = r;
        break;
      case "double":
        b[n >> 3] = r;
        break;
      case "*":
        l[n >> 2] = r;
        break;
      default:
        R("invalid type for setValue: ".concat(e))
    }
  }, module.getValue = function(n) {
    let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "i8";
    switch (r.endsWith("*") && (r = "*"), r) {
      case "i1":
      case "i8":
        return u[n];
      case "i16":
        return s[n >> 1];
      case "i32":
        return f[n >> 2];
      case "i64":
        return d[n >> 3];
      case "float":
        return h[n >> 2];
      case "double":
        return b[n >> 3];
      case "*":
        return l[n >> 2];
      default:
        R("invalid type for getValue: ".concat(r))
    }
  }, module.UTF8ToString = j;
  var K = {
    c: n => {
      var r = c.length;
      if ((n >>>= 0) > 0x80000000) returnfalse;
      for (var e = 1; e <= 4; e *= 2) {
        var t = r * (1 + .2 / e);
        if (t = Math.min(t, n + 0x6000000), G(Math.min(0x80000000, M(Math.max(n, t), 65536)))) returntrue
      }
      returnfalse
    },
    b: n => 52,
    a: (n, r, e, t) => {
      for (var i = 0, a = 0; a < e; a++) {
        var o = l[r >> 2],
          u = l[r + 4 >> 2];
        r += 8;
        for (var s = 0; s < u; s++) O(n, c[o + s]);
        i += u
      }
      return l[t >> 2] = i, 0
    }
  };
  if (A = await F(), module.preRun)
    for ("function" == typeof module.preRun && (module.preRun = [module.preRun]); module.preRun.length;) T(module.preRun.shift());

  function Q() {
    var r;
    if (module.calledRun = true, !I) {
      if (W = true, A.e(), null == a || a(module), null == (r = module.onRuntimeInitialized) || exports.call(module), module.postRun)
        for ("function" == typeof module.postRun && (module.postRun = [module.postRun]); module.postRun.length;) B(module.postRun.shift());
      S(x)
    }
  }
  return S(D), module.setStatus ? (module.setStatus("Running..."), setTimeout(() => {
    setTimeout(() => module.setStatus(""), 1), Q()
  }, 1)) : Q(), W ? module : new Promise((n, r) => {
    a = n, o = r
  })
}