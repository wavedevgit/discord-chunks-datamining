/** Chunk was on web.js **/
/** chunk id: 294684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./366843.js"), require("./458631.js");
var Chunk98405 = require("./98405.js"),
  Chunk127849 = require("./127849.js"),
  Chunk242606 = require("./242606.js"),
  Chunk154028 = require("./154028.js"),
  Chunk580983 = require("./580983.js"),
  Chunk46015 = require("./46015.js"),
  Chunk507604 = require("./507604.js"),
  Chunk394227 = require("./394227.js"),
  Chunk556585 = require("./556585.js"),
  Chunk573078 = require("./573078.js"),
  Chunk477732 = require("./477732.js"),
  Chunk25124 = require("./25124.js"),
  Chunk280481 = require("./280481.js"),
  Chunk199838 = require("./199838.js"),
  Chunk170322 = require("./170322.js"),
  Chunk880181 = require("./880181.js"),
  Chunk77025 = require("./77025.js"),
  Chunk48657 = require("./48657.js"),
  Chunk214027 = require("./214027.js"),
  Chunk179122 = require("./179122.js"),
  Chunk434431 = require("./434431.js"),
  Chunk382698 = require("./382698.js"),
  Chunk713411 = require("./713411.js"),
  Chunk530575 = require("./530575.js"),
  Chunk533610 = require("./533610.js"),
  Chunk800054 = require("./800054.js"),
  Chunk682564 = require("./682564.js"),
  Chunk338045 = require("./338045.js"),
  Chunk751736 = require("./751736.js"),
  Chunk992914 = require("./992914.js"),
  x = Chunk751736("iterator"),
  L = "URLSearchParams",
  j = L + "Iterator",
  M = Chunk199838.set,
  k = Chunk199838.getterFor(L),
  U = Chunk199838.getterFor(j),
  G = Chunk242606("fetch"),
  Z = Chunk242606("Request"),
  F = Chunk242606("Headers"),
  B = Z && Z.prototype,
  V = F && F.prototype,
  H = Chunk127849.TypeError,
  Y = Chunk127849.encodeURIComponent,
  W = String.fromCharCode,
  K = Chunk154028("String", "fromCodePoint"),
  z = parseInt,
  q = Chunk46015("".charAt),
  Q = Chunk46015([].join),
  X = Chunk46015([].push),
  J = Chunk46015("".replace),
  $ = Chunk46015([].shift),
  ee = Chunk46015([].splice),
  et = Chunk46015("".split),
  en = Chunk46015("".slice),
  er = Chunk46015(/./.exec),
  ei = /\+/g,
  eo = "�",
  ea = /^[0-9a-f]+$/i,
  es = function(e, t) {
    var n = en(e, t, t + 2);
    return er(ea, n) ? z(n, 16) : NaN
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
    for (var t = (e = J(e, ei, " ")).length, n = "", r = 0; r < t;) {
      var i = q(e, r);
      if ("%" === i) {
        if ("%" === q(e, r + 1) || r + 3 > t) {
          n += "%", r++;
          continue
        }
        var o = es(e, r + 1);
        if (o != o) {
          n += i, r++;
          continue
        }
        r += 2;
        var a = el(o);
        if (0 === a) i = W(o);
        else {
          if (1 === a || a > 4) {
            n += eo, r++;
            continue
          }
          for (var s = [o], l = 1; l < a && !(++r + 3 > t) && "%" === q(e, r);) {
            var c = es(e, r + 1);
            if (c != c) {
              r += 3;
              break
            }
            if (c > 191 || c < 128) break;
            X(s, c), r += 2, l++
          }
          if (s.length !== a) {
            n += eo;
            continue
          }
          var u = ec(s);
          null === u ? n += eo : i = K(u)
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
    return J(Y(e), ed, ep)
  },
  em = Chunk280481(function(e, t) {
    M(this, {
      type: j,
      target: k(e).entries,
      index: 0,
      kind: t
    })
  }, L, function() {
    var e = U(this),
      t = module.target,
      n = module.index++;
    if (!exports || require >= exports.length) return module.target = null, Chunk682564(true, true);
    var r = exports[require];
    switch (module.kind) {
      case "keys":
        return Chunk682564(Chunk98405.key, false);
      case "values":
        return Chunk682564(Chunk98405.value, false)
    }
    return Chunk682564([Chunk98405.key, Chunk98405.value], false)
  }, true),
  eh = function(e) {
    this.entries = [], this.url = null, true !== e && (S(e) ? this.parseObject(e) : this.parseQuery("string" == typeof e ? "?" === q(e, 0) ? en(e, 1) : e : I(e)))
  };
eh.prototype = {
  type: L,
  bindURL: function(e) {
    this.url = e, this.update()
  },
  parseObject: function(e) {
    var t, n, r, i, o, a, l, c = this.entries,
      u = N(e);
    if (u)
      for (n = (t = A(e, u)).next; !(r = s(n, t)).done;) {
        if ((a = s(o = (i = A(v(r.value))).next, i)).done || (l = s(o, i)).done || !s(o, i).done) throw new H("Expected sequence with length 2");
        X(c, {
          key: I(a.value),
          value: I(l.value)
        })
      } else
        for (var d in e) b(e, d) && X(c, {
          key: d,
          value: I(e[d])
        })
  },
  parseQuery: function(e) {
    if (e)
      for (var t, n, r = this.entries, i = et(e, "&"), o = 0; o < i.length;)(t = i[o++]).length && X(r, {
        key: eu($(n = et(t, "="))),
        value: eu(Q(n, "="))
      })
  },
  serialize: function() {
    for (var e, t = this.entries, n = [], r = 0; Chunk98405 < exports.length;) X(require, e_((e = exports[Chunk98405++]).key) + "=" + e_(module.value));
    return Q(require, "&")
  },
  update: function() {
    this.entries.length = 0, this.parseQuery(this.url.query)
  },
  updateURL: function() {
    this.url && this.url.update()
  }
};
var eg = function() {
    Chunk170322(this, eE);
    var e = arguments.length > 0 ? arguments[0] : true,
      t = M(this, new eh(module));
    Chunk507604 || (this.size = exports.entries.length)
  },
  eE = eg.prototype;
if (Chunk477732(eE, {
    append: function(e, t) {
      var n = k(this);
      R(arguments.length, 2), X(n.entries, {
        key: I(e),
        value: I(t)
      }), !c && this.length++, n.updateURL()
    },
    delete: function(e) {
      for (var t = k(this), n = R(arguments.length, 1), r = t.entries, i = I(e), o = n < 2 ? true : arguments[1], a = true === o ? o : I(o), s = 0; s < r.length;) {
        var l = r[s];
        if (l.key === i && (true === a || l.value === a)) {
          if (ee(r, s, 1), true !== a) break
        } else s++
      }
      c || (this.size = r.length), t.updateURL()
    },
    get: function(e) {
      var t = k(this).entries;
      R(arguments.length, 1);
      for (var n = I(e), r = 0; r < t.length; r++)
        if (t[r].key === n) return t[r].value;
      return null
    },
    getAll: function(e) {
      var t = k(this).entries;
      R(arguments.length, 1);
      for (var n = I(e), r = [], i = 0; i < t.length; i++) t[i].key === n && X(r, t[i].value);
      return r
    },
    has: function(e) {
      for (var t = k(this).entries, n = R(arguments.length, 1), r = I(e), i = n < 2 ? true : arguments[1], o = true === i ? i : I(i), a = 0; a < t.length;) {
        var s = t[a++];
        if (s.key === r && (true === o || s.value === o)) returntrue
      }
      returnfalse
    },
    set: function(e, t) {
      var n, r = k(this);
      R(arguments.length, 1);
      for (var i = r.entries, o = false, a = I(e), s = I(t), l = 0; l < i.length; l++)(n = i[l]).key === a && (o ? ee(i, l--, 1) : (o = true, n.value = s));
      o || X(i, {
        key: a,
        value: s
      }), c || (this.size = i.length), r.updateURL()
    },
    sort: function() {
      var e = k(this);
      Chunk992914(module.entries, function(e, t) {
        return e.key > t.key ? 1 : false
      }), module.updateURL()
    },
    forEach: function(e) {
      for (var t, n = k(this).entries, r = y(e, arguments.length > 1 ? arguments[1] : true), i = 0; i < n.length;) r((t = n[i++]).value, t.key, this)
    },
    keys: function() {
      return new em(this, "keys")
    },
    values: function() {
      return new em(this, "values")
    },
    entries: function() {
      return new em(this, "entries")
    }
  }, {
    enumerable: true
  }), Chunk556585(eE, x, eE.entries, {
    name: "entries"
  }), Chunk556585(eE, "toString", function() {
    return k(this).serialize()
  }, {
    enumerable: true
  }), Chunk507604 && Chunk573078(eE, "size", {
    get: function() {
      return k(this).entries.length
    },
    configurable: true,
    enumerable: true
  }), Chunk25124(eg, L), Chunk98405({
    global: true,
    constructor: true,
    forced: !Chunk394227
  }, {
    URLSearchParams: eg
  }), !Chunk394227 && Chunk880181(F)) {
  var eb = Chunk46015(V.has),
    ey = Chunk46015(V.set),
    eO = function(e) {
      if (S(e)) {
        var t, n = e.body;
        if (O(n) === L) return eb(t = e.headers ? new F(e.headers) : new F, "content-type") || ey(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), T(e, {
          body: C(0, I(n)),
          headers: C(0, t)
        })
      }
      return e
    };
  if (Chunk880181(G) && Chunk98405({
      global: true,
      enumerable: true,
      dontCallGetSet: true,
      forced: true
    }, {
      fetch: function(e) {
        return G(e, arguments.length > 1 ? eO(arguments[1]) : {})
      }
    }), Chunk880181(Z)) {
    var ev = function(e) {
      return g(this, B), new Z(e, arguments.length > 1 ? eO(arguments[1]) : {})
    };
    B.constructor = ev, ev.prototype = B, Chunk98405({
      global: true,
      constructor: true,
      dontCallGetSet: true,
      forced: true
    }, {
      Request: ev
    })
  }
}
module.exports = {
  URLSearchParams: eg,
  getState: k
}