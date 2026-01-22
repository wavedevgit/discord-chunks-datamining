/** Chunk was on web.js **/
/** chunk id: 985729, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./39139.js"), require("./916354.js");
var Chunk557939 = require("./557939.js"),
  Chunk860511 = require("./860511.js"),
  Chunk745730 = require("./745730.js"),
  Chunk230606 = require("./230606.js"),
  Chunk446474 = require("./446474.js"),
  Chunk410323 = require("./410323.js"),
  Chunk257943 = require("./257943.js"),
  Chunk39911 = require("./39911.js"),
  Chunk693655 = require("./693655.js"),
  Chunk485155 = require("./485155.js"),
  Chunk673570 = require("./673570.js"),
  Chunk174168 = require("./174168.js"),
  Chunk23277 = require("./23277.js"),
  Chunk883972 = require("./883972.js"),
  Chunk61132 = require("./61132.js"),
  Chunk339626 = require("./339626.js"),
  Chunk210140 = require("./210140.js"),
  Chunk221015 = require("./221015.js"),
  Chunk324988 = require("./324988.js"),
  Chunk101968 = require("./101968.js"),
  Chunk598349 = require("./598349.js"),
  Chunk304880 = require("./304880.js"),
  Chunk482779 = require("./482779.js"),
  Chunk231977 = require("./231977.js"),
  Chunk327036 = require("./327036.js"),
  Chunk331336 = require("./331336.js"),
  Chunk503902 = require("./503902.js"),
  Chunk627 = require("./627.js"),
  Chunk380744 = require("./380744.js"),
  Chunk953937 = require("./953937.js"),
  x = Chunk380744("iterator"),
  L = "URLSearchParams",
  j = L + "Iterator",
  M = Chunk883972.set,
  k = Chunk883972.getterFor(L),
  U = Chunk883972.getterFor(j),
  G = Chunk745730("fetch"),
  V = Chunk745730("Request"),
  F = Chunk745730("Headers"),
  B = V && V.prototype,
  H = F && F.prototype,
  Y = Chunk860511.TypeError,
  W = Chunk860511.encodeURIComponent,
  K = String.fromCharCode,
  z = Chunk230606("String", "fromCodePoint"),
  q = parseInt,
  X = Chunk410323("".charAt),
  Z = Chunk410323([].join),
  Q = Chunk410323([].push),
  $ = Chunk410323("".replace),
  J = Chunk410323([].shift),
  ee = Chunk410323([].splice),
  et = Chunk410323("".split),
  en = Chunk410323("".slice),
  er = Chunk410323(/./.exec),
  ei = /\+/g,
  ea = "�",
  es = /^[0-9a-f]+$/i,
  eo = function(e, t) {
    var n = en(e, t, t + 2);
    return er(es, n) ? q(n, 16) : NaN
  },
  el = function(e) {
    for (var t = 0, n = 128; n > 0 && (e & n) != 0; n >>= 1) t++;
    return t
  },
  ec = function(e) {
    var t = null;
    switch (e.length) {
      case 1:
        t = e[0];
        break;
      case 2:
        t = (31 & e[0]) << 6 | 63 & e[1];
        break;
      case 3:
        t = (15 & e[0]) << 12 | (63 & e[1]) << 6 | 63 & e[2];
        break;
      case 4:
        t = (7 & e[0]) << 18 | (63 & e[1]) << 12 | (63 & e[2]) << 6 | 63 & e[3]
    }
    return t > 1114111 ? null : t
  },
  eu = function(e) {
    for (var t = (e = $(e, ei, " ")).length, n = "", r = 0; r < t;) {
      var i = X(e, r);
      if ("%" === i) {
        if ("%" === X(e, r + 1) || r + 3 > t) {
          n += "%", r++;
          continue
        }
        var a = eo(e, r + 1);
        if (a != a) {
          n += i, r++;
          continue
        }
        r += 2;
        var s = el(a);
        if (0 === s) i = K(a);
        else {
          if (1 === s || s > 4) {
            n += ea, r++;
            continue
          }
          for (var o = [a], l = 1; l < s && !(++r + 3 > t) && "%" === X(e, r);) {
            var c = eo(e, r + 1);
            if (c != c) {
              r += 3;
              break
            }
            if (c > 191 || c < 128) break;
            Q(o, c), r += 2, l++
          }
          if (o.length !== s) {
            n += ea;
            continue
          }
          var u = ec(o);
          null === u ? n += ea : i = z(u)
        }
      }
      n += i, r++
    }
    return n
  },
  ed = /[!'()~]|%20/g,
  ef = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  },
  ep = function(e) {
    return ef[e]
  },
  e_ = function(e) {
    return $(W(e), ed, ep)
  },
  eh = Chunk23277(function(e, t) {
    M(this, {
      type: j,
      target: k(e).entries,
      index: 0,
      kind: t
    })
  }, L, function() {
    var e = U(this),
      t = e.target,
      n = e.index++;
    if (!t || n >= t.length) return e.target = null, R(true, true);
    var r = t[n];
    switch (e.kind) {
      case "keys":
        return R(r.key, false);
      case "values":
        return R(r.value, false)
    }
    return R([r.key, r.value], false)
  }, true),
  em = function(e) {
    this.entries = [], this.url = null, true !== e && (v(e) ? this.parseObject(e) : this.parseQuery("string" == typeof e ? "?" === X(e, 0) ? en(e, 1) : e : S(e)))
  };
em.prototype = {
  type: L,
  bindURL: function(e) {
    this.url = e, this.update()
  },
  parseObject: function(e) {
    var t, n, r, i, a, s, l, c = this.entries,
      u = N(e);
    if (u)
      for (n = (t = C(e, u)).next; !(r = o(n, t)).done;) {
        if ((s = o(a = (i = C(A(r.value))).next, i)).done || (l = o(a, i)).done || !o(a, i).done) throw new Y("Expected sequence with length 2");
        Q(c, {
          key: S(s.value),
          value: S(l.value)
        })
      } else
        for (var d in e) b(e, d) && Q(c, {
          key: d,
          value: S(e[d])
        })
  },
  parseQuery: function(e) {
    if (e)
      for (var t, n, r = this.entries, i = et(e, "&"), a = 0; a < i.length;)(t = i[a++]).length && Q(r, {
        key: eu(J(n = et(t, "="))),
        value: eu(Z(n, "="))
      })
  },
  serialize: function() {
    for (var e, t = this.entries, n = [], r = 0; r < t.length;) Q(n, e_((e = t[r++]).key) + "=" + e_(e.value));
    return Z(n, "&")
  },
  update: function() {
    this.entries.length = 0, this.parseQuery(this.url.query)
  },
  updateURL: function() {
    this.url && this.url.update()
  }
};
var eg = function() {
    g(this, eE);
    var e = arguments.length > 0 ? arguments[0] : true,
      t = M(this, new em(e));
    c || (this.size = t.entries.length)
  },
  eE = eg.prototype;
if (Chunk673570(eE, {
    append: function(e, t) {
      var n = k(this);
      w(arguments.length, 2), Q(n.entries, {
        key: S(e),
        value: S(t)
      }), !c && this.length++, n.updateURL()
    },
    delete: function(e) {
      for (var t = k(this), n = w(arguments.length, 1), r = t.entries, i = S(e), a = n < 2 ? true : arguments[1], s = true === a ? a : S(a), o = 0; o < r.length;) {
        var l = r[o];
        if (l.key === i && (true === s || l.value === s)) {
          if (ee(r, o, 1), true !== s) break
        } else o++
      }
      c || (this.size = r.length), t.updateURL()
    },
    get: function(e) {
      var t = k(this).entries;
      w(arguments.length, 1);
      for (var n = S(e), r = 0; r < t.length; r++)
        if (t[r].key === n) return t[r].value;
      return null
    },
    getAll: function(e) {
      var t = k(this).entries;
      w(arguments.length, 1);
      for (var n = S(e), r = [], i = 0; i < t.length; i++) t[i].key === n && Q(r, t[i].value);
      return r
    },
    has: function(e) {
      for (var t = k(this).entries, n = w(arguments.length, 1), r = S(e), i = n < 2 ? true : arguments[1], a = true === i ? i : S(i), s = 0; s < t.length;) {
        var o = t[s++];
        if (o.key === r && (true === a || o.value === a)) returntrue
      }
      returnfalse
    },
    set: function(e, t) {
      var n, r = k(this);
      w(arguments.length, 1);
      for (var i = r.entries, a = false, s = S(e), o = S(t), l = 0; l < i.length; l++)(n = i[l]).key === s && (a ? ee(i, l--, 1) : (a = true, n.value = o));
      a || Q(i, {
        key: s,
        value: o
      }), c || (this.size = i.length), r.updateURL()
    },
    sort: function() {
      var e = k(this);
      D(e.entries, function(e, t) {
        return e.key > t.key ? 1 : false
      }), e.updateURL()
    },
    forEach: function(e) {
      for (var t, n = k(this).entries, r = y(e, arguments.length > 1 ? arguments[1] : true), i = 0; i < n.length;) r((t = n[i++]).value, t.key, this)
    },
    keys: function() {
      return new eh(this, "keys")
    },
    values: function() {
      return new eh(this, "values")
    },
    entries: function() {
      return new eh(this, "entries")
    }
  }, {
    enumerable: true
  }), Chunk693655(eE, x, eE.entries, {
    name: "entries"
  }), Chunk693655(eE, "toString", function() {
    return k(this).serialize()
  }, {
    enumerable: true
  }), Chunk257943 && Chunk485155(eE, "size", {
    get: function() {
      return k(this).entries.length
    },
    configurable: true,
    enumerable: true
  }), Chunk174168(eg, L), Chunk557939({
    global: true,
    constructor: true,
    forced: !Chunk39911
  }, {
    URLSearchParams: eg
  }), !Chunk39911 && Chunk339626(F)) {
  var eb = Chunk410323(H.has),
    ey = Chunk410323(H.set),
    eO = function(e) {
      if (v(e)) {
        var t, n = e.body;
        if (O(n) === L) return eb(t = e.headers ? new F(e.headers) : new F, "content-type") || ey(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), I(e, {
          body: T(0, S(n)),
          headers: T(0, t)
        })
      }
      return e
    };
  if (Chunk339626(G) && Chunk557939({
      global: true,
      enumerable: true,
      dontCallGetSet: true,
      forced: true
    }, {
      fetch: function(e) {
        return G(e, arguments.length > 1 ? eO(arguments[1]) : {})
      }
    }), Chunk339626(V)) {
    var eA = function(e) {
      return g(this, B), new V(e, arguments.length > 1 ? eO(arguments[1]) : {})
    };
    B.constructor = eA, eA.prototype = B, Chunk557939({
      global: true,
      constructor: true,
      dontCallGetSet: true,
      forced: true
    }, {
      Request: eA
    })
  }
}
module.exports = {
  URLSearchParams: eg,
  getState: k
}