/** Chunk was on web.js **/
/** chunk id: 827834, original params: e,t (module,exports,re quire) **/
"use strict";
exports.default = function() {
  function e(e, t, n, r, i, o) {
    this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = i, this.column = o, this.name = "SyntaxError"
  }

  function t(t) {
    var n, r = arguments.length > 1 ? arguments[1] : {},
      i = {},
      o = {
        start: ew
      },
      a = ew,
      s = function(e) {
        return {
          type: "messageFormatPattern",
          elements: e
        }
      },
      l = i,
      c = function(e) {
        var t, n, r, i, o, a = "";
        for (t = 0, r = e.length; t < r; t += 1)
          for (n = 0, o = (i = e[t]).length; n < o; n += 1) a += i[n];
        return a
      },
      u = function(e) {
        return {
          type: "messageTextElement",
          value: e
        }
      },
      d = /^[^ \t\n\r,.+={}#]/,
      f = {
        type: "class",
        value: "[^ \\t\\n\\r,.+={}#]",
        description: "[^ \\t\\n\\r,.+={}#]"
      },
      p = "{",
      _ = {
        type: "literal",
        value: "{",
        description: '"{"'
      },
      m = null,
      h = ",",
      g = {
        type: "literal",
        value: ",",
        description: '","'
      },
      E = "}",
      b = {
        type: "literal",
        value: "}",
        description: '"}"'
      },
      y = function(e, t) {
        return {
          type: "argumentElement",
          id: e,
          format: t && t[2]
        }
      },
      O = "number",
      v = {
        type: "literal",
        value: "number",
        description: '"number"'
      },
      S = "date",
      I = {
        type: "literal",
        value: "date",
        description: '"date"'
      },
      T = "time",
      C = {
        type: "literal",
        value: "time",
        description: '"time"'
      },
      A = function(e, t) {
        return {
          type: e + "Format",
          style: t && t[2]
        }
      },
      N = "plural",
      P = {
        type: "literal",
        value: "plural",
        description: '"plural"'
      },
      R = function(e) {
        return {
          type: e.type,
          ordinal: false,
          offset: e.offset || 0,
          options: e.options
        }
      },
      w = "selectordinal",
      D = {
        type: "literal",
        value: "selectordinal",
        description: '"selectordinal"'
      },
      x = function(e) {
        return {
          type: e.type,
          ordinal: true,
          offset: e.offset || 0,
          options: e.options
        }
      },
      L = "select",
      j = {
        type: "literal",
        value: "select",
        description: '"select"'
      },
      M = function(e) {
        return {
          type: "selectFormat",
          options: e
        }
      },
      k = "=",
      U = {
        type: "literal",
        value: "=",
        description: '"="'
      },
      G = function(e, t) {
        return {
          type: "optionalFormatPattern",
          selector: e,
          value: t
        }
      },
      Z = "offset:",
      F = {
        type: "literal",
        value: "offset:",
        description: '"offset:"'
      },
      B = function(e) {
        return e
      },
      V = function(e, t) {
        return {
          type: "pluralFormat",
          offset: e,
          options: t
        }
      },
      H = {
        type: "other",
        description: "whitespace"
      },
      Y = /^[ \t\n\r]/,
      W = {
        type: "class",
        value: "[ \\t\\n\\r]",
        description: "[ \\t\\n\\r]"
      },
      K = {
        type: "other",
        description: "optionalWhitespace"
      },
      z = /^[0-9]/,
      q = {
        type: "class",
        value: "[0-9]",
        description: "[0-9]"
      },
      Q = /^[0-9a-f]/i,
      X = {
        type: "class",
        value: "[0-9a-f]i",
        description: "[0-9a-f]i"
      },
      J = "0",
      $ = {
        type: "literal",
        value: "0",
        description: '"0"'
      },
      ee = /^[1-9]/,
      et = {
        type: "class",
        value: "[1-9]",
        description: "[1-9]"
      },
      en = function(e) {
        return parseInt(e, 10)
      },
      er = /^[^{}\\\0-\x1F \t\n\r]/,
      ei = {
        type: "class",
        value: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]",
        description: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]"
      },
      eo = "\\\\",
      ea = {
        type: "literal",
        value: "\\\\",
        description: '"\\\\\\\\"'
      },
      es = function() {
        return "\\"
      },
      el = "\\#",
      ec = {
        type: "literal",
        value: "\\#",
        description: '"\\\\#"'
      },
      eu = function() {
        return "\\#"
      },
      ed = "\\{",
      ef = {
        type: "literal",
        value: "\\{",
        description: '"\\\\{"'
      },
      ep = function() {
        return "{"
      },
      e_ = "\\}",
      em = {
        type: "literal",
        value: "\\}",
        description: '"\\\\}"'
      },
      eh = function() {
        return "}"
      },
      eg = "\\u",
      eE = {
        type: "literal",
        value: "\\u",
        description: '"\\\\u"'
      },
      eb = function(e) {
        return String.fromCharCode(parseInt(e, 16))
      },
      ey = function(e) {
        return e.join("")
      },
      eO = 0,
      ev = 0,
      eS = 0,
      eI = {
        line: 1,
        column: 1,
        seenCR: false
      },
      eT = 0,
      eC = [],
      eA = 0;
    if ("startRule" in r) {
      if (!(r.startRule in o)) throw Error("Can't start parsing from rule \"" + r.startRule + '".');
      a = o[r.startRule]
    }

    function eN(e) {
      function n(e, n, r) {
        var i, o;
        for (i = n; i < r; i++) "\n" === (o = t.charAt(i)) ? (!e.seenCR && e.line++, e.column = 1, e.seenCR = false) : "\r" === o || "\u2028" === o || "\u2029" === o ? (e.line++, e.column = 1, e.seenCR = true) : (e.column++, e.seenCR = false)
      }
      return eS !== e && (eS > e && (eS = 0, eI = {
        line: 1,
        column: 1,
        seenCR: false
      }), n(eI, eS, e), eS = e), eI
    }

    function eP(e) {
      eO < eT || (eO > eT && (eT = eO, eC = []), eC.push(e))
    }

    function eR(n, r, i) {
      function o(e) {
        var t = 1;
        for (e.sort(function(e, t) {
            return e.description < t.description ? false : +(e.description > t.description)
          }); t < e.length;) e[t - 1] === e[t] ? e.splice(t, 1) : t++
      }

      function a(e, t) {
        function n(e) {
          function t(e) {
            return e.charCodeAt(0).toString(16).toUpperCase()
          }
          return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(e) {
            return "\\x0" + t(e)
          }).replace(/[\x10-\x1F\x80-\xFF]/g, function(e) {
            return "\\x" + t(e)
          }).replace(/[\u0180-\u0FFF]/g, function(e) {
            return "\\u0" + t(e)
          }).replace(/[\u1080-\uFFFF]/g, function(e) {
            return "\\u" + t(e)
          })
        }
        var r, i = Array(e.length);
        for (r = 0; r < e.length; r++) i[r] = e[r].description;
        return "Expected " + (e.length > 1 ? i.slice(0, false).join(", ") + " or " + i[e.length - 1] : i[0]) + " but " + (t ? '"' + n(t) + '"' : "end of input") + " found."
      }
      var s = eN(i),
        l = i < t.length ? t.charAt(i) : null;
      return null !== r && o(r), new e(null !== n ? n : a(r, l), r, l, i, s.line, s.column)
    }

    function ew() {
      return eD()
    }

    function eD() {
      var e, t, n;
      for (e = eO, t = [], n = ex(); n !== i;) t.push(n), n = ex();
      return t !== i && (ev = e, t = s(t)), e = t
    }

    function ex() {
      var e;
      return (e = ej()) === i && (e = ek()), e
    }

    function eL() {
      var e, n, r, o, a, s;
      if (e = eO, n = [], r = eO, (o = ez()) !== i && (a = e$()) !== i && (s = ez()) !== i ? r = o = [o, a, s] : (eO = r, r = l), r !== i)
        for (; r !== i;) n.push(r), r = eO, (o = ez()) !== i && (a = e$()) !== i && (s = ez()) !== i ? r = o = [o, a, s] : (eO = r, r = l);
      else n = l;
      return n !== i && (ev = e, n = c(n)), (e = n) === i && (e = eO, (n = eK()) !== i && (n = t.substring(e, eO)), e = n), e
    }

    function ej() {
      var e, t;
      return e = eO, (t = eL()) !== i && (ev = e, t = u(t)), e = t
    }

    function eM() {
      var e, n, r;
      if ((e = eX()) === i) {
        if (e = eO, n = [], d.test(t.charAt(eO)) ? (r = t.charAt(eO), eO++) : (r = i, 0 === eA && eP(f)), r !== i)
          for (; r !== i;) n.push(r), d.test(t.charAt(eO)) ? (r = t.charAt(eO), eO++) : (r = i, 0 === eA && eP(f));
        else n = l;
        n !== i && (n = t.substring(e, eO)), e = n
      }
      return e
    }

    function ek() {
      var e, n, r, o, a, s, c;
      return e = eO, 123 === t.charCodeAt(eO) ? (n = p, eO++) : (n = i, 0 === eA && eP(_)), n !== i && ez() !== i && (r = eM()) !== i && ez() !== i ? (o = eO, 44 === t.charCodeAt(eO) ? (a = h, eO++) : (a = i, 0 === eA && eP(g)), a !== i && (s = ez()) !== i && (c = eU()) !== i ? o = a = [a, s, c] : (eO = o, o = l), o === i && (o = m), o !== i && (a = ez()) !== i ? (125 === t.charCodeAt(eO) ? (s = E, eO++) : (s = i, 0 === eA && eP(b)), s !== i ? (ev = e, e = n = y(r, o)) : (eO = e, e = l)) : (eO = e, e = l)) : (eO = e, e = l), e
    }

    function eU() {
      var e;
      return (e = eG()) === i && (e = eZ()) === i && (e = eF()) === i && (e = eB()), e
    }

    function eG() {
      var e, n, r, o, a, s;
      return e = eO, t.substr(eO, 6) === O ? (n = O, eO += 6) : (n = i, 0 === eA && eP(v)), n === i && (t.substr(eO, 4) === S ? (n = S, eO += 4) : (n = i, 0 === eA && eP(I)), n === i && (t.substr(eO, 4) === T ? (n = T, eO += 4) : (n = i, 0 === eA && eP(C)))), n !== i && ez() !== i ? (r = eO, 44 === t.charCodeAt(eO) ? (o = h, eO++) : (o = i, 0 === eA && eP(g)), o !== i && (a = ez()) !== i && (s = e$()) !== i ? r = o = [o, a, s] : (eO = r, r = l), r === i && (r = m), r !== i ? (ev = e, e = n = A(n, r)) : (eO = e, e = l)) : (eO = e, e = l), e
    }

    function eZ() {
      var e, n, r, o;
      return e = eO, t.substr(eO, 6) === N ? (n = N, eO += 6) : (n = i, 0 === eA && eP(P)), n !== i && ez() !== i ? (44 === t.charCodeAt(eO) ? (r = h, eO++) : (r = i, 0 === eA && eP(g)), r !== i && ez() !== i && (o = eW()) !== i ? (ev = e, e = n = R(o)) : (eO = e, e = l)) : (eO = e, e = l), e
    }

    function eF() {
      var e, n, r, o;
      return e = eO, t.substr(eO, 13) === w ? (n = w, eO += 13) : (n = i, 0 === eA && eP(D)), n !== i && ez() !== i ? (44 === t.charCodeAt(eO) ? (r = h, eO++) : (r = i, 0 === eA && eP(g)), r !== i && ez() !== i && (o = eW()) !== i ? (ev = e, e = n = x(o)) : (eO = e, e = l)) : (eO = e, e = l), e
    }

    function eB() {
      var e, n, r, o, a;
      if (e = eO, t.substr(eO, 6) === L ? (n = L, eO += 6) : (n = i, 0 === eA && eP(j)), n !== i)
        if (ez() !== i)
          if (44 === t.charCodeAt(eO) ? (r = h, eO++) : (r = i, 0 === eA && eP(g)), r !== i)
            if (ez() !== i) {
              if (o = [], (a = eH()) !== i)
                for (; a !== i;) o.push(a), a = eH();
              else o = l;
              o !== i ? (ev = e, e = n = M(o)) : (eO = e, e = l)
            } else eO = e, e = l;
      else eO = e, e = l;
      else eO = e, e = l;
      else eO = e, e = l;
      return e
    }

    function eV() {
      var e, n, r, o;
      return e = eO, n = eO, 61 === t.charCodeAt(eO) ? (r = k, eO++) : (r = i, 0 === eA && eP(U)), r !== i && (o = eX()) !== i ? n = r = [r, o] : (eO = n, n = l), n !== i && (n = t.substring(e, eO)), (e = n) === i && (e = e$()), e
    }

    function eH() {
      var e, n, r, o, a, s;
      return e = eO, (n = ez()) !== i && (r = eV()) !== i && ez() !== i ? (123 === t.charCodeAt(eO) ? (o = p, eO++) : (o = i, 0 === eA && eP(_)), o !== i && ez() !== i && (a = eD()) !== i && ez() !== i ? (125 === t.charCodeAt(eO) ? (s = E, eO++) : (s = i, 0 === eA && eP(b)), s !== i ? (ev = e, e = n = G(r, a)) : (eO = e, e = l)) : (eO = e, e = l)) : (eO = e, e = l), e
    }

    function eY() {
      var e, n, r;
      return e = eO, t.substr(eO, 7) === Z ? (n = Z, eO += 7) : (n = i, 0 === eA && eP(F)), n !== i && ez() !== i && (r = eX()) !== i ? (ev = e, e = n = B(r)) : (eO = e, e = l), e
    }

    function eW() {
      var e, t, n, r;
      if (e = eO, (t = eY()) === i && (t = m), t !== i)
        if (ez() !== i) {
          if (n = [], (r = eH()) !== i)
            for (; r !== i;) n.push(r), r = eH();
          else n = l;
          n !== i ? (ev = e, e = t = V(t, n)) : (eO = e, e = l)
        } else eO = e, e = l;
      else eO = e, e = l;
      return e
    }

    function eK() {
      var e, n;
      if (eA++, e = [], Y.test(t.charAt(eO)) ? (n = t.charAt(eO), eO++) : (n = i, 0 === eA && eP(W)), n !== i)
        for (; n !== i;) e.push(n), Y.test(t.charAt(eO)) ? (n = t.charAt(eO), eO++) : (n = i, 0 === eA && eP(W));
      else e = l;
      return eA--, e === i && (n = i, 0 === eA && eP(H)), e
    }

    function ez() {
      var e, n, r;
      for (eA++, e = eO, n = [], r = eK(); r !== i;) n.push(r), r = eK();
      return n !== i && (n = t.substring(e, eO)), e = n, eA--, e === i && (n = i, 0 === eA && eP(K)), e
    }

    function eq() {
      var e;
      return z.test(t.charAt(eO)) ? (e = t.charAt(eO), eO++) : (e = i, 0 === eA && eP(q)), e
    }

    function eQ() {
      var e;
      return Q.test(t.charAt(eO)) ? (e = t.charAt(eO), eO++) : (e = i, 0 === eA && eP(X)), e
    }

    function eX() {
      var e, n, r, o, a, s;
      if (e = eO, 48 === t.charCodeAt(eO) ? (n = J, eO++) : (n = i, 0 === eA && eP($)), n === i) {
        if (n = eO, r = eO, ee.test(t.charAt(eO)) ? (o = t.charAt(eO), eO++) : (o = i, 0 === eA && eP(et)), o !== i) {
          for (a = [], s = eq(); s !== i;) a.push(s), s = eq();
          a !== i ? r = o = [o, a] : (eO = r, r = l)
        } else eO = r, r = l;
        r !== i && (r = t.substring(n, eO)), n = r
      }
      return n !== i && (ev = e, n = en(n)), e = n
    }

    function eJ() {
      var e, n, r, o, a, s, c, u;
      return er.test(t.charAt(eO)) ? (e = t.charAt(eO), eO++) : (e = i, 0 === eA && eP(ei)), e === i && (e = eO, t.substr(eO, 2) === eo ? (n = eo, eO += 2) : (n = i, 0 === eA && eP(ea)), n !== i && (ev = e, n = es()), (e = n) === i && (e = eO, t.substr(eO, 2) === el ? (n = el, eO += 2) : (n = i, 0 === eA && eP(ec)), n !== i && (ev = e, n = eu()), (e = n) === i && (e = eO, t.substr(eO, 2) === ed ? (n = ed, eO += 2) : (n = i, 0 === eA && eP(ef)), n !== i && (ev = e, n = ep()), (e = n) === i && (e = eO, t.substr(eO, 2) === e_ ? (n = e_, eO += 2) : (n = i, 0 === eA && eP(em)), n !== i && (ev = e, n = eh()), (e = n) === i && (e = eO, t.substr(eO, 2) === eg ? (n = eg, eO += 2) : (n = i, 0 === eA && eP(eE)), n !== i ? (r = eO, o = eO, (a = eQ()) !== i && (s = eQ()) !== i && (c = eQ()) !== i && (u = eQ()) !== i ? o = a = [a, s, c, u] : (eO = o, o = l), o !== i && (o = t.substring(r, eO)), (r = o) !== i ? (ev = e, e = n = eb(r)) : (eO = e, e = l)) : (eO = e, e = l)))))), e
    }

    function e$() {
      var e, t, n;
      if (e = eO, t = [], (n = eJ()) !== i)
        for (; n !== i;) t.push(n), n = eJ();
      else t = l;
      return t !== i && (ev = e, t = ey(t)), e = t
    }
    if ((n = a()) !== i && eO === t.length) return n;
    throw n !== i && eO < t.length && eP({
      type: "end",
      description: "end of input"
    }), eR(null, eC, eT)
  }
  return function(e, t) {
    function n() {
      this.constructor = e
    }
    n.prototype = t.prototype, e.prototype = new n
  }(module, Error), {
    SyntaxError: module,
    parse: exports
  }
}()