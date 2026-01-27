/** Chunk was on web.js **/
/** chunk id: 237479, original params: e,t (module,exports,re quire) **/
"use strict";
exports.default = function() {
  function e(e, t, n, r, i, a) {
    this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = i, this.column = a, this.name = "SyntaxError"
  }

  function t(t) {
    var n, r = arguments.length > 1 ? arguments[1] : {},
      i = {},
      a = {
        start: eP
      },
      o = eP,
      s = function(e) {
        return {
          type: "messageFormatPattern",
          elements: e
        }
      },
      l = i,
      c = function(e) {
        var t, n, r, i, a, o = "";
        for (t = 0, r = e.length; t < r; t += 1)
          for (n = 0, a = (i = e[t]).length; n < a; n += 1) o += i[n];
        return o
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
      h = null,
      m = ",",
      g = {
        type: "literal",
        value: ",",
        description: '","'
      },
      E = "}",
      y = {
        type: "literal",
        value: "}",
        description: '"}"'
      },
      b = function(e, t) {
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
      A = "date",
      I = {
        type: "literal",
        value: "date",
        description: '"date"'
      },
      S = "time",
      T = {
        type: "literal",
        value: "time",
        description: '"time"'
      },
      C = function(e, t) {
        return {
          type: e + "Format",
          style: t && t[2]
        }
      },
      N = "plural",
      w = {
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
      P = "selectordinal",
      D = {
        type: "literal",
        value: "selectordinal",
        description: '"selectordinal"'
      },
      L = function(e) {
        return {
          type: e.type,
          ordinal: true,
          offset: e.offset || 0,
          options: e.options
        }
      },
      x = "select",
      M = {
        type: "literal",
        value: "select",
        description: '"select"'
      },
      j = function(e) {
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
      F = "offset:",
      V = {
        type: "literal",
        value: "offset:",
        description: '"offset:"'
      },
      B = function(e) {
        return e
      },
      H = function(e, t) {
        return {
          type: "pluralFormat",
          offset: e,
          options: t
        }
      },
      Y = {
        type: "other",
        description: "whitespace"
      },
      W = /^[ \t\n\r]/,
      K = {
        type: "class",
        value: "[ \\t\\n\\r]",
        description: "[ \\t\\n\\r]"
      },
      z = {
        type: "other",
        description: "optionalWhitespace"
      },
      q = /^[0-9]/,
      Z = {
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
      ea = "\\\\",
      eo = {
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
      eh = {
        type: "literal",
        value: "\\}",
        description: '"\\\\}"'
      },
      em = function() {
        return "}"
      },
      eg = "\\u",
      eE = {
        type: "literal",
        value: "\\u",
        description: '"\\\\u"'
      },
      ey = function(e) {
        return String.fromCharCode(parseInt(e, 16))
      },
      eb = function(e) {
        return e.join("")
      },
      eO = 0,
      ev = 0,
      eA = 0,
      eI = {
        line: 1,
        column: 1,
        seenCR: false
      },
      eS = 0,
      eT = [],
      eC = 0;
    if ("startRule" in r) {
      if (!(r.startRule in a)) throw Error("Can't start parsing from rule \"" + r.startRule + '".');
      o = a[r.startRule]
    }

    function eN(e) {
      function n(e, n, r) {
        var i, a;
        for (i = n; i < r; i++) "\n" === (a = t.charAt(i)) ? (!e.seenCR && e.line++, e.column = 1, e.seenCR = false) : "\r" === a || "\u2028" === a || "\u2029" === a ? (e.line++, e.column = 1, e.seenCR = true) : (e.column++, e.seenCR = false)
      }
      return eA !== e && (eA > e && (eA = 0, eI = {
        line: 1,
        column: 1,
        seenCR: false
      }), n(eI, eA, e), eA = e), eI
    }

    function ew(e) {
      eO < eS || (eO > eS && (eS = eO, eT = []), eT.push(e))
    }

    function eR(n, r, i) {
      function a(e) {
        var t = 1;
        for (e.sort(function(e, t) {
            return e.description < t.description ? false : +(e.description > t.description)
          }); t < e.length;) e[t - 1] === e[t] ? e.splice(t, 1) : t++
      }

      function o(e, t) {
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
      return null !== r && a(r), new e(null !== n ? n : o(r, l), r, l, i, s.line, s.column)
    }

    function eP() {
      return eD()
    }

    function eD() {
      var e, t, n;
      for (e = eO, t = [], n = eL(); n !== i;) t.push(n), n = eL();
      return t !== i && (ev = e, t = s(t)), e = t
    }

    function eL() {
      var e;
      return (e = eM()) === i && (e = ek()), e
    }

    function ex() {
      var e, n, r, a, o, s;
      if (e = eO, n = [], r = eO, (a = eq()) !== i && (o = e$()) !== i && (s = eq()) !== i ? r = a = [a, o, s] : (eO = r, r = l), r !== i)
        for (; r !== i;) n.push(r), r = eO, (a = eq()) !== i && (o = e$()) !== i && (s = eq()) !== i ? r = a = [a, o, s] : (eO = r, r = l);
      else n = l;
      return n !== i && (ev = e, n = c(n)), (e = n) === i && (e = eO, (n = ez()) !== i && (n = t.substring(e, eO)), e = n), e
    }

    function eM() {
      var e, t;
      return e = eO, (t = ex()) !== i && (ev = e, t = u(t)), e = t
    }

    function ej() {
      var e, n, r;
      if ((e = eX()) === i) {
        if (e = eO, n = [], d.test(t.charAt(eO)) ? (r = t.charAt(eO), eO++) : (r = i, 0 === eC && ew(f)), r !== i)
          for (; r !== i;) n.push(r), d.test(t.charAt(eO)) ? (r = t.charAt(eO), eO++) : (r = i, 0 === eC && ew(f));
        else n = l;
        n !== i && (n = t.substring(e, eO)), e = n
      }
      return e
    }

    function ek() {
      var e, n, r, a, o, s, c;
      return e = eO, 123 === t.charCodeAt(eO) ? (n = p, eO++) : (n = i, 0 === eC && ew(_)), n !== i && eq() !== i && (r = ej()) !== i && eq() !== i ? (a = eO, 44 === t.charCodeAt(eO) ? (o = m, eO++) : (o = i, 0 === eC && ew(g)), o !== i && (s = eq()) !== i && (c = eU()) !== i ? a = o = [o, s, c] : (eO = a, a = l), a === i && (a = h), a !== i && (o = eq()) !== i ? (125 === t.charCodeAt(eO) ? (s = E, eO++) : (s = i, 0 === eC && ew(y)), s !== i ? (ev = e, e = n = b(r, a)) : (eO = e, e = l)) : (eO = e, e = l)) : (eO = e, e = l), e
    }

    function eU() {
      var e;
      return (e = eG()) === i && (e = eF()) === i && (e = eV()) === i && (e = eB()), e
    }

    function eG() {
      var e, n, r, a, o, s;
      return e = eO, t.substr(eO, 6) === O ? (n = O, eO += 6) : (n = i, 0 === eC && ew(v)), n === i && (t.substr(eO, 4) === A ? (n = A, eO += 4) : (n = i, 0 === eC && ew(I)), n === i && (t.substr(eO, 4) === S ? (n = S, eO += 4) : (n = i, 0 === eC && ew(T)))), n !== i && eq() !== i ? (r = eO, 44 === t.charCodeAt(eO) ? (a = m, eO++) : (a = i, 0 === eC && ew(g)), a !== i && (o = eq()) !== i && (s = e$()) !== i ? r = a = [a, o, s] : (eO = r, r = l), r === i && (r = h), r !== i ? (ev = e, e = n = C(n, r)) : (eO = e, e = l)) : (eO = e, e = l), e
    }

    function eF() {
      var e, n, r, a;
      return e = eO, t.substr(eO, 6) === N ? (n = N, eO += 6) : (n = i, 0 === eC && ew(w)), n !== i && eq() !== i ? (44 === t.charCodeAt(eO) ? (r = m, eO++) : (r = i, 0 === eC && ew(g)), r !== i && eq() !== i && (a = eK()) !== i ? (ev = e, e = n = R(a)) : (eO = e, e = l)) : (eO = e, e = l), e
    }

    function eV() {
      var e, n, r, a;
      return e = eO, t.substr(eO, 13) === P ? (n = P, eO += 13) : (n = i, 0 === eC && ew(D)), n !== i && eq() !== i ? (44 === t.charCodeAt(eO) ? (r = m, eO++) : (r = i, 0 === eC && ew(g)), r !== i && eq() !== i && (a = eK()) !== i ? (ev = e, e = n = L(a)) : (eO = e, e = l)) : (eO = e, e = l), e
    }

    function eB() {
      var e, n, r, a, o;
      if (e = eO, t.substr(eO, 6) === x ? (n = x, eO += 6) : (n = i, 0 === eC && ew(M)), n !== i)
        if (eq() !== i)
          if (44 === t.charCodeAt(eO) ? (r = m, eO++) : (r = i, 0 === eC && ew(g)), r !== i)
            if (eq() !== i) {
              if (a = [], (o = eY()) !== i)
                for (; o !== i;) a.push(o), o = eY();
              else a = l;
              a !== i ? (ev = e, e = n = j(a)) : (eO = e, e = l)
            } else eO = e, e = l;
      else eO = e, e = l;
      else eO = e, e = l;
      else eO = e, e = l;
      return e
    }

    function eH() {
      var e, n, r, a;
      return e = eO, n = eO, 61 === t.charCodeAt(eO) ? (r = k, eO++) : (r = i, 0 === eC && ew(U)), r !== i && (a = eX()) !== i ? n = r = [r, a] : (eO = n, n = l), n !== i && (n = t.substring(e, eO)), (e = n) === i && (e = e$()), e
    }

    function eY() {
      var e, n, r, a, o, s;
      return e = eO, (n = eq()) !== i && (r = eH()) !== i && eq() !== i ? (123 === t.charCodeAt(eO) ? (a = p, eO++) : (a = i, 0 === eC && ew(_)), a !== i && eq() !== i && (o = eD()) !== i && eq() !== i ? (125 === t.charCodeAt(eO) ? (s = E, eO++) : (s = i, 0 === eC && ew(y)), s !== i ? (ev = e, e = n = G(r, o)) : (eO = e, e = l)) : (eO = e, e = l)) : (eO = e, e = l), e
    }

    function eW() {
      var e, n, r;
      return e = eO, t.substr(eO, 7) === F ? (n = F, eO += 7) : (n = i, 0 === eC && ew(V)), n !== i && eq() !== i && (r = eX()) !== i ? (ev = e, e = n = B(r)) : (eO = e, e = l), e
    }

    function eK() {
      var e, t, n, r;
      if (e = eO, (t = eW()) === i && (t = h), t !== i)
        if (eq() !== i) {
          if (n = [], (r = eY()) !== i)
            for (; r !== i;) n.push(r), r = eY();
          else n = l;
          n !== i ? (ev = e, e = t = H(t, n)) : (eO = e, e = l)
        } else eO = e, e = l;
      else eO = e, e = l;
      return e
    }

    function ez() {
      var e, n;
      if (eC++, e = [], W.test(t.charAt(eO)) ? (n = t.charAt(eO), eO++) : (n = i, 0 === eC && ew(K)), n !== i)
        for (; n !== i;) e.push(n), W.test(t.charAt(eO)) ? (n = t.charAt(eO), eO++) : (n = i, 0 === eC && ew(K));
      else e = l;
      return eC--, e === i && (n = i, 0 === eC && ew(Y)), e
    }

    function eq() {
      var e, n, r;
      for (eC++, e = eO, n = [], r = ez(); r !== i;) n.push(r), r = ez();
      return n !== i && (n = t.substring(e, eO)), e = n, eC--, e === i && (n = i, 0 === eC && ew(z)), e
    }

    function eZ() {
      var e;
      return q.test(t.charAt(eO)) ? (e = t.charAt(eO), eO++) : (e = i, 0 === eC && ew(Z)), e
    }

    function eQ() {
      var e;
      return Q.test(t.charAt(eO)) ? (e = t.charAt(eO), eO++) : (e = i, 0 === eC && ew(X)), e
    }

    function eX() {
      var e, n, r, a, o, s;
      if (e = eO, 48 === t.charCodeAt(eO) ? (n = J, eO++) : (n = i, 0 === eC && ew($)), n === i) {
        if (n = eO, r = eO, ee.test(t.charAt(eO)) ? (a = t.charAt(eO), eO++) : (a = i, 0 === eC && ew(et)), a !== i) {
          for (o = [], s = eZ(); s !== i;) o.push(s), s = eZ();
          o !== i ? r = a = [a, o] : (eO = r, r = l)
        } else eO = r, r = l;
        r !== i && (r = t.substring(n, eO)), n = r
      }
      return n !== i && (ev = e, n = en(n)), e = n
    }

    function eJ() {
      var e, n, r, a, o, s, c, u;
      return er.test(t.charAt(eO)) ? (e = t.charAt(eO), eO++) : (e = i, 0 === eC && ew(ei)), e === i && (e = eO, t.substr(eO, 2) === ea ? (n = ea, eO += 2) : (n = i, 0 === eC && ew(eo)), n !== i && (ev = e, n = es()), (e = n) === i && (e = eO, t.substr(eO, 2) === el ? (n = el, eO += 2) : (n = i, 0 === eC && ew(ec)), n !== i && (ev = e, n = eu()), (e = n) === i && (e = eO, t.substr(eO, 2) === ed ? (n = ed, eO += 2) : (n = i, 0 === eC && ew(ef)), n !== i && (ev = e, n = ep()), (e = n) === i && (e = eO, t.substr(eO, 2) === e_ ? (n = e_, eO += 2) : (n = i, 0 === eC && ew(eh)), n !== i && (ev = e, n = em()), (e = n) === i && (e = eO, t.substr(eO, 2) === eg ? (n = eg, eO += 2) : (n = i, 0 === eC && ew(eE)), n !== i ? (r = eO, a = eO, (o = eQ()) !== i && (s = eQ()) !== i && (c = eQ()) !== i && (u = eQ()) !== i ? a = o = [o, s, c, u] : (eO = a, a = l), a !== i && (a = t.substring(r, eO)), (r = a) !== i ? (ev = e, e = n = ey(r)) : (eO = e, e = l)) : (eO = e, e = l)))))), e
    }

    function e$() {
      var e, t, n;
      if (e = eO, t = [], (n = eJ()) !== i)
        for (; n !== i;) t.push(n), n = eJ();
      else t = l;
      return t !== i && (ev = e, t = eb(t)), e = t
    }
    if ((n = o()) !== i && eO === t.length) return n;
    throw n !== i && eO < t.length && ew({
      type: "end",
      description: "end of input"
    }), eR(null, eT, eS)
  }
  return function(e, t) {
    function n() {
      this.constructor = e
    }
    n.prototype = t.prototype, e.prototype = new n
  }(e, Error), {
    SyntaxError: e,
    parse: t
  }
}()